# discord-webhook-wrapper
> A very simple wrapper for creating a [discord.js](https://github.com/discordjs/discord.js) `WebhookClient` object

## Install
```sh
npm install discord-webhook-wrapper
```

## Usage
```js
import discordWebhookWrapper from 'discord-webhook-wrapper';

const webhookClient = discordWebhookWrapper({discordWebhookUrl: 'https://discord.com/api/webhooks/1337/example-token'});
// ...

const webhookClientUsingIdAndToken = discordWebhookWrapper({discordWebhookId: '1337', discordWebhookToken: 'example-token'});
// ...
```

## API

### discordWebhookWrapper(webhookConfig)
Creates a [discord.js](https://github.com/discordjs/discord.js) `WebhookClient` object from either a Discord Webhook URL or from both a Discord Webhook ID and a token.

#### webhookConfig
##### discordWebhookUrl?
Type: `string`

URL to the Discord Webhook containing both the ID and the token.

##### discordWebhookId?
Type: `string`

ID to the Discord Webhook. Needs to be used together with the token.

##### discordWebhookToken?
Type: `string`

Token to the Discord Webhook. Needs to be used together with the ID.
