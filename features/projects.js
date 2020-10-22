const resume = require('./resume.json');

module.exports = function(controller) {

    // list projects and prompt a response
    controller.hears('projects','message,direct_message', async(bot, message) => {
        for (let project of resume.projects) {
            await bot.reply(message, {type: 'typing'});
            setTimeout(async () => {
                // will have to reset context because turn has now ended.
                await bot.changeContext(message.reference);
                await bot.reply(message, `I built an application called ${project.name} using ${project.stack}!`);
            }, 2000);
        }
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            await bot.changeContext(message.reference);
            await bot.reply(message, {
                text: 'Would you like to know more about a particular project?',
                // provide user with premade questions
                quick_replies: [
                    {
                        title: 'CloudSound',
                        payload: 'Tell me more about CloudSound.',
                    },
                    {
                        title: 'Mastery',
                        payload: 'Tell me more about Mastery.',
                    },
                    {
                        title: 'Taco Tuesday',
                        payload: 'Tell me more about Taco Tuesday.',
                    }
                ]
            });
        }, 2000);
    });

    // cloudsound
    controller.hears('cloudsound', 'message, direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            const project = resume.projects[0];
            await bot.changeContext(message.reference);
            await bot.reply(message, `${project.name} is a ${project.description}`);
        }, 1200);

        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            const project = resume.projects[0];
            await bot.changeContext(message.reference);
            await bot.reply(message, `Heres a link to check it out! ${project.link}`);
        }, 900);

    });

    // taco tuesday
    controller.hears('taco tuesday', 'message, direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            const project = resume.projects[0];
            await bot.changeContext(message.reference);
            await bot.reply(message, `${project.name} is a ${project.description}`);
        }, 1200);

        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            const project = resume.projects[0];
            await bot.changeContext(message.reference);
            await bot.reply(message, `Heres a link to check it out! ${project.link}`);
        }, 900);

    });


    // mastery
    controller.hears('mastery', 'message, direct_message', async(bot, message) => {
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            const project = resume.projects[0];
            await bot.changeContext(message.reference);
            await bot.reply(message, `${project.name} is a ${project.description}`);
        }, 1200);

        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            // will have to reset context because turn has now ended.
            const project = resume.projects[0];
            await bot.changeContext(message.reference);
            await bot.reply(message, `Heres a link to check it out! ${project.link}`);
        }, 900);

    });

};