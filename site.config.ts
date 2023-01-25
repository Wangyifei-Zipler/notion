import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'aa6fdb88d7324945837749f4f1b2051d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'WangYifei’s blog',
  domain: 'https://zipler.notion.site/WangYifei-s-Blog-aa6fdb88d7324945837749f4f1b2051d',
  author: 'Wang Yifei',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  twitter: '',
  github: 'Wangyifei-Zipler',
  linkedin: '',
  youtube:'hello',
  //mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
   //pageUrlOverrides: {
    //'/foo': 'aa6fdb88d7324945837749f4f1b2051d',
   // '/bar': 'aa6fdb88d7324945837749f4f1b2051d'
   //}
 pageUrlOverrides:null,
  
  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
  navigationStyle: 'custom',
   navigationLinks: [
    {
    title: '首页',
     pageId: 'aa6fdb88d7324945837749f4f1b2051d'
    },
    {
  title: '关于',
    pageId: 'aa6fdb88d7324945837749f4f1b2051d'
    }
   ]
})
