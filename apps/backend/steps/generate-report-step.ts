import { callBedrock } from "../ai-client";

export const generateReportStep = async (input: string): Promise<string> => {
  const prompt = `Generate report from the given text. Input text: ${input}`;
  const response = await callBedrock(prompt);
  return response.content[0].text;
};
