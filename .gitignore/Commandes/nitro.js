const Dsicord = require("discord.js")

module.export.run = (client, message, args) => {
  function generate (count = 20) {
  let password = ''
  while (password.length < count) {
    password += Math.random().toString(36).substr(2)
  }
  return password.substr(0, count)
}
  const nitroEmbed = new Discord.MessageEmbed()
  .setDescription(`http://discord.gift/${generate(16)}`)
  .setColor("GREEN")
  message.channel.send(nitroEmbed)
}

module.export.help = {
  name: "nitro"
}
