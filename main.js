const main = async () => {
  const { Client } = require('discord.js');
  
  const client = new Client({})
  
  client.on('messageCreate', async ctx => {
    var text = ctx.content
    var isMatch = //\bsynergy|\bmove the needle|\bcircle back/gm/
    if(isMatch.test(text)){
      ctx.reply(`wtf, stop saying that`)
    }
  })
  
  client.login(process.env.DISCORDTOKEN)
}
main()
