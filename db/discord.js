const { Client } = require("discord.js");
const client = new Client({ intents: ["GUILDS", "GUILD_INVITES"] });

client.login("YOUR_BOT_TOKEN");

async function createChannelInvite(discordId) {
  try {
    const guild = await client.guilds.cache.get("YOUR_GUILD_ID");
    const channel = guild.channels.cache.find(
      (c) => c.name === "YOUR_CHANNEL_NAME" && c.type === "GUILD_TEXT"
    );
    if (!channel) return null;

    const invite = await channel.createInvite({
      maxAge: 86400, // Invite expires after 24 hours
      maxUses: 1, // Only allow 1 use
    });

    return invite;
  } catch (error) {
    console.error("Failed to create invite:", error);
    return null;
  }
}
