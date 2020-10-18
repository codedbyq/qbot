const resume = require('./resume.json');

module.exports = function(controller) {

    controller.hears('school','message,direct_message', async(bot, message) => {
        for (let school of resume.education) {
            await bot.reply(message, `I went to ${school.institution} from ${school.startDate} to ${school.endDate}.`);
        }
    });

}