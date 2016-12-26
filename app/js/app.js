
import m from 'mithril'

const Page = {
  list: function () {
    return m.request({ method: "GET", url: "http://localhost:3000/" })
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
