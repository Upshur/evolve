const Discord = require("discord.js");

var Jimp = require('jimp');
exports.run = async (client, message, args) => {
 var user = message.mentions.users.first() || message.author;
 if (!message.guild) user = message.author;
Jimp.read('https://cdn.pixabay.com/photo/2013/07/13/12/32/tombstone-159792_960_720.png', (err, image) => {
 image.resize(315, 330)

  Jimp.read(user.avatarURL, (err, avatar) => {
 avatar.resize(100, 100)
 image.composite(avatar, 95, 159).write(`./img/rip/${client.user.id}-${user.id}.png`);
 setTimeout(function() {
   message.channel.send(new Discord.Attachment(`./img/rip/${client.user.id}-${user.id}.png`));
 }, 1000);
});

});
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};
exports.help = {
 name: 'rip',
 description: 'Profile rip efekti verir.',
 usage: 'rip'
};