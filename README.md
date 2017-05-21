# grunt-starter-boilerplate

Grunt Starter Boilerplate is a default template for getting started with [Grunt.JS](http://www.gruntjs.com), using a common basic setup consisting of:

* Sass processing
* CSS Browser autoprefixing 
* CSS minification
* CSS Source Mapping
* JSHint
* JS Uglify (minification) 
* BrowserSync (Inject CSS changes + follow)
* Normalize.css
* Benchmarks!

The programmed watch files are for: Sass, Gruntfile.js and JS changes.  

This does not include:
* Popular front end frameworks or other boilerplates as it is designed to be platform agnostic. This will work with Bootstrap Sass and many others.
* Support for Compass. There are compelling options for Libsass including Compass Importer and Compass Mixins.

The idea is to make a grunt project that encompasses a common workflow, ready to go for vets and newbies alike, complete with CSS injection (no reloading) and page refreshes for JS changes. 


# Beginner's guide

Grunt.js is powerful but can be a bit confusing as there are plenty of libraries to pick from and chaining these behaviors together can be difficult.   Grunt requires Node.js. If you do not have Node.js installed already, go to [Nodejs.org](https://nodejs.org/) for more information.

If you are unsure if Node.js has been installed, in your terminal, run: node -v (windows users require the Node.js terminal so this is moot).

Once Node.js is installed, download/clone this repo and go to /assets/_build within your local copy in your terminal and run "sudo npm install", this will install the necessary.

Next you'll need to configure your local webserver and within your /assets/_build/Gruntfile.js change the server to match your local site. This should work with Apache, MAMP or local python server like Django.  

## Ready to go!

Once your local webserver has been configured, you're ready to rock! From the terminal in your /assets/_build directory, run "Grunt", this will launch a browser window pointing to your localhost and will start compiling. 
If your localhost has been configured properly, you should see the Hello World text. Congrats!

On launch BrowserSync does some awesome stuff out of the box, allowing you to access your project from other devices on the same network, such as tablets/phones or VMs on your computer.

 To stop your project, hit command-period  (OS X) on your terminal window. Anytime you hit save on a Scss file or JS file, grunt will recompile your changes. 
 
## Compass For The People!

Want compass support? Go to the package.json, add:
"grunt-contrib-sass": "^0.9.2",

And remove:
"grunt-sass": "^1.0.0", 
