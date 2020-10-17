module.exports = function(controller) {

    controller.hears('sample','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'I heard a sample message.');
    });

    controller.hears('hmmm','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'hmmm this is a tricky one!');
    });

    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `Echo: ${ message.text }`);
    });

}