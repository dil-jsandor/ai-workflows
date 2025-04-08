import { callBedrock } from "../ai-client";

export const generateReportStep = async (input: string): Promise<string> => {

  const prompt = `
    You are a risk management expert. You will receive a text input. Based on this data, generate a comprehensive and professional document that will be used by executive stakeholders for risk management and strategy.
    Your task is to produce a cohesive, structured report that includes the following three sections:
    
    ---
    1. Executive Summary
    - Provide a brief overview of the overall risk landscape based on the input.
    - Mention the distribution of risk categories (e.g., "several risks fall under Operational and Legal & Compliance").
    - Highlight the types of risks that may have high business impact, based on the descriptions.
    ---
    
    2. Risk Register
    For each risk from the input, create an entry with the following fields:
    - Title
    - Category (for example categories: "Operational", "IT/Infosec", "Financial", "Regulatory/Compliance")
    - Description
    - Assumed Risk Level (Low / Medium / High) — infer this from the nature of the risk
    - Suggested Owner — e.g., CISO, Legal, Operations Manager, CFO, etc.
    - Status — set as "Open" by default

    You may infer likely impact and assign risk levels conservatively. Keep formatting clean and executive-friendly.
    
    ---
    
    3. Recommended Mitigation Plan
    For each risk (especially Medium or High risks):
    - Recommend concrete mitigation actions or controls
    - Recommend a treatment strategy (e.g., Avoid, Reduce, Transfer, Accept)
    - Mention if the risk should be monitored continuously, reviewed quarterly, or remediated immediately
    
    ---

    Important Instructions:
    - Do not modify or omit any risk.
    - Keep the tone formal and executive-appropriate.
    - Format cleanly using clear section headers, tables, or bullet lists.
    
    Your final output must be a professional, publishable risk management report ready for enterprise use. The input: ${input}`;

  const response = await callBedrock(prompt);
  return response.content[0].text;
};
