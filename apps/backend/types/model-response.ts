type ModelResponse = {
    id: string,
    type: string,
    role: string,
    model:string,
    content: [
        {
            type: string,
            text: string,
        }
    ],
    stop_reason: string,
    stop_sequence: string | null,
    usage: {
        input_tokens: number,
        output_tokens: number
    }
}