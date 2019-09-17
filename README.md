# Cypress  turorial
Pre requisites: Node.js should be instaled
Install (OSX):
1. Create a new directory  `mkdir cypress_test`
2. Enter to the created dir `cd cypress_test`
3. Init the npm withou question `npm init -y`
4. install cypress as a dev dependency `npm install cypress --save-dev`

5. Optionally add a few scripts to the cypress_test/package.json file:
```javascript
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "cy:headed": "cypress run --headed",
    "cy:chrome": "cypress run --browser chrome",
    "update": "npm i cypress@latest typescript@latest ts-loader@latest webpack@latest @cypress/webpack-preprocessor@latest -S -E"
````    
9. Or clone this repo and execute `npm install`
8. To run
  * open cypress  `npm run cypress:open`
  * Execute specific spec headless (Electron browser) with video recording `npm run cy:run -- --record --spec "cypress/integration/my-spec.js"`
  * Execute Electron headed mode `npm run cy:headed`
  * Execute with chrome `Anpm run cy:chrome`
  * Execute specific spec headed Chrome `npm run  cy:chromespec -- -- "cypress/integration/tutorial/firstspec.spec.ts"`
  * Execute specific spec headless (Electron browser) with video recording `npm run  cy:spec -- "cypress/integration/mango_test/mango.spec.js"`
The example folder has more exmaples from cypress 