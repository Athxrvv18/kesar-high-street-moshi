import mongoose from 'mongoose';
import { config } from './index';
import { logger } from '../utils/logger';

let isConnected = false;

export const connectDatabase = async (): Promise<boolean> => {
  if (isConnected) {
    return true;
  }

  try {
    const conn = await mongoose.connect(config.mongoUri, {
      serverSelectionTimeoutMS: 3000,
    });
    isConnected = !!conn.connections[0].readyState;
    logger.info(`MongoDB connected successfully to ${conn.connection.host}`);
    return true;
  } catch (error: any) {
    logger.warn(`MongoDB connection notice: ${error.message}. Running with in-memory persistence fallback if MongoDB is offline.`);
    return false;
  }
};

export const getDbStatus = (): boolean => {
  return isConnected || mongoose.connection.readyState === 1;
};
