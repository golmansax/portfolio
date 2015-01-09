.PHONY: build
build:
	mkdir -p public/assets
	./node_modules/.bin/browserify -t reactify -t envify assets/main.jsx | ./node_modules/.bin/uglifyjs -c > public/assets/bundle.js

.PHONY: test
test:
	./node_modules/.bin/mocha -R spec test/**/*

.PHONY: watch
watch:
	./node_modules/.bin/watchify -t reactify assets/main.jsx -o public/assets/bundle.js -v
