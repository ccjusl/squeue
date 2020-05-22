---
title: Contributing
date: "2019-08-02"
author: "mr-redible"
category: "Open source"
slug: "contributing"
cover: "images/flow-screen.jpg"
tags:
  - git
  - github
  - open-source
---

👍🎉 First off, thanks for taking the time to contribute! 🎉👍<br/>
[Squeue](https://squeue.netlify.com/) is a blog created and maintained by codeclub jusl. Hopefully this post makes the process for contributing to this blog clear and answer some questions you may have.

---

##What will you need? 🔧

1. Familiarity with **git** and **github**. [_This_](/git-workflow) is a great introduction to git by Karan Singh. If you want to dive deeper into version control systems, check out this course on Udacity- https://classroom.udacity.com/courses/ud123.
2. A cool text editor/IDE. I would recommend [**VS Code**](https://code.visualstudio.com/).
3. A nice modern **browser**.
4. Install [**NodeJS**](https://nodejs.org/en/download) and [**yarn**](https://yarnpkg.com/lang/en/docs/install). (You need not know about nodejs or yarn, just use it)

##Running

So, you are now ready with all the tools required to contribute. To run this blog locally on your pc, follow these steps-

1. Fork [the repository](https://github.com/ccjusl/squeue).
2. Clone the repository-

```bash
git clone https://github.com/<your_username>/<repo_name>.git # Clone the project
```

3. Move to the project directory and setup-

```bash
cd squeue
git remote set-url origin https://github.com/ccjusl/squeue.git
git remote set-url --push origin https://github.com/<your_username>/squeue.git
```

4. Install the dependencies

```bash
yarn install
```

5. Start developing locally😃

```bash
yarn develop
```

This will start the development server at **http://localhost:8000**. Any updates made will be automatically reflected in the browser! (No refreshing zillions of times😇)

## Content 📁

### Posts

Posts are authored using **Markdown**. Each post should have a separate folder for the `.md` file in addition to any images or other media related to that post. Posts are stored in a subfolder in the `/content/` directory.

### Authors

Each post can reference the author of the post. If the author is not set, the default author will be used (Codeclub jusl). All authors **must** have an author JSON file in the `/authors/authors/` directory.

##Start writing 📝

1. Start the development server locally.
2. Create a json file for you in the `/authors/authors/` directory if you haven't yet.
3. Create a folder in the `/posts/` directory and name it according to your post.
4. Move to the created folder and create a markdown file named **`index.md`**. Now you can start writing your article!🎉
5. Now before you start, you need to specify some details about your article:
   - **`title`**: The title of your article
   - **`date`**: Date of publishing
   - **`author`**: Your unique id. This should be same as the `uid` field in the json file you created in the `/authors/authors/` directory.
   - **`category`**: The category for your article. (e.g. Android app development)
   - **`slug`**: The unique path for your article by which your article can be identified.
   - **`cover`**: A cover image for your blog.
   - **`tags`**: Tags associated with your article.
     <br/>_Please refer to already created articles for clear understanding of these_.
6. Now write your article and see it updating in browser immediately!

##Maintaining code ✓
I recommend installing `prettier` plugin in your IDE to help you write the article neatly and efficiently. If you IDE doesn't support plugins or doesn't have the plugin available, I recommend switching to a different one([_VS Code_](https://code.visualstudio.com/)). This will help both of us maintain the code.

##Going live ✅
You have written a really cool article and now you would want it to go live on our blog ASAP. You are just one step away from that!

####1. Commit your changes-

```bash
git add .
git commit -m "<Commit message>"
```

Its worth noting that good commit messages help everyone easily understand what changes have you made in the commit. All properly maintained repositories have a git style guide. We will be using [Udacity's git style guide](https://udacity.github.io/git-styleguide/) for this. Please stick to this guide while writing your commit messages.

####2. Push to your fork-

You are ready to push your code now. But it might be possible that while you wrote your article, the original repository(one that you forked) might have changed. This might cause some conflicts when you try to merge. To solve this, we pull the changes that have been made by running this command before pushing-

```bash
git pull origin master
```

Now, you are ready to push. Go ahead and update your fork-

```bash
git push origin master
```

####3. Create a pull request(PR)-
You have updated your repository. Now just create a pull request to merge your awesome article. One of the maintainers will review and merge the changes.🎉

This is all you need to contribute a new article. Thanks for taking the time to do so!👍

---

**Having some issue?** Continue reading...

##Issues

####Reporting an issue
If you find any issue, a typo, correction needed or want to request an article etc., please create an issue in the `Issues` section of the [repository](https://github.com/ccjusl/squeue)

####Want to improve an article _not_ written by you?
Just update the article, add your name to the _edited by_ part at the bottom and create a PR.

####Browser not updating while writing an article?
Try this from the _project directory_-

```bash
`CTRL + C`  #Stop the server
yarn clean
yarn develop
```

---

I hope this post made the process for contributing to this blog clear and answered some questions you might had. So why not [start contributing](https://github.com/ccjusl/squeue) immediately?

###Links
**Blog**: https://squeue.netlify.com<br/>
**Github**: https://github.com/ccjusl/squeue
