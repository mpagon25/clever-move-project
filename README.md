# Project Name
Clever Move
## Description
Moving company providing the main service of moving customers belongings from one locations to the other.
[LIVE DEMO](https://trello.com) Add Demo Image
[Deploy Link](http://heroku.com)
## User Stories
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn't exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the privileges I have a user with an account.
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account and be able to book
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **Services list** - As a user I want to see all the services available so that I know what services are available to me.
- **Scheduled detail** - As a user I want to see the event details and attendee list of one event so that I can decide if I want to attend 
- **Admin Dashboard create** - As an Admin I want to create available schedules so that I can have an overview of how many schedules have been booked.
- **confirmation alert** - As a user I want to be able to know whether my schedule booking was confirmed or rejected.
## Backlog
- **implement Calendar** - As a user I want to be able to see a mini calendar with all available dates at least for the next couple of months.
- **implement Map** - Add geolocation to form while creating them
List of other features outside of the MVPs scope
User profile:
- see my profile
- be able to leave a write a review
- list of events created by the user
- list events the user is attending
Geo Location for Admin:
- show location in a map in event detail page
- show all booked locations in a map on the Dashboard
Homepage
- ...
## ROUTES:
- GET / 
  - renders the homepage
- GET /auth/signup
  - redirects to / if user logged in
  - renders the signup form (with flash msg)
- POST /auth/signup
  - redirects to / if user logged in
  - body:
    - email
    - password
- GET /auth/login
  - redirects to / if user logged in
  - renders the login form (with flash msg)
- POST /auth/login
  - redirects to / if user logged in
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- GET /dashboard (Admin)
  - renders the all schedules list + the create form link
- POST /schedule/create 
  - redirects to / if user is anonymous
  - body: 
    - firstname
    - lastname
    - From:
      - Street/ Nr.
      - Zip code
      - city
    - To:
      - Street/ Nr.
      - Zip code
      - city
    - Request Description:
      - TextArea
    - create button
- GET /schedule/:id (User)
  - renders the schedule detail page
  - edit & delete buttons
- POST /schedule/:id/edit 
  - body: (prefilled Inputs)     
- POST /schedule/:id/delete 
  - redirects User to /     
## Models
User model
```
email: String
password: String
```
Create Schedule model
```
User: ObjectId<User>
firstname: String
lastname: String
address: String
date: Date
from: {
 Street/ Nr.: String
 Zip code: Number
 city: String
}
To: {
 Street/ Nr.: String
 Zip code: Number
 city: String
}
Request Description: String
```
Admin Model
Create Slot model (Admin)
```
date: Date
time: String
```
## Links
### Trello
[Link to your trello board](https://trello.com/b/pHhpWMjL/dev)
### Git
The url to your repository and to your deployed project
[Repository Link](http://github.com)
### Slides
The url to your presentation slides
[Slides Link](http://slides.com)