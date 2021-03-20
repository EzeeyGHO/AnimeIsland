const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()
const {prefix, token} = require("./util.json")

client.on("ready", () => {
  const guildt = client.guilds.cache.get("809787429291687998")
  const guilds = guildt.memberCount

  const acts = ["Anime Island...", `${prefix}help`, "des anime !", `${guilds} membres !`]
  setInterval(function() {
    const rdm = acts[Math.floor(Math.random() * acts.length)]
    client.user.setActivity(rdm, {type: "WATCHING"})
  }, 10000)
})

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
  if(error) console.log(error);

  let commandes = f.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("aucune commande trouvé dans le dossier");

  commandes.forEach((f) => {
    let commande = require(`./Commandes/${f}`);
    console.log(`${f} hack chargée !`);
    client.commands.set(commande.help.name, commande);

  });
});
fs.readdir("./Events/", (error, f) => {
  if(error) console.log(error);
  console.log(`${f.length} events en chargement`);

  f.forEach((f) => {
      const events = require(`./Events/${f}`);
      const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
  });

});

client.login(process.env.TOKEN)

client.on("message", async message => {
  if(message.content === "Salut" || message.content === "salut" || message.content === "Hey" || message.content === "hey" || message.content === "slt" || message.content === "Slt") {
    message.react("👋")
  }
})

client.on("message", async message => {
  if(message.content === "test") {
    message.channel.send(message.guild.memberCount)
  }
})
