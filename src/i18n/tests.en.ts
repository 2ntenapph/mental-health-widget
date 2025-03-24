import { Questionnaire } from "src/types/Questionnaire";

const DASS21: Questionnaire = {
  id: "dass21",
  title: "DASS-21 — Depression, Anxiety and Stress Scale",
  options: [
    { label: "Did not apply to me at all", value: 0 },
    { label: "Applied to me to some degree", value: 1 },
    { label: "Applied to me a considerable degree", value: 2 },
    { label: "Applied to me very much or most of the time", value: 3 },
  ],
  questions: [
    { text: "I found it hard to wind down", category: "stress" },
    { text: "I felt dryness of my mouth", category: "anxiety" },
    {
      text: "I was unable to experience any positive feeling",
      category: "depression",
    },
    { text: "I experienced breathing difficulty", category: "anxiety" },
    {
      text: "I found it difficult to initiate activities",
      category: "depression",
    },
    { text: "I over-reacted to situations", category: "stress" },
    { text: "My hands trembled", category: "anxiety" },
    {
      text: "I felt that I was using a lot of nervous energy",
      category: "stress",
    },
    {
      text: "I was worried about situations in which I might panic",
      category: "anxiety",
    },
    { text: "I had nothing to look forward to", category: "depression" },
    { text: "I felt easily irritated", category: "stress" },
    { text: "I found it hard to relax", category: "stress" },
    { text: "I felt down-hearted and blue", category: "depression" },
    {
      text: "I was intolerant of anything that kept me from getting on with what I was doing",
      category: "stress",
    },
    { text: "I felt I was close to panic", category: "anxiety" },
    { text: "I felt that I had nothing to inspire me", category: "depression" },
    { text: "I felt worthless", category: "depression" },
    { text: "I was touchy and easily upset", category: "stress" },
    { text: "I felt scared without any good reason", category: "anxiety" },
    { text: "I felt that life was meaningless", category: "depression" },
  ],
  scoring: {
    scale: 2,
    categories: {
      depression: {
        label: "Depression",
        levels: [
          { min: 0, max: 9, label: "Normal" },
          { min: 10, max: 13, label: "Mild" },
          { min: 14, max: 20, label: "Moderate" },
          { min: 21, max: 27, label: "Severe" },
          { min: 28, max: 99, label: "Extremely Severe" },
        ],
      },
      anxiety: {
        label: "Anxiety",
        levels: [
          { min: 0, max: 7, label: "Normal" },
          { min: 8, max: 9, label: "Mild" },
          { min: 10, max: 14, label: "Moderate" },
          { min: 15, max: 19, label: "Severe" },
          { min: 20, max: 99, label: "Extremely Severe" },
        ],
      },
      stress: {
        label: "Stress",
        levels: [
          { min: 0, max: 14, label: "Normal" },
          { min: 15, max: 18, label: "Mild" },
          { min: 19, max: 25, label: "Moderate" },
          { min: 26, max: 33, label: "Severe" },
          { min: 34, max: 99, label: "Extremely Severe" },
        ],
      },
    },
  },
};

const SPIN: Questionnaire = {
  id: "spin",
  title: "SPIN — Social Phobia Inventory",
  options: [
    { label: "Not at all", value: 0 },
    { label: "A little", value: 1 },
    { label: "Moderately", value: 2 },
    { label: "Very much", value: 3 },
    { label: "Extremely", value: 4 },
  ],
  questions: [
    { text: "I fear that people will notice my blushing." },
    { text: "I avoid situations where I am the center of attention." },
    { text: "It is difficult for me to eat in front of others." },
    { text: "I feel anxious before speaking in public." },
    { text: "I am afraid to interact with strangers." },
    {
      text: "I have difficulty making phone calls, especially when someone is listening.",
    },
    { text: "I avoid interacting with authority figures." },
    { text: "I fear that I will look foolish." },
    { text: "I sweat in social situations." },
    { text: "I avoid situations where I might be evaluated." },
    { text: "I fear doing things while someone is watching me." },
    { text: "I fear that I will appear anxious." },
    { text: "I often feel anxious in social situations." },
    { text: "I avoid social interactions." },
    { text: "I experience panic in social situations." },
    { text: "I avoid events where many people will be present." },
    { text: "My anxiety affects my quality of life." },
  ],
  scoring: {
    scale: 1,
    categories: {
      total: {
        label: "Social Anxiety",
        levels: [
          { min: 0, max: 20, label: "Low" },
          { min: 21, max: 30, label: "Moderate" },
          { min: 31, max: 40, label: "Marked" },
          { min: 41, max: 50, label: "Severe" },
          { min: 51, max: 100, label: "Very severe" },
        ],
      },
    },
  },
};

const BECK: Questionnaire = {
  id: "beck",
  title: "BDI-II — Beck Depression Inventory",
  options: [
    { label: "0", value: 0 },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
  ],
  questions: [
    { text: "I do not feel sad" },
    { text: "I feel sad most of the time" },
    { text: "I cry more often than I used to" },
    { text: "I have trouble falling asleep" },
    { text: "I have a poor appetite" },
    { text: "I feel worthless" },
    { text: "I feel guilty about everything I do" },
    { text: "I feel tired and have no energy" },
    { text: "I’ve lost interest in other people" },
    { text: "I can’t make decisions" },
    { text: "I’ve lost interest in sex" },
    { text: "I have trouble concentrating" },
    { text: "I feel like I look bad" },
    { text: "I see no meaning in the future" },
    { text: "I think my life is a failure" },
    { text: "I feel like a loser" },
    { text: "I get irritated more than usual" },
    { text: "I don’t feel joy from the things I used to enjoy" },
    { text: "I have trouble doing regular tasks" },
    { text: "I think people would be better off without me" },
    { text: "I have thoughts of suicide" },
  ],
  scoring: {
    scale: 1,
    categories: {
      total: {
        label: "Depression Level",
        levels: [
          { min: 0, max: 13, label: "Minimal" },
          { min: 14, max: 19, label: "Mild" },
          { min: 20, max: 28, label: "Moderate" },
          { min: 29, max: 63, label: "Severe" },
        ],
      },
    },
  },
};

