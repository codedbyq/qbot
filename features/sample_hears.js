/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const { Botkit, BotkitConversation } = require('botkit');

module.exports = function(controller) {

    const MY_DIALOG_ID = 'my-dialog-name-constant';
    let convo = new BotkitConversation(MY_DIALOG_ID, controller);

    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'foo', ['message'], async (bot, message) => {
        await bot.reply(message, 'I heard "foo" via a function test');
    });

    // use a function to match a condition in the message
    const greetings = ['hello', 'hi', 'hey', 'hola'];
    controller.hears(async (message) => message.text && greetings.includes(message.text.toLowerCase()), ['message'], async (bot, message) => {
        await bot.reply(message,{ text: 'I heard a number using a regular expression.' });
        await bot.beginDialog(GREETINGS_DIALOG);
    });

    // use a regular expression to match the text of the message
    controller.hears(new RegExp(/^\d+$/), ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I heard a number using a regular expression.' });
    });

    // match any one of set of mixed patterns like a string, a regular expression
    controller.hears(['allcaps', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I HEARD ALL CAPS!' });
    });

}