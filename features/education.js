const resume = require('./resume.json');

module.exports = function(controller) {

    // list education history
    controller.hears('education','message,direct_message', async(bot, message) => {
        for (let school of resume.education) {
            await bot.reply(message, {type: 'typing'});
            setTimeout(async () => {
                // will have to reset context because turn has now ended.
                await bot.changeContext(message.reference);
                await bot.reply(message, `I went to ${school.institution} from ${school.startDate} to ${school.endDate}!`);
            }, 2000);
        }
    });
}