// lib/labverify.ts
export interface VerificationCheck {
  id: string;
  description: string;
  pattern: string;   // regex string — compiled with flags "im"
  required: boolean;
  hint?: string;
}

export interface VerificationResult {
  check: VerificationCheck;
  passed: boolean;
}

export function verifyConfig(
  input: string,
  checks: VerificationCheck[]
): VerificationResult[] {
  return checks.map(check => {
    try {
      const regex = new RegExp(check.pattern, "im");
      return { check, passed: regex.test(input) };
    } catch {
      return { check, passed: false };
    }
  });
}

export function isVerified(results: VerificationResult[]): boolean {
  return results.every(r => !r.check.required || r.passed);
}
