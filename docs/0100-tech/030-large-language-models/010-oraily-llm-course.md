# O'Reilly Large Language Models and ChatGPT in 3 Weeks Course

Here's my LLM usage workflow based on my personal experience and my takes on the [Large Language Models and ChatGPT in 3 Weeks](https://learning.oreilly.com/live-events/large-language-models-and-chatgpt-in-3-weeks/0636920090988/0636920090987/) event.

## Autoregressive and Autoencoding Models

Autoregressive models predict the next token based on the previous tokens. This means that they can only generate text in one direction and should generate text one token at a time. The GPT model family is an example of autoregressive models. This also means that the text can be shown as it's being generated which is a nice UX feature. **Autoregressive models are better for text generation.**

Autoencoding models predict the next token based on the previous and next tokens. This means that they can generate text in both directions and generate text in batches instead of one token at a time. The BERT model family is an example of autoencoding models. Since the output of the model is not visible until the generation is complete, text generation with these models feels slower than autoregressive models. **Autoencoding models are better for text understanding and classification.**

There are also models that combine both approaches. The T5 model family is an example of these models.

:::info

Check out [here](https://aliissa99.medium.com/transformer-gpt-3-gpt-j-t5-and-bert-4cf8915dd86f) and [here](https://github.com/christianversloot/machine-learning-articles/blob/main/differences-between-autoregressive-autoencoding-and-sequence-to-sequence-models-in-machine-learning.md) to get a better understanding of the fundamentals and underlying concepts like transformers and the reason behind this behaviors.

:::

## Chat Models

Autoregressive LLMs are good at completing text, but unless they've been trained on conversational data, they are not good at conversations and handling tasks. Chat models are trained [in a way](https://openai.com/blog/chatgpt) that they can handle conversations and tasks.

Chat histories, user interactions, and feedback (such as thumbs up/down, copying outputs, etc.) would be used to train newer versions of the model. This means that there may be noticeable differences in the outputs across different versions.

:::note

The latest version of a model is not always the best version for your use case. You need to have proper testing and evaluation in place and compare outputs to make sure that you are using the best version for your use case.

:::

## Prompt Structure

### Defining the Task

Define the task before providing the context. Because the task comes before the context, when the model is generating next token, tokens that are related to the task will be more likely to be generated.

```text
Write a reply to the following email <+ addition description of the command>:
<the email>
```

### Define the Output Format

After task definition, you can also define the output format. Here's an example output format that I've used for [CleverMessages](https://clevermsg.io/):

```text
Use this format:

MessageLength: (length of the message)
Input: (the message the user wants to say)
ReplyTo: (optional: message the user wants to reply to)
Message: (what user should say)
```

And I give the following context:

```text
MessageLength: <from configuration>
Input: <user input>
ReplyTo: <user input>
Message:
```

and the model will generate the input in proper format.

### Few Shot Learning

If the model is not able to give you the answer just from the task definition, you can give it a few examples of the context and desired output. This is called few shot learning.

:::tip

Usually three examples are enough for the model to learn the task.

:::

### Chain of Thoughts

You can ask the model to reason through the generation of the response. You can add `reason through it step by step` to the end of the prompt and the model will generate the response step by step, then give you the final response.

:::tip

To make the output parsable by a program, you can put thinking steps as part of the output format.

:::

## Model Parameters

### Temperature

Temperature controls how smooth the distribution of the next token's probabilities is. Lower temperature reduces the chance of generating unexpected tokens, making the output more predictable. Higher temperature increases the chance of generating unexpected tokens, making the output more creative.

### Top P

Top P controls how many tokens are considered when generating the next token based on their probabilities. Lower top P means fewer tokens are considered, making the output more predictable.

## Classification

LLMs can be used for classification tasks like sentiment analysis or similar labeling tasks. For example you can use [facebook/bart-large-mnli](https://huggingface.co/facebook/bart-large-mnli) without fine-tuning.

## Recommendations

[EBay uses BERT for product recommendations](https://tech.ebayinc.com/engineering/how-ebay-created-a-language-model-with-three-billion-item-titles/).

## Cost

You can analyze your application's token usage to estimate the cost of using closed source LLMs like OpenAI. You can also use open source LLMs and host them yourself to reduce the cost.

## Model Output Evaluation

To make sure the model is generating the desired output, you need to have proper test cases in place. You can use [Vellum](https://www.vellum.ai) playground to test your inputs and outputs and compare them with other models.

