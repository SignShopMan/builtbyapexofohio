/**
 * Payment calculator inputs.
 *
 * ⚠ The APRs below are ILLUSTRATIVE placeholders so the calculator has
 * something to show. Hearth does not publish rates; actual APRs come from
 * Hearth's lending partners at application time and vary by applicant.
 * Update these from the Hearth dashboard's typical-rate guidance, or leave
 * them and rely on the disclaimers (which say exactly this).
 */

export interface CreditTier {
  id: 'excellent' | 'good' | 'average' | 'poor';
  label: string;
  /** FICO range shown next to the selector */
  range: string;
  /** APR (percent) per term, keyed by months */
  apr: Record<number, number>;
}

/** Loan terms offered, in months */
export const terms = [36, 60, 84] as const;

export const tiers: CreditTier[] = [
  { id: 'excellent', label: 'Excellent', range: '741+',    apr: { 36: 8.99,  60: 10.99, 84: 12.99 } },
  { id: 'good',      label: 'Good',      range: '681–740', apr: { 36: 13.99, 60: 15.99, 84: 17.99 } },
  { id: 'average',   label: 'Average',   range: '621–680', apr: { 36: 18.99, 60: 20.99, 84: 23.99 } },
  { id: 'poor',      label: 'Poor',      range: '≤620',    apr: { 36: 24.99, 60: 27.99, 84: 29.99 } },
];

/** 0% promotional plan — the headline offer on Facebook. Set enabled:false to hide. */
export const promo = {
  enabled: true,
  months: 12,
  label: '0% promotional APR',
};

export const defaults = {
  tier: 'good' as CreditTier['id'],
  cost: 10000,
  min: 1000,
  max: 100000,
};

/** Standard amortized payment. r = monthly rate; 0% → straight division. */
export function monthlyPayment(principal: number, aprPercent: number, months: number): number {
  if (aprPercent <= 0) return principal / months;
  const r = aprPercent / 100 / 12;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
}
