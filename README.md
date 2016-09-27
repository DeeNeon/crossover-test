# crossover-test

## Installing dependencies & running up
To work, the **Pixel2HTML Boilerplate** needs to install some dependencies to run the options you select.
For this job, run this command in your shell

```
$ npm run start
```

## File Structure

This boilerplate will create a set of files and folders

```

/dist
/src
   /assets
      /fonts
      /gulp
      /icons
      /images
      /js
      /styles
            /components
                  _buttons.styl
                  _footer.styl
                  _header.styl
                  _nav.styl
            /screens
                  _base.styl
                  screen_1.styl
                  
                        /vendor
                /bootstrap
                      index.scss
                      variables.scss
                                  main.styl
            mixins.styl
            variables.styl
      /vendor
  
    screen_1.html
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

### Static Files
* `$ gulp main:static` Compile static files (images, fonts, icons)
* `$ gulp main:static:images` Move images
* `$ gulp main:static:fonts` Move fonts
* `$ gulp main:static:icons` Move icons

### Scripts
* `$ gulp main:scripts` Concat, uglify and move JS files

### Styles
* `$ gulp main:styles` Compile, concat, autoprefix, minify and move [SCSS, Less, Stylus] files

### Vendors

#### Bootstrap

* `$ gulp vendor:bootstrap` Compile & Move all **Bootstrap** files
* `$ gulp vendor:bootstrap:styles` Compile, concat, autoprefix, minify and move **Bootstrap** files
* `$ gulp vendor:bootstrap:scripts` Concat, uglify and move **Bootstrap** JS files
* `$ gulp vendor:bootstrap:fonts` Move **Bootstrap** fonts files



### jQuery
* `$ gulp vendor:jquery` Compile & move all **jQuery** files
* `$ gulp vendor:jquery:scripts` Compile, concat, minify and move **jQuery** files

### Daemons
* `$ gulp watch` **Watch** your files and autoexecute gulp directives
* `$ gulp serve` **Watch** your files and **serve** with an HTTP server and **Sync** with your prefered browser _awesome!_ 

### Delivery
 * `$ gulp build` Execute all the gulp directives and makes a `.zip` file with the latest code.
