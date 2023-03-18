import {WebhookClient} from 'discord.js';

export default function discordWebhookWrapper(webhookConfig) {
	// Ensure anything is provided
	if (!webhookConfig) {
		throw new Error('You need to specify either a Discord Webhook URL or both Discord Webhook ID and token!');
	}

	const {discordWebhookUrl, discordWebhookId, discordWebhookToken} = webhookConfig;

	// Check if either a Discord Webhook URL or Discord Webhook ID and token is provided
	if (
		!(typeof discordWebhookUrl === 'string' && discordWebhookUrl !== '')
		&& !(
			typeof discordWebhookId === 'string' && discordWebhookId !== ''
			&& typeof discordWebhookToken === 'string' && discordWebhookToken !== ''
		)
	) {
		throw new Error('You need to specify either a Discord Webhook URL or both Discord Webhook ID and token!');
	}

	return discordWebhookUrl
		? new WebhookClient({url: discordWebhookUrl})
		: new WebhookClient({id: discordWebhookId, token: discordWebhookToken});
}
