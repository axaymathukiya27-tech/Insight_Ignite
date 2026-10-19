import { logger } from "../config/logger";

export async function sendTransactionalEmail(to: string, subject: string, body: string) {
  // Phase 1 transactional email stub
  logger.info(`[EmailService] Sending email to ${to}: ${subject}`);
  return { delivered: true };
}
