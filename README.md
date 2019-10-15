# Fetch - a REST consumer
This repo contains a gulp automated environment for a REST consumer service, meant to be used for making requests to http://williamwara.nu/rest/fetch.html. It consists of the following files:

1. fetch.html
2. main.js
3. style.scss
4. Gulp related files (gulpfile.js, package.json...)

## fetch.html
This is the output interface. It displays GET information as Html via the main.js file. It is possible to make POST requests and send data through the input fields. 

## main.js
Javascript for GET and POST using fetch() to get API. See code comments for more info.

## style.scss
This is the stylesheet. It is compiled to .css and piped to the pub folder through gulpfile.js.

## Gulp related files
The gulpfile.js handles tasks to compress and move Html, Javascript and Css-converted Sass to the /pub folder. There is also a .gitignore file specifying what files to avoid pushing to Github.

### Gulp tasks
1. movehtml
  1. minify
  2. move to /pub.
2. compilesass
  1.  compress to css
  2. move to /pub
3. movejs
  1. concatenate with other JS-files.
  2. transpile through babel
  3. uglify
  4. moe to /pub
