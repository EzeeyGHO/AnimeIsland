const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
  const target = message.mentions.users.first() || client.user;
  const images = ["https://64.media.tumblr.com/374a1e0e1250feaa3f4ceecbf5233a52/tumblr_pmbk07JRNu1wvkl9lo1_500.gifv", "http://38.media.tumblr.com/889ae75a9a43272c1c064ee1be1c3adb/tumblr_n9elayYEtK1sg9gi2o1_500.gif",
"https://lh3.googleusercontent.com/proxy/McafWhdFScNzB1GCiwhOA10wcMJHHoxe91XaOwUmI6Q7UedAChs8m3p3OuLf7j3gV7R0IRZnoSN7M9oVfSPZoaKEck06Zw5-PJdwPUbZWmY", "https://i.pinimg.com/originals/aa/ef/63/aaef631a912894c0e83298a909845820.gif"]
const random = images[Math.floor(Math.random() * images.length)]

  const embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username} a tué ${target.username}`, message.guild.iconURL())
  .setColor("#FBF2FF")
  .setImage(random)
  message.channel.send(embed)
}

module.exports.help = {
  name: "kill"
}
