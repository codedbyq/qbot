const resume = require('./resume.json');

module.exports = function(controller) {
    
    // age
    controller.hears('age','message,direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, `I am ${resume.basic.age} years old.`);
        }, 1000);
    });

    // location
    controller.hears('locate','message,direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, `I am located in ${resume.basic.location.city}. Although I'm open to remote work and possibly relocation for the right company.`);
        }, 1000);
    });
    
    // name
    controller.hears('locate','message,direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, `My name is Marquis Bentley.`);
        }, 1000);
    });
    
}