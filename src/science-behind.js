import React, { useState } from 'react';
import './science-behind.css';

const categoriesData = [
  {
    category: "I. Advanced Glycation End-products (AGEs)",
    subcategories: [
      {
        subcategory: "1. What are AGEs?",
        subsubcategories: [
          {
            subsub: "a. What are Advanced Glycation End-products (AGEs) and why they matter",
            slides: [
              {
                title: "The Science Behind AGEs and Aging",
                answer: "AGEs are harmful compounds formed when sugars react with proteins, fats, or nucleic acids. This reaction can accelerate the aging process by damaging cellular structures."
              },
              {
                title: "The Guardian",
                answer: "An article explaining how AGEs impact aging and provide tips for mitigating their effects."
              },
              {
                title: "The Science Behind AGEs and Aging",
                answer: "AGEs are compounds that can form from the sugar and protein interaction, contributing to cell and tissue damage, ultimately accelerating aging."
              },
              {
                title: "AGEs and Your Health: What You Should Know",
                answer: "A guide to understanding the health risks associated with AGEs and how they affect your body."
              },
              {
                title: "How Sugars and Proteins Form AGEs",
                answer: "Explaining the biochemical process of how AGEs form when excess sugars interact with proteins, and the effects on aging."
              },
              {
                title: "AGEs: The Silent Factor of Aging",
                answer: "An article detailing the role of AGEs in accelerating aging and causing damage to cells and tissues."
              }
            ]
          },
          {
            subsub: "b. Why AGEs are harmful to health",
            slides: [
              {
                title: "The Impact of AGEs on Human Health",
                answer: "AGEs are implicated in various chronic diseases such as diabetes, Alzheimer's, and cardiovascular diseases."
              },
              {
                title: "How AGEs Accelerate Aging",
                answer: "Understanding the biochemical impact of AGEs and how they damage tissues, contributing to aging and disease."
              },
              {
                title: "AGEs and Chronic Disease",
                answer: "Explores how AGEs contribute to the development of diseases and their role in aging."
              }
            ]
          },
          {
            subsub: "c. How AGEs contribute to aging and disease",
            slides: [
              {
                title: "AGEs and Their Role in Disease",
                answer: "AGEs accumulate over time, leading to tissue damage, and are a major factor in aging and disease progression."
              },
              {
                title: "The Link Between AGEs and Chronic Conditions",
                answer: "An overview of how AGEs contribute to diseases like diabetes, cardiovascular issues, and Alzheimer's."
              }
            ]
          }
        ]
      },
      {
        subcategory: "2. How do AGEs accelerate aging?",
        subsubcategories: [
          {
            subsub: "a. Why AGEs Make You Look Older",
            slides: [
              {
                title: "Harvard Health Blog",
                answer: "AGEs are directly linked to skin aging and can contribute to wrinkles, sagging, and age spots."
              },
              {
                title: "How AGEs affect your skin and organs",
                answer: "This article discusses how AGEs damage skin cells and internal organs, speeding up the aging process."
              },
              {
                title: "The Role of AGEs in Chronic Diseases and Aging",
                answer: "This article connects AGEs to chronic diseases and provides a deeper look at their role in accelerated aging."
              },
              {
                title: "How Advanced Glycation End-products accelerate aging",
                answer: "Explains the mechanism by which AGEs contribute to age-related tissue damage and disease progression."
              },
              {
                title: "The Silent Killer: How AGEs Impact Your Cells",
                answer: "An in-depth look at how AGEs affect cellular function, leading to accelerated aging and degeneration."
              }
            ]
          },
          {
            subsub: "b. The impact of AGEs on skin and tissue",
            slides: [
              {
                title: "AGEs and Your Skin",
                answer: "Explores how AGEs damage collagen and elastin, leading to wrinkles, sagging, and overall skin aging."
              },
              {
                title: "AGEs in Skin Aging",
                answer: "Explains how the accumulation of AGEs contributes to the loss of skin elasticity and firmness."
              }
            ]
          },
          {
            subsub: "c. How AGEs contribute to other age-related diseases",
            slides: [
              {
                title: "AGEs and Alzheimer’s Disease",
                answer: "A detailed look at how AGEs are involved in the development of Alzheimer's disease."
              },
              {
                title: "AGEs and Cardiovascular Health",
                answer: "This article connects AGEs to cardiovascular diseases, showing how they affect arteries and heart health."
              }
            ]
          }
        ]
      },
      {
        subcategory: "3. How to reduce AGE formation in the body?",
        subsubcategories: [
          {
            subsub: "a. Foods that reduce AGEs in your body",
            slides: [
              {
                title: "Foods that reduce AGEs in your body",
                answer: "This article shares a list of foods known to help reduce the formation of AGEs."
              },
              {
                title: "Top Anti-AGE Diet Tips",
                answer: "Practical tips on how to adjust your diet to reduce AGE formation."
              },
              {
                title: "How to Avoid AGEs in Your Diet",
                answer: "Advice on how to avoid cooking methods and food choices that promote AGE production."
              },
              {
                title: "The Best Cooking Methods for Preventing AGEs",
                answer: "A guide to cooking methods that minimize the formation of AGEs in your food."
              },
              {
                title: "Simple Lifestyle Changes to Lower AGEs",
                answer: "Suggestions on lifestyle habits to lower your AGE levels and protect against aging."
              }
            ]
          },
          {
            subsub: "b. Lifestyle changes to prevent AGE accumulation",
            slides: [
              {
                title: "How Lifestyle Changes Can Lower AGEs",
                answer: "An overview of how certain lifestyle choices such as exercise, hydration, and stress management can reduce AGE accumulation."
              },
              {
                title: "Exercising to Reduce AGEs",
                answer: "The role of regular physical activity in reducing AGE levels in the body."
              }
            ]
          },
          {
            subsub: "c. Supplements and interventions to reduce AGEs",
            slides: [
              {
                title: "Supplements to Prevent AGE Formation",
                answer: "Research suggests certain supplements may help prevent AGE formation and protect against aging."
              },
              {
                title: "Can Anti-AGE Supplements Work?",
                answer: "Exploring the effectiveness of supplements in mitigating AGE effects and slowing the aging process."
              }
            ]
          }
        ]
      },
      {
        subcategory: "4. Foods that increase AGEs",
        subsubcategories: [
          {
            subsub: "a. Which foods contribute to AGEs and aging?",
            slides: [
              {
                title: "Top 10 foods that cause aging",
                answer: "https://www.vinmec.com/eng/article/11-foods-that-accelerate-the-aging-process-of-the-body-en"
              },
              {
                title: "How Certain Foods Boost AGE Levels",
                answer: "https://www.nutritionmasterclass.com.ph/articles/ages-matter"
              },
              {
                title: "The Worst Foods for Your Skin",
                answer: "https://www.prevention.com/food-nutrition/g42042464/worst-foods-for-skin/",
              },
              {
                title: "Why Processed Foods Are Bad for Aging",
                answer: "Much of this is due to ultra-processed foods often containing a high amount of hydrogenated oils, which are full of trans fats and can promote the chronic inflammation that hastens the breakdown (or aging) of your cells."
              },
              {
                title: "How Sugar Affects Aging",
                answer: "https://www.webmd.com/diabetes/features/how-sugar-affects-your-body"
              }
            ]
          },
          {
            subsub: "b. Why processed foods are the worst for aging",
            slides: [
              {
                title: "How processed foods make you age faster",
                answer: "https://neurosciencenews.com/biological-aging-processed-food-27986/"
              },
              {
                title: "The Dark Side of the Fast Food",
                answer: "https://www.modern-age.com/blog/the-effects-of-fast-food-on-the-aging-process"
              },
              {
                title: "Soft Drinks Also Play a Part",
                answer: "Diet beverages have been linked to a higher risk of dying early from cardiovascular disease as well as the onset of dementia, type 2 diabetes, obesity, stroke and metabolic syndrome, which can lead to heart disease and diabetes. "
              },
              {
                title: "Ultra-Processed Food leads to diseases",
                answer: "1. memory problems, 2. higher risk of developing dementia, 3. Chronic Inflammation, 4. Weight Gain and Metabolic Health Issues"
              }
            ]
          },
          {
            subsub: "c. Foods that lower AGE levels",
            slides: [
              {
                title: "Antioxidants and oxidative stress ",
                answer: "Oxidative stress is associated with many health conditions such as cardiovascular disease, cancer, diabetes, Alzheimer’s disease, Parkinson’s, and even memory loss. Researchers believe that the anti-inflammatory properties of antioxidants can help remove oxidative stress from the body and protect it against these health conditions."
              },
              {
                title: " What foods are low in AGEs?",
                answer: "Vegetables, fish, legumes, fruits and whole grains have relatively low levels of AGE. "
              },
              {
                title: "How to reduce AGEs?",
                answer: "1. Aim to reduce cooking times and at lower cooking temperatures, 2. Marinate Foods, 3. Limit frying, grilling and baking to minimum, 4. Don't consume sugar and diary"
              }
            ]
          }
        ]

      },
      
    ]
  },
  {
    category: "II. Telomeres and Aging",
    subcategories: [
      {
        subcategory: "1. What are telomeres?",
        subsubcategories: [
          {
            subsub: "a. What are telomeres and why they’re key to aging?",
            slides: [
              {
                title: "What are telomeres and why do they matter?",
                answer: "Telomeres are protective caps at the ends of chromosomes, and their length plays a critical role in aging."
              },
              {
                title: "Telomeres: The Key to Aging and Longevity",
                answer: "This article explores the connection between telomere length and lifespan."
              },
              {
                title: "Understanding Telomeres in Simple Terms",
                answer: "A simple breakdown of what telomeres are and how they influence the aging process."
              },
              {
                title: "How Telomeres Affect Your Lifespan",
                answer: "The role of telomeres in aging and their impact on lifespan."
              },
              {
                title: "What Makes Your Telomeres Shorten Faster?",
                answer: "This article covers the lifestyle factors that accelerate the shortening of telomeres."
              }
            ]
          },
          {
            subsub: "b. The role of telomeres in cellular aging",
            slides: [
              {
                title: "How Telomeres Control Aging at the Cellular Level",
                answer: "Explains the link between telomere shortening and the aging of individual cells."
              },
              {
                title: "Telomeres and Cellular Senescence",
                answer: "This article discusses how telomere shortening contributes to cellular aging and the onset of senescence."
              }
            ]
          },
          {
            subsub: "c. Can telomeres be lengthened or preserved?",
            slides: [
              {
                title: "Can We Lengthen Telomeres?",
                answer: "Explores scientific efforts to reverse telomere shortening and the potential for extending lifespan."
              },
              {
                title: "Telomere Lengthening and Its Impact on Aging",
                answer: "Discusses the potential impact of telomere lengthening on age-related diseases and longevity."
              }
            ]
          }
        ]
      },
      {
        subcategory: "2. How telomeres shorten with age",
        subsubcategories: [
          {
            subsub: "a. Why telomeres shorten and how it impacts aging",
            slides: [
              {
                title: "Why telomeres shorten and how it impacts aging",
                answer: "As you age, telomeres naturally shorten, leading to cellular aging and dysfunction."
              },
              {
                title: "The Aging Process and Telomere Shortening",
                answer: "This article covers the biological reasons behind telomere shortening as part of the natural aging process."
              }
            ]
          },
          {
            subsub: "b. The science behind telomere shortening",
            slides: [
              {
                title: "The Science Behind Telomere Shortening",
                answer: "This article explains how telomere shortening occurs at a cellular level."
              },
              {
                title: "Why Your Telomeres Are Shortening",
                answer: "Understanding the biological processes behind telomere shortening and its impact on aging."
              }
            ]
          },
          {
            subsub: "c. Environmental factors that accelerate telomere shortening",
            slides: [
              {
                title: "Environmental Factors That Accelerate Telomere Shortening",
                answer: "Explores the environmental and lifestyle factors that can accelerate telomere shortening."
              },
              {
                title: "How Stress and Diet Impact Your Telomeres",
                answer: "Examines how stress, poor diet, and other environmental factors contribute to faster telomere shortening."
              }
            ]
          }
        ]
      },
      {
        subcategory: "3. Interventions to preserve or lengthen telomeres",
        subsubcategories: [
          {
            subsub: "a. How diet impacts telomere length",
            slides: [
              {
                title: "How Your Diet Affects Telomeres",
                answer: "Research shows that a diet rich in antioxidants and anti-inflammatory foods may help preserve telomere length."
              },
              {
                title: "Best Foods for Telomere Health",
                answer: "A guide to foods that support telomere preservation and slow down their shortening."
              }
            ]
          },
          {
            subsub: "b. The role of exercise in maintaining telomere length",
            slides: [
              {
                title: "Exercise and Telomere Preservation",
                answer: "Regular physical activity has been shown to maintain telomere length and promote cellular health."
              },
              {
                title: "How Physical Activity Affects Telomeres",
                answer: "The science of how exercise helps preserve telomere length and slow aging."
              }
            ]
          },
          {
            subsub: "c. Supplements and therapies for telomere lengthening",
            slides: [
              {
                title: "Supplements That May Help Preserve Telomeres",
                answer: "Explores the role of supplements like telomerase activators and antioxidants in maintaining telomere length."
              },
              {
                title: "How Telomere Lengthening Therapies Work",
                answer: "The science and potential of therapies designed to extend telomeres and combat aging."
              }
            ]
          }
        ]

      },
      
    ]
  },
  {
    category: "III. Mitochondrial Health & Nutrition",
    subcategories: [
      {
        subcategory: "1. Nutrients Vital for Mitochondrial Function",
        subsubcategories: [
          {
            subsub: "a. Coenzyme Q10 and Mitochondrial Energy",
            slides: [
              {
                title: "Role of Coenzyme Q10",
                answer: "CoQ10's Role in Mitochondria - Boosts cellular energy production."
              },
              {
                title: "CoQ10-Rich Foods",
                answer: "Meat, fish, and whole grains for energy support."
              },
              {
                title: "CoQ10 in Aging",
                answer: "Explores its decline with age and dietary interventions."
              },
              {
                title: "CoQ10 Supplements vs. Diet",
                answer: "Comparing dietary sources and supplements."
              }
            ]
          },
          {
            subsub: "b. Omega-3 Fatty Acids and Mitochondrial Protection",
            slides: [
              {
                title: " Omega-3s and Oxidative Stress",
                answer: "Helps reduce mitochondrial damage"
              },
              {
                title: "Omega-3 Food Sources",
                answer: "Benefits of fish, chia seeds,flax seeds and walnuts as primary sources."
              },
              {
                title: "Balancing Omega-3 and Omega-6",
                answer: "Importance for mitochondrial and overall health."
              },
              {
                title: "DHA & EPA and Brain Mitochondria",
                answer: "How they specifically support brain cell energy."
              }
            ]
          },
          {
            subsub: "c. Polyphenols and Antioxidant Defense",
            slides: [
              {
                title: "Polyphenols in Berries and Leafy Greens",
                answer: "Protects mitochondria from free radicals"
              },
              {
                title: "Polyphenol-rich Foods for Mitochondrial Health",
                answer: "Foods like green tea, berries, and olives."
              },
              {
                title: "Green Tea Polyphenols",
                answer: "How EGCG protects mitochondria from cellular stress."
              },
              {
                title: "Comparing Polyphenols in Foods",
                answer: "Berries, dark chocolate, and red wine for mitochondrial benefits."
              },
              {
                title: "Polyphenol Supplements",
                answer: "Benefits and limitations in mitochondrial support."
              }
            ]
          }
        ]
      },

      {
        subcategory: "2. Diets Supporting Mitochondrial Preservation",
        subsubcategories: [
          {
            subsub: "a. Mediterranean Diet Benefits",
            slides: [
              {
                title: "Antioxidants and Reduced Oxidative Stress",
                answer: "Focus on fresh produce and healthy fats."
              },
              {
                title: "Key Mediterranean Foods for Mitochondria",
                answer: "Olive oil, nuts, and leafy greens."
              },
              {
                title: "Mediterranean Lifestyle and Longevity",
                answer: "Effects beyond diet on mitochondrial health."
              },
              {
                title: "Comparing Mediterranean Foods",
                answer: "Specific foods with high mitochondrial protection."
              },
              {
                title: "Key Herbs and Spices",
                answer: "Rosemary, basil, and others known for cell protection."
              }
            ]
          },
          {
            subsub: "b. Plant-Based Eating Patterns",
            slides: [
              {
                title: "Rich in High-Antioxidant Foods",
                answer: "How plant foods protect mitochondria."
              },
              {
                title: "Examples of Mitochondria-Protecting Foods",
                answer: "Spinach, kale, and cruciferous vegetables for cell health."
              },
              {
                title: "Chlorophyll and Mitochondria",
                answer: "Benefits of leafy greens for cell efficiency."
              },
              {
                title: "Bioavailability of Nutrients in Plant Foods",
                answer: "Improving nutrient absorption for mitochondrial health."
              },
              {
                title: "Balancing Amino Acids in Plant-Based Diets",
                answer: "Ensuring protein for mitochondrial repair."
              }
            ]
          },
          {
            subsub: "c. Low-Glycemic Load Diet",
            slides: [
              {
                title: "Stabilizing Blood Sugar Levels",
                answer: "How sugar spikes affect mitochondria."
              },
              {
                title: "Foods for Blood Sugar Balance",
                answer: "Focus on legumes, whole grains, and nuts."
              },
              {
                title: "Low-Glycemic Foods",
                answers: "Highlighting legumes, whole grains, and specific fruits."
              },
              {
                title: "Impact on Cellular Glycation",
                answer: "How low-GI diets reduce mitochondrial stress."
              },
              {
                title: "Meal Timing and Blood Sugar",
                answer: "How consistent eating times support mitochondrial function."
              }
            ]
          }
        ]
      },
      {
        subcategory: "3. Mitochondrial Health and Anti-Aging Impact",
        subsubcategories: [
          {
            subsub: "a. Risk Reduction for Age-Related Diseases",
            slides: [
              {
                title: "Lowering Disease Risks with Mitochondrial Health",
                answer: "Supports heart, brain, and cellular health."
              },
              {
                title: "Neuroprotective Effects of Mitochondrial Health",
                answer: "Lowering Alzheimer's and cognitive decline risks."
              },
              {
                title: "Mitochondria and Diabetes Risk",
                answer: "Effects of mitochondrial support in insulin sensitivity."
              },
              {
                title: "Mitochondria and Cancer Prevention",
                answer: "Research on mitochondrial function in cell growth control."
              }
            ]
          },
          {
            subsub: "b. Boosted Cellular Energy for Longevity",
            slides: [
              {
                title: "Energy Levels and Vitality",
                answer: "How healthy mitochondria sustain energy as we age."
              },
              {
                title: "Mitochondrial Efficiency in Muscle Cells",
                answer: "Role in preserving physical vitality."
              },
              {
                title: "Mitochondria and Metabolism",
                answer: "Their effect on basal metabolic rate and aging."
              },
              {
                title: "Mitochondrial Health in Skin Aging",
                answer: "Implications for skin cell renewal and aging."
              }
            ]
          },
          {
            subsub: "c. Delayed Cellular Senescence",
            slides: [
              {
                title: "Slowing the Biological Clock",
                answer: "Discusses how mitochondrial health delays cellular aging and supports longevity."
              },
              {
                title: "Mitochondria's Role in Cellular Renewal",
                answer: "Highlights the process of mitochondrial biogenesis and its impact on cellular renewal and anti-aging."
              },
              {
                title: "Reducing Cellular Damage Accumulation",
                answer: "Examines how healthy mitochondria can help reduce the buildup of cellular damage over time, prolonging cell life."
              },
              {
                title: "Mitochondrial DNA and Aging Cells",
                answer: "Discusses the role of mitochondrial DNA in cellular aging and how supporting mtDNA health may reduce age-related decline."
              },
              {
                title: "Autophagy and Mitochondrial Turnover",
                answer: "Explores how efficient mitochondrial turnover through autophagy contributes to delaying cellular senescence."
              },
              {
                title: "Mitochondria and Stem Cell Vitality",
                answer: "Explores the link between mitochondrial health and maintaining stem cell vitality, which is essential for tissue repair and longevity."
              },
              {
                title: "Caloric Restriction and Mitochondrial Adaptation",
                answer: "Discusses how caloric restriction may enhance mitochondrial adaptation and resilience, potentially delaying senescence."
              },
              {
                title: "Impact of Mitochondrial Biogenesis on Cell Health",
                answer: "Covers how boosting mitochondrial biogenesis—creating new mitochondria—supports longer cellular health spans."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "IV. Anti-Inflammatory Diet & Cellular Aging",
    subcategories: [
      {
        subcategory: "1. Understanding Inflammation and Its Role in Aging",
        subsubcategories: [
          {
            subsub: "a. Oxidative Stress and Cellular Inflammation",
            slides: [
              {
                title: "Oxidative Stress Mechanisms",
                answer: "Impact on cells and potential for premature aging."
              },
              {
                title: "Anti-Inflammatory Foods to Combat Stress",
                answer: "Focus on colorful vegetables and fruits."
              },
              {
                title: "Diet's Role in Reducing Oxidative Damage",
                answer: "Emphasis on antioxidants in foods."
              },
              {
                title: "Excess Sugar and Oxidative Stress",
                answer: "Glycemic impact on inflammation and aging."
              }
            ]
          },
          {
            subsub: "b. Inflammatory Foods and Aging Acceleration",
            slides: [
              {
                title: "Pro-Inflammatory Foods to Limit",
                answer: "Highlights risks of processed oils and sugars."
              },
              {
                title: "Reducing Processed Foods in Diet",
                answer: "Replacing inflammatory foods with whole options."
              },
              {
                title: "Sugar and Inflammation",
                answer: "Link between high sugar intake and inflammation."
              },
              {
                title: "Salt and Inflammation",
                answer: "Excessive salt intake and inflammation in blood vessels."
              }
            ]
          },
          {
            subsub: "c. Impact of Glycation and DNA Damage",
            slides: [
              {
                title: "How AGEs Contribute to Inflammation",
                answer: "Explains glycation and its effects on cells."
              },
              {
                title: "AGEs in High-Heat Cooking",
                answer: "Reducing glycation by cooking methods like steaming."
              },
              {
                title: "Glycation and Collagen",
                answer: "Impact on skin elasticity and visible signs of aging."
              },
              {
                title: "Glycation in Brain Aging",
                answer: "Potential link between AGEs and cognitive decline."
              }
            ]
          }
        ]
      },
      {
      subcategory: "2. Anti-Inflammatory Nutrients for Cellular Health",
        subsubcategories: [
          {
            subsub: "a. Curcumin in Turmeric",
            slides: [
              {
                title: "Potent Anti-Inflammatory Benefits",
                answer: "Turmeric as a powerhouse for inflammation reduction."
              },
              {
                title: "Curcumin Bioavailability",
                answer: "How to maximize absorption (black pepper pairing)."
              }
            ]
          },
          {
            subsub: "b. Resveratrol and its properties",
            slides: [
              {
                title: "Cellular Anti-Inflammatory Properties",
                answer: "How resveratrol lowers inflammatory markers."
              },
              {
                title: "Resveratrol and Heart Health",
                answer: "Connection to reduced inflammation in cardiovascular cells."
              },
              {
                title: "Resveratrol and Mitochondria",
                answer: "Impact on mitochondrial health within cells."
              },
              {
                title: "Sources of resveratrol and their effectiveness.",
                answer: "*sources*"
              }
            ]
          },
          {
            subsub: "c. Omega-3 Fatty Acids",
            slides: [
              {
                title: "Essential for Cellular Health",
                answer: "Omega-3s from fish, chia, flax for anti-inflammation."
              },
              {
                title: "Omega-3s and Mental Health",
                answer: "Studies suggesting reduced depression markers."
              },
              {
                title: "Omega-3s for Cardiovascular Health",
                answer: "Role in reducing arterial inflammation."
              },
              {
                title: "Fish Oil vs. Plant-Based Omega-3",
                answer: "Effectiveness of various sources."
              }
            ]
          },
          {
            subsub: "d. Polyphenols and Flavonoids",
            slides: [
              {
                title: "Anti-Inflammatory Power of Flavonoids",
                answer: "Benefits of berries, green tea, and dark chocolate."
              },
              {
                title: "Polyphenols and Cellular Protection",
                answer: "Explains how polyphenols in apples and onions safeguard cells from oxidative stress, slowing cellular wear and tear."
              },
              {
                title: "DNA Repair and Flavonoids",
                answer: "Discusses the role of flavonoids in promoting DNA repair, essential for maintaining youthful cells and preventing aging at the genetic level."
              },
              {
                title: "Anti-Glycation Effects of Polyphenols",
                answer: "Covers how polyphenols combat glycation—a process that ages cells by damaging proteins, especially in skin and connective tissues."
              },
              {
                title: "Cognitive and Brain Health Benefits",
                answer: "Explores evidence that flavonoids help maintain cognitive function, slowing age-related mental decline."
              }
            ]
          }
        ]
      },
      {
        subcategory: "3. Anti-Inflammatory Diets and Aging Benefits",
          subsubcategories: [
            {
              subsub: "a. Mediterranean Diet as an Anti-Inflammatory Base",
              slides: [
                {
                  title: "Benefits of Plant Oils, Herbs, and Fresh Produce",
                  answer: "Reduces inflammation for longevity, and how these staples reduce inflammation, promoting longevity."
                },
                {
                  title: "Role of Omega-3 Rich Foods",
                  answer: "Describes how omega-3s in Mediterranean foods support cellular health by reducing inflammatory markers."
                },
                {
                  title: "Antioxidant Power of Fresh Fruits and Vegetables",
                  answer: "Covers how antioxidants in foods like tomatoes, peppers, and leafy greens protect against oxidative stress."
                },
                {
                  title: "Mediterranean Diet and Heart Health",
                  answer: "Discusses how this diet's anti-inflammatory properties support cardiovascular health, a key aspect of healthy aging."
                }
              ]
            },
            {
              subsub: "b. Whole Foods Approach",
              slides: [
                {
                  title: "Advantages of Minimally Processed Foods",
                  answer: "How whole foods decrease inflammation."
                },
                {
                  title: "Fiber-Rich Foods and Gut Health",
                  answer: "Explains how high-fiber foods like whole grains and legumes support gut health, crucial for lowering systemic inflammation."
                },
                {
                  title: "Whole Foods and Blood Sugar Stability",
                  answer: "Discusses how low-GI foods, common in a whole foods diet, prevent inflammation related to blood sugar spikes."
                }
              ]
            },
            {
              subsub: "c. Alkaline Foods and Cellular Protection",
              slides: [
                {
                  title: "Foods That Lower Inflammation",
                  answer: "Benefits of vegetables, nuts, and seeds in reducing acidity."
                },
                {
                  title: "Anti-Aging Effects of Alkaline-Rich Foods",
                  answer: "Discusses how high-alkaline foods like leafy greens may counteract age-related inflammation."
                },
                {
                  title: "Reduced Cellular Damage Through Alkaline Minerals",
                  answer: "Details how alkaline minerals like magnesium and calcium found in these foods protect cells from oxidative stress and preserve tissue elasticity."
                }
              ]
            }
          ]
        }
    ]
  },
  {
    category: "V. DNA Repair Mechanisms and Nutrient Influence",
    subcategories: [
      {
        subcategory: "1. Nutrients Essential for DNA Repair",
        subsubcategories: [
          {
            subsub: "a. Vitamin D and DNA Stability",
            slides: [
              {
                title: "Role of Vitamin D in DNA Repair",
                answer: "DNA repair and immune cell protection."
              },
              {
                title: "Foods Rich in Vitamin D",
                answer: "Mushrooms, eggs, and fortified foods."
              },
              {
                title: "Vitamin D in Cancer Prevention",
                answer: "Role in cellular health and DNA stability."
              },
              {
                title: "Deficiency Risks and DNA Integrity",
                answer: "Impact of low vitamin D on genetic health."
              }
            ]
          },
          {
            subsub: "b. Polyphenols for Genetic Protection",
            slides: [
              {
                title: "Epigenetic Benefits of Polyphenols",
                answer: "How green tea helps stabilize DNA."
              },
              {
                title: "Antioxidant vs. Epigenetic Impact",
                answer: "How polyphenols may affect gene expression."
              },
              {
                title: "Green Tea's Polyphenol Benefits",
                answer: "Effects on DNA stability."
              },
              {
                title: "Polyphenols Across Diets",
                asnwer: "Variations in intake across different diet types."
              }
            ]
          },
          {
            subsub: "c. Zinc for Genetic Integrity",
            slides: [
              {
                title: "DNA Synthesis and Repair with Zinc",
                answer: "Role of zinc in maintaining DNA health."
              },
              {
                title: "Zinc-rich Foods",
                answer: "Pumpkin seeds, nuts, and beans."
              },
              {
                title: "Zinc Deficiency and Genetic Health",
                answer: "Discussing risks of inadequate zinc levels."
              }
            ]
          },
          {
            subsub: "d. Folate for DNA Replication and Repair",
            slides: [
              {
                title: "How Folate Supports DNA Health",
                answer: "Key for maintaining genetic stability."
              },
              {
                title: "Role of Folate in Preventing DNA Mutations",
                answer: "Explains how folate helps reduce the occurrence of mutations that can lead to cellular aging and disease."
              },
              {
                title: "Sources of Folate",
                answer: "Lists folate-rich foods (e.g., leafy greens, legumes, and fortified grains) and their role in supporting consistent DNA repair mechanisms."
              }
            ]
          }
        ]
      },
      {
        subcategory: "2. Diets Enhancing DNA Repair Processes",
        subsubcategories: [
          {
            subsub: "a. MIND Diet",
            slides: [
              {
                title: "Combines Mediterranean and DASH Diets",
                answer: "Boosts brain health and DNA protection."
              },
              {
                title: "Key Foods in MIND Diet",
                answer: "Berries, leafy greens, and nuts."
              },
              {
                title: "MIND Diet for Overall Genetic Health",
                answer: "Broader benefits on gene expression."
              }
            ]
          },
          {
            subsub: "b. Low-AGE Diet",
            slides: [
              {
                title: "Reducing AGEs for DNA Health",
                answer: "Focus on lower-heat cooking methods."
              },
              {
                title: "Benefits of Slow-Cooked and Raw Foods",
                answer: "Minimizing DNA damage."
              },
              {
                title: "Choosing Anti-AGE Ingredients",
                answer: "Highlights specific foods low in AGEs, such as vegetables, whole grains, and legumes, which promote DNA stability."
              },
              {
                title: "Avoiding High-AGE Processed Foods",
                answer: "Discusses the importance of avoiding AGE-rich processed foods, like fried and sugary snacks, to maintain DNA health."
              }
            ]
          },
          {
            subsub: "c. High Antioxidant Foods for DNA Integrity",
            slides: [
              {
                title: "Antioxidants Preventing DNA Damage",
                answer: "Berries, vegetables, and spices for cellular repair."
              },
              {
                title: "Vitamin C-Rich Foods for DNA Support",
                answer: "Explores how vitamin C, found in citrus fruits and peppers, strengthens DNA by neutralizing free radicals."
              },
              {
                title: "Benefits of Vitamin E-Rich Nuts and Seeds",
                answer: "Highlights how nuts and seeds, rich in vitamin E, prevent oxidative damage to DNA."
              },
              {
                title: "Combining Antioxidant Foods",
                answer: "Shows the benefits of eating various antioxidants together for optimal DNA protection."
              }
            ]
          }
        ]
      },
      {
        subcategory: "3. DNA Health and Aging Benefits",
        subsubcategories: [
          {
            subsub: "a. Protection Against Mutations",
            slides: [
              {
                title: "How Strong DNA Prevents Age-Related Mutations",
                answer: "Avoiding damage that leads to disease."
              },
              {
                title: "Polyphenols and Mutation Prevention",
                answer: "Explains how polyphenol-rich foods like grapes and green tea help protect DNA from mutations."
              },
              {
                title: "Reducing Toxins in the Diet",
                answer: "Outlines dietary choices that reduce exposure to toxins, thereby safeguarding DNA stability."
              },
              {
                title: "Folate’s Role in Mutation Protection",
                answer: "Discusses how folate aids in preventing DNA mutations by supporting DNA replication and repair."
              }
            ]
          },
          {
            subsub: "b. Longevity and Gene Stability",
            slides: [
              {
                title: "Stable Genes Extend Healthspan",
                answer: "How DNA integrity contributes to a longer, healthier life."
              },
              {
                title: "How Antioxidants Promote Gene Stability",
                answer: "Describes the role of antioxidant-rich foods in protecting genes from damage and aging."
              },
              {
                title: "Omega-3s and DNA Protection",
                answer: "Highlights the protective effects of omega-3 fatty acids on gene expression and DNA stability."
              },
              {
                title: "Epigenetic Influence of Polyphenols",
                answer: "Explains how polyphenols can positively influence gene expression, potentially extending lifespan."
              }
            ]
          },
          {
            subsub: "c. Enhanced Immune System",
            slides: [
              {
                title: "Impact of DNA on Immunity",
                answer: "Strong DNA supports a resilient immune response."
              },
              {
                title: "Nutrients for Immune-Supportive DNA",
                answer: "Focuses on vitamins and minerals, such as zinc and vitamin D, that support DNA and immunity."
              },
              {
                title: "Role of Antioxidants in Immune Health",
                answer: "Describes how antioxidants protect immune cells by reducing DNA damage."
              },
              {
                title: "The DNA-Immunity-Aging Connection",
                answer: "Shows how DNA health is linked to stronger immunity, reducing age-related immune decline."
              }
            ]
          }
        ]
      }
    ]
  }
];


const ScienceBehind = () => {
  return (
    <div className='science-behind-page'>
      {/* Title Container */}
      <div className="title-container">
        <h1>Q&A Anti Aging Diet</h1>
      </div>

      {/* Main Content Container */}
      <div className="container">
        {categoriesData.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

// Category Component
const Category = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="category">
      <div className="category-title" onClick={toggleOpen}>
        {category.category} <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="subcategories">
          {category.subcategories.map((sub, index) => (
            <SubCategory key={index} subCategory={sub} />
          ))}
        </div>
      )}
    </div>
  );
};

// SubCategory Component
const SubCategory = ({ subCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="subcategory">
      <div className="subcategory-title" onClick={toggleOpen}>
        {subCategory.subcategory} <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="subsubcategories">
          {subCategory.subsubcategories.map((subsub, index) => (
            <SubSubCategory key={index} subSubCategory={subsub} />
          ))}
        </div>
      )}
    </div>
  );
};

// SubSubCategory Component
const SubSubCategory = ({ subSubCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="subsubcategory">
      <div className="subsub-title" onClick={toggleOpen}>
        {subSubCategory.subsub} <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="slides">
          {subSubCategory.slides && subSubCategory.slides.length > 0 && (
            <Carousel slides={subSubCategory.slides} />
          )}
        </div>
      )}
    </div>
  );
};

// Carousel Component
const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="science-page-carousel">
      <button onClick={prevSlide} className="science-page-carousel-button">❮</button>
      <div className="science-page-carousel-slide">
        <h4>{slides[currentIndex].title}</h4>
        <p>{slides[currentIndex].answer}</p>
      </div>
      <button onClick={nextSlide} className="science-page-carousel-button">❯</button>
    </div>
  );
};

export default ScienceBehind;