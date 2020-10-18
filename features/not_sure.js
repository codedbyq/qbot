module.exports = function(controller) {

    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `Hmm "${ message.text }"? I'm not sure how to respond to that.`);
    });

}
