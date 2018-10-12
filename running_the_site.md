# NavCoin.org
Maintained by the global NAV community

## Contributing to the site
Want to add a project, update or fix some errors. Then please fork the project and get changing.

## Getting started
The NAV community site is built with the static site generator [Hugo](https://gohugo.io/).

This website is built using Hugo Version 0.46.

### Install Hugo
You will need Hugo installed on your system to preview any changes. Follow the install instructions for your OS here:
https://gohugo.io/getting-started/installing/

### Clone the project
You will need to fork and clone the project on github if you wish to make any changes to the site

### Running the site
After cloning the site, cd into the project directory and run it up:
    `cd navcoin-org`
    `hugo server`

This will serve the site on http://localhost:1313

Please note that Hugo is a hot loading site and that changing and saving files will auto rebuild the site for you.

## Editing Content
All content for the site is held in markdown files in the content folder. The content sections match the sections of the site.

**This project uses SASS so you will need to do the follow to compile the SASS to CSS**:
```bash
npm install 
npm run sass # this will watch the sass folder and recompile when a change is detected
``
