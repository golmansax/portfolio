#!/bin/bash -e

cd public
git init

git config user.name "Holman Gao"
git config user.email "holman@golmansax.com"

git add .
git commit -m 'Deploy to Github Pages'

# Deprecated: pushing to main page
# git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master

# Deprecated: removing CNAME
# git rm CNAME
# git commit -m 'Remove CNAME'
git push --force --quiet "https://${GH_TOKEN}@github.com/golmansax/portfolio.git" master:gh-pages
