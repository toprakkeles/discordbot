module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hosgeldin');
    member.guild.defaultChannel.send('Hosgeldin');
};
