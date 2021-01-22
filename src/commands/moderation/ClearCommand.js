const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('clear', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't use this command.");
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I don not have \`MANAGE_MESSAGES\` permission.");
    if (!args[0]) return message.channel.send("You must state a number of messages to clear. \`!clear number\`");
    const amonutToDelete = Number(args[0], 10);

    if (isNaN(amonutToDelete)) return message.channel.send("Number stated is not a valid number.");
    if (!Number.isInteger(amonutToDelete)) return message.channel.send("Number started must be a whole number.");
    if (!amonutToDelete || amonutToDelete < 2 || amonutToDelete > 100) return message.channel.send("The number stated must be between 2 and 100.");
    const fetched = await message.channel.messages.fetch({
      limit: amonutToDelete
    });

    try {
      await message.channel.bulkDelete(fetched)
      .then(messages => message.channel.send(`Delete ${messages.size} messages!`))
    } catch (err){
      console.log(err);
      message.channel.send("I was unable to delete the amonut stated make sure they are within 14 days old.");
    }
  }
}