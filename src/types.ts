export type QuizType = 'OX' | 'FILL_BLANK';

export interface QuizQuestion {
  id: string;
  type: QuizType;
  questionText: string;
  options: string[];
  correctAnswer: string;
  verse?: {
    text: string;
    reference: string;
  };
}

export interface Verse {
  id: string;
  text: string;
  reference: string;
  questions: QuizQuestion[];
}

export interface QuizSettings {
  teamName: string;
}

export type AppView = 'HOME' | 'GAME' | 'RESULTS';
