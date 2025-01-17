const Telegraf = require('telegraf');
const token = 'Your token here';
const bot = new Telegraf(token)
const session = require('telegraf/session')

bot.use(session())
bot.on('text', (ctx) => {
  ctx.session.counter = ctx.session.counter || 0
  ctx.session.counter++
  return ctx.reply(`Message counter:${ctx.session.counter}`)
})

bot.launch()
