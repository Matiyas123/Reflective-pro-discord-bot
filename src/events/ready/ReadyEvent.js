const BaseEvent = require("../../utils/structures/BaseEvent");

module.exports = class ReadyEvent extends (
  BaseEvent
) {
  constructor() {
    super("ready");
  }
  async run(client) {
    let serverIn = await client.guilds.cache.size;
    console.log(client.user.tag + " is online.");
    client.user
      .setPresence({
        activity: {
          name: `I am on Development`,        //`${serverIn} servers.`,
          type: "DEVELOPMENT",
        },
        status: "online",
      })
      .catch(console.error);
    // Set username
    // client.user.setUsername(`${client.user.username}`)
    //   .then((user) => console.log(`My name is Reflective Pro`))// My new username is ${user.username}
    //   .catch(console.error);
  }
};
