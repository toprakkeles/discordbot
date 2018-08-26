const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(99);
message.channel.send("Sohbet LIYNA Tarafindan Temizlendi. :)").then(msg => {
	msg.delete(5000)
})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['sil','clear','Sil','Temizle'],
  permLevel: 2 
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle <miktar>'
};