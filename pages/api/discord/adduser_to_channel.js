// pages/api/addUserToChannel.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { discordId } = req.body;

    // Assuming you have a function to create an invite to the specific channel
    const invite = await createChannelInvite(discordId);

    if (invite) {
      res.status(200).json({ inviteUrl: invite.url });
    } else {
      res.status(500).json({ error: "Failed to create invite" });
    }
  } else {
    // Handle any request that isn't POST
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
