const Discord = require("discord.js")
const prefix = require("../util.json")

module.exports.run = (client, message, args) => {
  const say = args.slice().join(" ")
  if(say) {
    message.delete()
    message.channel.send(say)
  } else {
    return message.channel.send("Tu n'as rien dis...")
  }
}

module.exports.help = {
  name: "say"
}
