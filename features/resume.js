const resume = require('./resume.json');
module.exports = function(controller) {
    // const greetings = ['hello', 'hi', 'hey', 'hola']
    controller.on('connected', async(bot, message) => {
        await bot.reply(message, `Hello! My name is ${ resume.name }`);
    });
    
    controller.hears('name','message,direct_message', async(bot, message) => {
        await bot.reply(message, `My name is ${resume.basics.name}`);
    });

    controller.hears('experience','message,direct_message', async(bot, message) => {
        await bot.reply(message, "Would you like to know what I'm working on currently, or an overview of my recent experience?");
    });

}