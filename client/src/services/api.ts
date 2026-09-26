import type { ApiResponse, LeadSubmission } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const checkServerHealth = async (): Promise<ApiResponse<{ status: string; uptime: number; timestamp: string }>> => {
  const response = await fetch(`${API_BASE_URL}/health`);
  if (!response.ok) {
    throw new Error(`Health check failed with status: ${response.status}`);
  }
  return response.json();
};

export const submitLead = async (lead: LeadSubmission): Promise<ApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(lead),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Failed to submit enquiry');
  }
  return data;
};
