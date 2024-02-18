# Project Name
*** Weekend Challenge: React Gallery ***

## Description

This project involved creating a gallery page to share photos of things that are important to me. The page displays a header, a form, and a gallery list. 

Users can interact with the page using the `Toggle Image` button and `Like 👍` button. 
- By clicking the `Toggle Image` button, the image toggles between the image itself and a description of the image.
- By clicking the `Like 👍` button, the user can like the image and the 'number of likes' increases.

In the form section, users can also input in the fields `url`, `title`, and `description`. Once they click the `Add To Gallery` button, the gallery item uploads to page and users are able to see their entry in the gallery of photos below.

## Screenshot
<img width="1268" alt="Screenshot 2024-02-18 at 3 53 03 PM" src="https://github.com/yalvarez08/weekend-React-Gallery/assets/145588787/7356b629-51df-496c-bdc7-7a4faad67036">

<img width="1268" alt="Screenshot 2024-02-18 at 3 55 19 PM" src="https://github.com/yalvarez08/weekend-React-Gallery/assets/145588787/bb38f6a1-c2db-4081-b68c-7314c06b876f">


## Installation
There is not much required to get this application set up and running.
Here is a list of steps to follow:

1. Git clone this project to your computer and open in editor of your choice (i.e. VS Code).
2. Open PostgreSQL and create a new database in your localhost. Name this database 'react-gallery'.
3. Copy all query found in the `database.sql` file and paste it into your 'react-gallery' database in order to        populate all required information for the table data.
4. In your terminal, run `npm install` to install all necessary dependencies.
5. To start backend server, run this command in terminal:
```shell
`npm run server`
```
6. In another terminal window, run this to start the frontend vite server:
```shell
`npm run client` 
```
7. Get localhost url provided in vite server terminal and open it in a new browser tab.


## Built With
- React
- Node.js



