
::Installing dependencies

  $ npm install
  $ bower install

::Service dependencies

Run mongodb
  $ mongod --dbpath=/data --port 27017

Run REST API - served from localhost:5000
  $ npm install nodemon -g (just in case)
  $ nodemon

Run server
  $ gulp serve

This boilerplate contains.

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
    authentication.js
    home.js

