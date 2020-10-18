const resume = require('./resume.json');

module.exports = function(controller) {

    // list work history
    controller.hears('job history','message,direct_message', async(bot, message) => {
        for (let job of resume.work) {
            await bot.reply(message, {type: 'typing'});
            setTimeout(async () => {
                // will have to reset context because turn has now ended.
                await bot.changeContext(message.reference);
                await bot.reply(message, `I worked for ${job.company} as a ${job.position} from ${job.startDate} to ${job.endDate}!`);
            }, 2000);
        }
    });
}

// ask for a follow up about a particular job