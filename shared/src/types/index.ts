import { UserRole } from "../enums";

export interface ApiSuccessResponse<T = unknown> {
  success: true;
  data: T;
  message?: string;
  requestId?: string;
}

export interface ApiErrorDetail {
  code: string;
  message: string;
  requestId?: string;
  details?: unknown;
}

export interface ApiErrorResponse {
  success: false;
  error: ApiErrorDetail;
}

export type ApiResponse<T = unknown> = ApiSuccessResponse<T> | ApiErrorResponse;

export interface HealthStatus {
  status: "ok" | "degraded" | "down";
  service: string;
  timestamp: string;
  uptimeSeconds: number;
  environment: string;
  version: string;
}

export interface DatabaseReadinessStatus {
  status: "ready" | "unready";
  database: "connected" | "disconnected";
  latencyMs?: number;
  timestamp: string;
  error?: string;
}

export interface SafeUser {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  emailVerified: string | null;
  isActive: boolean;
  avatarUrl?: string | null;
  createdAt: string;
}

export interface AuthSessionData {
  user: SafeUser;
}

export interface LessonSummary {
  id: string;
  title: string;
  slug?: string | null;
  description?: string | null;
  orderIndex: number;
  durationMin?: number | null;
  isFreePreview: boolean;
}

export interface PublicCourseSummary {
  id: string;
  slug: string;
  title: string;
  subtitle?: string | null;
  description: string;
  instructor: string;
  thumbnailUrl?: string | null;
  lessonCount: number;
  createdAt: string;
}

export interface PublicCourseDetail extends PublicCourseSummary {
  lessons: LessonSummary[];
}

export interface AdminCourseSummary {
  id: string;
  slug: string;
  title: string;
  subtitle?: string | null;
  description: string;
  instructor: string;
  status: string;
  thumbnailUrl?: string | null;
  lessonCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface AdminCourseDetail extends AdminCourseSummary {
  lessons: LessonSummary[];
}
