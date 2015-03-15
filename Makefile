.PHONY: build build-js build-css test watch

build: build-css build-js

build-js:
	mkdir -p public/assets
	./node_modules/.bin/browserify -t reactify -t envify assets/main.jsx | ./node_modules/.bin/uglifyjs -c > public/assets/main.js

build-css:
	mkdir -p public/assets
	./node_modules/.bin/stylus -u ./node_modules/nib/lib/nib -c assets/main.styl -o public/assets/

test:
	./node_modules/.bin/mocha -R spec test/**/*

watch:
	./node_modules/.bin/watchify -t reactify assets/main.jsx -o public/assets/main.js -v
