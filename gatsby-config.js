module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/posts`,
                name: `posts`
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
            }
        },
        {
            resolve: `gatsby-plugin-theme-ui`,
            options: {
                prismPreset: `prism-okaidia`,
                preset: `@theme-ui/preset-funk`
            }
        }
    ]
}