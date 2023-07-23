# An Eleventy Starter with Tailwind CSS

Based on  Let's Learn Eleventy  by [James 'Dante' Midzi](https://dev.to/psypher1) a minimalist starter

- https://dev.to/psypher1/lets-learn-eleventy-1a67
- https://github.com/Psypher1/learneleventy

<br>

## Installation
Create a directory for your site and execute

```bash
npm init -y

npm install -D @11ty/eleventy 

``` 

In your project root, create a file called `.eleventy.js` and place this in it:

```js
module.exports = function(eleventyConfig){

    //* PASSTHROUGH COPIES
    eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });
  

    return {
      dir: {
        input: "src",
        data: "_data",
        includes: "_includes",
        layouts: "_layouts"
      }
    };
  }
```

Create the folder structure below `src` folder

src
 - _data
 - _includes
 - -layouts
 - assets
   - css
   - images
  


Go to `src`folder and create your index file.
Write some text like 'Hello World' inside
```
touch index.njk
````

Now you test your project with:
```bash
npx eleventy --serve
```


## Tailwind

First add TAILWIND to your project
```bash
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

On your tailwind config file `tailwind.config.js`  declare your 11ty files to explore

```js
content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
```

Optonal typography
```bash
npm install -D @tailwindcss/typography
```

## Modifying Scripts to Run Tailwind and Eleventy

```
npm install npm-run-all --save-dev
```

We have to created a few more scripts:

```JSON
"scripts": {
    "serve": "npm-run-all -p dev:*",
    "build": "run-s build:*",
    "dev:11ty": "eleventy --serve",
    "dev:css": "tailwindcss -i src/assets/css/tailwind.css -o _site/assets/css/tailwind.css --watch --postcss",
    "build:11ty": "eleventy",
    "build:css": "tailwindcss -i src/assets/css/tailwind.css -o _site/assets/css/tailwind.css --postcss"
  },
```

In order tot test in DEV run `npm run serve` and to build your project for ptoductin `npm run build`, your project will be deployed in `_site` folder.

Aditional commands
- To run Eleventy in development - `dev:11ty`
- To build Eleventy - `build:11ty`
- To run Tailwind in development and watch for changes - `dev:css`
- To build Tailwind - `build:css`