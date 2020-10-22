# QBot <img src="https://github.com/codedbyq/qbot/blob/master/public/avatars/4bcbc8578c6058ed195a3566639ebb74-sticker.png" alt="avatar" title="QBot" width="100" height="100" />

### [Live](https://hello-qbot.herokuapp.com/)

### Meet QBot 
QBot is the digital avatar for Marquis Bentley, created with the [Yeoman generator](https://github.com/howdyai/botkit/tree/master/packages/generator-botkit#readme).
With QBot you can have natural conversations that offer more insight about the creator's resume and personal interests. Asking questions ranging from work experience to personal interests.

### Technologies
* JavaScript
* HTML
* CSS
* SASS

### Features
#### User Input
User can type whatever they like into the chat and QBot will respond to them shortly with a typing animation to simulate a chat with a real person.

![alt text][name]

#### Follow Up 
QBot can follow up your questions with a question of his own to further conversational dialog. User will them be prompted with suggested quick replies.
```javascript
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
```

#### Smooth minimizing
User can close out of the chat which will minimize the window into a chat icon. User can then click on the chat icon to pick up exactly where they left of in the conversation.

![alt text][closechat]

#### Future Updates
* Longer conversations
* Interview questions
* Timestamps
* Emoji Keyboard for users

---
[Botkit Docs](https://botkit.ai/docs/v4)

[closechat]: https://marquis-assets.s3-us-west-1.amazonaws.com/portfolio/closechat.gif "Close chat gif"
[name]: https://marquis-assets.s3-us-west-1.amazonaws.com/portfolio/name.gif "Whats your name"
