# Garden Share

This is an app for finding shared garden spaces to rent out in your area. You can also see what others in your plot are growing and if they are interested in sharing, selling, buying, or bartering.

### Link to site
https://garden-share.herokuapp.com/

### Technologies/Frameworks used:
MERN stack:
- React.js
- MongoDB
- Express.js
- Node.js

Other:
- Mongoose.js
- CSS and HTML
- styled-components
- React Materialize
- Heroku

### More About the Project
One of the main project requirements was to have 3 data models with a NoSQL database. I wanted these to all be nested and to incorporate an external API call. The data structure ended up being Gardens > Users (Gardeners) > Plants. I have full CRUD on all three models, except for update on Plants, which I will add soon. 

I ended up using weather external API calls, as there are lots of great resources for this information. We didn't have much direction on server-side API calls, so it was fun figuring out how to structure this. Eventually, I plan on incorporating some sort of notifications to users whenever they need to water their plants.

This was the first time I used React for anything bigger than a single-page application and it was a great learning experience. It is amazing how seamlessly stuff on the page can update and change. I enjoyed playing around with toggling different items being available on the page, like forms and the weather widget. Also, I really like designing with styled-components and want to use them even more efficiently on my next project, and when I refactor this project.

### Planning and Project Management
User Stories
https://trello.com/b/9yjOIPP9/garden-share

[Wireframes](https://i.imgur.com/6zohHDC.png)
and
[ERD's](https://i.imgur.com/BGn8IBU.png)

### Remaining goals:
Grab city, states, and dates dynamically for API calls 
Implement notifications to gardeners based on plant types and recent sunlight/rainfall
Complete Styling and spruce up splash page
Review funcitonality of all CRUD
Add detail to Plants
Add an indicator of weather a gardener is willing to share sell their items based on a boolean value
Add pricing of plots and vegetables/plants



