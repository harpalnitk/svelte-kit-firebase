## GIT SETUP
FIRST download zip file from remote directory
git init
git add .
git commit -m "First commit"
git remote add origin https://github.com/harpalnitk/svelte-kit-firebase.git
git pull origin main --allow-unrelated-histories

then to push code
git push origin HEAD:main

and to pull code
git pull origin HEAD:main
## Creating a project
In the project folder

>npm init svelte@next .

select typescript
then run> npm install

## Files added by me
db.ts
env.ts
firestore.ts
initFirebase.ts
yup.ts

## To use SASS
>npm install sass --save-dev
