# Multiscroll Plugin
This plugin adds the funcion long scrolling + split screen in ReactJs.
To see a live example you can go at:


# Installing

1. Clone the repo
2. `npm install -g gulp` to install Gulp globally.
3. `npm install` to resolve project dependencies.

# Using

Run `npm start` from the command line and you are good to go!

The project is currently setup to transpile code under the _/src_ folder using the _/src/app.js_ file as an entry point.

Our resulting code ends up in the `public` directory.


# How does it work?
You must import the plugin with:
```
import Multigroup from 'multigroup';
```

The on your app you must create this structure:
```
<MultiGroup >
    <multiScroll>
        <leftSide>
              // Page1: Content Left here
        </leftSide>
        <rightSide>
              //page1: Content Right here
        </rightSide>
    </multiScroll>
    <multiScroll>
        <leftSide>
              // Page2: Content Left here
        </leftSide>
        <rightSide>
              // Page2: Content Left here
        </rightSide>
    </multiScroll>
</MultiGroup>
```

As you can see, everything is grouped with ``` <Multigroup>``` tag. **Be aware that Multigroup is the only tag which is capitalized, the rest are downcase.**

Each page is a ```<multiscroll>``` tag. Inside it, you just specify the ```<leftside>``` to put the content on the left div, and ```<rightside>``` to put the content on the rightside. That's it.

## Set up animation time
To set up the animation time you just modify the ```animTime```variable inside multigroup.js. Is a float number  **in seconds.**
