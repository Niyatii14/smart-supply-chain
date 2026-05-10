import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fetch from 'node-fetch'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// dotenv.config({ path: join(__dirname, '..', '.env') })
// dotenv.config()
dotenv.config({ path: 'C:\\Users\\namam\\OneDrive\\Desktop\\project\\smart-supply-chain\\backend\\.env' })

console.log('GROQ_API_KEY loaded:', !!process.env.GROQ_API_KEY)

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/analyze-route', async (req, res) => {
  const { src, dst, cargo } = req.body
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{
          role: 'user',
          content: `Analyze logistics route from ${src} to ${dst}. Cargo: ${cargo}. Give: 1) Risk level (Low/Medium/High/Critical) 2) Key risks 3) Recommendation. Be concise.`
        }],
        max_tokens: 500
      })
    })
    const data = await response.json()
    console.log('Groq response:', JSON.stringify(data)) // debug ke liye

// Safe check
if (!data.choices || data.choices.length === 0) {
  return res.status(500).json({ error: JSON.stringify(data) })
}

    const result = data.choices[0].message.content
    res.json({ result })
  } catch(err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(3001, () => console.log('Backend running on port 3001'))