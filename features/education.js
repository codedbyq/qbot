const resume = require('./resume.json');

module.exports = function(controller) {

    // list education history and prompt user to follow up
    controller.hears('education','message,direct_message', async(bot, message) => {
        for (let school of resume.education) {
            await bot.reply(message, {type: 'typing'});
            setTimeout(async () => {
                // will have to reset context because turn has now ended.
                await bot.changeContext(message.reference);
                await bot.reply(message, `I went to ${school.institution} from ${school.startDate} to ${school.endDate}.`);
            }, 2000);
        }
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, {
                text: 'Would you like to know more about a particular school?',
                // suggest dialog follow up on more details about either school
                quick_replies: [
                    {
                        title: 'App Academy',
                        payload: 'What is App Academy?',
                    },
                    {
                        title: 'Arizona State University',
                        payload: 'Tell me more about your time at Arizona State University.',
                    }
                ]
            });
        }, 2000);
    });

    // App Academy
    controller.hears('What is App Academy?', 'message, direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            const school = resume.education[0]
            await bot.changeContext(message.reference);
            await bot.reply(message, `App Academy is a ${school.description} I graduated from App Academy in ${school.endDate}.`);
        }, 1000);
    });

    // Arizona State University
    controller.hears('Arizona State', 'message, direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            const school = resume.education[1]
            await bot.changeContext(message.reference);
            await bot.reply(message, `I ${school.description} until ${school.endDate}.`);
        }, 1000);
    });

}

// payload: `App Academy is a ${resume.education[0].description}. I graduated from App Academy in ${resume.education[0].endDate}`,