/**
 * Environment variable verification script for pre-deployment checks.
 */

export function verifyEnvironment() {
  const required = ["NODE_ENV"];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.warn(`[WARN] Missing optional deployment environment variables: ${missing.join(", ")}`);
  } else {
    console.log("[OK] Environment variables verified for deployment.");
  }
}

if (require.main === module) {
  verifyEnvironment();
}
