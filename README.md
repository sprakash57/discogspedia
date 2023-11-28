# DiscogsPedia

[![Netlify Status](https://api.netlify.com/api/v1/badges/7bc4cc14-8978-41f1-8f85-da3add5870ef/deploy-status)](https://app.netlify.com/sites/discogspedia/deploys)

Here you will find releases published over <a href="https://www.discogs.com/" target="_blank" rel="noopener noreferrer">Discogs</a> website. The app has been bootstrapped with create-react-app.

## Demo and walkthrough

DiscogsPedia is deployed on Netlify. You will find the live demo <a href="https://discogspedia.netlify.app" target="_blank" rel="noopener noreferrer">here</a>. App has a search bar, search button and pagination panel (that will appear once you click on search). Once you provide a search query, it will fetch all the related releases and render it on UI. Try hovering over the cards and you will get an option to see `more details` clickig on which will reveal a modal with additional details.

> Psst! Don't know what to type in the search bar. Well click on the search button instead.

## Local setup

- You need Node.js v14+ to run this application.
- Clone this repo and go to the clonned directory and run `npm install`. It will install all the dependencies needed to run DiscogsPedia.
- Create `.env` file with the help of provided `.env.exmaple` file.

## Available scripts

- `npm run dev` will run the application on `localhost:3000` in the browser.
- `npm test` to run all the available test cases.
- `npm build` will build the application for deployment purpose.

## Features

- Neumorphic design system
- Responsivness works well on all screen sizes.
- Accessible through ARIA attributes.
- Client side pagination.
- Server state caching for saving excessive network calls and smooth page navigation.

## Technology stack

- React
- React-Query
- TypeScript
- Jest
- Sass modules

## Area of Improvements

- Type-ahead feature for the search bar.
- Back link to Deiscogs website as credit.
- PWA and offline needs more polishing or maybe better approach.
- List virtualization.
