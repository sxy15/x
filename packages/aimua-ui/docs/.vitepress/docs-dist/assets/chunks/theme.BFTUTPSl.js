import {
  d as _,
  o as a,
  c,
  r as l,
  n as w,
  a as E,
  t as C,
  b,
  w as p,
  e as f,
  T as te,
  _ as $,
  u as qe,
  i as Re,
  f as We,
  g as _e,
  h as S,
  j as W,
  k as g,
  l as G,
  m as d,
  p as r,
  q as A,
  s as B,
  v as j,
  x as ve,
  y as O,
  z as oe,
  A as me,
  B as we,
  C as Ke,
  D as Je,
  E as z,
  F as I,
  G as F,
  H as Ce,
  I as se,
  J as m,
  K as R,
  L as Me,
  M as ne,
  N as X,
  O as ae,
  P as Ye,
  Q as ke,
  R as Qe,
  S as Xe,
  U as xe,
  V as Te,
  W as et,
  X as Ie,
  Y as Ne,
  Z as tt,
  $ as ot,
  a0 as st,
  a1 as nt,
  a2 as at,
} from './framework.D33cES8d.js'
const rt = _({
    __name: 'VPBadge',
    props: { text: {}, type: { default: 'tip' } },
    setup(o) {
      return (e, t) => (
        a(), c('span', { class: w(['VPBadge', e.type]) }, [l(e.$slots, 'default', {}, () => [E(C(e.text), 1)])], 2)
      )
    },
  }),
  it = { key: 0, class: 'VPBackdrop' },
  lt = _({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(o) {
      return (e, t) => (
        a(), b(te, { name: 'fade' }, { default: p(() => [e.show ? (a(), c('div', it)) : f('', !0)]), _: 1 })
      )
    },
  }),
  ct = $(lt, [['__scopeId', 'data-v-e02b6093']]),
  V = qe
function ut(o, e) {
  let t,
    n = !1
  return () => {
    t && clearTimeout(t), n ? (t = setTimeout(o, e)) : (o(), (n = !0) && setTimeout(() => (n = !1), e))
  }
}
function pe(o) {
  return /^\//.test(o) ? o : `/${o}`
}
function be(o) {
  const { pathname: e, search: t, hash: n, protocol: s } = new URL(o, 'http://a.com')
  if (Re(o) || o.startsWith('#') || !s.startsWith('http') || !We(e)) return o
  const { site: i } = V(),
    u =
      e.endsWith('/') || e.endsWith('.html')
        ? o
        : o.replace(/(?:(^\.+)\/)?.*$/, `$1${e.replace(/(\.md)?$/, i.value.cleanUrls ? '' : '.html')}${t}${n}`)
  return _e(u)
}
const $e = S(W ? location.hash : '')
W &&
  window.addEventListener('hashchange', () => {
    $e.value = location.hash
  })
function K({ removeCurrent: o = !0, correspondingLink: e = !1 } = {}) {
  const { site: t, localeIndex: n, page: s, theme: i } = V(),
    u = g(() => {
      var v, k
      return {
        label: (v = t.value.locales[n.value]) == null ? void 0 : v.label,
        link: ((k = t.value.locales[n.value]) == null ? void 0 : k.link) || (n.value === 'root' ? '/' : `/${n.value}/`),
      }
    })
  return {
    localeLinks: g(() =>
      Object.entries(t.value.locales).flatMap(([v, k]) =>
        o && u.value.label === k.label
          ? []
          : {
              text: k.label,
              link:
                dt(
                  k.link || (v === 'root' ? '/' : `/${v}/`),
                  i.value.i18nRouting !== !1 && e,
                  s.value.relativePath.slice(u.value.link.length - 1),
                  !t.value.cleanUrls,
                ) + $e.value,
            },
      ),
    ),
    currentLang: u,
  }
}
function dt(o, e, t, n) {
  return e ? o.replace(/\/$/, '') + pe(t.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, n ? '.html' : '')) : o
}
const vt = (o) => (A('data-v-1a3bc928'), (o = o()), B(), o),
  pt = { class: 'NotFound' },
  ht = { class: 'code' },
  ft = { class: 'title' },
  _t = vt(() => d('div', { class: 'divider' }, null, -1)),
  mt = { class: 'quote' },
  kt = { class: 'action' },
  bt = ['href', 'aria-label'],
  $t = _({
    __name: 'NotFound',
    setup(o) {
      const { site: e, theme: t } = V(),
        { localeLinks: n } = K({ removeCurrent: !1 }),
        s = S('/')
      return (
        G(() => {
          var u
          const i = window.location.pathname.replace(e.value.base, '').replace(/(^.*?\/).*$/, '/$1')
          n.value.length &&
            (s.value =
              ((u = n.value.find(({ link: h }) => h.startsWith(i))) == null ? void 0 : u.link) || n.value[0].link)
        }),
        (i, u) => {
          var h, v, k, y, L
          return (
            a(),
            c('div', pt, [
              d('p', ht, C(((h = r(t).notFound) == null ? void 0 : h.code) ?? '404'), 1),
              d('h1', ft, C(((v = r(t).notFound) == null ? void 0 : v.title) ?? 'PAGE NOT FOUND'), 1),
              _t,
              d(
                'blockquote',
                mt,
                C(
                  ((k = r(t).notFound) == null ? void 0 : k.quote) ??
                    "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
                ),
                1,
              ),
              d('div', kt, [
                d(
                  'a',
                  {
                    class: 'link',
                    href: r(_e)(s.value),
                    'aria-label': ((y = r(t).notFound) == null ? void 0 : y.linkLabel) ?? 'go to home',
                  },
                  C(((L = r(t).notFound) == null ? void 0 : L.linkText) ?? 'Take me home'),
                  9,
                  bt,
                ),
              ]),
            ])
          )
        }
      )
    },
  }),
  gt = $($t, [['__scopeId', 'data-v-1a3bc928']])
