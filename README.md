# Mend Site

## Start Developing

Here is how to get the project set up on your machine.

1. Clone repo to local machine.
1. Install `takeshape-cli` with `npm install -g takeshape-cli`
1. Install packages with `npm install`
1. Initialize Takeshape with `tsg init` and enter email and password for your Takeshape account.
1. Select `butter-site` project on setup.
1. Run `npm run webpack-build` to build Javascript files.
1. Run with `npm start`. This will open the site in your browser - changes made will automatically refresh the site.

## Build Script

When the `main.js` file is edited, it must be built using `npm run webpack-build`. This way, we can use ES6 syntax, including `import` and `require` statements. Running `npm run webpack-watch` in a separate terminal window helps by automatically building for you whenever the javascript file changes.

## Deployment

To deploy your changes to the discoverbutter.co site, run tsg deploy in your terminal. Then, make sure you go to Takeshape and click on `publish discoverbutter` under the main dropdown to make the changes go live. The site is hosted through Netlify, so other site settings can be configured there. There is also a way to set up Continuous Integration via Github and Netlify - that hasn't been set up yet, but it might make your life easier.

## Editing Content

Login to Takeshape.com with credentials and change content. Some notes:

Each Takeshape content type has a "Meta" object, including a Title, Description, and Image. These are used for the site Meta fields which will help search engines to index the site.

Some fields are required, denoted by a red asterisk.

When adding images to the asset library, make sure you add an image description - this description is used as alt text for images on the site.

Make sure you click save, and then publish the site to get changes to update the actual site.

For more information on Takeshape, see [Takeshape's documentation](https://www.takeshape.io/docs/quickstart/)
