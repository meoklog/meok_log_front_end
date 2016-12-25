
import m from 'mithril'

const Page = {
  list: function () {
    return function () {
      return [
        { title: 'github', href: 'http://github.com' },
        { title: 'gitlab', href: 'http://gitlab.com' },
        { title: 'bitbucket', href: 'http://bitbucket.org' }
      ]
    }
  }
}

const Demo = {
  controller: function () {
    const pages = Page.list()
    return {
      pages: pages
    }
  },
  view: function (ctrl) {
    console.log(ctrl)
    return m('div', [
      ctrl.pages().map(page => m('a', { href: page.href }, page.title))
    ])
  }
}

m.mount(document.querySelector('[data-main="app"]'), Demo)
console.log('mounted');
