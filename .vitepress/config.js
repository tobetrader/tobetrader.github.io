import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'ToBeTrader',
  description: '🕸️ 最好的交易学习网站',
  outDir: './dist',
  appearance: false,
  markdown: {
    theme: {
      dark: 'material-theme-palenight',
      light: 'github-light'
    }  
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],
  vue: {
    reactivityTransform: true,
  },
  transformHead: () => {
    return [
      [
        'script',
        {},
        `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?ee9425ca2ce16ab92fc618d81dcd052f";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`
      ]
    ]
  },
  locales: {
    root: {
      lang: 'zh-CN',
      link: '/',
      themeConfig: {
        nav: [
          { text: '交易简讯', link: 'daily/index' },
          { text: '基础知识', link: 'knowledge/index' },
          { text: '交易心得', link: 'viewpoint/index' },
          { text: '大事纪实', link: 'news/index' },
          { text: '风云人物', link: 'bigcard/index' },
          { text: '行业导航', link: 'links/index' },
          { text: '模拟交易', link: 'http://47.103.71.106:9527/zh-CN/sim/exchange' }
        ],
        sidebarMenuLabel: '菜单',
        outlineTitle: '本页目录'
      }
    },
    // 'zh-HK': {
    //   nav: [
    //     { text: '交易日報', link: 'https://tobetrader.com/zh-HK/daily' },
    //     { text: '基礎知識', link: 'https://tobetrader.com/zh-HK/knowledge' },
    //     { text: '交易心得', link: 'https://tobetrader.com/zh-HK/viewpoint' },
    //     { text: '大事紀實', link: 'https://tobetrader.com/zh-HK/news' },
    //     { text: '風雲人物', link: 'https://tobetrader.com/zh-HK/bigcard' },
    //     { text: '行業導航', link: 'https://tobetrader.com/zh-HK/links' },
    //     { text: '模擬交易', link: 'https://tobetrader.com/zh-HK/sim/exchange' }
    //   ],
    //   sidebarMenuLabel: '菜單',
    //   outlineTitle: '本頁目錄'
    // },
    // 'en-US': {
    //   lang: 'en-US',
    //   link: '/en-US/',
    //   themeConfig: {
    //     nav: [
    //       { text: 'Trading Daily', link: 'https://tobetrader.com/en-US/daily' },
    //       { text: 'Knowledge', link: 'https://tobetrader.com/en-US/knowledge' },
    //       { text: 'Experience', link: 'https://tobetrader.com/en-US/viewpoint' },
    //       { text: 'Chronicle', link: 'https://tobetrader.com/en-US/news' },
    //       { text: 'Big Card', link: 'https://tobetrader.com/en-US/bigcard' },
    //       { text: 'Industry Nav', link: 'https://tobetrader.com/en-US/links' },
    //       { text: 'Simulated Trading', link: 'https://tobetrader.com/en-US/sim/exchange' }
    //     ]
    //   }
    // },
    // 'ko-KR': {
    //   lang: 'ko-KR',
    //   link: '/ko-KR/',
    //   themeConfig: {
    //     nav: [
    //       { text: '거래 일보', link: 'https://tobetrader.com/ko-KR/daily' },
    //       { text: '기초 지식', link: 'https://tobetrader.com/ko-KR/knowledge' },
    //       { text: '거래 소감', link: 'https://tobetrader.com/ko-KR/viewpoint' },
    //       { text: '대사의 실기', link: 'https://tobetrader.com/ko-KR/news' },
    //       { text: '풍운아', link: 'https://tobetrader.com/ko-KR/bigcard' },
    //       { text: '업계 탐색', link: 'https://tobetrader.com/ko-KR/links' },
    //       { text: '시뮬레이션 거래', link: 'https://tobetrader.com/ko-KR/sim/exchange' }
    //     ],
    //     sidebarMenuLabel: '메뉴',
    //     outlineTitle: '이 페이지 디렉토리'
    //   }
    // },
    // 'ja-JP': {
    //   lang: 'ja-JP',
    //   link: '/ja-JP/',
    //   themeConfig: {
    //     nav: [
    //       { text: '取引日報', link: 'https://tobetrader.com/ja-JP/daily' },
    //       { text: '基礎知識', link: 'https://tobetrader.com/ja-JP/knowledge' },
    //       { text: '取引の心得', link: 'https://tobetrader.com/ja-JP/viewpoint' },
    //       { text: '大事の記録', link: 'https://tobetrader.com/ja-JP/news' },
    //       { text: '風雲児', link: 'https://tobetrader.com/ja-JP/bigcard' },
    //       { text: '業界内リンク', link: 'https://tobetrader.com/ja-JP/links' },
    //       { text: 'シミュレートされたトレード', link: 'https://tobetrader.com/ja-JP/sim/exchange' }
    //     ],
    //     sidebarMenuLabel: 'メニュー',
    //     outlineTitle: 'このページのディレクトリ'
    //   }
    // }
  },
  themeConfig: {
    logo: '/logo.svg',
    footer: {
      copyright: 'Copyright © 2022-present tobetrader'
    }
  }
})
