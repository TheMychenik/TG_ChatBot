const Telegraf = require('telegraf');
const token = '631962216:AAEIwE6ziBPhl3UcvkO4RKNafPF7XWS2KrA';
const bot = new Telegraf(token)

bot.context.db = {
  getScores: () => { return 42 }
}

bot.on('text', (ctx) => {
  const scores = ctx.db.getScores(ctx.message.from.username)
  return ctx.reply(`${ctx.message.from.username}: ${score}`)
})

bot.launch()
