export interface LeadSubmissionData {
  name: string;
  phone: string;
  email?: string;
  propertyType: '2 BHK' | '3 BHK' | 'General Enquiry';
  preferredDate?: string;
  message?: string;
  source?: string;
}

export interface LeadResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    name: string;
    propertyType: string;
    createdAt: string;
  };
  errors?: string[];
}

export async function submitLead(data: LeadSubmissionData): Promise<LeadResponse> {
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = (await response.json()) as LeadResponse;

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to submit enquiry. Please check form fields.',
        errors: result.errors,
      };
    }

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: 'Network connectivity error. Please try again or contact our sales office directly.',
      errors: [error.message || 'Network error'],
    };
  }
}
