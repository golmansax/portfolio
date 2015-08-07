.PHONY: build build-js build-css test watch eslint

build: build-css build-js

build-js:
	mkdir -p public/assets
	./node_modules/.bin/browserify --extension=.jsx -t babelify -t reactify -t envify client/router/bootstrap.jsx | ./node_modules/.bin/uglifyjs -c > public/assets/router_bootstrap.js

build-css:
	mkdir -p public/assets
	./node_modules/.bin/stylus -u jeet -u stylus-type-utils -u rupture -u ./node_modules/nib/lib/nib -c client/main.styl -o public/assets/

test:
	./node_modules/.bin/mocha --compilers js:babel/register -R spec test/**/*

watch:
	./node_modules/.bin/watchify --extension=.jsx -t babelify -t reactify client/router/bootstrap.jsx -o public/assets/router_bootstrap.js -v

jscs:
	./node_modules/.bin/jscs -v .

eslint:
	./node_modules/.bin/eslint .
