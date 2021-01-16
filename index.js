const Discord = require("discord.js");
const { parse } = require("path");
const ytdl = require("ytdl-core");
require("dotenv").config();

const Client = new Discord.Client;

const prefix = ".";


//Starting
Client.on("ready", () => {   
    console.log("bot opérationnel");

    Client.guilds.cache.find(guild => guild.id === "781246407616102440").channels.cache.find(channel => channel.id === "792910079703253003").messages.fetch("793527314381013022").then(message => {
        console.log("message ajouté à la mémoire : " + message.content);
    }).catch(err => {
        console.log("impossible d'ajouter à la mémoire : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "781246407616102440").channels.cache.find(channel => channel.id === "790966257058185256").messages.fetch("795695897718554715").then(message => {
        console.log("message ajouté à la mémoire : " + message.content);
    }).catch(err => {
        console.log("impossible d'ajouter à la mémoire : " + err);
    });
    Client.user.setActivity("utip.io/ddafr", {type: "STREAMING", url: "https://twitch.tv/evilcrafttv"})
});
//Bienvenue
Client.on("guildMemberAdd", member => {
    console.log("Un nouveau membre est arrivé");
    member.guild.channels.cache.find(channel => channel.id === "793530502858539039").send("Bienvenue à <@" + member.displayName + ">" + "sur le serveur de la **DDA**. Grâce à toi ont est *" + member.guild.memberCount + "* sur le serveur");
    member.roles.add("785935217629986867").then(mbr => {
        console.log("Rôle donnéé")
    }).catch(() => {
        console.log("Le rôle n'à pas pu être donné")
    });
});
//Aurevoir
Client.on("guildMemberRemove", member => {
    console.log("Un membre nous à quitter");
    member.guild.channels.cache.find(channel => channel.id === "793530502858539039").send("__" + member.displayName + "__ est partie du serveur");
});

//Réaction Rôle Notif
Client.on("messageReactionAdd", (reaction, user) => {
    if(user.bot) return;
    console.log("réaction ajouté" + user.username + "\nNom de l'émoji" + reaction.emoji.name + " c'est la " + reaction.count + "e reaction");

    if(reaction.message.id === "793527314381013022"){
        if(reaction.emoji.name === "🎁" ){
            var member = reaction.message.guild.members.cache.find(member => member.id == user.id);
            member.roles.add("792906179445653546").then(mbr => {
                console.log("Rôle donnéé")
            }).catch(err => {
                console.log("Le rôle n'à pas pu être donné " + err)
            });
        }
    }

    if(reaction.message.id === "793527314381013022"){
        if(reaction.emoji.name === "🔔" ){
            var member = reaction.message.guild.members.cache.find(member => member.id == user.id);
            member.roles.add("792906599143571507").then(mbr => {
                console.log("Rôle donnéé")
            }).catch(err => {
                console.log("Le rôle n'à pas pu être donné " + err)
            });
        }
    }

    if(reaction.message.id === "793527314381013022"){
        if(reaction.emoji.name === "💵" ){
            var member = reaction.message.guild.members.cache.find(member => member.id == user.id);
            member.roles.add("792906721823555596").then(mbr => {
                console.log("Rôle donnéé")
            }).catch(err => {
                console.log("Le rôle n'à pas pu être donné " + err)
            });
        }
    }

    if(reaction.message.id === "795695897718554715"){
        if(reaction.emoji.name === "✅" ){
            var member = reaction.message.guild.members.cache.find(member => member.id == user.id);
            member.roles.add("786131192055201812").then(mbr => {
                console.log("Rôle donnéé")
            }).catch(err => {
                    console.log("Le rôle n'à pas pu être donné " + err)
            });
            member.roles.remove("785935217629986867").then(mbr => {
                console.log("Rôle enlevé")
            }).catch(err => {
                console.log("Le rôle n'à pas pu être donné " + err)
            });
        }
    }


    /*reaction.users.remove(user.id).then(react => {
        console.log("reaction" + react.emoji.name + " retiré par le bot");
    }).catch(err => {
        console.log("impossible de retirer la réaction : " + err);
    });

    reaction.remove().then(react => {
        console.log("reaction" + react.emoji.name + " retiré par le bot");
    }).catch(err => {
        console.log("impossible de retirer la réaction : " + err);
    });*/
});

Client.on("messageReactionRemove", (reaction, user) => {
    
    if(user.bot) return;
    console.log("réaction enlevé");
        if(reaction.message.id === "793527314381013022"){
            if(reaction.emoji.name === "🎁" ){
                var member = reaction.message.guild.members.cache.find(member => member.id == user.id);
                member.roles.remove("792906179445653546").then(mbr => {
                    console.log("Rôle retiré")
                }).catch(err => {
                    console.log("Le rôle n'à pas pu être retiré " + err)
                });
            }
        }
    if(user.bot) return;
    console.log("réaction enlevé");
        if(reaction.message.id === "7935273143810130224"){
            if(reaction.emoji.name === "🔔" ){
                var member = reaction.message.guild.members.cache.find(member => member.id == user.id);
                member.roles.remove("792906599143571507").then(mbr => {
                    console.log("Rôle retiré")
                }).catch(err => {
                    console.log("Le rôle n'à pas pu être retiré " + err)
                });
            }
        }
    if(user.bot) return;
    console.log("réaction enlevé");
        if(reaction.message.id === "793527314381013022"){
            if(reaction.emoji.name === "💵" ){
                var member = reaction.message.guild.members.cache.find(member => member.id == user.id);
                member.roles.remove("792906721823555596").then(mbr => {
                    console.log("Rôle retiré")
                }).catch(err => {
                    console.log("Le rôle n'à pas pu être retiré " + err)
                });
            }
        }

});

//Commande
//Message et Commande
Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    //.ping
    if(message.content == prefix + "ping"){
        message.channel.send("pong");
    }
    //.stat
    if(message.content == prefix + "stat"){
        message.channel.send("__" + message.author.username + "__ et son identifient est : __" + message.author.id + "__");
    }

   //.ban
   if(message.member.hasPermission("BAN_MEMBERS")){
   if(message.content.startsWith(prefix + "ban")){
       let mention = message.mentions.members.first();

       if(mention == undefined){
           message.reply("Saisie Incorrect");
       }
       else {
           if(mention.bannable){
               mention.ban();
               message.channel.send(mention.displayName + "à manger son ban");
               message.delete();
           }
           else {
               message.reply("Tu peux pas bannir cette personne");

           }
       }
   }
   }
    //.kick
    else if(message.content.startsWith(prefix + "kick")){
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply("Saisie Incorect");
        }
        else {
            if(mention.kickable){
                mention.kick();
                message.channel.send(mention.displayName + " à manger son kick du serveur.");
                message.delete();
            }
            else {
                mesagge.reply("Impossible de kick cette personne.");
            }
        }
    }
    
    //.mute
    else if(message.content.startsWith(prefix + "mute")){
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply("Saisie Incorect");
        }
        else {
            mention.roles.add("785932840369651752");
            message.channel.send(mention.displayName + " à manger son mute.");
            message.delete();
        }
    }
    //.unmute
    else if(message.content.startsWith(prefix + "unmute")){
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply("Saisie Incorect");
        }
        else {
            mention.roles.remove("785932840369651752");
            message.channel.send(mention.displayName + " n'est plus mute.");
            message.delete();
        }
    }
    //.tempmute
    else if(message.content.startsWith(prefix + "tempmute")){
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply("Saisie Incorect");
        }
        else {
            let args = message.content.split(" ");

            mention.roles.add("785932840369651752");
            setTimeout(function(){
            mention.roles.remove("785932840369651752");
            message.channel.send("<@" + mention.id + "> à été unmute.");
        },args[2] * 1000);
        }
    }
        //.play
        if(message.content.startsWith(prefix + "play")){
            if(message.member.voice.channel){
                message.member.voice.channel.join().then(connection => {
                    let args = message.content.split(" ");
    
                    let dispatcher = connection.play(ytdl(args[1], {quality: "highestaudio"}));
    
                    dispatcher.on("finish", () => {
                        dispatcher.destroy();
                        connection.disconnect();
                    });
    
                    dispatcher.on("error", err => {
                        console.log("erreur de dispatcher : " + err)
                    });
                }).catch(err => {
                    message.reply("Not Connected" + err);
                });
            }
        else {
            message.reply("Not Connected");
        }
        }
   //Règlement
   if(message.content.startsWith(prefix + "reglement")){
    var embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Règlement")
    .setAuthor("Atsu", "https://i.imgur.com/wSTFkRM.png")
    .setDescription("Voici le règlement")
    .setThumbnail("https://i.imgur.com/wSTFkRM.png")
    .addField("Règle 1 :", "Les insultes ne son pas autorisée dans les channels. Le seul channel où les insultes sont autorisés c'est dans le général fight sinon vous serez automatiquement et directement banni du serveur.", false)
    .addField("Règle 2 :", "Veuillez respectez l'ordre des channels si j'apprend que ce n'est pas respecter ce sera directement un ban.", false)
    .addField("Règle 3 :", "Si vous êtes venu pour troll notre team c'est directement un ban. La provocation est autorisée suivants les personnes mais uniquement dans le général fight.", false)
    .addField("Règle 4 :", "On part du principe que si vous utilisé  une soundboard en débit vous êtes une pute qui n'assume pas sauf si c'est pour faire comme xepher a mettre des petit son dans votre débit ça c'est bg donc c'est autorisé mais attention si vous êtes gênant soit vous vous ferai exterminé par votre adversaire, soit nous vous muterons dans la voc.", false)
    .addField("Règle 5 :", "Évité de chercher la merde avec la team car si des fois ont en à marre donc ont ban.", false)
    .addField("PS : Si y a des fautes fermer la", "Merci de votre compréhension", false)
    .setTimestamp()
    .setFooter("Créé par >_Λtsu.'ĐĐA#9999", "https://i.imgur.com/wSTFkRM.png")    
    message.channel.send(embed);
   }

   //.clear
   if(message.member.permissions.has("MANAGE_MESSAGES")){
       if(message.content.startsWith(prefix + "clear")){
           let args = message.content.split(" ");
           
           if(args[1] == undefined){
               message.reply("Non défini");
           }
           else{
               let number = parseInt(args[1]);
               
            if(isNaN(number)){
                message.reply("Nombre défini");
            }
            else{
                message.channel.bulkDelete(number).then(messages => {
                    console.log("Suppression de " + messages.size +" messages réussi !");
                }).catch(err => {
                    console.log("Erreur de clear : " + err);
                });
            }
        }
   }
   }

});
Client.login(process.env.BOT_TOKEN)
