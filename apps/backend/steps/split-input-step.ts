import {callBedrock} from "../ai-client";

export const splitInputStep = async (input: string): Promise<string> => {
    const prompt = `
    Please split the following text into equally sized sections, each approximately 200–300 characters long.
    Try not to break sentences or paragraphs in the middle. The goal is to analyze each part separately later for potential security risks.
    The output format has to be a string array in json format and its elements should be the split string parts like {"results": ["section1", "section2"]}. The given text: ${input}`;
    const response = await callBedrock(prompt);
    return response.content[0].text;
}