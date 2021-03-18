const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
  const target = message.mentions.users.first() || client.user;
  const images = ["https://i.imgur.com/cGszFHh.gif", "https://media1.tenor.com/images/c3263b8196afc25ddc1d53a4224347cd/tenor.gif?itemid=9443275", "https://lh6.googleusercontent.com/hIRp_xCGjt6x5H5GSu9odKA9WPagzrMYPtT-Ow-Nte0AeHoMY4MUTlnxrZkJK248JAqNiBVi_9iaU3eYS2bWXtcdJFjsnrAV8i2H_iN5pjWWHDN6djKm2E-h3MQMUvM2DkoO3M7e",
"https://i.imgur.com/VqDPSbA.gif", "https://i.imgur.com/ELFO5CF.gif"]
const random = images[Math.floor(Math.random() * images.length)]

  const embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username} fais un high five à ${target.username}`, message.guild.iconURL())
  .setColor("#FBF2FF")
  .setImage(random)
  message.channel.send(embed)
}

module.exports.help = {
  name: "high-five"
}