const GAD7: Questionnaire = {
  id: "gad7",
  title: "GAD-7 — Generalized Anxiety Disorder Scale",
  options: [
    { label: "Not at all", value: 0 },
    { label: "Several days", value: 1 },
    { label: "More than half the days", value: 2 },
    { label: "Nearly every day", value: 3 },
  ],
  questions: [
    { text: "Feeling nervous, anxious, or on edge" },
    { text: "Not being able to stop or control worrying" },
    { text: "Worrying too much about different things" },
    { text: "Trouble relaxing" },
    { text: "Being so restless that it's hard to sit still" },
    { text: "Becoming easily annoyed or irritable" },
    { text: "Feeling afraid as if something awful might happen" },
  ],
  scoring: {
    scale: 1,
    categories: {
      total: {
        label: "Anxiety Level",
        levels: [
          { min: 0, max: 4, label: "Minimal" },
          { min: 5, max: 9, label: "Mild" },
          { min: 10, max: 14, label: "Moderate" },
          { min: 15, max: 21, label: "Severe" },
        ],
      },
    },
  },
};

const DERS18: Questionnaire = {
  id: "ders18",
  title: "DERS-18 — Difficulties in Emotion Regulation Scale",
  options: [
    { label: "Not at all true", value: 1 },
    { label: "Slightly true", value: 2 },
    { label: "Moderately true", value: 3 },
    { label: "Very true", value: 4 },
    { label: "Completely true", value: 5 },
  ],
  questions: [
    {
      text: "I get confused about how I feel.",
      category: "clarity",
    },
    {
      text: "I have difficulty controlling my emotions.",
      category: "impulse",
    },
    {
      text: "I have trouble accepting my feelings.",
      category: "nonaccept",
    },
    {
      text: "I don’t know how I feel inside.",
      category: "clarity",
    },
    {
      text: "When I'm upset, I feel overwhelmed by my emotions.",
      category: "strategies",
    },
    {
      text: "I find it hard to concentrate when I’m upset.",
      category: "goals",
    },
    {
      text: "When I’m upset, I have trouble doing daily tasks.",
      category: "goals",
    },
    {
      text: "I think my feelings are unacceptable.",
      category: "nonaccept",
    },
    {
      text: "When I’m upset, I become impulsive.",
      category: "impulse",
    },
    {
      text: "I can’t think clearly when I’m upset.",
      category: "strategies",
    },
    {
      text: "I struggle to accept intense emotions.",
      category: "nonaccept",
    },
    {
      text: "When I’m upset, I have trouble controlling my actions.",
      category: "impulse",
    },
    {
      text: "I find it difficult to understand what I’m feeling.",
      category: "clarity",
    },
    {
      text: "I feel embarrassed about my emotions.",
      category: "nonaccept",
    },
    {
      text: "When I’m upset, I can’t organize my thoughts.",
      category: "strategies",
    },
    {
      text: "I find it hard to accept my emotions.",
      category: "nonaccept",
    },
    {
      text: "When I’m upset, I feel like nothing will help me feel better.",
      category: "strategies",
    },
    {
      text: "When I’m upset, I can’t effectively cope with the situation.",
      category: "strategies",
    },
  ],
  scoring: {
    scale: 1,
    categories: {
      clarity: {
        label: "Emotional Clarity",
        levels: [
          { min: 3, max: 6, label: "Good clarity" },
          { min: 7, max: 9, label: "Moderate difficulty" },
          { min: 10, max: 15, label: "Severe difficulty" },
        ],
      },
      impulse: {
        label: "Impulsivity",
        levels: [
          { min: 3, max: 6, label: "Low impulsivity" },
          { min: 7, max: 9, label: "Moderate impulsivity" },
          { min: 10, max: 15, label: "High impulsivity" },
        ],
      },
      nonaccept: {
        label: "Non-acceptance of Emotions",
        levels: [
          { min: 4, max: 8, label: "Good acceptance" },
          { min: 9, max: 13, label: "Moderate non-acceptance" },
          { min: 14, max: 20, label: "High non-acceptance" },
        ],
      },
      goals: {
        label: "Goal Disruption",
        levels: [
          { min: 2, max: 4, label: "Low" },
          { min: 5, max: 6, label: "Moderate" },
          { min: 7, max: 10, label: "Severe" },
        ],
      },
      strategies: {
        label: "Coping Strategies",
        levels: [
          { min: 5, max: 10, label: "Effective" },
          { min: 11, max: 15, label: "Moderate" },
          { min: 16, max: 25, label: "Poor" },
        ],
      },
    },
  },
};

