/**
 * Nutrition Tool
 * Provides dietary guidance for women's health goals
 */

export interface NutritionAdvice {
  recommendedFoods: string[];
  foodsToAvoid: string[];
  note: string;
}

/**
 * Provides nutrition advice based on women's health goals
 * @param goal - The health/nutrition goal (e.g., "reduce cramps", "boost energy", "hormonal balance")
 * @returns Nutrition advice with recommended foods, foods to avoid, and a note
 */
export function getNutritionAdvice(goal: string): NutritionAdvice {
  const lowerGoal = goal.toLowerCase();
  
  // Reduce menstrual cramps
  if (lowerGoal.includes("cramp") || lowerGoal.includes("pain") || lowerGoal.includes("dysmenorrhea")) {
    return {
      recommendedFoods: [
        "Leafy greens (spinach, kale) - rich in iron and magnesium",
        "Fatty fish (salmon, sardines) - omega-3s reduce inflammation",
        "Bananas - potassium helps reduce cramping",
        "Ginger tea - natural anti-inflammatory",
        "Dark chocolate (70%+ cocoa) - magnesium and endorphins",
        "Nuts and seeds (almonds, pumpkin seeds) - magnesium and vitamin E",
        "Turmeric - anti-inflammatory properties",
        "Whole grains - vitamin B complex"
      ],
      foodsToAvoid: [
        "Caffeine - can increase tension and bloating",
        "Alcohol - dehydrates and worsens cramps",
        "High-salt foods - increases water retention",
        "Processed foods - inflammatory",
        "Red meat - can increase prostaglandins",
        "Refined sugar - causes inflammation"
      ],
      note: "Focus on anti-inflammatory foods rich in magnesium, omega-3s, and vitamin B. Stay well-hydrated throughout your cycle."
    };
  }
  
  // Boost energy / reduce fatigue
  if (lowerGoal.includes("energy") || lowerGoal.includes("fatigue") || lowerGoal.includes("tired")) {
    return {
      recommendedFoods: [
        "Iron-rich foods (lean meat, lentils, beans) - prevents anemia",
        "Vitamin C sources (citrus, berries) - enhances iron absorption",
        "Complex carbohydrates (oats, quinoa, brown rice) - sustained energy",
        "B-vitamin foods (eggs, leafy greens, fortified cereals)",
        "Nuts and seeds - healthy fats and protein",
        "Greek yogurt - protein and probiotics",
        "Spinach - iron and folate",
        "Dark chocolate - small amounts for iron and mood"
      ],
      foodsToAvoid: [
        "Refined sugars - cause energy crashes",
        "Excessive caffeine - leads to crashes and disrupts sleep",
        "Processed snacks - empty calories",
        "Heavy, greasy foods - slow digestion",
        "Alcohol - disrupts sleep quality"
      ],
      note: "Iron deficiency is common with heavy periods. Pair iron-rich foods with vitamin C for better absorption. Eat regular, balanced meals to maintain steady energy."
    };
  }
  
  // Hormonal balance / PCOS / irregular periods
  if (lowerGoal.includes("hormone") || lowerGoal.includes("pcos") || lowerGoal.includes("irregular") || 
      lowerGoal.includes("balance")) {
    return {
      recommendedFoods: [
        "Cruciferous vegetables (broccoli, cauliflower) - support estrogen metabolism",
        "Flaxseeds - lignans help balance hormones",
        "Fatty fish - omega-3s reduce inflammation",
        "Avocados - healthy fats for hormone production",
        "Berries - antioxidants and fiber",
        "Green tea - supports metabolism and hormonal balance",
        "Cinnamon - helps regulate blood sugar",
        "Whole grains - complex carbs and fiber"
      ],
      foodsToAvoid: [
        "Refined carbohydrates - spike blood sugar",
        "Trans fats - disrupt hormone production",
        "Excessive dairy - may worsen PCOS symptoms",
        "Processed meats - inflammatory",
        "Sugary drinks - insulin spikes",
        "Soy products (in excess) - phytoestrogens may affect balance"
      ],
      note: "Focus on low-glycemic foods to maintain stable blood sugar, which is crucial for hormonal balance. Include plenty of fiber to support estrogen metabolism."
    };
  }
  
  // PMS / mood swings / emotional symptoms
  if (lowerGoal.includes("pms") || lowerGoal.includes("mood") || lowerGoal.includes("anxiety") || 
      lowerGoal.includes("depression") || lowerGoal.includes("emotional")) {
    return {
      recommendedFoods: [
        "Complex carbohydrates - boost serotonin production",
        "Calcium-rich foods (dairy, fortified plant milk) - reduces PMS symptoms",
        "Magnesium sources (nuts, seeds, dark chocolate) - mood stabilization",
        "Omega-3 fatty fish - supports brain health",
        "Vitamin B6 foods (chickpeas, bananas) - neurotransmitter production",
        "Chamomile tea - calming properties",
        "Eggs - vitamin D and B vitamins",
        "Berries - antioxidants for brain health"
      ],
      foodsToAvoid: [
        "Caffeine - increases anxiety and irritability",
        "Alcohol - worsens mood swings",
        "High sugar foods - blood sugar crashes affect mood",
        "Excessive salt - bloating and discomfort",
        "Processed foods - lack nutrients needed for mood regulation"
      ],
      note: "Calcium and magnesium are particularly important for managing PMS symptoms. Maintain steady blood sugar with regular, balanced meals to stabilize mood."
    };
  }
  
  // Bloating / digestive issues
  if (lowerGoal.includes("bloat") || lowerGoal.includes("digest") || lowerGoal.includes("gas")) {
    return {
      recommendedFoods: [
        "Ginger tea - aids digestion and reduces inflammation",
        "Peppermint tea - soothes digestive system",
        "Fennel seeds - reduces gas and bloating",
        "Papaya - digestive enzymes",
        "Bananas - potassium reduces water retention",
        "Cucumber - hydrating and anti-inflammatory",
        "Probiotic foods (yogurt, kefir) - gut health",
        "Lean proteins - easier to digest"
      ],
      foodsToAvoid: [
        "High-sodium foods - water retention",
        "Carbonated drinks - increases gas",
        "Cruciferous vegetables (during bloating) - can cause gas",
        "Beans and legumes (if sensitive) - can cause bloating",
        "Fried foods - slow digestion",
        "Artificial sweeteners - can cause bloating",
        "Dairy (if lactose intolerant)"
      ],
      note: "Reduce salt intake and stay hydrated to minimize water retention. Gentle movement and smaller, frequent meals can also help reduce bloating."
    };
  }
  
  // Heavy bleeding / menorrhagia
  if (lowerGoal.includes("heavy bleeding") || lowerGoal.includes("menorrhagia") || lowerGoal.includes("blood loss")) {
    return {
      recommendedFoods: [
        "Iron-rich foods (red meat, liver, spinach) - replenish iron stores",
        "Vitamin C foods (oranges, strawberries) - improve iron absorption",
        "Leafy greens - iron and vitamin K",
        "Blackstrap molasses - high in iron",
        "Lentils and beans - plant-based iron",
        "Beetroot - supports blood production",
        "Pumpkin seeds - iron and zinc",
        "Vitamin K foods (kale, broccoli) - blood clotting"
      ],
      foodsToAvoid: [
        "Excessive caffeine - interferes with iron absorption",
        "Calcium supplements (with iron-rich meals) - blocks iron absorption",
        "Alcohol - depletes nutrients and affects clotting",
        "Aspirin (unless prescribed) - thins blood"
      ],
      note: "If you experience heavy bleeding regularly, consult a healthcare provider to rule out underlying conditions. Focus on replenishing iron and other nutrients lost during menstruation."
    };
  }
  
  // General women's health / cycle support
  return {
    recommendedFoods: [
      "Leafy greens - iron, folate, and essential nutrients",
      "Whole grains - B vitamins and fiber",
      "Lean proteins - hormone production and tissue repair",
      "Healthy fats (avocado, nuts, olive oil) - hormone balance",
      "Colorful fruits and vegetables - antioxidants and vitamins",
      "Fatty fish - omega-3s for inflammation",
      "Water - stay well-hydrated",
      "Fermented foods - gut health and immunity"
    ],
    foodsToAvoid: [
      "Excessive processed foods - lack nutrients",
      "Trans fats - inflammatory",
      "High sugar intake - blood sugar imbalances",
      "Excessive alcohol - disrupts hormones",
      "Too much caffeine - affects nutrient absorption"
    ],
    note: "A balanced diet rich in whole foods supports overall menstrual health. Focus on nutrient-dense foods, adequate hydration, and regular eating patterns to maintain hormonal balance."
  };
}

/**
 * Helper function to format nutrition advice for display
 */
export function formatNutritionAdvice(advice: NutritionAdvice, goal: string): string {
  let output = `NUTRITION GUIDANCE FOR: ${goal.toUpperCase()}\n`;
  output += "=".repeat(50) + "\n\n";
  
  output += "✅ RECOMMENDED FOODS:\n";
  advice.recommendedFoods.forEach(food => {
    output += `   • ${food}\n`;
  });
  
  output += "\n❌ FOODS TO AVOID:\n";
  advice.foodsToAvoid.forEach(food => {
    output += `   • ${food}\n`;
  });
  
  output += "\n" + "=".repeat(50) + "\n";
  output += `📝 NOTE: ${advice.note}\n`;
  output += "=".repeat(50) + "\n\n";
  output += "Remember: Individual nutritional needs vary. Consult with a registered dietitian or healthcare provider for personalized advice, especially if you have specific health conditions or dietary restrictions.";
  
  return output;
}
