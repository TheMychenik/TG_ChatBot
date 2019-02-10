const Telegraf = require('telegraf');
const token = '631962216:AAEIwE6ziBPhl3UcvkO4RKNafPF7XWS2KrA';
const bot = new Telegraf(token)
const session = require('telegraf/session')

bot.use(session())
bot.on('text', (ctx) => {
  ctx.session.counter = ctx.session.counter || 0
  ctx.session.counter++
  return ctx.reply(`Message counter:${ctx.session.counter}`)
})

bot.launch()
