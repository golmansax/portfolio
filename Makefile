.PHONY: build build-js build-css test watch eslint stylint start-dev start-prod

build: build-css build-js

build-js:
	mkdir -p public/assets
	./node_modules/.bin/browserify --extension=.jsx -t babelify -t envify client/router/bootstrap.jsx | ./node_modules/.bin/uglifyjs -c > public/assets/router_bootstrap.js

build-css:
	mkdir -p public/assets
	./node_modules/.bin/stylus -I node_modules/ -u jeet -u rupture -u ./node_modules/nib/lib/nib -c client/main.styl -o public/assets/

test:
	./node_modules/.bin/mocha --compilers js:babel-core/register -R spec test/**/*

watch:
	./node_modules/.bin/watchify --extension=.jsx -t babelify client/router/bootstrap.jsx -o public/assets/router_bootstrap.js -v

eslint:
	./node_modules/.bin/eslint . --ext .js --ext .jsx

stylint:
	./node_modules/.bin/stylint client

start-dev:
	nodemon -e js,jsx,json,styl

start-prod:
	node index.js
