const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const matchUsers = async (userA, userB) => {
  const prompt = `Compare these two profiles and determine compatibility:
  User A: ${JSON.stringify(userA)}
  User B: ${JSON.stringify(userB)}`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'system', content: prompt }],
  });

  return response.choices[0].message.content;
};

module.exports = matchUsers;
