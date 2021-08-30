# DiscogsPedia

[![Netlify Status](https://api.netlify.com/api/v1/badges/7bc4cc14-8978-41f1-8f85-da3add5870ef/deploy-status)](https://app.netlify.com/sites/discogspedia/deploys)

Here you will find releases published over <a href="https://www.discogs.com/" target="_blank" rel="noopener noreferrer">Discogs</a> website. The app has been bootstrapped with create-react-app.

## Demo

DiscogsPedia is deployed on Netlify. You will find the live demo <a href="https://discogspedia.netlify.app" target="_blank" rel="noopener noreferrer">here</a>.

## Local setup

- You need Node.js v14+ to run this application.
- Clone this repo and go to the clonned directory and run `yarn install`. It will install all the dependencies needed to run DiscogsPedia.
- Create `.env` file with help of provided `.env.exmaple` file.

## Available scripts

- `yarn start` will run the application on `localhost:3000` in the browser.
- `yarn test` to run all the available test cases.
- `yarn build` will build the application for deployment purpose.


## Features

- Responsive - Works well on handheld as well as laptop screens. Thanks to Grid, Flexbox and Media queries.
- Accessible - I tried making the app accessible to the web crawlers by keeping `ARIA` labels, tabindex and role with the concerned elements. I have also taken care of accessible landmarks by populating them with semantic html tags.
- Pagiantion - App utilizes the pagination supported by server. So you can easily go back and forth between pages. I am using `react-query` on front-end to making api calls, that provides smooth ui transition while traversing over different pages.
- Works offline - App comes with service workers that helps in assets and content persistance, while react-query does the api caching and revalidations.
- DiscogsPedia is deployed over `Netlify`.

## Technology stack

- React
- React-Query
- TypeScript
- Jest
- Sass modules

## Area of Improvements

- More test cases can be added for `common-components`.
- I tried my best to implement `Neumorphic` designs. Some of the color combinations or UX can be improved with the help of some design system or UI toolkit. Pure vanilla Sass modules are my favourite for now 😅.
- PWA and offline needs more polishing or maybe better approach since this is my first ever attempt to achieve these.

