const Discord = require('discord.js')
 
exports.run = async (client, message, args) => {
        let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.get(args[0]))
        let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.get(args[1]))
        var s = message.author
        if(member2) {
                var s = member2.user
        } //ottomancode
        if(!member) { //ottomancode
                const ottomanembed = new Discord.RichEmbed()
                        .setDescription(`Ölçmek İçin Birini Etiketlemelisin.`)
                        .setColor("0xffff00")
                        .setFooter(` ${message.author.username} tarafından kullanıldı.`, message.author.avatarURL)                
                .setTimestamp()
                message.channel.send({ottomanembed})
                return
        }
 //ottomancode
        var anasonuc = Math.floor(Math.random() * 101)
        var kalp = ''
        var akalp = ''
        if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
                var c = 0
                for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
                        kalp += '❤️'
                        c++
                }
                for(var x = c; x < 10; x++) {
                        akalp += `🖤` //ottomancode
                }
        } else {
                var kalp = '🖤'
                var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
        }
        var yorum = `Sizi evlendirelim <3`
        if(anasonuc < 80) {
                var yorum = 'Biraz daha uğraşırsan bu iş olacak gibi :)'
        }
        if(anasonuc < 60) {
                var yorum = 'Eh biraz biraz bir şeyler var gibi.'
        }
        if(anasonuc < 40) {
                var yorum = 'Azıcıkta olsa bir şeyler hissediyor sana :)'
        }
        if(anasonuc < 20) {
                var yorum = 'Bu iş olmaz sen bunu unut.'
        }
        const embed = new Discord.RichEmbed()
                .setAuthor(`${member.user.tag} | ${s.tag}`)
                .setDescription(`Aşk Yüzdesi: ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
                .setColor("0xffff00")
                .setTimestamp()
        message.channel.send({embed})
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['aşk-ölçer', 'ask-olcer', 'askölcer', 'ask', 'aşk'],
        permLevel: 0
}
 //ottomancode
exports.help = {
        name: 'aşk-ölç', //ottomancode
        description: 'İki kullanıcı sarasındaki aşkı ölçer.',
        usage: 'aşkımı-ölç [@Kullanıcı] [@Kullanıcı]'
}