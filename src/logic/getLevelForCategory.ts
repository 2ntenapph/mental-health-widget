import { Questionnaire } from '../types/Questionnaire';

export function getLevelForCategory(
  score: number,
  levels: Questionnaire['scoring']['categories']['depression']['levels']
): string {
  return levels.find((lvl) => score >= lvl.min && score <= lvl.max)?.label ?? 'Неизвестно';
}