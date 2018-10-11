## Shortcode documentation

For the new theme's shortcodes, see [/themes/nav-community-v2/docs/how-to-use-shortcodes.md](/themes/nav-community-v2/docs/how-to-use-shortcodes.md)

### Adding news item
When creating a new item it is recommend you use the Hugo commandline tool as this will use the right archetype and populate the properties

    hugo new news/[year]/[month]/[post-title]/index.md

You should keep all the post related images in the folder with the index.md folder

#### News page front meta control:

    title: "New Title"                  - The title of the news item
    date: 2018-03-07T10:27:21+13:00     - The date and time published - defaults to date created
    draft: false                        - Is the item a draft - if true it is not built
    author: ""                          - Who authored the article
    description: ""                     - currently unused
    categories: ["NavCoin Updates"]    - Cats
    resources: []                       - currently unused
    slug: ""                            - currently unused
    feature_image: "image.png"          - The image that should be hero'd
    show_title_text: false              - If you want to show the title below the image

### Adding projects
When adding a project it is recommend you use the Hugo commandline tool as this will use the right archetype and populate the properties

    hugo new projects/project-name/index.md

#### Project page front-meta control:
    title: "Project name"               - Project Name
    date: 2018-03-07T10:27:21+13:00     - The date and time published - defaults to date created
    lastmod: 2018-03-19T10:27:21+13:00  - The date md was last changed
    draft: true                         - Is the item a draft - if true it is not included in the site
    author: ""                          - Who is the project lead
    description: ""                     - currently unused
    resources: []                       - currently unused
    categories: []                      - currently unused
    slug: ""                            - currently unused
    type: "project"                     - Defines this is a project - DO NOT CHANGE
    feature_image: ""                   - currently unused
    show_title_text: false              - currently unused
    in_progress: false                  - Signal that the project has been started
    completed: false                    - Signal project is complete
    show_on_roadmap: false              - Show the project on the road map
    percent_complete: 0                 - How much of the project has been completed
    github_url: ""                      - Github repo of the project - Optional
    project_url: ""                     - The project URL - Optional
    reddit_url: ""                      - Reddit thread / URL - Optional
    twitter_url: ""                     - Project twitter url - Optional
    card_color: ""                      - Change the card colour - Optional
    font_color: ""                      - Change the card font colour - Optional
    weight: 0                           - Allows the default position on the roadmap to be overridden

## Editing Layouts
The layouts are held in the theme folder currently `nav-commnity-v1`. Please review the [Hugo documentation](https://gohugo.io/documentation/) for layout template information

## Editing Styles
CSS styles can be added/edited in the `static/css` directory. Most of the main styles are in `style.css`
