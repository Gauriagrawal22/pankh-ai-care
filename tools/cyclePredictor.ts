/**
 * Menstrual Cycle Predictor Tool
 * Calculates next period date, cycle length, and fertile window
 */

export interface CyclePrediction {
  nextPeriod: string;
  cycleLength: number;
  fertileWindow: {
    start: string;
    end: string;
  };
}

/**
 * Predicts the next menstrual cycle details
 * @param lastPeriodDate - The start date of the last period (YYYY-MM-DD format)
 * @param cycleLength - Average cycle length in days (typically 21-35 days, default 28)
 * @returns Prediction object with next period date and fertile window
 */
export function predictCycle(
  lastPeriodDate: string,
  cycleLength: number = 28
): CyclePrediction {
  // Parse the last period date
  const lastPeriod = new Date(lastPeriodDate);
  
  // Validate inputs
  if (isNaN(lastPeriod.getTime())) {
    throw new Error("Invalid date format. Please use YYYY-MM-DD format.");
  }
  
  if (cycleLength < 21 || cycleLength > 45) {
    throw new Error("Cycle length should be between 21 and 45 days.");
  }
  
  // Calculate next period date (add cycle length to last period date)
  const nextPeriod = new Date(lastPeriod);
  nextPeriod.setDate(nextPeriod.getDate() + cycleLength);
  
  // Calculate ovulation date (typically 14 days before next period)
  const ovulationDate = new Date(nextPeriod);
  ovulationDate.setDate(ovulationDate.getDate() - 14);
  
  // Calculate fertile window (5 days before ovulation to 1 day after)
  const fertileStart = new Date(ovulationDate);
  fertileStart.setDate(fertileStart.getDate() - 5);
  
  const fertileEnd = new Date(ovulationDate);
  fertileEnd.setDate(fertileEnd.getDate() + 1);
  
  // Format dates as YYYY-MM-DD
  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };
  
  return {
    nextPeriod: formatDate(nextPeriod),
    cycleLength,
    fertileWindow: {
      start: formatDate(fertileStart),
      end: formatDate(fertileEnd),
    },
  };
}

/**
 * Helper function to format prediction results for display
 */
export function formatPrediction(prediction: CyclePrediction): string {
  return `
Based on your cycle information:
- Next Period Expected: ${prediction.nextPeriod}
- Cycle Length: ${prediction.cycleLength} days
- Fertile Window: ${prediction.fertileWindow.start} to ${prediction.fertileWindow.end}

Note: These predictions are estimates based on average cycle patterns. Individual cycles can vary, and this should not be used as the sole method for contraception or fertility planning.
  `.trim();
}
