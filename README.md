## React, Flux, and Firebase Boilerplate

### What you get

* React UI
* Flux architecture
* Firebase with authentication
* a simple router (made with #Hasher)
* Bourbon Sass (with Neat, Bitters)
* Webpack builds
* Karma/Jasmine testing
* ES6 syntax (Babel)

### Get started

Download the dependencies:
```javascript
npm install
```
Put in your own firebase link inside './app/constants/appConstants.js'
(and enable 'Email & Password Authentication' from the Firebase dashboard if you want auth).

To load the (hot-reload) dev server:
```javascript
npm run dev
```
Go to http://localhost:8080/ or
http://localhost:8080/webpack-dev-server/

To run tests (with auto-reload):
```javascript
npm test
```
**Built on node 0.12**
