# Express/Postgres API for Shopping List Data

We suggest using [Render](http://render.com/) for your first back end deploy as there's a suitable free tier, and it's fairly straightforward. However, just like for your front end, it's worth also investigating other services later on (including free Heroku credit available in the Github Student Pack).

When entering your build and start command, read the descriptions carefully. These are the instructions that the platform you're deploying with needs to run your app on their computer, so it should mirror what you use in the terminal to run it on your computer. For the build command, how do you normally make sure your app has all the libraries it needs? For the start command, how would you start your app in production (not dev) mode?

## When attempting to deploy this repo, remember to set up your database and add your database URL as an environment variable!

1. Locally run the `npm run createTable` script (to set up the required database table).

   - You'll need to have locally set a `DATABASE_URL` environment variable in a `.env` file. You can get your database URL from whatever source you'd like to set up your database on (Railway, Elephant, etc.).

   - Normally you wouldn't interact with production databases from a local machine, but we'll ignore this for now (as we're just focusing on getting things deployed).

2. Ensure the `DATABASE_URL` variable is set (not just locally but also wherever you're deploying to). This means that you'll need to look for where to enter environment variables when you're setting up your deployment - they may be hidden in an "advanced" dropdown when you're configuring your settings! Once you've found where to enter it, it'll be a key/value pair just like in your .env file. This allows the platform that you're deploying to to have that variable ready in the environment in which it's running your code (just like .env does when running on your own computer's environment).

## Bonus

Explore as many of the following as you like:

- Extend the API and frontend so that they have more features and continue to talk to one another:
  - A way to mark an item in the database as "completed"
  - Filtering, sorting, paginating of items in the shopping list whilst keeping to a RESTful interface.
- See the best practices for Express (see: https://expressjs.com/en/advanced/best-practice-performance.html) in production and try to implement as many as you can (where appropriate). For example:
  - Logging properly
  - Middlewares like: [helmet](https://www.npmjs.com/package/helmet), rate limiting, etc.
  - [Handling errors/exceptions properly](https://expressjs.com/en/guide/error-handling.html)
- Sanitising/validating/checking (especially user input) in the request (e.g. what's been sent in the `query`, `params`, `body`, `headers`, etc.) using something like: https://www.npmjs.com/package/express-validator
- Explore the `npm ci` command vs. the `npm i` command we're used to. Start with [this article](https://www.geeksforgeeks.org/difference-between-npm-i-and-npm-ci-in-node-js/) and [this blog post](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable). What are the pros and cons of using this when deploying your app?

Make sure that you commit, push and deploy small increments of changes/code. Those changes should be reflected automatically, if you have automated deployments enabled.
