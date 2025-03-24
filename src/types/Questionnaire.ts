export interface Questionnaire {
    id: string;
    title: string;
    options: {
      label: string;
      value: number;
    }[];
    questions: {
      text: string;
      category?: string;
    }[];
    scoring: {
      scale: number;
      categories: {
        [key: string]: {
          label: string;
          levels: {
            min: number;
            max: number;
            label: string;
          }[];
        };
      };
    };
  }