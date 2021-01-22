const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PlayCommand extends BaseCommand {
  constructor() {
    super('play', 'fun', []);
  }
  // we will build the music command
  async run(client, message, args) {
    const voiceChannel = message.member.voice.channel;

    // it will check the user it is be in a voice channel or not
    if(!voiceChannel) return message.channel.send("You need to be in a voice channel to execunt this command!");

    // it will check the user it have premission to connect to the voice channle or not
    if(!permissions.has('CONNECT')) return message.channel.send("You don't have premission.");
    if(!permissions.has('SPEAK')) return message.channel.send("You don't have premission.");
    if(!args.length) return message.channel.send("You need to send the name or the link of the music.");
  }
}