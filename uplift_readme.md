# Getting set up to push changes live to the blog

## Setting up

1. Make sure you have `ssh` installed on your machine. (If not, try `brew install ssh`.)
2. Pull a recent copy of the `UpLift-Website` repo. Navigate to `/public/blog/` on the command line. 
3. If it's empty: `git submodule update --init --recursive` . That should populate the repo. 
4. Get a copy of Andy's SSH key and put it somewhere you'll remember it. 

## Testing changes before pushing live

1. Install Jekyll **on your local machine**. https://jekyllrb.com/docs/
2. In the repo, run `bundle exec jekyll serve`.
3. In your browser, enter `localhost:3000`. You'll see a local version of the current site. 

## Pushing to the live repo. 

1. Either make your changes to the `public/blog` submodule, or, if you're using the old repo as a sandbox:
    * Make your changes, push them as usual. When you're satisfied; 
    * Navigate to `/public/blog` and `git pull` the changes. 
2. Push the changes. 
3. SSH into the server. The syntax for this is: 
    `ssh root@uplift.app -i pathToKey`
4. Navigate to `public/blog`. (I've set up a shortcut: You can just type `web`, and that will jump you to `/run`; then just `cd ..` and then `cd blog` and you'll be in the right place.)
5. `git pull` Your changes should be pulled in. 
6. `bundle exec jekyll build`
7. Your site should now be live.
7. Type `exit` to exit the remote server.  
8. Back on your local machine, navigate to the root of the `UpLift-Website` directory, and run: `git submodule update --init --recursive --remote`
9. Add and push your changes. 

