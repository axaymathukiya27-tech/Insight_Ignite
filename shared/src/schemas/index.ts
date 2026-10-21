import { z } from "zod";

/**
 * Shared runtime validation schemas and input types.
 */

export const ContactInquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please provide a valid email address").max(255),
  phone: z.string().trim().max(20).optional().nullable(),
  organization: z.string().trim().max(100).optional().nullable(),
  inquiryType: z.enum(["parenting", "adolescent", "schools", "corporate", "general"]).default("general"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

export type ContactInquiryInput = z.infer<typeof ContactInquirySchema>;

export const RegisterUserInputSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email address").toLowerCase(),
  role: z.enum(["LEARNER", "PARENT", "TEACHER"]).default("LEARNER"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  agreeTerms: z.boolean().optional(),
});

export type RegisterUserInput = z.infer<typeof RegisterUserInputSchema>;

export const LoginUserInputSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address").toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

export type LoginUserInput = z.infer<typeof LoginUserInputSchema>;

export const VerifyEmailInputSchema = z.object({
  token: z.string().trim().min(1, "Verification token is required"),
});

export type VerifyEmailInput = z.infer<typeof VerifyEmailInputSchema>;

export const ResendVerificationInputSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address").toLowerCase(),
});

export type ResendVerificationInput = z.infer<typeof ResendVerificationInputSchema>;

export const ForgotPasswordInputSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address").toLowerCase(),
});

export type ForgotPasswordInput = z.infer<typeof ForgotPasswordInputSchema>;

export const ResetPasswordInputSchema = z.object({
  token: z.string().trim().min(1, "Reset token is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type ResetPasswordInput = z.infer<typeof ResetPasswordInputSchema>;

export const PaginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
});

export type PaginationQuery = z.infer<typeof PaginationQuerySchema>;

export const CourseStatusEnumSchema = z.enum(["DRAFT", "DEVELOPMENT_PREVIEW", "PUBLISHED", "ARCHIVED"]);
export type CourseStatusType = z.infer<typeof CourseStatusEnumSchema>;

export const CreateCourseInputSchema = z.object({
  title: z.string().trim().min(3, "Title must be at least 3 characters").max(150),
  slug: z
    .string()
    .trim()
    .min(3, "Slug must be at least 3 characters")
    .max(100)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must contain only lowercase letters, numbers, and single hyphens"),
  subtitle: z.string().trim().max(255).optional().nullable(),
  description: z.string().trim().min(10, "Description must be at least 10 characters").max(5000),
  instructor: z.string().trim().min(2, "Instructor name must be at least 2 characters").max(100).default("Dr. Nivedita Ganguli"),
  status: CourseStatusEnumSchema.default("DRAFT"),
  thumbnailUrl: z.string().trim().url("Invalid image URL").optional().nullable(),
});

export type CreateCourseInput = z.infer<typeof CreateCourseInputSchema>;

export const UpdateCourseInputSchema = CreateCourseInputSchema.partial();
export type UpdateCourseInput = z.infer<typeof UpdateCourseInputSchema>;
