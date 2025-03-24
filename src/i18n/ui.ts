export const ui = {
    ru: {
      title: "Психологические тесты",
      backToCategories: "← Назад к категориям",
      backToTests: "← Назад к тестам",
      restart: "Начать сначала",
      continue: "Продолжить",
      retake: "Пройти заново",
      resultHeader: "Завершить",
      unfinishedTestPrompt: "У вас уже есть незавершённый тест. Хотите продолжить или начать заново?",
      questionProgress: (i: number, total: number) => `Вопрос ${i} из ${total}`,
      testCount: (n: number) => {
        const mod10 = n % 10;
        const mod100 = n % 100;
        if (mod10 === 1 && mod100 !== 11) return `${n} тест`;
        if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return `${n} теста`;
        return `${n} тестов`;
      },
      categories: {
        emotion: "Эмоциональное состояние",
        anxiety: "Тревожность и страхи",
        adhd: "СДВГ и регуляция",
        affective: "Аффективные / личностные расстройства",
        eating: "Пищевое поведение",
      },
    },
    en: {
      title: "Psychological Tests",
      backToCategories: "← Back to categories",
      backToTests: "← Back to tests",
      restart: "Restart",
      continue: "Continue",
      retake: "Retake",
      resultHeader: "See results",
      unfinishedTestPrompt: "You have an unfinished test. Continue or start over?",
      questionProgress: (i: number, total: number) => `Question ${i} of ${total}`,
      testCount: (n: number) => n > 1 ? `${n} tests` : `${n} test`,
      categories: {
        emotion: "Emotional State",
        anxiety: "Anxiety & Fears",
        adhd: "ADHD & Regulation",
        affective: "Affective / Personality Disorders",
        eating: "Eating Behavior",
      },
    }
  };