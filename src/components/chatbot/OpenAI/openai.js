import { Configuration, OpenAIApi } from "openai";

import { OPENAI_API_KEY } from "./apiKey"; 

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function OpenAI(text) {

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(text),
      temperature: 0.6,
    });
    console.log(completion.data)
    return { result: completion.data.choices[0].text };
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      
    }
  }
}

function generatePrompt(text) {
  return `Recommend me a ${text}`;
}

export { OpenAI}