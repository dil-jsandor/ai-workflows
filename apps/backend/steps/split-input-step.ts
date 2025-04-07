import {callBedrock} from "../ai-client";

export const splitInputStep = async (input: string): Promise<string> => {
    const prompt = `Split the given text into smaller parts by paragraphs. The output format has to be a string array in json format and its elements should be the split string parts like {"results": ["paragraph1", "paragraph2"]}. The given input: ${input}`;
    const response = await callBedrock(prompt);
    return response.content[0].text;
}