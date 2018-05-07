const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Bottle Flip Bot Ready!");
});

// Set the prefix
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(config.prefix)) return;

  if (message.content.startsWith(config.prefix + "flip")) {
    // console.log(message)
    const messaageAuthor = message.author.username
    randomNumber = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    };
    const number = randomNumber(20);
    if(number >= 0 && number <= 1) {
        message.channel.send('**'+messaageAuthor+':** Has some skills!', {
            files: ["./images/bottle-up-100.png"]
        })
    } else if(number >= 2 && number <= 6) {
        message.channel.send('**'+messaageAuthor+':** Needs to practice more.', {
            files: ["./images/bottle-side-right-100.png"]
        })
    } else if(number >= 7 && number <= 11) {
        message.channel.send('**'+messaageAuthor+':** Oh wow, your trying too hard.', {
            files: ["./images/bottle-broke-100.png"]
        })
    } else if(number >= 12 && number <= 17) {
        message.channel.send('**'+messaageAuthor+':** Not even close.', {
            files: ["./images/bottle-side-left-100.png"]
        })
    } else if(number >= 18 && number <= 19) {
        message.channel.send('**'+messaageAuthor+':** Freaking nailed it!', {
            files: ["./images/bottle-down-100.png"]
        })
    };  
  } 
});

client.login(config.token);