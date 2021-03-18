const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
  if(!message.member.hasPermission("BAN_MEMBERS")) {
    message.delete()
    return message.reply("t'as pas de permissions !")
  }

  const target = message.mentions.users.first()
  if(target){
    const memberTarget = message.guild.members.cache.get(target.id);
    memberTarget.ban();
    const banMessage = new Discord.MessageEmbed()
    .setAuthor(`✔️ ${target.username} s'est fait ban !`, message.guild.iconURL())
    .setColor("GREEN")
    message.channel.send(banMessage)

}
}

module.exports.help = {
  name: "ban"
}
