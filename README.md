### ⚠ Disclaimer
I am not responsible for bad usage of this script.  
Please keep a reasonable delay before refreshing the web page, to prevent affecting the website's performance.

## What is this script about ?
This script refreshes the page of studentexperience.nl every two minutes to check for free spots.  
The script only works for housing in the Netherlands 🇳🇱.

## Setting up Discord
Discord is used to send notifications when a spot has been found through the use of Webhooks.  
To create a discord webhook, please refer to [the official documentation](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).  
You only need to go as far as the step to copy the webhook URL.

## Setting up the script
Duplicate the .env.example file and rename the new file to .env.  
Set the value of the DISCORD_HOOK_URL from the .env file to the webhook URL you had to copy during the webhook setup (for example `DISCORD_HOOK_URL = "https://discord.com/api/webhooks/966.../4np..."`).

## Launching the script
In a terminal, type `npm install` followed by `node .`.
> 💡 You will not see any output unless a spot has been found.