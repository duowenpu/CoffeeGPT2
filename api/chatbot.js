// api/chatbot.js

export default function handler(req, res) {
  // 获取请求头中的密钥
  const apiKey = req.headers['x-api-key'];

  // 检查密钥是否匹配
  if (apiKey !== process.env.API_SECRET_KEY) {
    return res.status(403).json({ error: 'Forbidden: Invalid API Key' });
  }

  // 获取 token
  const token = process.env.CHATBOT_TOKEN;
  if (token) {
    res.status(200).json({ token });
  } else {
    res.status(500).json({ error: 'Token not found' });
  }
}
