const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderation', [])
  }

  async run(client, message, args) {
    //permission checking:
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't use this commmand.");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("My role doesn't have the ban permission.");

    //variables:
    let reason = args.slice(1).join(" ");
    const mentionedMember = message.mentions.members.first();

    //Input Checking:
    if (!reason) reason = "No reason given.";
    if (!args[0]) return message.channel.send("You must state someone to unban. \`!!unban @user ID reason\`");
    if (isNaN(args[0])) return message.channel.send("The ID stated is not a member. \`!!unban ID reason\`");

    //Excuting:
    message.guild.fetchBan().then(async bans => {
      if (bans.size == 0) return message.channel.send("This server does not have anyone banned.");
      let bUser = bans.find(n => bans.user.id == userID);
      if (!bUser) return message.channel.send("The user ID stated is not banned.");
      await message.guild.members.unban(bUser.user, reason).catch(err => {
        console.log(err);
        return message.channel.send("Something went wrong unbanning the id.");
      }).then(() => {
        message.channel.send(`Successfully Unbanned ${args[0]}`)
      })
    })
    
  }
}