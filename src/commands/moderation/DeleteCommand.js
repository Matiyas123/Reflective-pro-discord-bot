const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('del-channel', 'moderation', []);
  }

  async run(client, message, args) {
    //!!nuke reason
    //permission chcecking:
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You can't use this command.");
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("My role does not have the mange channles permission.");

    //Variabels:
    let reason = args.join(" ");
    const nuckeChannel = message.channel;

    //Input Chacking:
    if (!reason) reason = "No reason given.";
    if (!nuckeChannel.deletable) return message.channel.send("This channel is not deletable.");

    //Excuting:
    await nuckeChannel.clone().catch(err => console.log(err));
    await nuckeChannel.delete(reason).catch(err => console.log(err));

  }
}