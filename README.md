# My_Show_Book

This is a backend capston project given by almabetter in this project we created bookmyshow website this project have vary simple UI and this website is very easy to use ( userfriendly )  and also a work in any devices ( Responsiveness ) .
 


## Deployment Links

click on the line to see the project 

Frontend on netlify.com
 - https://bookeveryshow.netlify.app/

Backend on render.com

 - https://my-show-backend.onrender.com/api/booking


## Installation

If you want to work on this project clone this repo 
bash
 git clone https://github.com/SangamSid/my_show_book.git


open this project on you local IDE  and in the terminal do this commands one by one 
 - for Frotend
bash
cd frontend

npm install

npm start

 - for backend 
 bash
cd backend

npm install

node app.js 
 
 This will start you frontend part in http://localhost:3000 and backend part running in http://localhost:8080 

    
## How to use
 
Click on this link for using the website
 - https://bookeveryshow.netlify.app/
 1) First select movie you like 
 2) select time schedule 
 3) select seats
 4) click on Book show button the confirmation pop window will open close this and see right side on the screen the previous movie ticket will show 
 


## Tech Stack

*Frontend:* React js, 

*backend:* Node js, Express js , 

*database:* Mongodb

This is a MERN stack project  


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Note : your mongodb clustur connect key 

 MONGOURI : mongodb+srv://user_name:<password>@cluster0.adfedxd.mongodb.net/<batabase_name>?retryWrites=true&w=majority



## API Documentation

#### Base URL
 https://my-show-backend.onrender.com/api

#### Booking
get  the booking

```http
  GET /booking
```
Returns a list of last booking stored in the database in JSON format.

```http
  post /booking
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `movie` | `string` | **Required**. your selected movie |
| `slots ` | `string` | **Required**. your selected time|
| `Seats ` | `number` | **Required**. no of seats you have seleacted|

Returns the newly created booking in JSON format


## Support

For support, **email**
- sangam142@gmail.com



