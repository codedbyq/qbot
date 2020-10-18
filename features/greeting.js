module.exports = function(controller) {
    
    // user's first time with the bot trigger connected message
    controller.on('connected', async(bot, message) => {
        await bot.reply(message, `Hello! My name is QBot, digital avatar for my creator Marquis Bentley. I'm a Software Engineer in the San Francisco Bay Area, currently open to new opportunities, and looking to grow my network. Come get to know me better!`);
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, 'Care to know more?');
        }, 1000);
    });

    // if cookies are found, trigger welcome_back 
    controller.on('welcome_back', async(bot, message) => {
        await bot.reply(message, `Hello! My name is QBot, digital avatar for my creator Marquis Bentley. I'm a Software Engineer in the San Francisco Bay Area, currently open to new opportunities, and looking to grow my network. Come get to know me better!`);
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, 'Care to know more?');
        }, 1000);
    });
    
}