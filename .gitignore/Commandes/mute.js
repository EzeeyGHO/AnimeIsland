const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
  const timeDefault = 30000
  const target = message.mentions.users.first()
  const muterole = message.guild.roles.cache.get("822131067732885595")
  if(message.member.hasPermission("MANAGE_ROLES")) {
    if(target) {
      const muteEmbed = new Discord.MessageEmbed()
      .setAuthor(`🔇 ${target.username} a été mute !`, message.guild.iconURL())
      .setColor("GREEN")
      setInterval(function() {
        target.roles.add(muterole).then(message => {
          message.channel.send(muteEmbed)
        })
      }, timeDefault)
    } else {
      return message.reply("Mentionne")
    }
  } else {
    return message.reply("t'as pas de permissions !")
  }
}

module.exports.help = {
  name: "mute"
}
