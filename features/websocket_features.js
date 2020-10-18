/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const resume = require('./resume.json');

module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {

        console.log('Loading sample web features...');

        controller.hears(new RegExp('quick'), 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Which would you like to know more about?',
                quick_replies: [
                    {
                        title: 'App Academy',
                        payload: 'Tell me more about App Academy',
                    },
                    {
                        title: 'Arizona State',
                        payload: 'bar',
                    }
                ]
            });
        });


    }

}