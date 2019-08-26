// https://www.docz.site/docs/project-configuration
// https://github.com/pedronauck/docz/issues/793
export default {
  base: process.env.CI && !process.env.CIRCLE_PR_NUMBER ? '/openshift-storybook/' : '',
  menu: [
    'Getting Started',
    { name: 'CRUD Operations' },
    { name: 'Views' },
    { name: 'Indicators' },
    { name: 'Metrics' },
    { name: 'Navigation' },
    { name: 'Misc' },
  ],
  themeConfig: {
    logo: {
      src: './logo.png',
      width: 150,
    },
  },
  onCreateWebpackChain: config => {
    // Allow CSS imports
    config.module
      .rule('scss')
      .test(/\.css|scss|sass$/)
      .use('style')
      .loader('style-loader')
      .end()
      .use('css')
      .loader('css-loader')
      .end();
  },
}