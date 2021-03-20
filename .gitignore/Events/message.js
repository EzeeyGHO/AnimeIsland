const Discord = require('discord.js');
const {prefix} = require("../util.json");

module.exports = async(client, message) => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if(message.guild.channels.cache.get("818024721798397982")) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();
    const cmd = client.commands.get(commande);

    if (!cmd) return;

    return cmd.run(client, message, args);
};
