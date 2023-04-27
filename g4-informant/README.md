## Welcome to G4 Informant
G4 Informant is a webapplication that let our users create and display their very own screen.
You are able to choose from a range of components that will display different information.

This application is programmed in JavaScript.

## Commands
Using Node, these are the commands you need to run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Frontend
The frontend uses Meta's React JavaScript library. React conventions have been followed and the application is assembled in /components/App.js.

#### Frontend/React dependencies:
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "bcryptjs": "^2.4.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.1",
    "react-scripts": "5.0.1",
    "rss-parser": "^3.13.0",
    "web-vitals": "^2.1.4"

## Database
The database script is built in a PostgreSQL environment,
so you'd need to use one yourself or manually change the script to work with whichever database you wanna use.

database.sql

#### Database links
https://github.com/vegardwaka/g4informant/blob/7237b0d27337692fc6d96a2ffebdd5568cfa2043/g4-informant/src/components/Login.js#L15

https://github.com/vegardwaka/g4informant/blob/7237b0d27337692fc6d96a2ffebdd5568cfa2043/g4-informant/src/components/Profile.js#L12

https://github.com/vegardwaka/g4informant/blob/7237b0d27337692fc6d96a2ffebdd5568cfa2043/g4-informant/src/components/Request.js#L20

https://github.com/vegardwaka/g4informant/blob/7237b0d27337692fc6d96a2ffebdd5568cfa2043/g4-informant/src/components/Request.js#L30

https://github.com/vegardwaka/g4informant/blob/7237b0d27337692fc6d96a2ffebdd5568cfa2043/g4-informant/src/components/UserCreate.js#L17

https://github.com/vegardwaka/g4informant/blob/7237b0d27337692fc6d96a2ffebdd5568cfa2043/g4-informant/src/components/UserCreate.js#L30

https://github.com/vegardwaka/g4informant/blob/7237b0d27337692fc6d96a2ffebdd5568cfa2043/g4-informant/src/components/Workbench.js#L98

https://github.com/vegardwaka/g4informant/blob/7237b0d27337692fc6d96a2ffebdd5568cfa2043/g4-informant/src/components/Workbench.js#L114

## Server
The server is hosted in Microsoft Azure, and it uses the Node.js runtime environment.

#### Server links
https://github.com/vegardwaka/g4informant/blob/ed188d0cdf3834c3f18aa5e3204b200457e35c09/g4-informant/src/components/workbenchComponents/Clock.js#L10

https://github.com/vegardwaka/g4informant/blob/ed188d0cdf3834c3f18aa5e3204b200457e35c09/g4-informant/src/components/workbenchComponents/Clock.js#L30

https://github.com/vegardwaka/g4informant/blob/8b16a5ec7cb7fc1cd00970f6f421a069ed48d7e0/g4-informant/src/components/workbenchComponents/Image.js#L30

https://github.com/vegardwaka/g4informant/blob/8b16a5ec7cb7fc1cd00970f6f421a069ed48d7e0/g4-informant/src/components/workbenchComponents/Image.js#L49

https://github.com/vegardwaka/g4informant/blob/f24bbf24c73f0ab13b48fd1ab571bfda58afcdb2/g4-informant/src/components/workbenchComponents/Weather.js#L20

https://github.com/vegardwaka/g4informant/blob/f24bbf24c73f0ab13b48fd1ab571bfda58afcdb2/g4-informant/src/components/workbenchComponents/Weather.js#L42

https://github.com/vegardwaka/g4informant/blob/f24bbf24c73f0ab13b48fd1ab571bfda58afcdb2/g4-informant/src/components/workbenchComponents/Weather.js#L92

https://github.com/vegardwaka/g4informant/blob/f24bbf24c73f0ab13b48fd1ab571bfda58afcdb2/g4-informant/src/components/Display.js#L10

https://github.com/vegardwaka/g4informant/blob/f24bbf24c73f0ab13b48fd1ab571bfda58afcdb2/g4-informant/src/components/FullDisplay.js#L10

https://github.com/vegardwaka/g4informant/blob/f24bbf24c73f0ab13b48fd1ab571bfda58afcdb2/g4-informant/src/components/Workbench.js#L155

#### Backend/Server dependencies:
    "express": "^4.18.2",
    "multer": "^1.4.5-lts.1",
    "node-cache": "^5.1.2",
    "node-fetch": "^2.6.9",
    "pg": "^8.10.0"

