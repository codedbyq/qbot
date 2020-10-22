const resume = require('./resume.json');

module.exports = function(controller) {

    // list each skill and years using it
    controller.hears('skills','message,direct_message', async(bot, message) => {
        for (let skill of resume.skills) {
            await bot.reply(message, {type: 'typing'});
            setTimeout(async () => {
                // will have to reset context because turn has now ended.
                await bot.changeContext(message.reference);
                await bot.reply(message, `I have ${skill.years} experience using ${skill.name}.`);
            }, 2000);
        };
    });

};