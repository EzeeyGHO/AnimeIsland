const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
  const say = args.slice().join(" ")
  if(say) {
    const p = ["Oui !", "Non !", "Oui mais non..", "Je sais pas."]
    const question = p[Math.floor(Math.random() * p.length)]
    message.channel.send(`Vous : ${say} \nMoi : ${question}`)
  } else {
    return message.channel.send("Tu n'as rien dis...")
  }
}

module.exports.help = {
  name: "8ball"
}
