export default function handler(req, res) {
    // 从环境变量中获取 Token
    const token = process.env.COZE_TOKEN;
    if (!token) {
        return res.status(500).json({ error: 'Server configuration error' });
    }
    
    res.status(200).json({ token });
}
