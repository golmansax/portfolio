.PHONY: build
build:
	mkdir -p public/assets
	./node_modules/.bin/browserify assets/main.js -o public/assets/bundle.js

.PHONY: test
test:
	./node_modules/.bin/mocha -R spec test/**/*

.PHONY: watch
watch:
	./node_modules/.bin/watchify assets/main.js -o public/assets/bundle.js -v
