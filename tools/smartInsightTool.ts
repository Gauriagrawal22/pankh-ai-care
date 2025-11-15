/**
 * Smart Insight Tool
 * Generates personalized insights based on multiple health data points
 */

export interface SmartInsightData {
  sleepHours?: number;
  stressLevel?: string; // "low", "moderate", "high"
  cyclePhase?: string; // "menstrual", "follicular", "ovulation", "luteal"
  symptoms?: string[];
}

export interface SmartInsight {
  overallAssessment: string;
  keyInsights: string[];
  recommendations: string[];
  connections: string[];
  priority: "low" | "moderate" | "high";
}

/**
 * Generates smart insights by analyzing multiple health data points together
 * @param data - Health data including sleep, stress, cycle phase, and symptoms
 * @returns Personalized insights with connections and recommendations
 */
export function generateSmartInsight(data: SmartInsightData): SmartInsight {
  const insights: string[] = [];
  const recommendations: string[] = [];
  const connections: string[] = [];
  let priority: "low" | "moderate" | "high" = "low";
  
  const sleepHours = data.sleepHours || 0;
  const stressLevel = data.stressLevel?.toLowerCase() || "unknown";
  const cyclePhase = data.cyclePhase?.toLowerCase() || "unknown";
  const symptoms = data.symptoms || [];
  
  // Analyze sleep patterns
  if (sleepHours > 0) {
    if (sleepHours < 6) {
      insights.push("Your sleep duration is below the recommended 7-9 hours for women.");
      recommendations.push("Aim for 7-9 hours of sleep to support hormonal balance and overall health.");
      priority = "high";
    } else if (sleepHours >= 6 && sleepHours < 7) {
      insights.push("You're getting slightly less sleep than optimal.");
      recommendations.push("Try to add 30-60 minutes to your sleep routine for better recovery.");
      if (priority === "low") priority = "moderate";
    } else if (sleepHours >= 7 && sleepHours <= 9) {
      insights.push("Your sleep duration is within the healthy range (7-9 hours).");
    } else if (sleepHours > 9) {
      insights.push("You're sleeping more than 9 hours, which may indicate fatigue or health concerns.");
      recommendations.push("If excessive sleep is new, consider consulting a healthcare provider.");
      if (priority === "low") priority = "moderate";
    }
  }
  
  // Analyze stress level
  if (stressLevel === "high") {
    insights.push("High stress levels can significantly impact your menstrual cycle and overall health.");
    recommendations.push("Incorporate stress-reduction techniques: meditation, deep breathing, or gentle exercise.");
    recommendations.push("Consider speaking with a mental health professional if stress feels overwhelming.");
    priority = "high";
  } else if (stressLevel === "moderate") {
    insights.push("Moderate stress is manageable but worth addressing to prevent escalation.");
    recommendations.push("Regular exercise, adequate sleep, and mindfulness can help manage stress.");
    if (priority === "low") priority = "moderate";
  } else if (stressLevel === "low") {
    insights.push("Your stress levels appear well-managed.");
  }
  
  // Analyze cycle phase correlations
  if (cyclePhase === "menstrual") {
    insights.push("You're in the menstrual phase - a time when energy and mood are naturally lower.");
    
    if (sleepHours < 7) {
      connections.push("Low sleep during menstruation can worsen cramps and fatigue. Your body needs extra rest during this phase.");
      recommendations.push("Prioritize 8-9 hours of sleep during your period to support recovery.");
    }
    
    if (stressLevel === "high") {
      connections.push("High stress during menstruation can intensify period symptoms and prolong bleeding.");
      recommendations.push("Practice gentle self-care and avoid overcommitting during your period.");
    }
    
    if (symptoms.some(s => s.toLowerCase().includes("cramp") || s.toLowerCase().includes("pain"))) {
      connections.push("Menstrual cramps combined with poor sleep or high stress create a challenging cycle.");
      recommendations.push("Heat therapy, magnesium supplements, and anti-inflammatory foods can help.");
    }
  } else if (cyclePhase === "follicular") {
    insights.push("You're in the follicular phase - typically a time of rising energy and positive mood.");
    
    if (sleepHours < 7 || stressLevel === "high") {
      connections.push("Even during your high-energy follicular phase, insufficient sleep or high stress can limit your potential.");
      recommendations.push("This is your optimal time for productivity - ensure you're well-rested to take full advantage.");
    }
    
    if (symptoms.length > 0) {
      connections.push("Experiencing symptoms during the follicular phase may indicate hormonal imbalances.");
      recommendations.push("Track these symptoms and discuss with your healthcare provider if they persist.");
      if (priority === "low") priority = "moderate";
    }
  } else if (cyclePhase === "ovulation") {
    insights.push("You're at ovulation - your peak energy and confidence phase.");
    
    if (sleepHours < 7) {
      connections.push("While you feel energetic during ovulation, your body still needs adequate sleep for hormone production.");
      recommendations.push("Don't sacrifice sleep even when you feel your best - it supports fertility and hormone balance.");
    }
    
    if (symptoms.some(s => s.toLowerCase().includes("pain") || s.toLowerCase().includes("bloat"))) {
      insights.push("Some ovulation discomfort (mittelschmerz) is normal, but severe pain warrants medical attention.");
    }
  } else if (cyclePhase === "luteal" || cyclePhase === "premenstrual") {
    insights.push("You're in the luteal/premenstrual phase - energy naturally declines and PMS may occur.");
    
    if (sleepHours < 7) {
      connections.push("Poor sleep during the luteal phase worsens PMS symptoms like mood swings and irritability.");
      recommendations.push("Prioritize 8-9 hours of sleep in the week before your period to minimize PMS.");
      priority = "high";
    }
    
    if (stressLevel === "high") {
      connections.push("High stress during the luteal phase significantly amplifies PMS and PMDD symptoms.");
      recommendations.push("Extra self-care during this phase is not optional - it's essential for your wellbeing.");
      priority = "high";
    }
    
    if (symptoms.some(s => s.toLowerCase().includes("mood") || s.toLowerCase().includes("anxiety") || s.toLowerCase().includes("irritab"))) {
      connections.push("Mood symptoms before your period are linked to progesterone levels. Sleep and stress management are crucial.");
      recommendations.push("Complex carbohydrates, magnesium, and B vitamins can help stabilize mood during this phase.");
    }
    
    if (symptoms.some(s => s.toLowerCase().includes("bloat") || s.toLowerCase().includes("cramp"))) {
      connections.push("Physical PMS symptoms often worsen with poor sleep and high stress.");
      recommendations.push("Reduce salt intake, stay hydrated, and try gentle movement to ease discomfort.");
    }
  }
  
  // Cross-analyze sleep + stress + symptoms
  if (sleepHours < 7 && stressLevel === "high") {
    connections.push("IMPORTANT: The combination of poor sleep and high stress creates a harmful cycle affecting hormones, mood, and menstrual health.");
    recommendations.push("Address both sleep and stress as priorities - they deeply influence each other and your cycle.");
    priority = "high";
  }
  
  if (symptoms.length >= 3) {
    insights.push(`You're experiencing multiple symptoms (${symptoms.length}), which suggests your body needs extra support.`);
    
    if (sleepHours < 7 || stressLevel === "high") {
      connections.push("Multiple symptoms combined with inadequate sleep or high stress indicates your body is overwhelmed.");
      recommendations.push("Consider a holistic approach: improve sleep, manage stress, optimize nutrition, and consult your healthcare provider.");
      priority = "high";
    }
  }
  
  // Analyze specific symptom patterns
  const hasPhysicalSymptoms = symptoms.some(s => 
    s.toLowerCase().includes("pain") || s.toLowerCase().includes("cramp") || 
    s.toLowerCase().includes("bloat") || s.toLowerCase().includes("heavy")
  );
  
  const hasEmotionalSymptoms = symptoms.some(s => 
    s.toLowerCase().includes("mood") || s.toLowerCase().includes("anxiety") || 
    s.toLowerCase().includes("depress") || s.toLowerCase().includes("irritab")
  );
  
  if (hasPhysicalSymptoms && hasEmotionalSymptoms) {
    connections.push("You're experiencing both physical and emotional symptoms, which is common but taxing.");
    recommendations.push("Address physical symptoms first (pain management, nutrition) to improve emotional wellbeing.");
  }
  
  // Generate overall assessment
  let overallAssessment = "";
  
  if (priority === "high") {
    overallAssessment = "⚠️ HIGH PRIORITY: Your current patterns show areas that need immediate attention. The combination of factors is creating a challenging cycle for your health. Focus on the key recommendations to break this pattern.";
  } else if (priority === "moderate") {
    overallAssessment = "⚡ MODERATE ATTENTION NEEDED: You're managing fairly well, but some adjustments could significantly improve your experience. Small changes now can prevent bigger issues later.";
  } else {
    overallAssessment = "✅ OVERALL POSITIVE: Your current patterns support good menstrual health. Continue these healthy habits and stay mindful of your body's signals.";
  }
  
  // Add default insights if none generated
  if (insights.length === 0) {
    insights.push("Insufficient data provided for comprehensive analysis.");
    recommendations.push("Track sleep, stress levels, cycle phase, and symptoms for personalized insights.");
  }
  
  if (recommendations.length === 0) {
    recommendations.push("Continue monitoring your health patterns and maintain healthy lifestyle habits.");
  }
  
  return {
    overallAssessment,
    keyInsights: insights,
    recommendations,
    connections,
    priority
  };
}

