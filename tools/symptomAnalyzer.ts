/**
 * Symptom Analyzer Tool
 * Analyzes women's health symptoms and provides guidance
 */

export interface SymptomAnalysis {
  symptom: string;
  category: string;
  severity: "mild" | "moderate" | "severe" | "emergency";
  description: string;
  possibleCauses: string[];
  recommendations: string[];
}

export interface AnalysisResult {
  analyses: SymptomAnalysis[];
  generalAdvice: string;
  symptoms: string[];
}

/**
 * Analyzes a list of symptoms related to women's health
 * @param symptoms - Array of symptom descriptions
 * @returns Analysis result with per-symptom analysis and general advice
 */
export function analyzeSymptoms(symptoms: string[]): AnalysisResult {
  if (!symptoms || symptoms.length === 0) {
    throw new Error("Please provide at least one symptom to analyze.");
  }

  const analyses: SymptomAnalysis[] = symptoms.map((symptom) => {
    const lowerSymptom = symptom.toLowerCase();
    
    // Analyze each symptom
    if (lowerSymptom.includes("severe") || lowerSymptom.includes("heavy bleeding") || 
        lowerSymptom.includes("hemorrhag") || lowerSymptom.includes("excruciating")) {
      return {
        symptom,
        category: "Severe Symptom",
        severity: "severe",
        description: "This symptom requires prompt medical attention.",
        possibleCauses: ["May indicate a serious condition requiring professional evaluation"],
        recommendations: [
          "Seek medical attention as soon as possible",
          "Document when symptoms started and their intensity",
          "Do not delay professional consultation"
        ]
      };
    }
    
    if (lowerSymptom.includes("pain") || lowerSymptom.includes("cramp")) {
      return {
        symptom,
        category: "Pain/Discomfort",
        severity: lowerSymptom.includes("severe") || lowerSymptom.includes("intense") ? "severe" : "moderate",
        description: "Pain or cramping during menstrual cycle",
        possibleCauses: [
          "Dysmenorrhea (menstrual cramps)",
          "Endometriosis",
          "Uterine fibroids",
          "Ovarian cysts"
        ],
        recommendations: [
          "Apply heat to lower abdomen",
          "Try over-the-counter pain relievers (NSAIDs)",
          "Gentle exercise and stretching",
          "If severe or worsening, consult a healthcare provider"
        ]
      };
    }

    if (lowerSymptom.includes("irregular") || lowerSymptom.includes("missed period") || 
        lowerSymptom.includes("late period")) {
      return {
        symptom,
        category: "Cycle Irregularity",
        severity: "mild",
        description: "Variations in menstrual cycle timing",
        possibleCauses: [
          "Stress",
          "Hormonal imbalances",
          "PCOS (Polycystic Ovary Syndrome)",
          "Thyroid disorders",
          "Pregnancy",
          "Weight changes"
        ],
        recommendations: [
          "Track your cycle for 3 months",
          "Manage stress levels",
          "Maintain a healthy diet and exercise",
          "Consider pregnancy test if sexually active",
          "Consult doctor if irregularity persists"
        ]
      };
    }

    if (lowerSymptom.includes("bloat") || lowerSymptom.includes("swell")) {
      return {
        symptom,
        category: "PMS Symptom",
        severity: "mild",
        description: "Fluid retention and abdominal discomfort",
        possibleCauses: [
          "Hormonal fluctuations",
          "Premenstrual syndrome (PMS)",
          "Dietary factors"
        ],
        recommendations: [
          "Reduce salt intake",
          "Stay hydrated",
          "Avoid caffeine and alcohol",
          "Light exercise can help",
          "Consider magnesium supplements (consult doctor first)"
        ]
      };
    }

    if (lowerSymptom.includes("mood") || lowerSymptom.includes("anxiety") || 
        lowerSymptom.includes("depress") || lowerSymptom.includes("irritab")) {
      return {
        symptom,
        category: "Emotional/Psychological",
        severity: lowerSymptom.includes("severe") ? "moderate" : "mild",
        description: "Mood changes related to hormonal fluctuations",
        possibleCauses: [
          "PMS (Premenstrual Syndrome)",
          "PMDD (Premenstrual Dysphoric Disorder)",
          "Hormonal changes",
          "Stress"
        ],
        recommendations: [
          "Regular exercise",
          "Adequate sleep (7-9 hours)",
          "Stress management techniques",
          "Balanced diet rich in omega-3s",
          "Consider talking to a mental health professional if severe"
        ]
      };
    }

    if (lowerSymptom.includes("fatigue") || lowerSymptom.includes("tired") || 
        lowerSymptom.includes("exhausted")) {
      return {
        symptom,
        category: "Energy/Fatigue",
        severity: "mild",
        description: "Low energy or exhaustion",
        possibleCauses: [
          "Hormonal changes",
          "Iron deficiency (especially with heavy periods)",
          "Thyroid issues",
          "Poor sleep quality"
        ],
        recommendations: [
          "Ensure adequate iron intake",
          "Maintain regular sleep schedule",
          "Stay hydrated",
          "Consider iron and B12 levels check",
          "Balanced diet with complex carbohydrates"
        ]
      };
    }

    // Default analysis for unrecognized symptoms
    return {
      symptom,
      category: "General Symptom",
      severity: "mild",
      description: "Symptom requires evaluation",
      possibleCauses: ["Various factors may contribute to this symptom"],
      recommendations: [
        "Track when and how often this occurs",
        "Note any patterns or triggers",
        "Consult healthcare provider for proper evaluation",
        "Keep a symptom diary"
      ]
    };
  });

  // Generate general advice based on severity
  const hasSevere = analyses.some(a => a.severity === "severe");
  const hasModerate = analyses.some(a => a.severity === "moderate");

  let generalAdvice = "";
  
  if (hasSevere) {
    generalAdvice = "⚠️ IMPORTANT: Some of your symptoms may require immediate medical attention. Please consult a healthcare provider as soon as possible. Do not delay seeking professional medical care.";
  } else if (hasModerate) {
    generalAdvice = "Based on your symptoms, it's advisable to consult with a healthcare provider, especially if symptoms persist or worsen. In the meantime, try the recommended self-care measures for each symptom.";
  } else {
    generalAdvice = "Your symptoms appear to be common menstrual-related experiences. Try the recommended self-care measures. However, if symptoms persist, worsen, or concern you, don't hesitate to consult a healthcare provider. Trust your instincts about your body.";
  }

  return {
    analyses,
    generalAdvice,
    symptoms
  };
}

/**
 * Helper function to format analysis results for display
 */
export function formatAnalysis(result: AnalysisResult): string {
  let output = "SYMPTOM ANALYSIS REPORT\n" + "=".repeat(50) + "\n\n";
  
  result.analyses.forEach((analysis, index) => {
    output += `${index + 1}. ${analysis.symptom.toUpperCase()}\n`;
    output += `   Category: ${analysis.category}\n`;
    output += `   Severity: ${analysis.severity.toUpperCase()}\n`;
    output += `   ${analysis.description}\n\n`;
    
    output += `   Possible Causes:\n`;
    analysis.possibleCauses.forEach(cause => {
      output += `   • ${cause}\n`;
    });
    
    output += `\n   Recommendations:\n`;
    analysis.recommendations.forEach(rec => {
      output += `   • ${rec}\n`;
    });
    output += "\n";
  });
  
  output += "=".repeat(50) + "\n";
  output += `GENERAL ADVICE:\n${result.generalAdvice}\n`;
  output += "=".repeat(50) + "\n\n";
  output += "Note: This analysis is for informational purposes only and does not replace professional medical advice. Always consult with a qualified healthcare provider for proper diagnosis and treatment.";
  
  return output;
}
