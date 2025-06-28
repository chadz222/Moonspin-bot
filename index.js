import TelegramBot from 'node-telegram-bot-api';
import express from 'express';

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token);
const app = express();

// Set Telegram webhook to point to the correct endpoint
const URL = process.env.RENDER_EXTERNAL_URL || 'https://your-render-url.onrender.com';
bot.setWebHook(`${URL}/bot${token}`);

app.use(express.json());

// Telegram webhook handler
app.post(`/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🚀 Launch MoonSpin', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🎮 Play MoonSpin',
            web_app: {
              url: 'https://moonspin-app-chadz222-sales.vercel.app'
            }
          }
        ]
      ]
    }
  });
});

// Start Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bot server is running on port ${PORT}`);
});
export default function handler(req, res) {
  res.status(200).json({ ok: true });
}
