const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const Discord = require(`discord.js`);
const canvacord = require("canvacord");
const path = require("path");
module.exports = {
    name: path.parse(__filename).name,
    category: "🕹 Fun",
    useage: `${path.parse(__filename).name}[@User]`,
    description: "*Image cmd in the style:* " + path.parse(__filename).name,
    run: async (client, message, args, cmduser, text, prefix) => {
        let tempmsg = await message.channel.send(new MessageEmbed().setColor(ee.color).setFooter(ee.footertext, ee.footericon).setAuthor("Loading...", "https://cdn.discordapp.com/emojis/769935094285860894.gif"));
        let user = message.mentions.users.first() || message.author;
        let user2 = message.mentions.users.last() || message.author;
        if (user === user2) user2 = message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: "png" });
        let avatar2 = user2.displayAvatarURL({ dynamic: false, format: "png" });
        let image = await canvacord.Canvas.kiss(avatar, avatar2);
        let attachment = await new Discord.MessageAttachment(image, "kiss.png");
        let fastembed2 = new Discord.MessageEmbed().setColor(ee.color).setFooter(ee.footertext, ee.footericon).setImage("attachment://kiss.png").attachFiles(attachment);
        await message.channel.send(fastembed2);
        await tempmsg.delete();
    },
};
