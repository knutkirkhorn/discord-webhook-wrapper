import {WebhookClient} from 'discord.js';
import {expectType} from 'tsd';
import discordWebhookWrapper from '.';

expectType<WebhookClient>(
	discordWebhookWrapper({
		discordWebhookUrl: 'https://discord.com/api/webhooks/1337/example-token',
	}),
);
expectType<WebhookClient>(
	discordWebhookWrapper({
		discordWebhookId: '1337',
		discordWebhookToken: 'example-token',
	}),
);
