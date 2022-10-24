# Listy
## ABOUT
Listy is a social media app that allows you to share movies you have watched with your friends.

<img width="1223" alt="Screen Shot 2022-10-24 at 11 00 37 am" src="https://user-images.githubusercontent.com/105465111/197490053-9e7f225e-4894-450d-ba41-c8b92417e91c.png">

## DESCRIPTION
Listy is a great platform to connect with your friends about movies and tv shows that you love. It will help you to always find things to watch, and we already know that getting a movie or tv show recommendations from your friends is more reliable than the streaming service algorithm. This platform will allow you to keep track of the movies/tv shows you have watched and what you want to watch in the future. It will have a main feed like Instagram does for pictures, but in this case, you will see what movies/tv shows your friends are watching.

## HOW TO START THE APP IN LOCAL ENVIRONMENT
### Client
1. Go to the ``client`` folder
2. Run ``npm install`` from the *client root folder* to install all the necessary dependencies
3. Fill in the ``.env`` with the environmental variables, as per the ``.env-example`` file in the ``client`` folder
4. Run ``npm start`` from the *client root folder* to start the client app at ``http://localhost:3000/``

### Server
1. Go to the ``server`` folder 
2. Run ``npm install`` from the *server root folder* to install all the necessary dependencies
3. Fill in the ``.env`` file with the environmental variables, as per the ``.env-example`` file in the ``server`` folder
4. Run ``npm start`` from the *server root folder* to start the server app at ``http://localhost:3030/``

## IMPORTANT
The app is design to be viewed in mobile view

## TECH STACKS
* **Frontend** - React 
* **Server** - Node & Express
* **Database** - MongoDB with Mongoose ORM
