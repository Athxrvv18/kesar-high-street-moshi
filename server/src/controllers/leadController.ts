import { Request, Response } from 'express';
import { Lead } from '../models/Lead';
import { getDbStatus } from '../config/db';
import { logger } from '../utils/logger';

// In-memory fallback cache when MongoDB is offline
interface StoredLead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  propertyType: string;
  preferredDate?: string;
  message?: string;
  source: string;
  status: string;
  createdAt: Date;
}
const fallbackLeads: StoredLead[] = [];

export const createLead = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, phone, email, propertyType, preferredDate, message, source } = req.body;

    const errors: string[] = [];

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      errors.push('Full name is required');
    }

    const indianPhoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
    const cleanPhone = phone ? String(phone).replace(/[\s-]/g, '') : '';
    if (!cleanPhone || !indianPhoneRegex.test(cleanPhone)) {
      errors.push('Please enter a valid 10-digit Indian mobile number');
    }

    if (email && typeof email === 'string' && email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        errors.push('Please enter a valid email address');
      }
    }

    const validPropertyTypes = ['2 BHK', '3 BHK', 'General Enquiry'];
    const chosenType = validPropertyTypes.includes(propertyType) ? propertyType : 'General Enquiry';

    if (errors.length > 0) {
      res.status(400).json({
        success: false,
        message: 'Validation failed for lead submission',
        errors,
      });
      return;
    }

    const leadData = {
      name: name.trim(),
      phone: cleanPhone,
      email: email ? email.trim().toLowerCase() : undefined,
      propertyType: chosenType,
      preferredDate: preferredDate ? String(preferredDate).trim() : undefined,
      message: message ? String(message).trim() : undefined,
      source: source || 'Website Landing Page',
      status: 'new' as const,
    };

    // If MongoDB is connected, save via Mongoose
    if (getDbStatus()) {
      const newLead = await Lead.create(leadData);
      logger.info(`New lead saved to MongoDB: ${newLead.name} (${newLead.phone})`);
      res.status(201).json({
        success: true,
        message: 'Your site visit request has been received. Our sales advisor will reach out shortly.',
        data: {
          id: newLead._id,
          name: newLead.name,
          propertyType: newLead.propertyType,
          createdAt: newLead.createdAt,
        },
      });
      return;
    }

    // Fallback: Store in memory cache
    const fallbackId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const savedFallback: StoredLead = {
      id: fallbackId,
      ...leadData,
      createdAt: new Date(),
    };
    fallbackLeads.push(savedFallback);
    logger.info(`Lead saved to in-memory store (DB offline): ${savedFallback.name} (${savedFallback.phone})`);

    res.status(201).json({
      success: true,
      message: 'Your site visit request has been received. Our sales advisor will reach out shortly.',
      data: {
        id: savedFallback.id,
        name: savedFallback.name,
        propertyType: savedFallback.propertyType,
        createdAt: savedFallback.createdAt,
      },
    });
  } catch (error: any) {
    logger.error(`Error saving lead: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'An error occurred while submitting your enquiry. Please try again or call our sales desk directly.',
    });
  }
};

export const getLeads = async (_req: Request, res: Response): Promise<void> => {
  try {
    if (getDbStatus()) {
      const leads = await Lead.find().sort({ createdAt: -1 }).limit(50);
      res.status(200).json({
        success: true,
        count: leads.length,
        data: leads,
      });
      return;
    }

    res.status(200).json({
      success: true,
      count: fallbackLeads.length,
      data: fallbackLeads,
    });
  } catch (error: any) {
    logger.error(`Error fetching leads: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve leads',
    });
  }
};
