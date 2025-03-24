import { Questionnaire } from '../types/Questionnaire';

export function calculateScores(test: Questionnaire, answers: number[]) {
  const categoryScores: Record<string, number> = {};
  const hasCategories = test.questions.some(q => q.category);

  Object.keys(test.scoring.categories).forEach((category) => {
    const indexes = hasCategories
      ? test.questions
          .map((q, i) => (q.category === category ? i : -1))
          .filter(i => i >= 0)
      : test.questions.map((_, i) => i); // use all if no categories

    const raw = indexes.reduce((sum, i) => sum + answers[i], 0);
    categoryScores[category] = raw * test.scoring.scale;
  });

  return categoryScores;
}