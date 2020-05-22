module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "admin", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "squeue", // Site title.
  siteTitleAlt: "A blog by codeclub jusl", // Alternative site title for SEO.
  siteLogo:
    "https://avatars1.githubusercontent.com/u/26524722?s=400&u=5e74ef9bff9ce8ff1fe9cc9e5da70a6d1560bd9e&v=4", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://squeue.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/",
  siteDescription: "A blog by codeclub jusl", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "https://haysclark.github.io/gatsby-starter-casper/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Codeclub jusl", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-145071413-1", // GA tracking ID.
  disqusShortname: "squeue", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/ccjusl",
    "https://twitter.com/CodeClubJUSL",
    "mailto:codeclubjusl@gmail.com",
    "https://www.linkedin.com/company/code-club-jusl"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/ccjusl",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/CodeClubJUSL",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:codeclubjusl@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
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