/**
 * Helper function to format smart insights for display
 */
export function formatSmartInsight(insight: SmartInsight, data: SmartInsightData): string {
  let output = "🧠 SMART HEALTH INSIGHTS\n";
  output += "=".repeat(60) + "\n\n";
  
  output += "📊 YOUR DATA:\n";
  if (data.sleepHours) output += `   Sleep: ${data.sleepHours} hours\n`;
  if (data.stressLevel) output += `   Stress Level: ${data.stressLevel}\n`;
  if (data.cyclePhase) output += `   Cycle Phase: ${data.cyclePhase}\n`;
  if (data.symptoms && data.symptoms.length > 0) {
    output += `   Symptoms: ${data.symptoms.join(", ")}\n`;
  }
  output += "\n";
  
  output += insight.overallAssessment + "\n\n";
  
  output += "💡 KEY INSIGHTS:\n";
  insight.keyInsights.forEach((item, i) => {
    output += `   ${i + 1}. ${item}\n`;
  });
  output += "\n";
  
  if (insight.connections.length > 0) {
    output += "🔗 IMPORTANT CONNECTIONS:\n";
    insight.connections.forEach(conn => {
      output += `   • ${conn}\n`;
    });
    output += "\n";
  }
  
  output += "✅ PERSONALIZED RECOMMENDATIONS:\n";
  insight.recommendations.forEach((rec, i) => {
    output += `   ${i + 1}. ${rec}\n`;
  });
  
  output += "\n" + "=".repeat(60) + "\n";
  output += "Note: These insights are based on the data provided and general patterns. For persistent concerns or severe symptoms, always consult with a healthcare provider.";
  
  return output;
}
