# Description
Workout Planner is a website developed for my personal using a workout plan developed for strength building and agility training.  

Deployed site: https://workoutplanner2024.netlify.app

# Pages
- Home: Allows the selection of the following menus

![Home Page](/public/RM-home01.png)

- 16-Week Plan: Full workout plan developed by Mr. Charlie 

![Home Page](/public/RM-16W01.png)

![Home Page](/public/RM-16W02.png)

- Custom: UNDER CONSTRUCTION

- Browse: Allows the browsing of all workouts

![Home Page](/public/RM-browse01.png)

- About: Light description of the site's intent

![Home Page](/public/RM-about01.png)

# Technical Notes
The Workout Planner website was constructed using React and Vite.

### Consolidated placement of routes
All routes can be found in the App.js file

### Reusable Components
Components were structured to be reusable where possible.  

## Data
- Workout plan developed by Mr. Charlie
- Google image searches for exercise graphics

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
- Any component with the word 'shell' included is a component that contains the outside divs of a child component 
- Any component with the word 'item' included is a component that handles data mapped from an array

## Folder Arrangement
- **public:** contains all images and svgs
- **assets:** *not used*
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

# Future Features
- integrated backend with individual users
- user authentication
- ability to save personal workout plans (which is why redux was used/integrated before hand so the backbone of storing changes efficiently would already be in place)
- give user ability to add their own workouts with images and videos (would possibly require integration of image and video hosting site)

# Development Team

## Ryan Ehrlich - Software Developer

**LinkedIn:** https://www.linkedin.com/in/ryanehrlich/

**Portfolio:** https://ryanehrlich.me/

**GitHub:** https://github.com/Jagerziel