const NVM: Questionnaire = {
  id: "nvm",
  title: "NVM — Negative Valence Model",
  options: [
    { label: "Strongly disagree", value: 0 },
    { label: "Somewhat disagree", value: 1 },
    { label: "Neither agree nor disagree", value: 2 },
    { label: "Somewhat agree", value: 3 },
    { label: "Strongly agree", value: 4 },
  ],
  questions: [
    { text: "I often experience fear of failure.", category: "fear" },
    {
      text: "I feel anxious even when everything is fine.",
      category: "anxiety",
    },
    { text: "I tend to avoid unpleasant situations.", category: "avoidance" },
    {
      text: "I find it hard to cope with negative emotions.",
      category: "emotional_regulation",
    },
    { text: "I feel tense without any obvious reason.", category: "anxiety" },
    {
      text: "I think too often about what might go wrong.",
      category: "rumination",
    },
    { text: "I feel helpless when facing problems.", category: "helplessness" },
    { text: "I get irritated easily.", category: "irritability" },
    {
      text: "I try to avoid situations where I might feel bad.",
      category: "avoidance",
    },
    {
      text: "I find it hard to stay calm in stressful situations.",
      category: "emotional_regulation",
    },
  ],
  scoring: {
    scale: 1,
    categories: {
      fear: {
        label: "Fear",
        levels: [
          { min: 0, max: 1, label: "Low" },
          { min: 2, max: 3, label: "Moderate" },
          { min: 4, max: 4, label: "High" },
        ],
      },
      anxiety: {
        label: "Anxiety",
        levels: [
          { min: 0, max: 2, label: "Low" },
          { min: 3, max: 5, label: "Moderate" },
          { min: 6, max: 8, label: "High" },
        ],
      },
      avoidance: {
        label: "Avoidance",
        levels: [
          { min: 0, max: 1, label: "Low" },
          { min: 2, max: 3, label: "Moderate" },
          { min: 4, max: 4, label: "High" },
        ],
      },
      emotional_regulation: {
        label: "Emotion Regulation",
        levels: [
          { min: 0, max: 3, label: "Confident" },
          { min: 4, max: 5, label: "Moderate" },
          { min: 6, max: 8, label: "Poor" },
        ],
      },
      rumination: {
        label: "Rumination",
        levels: [
          { min: 0, max: 1, label: "Low" },
          { min: 2, max: 2, label: "Moderate" },
          { min: 3, max: 4, label: "High" },
        ],
      },
      helplessness: {
        label: "Helplessness",
        levels: [
          { min: 0, max: 1, label: "Low" },
          { min: 2, max: 2, label: "Moderate" },
          { min: 3, max: 4, label: "High" },
        ],
      },
      irritability: {
        label: "Irritability",
        levels: [
          { min: 0, max: 1, label: "Low" },
          { min: 2, max: 2, label: "Moderate" },
          { min: 3, max: 4, label: "High" },
        ],
      },
    },
  },
};

const BSL23: Questionnaire = {
  id: "bsl23",
  title: "BSL-23 — Borderline Symptom List",
  options: [
    { label: "Not at all", value: 0 },
    { label: "Occasionally", value: 1 },
    { label: "Often", value: 2 },
    { label: "Very often", value: 3 },
    { label: "Always", value: 4 },
  ],
  questions: [
    { text: "I felt rejected." },
    { text: "I felt empty inside." },
    { text: "I had the urge to harm myself." },
    { text: "I was afraid others would leave me." },
    { text: "I was very sensitive to criticism." },
    { text: "I felt I couldn't control my emotions." },
    { text: "I hated myself." },
    { text: "I found it difficult to trust other people." },
    { text: "I experienced rage that was hard to control." },
    { text: "I felt lost and without direction." },
    { text: "I felt like a bad person." },
    { text: "I felt hopeless." },
    { text: "I was extremely insecure." },
    { text: "I tried to manipulate others to keep them from leaving." },
    { text: "I had extreme mood swings." },
    { text: "I felt I couldn’t be trusted." },
    { text: "I doubted my actions and decisions." },
    { text: "I thought about ending my life." },
    { text: "I felt I wasn’t good enough." },
    { text: "I felt my life was meaningless." },
    { text: "I acted impulsively without thinking about the consequences." },
    { text: "I felt that no one understood me." },
    { text: "I was obsessed with the idea of being abandoned." },
  ],
  scoring: {
    scale: 1,
    categories: {
      total: {
        label: "Total Score",
        levels: [
          { min: 0, max: 10, label: "Low symptom severity" },
          { min: 11, max: 30, label: "Moderate severity" },
          { min: 31, max: 46, label: "High severity" },
          { min: 47, max: 92, label: "Critical severity" },
        ],
      },
    },
  },
};

const BSLSupplement: Questionnaire = {
  id: "bsl-supplement",
  title: "BSL — Supplement: Behavioral Indicators",
  options: [
    { label: "No", value: 0 },
    { label: "Yes", value: 1 },
  ],
  questions: [
    { text: "I cut or injured myself." },
    { text: "I consumed excessive amounts of alcohol." },
    {
      text: "I used drugs (including marijuana, ecstasy, cocaine, etc.).",
    },
    {
      text: "I pulled my hair, scratched myself, hit myself, or otherwise harmed myself.",
    },
    {
      text: "I binged and then induced vomiting or used laxatives.",
    },
    { text: "I behaved in risky sexual situations." },
    {
      text: "I gambled, made impulsive purchases, and/or wasted money.",
    },
    {
      text: "I acted aggressively towards others (verbally or physically).",
    },
    {
      text: "I yelled, cursed, or acted rudely without serious reason.",
    },
  ],
  scoring: {
    scale: 1,
    categories: {
      total: {
        label: "Total Behavioral Activity",
        levels: [
          { min: 0, max: 2, label: "Low risk level" },
          { min: 3, max: 5, label: "Moderate risk" },
          { min: 6, max: 9, label: "High risk" },
        ],
      },
    },
  },
};

