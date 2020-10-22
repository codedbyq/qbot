module.exports = function(controller) {

    // generic response for prompts the bot does not know how to answer
    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `Hmm "${ message.text }"? I'm not sure how to respond to that.`);
    });

}
