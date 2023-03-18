import {WebhookClient} from 'discord.js';

export type WebhookConfig = {
	/**
	URL to the Discord Webhook containing both the ID and the token.
	*/
	readonly discordWebhookUrl?: string;
	/**
	ID to the Discord Webhook. Needs to be used together with the token.
	*/
	readonly discordWebhookId?: string;
	/**
	Token to the Discord Webhook. Needs to be used together with the ID.
	*/
	readonly discordWebhookToken?: string;
};

/**
Creates a [discord.js](https://github.com/discordjs/discord.js) `WebhookClient` object from either a Discord Webhook URL or from both a Discord Webhook ID and a token.
@param webhookConfig

@example
```
import discordWebhookWrapper from 'discord-webhook-wrapper';

const webhookClient = discordWebhookWrapper({discordWebhookUrl: 'https://discord.com/api/webhooks/1337/example-token'});
// ...

const webhookClientUsingIdAndToken = discordWebhookWrapper({discordWebhookId: '1337', discordWebhookToken: 'example-token'});
// ...
```
*/
export default function discordWebhookWrapper(webhookConfig: WebhookConfig): WebhookClient;