const DOCS: Questionnaire = {
  id: "docs",
  title: "DOCS — Dimensional Obsessive-Compulsive Scale",
  options: [
    { label: "Not at all", value: 0 },
    { label: "Mildly", value: 1 },
    { label: "Moderately", value: 2 },
    { label: "Severely", value: 3 },
    { label: "Very severely", value: 4 },
  ],
  questions: [
    {
      text: "How often do you experience fears of contamination from germs or harmful substances?",
      category: "contamination",
    },
    {
      text: "To what extent do you avoid objects or situations due to fear of contamination?",
      category: "contamination",
    },
    {
      text: "How intense are your thoughts about contamination?",
      category: "contamination",
    },
    {
      text: "How much do contamination fears interfere with your life?",
      category: "contamination",
    },

    {
      text: "How often do you check things (doors, stove, lights, etc.)?",
      category: "responsibility",
    },
    {
      text: "To what extent do you avoid situations where you might feel responsible for harm?",
      category: "responsibility",
    },
    {
      text: "How intense are your thoughts about possibly causing harm?",
      category: "responsibility",
    },
    {
      text: "How much do these fears interfere with your life?",
      category: "responsibility",
    },

    {
      text: "How much are you bothered by the order and symmetry of things?",
      category: "symmetry",
    },
    {
      text: "How often do you feel the need to arrange items in a specific way?",
      category: "symmetry",
    },
    {
      text: "How intense are your thoughts about disordered items?",
      category: "symmetry",
    },
    {
      text: "How much does this affect your daily functioning?",
      category: "symmetry",
    },

    {
      text: "How distressed are you by unwanted sexual, religious, or aggressive thoughts?",
      category: "unacceptable",
    },
    {
      text: "How much do you try to suppress or neutralize such thoughts?",
      category: "unacceptable",
    },
    { text: "How intense are these thoughts?", category: "unacceptable" },
    {
      text: "How much do these thoughts interfere with your life?",
      category: "unacceptable",
    },
  ],
  scoring: {
    scale: 1,
    categories: {
      contamination: {
        label: "Contamination",
        levels: [
          { min: 0, max: 5, label: "Low" },
          { min: 6, max: 11, label: "Moderate" },
          { min: 12, max: 16, label: "High" },
        ],
      },
      responsibility: {
        label: "Responsibility for Harm",
        levels: [
          { min: 0, max: 5, label: "Low" },
          { min: 6, max: 11, label: "Moderate" },
          { min: 12, max: 16, label: "High" },
        ],
      },
      symmetry: {
        label: "Order and Symmetry",
        levels: [
          { min: 0, max: 5, label: "Low" },
          { min: 6, max: 11, label: "Moderate" },
          { min: 12, max: 16, label: "High" },
        ],
      },
      unacceptable: {
        label: "Unacceptable Thoughts",
        levels: [
          { min: 0, max: 5, label: "Low" },
          { min: 6, max: 11, label: "Moderate" },
          { min: 12, max: 16, label: "High" },
        ],
      },
    },
  },
};

const HCL8: Questionnaire = {
  id: "hcl8",
  title: "HCL-8 — Hypomania Checklist",
  options: [
    { label: "No", value: 0 },
    { label: "Yes", value: 1 },
  ],
  questions: [
    { text: "Did you have more energy than usual?", category: "energy" },
    { text: "Were you more active than usual?", category: "energy" },
    { text: "Were you more talkative than usual?", category: "social" },
    { text: "Was your mood elevated?", category: "mood" },
    { text: "Did you feel like you needed less sleep?", category: "energy" },
    {
      text: "Did you feel more confident than usual?",
      category: "mood",
    },
    {
      text: "Did you spend money more freely than usual?",
      category: "impulsivity",
    },
    {
      text: "Were you more creative or inspired by ideas?",
      category: "creativity",
    },
  ],
  scoring: {
    scale: 1,
    categories: {
      energy: {
        label: "Increased Energy",
        levels: [
          { min: 0, max: 1, label: "Low" },
          { min: 2, max: 3, label: "Elevated" },
        ],
      },
      mood: {
        label: "Mood",
        levels: [
          { min: 0, max: 0, label: "Low" },
          { min: 1, max: 2, label: "Elevated" },
        ],
      },
      social: {
        label: "Sociability",
        levels: [
          { min: 0, max: 0, label: "No change" },
          { min: 1, max: 1, label: "Increased" },
        ],
      },
      impulsivity: {
        label: "Impulsivity",
        levels: [
          { min: 0, max: 0, label: "Absent" },
          { min: 1, max: 1, label: "Present" },
        ],
      },
      creativity: {
        label: "Creativity",
        levels: [
          { min: 0, max: 0, label: "No" },
          { min: 1, max: 1, label: "Yes" },
        ],
      },
    },
  },
};

