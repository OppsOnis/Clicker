import { Telegraf, Markup } from 'telegraf'

const token = '8048226538:AAE3OcGLXFJn8vJmK0l9PhnX6H1U2GvnM30'
const webAppUrl = 'https://lizard-cliker-pro-56032.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply('Hello! Press to start the app',
     Markup.inlineKeyboard([
        Markup.button.webApp('Open app', `${webAppUrl}?ref=${ctx.payload}`),
    ]))

})

bot.launch()