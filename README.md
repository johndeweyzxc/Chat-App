## Chat App

The app uses react as the frontend. For authentication it uses firebase authentication and firebase firestore for storing data. The user of this app can login using their google accounts.

## How to run

1. Create a .env file to store api keys for firebase firestore:

```text
VITE_API_KEY=YOUR_API_KEY
VITE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_PROJECT_ID=YOUR_PROJECT_ID
VITE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_MESSAGING_SENDER_ID=YOUR_MESSAGING_ID
VITE_APP_ID=YOUR_APP_ID
VITE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
```

For more information on how to setup the authentication and firestore database please visit the docs:
https://firebase.google.com/docs/firestore
https://firebase.google.com/docs/auth

2. Install dependencies

```
$ npm i
```

3. Run the app

```
$ npm run dev
```