const HCL32: Questionnaire = {
  id: "hcl32",
  title: "HCL-32 — Hypomania Checklist",
  options: [
    { label: "No", value: 0 },
    { label: "Yes", value: 1 },
  ],
  questions: [
    { text: "Did you have more energy than usual?" },
    { text: "Were you more active than usual?" },
    { text: "Were you more talkative than usual?" },
    { text: "Was your mood elevated?" },
    { text: "Did you feel like you needed less sleep?" },
    { text: "Did you feel more confident than usual?" },
    { text: "Were you more friendly or sociable?" },
    { text: "Did you flirt more or engage in more sexual activity?" },
    { text: "Did you make more decisions than usual?" },
    { text: "Did you work more productively?" },
    { text: "Did you exercise more?" },
    { text: "Did you spend more money than usual?" },
    { text: "Did you show more interest in new projects or activities?" },
    { text: "Did you feel more creative or inspired?" },
    { text: "Did you speak faster or interrupt others more?" },
    { text: "Did you behave more impulsively?" },
    { text: "Did you feel less shy or more uninhibited?" },
    {
      text: "Did you make more phone calls or use the internet more frequently?",
    },
    { text: "Were you more interested in sex?" },
    { text: "Did you joke or laugh more than usual?" },
    { text: "Were you more easily distracted?" },
    { text: "Did you feel more active in the evening than during the day?" },
    { text: "Did you think faster than usual?" },
    { text: "Did you feel more self-confident?" },
    { text: "Did you make decisions more quickly than usual?" },
    { text: "Were you more interested in other people?" },
    { text: "Did you feel more alive than usual?" },
    { text: "Were you more inclined to act spontaneously?" },
    { text: "Did you notice your emotions were more intense?" },
    { text: "Did you feel a greater need to move or take action?" },
    { text: "Did you behave differently than usual?" },
    { text: "Did others notice changes in your behavior?" },
  ],
  scoring: {
    scale: 1,
    categories: {
      total: {
        label: "Total Score",
        levels: [
          { min: 0, max: 13, label: "Low level of hypomania" },
          { min: 14, max: 32, label: "Elevated level of hypomania" },
        ],
      },
    },
  },
};

const ASRS5: Questionnaire = {
  id: "asrs5",
  title: "ASRS-5 — Adult ADHD Self-Report Screening Scale for DSM-5",
  options: [
    { label: "Never", value: 0 },
    { label: "Rarely", value: 1 },
    { label: "Sometimes", value: 2 },
    { label: "Often", value: 3 },
    { label: "Very often", value: 4 },
  ],
  questions: [
    {
      text: "How often do you have trouble focusing when doing repetitive tasks?",
    },
    {
      text: "How often do you forget to finish tasks, even when they are important?",
    },
    {
      text: "How often do you have difficulty organizing tasks and responsibilities?",
    },
    {
      text: "How often do you avoid or delay starting tasks that require mental effort?",
    },
    {
      text: "How often do you lose things necessary for daily activities (keys, wallet, documents)?",
    },
    {
      text: "How often do you feel restless or find it difficult to sit still?",
    },
  ],
  scoring: {
    scale: 1,
    categories: {
      total: {
        label: "Likelihood of Adult ADHD",
        levels: [
          { min: 0, max: 9, label: "Unlikely" },
          { min: 10, max: 17, label: "Possible signs" },
          { min: 18, max: 24, label: "High likelihood" },
        ],
      },
    },
  },
};

const Copeland: Questionnaire = {
  id: "copeland",
  title: "Copeland Symptom Checklist (Adult Version)",
  options: [
    { label: "No", value: 0 },
    { label: "Sometimes", value: 1 },
    { label: "Often", value: 2 },
    { label: "Almost always", value: 3 },
  ],
  questions: [
    { text: "You have difficulty concentrating." },
    { text: "You cannot stay focused on one thing for long." },
    { text: "You find it hard to finish what you started." },
    { text: "You often postpone important tasks." },
    { text: "You are easily distracted from what you're doing." },
    { text: "You feel a constant need for stimulation." },
    { text: "You have difficulty organizing everyday tasks." },
    { text: "You frequently lose things (keys, wallet, etc.)." },
    { text: "You feel anxious or internally tense." },
    { text: "You are irritable and quick-tempered." },
    { text: "You find it difficult to relax." },
    { text: "You often forget appointments or commitments." },
    { text: "You speak or act without thinking." },
    { text: "You tend to interrupt others." },
    { text: "You experience mood swings." },
    { text: "You get excited easily but quickly lose interest." },
    { text: "You often feel overwhelmed." },
    { text: "You avoid tasks that require sustained attention." },
    { text: "You tend to procrastinate." },
    { text: "You feel your emotions easily spiral out of control." },
  ],
  scoring: {
    scale: 1,
    categories: {
      total: {
        label: "Total Symptom Level",
        levels: [
          { min: 0, max: 19, label: "Low symptom level" },
          { min: 20, max: 39, label: "Moderate symptoms" },
          { min: 40, max: 60, label: "Clear signs of adult ADHD" },
        ],
      },
    },
  },
};

