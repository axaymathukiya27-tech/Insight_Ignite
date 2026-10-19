/**
 * Shared validation schemas and contracts across frontend and backend.
 */

export interface ContactFormInput {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  inquiryType: string;
  message: string;
}

export interface RegisterUserInput {
  name: string;
  email: string;
  role: string;
  password: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}
