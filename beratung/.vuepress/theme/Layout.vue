<template>
  <div class="container">
    <div class="content">
      <header class="header">
        <img alt="Logo" src="../../assets/logo_left.png" class="logo"/>
        <img alt="Logo caption" src="../../assets/logo_right.png" class="caption" />
        <img alt="Liedkte" src="../../assets/liedtke.png" class="liedtke" />
      </header>
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
    background: #ffeadd;
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

  .header-anchor {
    display: none;
  }
</style>
<style scoped>
  .content {
    display: flex;
    position: relative;
    max-width: 940px;
    margin: 10px auto;
    margin-top: 120px;
    border: 3px solid #2d1a29;
    background: #cfb8aa;
    box-sizing: border-box;
    margin-bottom: 100px;
  }

  .header {
    position: absolute;
    width: 100%;
  }

  .logo {
    position: absolute;
    bottom: -25px;
    left: -20px;
    height: 80px;
  }

  .caption {
    position: absolute;
    bottom: 5px;
    height: 60px;
    left: 60px;
  }

  .liedtke {
    position: absolute;
    right: -25px;
    top: -100px;
  }

  .site {
    padding: 60px 20px;
  }

  .nav {
    padding-top: 60px;
    flex-shrink: 0;
    background: #9e8574;
    padding-bottom: 100px;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
  }

  .nav-link {
    width: 100%;
    display: block;
    background: #78737b;
    color: #c3c3c3;
    font-size: 14px;
    padding: 6px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 2px 0;
    box-sizing: border-box;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
  }

  .nav-link.router-link-active {
    background: #5c4648;
    color: #fff;
  }

  .nav-link:not(.router-link-active):hover {
    background: #5d6780;
    color: #fff;
  }

  .footer {
    width: 100%;
    position: absolute;
    background: #2d1a29;
    height: 16px;
    bottom: 0;
  }

  .footer::after {
    content: '';
    display: block;
    position: absolute;
    width: 55px;
    height: 50px;
    background: url('../../assets/logo_footer.png');
    background-size: contain;
    background-repeat: no-repeat;
    top: -20px;
    right: -5px;
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
    color: #cab6b0;
    font-weight: bold;
    display: block;
    text-decoration: none;
    font-size: 12px;
    line-height: 16px;
  }

  @media all and (max-width: 490px) {
    h1 {
      font-size: 18px;
    }
  }
</style>