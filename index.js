const Telegraf = require('telegraf');
const token = '631962216:AAEIwE6ziBPhl3UcvkO4RKNafPF7XWS2KrA';
const bot = new Telegraf(token)

bot.start((ctx) => ctx.reply('Здравствуй, ' + ctx.from.first_name + '! Давай знакомиться) Я XippiBot, а так же твой проводник в мир страха и боли'))
bot.help((ctx) => ctx.reply('Здесь ты мог увидеть, что я могу, но мой создатель лентяй. Я тебе этого не говорил'))
bot.on('photo', (ctx) => ctx.reply('Я не разборчив, но выглядит супер 👍'))
bot.hears(['Привет', 'привет', 'ghbdtn', 'Хай', 'Здравствуйте'], (ctx) => ctx.reply('Здравствуй ' + ctx.massage.from.first_name + ' ✋️'))
bot.hears(['Пони', 'пони'], (ctx) => ctx.reply('Пони - не сын лошади, а отдельны подвид 🐴')) // просто нужно
bot.launch()

// Нужно сделать запоминание имени пользователя для обращения в будующем
 bot.command('nameset', (ctx) => {
    ctx.reply('Напиши, как тебя звать')
    bot.on('text', (ctx) => {
      ctx.reply('Запомнил и даже записал. Не забуду!)')
      console.log(ctx.message)
    })
  })

// Нужно, что бы после ввода команды /nameset выводилась просьба вводить имя и это имя нужно занести в userName для этого пользователя (по id)!!!!
