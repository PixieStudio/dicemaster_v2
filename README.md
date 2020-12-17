# Dice Master v2

Simple roller with button : 1 to 4 d4 -> 1 to 4 d100

Dice Roller for [Miro](https://miro.com/index/) the online collaborative whiteboard platform.

### How to use

1. Run `npm i`
2. Run `ngrok http 3002` in another terminal
3. Edit `src/config.js` :
   - Set BASE_URL = 'https://xxxxx.ngrok.io' *// Must be replaced after each restart ngrok*
   - Set CLIENT_ID from App Settings settings
   - Set CLIENT_SECRET from App Settings settings
4. Run `node src/freedicemaster.js`
5. Set iframe URL in App Settings `https://xxxxx.ngrok.io/static/web-plugin/index.html`
