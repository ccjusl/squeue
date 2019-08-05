<div align="center">
  <img src="static/logos/logo-1024.png" alt="Logo" width='200px' height='200px'/>
</div>

# squeue

A blog by Codeclub jusl.

[https://squeue.netlify.com](https://squeue.netlify.com)
![Blog screenshot](docs/screenshot.png)

## Getting Started

1. Install [NodeJS](https://nodejs.org/en/download/) and [yarn](https://yarnpkg.com/lang/en/docs/install/).
2. Fork this repo.
3. Clone, setup and then install.

```sh
git clone https://github.com/<your_username>/<repo_name>.git # Clone the project
cd repo_name
git remote set-url origin https://github.com/jusl/squeue.git
git remote set-url --push origin https://github.com/<your_username>/squeue.git
yarn install # Please do not use npm
gatsby develop # or, `yarn develop`
```

## Content

### Posts

Posts are authored using Markdown and include some optional YAML frontmatter data properties. Each post should have a separate folder for the .md file in addition to any images or other media related to that post. Posts are stored in a subfolder in the `/content/` directory; the target subfolder is set by the _blogPostDir_ property in _SiteConfig.js_.

### Authors

Each post can reference the author of the post, if the author is not set the default author will be used; which is controlled by the _blogAuthorId_ property in _SiteConfig.js_. All authors, including the default author (aka _blogAuthorId_) must have an author JSON file. These JSON files MUST be stored in a folder names `authors`, for Gatsby to parse them correctly. The location of this `authors` folder can be controlled by the _blogAuthorDir_ property in _SiteConfig.js_. It IS possible to have the `authors` folder inside the _blogPostDir_ folder.

## Contributing

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

The project uses [Udacity git style guide](https://udacity.github.io/git-styleguide/) which are simple and easy to follow. In general, use your best judgment, and feel free to propose changes by creating an issue and then mention the issue in your pull request.

Please install Eslint and Prettier plugins in your IDE. If your IDE doesn't support plugins or they don't have any of these plugins, please switch to a different IDE. We recommend VS Code.

Follow steps in [Getting started](https://github.com/jusl/squeue#getting-started) -> Create a post -> Send PR.

## Features

- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Separate components for everything
- High configurability:
  - Site information
  - Site social profiles
  - Copyright information
  - More!
- Author segment
  - Name
  - Location
  - Description
  - Links
  - Follow Me button
  - Social profiles
- Posts in Markdown
  - Code syntax highlighting
  - Embed YouTube videos
  - Embed Tweets
  - Pages support pagination
  - Read More linked paginated pages
- Tags
  - Separate page for posts under each tag
  - Pages support pagination.
- Categories (pages generated but not linked in theme)
  - Separate page for posts under each category
- Disqus support
  - Notifications about new disqus comments
- Google Analytics support
- NPM scripts for GitHub Pages deployment
- Social features
  - Twitter tweet button
  - Facebook share/share count
  - easily to add more!
- SEO
  - Sitemap generation
  - robots.txt
  - General description tags
  - Schema.org JSONLD (Google Rich Snippets)
  - OpenGraph Tags (Facebook/Google+/Pinterest)
  - Twitter Tags (Twitter Cards)
- RSS feeds
- Loading progress for slow networks
- Offline support
- Web App Manifest support
- Development tools
  - ESLint for linting
  - Prettier for code style
  - Remark-Lint for linting Markdown
  - write-good for linting English prose
  - gh-pages for deploying to GitHub pages
  - CodeClimate configuration file and badge

## Configuration

This is the current config present in `data/SiteConfig`. You will not need to change this:

```js
module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "admin", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "squeue", // Site title.
  siteTitleAlt: "A blog by codeclub jusl", // Alternative site title for SEO.
  siteLogo:
    "https://avatars1.githubusercontent.com/u/26524722?s=400&u=5e74ef9bff9ce8ff1fe9cc9e5da70a6d1560bd9e&v=4",
  siteUrl: "https://squeue.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/",
  siteDescription: "A blog by codeclub jusl", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "https://haysclark.github.io/gatsby-starter-casper/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Codeclub jusl", // The author name used in the RSS file
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-145071413-1", // GA tracking ID.
  disqusShortname: "squeue", // enables Disqus comments.
  siteSocialUrls: [
    "https://github.com/jusl",
    "https://twitter.com/CodeClubJUSL",
    "mailto:codeclubjusl@gmail.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/jusl",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/CodeClubJUSL",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:codeclubjusl@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Codeclub jusl" // Label used before the year
    // year: "2019" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#000000", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
```

## License

MIT
