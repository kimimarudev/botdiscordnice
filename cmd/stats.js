const Discord = require("discord.js"),
os = require('os');
exports.run = (client, message) => {
    
    let embed = new Discord.MessageEmbed()
        .setTimestamp()
        .addField(`:map: Nombre de serveurs`, `${client.guilds.cache.size}`, true)
        .addField(`:bust_in_silhouette: Nombre d\'utilisateurs`, `${client.users.cache.size}`, true)  
        .addField(`:speech_balloon:  Nombre de channel(s)`, `${client.channels.cache.size}`, true)
        .addField(`:desktop: System D'exploitation`, `${os.platform()}`, true)
        .addField(`:gear: Architecture`, `${os.arch()}`, true)
        .addField(`:rocket:  Processeur`, `${os.cpus().map(i => `${i.model}`)[0]}`, true)
        .addField(`:pager: RAM`, `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`, true)
        .addField(`:dividers: Lib`, `Discord.js ${Discord.version}`, true)
        .addField(`:alarm_clock: Connecté depuis`, ""+(Math.round(client.uptime / (1000 * 60 * 60))) + " Heure(s), " + (Math.round(client.uptime / (1000 * 60)) % 60) + " minute(s) et " + (Math.round(client.uptime / 1000) % 60) + " seconde(s)"+"")
        .setFooter(client.footer)

    message.channel.send(embed);
};

module.exports.cfr = {
    name: 'stats',
    description: 'Donne les stats du bot.',
    usage: 'stats',
    type: 'bot'
};
