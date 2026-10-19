export interface ApiResponse<T> {
  data?: T;
  error?: {
    code: string;
    message: string;
    requestId?: string;
  };
}

export interface HealthStatus {
  status: string;
  service: string;
  timestamp: string;
  uptimeSeconds: number;
  environment: string;
}
