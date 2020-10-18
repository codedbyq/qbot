module.exports = function(controller) {
    
    // user's first time with the bot trigger connected message
    controller.on('connected', async(bot, message) => {
        await bot.reply(message, `Hello! My name is Marquis, and I'm a Software Engineer in the San Francisco Bay Area. I'm currently open to new opportunities, and to grow my network. Come get to know me better!`);
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, 'Care to know more?');
        }, 1000);
    });

    // if cookies are found, trigger welcome_back 
    controller.on('welcome_back', async(bot, message) => {
        await bot.reply(message, `Hello! My name is Marquis, and I'm a Software Engineer in the San Francisco Bay Area. I'm currently open to new opportunities, and to grow my network. Come get to know me better!`);
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, 'Care to know more?');
        }, 1000);
    });
    
}