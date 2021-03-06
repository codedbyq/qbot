const resume = require('./resume.json');

module.exports = function(controller) {

    // list work history and prompt follow up
    controller.hears('work experience','message,direct_message', async(bot, message) => {
        for (let job of resume.work) {
            await bot.reply(message, {type: 'typing'});
            setTimeout(async () => {
                // will have to reset context because turn has now ended.
                await bot.changeContext(message.reference);
                await bot.reply(message, `I worked for ${job.company} as a ${job.position} from ${job.startDate} to ${job.endDate}!`);
            }, 2000);
        }
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, {
                text: 'Would you like to know more about a particular job?',
                // provide user with premade questions
                quick_replies: [
                    {
                        title: 'App Academy',
                        payload: 'Tell me more about your time working with App Academy.',
                    },
                    {
                        title: 'Project Happy',
                        payload: 'Tell me more about your time working with Project Happy.',
                    },
                    {
                        title: 'Enjoy Technology',
                        payload: 'Tell me more about your time working with Enjoy.',
                    },
                    {
                        title: 'Best Buy',
                        payload: 'Tell me more about your time working with Best Buy.',
                    }
                ]
            });
        }, 2000);
    });

    // app academy
    controller.hears('working with App Academy', 'message, direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            const job = resume.work[0]
            await bot.changeContext(message.reference);
            await bot.reply(message, `I worked for ${job.company} as a ${job.position} where ${job.summary}.`);
        }, 1000);
    });

    // project happy
    controller.hears('working with Project Happy', 'message, direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            const job = resume.work[1]
            await bot.changeContext(message.reference);
            await bot.reply(message, `I worked for ${job.company} as a ${job.position} where ${job.summary}.`);
        }, 1000);
    });

    // enjoy technology
    controller.hears('working with Enjoy', 'message, direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            const job = resume.work[2]
            await bot.changeContext(message.reference);
            await bot.reply(message, `I worked for ${job.company} as a ${job.position} where ${job.summary}.`);
        }, 1000);
    });

    // best buy
    controller.hears('working with Best Buy', 'message, direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            const job = resume.work[3]
            await bot.changeContext(message.reference);
            await bot.reply(message, `I worked for ${job.company} as a ${job.position} where ${job.summary}.`);
        }, 1000);
    });

};