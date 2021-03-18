const Discord = require("discord.js")
const {prefix} = require("../util.json")

module.exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setAuthor("Voici le panel d'aide du bot...", message.guild.iconURL())
  .setThumbnail("https://media4.giphy.com/media/vRc2V5ixLGh0OU02zp/200.gif")
  .setColor("#FBF2FF")
  .setDescription(`**__Information__**

・Anime Island est un bot fais par Redorenji.
・Coder en JavaScript
・Lien du serveur : https://discord.gg/zQFaBVpcJB
・Note : Ce Bot est privée

**__Commande Classic__**

say・Commande permetant de fair dire n'importe quoi au bot. Exemple : ${prefix}say Djeff est beau.

ban・Commande permetant de bannir un membre. Exemple :${prefix}ban {user}.

kick・Commande permetant dexpulser un membre. Exemple :${prefix}kick {user}.

mute・Commande permetant de rendre un Membre muet .Exemple ${prefix}mute {user}.

8ball・Commande permetant de poser une question au bot . Exemple :${prefix}8ball suis je beau ?

user-info・Commande permetant d'avoir les information du compte.`)
  .setFooter(`Prefix is : ${prefix}`)
  message.channel.send(embed)
}

module.exports.help = {
  name: "help"
}