const AAQoL29: Questionnaire = {
  id: "aaqol29",
  title: "AAQoL-29 — Adult ADHD Quality of Life Scale",
  options: [
    { label: "Strongly disagree", value: 1 },
    { label: "Somewhat disagree", value: 2 },
    { label: "Neither agree nor disagree", value: 3 },
    { label: "Somewhat agree", value: 4 },
    { label: "Strongly agree", value: 5 },
  ],
  questions: [
    {
      text: "I often feel like I lack energy.",
      category: "life_productivity",
    },
    {
      text: "I forget things I’m supposed to do.",
      category: "life_productivity",
    },
    { text: "I find it hard to concentrate.", category: "life_productivity" },
    {
      text: "My daily life is poorly organized.",
      category: "life_productivity",
    },
    {
      text: "I struggle with time management.",
      category: "life_productivity",
    },
    {
      text: "I often make careless mistakes.",
      category: "life_productivity",
    },
    {
      text: "I find it difficult to stick to a schedule.",
      category: "life_productivity",
    },
    {
      text: "I frequently miss appointments and commitments.",
      category: "life_productivity",
    },
    {
      text: "I feel like I have no control over my life.",
      category: "life_productivity",
    },
    {
      text: "My finances suffer due to disorganization.",
      category: "life_productivity",
    },

    { text: "I am satisfied with my body.", category: "self_esteem" },
    { text: "I feel confident.", category: "self_esteem" },
    { text: "I respect myself.", category: "self_esteem" },
    { text: "I feel worthy of love.", category: "self_esteem" },
    { text: "I am proud of myself.", category: "self_esteem" },

    {
      text: "I find it easy to socialize with others.",
      category: "relationships",
    },
    {
      text: "I feel accepted by others as I am.",
      category: "relationships",
    },
    { text: "I have a close support network.", category: "relationships" },
    {
      text: "I am satisfied with my social relationships.",
      category: "relationships",
    },
    { text: "I make new friends easily.", category: "relationships" },

    { text: "I enjoy life.", category: "life_outlook" },
    { text: "I feel useful.", category: "life_outlook" },
    {
      text: "I am satisfied with my work or studies.",
      category: "life_outlook",
    },
    { text: "I feel my life has meaning.", category: "life_outlook" },
    { text: "I am hopeful for a better future.", category: "life_outlook" },
    {
      text: "I feel my life is generally successful.",
      category: "life_outlook",
    },
    { text: "I can cope with difficulties.", category: "life_outlook" },
    {
      text: "I receive support when I need it.",
      category: "life_outlook",
    },
    {
      text: "I feel a balance between work and personal life.",
      category: "life_outlook",
    },
  ],
  scoring: {
    scale: 1,
    categories: {
      life_productivity: {
        label: "Life Productivity",
        levels: [
          { min: 10, max: 20, label: "Low" },
          { min: 21, max: 35, label: "Moderate" },
          { min: 36, max: 50, label: "High" },
        ],
      },
      self_esteem: {
        label: "Self-Esteem",
        levels: [
          { min: 5, max: 10, label: "Low" },
          { min: 11, max: 15, label: "Moderate" },
          { min: 16, max: 25, label: "High" },
        ],
      },
      relationships: {
        label: "Social Relationships",
        levels: [
          { min: 5, max: 10, label: "Difficulties" },
          { min: 11, max: 15, label: "Satisfactory" },
          { min: 16, max: 25, label: "Healthy Relationships" },
        ],
      },
      life_outlook: {
        label: "Life Outlook",
        levels: [
          { min: 9, max: 20, label: "Low" },
          { min: 21, max: 30, label: "Moderate" },
          { min: 31, max: 45, label: "Positive" },
        ],
      },
    },
  },
};

const DIVA5: Questionnaire = {
  id: "diva5",
  title:
    "DIVA-5 — Diagnostic Interview for ADHD in Adults (Simplified Self-Assessment)",
  options: [
    { label: "Never", value: 0 },
    { label: "Sometimes", value: 1 },
    { label: "Often", value: 2 },
    { label: "Very often", value: 3 },
  ],
  questions: [
    {
      text: "I have difficulty paying attention to details or make careless mistakes.",
      category: "inattention",
    },
    {
      text: "I struggle to maintain attention during tasks or conversations.",
      category: "inattention",
    },
    {
      text: "I often don’t finish things I’ve started.",
      category: "inattention",
    },
    {
      text: "I have difficulty organizing tasks and responsibilities.",
      category: "inattention",
    },
    {
      text: "I avoid tasks that require prolonged mental effort.",
      category: "inattention",
    },
    {
      text: "I lose things needed for everyday activities.",
      category: "inattention",
    },
    {
      text: "I’m easily distracted by external stimuli.",
      category: "inattention",
    },
    {
      text: "I’m forgetful in daily activities.",
      category: "inattention",
    },

    {
      text: "I often fidget or can’t stay still.",
      category: "hyperactivity",
    },
    {
      text: "I feel internally restless.",
      category: "hyperactivity",
    },
    {
      text: "I talk excessively or interrupt others.",
      category: "hyperactivity",
    },
    {
      text: "I find it hard to wait my turn.",
      category: "hyperactivity",
    },
    {
      text: "I make impulsive decisions or act without thinking.",
      category: "hyperactivity",
    },
    {
      text: "I interrupt or intrude into conversations or activities.",
      category: "hyperactivity",
    },
  ],
  scoring: {
    scale: 1,
    categories: {
      inattention: {
        label: "Inattention",
        levels: [
          { min: 0, max: 8, label: "Low level" },
          { min: 9, max: 14, label: "Elevated inattention" },
          { min: 15, max: 24, label: "Marked symptoms" },
        ],
      },
      hyperactivity: {
        label: "Hyperactivity / Impulsivity",
        levels: [
          { min: 0, max: 6, label: "Low level" },
          { min: 7, max: 11, label: "Increased activity" },
          { min: 12, max: 21, label: "Marked symptoms" },
        ],
      },
    },
  },
};

