export const ASK_QUESTION = 'ASK_QUESTION';

export function askQuestion({ title, body }) {
  return { type: ASK_QUESTION, title, body };
}
