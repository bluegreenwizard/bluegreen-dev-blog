const path = require('path');

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.sass')
      ]
    });
}

module.exports = {
  siteName: `Bluegreen Dev Blog`,
  titleTemplate: `%s - Bluegreen Dev Blog`,

  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type));
    });
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/:slug',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        },
      }
    }
  ]
};