const SF36: Questionnaire = {
  id: "sf36",
  title: "SF-36 — Health Survey (36 items)",
  options: [
    { label: "Not at all", value: 1 },
    { label: "A little", value: 2 },
    { label: "Moderately", value: 3 },
    { label: "Quite a bit", value: 4 },
    { label: "Very much", value: 5 },
  ],
  questions: [
    {
      text: "Does your physical health limit your ability to do heavy physical work?",
      category: "physical_functioning",
    },
    {
      text: "Are you able to climb several flights of stairs?",
      category: "physical_functioning",
    },
    {
      text: "Do you have difficulty doing moderate activities (like cleaning, hiking)?",
      category: "physical_functioning",
    },
    {
      text: "To what extent does your physical condition limit your work or daily activities?",
      category: "role_physical",
    },
    {
      text: "Have you experienced pain that interferes with your daily activities?",
      category: "pain",
    },
    {
      text: "Have emotional problems limited your work or daily activities?",
      category: "role_emotional",
    },
    {
      text: "Have you felt tired in the past week?",
      category: "vitality",
    },
    {
      text: "Have you felt energetic in the past week?",
      category: "vitality",
    },
    { text: "Have you felt nervous?", category: "mental_health" },
    { text: "Have you felt down or sad?", category: "mental_health" },
    {
      text: "Have you felt calm and balanced?",
      category: "mental_health",
    },
    {
      text: "Have you felt happy in the past week?",
      category: "mental_health",
    },
    {
      text: "To what extent has your physical health interfered with social interaction?",
      category: "social_functioning",
    },
    {
      text: "To what extent has your emotional state interfered with social life?",
      category: "social_functioning",
    },
    {
      text: "How would you rate your general health?",
      category: "general_health",
    },
    {
      text: "Do you expect your health to get worse?",
      category: "general_health",
    },
  ],
  scoring: {
    scale: 1,
    categories: {
      physical_functioning: {
        label: "Physical Functioning",
        levels: [
          { min: 3, max: 6, label: "Highly limited" },
          { min: 7, max: 10, label: "Moderate" },
          { min: 11, max: 15, label: "Good" },
        ],
      },
      role_physical: {
        label: "Role — Physical Health",
        levels: [
          { min: 1, max: 1, label: "Limited" },
          { min: 2, max: 2, label: "Moderate" },
          { min: 3, max: 4, label: "Good" },
        ],
      },
      pain: {
        label: "Pain",
        levels: [
          { min: 1, max: 2, label: "Severe" },
          { min: 3, max: 4, label: "Moderate" },
          { min: 5, max: 5, label: "Mild or None" },
        ],
      },
      role_emotional: {
        label: "Role — Emotional State",
        levels: [
          { min: 1, max: 1, label: "Highly limited" },
          { min: 2, max: 2, label: "Moderate" },
          { min: 3, max: 4, label: "Good" },
        ],
      },
      vitality: {
        label: "Vitality",
        levels: [
          { min: 2, max: 3, label: "Low" },
          { min: 4, max: 5, label: "Moderate" },
          { min: 6, max: 8, label: "High" },
        ],
      },
      mental_health: {
        label: "Mental Health",
        levels: [
          { min: 4, max: 7, label: "Low" },
          { min: 8, max: 11, label: "Moderate" },
          { min: 12, max: 16, label: "Good" },
        ],
      },
      social_functioning: {
        label: "Social Functioning",
        levels: [
          { min: 2, max: 3, label: "Limited" },
          { min: 4, max: 5, label: "Moderate" },
          { min: 6, max: 8, label: "Good" },
        ],
      },
      general_health: {
        label: "General Health",
        levels: [
          { min: 2, max: 3, label: "Low" },
          { min: 4, max: 6, label: "Average" },
          { min: 7, max: 10, label: "Good" },
        ],
      },
    },
  },
};

const EDEQ: Questionnaire = {
  id: "edeq",
  title: "EDE-Q — Eating Disorder Examination Questionnaire",
  options: [
    { label: "Never", value: 0 },
    { label: "Rarely", value: 1 },
    { label: "Sometimes", value: 2 },
    { label: "Often", value: 3 },
    { label: "Very often", value: 4 },
    { label: "Almost always", value: 5 },
    { label: "Always", value: 6 },
  ],
  questions: [
    {
      text: "I was concerned about the possibility of gaining weight.",
      category: "weight_concern",
    },
    {
      text: "I felt my self-esteem was strongly influenced by my weight.",
      category: "weight_concern",
    },
    {
      text: "I tried to restrict food intake to control my weight.",
      category: "dietary_restraint",
    },
    {
      text: "I avoided certain foods due to fear of gaining weight.",
      category: "dietary_restraint",
    },
    {
      text: "I considered myself overweight despite what others said.",
      category: "shape_concern",
    },
    {
      text: "I felt my self-esteem was strongly influenced by my body shape.",
      category: "shape_concern",
    },
    {
      text: "I was dissatisfied with my body shape.",
      category: "shape_concern",
    },
    {
      text: "I frequently thought about my body and figure.",
      category: "shape_concern",
    },
    {
      text: "I often felt guilty after eating.",
      category: "eating_concern",
    },
    {
      text: "I felt a loss of control over eating.",
      category: "eating_concern",
    },
    {
      text: "I ate large amounts of food in a short period of time.",
      category: "eating_concern",
    },
    {
      text: "I was preoccupied with thoughts about food.",
      category: "eating_concern",
    },
  ],
  scoring: {
    scale: 1,
    categories: {
      weight_concern: {
        label: "Weight Concern",
        levels: [
          { min: 0, max: 4, label: "Low" },
          { min: 5, max: 8, label: "Moderate" },
          { min: 9, max: 12, label: "High" },
        ],
      },
      dietary_restraint: {
        label: "Dietary Restraint",
        levels: [
          { min: 0, max: 2, label: "Low" },
          { min: 3, max: 5, label: "Moderate" },
          { min: 6, max: 8, label: "Elevated" },
        ],
      },
      shape_concern: {
        label: "Shape Concern",
        levels: [
          { min: 0, max: 5, label: "Low" },
          { min: 6, max: 10, label: "Moderate" },
          { min: 11, max: 16, label: "High" },
        ],
      },
      eating_concern: {
        label: "Eating Concern",
        levels: [
          { min: 0, max: 4, label: "Low" },
          { min: 5, max: 8, label: "Moderate" },
          { min: 9, max: 12, label: "Elevated" },
        ],
      },
    },
  },
};

