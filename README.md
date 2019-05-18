Install NodeJS from https://nodejs.org/en/download/. 

After cloning the repo, do `npm install` to download the packages. 

Then, do `npm start` to build 

If this is the first time installing firebase, do `npm install -g firebase-tools`, then do `firebase login`. After that, to locally test, run `firebase serve` and `npm test` in different terminals. `npm test` will watch the `routes/` directory and automatically re-compile based on the changes. `firebase serve` will host the compiled files. 