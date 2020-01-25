<template>
  <div class="container">
    <div class="top">
      <span>Ihre Physiotherapie in Oranienburg</span>
      <span>Mo-Do: 8.00-20.00 Uhr, Fr: 8.00-13.00 Uhr</span>
      <span><a href="tel:03301423464">📞 03301 / 42 34 64</a></span>
    </div>

    <div class="content">
      <header class="header">
        <nav class="nav">
          <ul class="nav-list">
            <li
                    v-for="item in userLinks"
                    :key="item.link"
                    class="nav-item"
            >
              <RouterLink
                      class="nav-link"
                      :to="link(item.link)"
                      :exact="true"
              >
                {{ item.text }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </header>

      <main :class="['site', $frontmatter.name]">
        <Content/>
      </main>

      <footer class="footer">
        <nav>
          <ul class="footer-list">
            <li
                    v-for="item in footerLinks"
                    :key="item.link"
                    class="footer-item"
            >
              <RouterLink
                      class="footer-link"
                      :to="link(item.link)"
                      :exact="true"
              >
                {{ item.text }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  </div>
</template>
<script>
  import {resolveNavLinkItem, ensureExt} from '@vuepress/theme-default/util'

  export default {
    name: 'Layout',
    data() {
      return {
        footerLinks: [{
          text: '[Startseite]',
          link: '/'
        }, {
          text: '[Kontakt]',
          link: '/kontakt.html'
        }, {
          text: '[Impressum]',
          link: '/impressum.html'
        }]
      }
    },
    methods: {
      link(item) {
        return ensureExt(item);
      }
    },
    computed: {
      userLinks() {
        return (this.$site.themeConfig.nav || []).map(link => {
          return Object.assign(resolveNavLinkItem(link), {
            items: (link.items || []).map(resolveNavLinkItem)
          })
        })
      }
    }
  }
</script>
<style>
  body {
    padding: 0;
    margin: 0;
    background-image: url('../../assets/bg.jpg');
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    position: relative;
  }

  h1 {
    font-size: 24px;
    color: #540000;
    text-align: center;
  }

  a {
    color: #990000;
  }

  a:hover {
    color: #d10000;
  }

  .header-anchor {
    display: none;
  }
</style>
<style scoped>
  .content {
    max-width: 760px;
    margin: 10px auto 10px;
    border: 0 solid #990000;
    border-right-width: 16px;
    border-left-width: 16px;
    background: #ffe7c5;
    box-sizing: border-box;
    margin-top: 20px;
  }

  .site {
    max-width: 475px;
    margin: 0 auto;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .top {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: rgba(255, 153, 64, 0.25);
    font-size: 14px;
  }

  .top > span {
    margin: 4px 10px;
    white-space: nowrap;
  }

  .top a {
    text-decoration: none;
  }

  .header {
    position: relative;
    border-top: 16px solid #ff9940;
    background-image: url('../../assets/header_left.png'), url('../../assets/header_middle.png'), url('../../assets/header_right.png');
    background-position: left top, center top, right top;
    background-repeat: no-repeat;
  }

  .header::after {
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    right: -16px;
    top: -16px;
    background: #ff9940;
  }

  .nav {
    margin-top: 120px;
  }

  .nav-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0;
    list-style: none;
    background: #ff9940;
    padding: 4px 0 0;
  }

  .nav-link {
    display: block;
    padding: 6px 6px 8px;
    color: #990000;
    margin: 0 6px;
    font-weight: bold;
    text-decoration: none;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .nav-link.router-link-active {
    background: #ffe7c5;
    color: #540000;
  }

  .nav-link:not(.router-link-active):hover {
    background: #540000;
    color: #ffe7c5;
  }

  .footer {
    position: relative;
    background: #ff9940;
    height: 16px;
  }

  .footer::before {
    content: '';
    position: absolute;
    display: block;
    width: 16px;
    height: 16px;
    left: -16px;
    top: 0;
    background: #ff9940;
  }

  .footer-list {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  .footer-item {
    line-height: 16px;
    margin: 0 4px;
  }

  .footer-link {
    font-weight: bold;
    display: block;
    text-decoration: none;
    font-size: 12px;
    line-height: 16px;
  }

  @media all and (max-width: 720px) {
    .header {
      background-position: -1000px, left top, right top;
    }

    .nav-list {
      padding-bottom: 8px;
      justify-content: start;
    }

    .nav-item {
      width: 100%;
      flex: 1 1;
      max-width: 150px;
      text-align: center;
      margin: 4px 0;
    }

    .nav-link {
      border-radius: 3px;
      border: 1px solid #900;
    }
  }

  @media all and (max-width: 490px) {
    .header {
      background-position: -1000px, center top, -1000px;
    }

    h1 {
      font-size: 18px;
    }
  }
</style>