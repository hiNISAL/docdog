const { List, mdPahList } = require('./utils.js');
let side = new List();
let nav = [];

/************************************************
 *
 * 常规配置
 *
 ************************************************/

/**
 * 侧边导航栏
 * pushL1 为一级菜单   第一个参数为文本 第二个参数为路径
 * pushL2 为二级菜单   第一个参数为文本 第二个参数为目录路径
 *
 * 二级菜单会自动读取传入目录下的所有 .md结尾的文件 作为item
 * 路径需要相对doc目录
 */
side
  .pushL1('概述', '/')
  .pushL2('二级目录', '/demo/');

const
  // 左上角标题
  TITLE = 'DocDog',

  // 站点描述
  DESC = '文档',

  // 站点目录 部署的时候需要与路由一致 如部署到 `cli.im/docs` 则需设置为 `/docs`
  BASE = '/',

  // 站点logo路径
  ICON = '',

  // PWA支持
  PWA = true,

  // 输出路径
  DEST = '../doc-dist';

const
  // 开发服务器的端口
  PORT = 8080,
  // 开发时候的主机
  HOST = '0.0.0.0';

/**
 * 右上角导航项目
 * ['文按', '链接']
 */
nav = [
  ['GitHub', 'https://github.com']
];

/************************************************
 *
 * 深度配置
 *
 ************************************************/

// 主题配置
// 与vuepress中的配置保持一致
const themeConfig = {

}

// markdown配置
const markdown = {

}

// baseConfig基础配置
const baseConfig = {

}

/************************************************
 *
 * 配置完毕
 *
 ************************************************/

let config = {
  sidebar: side.getList(),
  nav,
  title: TITLE,
  desc: DESC,
  base: BASE,
  icon: ICON,
  port: PORT,
  host: HOST,
  pwa: PWA,
  dest: DEST
}

module.exports = {
  title: config.title,
  description: config.desc,
  base: config.base,
  port: config.port,
  host: config.host,
  dest: config.dest,
  head: [
    ['link', { rel: 'icon', href: config.icon }]
  ],
  themeConfig: {
    nav: config.nav.map(item => ({ text: item[0], link: item[1]})),
    sidebar: config.sidebar,
    ...themeConfig
  },
  serviceWorker: config.pwa,
  markdown: {
    ...markdown
  },
  ...baseConfig
};
