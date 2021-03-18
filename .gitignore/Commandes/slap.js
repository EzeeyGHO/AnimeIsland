const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
  const target = message.mentions.users.first() || client.user;
  const images = ["https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif", "https://thumbs.gfycat.com/PersonalUnlinedAsiaticwildass-size_restricted.gif",
"https://i.imgur.com/fm49srQ.gif", "https://reallifeanime.files.wordpress.com/2014/06/akari-slap.gif",
"https://i.pinimg.com/originals/1c/8f/0f/1c8f0f43c75c11bf504b25340ddd912d.gif",
"https://image.myanimelist.net/ui/Nxzta1m1Sc-kYrbG5bCjnupKG6x0l9DascQOIDs9QyV9Au7iLnCfJQI2RmLe622mb773NNBMaKiVfHqrJsSPZA",
"https://i.imgur.com/yROjYng.gif"]
const random = images[Math.floor(Math.random() * images.length)]

  const embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username} slap ${target.username}`, message.guild.iconURL())
  .setColor("#FBF2FF")
  .setImage(random)
  message.channel.send(embed)
}

module.exports.help = {
  name: "slap"
}
