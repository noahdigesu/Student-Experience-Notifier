require("dotenv").config();
const { remote } = require("webdriverio");
const fetch = require("node-fetch-commonjs");

const sendDiscordMessage = (message) => {
	fetch(process.env.DISCORD_HOOK_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: "Big brother 👁️",
			content: `${message}`,
		}),
	});
};

(async () => {
	// * Setting up headless browser.
	const browser = await remote({
		logLevel: "warn",
		capabilities: {
			browserName: "chrome",
			"goog:chromeOptions": {
				args: ["headless", "disable-gpu"],
			},
		},
	});

	// * URL to the student experience website, for housing in Amsterdam.
	await browser.url("https://studentexperience.nl/en/studios?countryId=166");

	// * Execute instructions until the process is killed.
	while (true) {
		const isLinkExisting = await browser
			.$("div.column.is-6 a.studio.is-overview")
			.isExisting(); // Required so the script does not break after a while.

		const links = await browser.$$("div.column.is-6 a.studio.is-overview");

		for (let i = 0; isLinkExisting && i < links.length; i++) {
			const SPOT_URL = await links[i].getAttribute("href");

			console.log(
				`[${new Date().toLocaleString()}]`,
				`[${i}] ⚠⚠⚠ Spot found ! 👉 ${SPOT_URL} 👈`
			);

			console.log(
				`[${new Date().toLocaleString()}]`,
				`[${i}] Sending Discord message !`
			);
			sendDiscordMessage(
				`⚠⚠⚠ NEW STUDENT EXPERIENCE SPOT AVAILABLE !!!\n\n👉 ${SPOT_URL} 👈`
			);
		}

		await new Promise((resolve) => setTimeout(resolve, 120_000)); // * Pause for two minutes.
		browser.refresh();
	}
})();
