module.exports = {
  siteMetadata:{
      title: "Portfolio",
      URL: "",
      Description: "Portfoli website"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/projects/`,
      },

    },
    {
        resolve: `gatsby-source-filesystem`,
          options: {
            name: `data`,
            path: `${__dirname}/src/data/`,
          },
    },
    
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
   
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio`,
        short_name: `Krishna`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
     
    },
     'gatsby-plugin-sass',
     {
       resolve: 'gatsby-plugin-react-svg',
       options: {
         rule: {
           include: /images/
         }
       }
     }
  ],
}
