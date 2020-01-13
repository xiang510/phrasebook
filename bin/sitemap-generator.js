// eslint-disable-next-line import/no-extraneous-dependencies
const SitemapGenerator = require('bin/sitemap-generator');

const generator = SitemapGenerator('https://www.nfwys.com/', {
  filepath: `${__dirname}/../public/sitemap.xml`,
  lastMod: true,
  stripQuerystring: true,
});

generator.start();
