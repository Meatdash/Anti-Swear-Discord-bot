const Discord = require('discord.js');
const client = new Discord.Client();
const {UserName, repilyL1, Swears, botID} = require('./data.json');
var barVal = false;
var shush = false;

client.once('ready', () => {
    console.log('Initalizing Anti_Swear_Bot For Tax Purposes.');
});

function intervalFunc(millseconds) {
    var start = new Date().getTime();
    console.log(start);
    console.log((new Date().getTime() - start));
    for (var i = 0; i < 1e7; i++){
        if((new Date().getTime() - start) > millseconds) {
            break;
        }
        console.log( "over: " + (new Date().getTime() - start) );
    }

}

client.on('message', message => {

    if (message.content == "BE SILENT SLAVE!!!") {
        message.channel.send("Ok Master i Will do as i am Told"); 
        shush = true; 
    }

    if (message.author.username === "Meat_Daddy") {
        return;
    }

if (message.author.bot == false && shush == false) {
    for (var i = 0; i < Swears.length; i++) {
        const input = Swears[i];
        const permCount = 1 << input.length; 
        const letters = input.split(""); 

            for (let perm = 0; perm < permCount; perm++) {
                letters.reduce((perm, letter, i) => {
                    letters[i] = (perm & 1) ? letter.toUpperCase() : letter.toLowerCase();
                    return perm >> 1;
            }, perm);

                const result = letters.join("");

                if (message.content.includes(result) && shush == false) {
                    setTimeout(function(){ 
                        barVal = true;
                        message.channel.send(repilyL1[Math.floor(Math.random() * repilyL1.length)]); 
                    }, 2000); 
                    break;
                } 

            }
            

        array = [];

        if (barVal === true) {
            barVal = false;
            break;
        }

    }
}
})

if (shush == true) {
    intervalFunc(60000);
    shush = false;
    return;
}

client.login(botID);
