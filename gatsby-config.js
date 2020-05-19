module.exports = {
    siteMetadata: {
        title: `Gatsby site`,
        siteUrl: `https://example.com`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/posts`,
                name: `posts`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-prismjs`
                ]
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ]
}