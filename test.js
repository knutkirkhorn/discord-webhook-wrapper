import test from 'ava';
import {WebhookClient} from 'discord.js';
import discordWebhookWrapper from './index.js';

const expectedErrorMessage = new Error('You need to specify either a Discord Webhook URL or both Discord Webhook ID and token!');

test('throws error if no webhook configuration object is provided', t => {
	try {
		discordWebhookWrapper();
		t.fail();
	} catch (error) {
		t.deepEqual(error, expectedErrorMessage);
	}
});

test('throws error if the provided configuration object is empty', t => {
	try {
		discordWebhookWrapper({});
		t.fail();
	} catch (error) {
		t.deepEqual(error, expectedErrorMessage);
	}
});

test('throws error if only the ID is provided', t => {
	try {
		discordWebhookWrapper({discordWebhookId: 'example-id'});
		t.fail();
	} catch (error) {
		t.deepEqual(error, expectedErrorMessage);
	}
});

test('throws error if only the token is provided', t => {
	try {
		discordWebhookWrapper({discordWebhookToken: 'example-token'});
		t.fail();
	} catch (error) {
		t.deepEqual(error, expectedErrorMessage);
	}
});

test('returns a WebhookClient object when URL is provided', t => {
	const webhookClient = discordWebhookWrapper({discordWebhookUrl: 'https://discord.com/api/webhooks/1337/example-token'});
	t.true(webhookClient instanceof WebhookClient);
});

test('returns a WebhookClient object both ID and token is provided', t => {
	const webhookClient = discordWebhookWrapper({discordWebhookId: '1337', discordWebhookToken: 'example-token'});
	t.true(webhookClient instanceof WebhookClient);
});
