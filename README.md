<div align="center">
    <img src="./src/images/icon.png"/>
    <h1>Learning GatsbyJS</h1>
</div>

This site has made by following [GatsbyJS Tutorial][gatsby-tutorial].

## Install Dependencies and Run your first Gatsby Site

```bash
$ npm install -g gatsby-cli
$ gatsby new my-site
$ cd my-site
$ gatsby develop
```

Your site will be running on [localhost:8000][running-url]

## Deploy your site with GitHub Pages

```bash
$ npm install gh-pages --save-dev
```

Add the following script to your `package.json` file

```bash
{
    "scripts": {
        ...
        "deploy": "gatsby clean && gatsby build --prefix-paths && gh-pages -d public",
    }
}

```

The run 

```bash
$ npm run deploy
```

[gatsby-tutorial]: https://www.gatsbyjs.org/tutorial/
[running-url]: http://localhost:8000