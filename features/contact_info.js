const resume = require('./resume.json');

module.exports = function(controller) {
    
    // LinkedIn
    controller.hears('linkedin','message,direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, `Let's connect on LinkedIn. Here is my profile, ${resume.contact.linkedin}`);
        }, 1000);
    });
    
    // email
    controller.hears('email','message,direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, `Feel free to reach out via email, ${resume.contact.email}.`);
        }, 1000);
    });
    
    // phone
    controller.hears('phone','message,direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, `I can be reached at ${resume.contact.phone}.`);
        }, 1000);
    });
    
    // Github
    controller.hears('github','message,direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, `Check out my github profile, ${resume.contact.github}.`);
        }, 1000);
    });
    
}

// add dialog for 'contact, connect, reach' that prompts the different contact methods