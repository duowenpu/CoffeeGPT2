export default function handler(req, res) {
  const token = process.env.COZE_TOKEN;
  if (token) {
    res.status(200).json({ token });
  } else {
    res.status(500).json({ error: "Token not found" });
  }
}