function He(o, e) {
  if (Array.isArray(o)) return x(o)
  if (o == null) return []
  e = pe(e)
  const t = Object.keys(o)
      .sort((s, i) => i.split('/').length - s.split('/').length)
      .find((s) => e.startsWith(pe(s))),
    n = t ? o[t] : []
  return Array.isArray(n) ? x(n) : x(n.items, n.base)
}
function yt(o) {
  const e = []
  let t = 0
  for (const n in o) {
    const s = o[n]
    if (s.items) {
      t = e.push(s)
      continue
    }
    e[t] || e.push({ items: [] }), e[t].items.push(s)
  }
  return e
}
function Lt(o) {
  const e = []
  function t(n) {
    for (const s of n)
      s.text && s.link && e.push({ text: s.text, link: s.link, docFooterText: s.docFooterText }), s.items && t(s.items)
  }
  return t(o), e
}
function he(o, e) {
  return Array.isArray(e) ? e.some((t) => he(o, t)) : j(o, e.link) ? !0 : e.items ? he(o, e.items) : !1
}
function x(o, e) {
  return [...o].map((t) => {
    const n = { ...t },
      s = n.base || e
    return s && n.link && (n.link = s + n.link), n.items && (n.items = x(n.items, s)), n
  })
}
function Z() {
  const { frontmatter: o, page: e, theme: t } = V(),
    n = ve('(min-width: 960px)'),
    s = S(!1),
    i = g(() => {
      const H = t.value.sidebar,
        T = e.value.relativePath
      return H ? He(H, T) : []
    }),
    u = S(i.value)
  O(i, (H, T) => {
    JSON.stringify(H) !== JSON.stringify(T) && (u.value = i.value)
  })
  const h = g(() => o.value.sidebar !== !1 && u.value.length > 0 && o.value.layout !== 'home'),
    v = g(() => (k ? (o.value.aside == null ? t.value.aside === 'left' : o.value.aside === 'left') : !1)),
    k = g(() => (o.value.layout === 'home' ? !1 : o.value.aside != null ? !!o.value.aside : t.value.aside !== !1)),
    y = g(() => h.value && n.value),
    L = g(() => (h.value ? yt(u.value) : []))
  function P() {
    s.value = !0
  }
  function M() {
    s.value = !1
  }
  function N() {
    s.value ? M() : P()
  }
  return {
    isOpen: s,
    sidebar: u,
    sidebarGroups: L,
    hasSidebar: h,
    hasAside: k,
    leftAside: v,
    isSidebarEnabled: y,
    open: P,
    close: M,
    toggle: N,
  }
}
function Vt(o, e) {
  let t
  oe(() => {
    t = o.value ? document.activeElement : void 0
  }),
    G(() => {
      window.addEventListener('keyup', n)
    }),
    me(() => {
      window.removeEventListener('keyup', n)
    })
  function n(s) {
    s.key === 'Escape' && o.value && (e(), t == null || t.focus())
  }
}
function Pt(o) {
  const { page: e } = V(),
    t = S(!1),
    n = g(() => o.value.collapsed != null),
    s = g(() => !!o.value.link),
    i = S(!1),
    u = () => {
      i.value = j(e.value.relativePath, o.value.link)
    }
  O([e, o, $e], u), G(u)
  const h = g(() => (i.value ? !0 : o.value.items ? he(e.value.relativePath, o.value.items) : !1)),
    v = g(() => !!(o.value.items && o.value.items.length))
  oe(() => {
    t.value = !!(n.value && o.value.collapsed)
  }),
    we(() => {
      ;(i.value || h.value) && (t.value = !1)
    })
  function k() {
    n.value && (t.value = !t.value)
  }
  return { collapsed: t, collapsible: n, isLink: s, isActiveLink: i, hasActiveLink: h, hasChildren: v, toggle: k }
}
function St() {
  const { hasSidebar: o } = Z(),
    e = ve('(min-width: 960px)'),
    t = ve('(min-width: 1280px)')
  return { isAsideEnabled: g(() => (!t.value && !e.value ? !1 : o.value ? t.value : e.value)) }
}
const fe = []
function Ae(o) {
  return (
    (typeof o.outline == 'object' && !Array.isArray(o.outline) && o.outline.label) || o.outlineTitle || 'On this page'
  )
}
function ge(o) {
  const e = [...document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)')]
    .filter((t) => t.id && t.hasChildNodes())
    .map((t) => {
      const n = Number(t.tagName[1])
      return { element: t, title: wt(t), link: '#' + t.id, level: n }
    })
  return Ct(e, o)
}
function wt(o) {
  let e = ''
  for (const t of o.childNodes)
    if (t.nodeType === 1) {
      if (
        t.classList.contains('VPBadge') ||
        t.classList.contains('header-anchor') ||
        t.classList.contains('ignore-header')
      )
        continue
      e += t.textContent
    } else t.nodeType === 3 && (e += t.textContent)
  return e.trim()
}
function Ct(o, e) {
  if (e === !1) return []
  const t = (typeof e == 'object' && !Array.isArray(e) ? e.level : e) || 2,
    [n, s] = typeof t == 'number' ? [t, t] : t === 'deep' ? [2, 6] : t
  ;(o = o.filter((u) => u.level >= n && u.level <= s)), (fe.length = 0)
  for (const { element: u, link: h } of o) fe.push({ element: u, link: h })
  const i = []
  e: for (let u = 0; u < o.length; u++) {
    const h = o[u]
    if (u === 0) i.push(h)
    else {
      for (let v = u - 1; v >= 0; v--) {
        const k = o[v]
        if (k.level < h.level) {
          ;(k.children || (k.children = [])).push(h)
          continue e
        }
      }
      i.push(h)
    }
  }
  return i
}
function Mt(o, e) {
  const { isAsideEnabled: t } = St(),
    n = ut(i, 100)
  let s = null
  G(() => {
    requestAnimationFrame(i), window.addEventListener('scroll', n)
  }),
    Ke(() => {
      u(location.hash)
    }),
    me(() => {
      window.removeEventListener('scroll', n)
    })
  function i() {
    if (!t.value) return
    const h = window.scrollY,
      v = window.innerHeight,
      k = document.body.offsetHeight,
      y = Math.abs(h + v - k) < 1,
      L = fe
        .map(({ element: M, link: N }) => ({ link: N, top: Tt(M) }))
        .filter(({ top: M }) => !Number.isNaN(M))
        .sort((M, N) => M.top - N.top)
    if (!L.length) {
      u(null)
      return
    }
    if (h < 1) {
      u(null)
      return
    }
    if (y) {
      u(L[L.length - 1].link)
      return
    }
    let P = null
    for (const { link: M, top: N } of L) {
      if (N > h + Je() + 4) break
      P = M
    }
    u(P)
  }
  function u(h) {
    s && s.classList.remove('active'),
      h == null ? (s = null) : (s = o.value.querySelector(`a[href="${decodeURIComponent(h)}"]`))
    const v = s
    v
      ? (v.classList.add('active'), (e.value.style.top = v.offsetTop + 39 + 'px'), (e.value.style.opacity = '1'))
      : ((e.value.style.top = '33px'), (e.value.style.opacity = '0'))
  }
}
function Tt(o) {
  let e = 0
  for (; o !== document.body; ) {
    if (o === null) return NaN
    ;(e += o.offsetTop), (o = o.offsetParent)
  }
  return e
}
const It = ['href', 'title'],
  Nt = _({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(o) {
      function e({ target: t }) {
        const n = t.href.split('#')[1],
          s = document.getElementById(decodeURIComponent(n))
        s == null || s.focus({ preventScroll: !0 })
      }
      return (t, n) => {
        const s = z('VPDocOutlineItem', !0)
        return (
          a(),
          c(
            'ul',
            { class: w(['VPDocOutlineItem', t.root ? 'root' : 'nested']) },
            [
              (a(!0),
              c(
                I,
                null,
                F(
                  t.headers,
                  ({ children: i, link: u, title: h }) => (
                    a(),
                    c('li', null, [
                      d('a', { class: 'outline-link', href: u, onClick: e, title: h }, C(h), 9, It),
                      i != null && i.length ? (a(), b(s, { key: 0, headers: i }, null, 8, ['headers'])) : f('', !0),
                    ])
                  ),
                ),
                256,
              )),
            ],
            2,
          )
        )
      }
    },
  }),
  Be = $(Nt, [['__scopeId', 'data-v-918e3c45']]),
  Ht = (o) => (A('data-v-f8dce73a'), (o = o()), B(), o),
  At = { class: 'content' },
  Bt = { class: 'outline-title', role: 'heading', 'aria-level': '2' },
  Ft = { 'aria-labelledby': 'doc-outline-aria-label' },
  Et = Ht(() =>
    d('span', { class: 'visually-hidden', id: 'doc-outline-aria-label' }, ' Table of Contents for current page ', -1),
  ),
  Dt = _({
    __name: 'VPDocAsideOutline',
    setup(o) {
      const { frontmatter: e, theme: t } = V(),
        n = Ce([])
      se(() => {
        n.value = ge(e.value.outline ?? t.value.outline)
      })
      const s = S(),
        i = S()
      return (
        Mt(s, i),
        (u, h) => (
          a(),
          c(
            'div',
            {
              class: w(['VPDocAsideOutline', { 'has-outline': n.value.length > 0 }]),
              ref_key: 'container',
              ref: s,
              role: 'navigation',
            },
            [
              d('div', At, [
                d('div', { class: 'outline-marker', ref_key: 'marker', ref: i }, null, 512),
                d('div', Bt, C(r(Ae)(r(t))), 1),
                d('nav', Ft, [Et, m(Be, { headers: n.value, root: !0 }, null, 8, ['headers'])]),
              ]),
            ],
            2,
          )
        )
      )
    },
  }),
  Ot = $(Dt, [['__scopeId', 'data-v-f8dce73a']]),
  Zt = { class: 'VPDocAsideCarbonAds' },
  Ut = _({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(o) {
      const e = () => null
      return (t, n) => (a(), c('div', Zt, [m(r(e), { 'carbon-ads': t.carbonAds }, null, 8, ['carbon-ads'])]))
    },
  }),
  Gt = (o) => (A('data-v-54fc8d15'), (o = o()), B(), o),
  jt = { class: 'VPDocAside' },
  zt = Gt(() => d('div', { class: 'spacer' }, null, -1)),
  qt = _({
    __name: 'VPDocAside',
    setup(o) {
      const { theme: e } = V()
      return (t, n) => (
        a(),
        c('div', jt, [
          l(t.$slots, 'aside-top', {}, void 0, !0),
          l(t.$slots, 'aside-outline-before', {}, void 0, !0),
          m(Ot),
          l(t.$slots, 'aside-outline-after', {}, void 0, !0),
          zt,
          l(t.$slots, 'aside-ads-before', {}, void 0, !0),
          r(e).carbonAds ? (a(), b(Ut, { key: 0, 'carbon-ads': r(e).carbonAds }, null, 8, ['carbon-ads'])) : f('', !0),
          l(t.$slots, 'aside-ads-after', {}, void 0, !0),
          l(t.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      )
    },
  }),
  Rt = $(qt, [['__scopeId', 'data-v-54fc8d15']])
function Wt() {
  const { theme: o, page: e } = V()
  return g(() => {
    const { text: t = 'Edit this page', pattern: n = '' } = o.value.editLink || {}
    let s
    return typeof n == 'function' ? (s = n(e.value)) : (s = n.replace(/:path/g, e.value.filePath)), { url: s, text: t }
  })
}
function Kt() {
  const { page: o, theme: e, frontmatter: t } = V()
  return g(() => {
    var v, k, y, L, P, M, N, H
    const n = He(e.value.sidebar, o.value.relativePath),
      s = Lt(n),
      i = s.findIndex((T) => j(o.value.relativePath, T.link)),
      u = (((v = e.value.docFooter) == null ? void 0 : v.prev) === !1 && !t.value.prev) || t.value.prev === !1,
      h = (((k = e.value.docFooter) == null ? void 0 : k.next) === !1 && !t.value.next) || t.value.next === !1
    return {
      prev: u
        ? void 0
        : {
            text:
              (typeof t.value.prev == 'string'
                ? t.value.prev
                : typeof t.value.prev == 'object'
                ? t.value.prev.text
                : void 0) ??
              ((y = s[i - 1]) == null ? void 0 : y.docFooterText) ??
              ((L = s[i - 1]) == null ? void 0 : L.text),
            link:
              (typeof t.value.prev == 'object' ? t.value.prev.link : void 0) ??
              ((P = s[i - 1]) == null ? void 0 : P.link),
          },
      next: h
        ? void 0
        : {
            text:
              (typeof t.value.next == 'string'
                ? t.value.next
                : typeof t.value.next == 'object'
                ? t.value.next.text
                : void 0) ??
              ((M = s[i + 1]) == null ? void 0 : M.docFooterText) ??
              ((N = s[i + 1]) == null ? void 0 : N.text),
            link:
              (typeof t.value.next == 'object' ? t.value.next.link : void 0) ??
              ((H = s[i + 1]) == null ? void 0 : H.link),
          },
    }
  })
}
const D = _({
    __name: 'VPLink',
    props: { tag: {}, href: {}, noIcon: { type: Boolean }, target: {}, rel: {} },
    setup(o) {
      const e = o,
        t = g(() => e.tag ?? (e.href ? 'a' : 'span')),
        n = g(() => e.href && Me.test(e.href))
      return (s, i) => (
        a(),
        b(
          R(t.value),
          {
            class: w(['VPLink', { link: s.href, 'vp-external-link-icon': n.value, 'no-icon': s.noIcon }]),
            href: s.href ? r(be)(s.href) : void 0,
            target: s.target ?? (n.value ? '_blank' : void 0),
            rel: s.rel ?? (n.value ? 'noreferrer' : void 0),
          },
          { default: p(() => [l(s.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  Jt = { class: 'VPLastUpdated' },
  Yt = ['datetime'],
  Qt = _({
    __name: 'VPDocFooterLastUpdated',
    setup(o) {
      const { theme: e, page: t, frontmatter: n, lang: s } = V(),
        i = g(() => new Date(n.value.lastUpdated ?? t.value.lastUpdated)),
        u = g(() => i.value.toISOString()),
        h = S('')
      return (
        G(() => {
          oe(() => {
            var v, k, y
            h.value = new Intl.DateTimeFormat(
              (k = (v = e.value.lastUpdated) == null ? void 0 : v.formatOptions) != null && k.forceLocale
                ? s.value
                : void 0,
              ((y = e.value.lastUpdated) == null ? void 0 : y.formatOptions) ?? {
                dateStyle: 'short',
                timeStyle: 'short',
              },
            ).format(i.value)
          })
        }),
        (v, k) => {
          var y
          return (
            a(),
            c('p', Jt, [
              E(
                C(((y = r(e).lastUpdated) == null ? void 0 : y.text) || r(e).lastUpdatedText || 'Last updated') + ': ',
                1,
              ),
              d('time', { datetime: u.value }, C(h.value), 9, Yt),
            ])
          )
        }
      )
    },
  }),
  Xt = $(Qt, [['__scopeId', 'data-v-25a4a4eb']]),
  xt = (o) => (A('data-v-9285ebef'), (o = o()), B(), o),
  eo = { key: 0, class: 'VPDocFooter' },
  to = { key: 0, class: 'edit-info' },
  oo = { key: 0, class: 'edit-link' },
  so = xt(() => d('span', { class: 'vpi-square-pen edit-link-icon' }, null, -1)),
  no = { key: 1, class: 'last-updated' },
  ao = { key: 1, class: 'prev-next' },
  ro = { class: 'pager' },
  io = ['innerHTML'],
  lo = ['innerHTML'],
  co = { class: 'pager' },
  uo = ['innerHTML'],
  vo = ['innerHTML'],
  po = _({
    __name: 'VPDocFooter',
    setup(o) {
      const { theme: e, page: t, frontmatter: n } = V(),
        s = Wt(),
        i = Kt(),
        u = g(() => e.value.editLink && n.value.editLink !== !1),
        h = g(() => t.value.lastUpdated && n.value.lastUpdated !== !1),
        v = g(() => u.value || h.value || i.value.prev || i.value.next)
      return (k, y) => {
        var L, P, M, N
        return v.value
          ? (a(),
            c('footer', eo, [
              l(k.$slots, 'doc-footer-before', {}, void 0, !0),
              u.value || h.value
                ? (a(),
                  c('div', to, [
                    u.value
                      ? (a(),
                        c('div', oo, [
                          m(
                            D,
                            { class: 'edit-link-button', href: r(s).url, 'no-icon': !0 },
                            { default: p(() => [so, E(' ' + C(r(s).text), 1)]), _: 1 },
                            8,
                            ['href'],
                          ),
                        ]))
                      : f('', !0),
                    h.value ? (a(), c('div', no, [m(Xt)])) : f('', !0),
                  ]))
                : f('', !0),
              ((L = r(i).prev) != null && L.link) || ((P = r(i).next) != null && P.link)
                ? (a(),
                  c('nav', ao, [
                    d('div', ro, [
                      (M = r(i).prev) != null && M.link
                        ? (a(),
                          b(
                            D,
                            { key: 0, class: 'pager-link prev', href: r(i).prev.link },
                            {
                              default: p(() => {
                                var H
                                return [
                                  d(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML: ((H = r(e).docFooter) == null ? void 0 : H.prev) || 'Previous page',
                                    },
                                    null,
                                    8,
                                    io,
                                  ),
                                  d('span', { class: 'title', innerHTML: r(i).prev.text }, null, 8, lo),
                                ]
                              }),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ))
                        : f('', !0),
                    ]),
                    d('div', co, [
                      (N = r(i).next) != null && N.link
                        ? (a(),
                          b(
                            D,
                            { key: 0, class: 'pager-link next', href: r(i).next.link },
                            {
                              default: p(() => {
                                var H
                                return [
                                  d(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML: ((H = r(e).docFooter) == null ? void 0 : H.next) || 'Next page',
                                    },
                                    null,
                                    8,
                                    uo,
                                  ),
                                  d('span', { class: 'title', innerHTML: r(i).next.text }, null, 8, vo),
                                ]
                              }),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ))
                        : f('', !0),
                    ]),
                  ]))
                : f('', !0),
            ]))
          : f('', !0)
      }
    },
  }),
  ho = $(po, [['__scopeId', 'data-v-9285ebef']]),
  fo = (o) => (A('data-v-96ebdcd5'), (o = o()), B(), o),
  _o = { class: 'container' },
  mo = fo(() => d('div', { class: 'aside-curtain' }, null, -1)),
  ko = { class: 'aside-container' },
  bo = { class: 'aside-content' },
  $o = { class: 'content' },
  go = { class: 'content-container' },
  yo = { class: 'main' },
  Lo = _({
    __name: 'VPDoc',
    setup(o) {
      const { theme: e } = V(),
        t = ne(),
        { hasSidebar: n, hasAside: s, leftAside: i } = Z(),
        u = g(() => t.path.replace(/[./]+/g, '_').replace(/_html$/, ''))
      return (h, v) => {
        const k = z('Content')
        return (
          a(),
          c(
            'div',
            { class: w(['VPDoc', { 'has-sidebar': r(n), 'has-aside': r(s) }]) },
            [
              l(h.$slots, 'doc-top', {}, void 0, !0),
              d('div', _o, [
                r(s)
                  ? (a(),
                    c(
                      'div',
                      { key: 0, class: w(['aside', { 'left-aside': r(i) }]) },
                      [
                        mo,
                        d('div', ko, [
                          d('div', bo, [
                            m(Rt, null, {
                              'aside-top': p(() => [l(h.$slots, 'aside-top', {}, void 0, !0)]),
                              'aside-bottom': p(() => [l(h.$slots, 'aside-bottom', {}, void 0, !0)]),
                              'aside-outline-before': p(() => [l(h.$slots, 'aside-outline-before', {}, void 0, !0)]),
                              'aside-outline-after': p(() => [l(h.$slots, 'aside-outline-after', {}, void 0, !0)]),
                              'aside-ads-before': p(() => [l(h.$slots, 'aside-ads-before', {}, void 0, !0)]),
                              'aside-ads-after': p(() => [l(h.$slots, 'aside-ads-after', {}, void 0, !0)]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ],
                      2,
                    ))
                  : f('', !0),
                d('div', $o, [
                  d('div', go, [
                    l(h.$slots, 'doc-before', {}, void 0, !0),
                    d('main', yo, [
                      m(
                        k,
                        { class: w(['vp-doc', [u.value, r(e).externalLinkIcon && 'external-link-icon-enabled']]) },
                        null,
                        8,
                        ['class'],
                      ),
                    ]),
                    m(ho, null, {
                      'doc-footer-before': p(() => [l(h.$slots, 'doc-footer-before', {}, void 0, !0)]),
                      _: 3,
                    }),
                    l(h.$slots, 'doc-after', {}, void 0, !0),
                  ]),
                ]),
              ]),
              l(h.$slots, 'doc-bottom', {}, void 0, !0),
            ],
            2,
          )
        )
      }
    },
  }),
  Vo = $(Lo, [['__scopeId', 'data-v-96ebdcd5']]),
  Po = _({
    __name: 'VPButton',
    props: {
      tag: {},
      size: { default: 'medium' },
      theme: { default: 'brand' },
      text: {},
      href: {},
      target: {},
      rel: {},
    },
    setup(o) {
      const e = o,
        t = g(() => e.href && Me.test(e.href)),
        n = g(() => (e.tag || e.href ? 'a' : 'button'))
      return (s, i) => (
        a(),
        b(
          R(n.value),
          {
            class: w(['VPButton', [s.size, s.theme]]),
            href: s.href ? r(be)(s.href) : void 0,
            target: e.target ?? (t.value ? '_blank' : void 0),
            rel: e.rel ?? (t.value ? 'noreferrer' : void 0),
          },
          { default: p(() => [E(C(s.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  So = $(Po, [['__scopeId', 'data-v-37f10cae']]),
  wo = ['src', 'alt'],
  Co = _({
    inheritAttrs: !1,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(o) {
      return (e, t) => {
        const n = z('VPImage', !0)
        return e.image
          ? (a(),
            c(
              I,
              { key: 0 },
              [
                typeof e.image == 'string' || 'src' in e.image
                  ? (a(),
                    c(
                      'img',
                      X(
                        { key: 0, class: 'VPImage' },
                        typeof e.image == 'string' ? e.$attrs : { ...e.image, ...e.$attrs },
                        {
                          src: r(_e)(typeof e.image == 'string' ? e.image : e.image.src),
                          alt: e.alt ?? (typeof e.image == 'string' ? '' : e.image.alt || ''),
                        },
                      ),
                      null,
                      16,
                      wo,
                    ))
                  : (a(),
                    c(
                      I,
                      { key: 1 },
                      [
                        m(n, X({ class: 'dark', image: e.image.dark, alt: e.image.alt }, e.$attrs), null, 16, [
                          'image',
                          'alt',
                        ]),
                        m(n, X({ class: 'light', image: e.image.light, alt: e.image.alt }, e.$attrs), null, 16, [
                          'image',
                          'alt',
                        ]),
                      ],
                      64,
                    )),
              ],
              64,
            ))
          : f('', !0)
      }
    },
  }),
  ee = $(Co, [['__scopeId', 'data-v-c49f33d9']]),
  Mo = (o) => (A('data-v-dd60c021'), (o = o()), B(), o),
  To = { class: 'container' },
  Io = { class: 'main' },
  No = { key: 0, class: 'name' },
  Ho = ['innerHTML'],
  Ao = ['innerHTML'],
  Bo = ['innerHTML'],
  Fo = { key: 0, class: 'actions' },
  Eo = { key: 0, class: 'image' },
  Do = { class: 'image-container' },
  Oo = Mo(() => d('div', { class: 'image-bg' }, null, -1)),
  Zo = _({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(o) {
      const e = ae('hero-image-slot-exists')
      return (t, n) => (
        a(),
        c(
          'div',
          { class: w(['VPHero', { 'has-image': t.image || r(e) }]) },
          [
            d('div', To, [
              d('div', Io, [
                l(t.$slots, 'home-hero-info-before', {}, void 0, !0),
                l(
                  t.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    t.name
                      ? (a(), c('h1', No, [d('span', { innerHTML: t.name, class: 'clip' }, null, 8, Ho)]))
                      : f('', !0),
                    t.text ? (a(), c('p', { key: 1, innerHTML: t.text, class: 'text' }, null, 8, Ao)) : f('', !0),
                    t.tagline
                      ? (a(), c('p', { key: 2, innerHTML: t.tagline, class: 'tagline' }, null, 8, Bo))
                      : f('', !0),
                  ],
                  !0,
                ),
                l(t.$slots, 'home-hero-info-after', {}, void 0, !0),
                t.actions
                  ? (a(),
                    c('div', Fo, [
                      (a(!0),
                      c(
                        I,
                        null,
                        F(
                          t.actions,
                          (s) => (
                            a(),
                            c('div', { key: s.link, class: 'action' }, [
                              m(
                                So,
                                {
                                  tag: 'a',
                                  size: 'medium',
                                  theme: s.theme,
                                  text: s.text,
                                  href: s.link,
                                  target: s.target,
                                  rel: s.rel,
                                },
                                null,
                                8,
                                ['theme', 'text', 'href', 'target', 'rel'],
                              ),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : f('', !0),
                l(t.$slots, 'home-hero-actions-after', {}, void 0, !0),
              ]),
              t.image || r(e)
                ? (a(),
                  c('div', Eo, [
                    d('div', Do, [
                      Oo,
                      l(
                        t.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          t.image
                            ? (a(), b(ee, { key: 0, class: 'image-src', image: t.image }, null, 8, ['image']))
                            : f('', !0),
                        ],
                        !0,
                      ),
                    ]),
                  ]))
                : f('', !0),
            ]),
          ],
          2,
        )
      )
    },
  }),
  Uo = $(Zo, [['__scopeId', 'data-v-dd60c021']]),
  Go = _({
    __name: 'VPHomeHero',
    setup(o) {
      const { frontmatter: e } = V()
      return (t, n) =>
        r(e).hero
          ? (a(),
            b(
              Uo,
              {
                key: 0,
                class: 'VPHomeHero',
                name: r(e).hero.name,
                text: r(e).hero.text,
                tagline: r(e).hero.tagline,
                image: r(e).hero.image,
                actions: r(e).hero.actions,
              },
              {
                'home-hero-info-before': p(() => [l(t.$slots, 'home-hero-info-before')]),
                'home-hero-info': p(() => [l(t.$slots, 'home-hero-info')]),
                'home-hero-info-after': p(() => [l(t.$slots, 'home-hero-info-after')]),
                'home-hero-actions-after': p(() => [l(t.$slots, 'home-hero-actions-after')]),
                'home-hero-image': p(() => [l(t.$slots, 'home-hero-image')]),
                _: 3,
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions'],
            ))
          : f('', !0)
    },
  }),
  jo = (o) => (A('data-v-00aaf851'), (o = o()), B(), o),
  zo = { class: 'box' },
  qo = { key: 0, class: 'icon' },
  Ro = ['innerHTML'],
  Wo = ['innerHTML'],
  Ko = ['innerHTML'],
  Jo = { key: 4, class: 'link-text' },
  Yo = { class: 'link-text-value' },
  Qo = jo(() => d('span', { class: 'vpi-arrow-right link-text-icon' }, null, -1)),
  Xo = _({
    __name: 'VPFeature',
    props: { icon: {}, title: {}, details: {}, link: {}, linkText: {}, rel: {}, target: {} },
    setup(o) {
      return (e, t) => (
        a(),
        b(
          D,
          { class: 'VPFeature', href: e.link, rel: e.rel, target: e.target, 'no-icon': !0, tag: e.link ? 'a' : 'div' },
          {
            default: p(() => [
              d('article', zo, [
                typeof e.icon == 'object' && e.icon.wrap
                  ? (a(),
                    c('div', qo, [
                      m(
                        ee,
                        { image: e.icon, alt: e.icon.alt, height: e.icon.height || 48, width: e.icon.width || 48 },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width'],
                      ),
                    ]))
                  : typeof e.icon == 'object'
                  ? (a(),
                    b(
                      ee,
                      {
                        key: 1,
                        image: e.icon,
                        alt: e.icon.alt,
                        height: e.icon.height || 48,
                        width: e.icon.width || 48,
                      },
                      null,
                      8,
                      ['image', 'alt', 'height', 'width'],
                    ))
                  : e.icon
                  ? (a(), c('div', { key: 2, class: 'icon', innerHTML: e.icon }, null, 8, Ro))
                  : f('', !0),
                d('h2', { class: 'title', innerHTML: e.title }, null, 8, Wo),
                e.details ? (a(), c('p', { key: 3, class: 'details', innerHTML: e.details }, null, 8, Ko)) : f('', !0),
                e.linkText ? (a(), c('div', Jo, [d('p', Yo, [E(C(e.linkText) + ' ', 1), Qo])])) : f('', !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ['href', 'rel', 'target', 'tag'],
        )
      )
    },
  }),
  xo = $(Xo, [['__scopeId', 'data-v-00aaf851']]),
  es = { key: 0, class: 'VPFeatures' },
  ts = { class: 'container' },
  os = { class: 'items' },
  ss = _({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(o) {
      const e = o,
        t = g(() => {
          const n = e.features.length
          if (n) {
            if (n === 2) return 'grid-2'
            if (n === 3) return 'grid-3'
            if (n % 3 === 0) return 'grid-6'
            if (n > 3) return 'grid-4'
          } else return
        })
      return (n, s) =>
        n.features
          ? (a(),
            c('div', es, [
              d('div', ts, [
                d('div', os, [
                  (a(!0),
                  c(
                    I,
                    null,
                    F(
                      n.features,
                      (i) => (
                        a(),
                        c(
                          'div',
                          { key: i.title, class: w(['item', [t.value]]) },
                          [
                            m(
                              xo,
                              {
                                icon: i.icon,
                                title: i.title,
                                details: i.details,
                                link: i.link,
                                'link-text': i.linkText,
                                rel: i.rel,
                                target: i.target,
                              },
                              null,
                              8,
                              ['icon', 'title', 'details', 'link', 'link-text', 'rel', 'target'],
                            ),
                          ],
                          2,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ]))
          : f('', !0)
    },
  }),
  ns = $(ss, [['__scopeId', 'data-v-486feeb0']]),
  as = _({
    __name: 'VPHomeFeatures',
    setup(o) {
      const { frontmatter: e } = V()
      return (t, n) =>
        r(e).features
          ? (a(), b(ns, { key: 0, class: 'VPHomeFeatures', features: r(e).features }, null, 8, ['features']))
          : f('', !0)
    },
  }),
  rs = _({
    __name: 'VPHomeContent',
    setup(o) {
      const { width: e } = Ye({ includeScrollbar: !1 })
      return (t, n) => (
        a(),
        c(
          'div',
          { class: 'vp-doc container', style: ke(r(e) ? { '--vp-offset': `calc(50% - ${r(e) / 2}px)` } : {}) },
          [l(t.$slots, 'default', {}, void 0, !0)],
          4,
        )
      )
    },
  }),
  is = $(rs, [['__scopeId', 'data-v-48f096b8']]),
  ls = { class: 'VPHome' },
  cs = _({
    __name: 'VPHome',
    setup(o) {
      const { frontmatter: e } = V()
      return (t, n) => {
        const s = z('Content')
        return (
          a(),
          c('div', ls, [
            l(t.$slots, 'home-hero-before', {}, void 0, !0),
            m(Go, null, {
              'home-hero-info-before': p(() => [l(t.$slots, 'home-hero-info-before', {}, void 0, !0)]),
              'home-hero-info': p(() => [l(t.$slots, 'home-hero-info', {}, void 0, !0)]),
              'home-hero-info-after': p(() => [l(t.$slots, 'home-hero-info-after', {}, void 0, !0)]),
              'home-hero-actions-after': p(() => [l(t.$slots, 'home-hero-actions-after', {}, void 0, !0)]),
              'home-hero-image': p(() => [l(t.$slots, 'home-hero-image', {}, void 0, !0)]),
              _: 3,
            }),
            l(t.$slots, 'home-hero-after', {}, void 0, !0),
            l(t.$slots, 'home-features-before', {}, void 0, !0),
            m(as),
            l(t.$slots, 'home-features-after', {}, void 0, !0),
            r(e).markdownStyles !== !1
              ? (a(), b(is, { key: 0 }, { default: p(() => [m(s)]), _: 1 }))
              : (a(), b(s, { key: 1 })),
          ])
        )
      }
    },
  }),
  us = $(cs, [['__scopeId', 'data-v-eb99549c']]),
  ds = {},
  vs = { class: 'VPPage' }
function ps(o, e) {
  const t = z('Content')
  return a(), c('div', vs, [l(o.$slots, 'page-top'), m(t), l(o.$slots, 'page-bottom')])
}
const hs = $(ds, [['render', ps]]),
  fs = _({
    __name: 'VPContent',
    setup(o) {
      const { page: e, frontmatter: t } = V(),
        { hasSidebar: n } = Z()
      return (s, i) => (
        a(),
        c(
          'div',
          { class: w(['VPContent', { 'has-sidebar': r(n), 'is-home': r(t).layout === 'home' }]), id: 'VPContent' },
          [
            r(e).isNotFound
              ? l(s.$slots, 'not-found', { key: 0 }, () => [m(gt)], !0)
              : r(t).layout === 'page'
              ? (a(),
                b(
                  hs,
                  { key: 1 },
                  {
                    'page-top': p(() => [l(s.$slots, 'page-top', {}, void 0, !0)]),
                    'page-bottom': p(() => [l(s.$slots, 'page-bottom', {}, void 0, !0)]),
                    _: 3,
                  },
                ))
              : r(t).layout === 'home'
              ? (a(),
                b(
                  us,
                  { key: 2 },
                  {
                    'home-hero-before': p(() => [l(s.$slots, 'home-hero-before', {}, void 0, !0)]),
                    'home-hero-info-before': p(() => [l(s.$slots, 'home-hero-info-before', {}, void 0, !0)]),
                    'home-hero-info': p(() => [l(s.$slots, 'home-hero-info', {}, void 0, !0)]),
                    'home-hero-info-after': p(() => [l(s.$slots, 'home-hero-info-after', {}, void 0, !0)]),
                    'home-hero-actions-after': p(() => [l(s.$slots, 'home-hero-actions-after', {}, void 0, !0)]),
                    'home-hero-image': p(() => [l(s.$slots, 'home-hero-image', {}, void 0, !0)]),
                    'home-hero-after': p(() => [l(s.$slots, 'home-hero-after', {}, void 0, !0)]),
                    'home-features-before': p(() => [l(s.$slots, 'home-features-before', {}, void 0, !0)]),
                    'home-features-after': p(() => [l(s.$slots, 'home-features-after', {}, void 0, !0)]),
                    _: 3,
                  },
                ))
              : r(t).layout && r(t).layout !== 'doc'
              ? (a(), b(R(r(t).layout), { key: 3 }))
              : (a(),
                b(
                  Vo,
                  { key: 4 },
                  {
                    'doc-top': p(() => [l(s.$slots, 'doc-top', {}, void 0, !0)]),
                    'doc-bottom': p(() => [l(s.$slots, 'doc-bottom', {}, void 0, !0)]),
                    'doc-footer-before': p(() => [l(s.$slots, 'doc-footer-before', {}, void 0, !0)]),
                    'doc-before': p(() => [l(s.$slots, 'doc-before', {}, void 0, !0)]),
                    'doc-after': p(() => [l(s.$slots, 'doc-after', {}, void 0, !0)]),
                    'aside-top': p(() => [l(s.$slots, 'aside-top', {}, void 0, !0)]),
                    'aside-outline-before': p(() => [l(s.$slots, 'aside-outline-before', {}, void 0, !0)]),
                    'aside-outline-after': p(() => [l(s.$slots, 'aside-outline-after', {}, void 0, !0)]),
                    'aside-ads-before': p(() => [l(s.$slots, 'aside-ads-before', {}, void 0, !0)]),
                    'aside-ads-after': p(() => [l(s.$slots, 'aside-ads-after', {}, void 0, !0)]),
                    'aside-bottom': p(() => [l(s.$slots, 'aside-bottom', {}, void 0, !0)]),
                    _: 3,
                  },
                )),
          ],
          2,
        )
      )
    },
  }),
  _s = $(fs, [['__scopeId', 'data-v-ea349be7']]),
  ms = { class: 'container' },
  ks = ['innerHTML'],
  bs = ['innerHTML'],
  $s = _({
    __name: 'VPFooter',
    setup(o) {
      const { theme: e, frontmatter: t } = V(),
        { hasSidebar: n } = Z()
      return (s, i) =>
        r(e).footer && r(t).footer !== !1
          ? (a(),
            c(
              'footer',
              { key: 0, class: w(['VPFooter', { 'has-sidebar': r(n) }]) },
              [
                d('div', ms, [
                  r(e).footer.message
                    ? (a(), c('p', { key: 0, class: 'message', innerHTML: r(e).footer.message }, null, 8, ks))
                    : f('', !0),
                  r(e).footer.copyright
                    ? (a(), c('p', { key: 1, class: 'copyright', innerHTML: r(e).footer.copyright }, null, 8, bs))
                    : f('', !0),
                ]),
              ],
              2,
            ))
          : f('', !0)
    },
  }),
  gs = $($s, [['__scopeId', 'data-v-a669202b']])
function Fe() {
  const { theme: o, frontmatter: e } = V(),
    t = Ce([]),
    n = g(() => t.value.length > 0)
  return (
    se(() => {
      t.value = ge(e.value.outline ?? o.value.outline)
    }),
    { headers: t, hasLocalNav: n }
  )
}
const ys = (o) => (A('data-v-d9e13155'), (o = o()), B(), o),
  Ls = ys(() => d('span', { class: 'vpi-chevron-right icon' }, null, -1)),
  Vs = { class: 'header' },
  Ps = { class: 'outline' },
  Ss = _({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(o) {
      const e = o,
        { theme: t } = V(),
        n = S(!1),
        s = S(0),
        i = S(),
        u = S()
      Qe(i, () => {
        n.value = !1
      }),
        Xe('Escape', () => {
          n.value = !1
        }),
        se(() => {
          n.value = !1
        })
      function h() {
        ;(n.value = !n.value), (s.value = window.innerHeight + Math.min(window.scrollY - e.navHeight, 0))
      }
      function v(y) {
        y.target.classList.contains('outline-link') &&
          (u.value && (u.value.style.transition = 'none'),
          xe(() => {
            n.value = !1
          }))
      }
      function k() {
        ;(n.value = !1), window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      return (y, L) => (
        a(),
        c(
          'div',
          { class: 'VPLocalNavOutlineDropdown', style: ke({ '--vp-vh': s.value + 'px' }), ref_key: 'main', ref: i },
          [
            y.headers.length > 0
              ? (a(),
                c('button', { key: 0, onClick: h, class: w({ open: n.value }) }, [E(C(r(Ae)(r(t))) + ' ', 1), Ls], 2))
              : (a(), c('button', { key: 1, onClick: k }, C(r(t).returnToTopLabel || 'Return to top'), 1)),
            m(
              te,
              { name: 'flyout' },
              {
                default: p(() => [
                  n.value
                    ? (a(),
                      c(
                        'div',
                        { key: 0, ref_key: 'items', ref: u, class: 'items', onClick: v },
                        [
                          d('div', Vs, [
                            d(
                              'a',
                              { class: 'top-link', href: '#', onClick: k },
                              C(r(t).returnToTopLabel || 'Return to top'),
                              1,
                            ),
                          ]),
                          d('div', Ps, [m(Be, { headers: y.headers }, null, 8, ['headers'])]),
                        ],
                        512,
                      ))
                    : f('', !0),
                ]),
                _: 1,
              },
            ),
          ],
          4,
        )
      )
    },
  }),
  ws = $(Ss, [['__scopeId', 'data-v-d9e13155']]),
  Cs = (o) => (A('data-v-819eccf7'), (o = o()), B(), o),
  Ms = { class: 'container' },
  Ts = ['aria-expanded'],
  Is = Cs(() => d('span', { class: 'vpi-align-left menu-icon' }, null, -1)),
  Ns = { class: 'menu-text' },
  Hs = _({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(o) {
      const { theme: e, frontmatter: t } = V(),
        { hasSidebar: n } = Z(),
        { headers: s } = Fe(),
        { y: i } = Te(),
        u = S(0)
      G(() => {
        u.value = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height'))
      }),
        se(() => {
          s.value = ge(t.value.outline ?? e.value.outline)
        })
      const h = g(() => s.value.length === 0),
        v = g(() => h.value && !n.value),
        k = g(() => ({ VPLocalNav: !0, 'has-sidebar': n.value, empty: h.value, fixed: v.value }))
      return (y, L) =>
        r(t).layout !== 'home' && (!v.value || r(i) >= u.value)
          ? (a(),
            c(
              'div',
              { key: 0, class: w(k.value) },
              [
                d('div', Ms, [
                  r(n)
                    ? (a(),
                      c(
                        'button',
                        {
                          key: 0,
                          class: 'menu',
                          'aria-expanded': y.open,
                          'aria-controls': 'VPSidebarNav',
                          onClick: L[0] || (L[0] = (P) => y.$emit('open-menu')),
                        },
                        [Is, d('span', Ns, C(r(e).sidebarMenuLabel || 'Menu'), 1)],
                        8,
                        Ts,
                      ))
                    : f('', !0),
                  m(ws, { headers: r(s), navHeight: u.value }, null, 8, ['headers', 'navHeight']),
                ]),
              ],
              2,
            ))
          : f('', !0)
    },
  }),
  As = $(Hs, [['__scopeId', 'data-v-819eccf7']])
function Bs() {
  const o = S(!1)
  function e() {
    ;(o.value = !0), window.addEventListener('resize', s)
  }
  function t() {
    ;(o.value = !1), window.removeEventListener('resize', s)
  }
  function n() {
    o.value ? t() : e()
  }
  function s() {
    window.outerWidth >= 768 && t()
  }
  const i = ne()
  return O(() => i.path, t), { isScreenOpen: o, openScreen: e, closeScreen: t, toggleScreen: n }
}
const Fs = {},
  Es = { class: 'VPSwitch', type: 'button', role: 'switch' },
  Ds = { class: 'check' },
  Os = { key: 0, class: 'icon' }
function Zs(o, e) {
  return (
    a(),
    c('button', Es, [
      d('span', Ds, [o.$slots.default ? (a(), c('span', Os, [l(o.$slots, 'default', {}, void 0, !0)])) : f('', !0)]),
    ])
  )
}
const Us = $(Fs, [
    ['render', Zs],
    ['__scopeId', 'data-v-7f57562d'],
  ]),
  Ee = (o) => (A('data-v-63ffed9e'), (o = o()), B(), o),
  Gs = Ee(() => d('span', { class: 'vpi-sun sun' }, null, -1)),
  js = Ee(() => d('span', { class: 'vpi-moon moon' }, null, -1)),
  zs = _({
    __name: 'VPSwitchAppearance',
    setup(o) {
      const { isDark: e, theme: t } = V(),
        n = ae('toggle-appearance', () => {
          e.value = !e.value
        }),
        s = g(() =>
          e.value
            ? t.value.lightModeSwitchTitle || 'Switch to light theme'
            : t.value.darkModeSwitchTitle || 'Switch to dark theme',
        )
      return (i, u) => (
        a(),
        b(
          Us,
          { title: s.value, class: 'VPSwitchAppearance', 'aria-checked': r(e), onClick: r(n) },
          { default: p(() => [Gs, js]), _: 1 },
          8,
          ['title', 'aria-checked', 'onClick'],
        )
      )
    },
  }),
  ye = $(zs, [['__scopeId', 'data-v-63ffed9e']]),
  qs = { key: 0, class: 'VPNavBarAppearance' },
  Rs = _({
    __name: 'VPNavBarAppearance',
    setup(o) {
      const { site: e } = V()
      return (t, n) => (r(e).appearance && r(e).appearance !== 'force-dark' ? (a(), c('div', qs, [m(ye)])) : f('', !0))
    },
  }),
  Ws = $(Rs, [['__scopeId', 'data-v-e7d3448f']]),
  Le = S()
let De = !1,
  ue = 0
function Ks(o) {
  const e = S(!1)
  if (W) {
    !De && Js(), ue++
    const t = O(Le, (n) => {
      var s, i, u
      n === o.el.value || ((s = o.el.value) != null && s.contains(n))
        ? ((e.value = !0), (i = o.onFocus) == null || i.call(o))
        : ((e.value = !1), (u = o.onBlur) == null || u.call(o))
    })
    me(() => {
      t(), ue--, ue || Ys()
    })
  }
  return et(e)
}
function Js() {
  document.addEventListener('focusin', Oe), (De = !0), (Le.value = document.activeElement)
}
function Ys() {
  document.removeEventListener('focusin', Oe)
}
function Oe() {
  Le.value = document.activeElement
}
const Qs = { class: 'VPMenuLink' },
  Xs = _({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(o) {
      const { page: e } = V()
      return (t, n) => (
        a(),
        c('div', Qs, [
          m(
            D,
            {
              class: w({ active: r(j)(r(e).relativePath, t.item.activeMatch || t.item.link, !!t.item.activeMatch) }),
              href: t.item.link,
              target: t.item.target,
              rel: t.item.rel,
            },
            { default: p(() => [E(C(t.item.text), 1)]), _: 1 },
            8,
            ['class', 'href', 'target', 'rel'],
          ),
        ])
      )
    },
  }),
  re = $(Xs, [['__scopeId', 'data-v-30582938']]),
  xs = { class: 'VPMenuGroup' },
  en = { key: 0, class: 'title' },
  tn = _({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        c('div', xs, [
          e.text ? (a(), c('p', en, C(e.text), 1)) : f('', !0),
          (a(!0),
          c(
            I,
            null,
            F(
              e.items,
              (n) => (
                a(), c(I, null, ['link' in n ? (a(), b(re, { key: 0, item: n }, null, 8, ['item'])) : f('', !0)], 64)
              ),
            ),
            256,
          )),
        ])
      )
    },
  }),
  on = $(tn, [['__scopeId', 'data-v-9a30a0ff']]),
  sn = { class: 'VPMenu' },
  nn = { key: 0, class: 'items' },
  an = _({
    __name: 'VPMenu',
    props: { items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        c('div', sn, [
          e.items
            ? (a(),
              c('div', nn, [
                (a(!0),
                c(
                  I,
                  null,
                  F(
                    e.items,
                    (n) => (
                      a(),
                      c(
                        I,
                        { key: n.text },
                        [
                          'link' in n
                            ? (a(), b(re, { key: 0, item: n }, null, 8, ['item']))
                            : (a(), b(on, { key: 1, text: n.text, items: n.items }, null, 8, ['text', 'items'])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ]))
            : f('', !0),
          l(e.$slots, 'default', {}, void 0, !0),
        ])
      )
    },
  }),
  rn = $(an, [['__scopeId', 'data-v-85f94c8f']]),
  ln = (o) => (A('data-v-cca1cb73'), (o = o()), B(), o),
  cn = ['aria-expanded', 'aria-label'],
  un = { key: 0, class: 'text' },
  dn = ['innerHTML'],
  vn = ln(() => d('span', { class: 'vpi-chevron-down text-icon' }, null, -1)),
  pn = { key: 1, class: 'vpi-more-horizontal icon' },
  hn = { class: 'menu' },
  fn = _({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(o) {
      const e = S(!1),
        t = S()
      Ks({ el: t, onBlur: n })
      function n() {
        e.value = !1
      }
      return (s, i) => (
        a(),
        c(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: t,
            onMouseenter: i[1] || (i[1] = (u) => (e.value = !0)),
            onMouseleave: i[2] || (i[2] = (u) => (e.value = !1)),
          },
          [
            d(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': e.value,
                'aria-label': s.label,
                onClick: i[0] || (i[0] = (u) => (e.value = !e.value)),
              },
              [
                s.button || s.icon
                  ? (a(),
                    c('span', un, [
                      s.icon ? (a(), c('span', { key: 0, class: w([s.icon, 'option-icon']) }, null, 2)) : f('', !0),
                      s.button ? (a(), c('span', { key: 1, innerHTML: s.button }, null, 8, dn)) : f('', !0),
                      vn,
                    ]))
                  : (a(), c('span', pn)),
              ],
              8,
              cn,
            ),
            d('div', hn, [
              m(rn, { items: s.items }, { default: p(() => [l(s.$slots, 'default', {}, void 0, !0)]), _: 3 }, 8, [
                'items',
              ]),
            ]),
          ],
          544,
        )
      )
    },
  }),
  Ve = $(fn, [['__scopeId', 'data-v-cca1cb73']]),
  _n = ['href', 'aria-label', 'innerHTML'],
  mn = _({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(o) {
      const e = o,
        t = g(() => (typeof e.icon == 'object' ? e.icon.svg : `<span class="vpi-social-${e.icon}" />`))
      return (n, s) => (
        a(),
        c(
          'a',
          {
            class: 'VPSocialLink no-icon',
            href: n.link,
            'aria-label': n.ariaLabel ?? (typeof n.icon == 'string' ? n.icon : ''),
            target: '_blank',
            rel: 'noopener',
            innerHTML: t.value,
          },
          null,
          8,
          _n,
        )
      )
    },
  }),
  kn = $(mn, [['__scopeId', 'data-v-6a402faa']]),
  bn = { class: 'VPSocialLinks' },
  $n = _({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(o) {
      return (e, t) => (
        a(),
        c('div', bn, [
          (a(!0),
          c(
            I,
            null,
            F(
              e.links,
              ({ link: n, icon: s, ariaLabel: i }) => (
                a(), b(kn, { key: n, icon: s, link: n, ariaLabel: i }, null, 8, ['icon', 'link', 'ariaLabel'])
              ),
            ),
            128,
          )),
        ])
      )
    },
  }),
  Pe = $($n, [['__scopeId', 'data-v-a009477c']]),
  gn = { key: 0, class: 'group translations' },
  yn = { class: 'trans-title' },
  Ln = { key: 1, class: 'group' },
  Vn = { class: 'item appearance' },
  Pn = { class: 'label' },
  Sn = { class: 'appearance-action' },
  wn = { key: 2, class: 'group' },
  Cn = { class: 'item social-links' },
  Mn = _({
    __name: 'VPNavBarExtra',
    setup(o) {
      const { site: e, theme: t } = V(),
        { localeLinks: n, currentLang: s } = K({ correspondingLink: !0 }),
        i = g(() => (n.value.length && s.value.label) || e.value.appearance || t.value.socialLinks)
      return (u, h) =>
        i.value
          ? (a(),
            b(
              Ve,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: p(() => [
                  r(n).length && r(s).label
                    ? (a(),
                      c('div', gn, [
                        d('p', yn, C(r(s).label), 1),
                        (a(!0),
                        c(
                          I,
                          null,
                          F(r(n), (v) => (a(), b(re, { key: v.link, item: v }, null, 8, ['item']))),
                          128,
                        )),
                      ]))
                    : f('', !0),
                  r(e).appearance && r(e).appearance !== 'force-dark'
                    ? (a(),
                      c('div', Ln, [
                        d('div', Vn, [
                          d('p', Pn, C(r(t).darkModeSwitchLabel || 'Appearance'), 1),
                          d('div', Sn, [m(ye)]),
                        ]),
                      ]))
                    : f('', !0),
                  r(t).socialLinks
                    ? (a(),
                      c('div', wn, [
                        d('div', Cn, [
                          m(Pe, { class: 'social-links-list', links: r(t).socialLinks }, null, 8, ['links']),
                        ]),
                      ]))
                    : f('', !0),
                ]),
                _: 1,
              },
            ))
          : f('', !0)
    },
  }),
  Tn = $(Mn, [['__scopeId', 'data-v-7be981d4']]),
  In = (o) => (A('data-v-2b1163b4'), (o = o()), B(), o),
  Nn = ['aria-expanded'],
  Hn = In(() =>
    d(
      'span',
      { class: 'container' },
      [d('span', { class: 'top' }), d('span', { class: 'middle' }), d('span', { class: 'bottom' })],
      -1,
    ),
  ),
  An = [Hn],
  Bn = _({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(o) {
      return (e, t) => (
        a(),
        c(
          'button',
          {
            type: 'button',
            class: w(['VPNavBarHamburger', { active: e.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': e.active,
            'aria-controls': 'VPNavScreen',
            onClick: t[0] || (t[0] = (n) => e.$emit('click')),
          },
          An,
          10,
          Nn,
        )
      )
    },
  }),
  Fn = $(Bn, [['__scopeId', 'data-v-2b1163b4']]),
  En = ['innerHTML'],
  Dn = _({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(o) {
      const { page: e } = V()
      return (t, n) => (
        a(),
        b(
          D,
          {
            class: w({
              VPNavBarMenuLink: !0,
              active: r(j)(r(e).relativePath, t.item.activeMatch || t.item.link, !!t.item.activeMatch),
            }),
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            tabindex: '0',
          },
          { default: p(() => [d('span', { innerHTML: t.item.text }, null, 8, En)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  On = $(Dn, [['__scopeId', 'data-v-dd9a32d2']]),
  Zn = _({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(o) {
      const e = o,
        { page: t } = V(),
        n = (i) => ('link' in i ? j(t.value.relativePath, i.link, !!e.item.activeMatch) : i.items.some(n)),
        s = g(() => n(e.item))
      return (i, u) => (
        a(),
        b(
          Ve,
          {
            class: w({
              VPNavBarMenuGroup: !0,
              active: r(j)(r(t).relativePath, i.item.activeMatch, !!i.item.activeMatch) || s.value,
            }),
            button: i.item.text,
            items: i.item.items,
          },
          null,
          8,
          ['class', 'button', 'items'],
        )
      )
    },
  }),
  Un = (o) => (A('data-v-07494daa'), (o = o()), B(), o),
  Gn = { key: 0, 'aria-labelledby': 'main-nav-aria-label', class: 'VPNavBarMenu' },
  jn = Un(() => d('span', { id: 'main-nav-aria-label', class: 'visually-hidden' }, 'Main Navigation', -1)),
  zn = _({
    __name: 'VPNavBarMenu',
    setup(o) {
      const { theme: e } = V()
      return (t, n) =>
        r(e).nav
          ? (a(),
            c('nav', Gn, [
              jn,
              (a(!0),
              c(
                I,
                null,
                F(
                  r(e).nav,
                  (s) => (
                    a(),
                    c(
                      I,
                      { key: s.text },
                      [
                        'link' in s
                          ? (a(), b(On, { key: 0, item: s }, null, 8, ['item']))
                          : (a(), b(Zn, { key: 1, item: s }, null, 8, ['item'])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : f('', !0)
    },
  }),
  qn = $(zn, [['__scopeId', 'data-v-07494daa']])
function Rn(o) {
  const { localeIndex: e, theme: t } = V()
  function n(s) {
    var N, H, T
    const i = s.split('.'),
      u = (N = t.value.search) == null ? void 0 : N.options,
      h = u && typeof u == 'object',
      v = (h && ((T = (H = u.locales) == null ? void 0 : H[e.value]) == null ? void 0 : T.translations)) || null,
      k = (h && u.translations) || null
    let y = v,
      L = k,
      P = o
    const M = i.pop()
    for (const J of i) {
      let U = null
      const q = P == null ? void 0 : P[J]
      q && (U = P = q)
      const le = L == null ? void 0 : L[J]
      le && (U = L = le)
      const ce = y == null ? void 0 : y[J]
      ce && (U = y = ce), q || (P = U), le || (L = U), ce || (y = U)
    }
    return (y == null ? void 0 : y[M]) ?? (L == null ? void 0 : L[M]) ?? (P == null ? void 0 : P[M]) ?? ''
  }
  return n
}
const Wn = ['aria-label'],
  Kn = { class: 'DocSearch-Button-Container' },
  Jn = d('span', { class: 'vp-icon DocSearch-Search-Icon' }, null, -1),
  Yn = { class: 'DocSearch-Button-Placeholder' },
  Qn = d(
    'span',
    { class: 'DocSearch-Button-Keys' },
    [d('kbd', { class: 'DocSearch-Button-Key' }), d('kbd', { class: 'DocSearch-Button-Key' }, 'K')],
    -1,
  ),
  Se = _({
    __name: 'VPNavBarSearchButton',
    setup(o) {
      const t = Rn({ button: { buttonText: 'Search', buttonAriaLabel: 'Search' } })
      return (n, s) => (
        a(),
        c(
          'button',
          { type: 'button', class: 'DocSearch DocSearch-Button', 'aria-label': r(t)('button.buttonAriaLabel') },
          [d('span', Kn, [Jn, d('span', Yn, C(r(t)('button.buttonText')), 1)]), Qn],
          8,
          Wn,
        )
      )
    },
  }),
  Xn = { class: 'VPNavBarSearch' },
  xn = { id: 'local-search' },
  ea = { key: 1, id: 'docsearch' },
  ta = _({
    __name: 'VPNavBarSearch',
    setup(o) {
      const e = () => null,
        t = () => null,
        { theme: n } = V(),
        s = S(!1),
        i = S(!1)
      G(() => {})
      function u() {
        s.value || ((s.value = !0), setTimeout(h, 16))
      }
      function h() {
        const y = new Event('keydown')
        ;(y.key = 'k'),
          (y.metaKey = !0),
          window.dispatchEvent(y),
          setTimeout(() => {
            document.querySelector('.DocSearch-Modal') || h()
          }, 16)
      }
      const v = S(!1),
        k = ''
      return (y, L) => {
        var P
        return (
          a(),
          c('div', Xn, [
            r(k) === 'local'
              ? (a(),
                c(
                  I,
                  { key: 0 },
                  [
                    v.value ? (a(), b(r(e), { key: 0, onClose: L[0] || (L[0] = (M) => (v.value = !1)) })) : f('', !0),
                    d('div', xn, [m(Se, { onClick: L[1] || (L[1] = (M) => (v.value = !0)) })]),
                  ],
                  64,
                ))
              : r(k) === 'algolia'
              ? (a(),
                c(
                  I,
                  { key: 1 },
                  [
                    s.value
                      ? (a(),
                        b(
                          r(t),
                          {
                            key: 0,
                            algolia: ((P = r(n).search) == null ? void 0 : P.options) ?? r(n).algolia,
                            onVnodeBeforeMount: L[2] || (L[2] = (M) => (i.value = !0)),
                          },
                          null,
                          8,
                          ['algolia'],
                        ))
                      : f('', !0),
                    i.value ? f('', !0) : (a(), c('div', ea, [m(Se, { onClick: u })])),
                  ],
                  64,
                ))
              : f('', !0),
          ])
        )
      }
    },
  }),
  oa = _({
    __name: 'VPNavBarSocialLinks',
    setup(o) {
      const { theme: e } = V()
      return (t, n) =>
        r(e).socialLinks
          ? (a(), b(Pe, { key: 0, class: 'VPNavBarSocialLinks', links: r(e).socialLinks }, null, 8, ['links']))
          : f('', !0)
    },
  }),
  sa = $(oa, [['__scopeId', 'data-v-20574bcb']]),
  na = ['href', 'rel', 'target'],
  aa = { key: 1 },
  ra = { key: 2 },
  ia = _({
    __name: 'VPNavBarTitle',
    setup(o) {
      const { site: e, theme: t } = V(),
        { hasSidebar: n } = Z(),
        { currentLang: s } = K(),
        i = g(() => {
          var v
          return typeof t.value.logoLink == 'string'
            ? t.value.logoLink
            : (v = t.value.logoLink) == null
            ? void 0
            : v.link
        }),
        u = g(() => {
          var v
          return typeof t.value.logoLink == 'string' || (v = t.value.logoLink) == null ? void 0 : v.rel
        }),
        h = g(() => {
          var v
          return typeof t.value.logoLink == 'string' || (v = t.value.logoLink) == null ? void 0 : v.target
        })
      return (v, k) => (
        a(),
        c(
          'div',
          { class: w(['VPNavBarTitle', { 'has-sidebar': r(n) }]) },
          [
            d(
              'a',
              { class: 'title', href: i.value ?? r(be)(r(s).link), rel: u.value, target: h.value },
              [
                l(v.$slots, 'nav-bar-title-before', {}, void 0, !0),
                r(t).logo ? (a(), b(ee, { key: 0, class: 'logo', image: r(t).logo }, null, 8, ['image'])) : f('', !0),
                r(t).siteTitle
                  ? (a(), c('span', aa, C(r(t).siteTitle), 1))
                  : r(t).siteTitle === void 0
                  ? (a(), c('span', ra, C(r(e).title), 1))
                  : f('', !0),
                l(v.$slots, 'nav-bar-title-after', {}, void 0, !0),
              ],
              8,
              na,
            ),
          ],
          2,
        )
      )
    },
  }),
  la = $(ia, [['__scopeId', 'data-v-032dcc5d']]),
  ca = { class: 'items' },
  ua = { class: 'title' },
  da = _({
    __name: 'VPNavBarTranslations',
    setup(o) {
      const { theme: e } = V(),
        { localeLinks: t, currentLang: n } = K({ correspondingLink: !0 })
      return (s, i) =>
        r(t).length && r(n).label
          ? (a(),
            b(
              Ve,
              {
                key: 0,
                class: 'VPNavBarTranslations',
                icon: 'vpi-languages',
                label: r(e).langMenuLabel || 'Change language',
              },
              {
                default: p(() => [
                  d('div', ca, [
                    d('p', ua, C(r(n).label), 1),
                    (a(!0),
                    c(
                      I,
                      null,
                      F(r(t), (u) => (a(), b(re, { key: u.link, item: u }, null, 8, ['item']))),
                      128,
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ['label'],
            ))
          : f('', !0)
    },
  }),
  va = $(da, [['__scopeId', 'data-v-3fdbcf0e']]),
  pa = (o) => (A('data-v-6a9fbd4a'), (o = o()), B(), o),
  ha = { class: 'wrapper' },
  fa = { class: 'container' },
  _a = { class: 'title' },
  ma = { class: 'content' },
  ka = { class: 'content-body' },
  ba = pa(() => d('div', { class: 'divider' }, [d('div', { class: 'divider-line' })], -1)),
  $a = _({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(o) {
      const { y: e } = Te(),
        { hasSidebar: t } = Z(),
        { hasLocalNav: n } = Fe(),
        { frontmatter: s } = V(),
        i = S({})
      return (
        we(() => {
          i.value = {
            'has-sidebar': t.value,
            'has-local-nav': n.value,
            top: s.value.layout === 'home' && e.value === 0,
          }
        }),
        (u, h) => (
          a(),
          c(
            'div',
            { class: w(['VPNavBar', i.value]) },
            [
              d('div', ha, [
                d('div', fa, [
                  d('div', _a, [
                    m(la, null, {
                      'nav-bar-title-before': p(() => [l(u.$slots, 'nav-bar-title-before', {}, void 0, !0)]),
                      'nav-bar-title-after': p(() => [l(u.$slots, 'nav-bar-title-after', {}, void 0, !0)]),
                      _: 3,
                    }),
                  ]),
                  d('div', ma, [
                    d('div', ka, [
                      l(u.$slots, 'nav-bar-content-before', {}, void 0, !0),
                      m(ta, { class: 'search' }),
                      m(qn, { class: 'menu' }),
                      m(va, { class: 'translations' }),
                      m(Ws, { class: 'appearance' }),
                      m(sa, { class: 'social-links' }),
                      m(Tn, { class: 'extra' }),
                      l(u.$slots, 'nav-bar-content-after', {}, void 0, !0),
                      m(
                        Fn,
                        {
                          class: 'hamburger',
                          active: u.isScreenOpen,
                          onClick: h[0] || (h[0] = (v) => u.$emit('toggle-screen')),
                        },
                        null,
                        8,
                        ['active'],
                      ),
                    ]),
                  ]),
                ]),
              ]),
              ba,
            ],
            2,
          )
        )
      )
    },
  }),
  ga = $($a, [['__scopeId', 'data-v-6a9fbd4a']]),
  ya = { key: 0, class: 'VPNavScreenAppearance' },
  La = { class: 'text' },
  Va = _({
    __name: 'VPNavScreenAppearance',
    setup(o) {
      const { site: e, theme: t } = V()
      return (n, s) =>
        r(e).appearance && r(e).appearance !== 'force-dark'
          ? (a(), c('div', ya, [d('p', La, C(r(t).darkModeSwitchLabel || 'Appearance'), 1), m(ye)]))
          : f('', !0)
    },
  }),
  Pa = $(Va, [['__scopeId', 'data-v-a1eba169']]),
  Sa = _({
    __name: 'VPNavScreenMenuLink',
    props: { item: {} },
    setup(o) {
      const e = ae('close-screen')
      return (t, n) => (
        a(),
        b(
          D,
          { class: 'VPNavScreenMenuLink', href: t.item.link, target: t.item.target, rel: t.item.rel, onClick: r(e) },
          { default: p(() => [E(C(t.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick'],
        )
      )
    },
  }),
  wa = $(Sa, [['__scopeId', 'data-v-819d5549']]),
  Ca = _({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(o) {
      const e = ae('close-screen')
      return (t, n) => (
        a(),
        b(
          D,
          {
            class: 'VPNavScreenMenuGroupLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            onClick: r(e),
          },
          { default: p(() => [E(C(t.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick'],
        )
      )
    },
  }),
  Ze = $(Ca, [['__scopeId', 'data-v-6cc1fca2']]),
  Ma = { class: 'VPNavScreenMenuGroupSection' },
  Ta = { key: 0, class: 'title' },
  Ia = _({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        c('div', Ma, [
          e.text ? (a(), c('p', Ta, C(e.text), 1)) : f('', !0),
          (a(!0),
          c(
            I,
            null,
            F(e.items, (n) => (a(), b(Ze, { key: n.text, item: n }, null, 8, ['item']))),
            128,
          )),
        ])
      )
    },
  }),
  Na = $(Ia, [['__scopeId', 'data-v-d7fb340a']]),
  Ha = (o) => (A('data-v-b6301b5a'), (o = o()), B(), o),
  Aa = ['aria-controls', 'aria-expanded'],
  Ba = ['innerHTML'],
  Fa = Ha(() => d('span', { class: 'vpi-plus button-icon' }, null, -1)),
  Ea = ['id'],
  Da = { key: 1, class: 'group' },
  Oa = _({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(o) {
      const e = o,
        t = S(!1),
        n = g(() => `NavScreenGroup-${e.text.replace(' ', '-').toLowerCase()}`)
      function s() {
        t.value = !t.value
      }
      return (i, u) => (
        a(),
        c(
          'div',
          { class: w(['VPNavScreenMenuGroup', { open: t.value }]) },
          [
            d(
              'button',
              { class: 'button', 'aria-controls': n.value, 'aria-expanded': t.value, onClick: s },
              [d('span', { class: 'button-text', innerHTML: i.text }, null, 8, Ba), Fa],
              8,
              Aa,
            ),
            d(
              'div',
              { id: n.value, class: 'items' },
              [
                (a(!0),
                c(
                  I,
                  null,
                  F(
                    i.items,
                    (h) => (
                      a(),
                      c(
                        I,
                        { key: h.text },
                        [
                          'link' in h
                            ? (a(), c('div', { key: h.text, class: 'item' }, [m(Ze, { item: h }, null, 8, ['item'])]))
                            : (a(),
                              c('div', Da, [m(Na, { text: h.text, items: h.items }, null, 8, ['text', 'items'])])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              8,
              Ea,
            ),
          ],
          2,
        )
      )
    },
  }),
  Za = $(Oa, [['__scopeId', 'data-v-b6301b5a']]),
  Ua = { key: 0, class: 'VPNavScreenMenu' },
  Ga = _({
    __name: 'VPNavScreenMenu',
    setup(o) {
      const { theme: e } = V()
      return (t, n) =>
        r(e).nav
          ? (a(),
            c('nav', Ua, [
              (a(!0),
              c(
                I,
                null,
                F(
                  r(e).nav,
                  (s) => (
                    a(),
                    c(
                      I,
                      { key: s.text },
                      [
                        'link' in s
                          ? (a(), b(wa, { key: 0, item: s }, null, 8, ['item']))
                          : (a(), b(Za, { key: 1, text: s.text || '', items: s.items }, null, 8, ['text', 'items'])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : f('', !0)
    },
  }),
  ja = _({
    __name: 'VPNavScreenSocialLinks',
    setup(o) {
      const { theme: e } = V()
      return (t, n) =>
        r(e).socialLinks
          ? (a(), b(Pe, { key: 0, class: 'VPNavScreenSocialLinks', links: r(e).socialLinks }, null, 8, ['links']))
          : f('', !0)
    },
  }),
  Ue = (o) => (A('data-v-4ad05cb0'), (o = o()), B(), o),
  za = Ue(() => d('span', { class: 'vpi-languages icon lang' }, null, -1)),
  qa = Ue(() => d('span', { class: 'vpi-chevron-down icon chevron' }, null, -1)),
  Ra = { class: 'list' },
  Wa = _({
    __name: 'VPNavScreenTranslations',
    setup(o) {
      const { localeLinks: e, currentLang: t } = K({ correspondingLink: !0 }),
        n = S(!1)
      function s() {
        n.value = !n.value
      }
      return (i, u) =>
        r(e).length && r(t).label
          ? (a(),
            c(
              'div',
              { key: 0, class: w(['VPNavScreenTranslations', { open: n.value }]) },
              [
                d('button', { class: 'title', onClick: s }, [za, E(' ' + C(r(t).label) + ' ', 1), qa]),
                d('ul', Ra, [
                  (a(!0),
                  c(
                    I,
                    null,
                    F(
                      r(e),
                      (h) => (
                        a(),
                        c('li', { key: h.link, class: 'item' }, [
                          m(D, { class: 'link', href: h.link }, { default: p(() => [E(C(h.text), 1)]), _: 2 }, 1032, [
                            'href',
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ],
              2,
            ))
          : f('', !0)
    },
  }),
  Ka = $(Wa, [['__scopeId', 'data-v-4ad05cb0']]),
  Ja = { class: 'container' },
  Ya = _({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(o) {
      const e = S(null),
        t = Ie(W ? document.body : null)
      return (n, s) => (
        a(),
        b(
          te,
          {
            name: 'fade',
            onEnter: s[0] || (s[0] = (i) => (t.value = !0)),
            onAfterLeave: s[1] || (s[1] = (i) => (t.value = !1)),
          },
          {
            default: p(() => [
              n.open
                ? (a(),
                  c(
                    'div',
                    { key: 0, class: 'VPNavScreen', ref_key: 'screen', ref: e, id: 'VPNavScreen' },
                    [
                      d('div', Ja, [
                        l(n.$slots, 'nav-screen-content-before', {}, void 0, !0),
                        m(Ga, { class: 'menu' }),
                        m(Ka, { class: 'translations' }),
                        m(Pa, { class: 'appearance' }),
                        m(ja, { class: 'social-links' }),
                        l(n.$slots, 'nav-screen-content-after', {}, void 0, !0),
                      ]),
                    ],
                    512,
                  ))
                : f('', !0),
            ]),
            _: 3,
          },
        )
      )
    },
  }),
  Qa = $(Ya, [['__scopeId', 'data-v-27162cfa']]),
  Xa = { key: 0, class: 'VPNav' },
  xa = _({
    __name: 'VPNav',
    setup(o) {
      const { isScreenOpen: e, closeScreen: t, toggleScreen: n } = Bs(),
        { frontmatter: s } = V(),
        i = g(() => s.value.navbar !== !1)
      return (
        Ne('close-screen', t),
        oe(() => {
          W && document.documentElement.classList.toggle('hide-nav', !i.value)
        }),
        (u, h) =>
          i.value
            ? (a(),
              c('header', Xa, [
                m(
                  ga,
                  { 'is-screen-open': r(e), onToggleScreen: r(n) },
                  {
                    'nav-bar-title-before': p(() => [l(u.$slots, 'nav-bar-title-before', {}, void 0, !0)]),
                    'nav-bar-title-after': p(() => [l(u.$slots, 'nav-bar-title-after', {}, void 0, !0)]),
                    'nav-bar-content-before': p(() => [l(u.$slots, 'nav-bar-content-before', {}, void 0, !0)]),
                    'nav-bar-content-after': p(() => [l(u.$slots, 'nav-bar-content-after', {}, void 0, !0)]),
                    _: 3,
                  },
                  8,
                  ['is-screen-open', 'onToggleScreen'],
                ),
                m(
                  Qa,
                  { open: r(e) },
                  {
                    'nav-screen-content-before': p(() => [l(u.$slots, 'nav-screen-content-before', {}, void 0, !0)]),
                    'nav-screen-content-after': p(() => [l(u.$slots, 'nav-screen-content-after', {}, void 0, !0)]),
                    _: 3,
                  },
                  8,
                  ['open'],
                ),
              ]))
            : f('', !0)
      )
    },
  }),
  er = $(xa, [['__scopeId', 'data-v-b31785af']]),
  Ge = (o) => (A('data-v-2d11b8f1'), (o = o()), B(), o),
  tr = ['role', 'tabindex'],
  or = Ge(() => d('div', { class: 'indicator' }, null, -1)),
  sr = Ge(() => d('span', { class: 'vpi-chevron-right caret-icon' }, null, -1)),
  nr = [sr],
  ar = { key: 1, class: 'items' },
  rr = _({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(o) {
      const e = o,
        {
          collapsed: t,
          collapsible: n,
          isLink: s,
          isActiveLink: i,
          hasActiveLink: u,
          hasChildren: h,
          toggle: v,
        } = Pt(g(() => e.item)),
        k = g(() => (h.value ? 'section' : 'div')),
        y = g(() => (s.value ? 'a' : 'div')),
        L = g(() => (h.value ? (e.depth + 2 === 7 ? 'p' : `h${e.depth + 2}`) : 'p')),
        P = g(() => (s.value ? void 0 : 'button')),
        M = g(() => [
          [`level-${e.depth}`],
          { collapsible: n.value },
          { collapsed: t.value },
          { 'is-link': s.value },
          { 'is-active': i.value },
          { 'has-active': u.value },
        ])
      function N(T) {
        ;('key' in T && T.key !== 'Enter') || (!e.item.link && v())
      }
      function H() {
        e.item.link && v()
      }
      return (T, J) => {
        const U = z('VPSidebarItem', !0)
        return (
          a(),
          b(
            R(k.value),
            { class: w(['VPSidebarItem', M.value]) },
            {
              default: p(() => [
                T.item.text
                  ? (a(),
                    c(
                      'div',
                      X(
                        { key: 0, class: 'item', role: P.value },
                        tt(T.item.items ? { click: N, keydown: N } : {}, !0),
                        { tabindex: T.item.items && 0 },
                      ),
                      [
                        or,
                        T.item.link
                          ? (a(),
                            b(
                              D,
                              {
                                key: 0,
                                tag: y.value,
                                class: 'link',
                                href: T.item.link,
                                rel: T.item.rel,
                                target: T.item.target,
                              },
                              {
                                default: p(() => [
                                  (a(),
                                  b(R(L.value), { class: 'text', innerHTML: T.item.text }, null, 8, ['innerHTML'])),
                                ]),
                                _: 1,
                              },
                              8,
                              ['tag', 'href', 'rel', 'target'],
                            ))
                          : (a(),
                            b(R(L.value), { key: 1, class: 'text', innerHTML: T.item.text }, null, 8, ['innerHTML'])),
                        T.item.collapsed != null
                          ? (a(),
                            c(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: H,
                                onKeydown: ot(H, ['enter']),
                                tabindex: '0',
                              },
                              nr,
                              32,
                            ))
                          : f('', !0),
                      ],
                      16,
                      tr,
                    ))
                  : f('', !0),
                T.item.items && T.item.items.length
                  ? (a(),
                    c('div', ar, [
                      T.depth < 5
                        ? (a(!0),
                          c(
                            I,
                            { key: 0 },
                            F(
                              T.item.items,
                              (q) => (
                                a(), b(U, { key: q.text, item: q, depth: T.depth + 1 }, null, 8, ['item', 'depth'])
                              ),
                            ),
                            128,
                          ))
                        : f('', !0),
                    ]))
                  : f('', !0),
              ]),
              _: 1,
            },
            8,
            ['class'],
          )
        )
      }
    },
  }),
  ir = $(rr, [['__scopeId', 'data-v-2d11b8f1']]),
  je = (o) => (A('data-v-b777fce0'), (o = o()), B(), o),
  lr = je(() => d('div', { class: 'curtain' }, null, -1)),
  cr = { class: 'nav', id: 'VPSidebarNav', 'aria-labelledby': 'sidebar-aria-label', tabindex: '-1' },
  ur = je(() => d('span', { class: 'visually-hidden', id: 'sidebar-aria-label' }, ' Sidebar Navigation ', -1)),
  dr = _({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(o) {
      const { sidebarGroups: e, hasSidebar: t } = Z(),
        n = o,
        s = S(null),
        i = Ie(W ? document.body : null)
      return (
        O(
          [n, s],
          () => {
            var u
            n.open ? ((i.value = !0), (u = s.value) == null || u.focus()) : (i.value = !1)
          },
          { immediate: !0, flush: 'post' },
        ),
        (u, h) =>
          r(t)
            ? (a(),
              c(
                'aside',
                {
                  key: 0,
                  class: w(['VPSidebar', { open: u.open }]),
                  ref_key: 'navEl',
                  ref: s,
                  onClick: h[0] || (h[0] = st(() => {}, ['stop'])),
                },
                [
                  lr,
                  d('nav', cr, [
                    ur,
                    l(u.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (a(!0),
                    c(
                      I,
                      null,
                      F(
                        r(e),
                        (v) => (
                          a(),
                          c('div', { key: v.text, class: 'group' }, [m(ir, { item: v, depth: 0 }, null, 8, ['item'])])
                        ),
                      ),
                      128,
                    )),
                    l(u.$slots, 'sidebar-nav-after', {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : f('', !0)
      )
    },
  }),
  vr = $(dr, [['__scopeId', 'data-v-b777fce0']]),
  pr = _({
    __name: 'VPSkipLink',
    setup(o) {
      const e = ne(),
        t = S()
      O(
        () => e.path,
        () => t.value.focus(),
      )
      function n({ target: s }) {
        const i = document.getElementById(decodeURIComponent(s.hash).slice(1))
        if (i) {
          const u = () => {
            i.removeAttribute('tabindex'), i.removeEventListener('blur', u)
          }
          i.setAttribute('tabindex', '-1'), i.addEventListener('blur', u), i.focus(), window.scrollTo(0, 0)
        }
      }
      return (s, i) => (
        a(),
        c(
          I,
          null,
          [
            d('span', { ref_key: 'backToTop', ref: t, tabindex: '-1' }, null, 512),
            d('a', { href: '#VPContent', class: 'VPSkipLink visually-hidden', onClick: n }, ' Skip to content '),
          ],
          64,
        )
      )
    },
  }),
  hr = $(pr, [['__scopeId', 'data-v-d135cb3c']]),
  fr = _({
    __name: 'Layout',
    setup(o) {
      const { isOpen: e, open: t, close: n } = Z(),
        s = ne()
      O(() => s.path, n), Vt(e, n)
      const { frontmatter: i } = V(),
        u = nt(),
        h = g(() => !!u['home-hero-image'])
      return (
        Ne('hero-image-slot-exists', h),
        (v, k) => {
          const y = z('Content')
          return r(i).layout !== !1
            ? (a(),
              c(
                'div',
                { key: 0, class: w(['Layout', r(i).pageClass]) },
                [
                  l(v.$slots, 'layout-top', {}, void 0, !0),
                  m(hr),
                  m(ct, { class: 'backdrop', show: r(e), onClick: r(n) }, null, 8, ['show', 'onClick']),
                  m(er, null, {
                    'nav-bar-title-before': p(() => [l(v.$slots, 'nav-bar-title-before', {}, void 0, !0)]),
                    'nav-bar-title-after': p(() => [l(v.$slots, 'nav-bar-title-after', {}, void 0, !0)]),
                    'nav-bar-content-before': p(() => [l(v.$slots, 'nav-bar-content-before', {}, void 0, !0)]),
                    'nav-bar-content-after': p(() => [l(v.$slots, 'nav-bar-content-after', {}, void 0, !0)]),
                    'nav-screen-content-before': p(() => [l(v.$slots, 'nav-screen-content-before', {}, void 0, !0)]),
                    'nav-screen-content-after': p(() => [l(v.$slots, 'nav-screen-content-after', {}, void 0, !0)]),
                    _: 3,
                  }),
                  m(As, { open: r(e), onOpenMenu: r(t) }, null, 8, ['open', 'onOpenMenu']),
                  m(
                    vr,
                    { open: r(e) },
                    {
                      'sidebar-nav-before': p(() => [l(v.$slots, 'sidebar-nav-before', {}, void 0, !0)]),
                      'sidebar-nav-after': p(() => [l(v.$slots, 'sidebar-nav-after', {}, void 0, !0)]),
                      _: 3,
                    },
                    8,
                    ['open'],
                  ),
                  m(_s, null, {
                    'page-top': p(() => [l(v.$slots, 'page-top', {}, void 0, !0)]),
                    'page-bottom': p(() => [l(v.$slots, 'page-bottom', {}, void 0, !0)]),
                    'not-found': p(() => [l(v.$slots, 'not-found', {}, void 0, !0)]),
                    'home-hero-before': p(() => [l(v.$slots, 'home-hero-before', {}, void 0, !0)]),
                    'home-hero-info-before': p(() => [l(v.$slots, 'home-hero-info-before', {}, void 0, !0)]),
                    'home-hero-info': p(() => [l(v.$slots, 'home-hero-info', {}, void 0, !0)]),
                    'home-hero-info-after': p(() => [l(v.$slots, 'home-hero-info-after', {}, void 0, !0)]),
                    'home-hero-actions-after': p(() => [l(v.$slots, 'home-hero-actions-after', {}, void 0, !0)]),
                    'home-hero-image': p(() => [l(v.$slots, 'home-hero-image', {}, void 0, !0)]),
                    'home-hero-after': p(() => [l(v.$slots, 'home-hero-after', {}, void 0, !0)]),
                    'home-features-before': p(() => [l(v.$slots, 'home-features-before', {}, void 0, !0)]),
                    'home-features-after': p(() => [l(v.$slots, 'home-features-after', {}, void 0, !0)]),
                    'doc-footer-before': p(() => [l(v.$slots, 'doc-footer-before', {}, void 0, !0)]),
                    'doc-before': p(() => [l(v.$slots, 'doc-before', {}, void 0, !0)]),
                    'doc-after': p(() => [l(v.$slots, 'doc-after', {}, void 0, !0)]),
                    'doc-top': p(() => [l(v.$slots, 'doc-top', {}, void 0, !0)]),
                    'doc-bottom': p(() => [l(v.$slots, 'doc-bottom', {}, void 0, !0)]),
                    'aside-top': p(() => [l(v.$slots, 'aside-top', {}, void 0, !0)]),
                    'aside-bottom': p(() => [l(v.$slots, 'aside-bottom', {}, void 0, !0)]),
                    'aside-outline-before': p(() => [l(v.$slots, 'aside-outline-before', {}, void 0, !0)]),
                    'aside-outline-after': p(() => [l(v.$slots, 'aside-outline-after', {}, void 0, !0)]),
                    'aside-ads-before': p(() => [l(v.$slots, 'aside-ads-before', {}, void 0, !0)]),
                    'aside-ads-after': p(() => [l(v.$slots, 'aside-ads-after', {}, void 0, !0)]),
                    _: 3,
                  }),
                  m(gs),
                  l(v.$slots, 'layout-bottom', {}, void 0, !0),
                ],
                2,
              ))
            : (a(), b(y, { key: 1 }))
        }
      )
    },
  }),
  _r = $(fr, [['__scopeId', 'data-v-31dc5e62']]),
  mr = {
    Layout: _r,
    enhanceApp: ({ app: o }) => {
      o.component('Badge', rt)
    },
  },
  ie = (o, e) => {
    const t = o.__vccOpts || o
    for (const [n, s] of e) t[n] = s
    return t
  },
  kr = {},
  br = {
    t: '1661231422733',
    class: 'icon',
    viewBox: '0 0 1024 1024',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'p-id': '3259',
    width: '20',
    height: '20',
  },
  $r = d(
    'path',
    {
      d: 'M682.666667 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l226.133333-226.133333-226.133333-226.133333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8zM341.333333 810.666667c-12.8 0-21.333333-4.266667-29.866666-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334L145.066667 512l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z',
      'p-id': '3260',
    },
    null,
    -1,
  ),
  gr = [$r]
function yr(o, e) {
  return a(), c('svg', br, gr)
}
const Lr = ie(kr, [['render', yr]]),
  Vr = {},
  Pr = {
    t: '1661231449868',
    class: 'icon',
    viewBox: '0 0 1024 1024',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'p-id': '3541',
    width: '20',
    height: '20',
  },
  Sr = d(
    'path',
    {
      d: 'M305.6 225.6c-17.6-17.6-43.2-17.6-59.2 0L19.2 460.8c-25.6 30.4-25.6 72 0 97.6l225.6 235.2c8 8 20.8 12.8 30.4 12.8s20.8-4.8 30.4-12.8c17.6-17.6 17.6-43.2 0-59.2L88 512l217.6-225.6c17.6-17.6 17.6-43.2 0-60.8zM1001.6 460.8L774.4 225.6c-17.6-17.6-43.2-17.6-59.2 0s-17.6 43.2 0 59.2L932.8 512 715.2 737.6c-17.6 17.6-17.6 43.2 0 59.2 8 8 17.6 12.8 30.4 12.8 12.8 0 20.8-4.8 30.4-12.8l225.6-235.2c28.8-28.8 28.8-70.4 0-100.8zM612.8 230.4c-20.8-8-46.4 4.8-56 25.6L382.4 742.4c-8 20.8 4.8 46.4 25.6 56 4.8 0 8 4.8 12.8 4.8 17.6 0 33.6-12.8 38.4-30.4l179.2-491.2c8-20.8-4.8-46.4-25.6-51.2z',
      'p-id': '3542',
    },
    null,
    -1,
  ),
  wr = [Sr]
function Cr(o, e) {
  return a(), c('svg', Pr, wr)
}
const Mr = ie(Vr, [['render', Cr]]),
  Tr = {},
  Ir = { viewBox: '0 0 544 560', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  Nr = d(
    'path',
    {
      d: 'M399.503 143.667C399.319 152.501 406.332 159.812 415.167 159.997C424.001 160.181 431.312 153.168 431.497 144.333L399.503 143.667ZM416 120L431.997 120.333C431.999 120.207 432 120.081 432 119.954L416 120ZM360 64L360.046 48.0001C360.03 48 360.015 48 360 48L360 64ZM144 64V48C143.984 48 143.968 48 143.953 48.0001L144 64ZM80 128L64.0001 127.953C64 127.968 64 127.984 64 128L80 128ZM80 344H64C64 344.015 64 344.03 64.0001 344.046L80 344ZM136 400L135.954 416C135.97 416 135.985 416 136 416L136 400ZM160 416C168.837 416 176 408.837 176 400C176 391.163 168.837 384 160 384V416ZM217 160H439V128H217V160ZM439 160C461.644 160 480 178.356 480 201H512C512 160.683 479.317 128 439 128V160ZM480 201V423H512V201H480ZM480 423C480 445.644 461.644 464 439 464V496C479.317 496 512 463.317 512 423H480ZM439 464H217V496H439V464ZM217 464C194.356 464 176 445.644 176 423H144C144 463.317 176.683 496 217 496V464ZM176 423V201H144V423H176ZM176 201C176 178.356 194.356 160 217 160V128C176.683 128 144 160.683 144 201H176ZM431.497 144.333L431.997 120.333L400.003 119.667L399.503 143.667L431.497 144.333ZM432 119.954C431.946 100.888 424.347 82.6173 410.865 69.1349L388.238 91.7624C395.741 99.2658 399.97 109.434 400 120.046L432 119.954ZM410.865 69.1349C397.383 55.6526 379.112 48.0543 360.046 48.0001L359.954 79.9999C370.566 80.0301 380.734 84.2589 388.238 91.7624L410.865 69.1349ZM360 48H144V80H360V48ZM143.953 48.0001C122.767 48.0627 102.467 56.5064 87.4868 71.4868L110.114 94.1142C119.117 85.1118 131.316 80.0376 144.047 79.9999L143.953 48.0001ZM87.4868 71.4868C72.5064 86.4673 64.0627 106.767 64.0001 127.953L95.9999 128.047C96.0376 115.316 101.112 103.117 110.114 94.1142L87.4868 71.4868ZM64 128V344H96V128H64ZM64.0001 344.046C64.0543 363.112 71.6526 381.383 85.1349 394.865L107.762 372.238C100.259 364.734 96.0301 354.566 95.9999 343.954L64.0001 344.046ZM85.1349 394.865C98.6173 408.347 116.888 415.946 135.954 416L136.046 384C125.434 383.97 115.266 379.741 107.762 372.238L85.1349 394.865ZM136 416H160V384H136V416Z',
      fill: 'currentColor',
    },
    null,
    -1,
  ),
  Hr = [Nr]
function Ar(o, e) {
  return a(), c('svg', Ir, Hr)
}
const Br = ie(Tr, [['render', Ar]]),
  Y = 'vitepress-demo-preview',
  Q = (o, e, t, n) => {
    let s = e === '' ? `${o}` : `${o}-${e}`
    return t && (s += `__${t}`), n && (s += `--${n}`), s
  },
  ze = (o = '') => ({
    b: () => Q(Y, o),
    e: (e = '') => Q(Y, o, e),
    m: (e = '') => Q(Y, o, '', e),
    bem: (e, t, n) => Q(Y, e, t, n),
  }),
  Fr = () => {
    const o = S(!0)
    return {
      isCodeFold: o,
      setCodeFold: (e) => {
        o.value = e
      },
    }
  },
  Er = () => ({
    copyContent: S(''),
    clickCopy: async (o) => {
      await navigator.clipboard.writeText(o)
    },
  }),
  Dr = {},
  Or = { width: '20', height: '20', viewBox: '0 0 48 48', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
  Zr = d(
    'path',
    {
      d: 'M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z',
      fill: 'currentColor',
      stroke: '#333',
      'stroke-width': '4',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    null,
    -1,
  ),
  Ur = d(
    'path',
    {
      d: 'M17 24L22 29L32 19',
      fill: 'currentColor',
      stroke: '#333',
      'stroke-width': '4',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    null,
    -1,
  ),
  Gr = [Zr, Ur]
function jr(o, e) {
  return a(), c('svg', Or, Gr)
}
const zr = ie(Dr, [['render', jr]]),
  qr = _({
    __name: 'message-notice',
    props: { content: { default: '复制成功！' }, close: null },
    setup(o, { expose: e }) {
      const t = o,
        n = ze(),
        s = S(!1),
        i = (k) => {
          s.value = k
        },
        u = S(-999),
        h = (k) => {
          u.value = k
        }
      O(s, (k) => {
        k === !0 &&
          setTimeout(() => {
            s.value = !1
          }, 3e3)
      })
      const v = () => {
        t.close()
      }
      return (
        e({ setVisible: i, setTopHeight: h }),
        (k, y) => (
          a(),
          b(
            te,
            { name: 'slide-fade', onAfterLeave: v },
            {
              default: p(() => [
                s.value
                  ? (a(),
                    c(
                      'div',
                      {
                        key: 0,
                        class: w([r(n).bem('message-notice', 'container')]),
                        style: ke({ top: u.value + 'px' }),
                      },
                      [m(zr), d('span', null, C(o.content), 1)],
                      6,
                    ))
                  : f('', !0),
              ]),
              _: 1,
            },
          )
        )
      )
    },
  }),
  de = [],
  Rr = {
    open: () => {
      const o = document.createElement('div'),
        e = at(qr, {
          content: '复制成功！',
          close: () => {
            document.body.removeChild(o), de.pop(), e.unmount()
          },
        }),
        t = e.mount(o)
      document.body.appendChild(o)
      const n = de.length,
        s = n === 0 ? 10 : (n + 1) * 10 + n * 42
      t.setTopHeight(s), t.setVisible(!0), de.push(t)
    },
  },
  Wr = ['innerHTML'],
  Kr = _({
    __name: 'ElementPlus',
    props: { code: null, showCode: null, title: { default: '默认标题' }, description: { default: '描述内容' } },
    setup(o) {
      const e = o,
        t = ze(),
        { isCodeFold: n, setCodeFold: s } = Fr(),
        { clickCopy: i } = Er(),
        u = S(decodeURIComponent(e.code)),
        h = S(decodeURIComponent(e.showCode)),
        v = S(null),
        k = () => {
          i(u.value), Rr.open()
        },
        y = g(() => {
          var P
          return v.value ? ((P = v.value) == null ? void 0 : P.clientHeight) : 0
        }),
        L = (P) => {
          n.value ? (v.value.style.height = '0px') : (v.value.style.height = `${P}px`)
        }
      return (
        G(() => {
          const P = y.value
          L(P)
        }),
        O(n, () => {
          const P = y.value
          L(P)
        }),
        (P, M) => (
          a(),
          c(
            'div',
            { class: w([r(t).e('element-plus__container')]) },
            [
              d('section', { class: w([r(t).bem('preview')]) }, [l(P.$slots, 'default')], 2),
              d(
                'section',
                { class: w([r(t).bem('description')]) },
                [
                  d('div', { class: w([r(t).bem('description', 'split-line')]) }, null, 2),
                  d(
                    'div',
                    { class: w([r(t).bem('description', 'handle-btn')]) },
                    [
                      r(n)
                        ? (a(), b(Lr, { key: 1, onClick: M[1] || (M[1] = (N) => r(s)(!1)) }))
                        : (a(), b(Mr, { key: 0, onClick: M[0] || (M[0] = (N) => r(s)(!0)) })),
                      m(Br, { onClick: k }),
                    ],
                    2,
                  ),
                ],
                2,
              ),
              d(
                'section',
                { class: w([r(t).bem('source')]), ref_key: 'sourceCodeArea', ref: v },
                [d('div', { innerHTML: h.value, class: 'language-vue' }, null, 8, Wr)],
                2,
              ),
            ],
            2,
          )
        )
      )
    },
  }),
  Yr = {
    ...mr,
    enhanceApp({ app: o }) {
      o.component('demo-preview', Kr)
    },
  }
export { Yr as R }
