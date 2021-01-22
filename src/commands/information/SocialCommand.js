const Discord = require("discord.js");
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SocialCommand extends BaseCommand {
  constructor() {
    super('social', 'information', []);
  }

  async run(client, message, args) {
    const youtubeEmbed = new Discord.MessageEmbed()
    .setTitle("Youtube")
    .setURL("https://youtube.com")
    .setThumbnail("https://pngimg.com/uploads/youtube_PNG14.png")
    .setColor("#b31217")
    .addField("Check out Youtube.com\`s Youtube Channel.", "NEW How To Code A Discord Bot Series!! (Click the link above)")
    .setTimestamp()
    .setFooter("Youtube", "https://lh3.googleusercontent.com/ogw/ADGmqu-M-0_fDTVZ1cdH_rsTc1TszAyXm6Km9tYt9G09=s32-c-mo");
    const discordEmbed = new Discord.MessageEmbed()
    .setTitle("See Youtube Videos")
    .setURL("https://discord.gg/QnMab28RdK")
    .setThumbnail("https://pngimg.com/uploads/youtube_PNG14.png")
    .setColor("#7289da")
    .addField("Join Our Discord Server", "Giveways, MEE6, Discord.js")
    .setTimestamp()
    .setFooter("Discord Server" ,"https://pngimg.com/uploads/programming_PNG14.png")
    const partronEmbed = new Discord.Message()
    .setTitle("Reflective Programmer")
    .setURL("https://discord.gg/QnMab28RdK")
    .setColor("#ff4240")
    .addField("Check out Reflective Programer")
    .setTimestamp()
    .setFooter("Reflective Programmer", "https://discord.gg/QnMab28RdK")

    await message.channel.send(youtubeEmbed).catch(err => console.log(err))
    await message.channel.send(discordEmbed).catch(err => console.log(err))
    await message.channel.send(partronEmbed).catch(err => console.log(err))
  }
}