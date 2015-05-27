.PHONY: build build-js build-css test watch jsxhint

build: build-css build-js

build-js:
	mkdir -p public/assets
	./node_modules/.bin/browserify --extension=.jsx -t babelify -t reactify -t envify assets/main.jsx | ./node_modules/.bin/uglifyjs -c > public/assets/main.js

build-css:
	mkdir -p public/assets
	./node_modules/.bin/stylus -u jeet -u stylus-type-utils -u rupture -u ./node_modules/nib/lib/nib -c assets/main.styl -o public/assets/

test:
	./node_modules/.bin/mocha -R spec test/**/*

watch:
	./node_modules/.bin/watchify --extension=.jsx -t babelify -t reactify assets/main.jsx -o public/assets/main.js -v

jsxhint:
	./node_modules/.bin/jsxhint . --babel --exclude-path .jshintignore
