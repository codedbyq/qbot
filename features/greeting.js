module.exports = function(controller) {
    // const greetings = ['hello', 'hi', 'hey', 'hola']
    controller.on('connected', async(bot, message) => {
        await bot.reply(message, `Hello! My name is Marquis, I'm a Software Engineer from Oakland, CA.`);
    });
    controller.on('welcome_back', async(bot, message) => {
        await bot.reply(message, `Hello! My name is Marquis, I'm a Software Engineer from Oakland, CA.`);
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, 'Care to know more?');
        }, 1000);
    });
    
}