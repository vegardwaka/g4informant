![GitHub contributors](https://img.shields.io/github/contributors/vegardwaka/g4informant) ![Website](https://img.shields.io/website?up_message=online&url=https%3A%2F%2Fg4informant.com%2F) ![GitHub](https://img.shields.io/github/license/vegardwaka/g4informant)
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
The frontend uses Meta's React JavaScript library. React conventions have been followed and the application is assembled in /App.js.

#### Frontend/React dependencies:
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "bcryptjs": "^2.4.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"

## Database
The database script is built in a PostgreSQL environment,
so you'd need to use one yourself or manually change the script to work with whichever database you wanna use.

https://github.com/vegardwaka/g4informant/blob/main/g4-informant/database.sql

#### Database links
https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/Login.js#L15

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/Profile.js#L12

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/Request.js#L22

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/Request.js#L33

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/UserCreate.js#L18

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/UserCreate.js#L32

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/Workbench.js#L92

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/Workbench.js#L108

#### Database dependencies:
    "pg": "^8.10.0",
    "PHP-CRUD-API": "^2.14.19" https://github.com/mevdschee/php-crud-api

## Server
The server is hosted in Microsoft Azure, and it uses the Node.js runtime environment.

#### Server links
https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/workbenchComponents/Clock.js#L11

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/workbenchComponents/Clock.js#L32

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/workbenchComponents/Image.js#L29

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/workbenchComponents/Image.js#L48

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/workbenchComponents/Weather.js#L18

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/workbenchComponents/Weather.js#L40

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/workbenchComponents/Weather.js#L79

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/Display.js#L9

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/FullDisplay.js#L11

https://github.com/vegardwaka/g4informant/blob/c4489e52cf8d9a437bbc94bdec294e037f3d8504/g4-informant/src/components/Workbench.js#L150

#### Backend/Server dependencies:
    "express": "^4.18.2",
    "multer": "^1.4.5-lts.1",
    "node-cache": "^5.1.2",
    "node-fetch": "^2.6.9"
    
## Contact information
If you have any questions regarding the project or it's code you can contact one of the developers.
veb.rolfsnes@gmail.com
