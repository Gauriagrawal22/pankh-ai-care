/**
 * Mood and Energy Tool
 * Analyzes mood and energy patterns across menstrual cycle phases
 */

export interface MoodEnergyAnalysis {
  moodExplanation: string;
  energyExplanation: string;
  generalTip: string;
}

/**
 * Analyzes mood and energy patterns based on menstrual cycle phase
 * @param phase - The menstrual cycle phase (e.g., "menstrual", "follicular", "ovulation", "luteal")
 * @returns Analysis of mood and energy with practical tips
 */
export function analyzeMoodEnergy(phase: string): MoodEnergyAnalysis {
  const lowerPhase = phase.toLowerCase();
  
  // Menstrual Phase (Days 1-5)
  if (lowerPhase.includes("menstrual") || lowerPhase.includes("period") || 
      lowerPhase.includes("bleeding") || lowerPhase.includes("day 1") || 
      lowerPhase.includes("first days")) {
    return {
      moodExplanation: "During menstruation, hormone levels (estrogen and progesterone) are at their lowest. This can lead to feelings of introspection, fatigue, and sometimes mild sadness or irritability. You might feel more withdrawn and prefer quiet activities. Some women experience relief as PMS symptoms subside, while others may feel emotionally sensitive due to physical discomfort like cramps.",
      energyExplanation: "Energy levels are typically lowest during menstruation. The body is working hard to shed the uterine lining, which requires energy. Blood loss (especially if periods are heavy) can contribute to fatigue and reduced stamina. Iron levels may drop, further affecting energy. Physical activities might feel more challenging, and you may need more rest than usual.",
      generalTip: "Be gentle with yourself during this phase. Prioritize rest, stay hydrated, and eat iron-rich foods to replenish what's lost. Light exercise like yoga or walking can help boost mood and reduce cramps. Listen to your body and don't push yourself too hard. This is a natural time for rest and restoration."
    };
  }
  
  // Follicular Phase (Days 6-14)
  if (lowerPhase.includes("follicular") || lowerPhase.includes("pre-ovulation") || 
      lowerPhase.includes("after period") || lowerPhase.includes("week after period")) {
    return {
      moodExplanation: "The follicular phase is often called the 'spring' of your cycle. As estrogen rises, you typically feel more optimistic, confident, and socially outgoing. Your mood tends to be more stable and positive. Many women report feeling mentally sharp, creative, and motivated during this time. You might find it easier to start new projects or tackle challenging tasks.",
      energyExplanation: "Energy levels steadily increase throughout the follicular phase as estrogen rises. You'll likely feel more energetic, motivated, and physically capable. This is often the best time for high-intensity workouts, ambitious projects, and activities requiring sustained focus. Your body is preparing for ovulation, and you may notice increased stamina and endurance.",
      generalTip: "Take advantage of this high-energy phase! It's an ideal time to schedule important meetings, start new projects, or tackle challenging workouts. Try new activities, be social, and push yourself a bit more. Your body and mind are primed for action and productivity during this phase."
    };
  }
  
  // Ovulation Phase (Around Day 14)
  if (lowerPhase.includes("ovulat") || lowerPhase.includes("mid-cycle") || 
      lowerPhase.includes("fertile window") || lowerPhase.includes("peak")) {
    return {
      moodExplanation: "During ovulation, estrogen peaks along with a surge in testosterone, creating a powerful mood boost. You may feel especially confident, attractive, and socially magnetic. Communication skills are often enhanced, and you might feel more flirtatious or outgoing. This is typically when you feel your best emotionally and mentally—alert, sharp, and emotionally balanced.",
      energyExplanation: "Energy levels peak during ovulation. You'll likely experience maximum physical strength, endurance, and pain tolerance. This is your body's 'summer'—you feel vibrant, powerful, and capable. It's the optimal time for intense exercise, athletic performance, and physically demanding activities. Libido is also typically highest during this phase.",
      generalTip: "This is your power phase! Schedule important presentations, social events, or challenging workouts during ovulation. You're at your peak physically and mentally, so make the most of it. If you're trying to conceive, this is your fertile window. Enjoy the confidence boost and high energy while it lasts."
    };
  }
  
  // Luteal Phase (Days 15-28)
  if (lowerPhase.includes("luteal") || lowerPhase.includes("pre-menstrual") || 
      lowerPhase.includes("before period") || lowerPhase.includes("pms") || 
      lowerPhase.includes("premenstrual")) {
    return {
      moodExplanation: "During the luteal phase, progesterone rises while estrogen drops, which can significantly impact mood. The first half may feel relatively stable, but as you approach menstruation, you might experience PMS symptoms: mood swings, irritability, anxiety, or sadness. Some women feel more introverted and prefer less social stimulation. Emotional sensitivity increases, and you might feel more critical or easily overwhelmed. This is when premenstrual dysphoric disorder (PMDD) symptoms appear if you're affected by it.",
      energyExplanation: "Energy gradually declines during the luteal phase, especially in the week before your period. Progesterone has a calming, sedating effect, which can make you feel tired or sluggish. You might crave more sleep and find intense exercise less appealing. Your body temperature rises slightly (progesterone raises basal body temperature), which can affect sleep quality. As menstruation approaches, energy typically reaches its lowest point.",
      generalTip: "Honor your need for slower pace during this phase. Focus on self-care: warm baths, gentle movement like yoga or stretching, and nourishing foods. Reduce commitments if possible and create more downtime. Prioritize sleep (aim for 8-9 hours). Complex carbohydrates and magnesium-rich foods can help stabilize mood. If PMS is severe, track symptoms and discuss with your healthcare provider about management strategies."
    };
  }
  
  // Default/General response
  return {
    moodExplanation: "Mood fluctuates throughout the menstrual cycle due to changing hormone levels. Estrogen, which rises in the first half of your cycle (follicular phase and ovulation), tends to boost mood, confidence, and mental clarity. Progesterone, which dominates the second half (luteal phase), has a calming but sometimes sedating effect. The interplay between these hormones, along with testosterone, creates predictable emotional patterns across your cycle.",
    energyExplanation: "Energy levels naturally ebb and flow with your menstrual cycle. The follicular phase and ovulation typically bring higher energy, while the luteal phase and menstruation bring lower energy. This is your body's natural rhythm—not a flaw or weakness. Understanding these patterns helps you work with your body rather than against it, optimizing when you schedule demanding activities and when you prioritize rest.",
    generalTip: "Track your cycle phases and corresponding mood/energy patterns for 2-3 months to understand your personal rhythm. Use apps or journals to note how you feel each day. This awareness allows you to plan your life around your natural energy cycles—scheduling important tasks during high-energy phases and building in rest during low-energy times. Honor your body's needs throughout all phases."
  };
}

/**
 * Helper function to format mood and energy analysis for display
 */
export function formatMoodEnergyAnalysis(analysis: MoodEnergyAnalysis, phase: string): string {
  let output = `MOOD & ENERGY ANALYSIS: ${phase.toUpperCase()} PHASE\n`;
  output += "=".repeat(60) + "\n\n";
  
  output += "😊 MOOD PATTERNS:\n";
  output += analysis.moodExplanation + "\n\n";
  
  output += "⚡ ENERGY LEVELS:\n";
  output += analysis.energyExplanation + "\n\n";
  
  output += "=".repeat(60) + "\n";
  output += `💡 TIP: ${analysis.generalTip}\n`;
  output += "=".repeat(60) + "\n\n";
  output += "Remember: Every woman's experience is unique. These are general patterns, and your personal experience may vary. Severe mood changes or energy crashes should be discussed with a healthcare provider.";
  
  return output;
}
