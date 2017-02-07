
#RESPONSIBILIPUPPY!#

Two children desperately want a puppy, but in order to prove to their parents that they are indeed responsible enough to care for a dog, they must keep alive a Venus fly-trap for a month.

Meet Mertle.

She hates everything.

![Alt text](./client/images/intro_img.png?raw=true "Responsibilipuppy")
![Alt text](./client/images/mertle_rd.png?raw=true "Responsibilipuppy")


###Setup Instructions:

* To use this application, simply clone or download the repository.

* Make sure you have Node.js installed (https://nodejs.org/en/).

* cd into the project folder.

* In the command line run: $npm install

* Next, in the command line run: $npm run build

* Then, in the command line run: $npm run watch (to track code changes in development mode) or run $npm start to simple play the game and leave the code alone.

* Go to the localhost 8080 on your web browser and you should see *Responsibilipuppy* running!

### Live Site
* coming soon

### Gameplay
* The object of the game is to keep both Mertle the Venus Fly-trap's health over 50% and your own morale over 50% in order to prove to your parents that you are responsibile enough to get a puppy.
* You have the option to skip a day if you are too scared, with a small loss to Mertle's health.
* You have the option to feed Mertle, which hopefully improves her health but runs the risk of her lashing out at you and causing a drop in your morale.
* You have the option to water Mertle, which again should improve her health some, but always runs a risk to your own morale.
* You have the option to smack Mertle, which is a guarantee morale-boost for you, but runs the risk of angering your parents and adding an extra day of having to take care of Mertle.
* There is the option to replay at the end of the game... if you dare.



###Technologies (Quick Overview)
* Node.js
* React
* Redux
* HTML
* CSS
* Webpack

###Origin
* A rough version of this was built awhile ago, using only React.  The game demo brought such positive feedback that I really wanted to refactor it with Redux, create more original artwork for it and host it live for non-developers to be able to play, in addition to creating a smoother gameplay experience for the user.

###Functionality and Technology
* This app was design to be responsive across a wide range of browser sizes, however, due to the nature of an image-based game, the game play is best on a standard desktop window or bigger.
* All artwork is original, built primarilly using Sketch.
* There is a simple server file, allowing the option of easilly adding some express routes for later.  At this time is not in use.
* This is a front-end React project, and it is a React-with-Redux project, so the code requiring state updates, actions and changes are handled with the action.js and reducer.js files, instead of passing them down through the React components (in fact, for a good comparison between React-only code and React-with-Redux, please feel free to check out my project comparing the two:  pure React: https://github.com/emontecalvo/myBlog, React-with-Redux: https://github.com/emontecalvo/myBlogRedux).

##### Directory layout

```
.
├── client      	Client-side code
│   ├── images  	images
│   ├─ actions.js   redux actions
│   └─ reducer.js   redux reducer
├── server.js       server-side code

```

### Development Roadmap
Plans to add to this game at a later date are below:

* Add to the number of animals you earn the responsibility to care for, starting with a goldfish, then a cat, then a puppy, all the while also taking care of Mertle as she grows even bigger.
* Instead of art explaining the backstory at the beginning, add images and text and style it that way instead to allow for small screen-sizes to read the backstory.
* Add a user-login so that each user could pause the game and come back to where they were.




