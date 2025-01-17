const Telegraf = require('telegraf');
const token = 'Your token here';
const bot = new Telegraf(token)

bot.use((ctx, next) => {
  const start = new Date()
  return next(ctx).then(() => {
    const ms = new Date() - start
    console.log('Response time %sms', ms)
  })
})

bot.on('text', (ctx) => ctx.reply('Hello World'))
bot.launch()
