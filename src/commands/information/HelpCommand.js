const BaseCommand = require('../../utils/structures/BaseCommand');
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'information', []);
  }

  async run (client, message, args){

    //Sort your commands into categories, and make seperate embeds for each category

    const moderation = new Discord.MessageEmbed()
    .setTitle('Moderation')
    .addField('`!!kick`', 'Kicks a member from your server via mention or ID')
    .addField('`!!ban`', 'Bans a member from your server via mention or ID')
    .addField('`!!clear`', 'Delete messages from channels')
    .setTimestamp()

    const fun = new Discord.MessageEmbed()
    .setTitle('Fun')
    .addField('`!!meme`', 'Generates a random meme')
    .addField('`!!ascii`', 'Converts text into ascii')
    .setTimestamp()

    const utility = new Discord.MessageEmbed()
    .setTitle('Utlity')
    .addField('`!!calculate`', )
    .addField('`!!weather`', 'Checks weather forecast for provided location')
    .addField('`!!covid`', 'Check countrys or world covid status via the countery name')
    .addField('`!!play`', 'Listen a music via the music name')
    .setTimestamp()

    const pages = [
            moderation,
            fun,
            utility
    ]

    const emojiList = ["⏪", "⏩"];

    const timeout = '120000';

    pagination(message, pages, emojiList, timeout)
}
}