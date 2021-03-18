const Discord = require("discord.js")
const moment = require("moment")

module.exports.run = (client, message, args) => {
  const target = message.mentions.users.first() || message.author
  const embed = new Discord.MessageEmbed()
  .setColor("#FBF2FF")
  .setThumbnail("https://i.pinimg.com/originals/23/03/df/2303df12f4d0929c1a2ab7580c2ede4e.gif")
  .setAuthor("Information du monsieur...", message.guild.iconURL())
  .setDescription(`**__Information du compte__**\nIdentifiant : ${target.id}\nCréation : ${moment(target.createdAt).format("MMM Do YY")}\n
    **__Information sur le serveur__**\nA rejoint : ${moment(target.joinAt).format("MMM Do YY")}\n`)
  .setImage(target.displayAvatarURL({size: 1024}))
  .setFooter(`${target.username} | User Info`)
  message.channel.send(embed)

}

module.exports.help = {
  name: "user-info"
}
