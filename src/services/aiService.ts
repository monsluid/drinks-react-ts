import { openrouter } from "../lib/ai";

export default {
  async generateRecipe(prompt: string) {

    const model = 'stepfun/step-3.5-flash:free'
    //const model = 'arcee-ai/trinity-large-preview:free'

    const stream = await openrouter.chat.send({
      model: model,
      messages: [{ role: 'user', content: prompt}],
      stream: true
    })
   
    return stream
  }
}
