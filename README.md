# crossover-test

## Installing dependencies & running up
```
$ npm install
```

## Bower install
```
$ bower install
```

# Service dependencies
## Run mongodb
```
$ mongod --dbpath=/data --port 27017
```
## Run REST API
```
$ nodemon
```

## Lastly - run it!
```
$ gulp serve * opens http://localhost:300
```

## File Structure

This boilerplate contains.

```
/src
   /assets
      /gulp
      /images
      /js
      /styles
        /screens
              _base.styl
              index.styl
                  
        /vendor
              /bootstrap
                    index.scss
                    variables.scss
          main.styl
          mixins.styl
          variables.styl
        /vendor
    index.jade
/test
  /spec
    /login-service.js
.bowerrc
.gitattributes
.gitignore
.jshintrc
.editorcofig
.project.conf
bower.json
gulpfile.js
package.json
```

## Available Gulp Commands

### Helpers
* `$ gulp clean` Clean /dist directory

### Scripts
* `$ gulp main:scripts` Concat, uglify and move JS files

### Styles
* `$ gulp main:styles` Compile, concat, autoprefix, minify and move [SCSS, Less, Stylus] files

### Daemons
* `$ gulp watch` **Watch** your files and autoexecute gulp directives
* `$ gulp serve` **Watch** your files and **serve** with an HTTP server and **Sync** with your prefered browser _awesome!_ 

### Delivery
 * `$ gulp build` Execute all the gulp directives and makes a `.zip` file with the latest code.
