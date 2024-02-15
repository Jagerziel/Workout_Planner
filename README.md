# Description
Workout Planner is a website developed for my personal use utilizing a workout plan developed for strength building and agility training.  The 16-week plan was put together by a professional for my specific goals.  As the original document was a word document that was not mobile-friendly, I decided to put all of the information into a website so I can use it at the gym and because... I can!  

This repo is public so I'd encourage any developer who wants an easily editable site to clone this repo and make it your own.  

Deployed site: https://workoutplanner2024.netlify.app

# Pages
- Home: Allows the selection of the following menus

![Home Page](/public/RM-home01.png)

- 16-Week Plan: Full workout plan developed by Mr. Charlie.  Note the University of Deleware Women's Rugby Plan follows a similar structure and has the same component functionality.

![16W Plan](/public/RM-16W01.png)

![16W Plan](/public/RM-16W02.png)

![16W Plan](/public/RM-16W03.png)

- Custom: User can customize a workout for a day

![Customize Workout](/public/RM-custom01.png)

![Customize Workout](/public/RM-custom02.png)

![Customize Workout](/public/RM-custom03.png)

- Browse: Allows the browsing of all workouts

![Browsing Page](/public/RM-browse01.png)

- About: Light description of the site's intent

![About Page](/public/RM-about01.png)

# Technical Notes
The Workout Planner website was constructed using React and Vite.

## Consolidated placement of routes
All routes can be found in the App.js file

## Mobile Friendly
This website was constructed to be mobile friendly and has been tested on both Firefox and Safari.  Full browser testing has not been done; however, if you notice any issues ***please raise an issue on this repo and I will review***.

## Reusable Components

### Images
I created a component for some icons that required color filters and rotations.  Rather than duplicating the code when an image needed to be styled or rotated, it made the most sense to format it once and build in functionality to have it rotate as needed.  It also allows for easy editing and styling down the road.

### Workouts
The workouts are broken into two parts:

1. Workout Shell:  The shell contains the useState to *complete* or *flag* a workout. The state is stored in this component and affects the styling of the button, the shell, and the background.  It also passes down the exercise data for that specific item as a prop to the workout item.

2. Workout Item: The item contains the data and structure of the component.  This includes the title, description, images, workout details, etc.

There are two other types of files.  The first is a rest item, which is a simple component to be used for rest days and the second is the *Workout Selection Item*.

The ***Workout Selection Item*** is a combined shell and item that is used on the customized workout page.  Both the selection and the details are contained within this component.  What differs here is that the state of selection is not just saved via `useState()` but `redux` as well.  The reason is because the workout state needs to be saved for multiple screens: viewing workout, selecting workout, reordering workout.  

## Data

### Workout Plan
Workout plan developed by Mr. Charlie who is a licensed physical therapist and former boxer.  Again this workout was constructed for my personal needs, body type, and injury history only.

### Images and Videos
All images and videos were taken from Google and YouTube, respectively

### `data.js`
This file contains directory arrays

### `exerciseData.js`
This file contains the exercises used on the website

### `functions.js`
This file contains functions that are used in multiple components

## Dependencies
- framer-motion
- redux
- react
- react-dom
- react-router-dom
- sass

# Developer Guide

## Definitions
- Any folder in the screens menu are sub-screens of the primary screen
- Any component with the word 'shell' included is a component that contains the outside divs and the parent of a child component 
- Any component with the word 'item' included is a component that handles data mapped from an array

## Folder Arrangement
- **public:** contains all images and svgs
- **assets:** *not used - all items that would typically be contained in assets have been put in public*
- **components:** contains all components that are part of a screen.  This could be a navbar, directory, workout item, etc.
- **data:** contains raw data for application
- **hooks:** contains custom hooks or 3rd party hooks (such as Framer Motion)
- **redux:** contains the store, reducers, and actions for redux state management
- **screens:** contains the screens for the application.  The main screens are directly in this folder and any sub-screens are in embedded folders
- **services:** this folder would typically contain api connections however, there are no apis in this application currently
- **App.jsx:** contains all routes and the redux provider can be found here

## Exercise Data Structure

```
{
    id: corresponds to index (this must match for any additional exercises added) - *number*
    title: title of the exercise - *string*
    type: will equate to one of the following - warmup, upper, lower, core, agility, stretch, cardio - *string*
    each: true if one appendage is used for the exercise, false if both - *boolean*
    each_type: arm, leg, side, n/a - *string*
    rep_type: either reps or time - *string*
    reps: number of reps - *string*
    time: amount of time - *string*
    sets: number of sets - *string*
    note: additional important notes for this exercise - *string*
    description01: supplimental notes - *string*
    description02: supplimental notes - *string*
    description03: supplimental notes - *string*
    description04: supplimental notes - *string*
    description05: supplimental notes - *string*
    img: array of urls for exercise images - *array of strings*
    video: url for video - *string*
    addtl_reqs: additional requirements - *string*
    superset: whether this exercise is part of a superset - *boolean*
    circuit: whether this exercise is part of a circuit - *boolean*
    selected: whether this exercise is selected - *boolean*
    completed: whether this exercise is completed - *boolean*
},
```

## Steps to Add Your Own Custom Plan

1. Add your custom workouts to the `exercisedata.js` file
2. If you're constructing something similar to a 16 week plan either edit the current 16 week plan files (`SixteenWkPlan.jsx`, `Wk0104.jsx`, `Wk0508.jsx`, `Wk0912.jsx`, `Wk1316.jsx`) or copy new ones.
3. If copying new files, rename the files and add the routes in `app.js`.  Add the menu item in `data.js` to the HomeDirectory array.  If not copying files, skip this step.
4. In your workout plan files (i.e. `Wk0104.jsx`, `Wk0508.jsx`, `Wk0912.jsx`, `Wk1316.jsx` or your newly created files) edit the workouts array in workoutIdx for each day.  

```
const [ workoutIdx, setWorkoutIdx ] = useState([
        {
            title: "Day 1",
            workouts: [0,1,3,5,6,9,10,13,14,15,16],
            rest: false,
            show: false,
        },
        {
            title: "Day 2",
            workouts: [17,19,21,23,25,26,29,31,32,33],
            rest: false,
            show: false,
        }, ...
```
5. **ENJOY YOUR WORKOUT!**


# Future Features
- integrated backend with individual users
- user authentication
- ability to save personal workout plans (which is why redux was used/integrated before hand so the backbone of storing changes efficiently would already be in place)
- give user ability to add their own workouts with images and videos (would possibly require integration of image and video hosting site)
- allow users to edit the number of sets and repos in all workouts

# Development Team

## Ryan Ehrlich - Software Developer

**LinkedIn:** https://www.linkedin.com/in/ryanehrlich/

**Portfolio:** https://ryanehrlich.me/

**GitHub:** https://github.com/Jagerziel
