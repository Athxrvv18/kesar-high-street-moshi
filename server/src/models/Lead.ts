import mongoose, { Schema, Document } from 'mongoose';

export type LeadStatus = 'new' | 'contacted' | 'site_visit' | 'converted' | 'closed';
export type PropertyType = '2 BHK' | '3 BHK' | 'General Enquiry';

export interface ILead extends Document {
  name: string;
  phone: string;
  email?: string;
  propertyType: PropertyType;
  preferredDate?: string;
  message?: string;
  source: string;
  status: LeadStatus;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^(?:\+91|91)?[6-9]\d{9}$/, 'Please provide a valid Indian phone number'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address'],
    },
    propertyType: {
      type: String,
      enum: ['2 BHK', '3 BHK', 'General Enquiry'],
      default: 'General Enquiry',
    },
    preferredDate: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
    },
    source: {
      type: String,
      default: 'Website Landing Page',
      trim: true,
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'site_visit', 'converted', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

export const Lead = mongoose.model<ILead>('Lead', LeadSchema);
