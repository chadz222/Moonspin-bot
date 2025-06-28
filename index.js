import TelegramBot from 'node-telegram-bot-api';

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

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
