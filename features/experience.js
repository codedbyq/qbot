const resume = require('./resume.json');

module.exports = function(controller) {

    // list work history
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
                        payload: 'Tell me more about your time with App Academy.',
                    },
                    {
                        title: 'Project Happy',
                        payload: 'Tell me more about your time with Project Happy.',
                    },
                    {
                        title: 'Enjoy Technology',
                        payload: 'Tell me more about your time with Enjoy.',
                    },
                    {
                        title: 'Best Buy',
                        payload: 'Tell me more about your time with Best Buy.',
                    }
                ]
            });
        }, 2000);
    });
}

// ask for a follow up about a particular job