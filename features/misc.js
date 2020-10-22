const resume = require('./resume.json');

module.exports = function(controller) {

    // interests
    controller.hears('interests','message,direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, `I am a passionate creative, so I love writing code, photography, music, writing, drawing, or anything that can give feed that creative bug.`);
        }, 2000);
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, `When I'm not programming or doing something creative you can find me traveling, reading a good book, or playing basketball with my friends.`);
        }, 2000);
    });

    // 
    controller.hears('','message,direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, ``);
        }, 900);
    });

    // 
    controller.hears('','message,direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, ``);
        }, 2000);
    });
    
}