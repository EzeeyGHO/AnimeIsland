const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
  if(!message.member.hasPermission("KICK_MEMBERS")) {
    message.delete()
    return message.reply("t'as pas de permissions !")
  }

  const target = message.mentions.users.first()
  if(target){
    const memberTarget = message.guild.members.cache.get(target.id);
    memberTarget.kick();
    const kickMessage = new Discord.MessageEmbed()
    .setAuthor(`✔️ ${target.username} s'est fait kick !`, message.guild.iconURL())
    .setColor("GREEN")
    message.channel.send(kickMessage)

}
}

module.exports.help = {
  name: "kick"
}