const IES: Questionnaire = {
  id: "ies",
  title: "IES — Impact of Event Scale",
  options: [
    { label: "Never", value: 0 },
    { label: "Rarely", value: 1 },
    { label: "Sometimes", value: 3 },
    { label: "Often", value: 5 },
  ],
  questions: [
    {
      text: "I saw images of the event popping into my mind even when I didn’t want them to.",
      category: "intrusion",
    },
    { text: "I had dreams about the event.", category: "intrusion" },
    {
      text: "I felt as if the event was happening again.",
      category: "intrusion",
    },
    {
      text: "I became upset and nervous when something reminded me of the event.",
      category: "intrusion",
    },
    {
      text: "I tried not to think about the event.",
      category: "avoidance",
    },
    {
      text: "I tried hard not to feel emotions related to the event.",
      category: "avoidance",
    },
    { text: "I avoided reminders of the event.", category: "avoidance" },
    {
      text: "I felt like my emotions were numb.",
      category: "avoidance",
    },
    {
      text: "I felt that past events were interfering with my ability to live in the present.",
      category: "intrusion",
    },
    {
      text: "I found it difficult to express my feelings about the event.",
      category: "avoidance",
    },
    {
      text: "I recalled the event even when I didn’t want to.",
      category: "intrusion",
    },
    { text: "I avoided talking about the event.", category: "avoidance" },
  ],
  scoring: {
    scale: 1,
    categories: {
      intrusion: {
        label: "Intrusive Symptoms",
        levels: [
          { min: 0, max: 8, label: "Low" },
          { min: 9, max: 20, label: "Moderate" },
          { min: 21, max: 35, label: "Severe" },
        ],
      },
      avoidance: {
        label: "Avoidance",
        levels: [
          { min: 0, max: 8, label: "Low" },
          { min: 9, max: 20, label: "Moderate" },
          { min: 21, max: 35, label: "Severe" },
        ],
      },
    },
  },
};

const DEBQ: Questionnaire = {
  id: "debq",
  title: "DEBQ — Dutch Eating Behavior Questionnaire",
  options: [
    { label: "Never", value: 1 },
    { label: "Rarely", value: 2 },
    { label: "Sometimes", value: 3 },
    { label: "Often", value: 4 },
    { label: "Very often", value: 5 },
  ],
  questions: [
    { text: "Do you eat when you're upset?", category: "emotional" },
    { text: "Do you eat more when you feel lonely?", category: "emotional" },
    { text: "Do you eat more when you're bored?", category: "emotional" },
    { text: "Do you eat when you're angry?", category: "emotional" },
    { text: "Do you eat when you're stressed?", category: "emotional" },

    {
      text: "Do you eat less when you notice you've gained weight?",
      category: "restrained",
    },
    {
      text: "Do you control your portion sizes to manage your weight?",
      category: "restrained",
    },
    {
      text: "Do you try to eat less while on a diet?",
      category: "restrained",
    },
    {
      text: "Do you avoid high-calorie foods?",
      category: "restrained",
    },
    {
      text: "Do you weigh yourself regularly to monitor your eating?",
      category: "restrained",
    },

    {
      text: "Do you feel the urge to eat when you see tasty food?",
      category: "external",
    },
    {
      text: "Do you start eating when you smell food?",
      category: "external",
    },
    {
      text: "Do you eat even when you're not hungry because the food looks appealing?",
      category: "external",
    },
    {
      text: "Are you drawn to food when you're around others who are eating?",
      category: "external",
    },
    {
      text: "Do you eat when you see food on TV or in advertisements?",
      category: "external",
    },
  ],
  scoring: {
    scale: 1,
    categories: {
      emotional: {
        label: "Emotional Eating",
        levels: [
          { min: 5, max: 10, label: "Low" },
          { min: 11, max: 18, label: "Moderate" },
          { min: 19, max: 25, label: "High" },
        ],
      },
      restrained: {
        label: "Restrained Eating",
        levels: [
          { min: 5, max: 10, label: "Low" },
          { min: 11, max: 18, label: "Moderate" },
          { min: 19, max: 25, label: "High" },
        ],
      },
      external: {
        label: "External Eating",
        levels: [
          { min: 5, max: 10, label: "Low" },
          { min: 11, max: 18, label: "Moderate" },
          { min: 19, max: 25, label: "High" },
        ],
      },
    },
  },
};

export default {
  dass21: DASS21,
  spin: SPIN,
  beck: BECK,
  gad7: GAD7,
  ders18: DERS18,
  nvm: NVM,
  bsl23: BSL23,
  bsl_supplement: BSLSupplement,
  docs: DOCS,
  hcl8: HCL8,
  hcl32: HCL32,
  asrs5: ASRS5,
  copeland: Copeland,
  aaqol29: AAQoL29,
  diva5: DIVA5,
  sf36: SF36,
  edeq: EDEQ,
  ies: IES,
  debq: DEBQ,
};
