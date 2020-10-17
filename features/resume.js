const resume = require('./resume.json');
module.exports = function(controller) {

    controller.hears('name','message,direct_message', async(bot, message) => {
        await bot.reply(message, `My name is ${resume.basics.name}`);
    });

    // controller.hears('hmmm','message,direct_message', async(bot, message) => {
    //     await bot.reply(message, 'hmmm this is a tricky one!');
    // });

    // controller.on('message,direct_message', async(bot, message) => {
    //     await bot.reply(message, `Echo: ${ message.text }`);
    // });

}