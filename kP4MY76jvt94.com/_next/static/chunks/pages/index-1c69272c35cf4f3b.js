;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    48312: function (e, n, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(86523)
        }
      ])
    },
    86523: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return f
          },
          default: function () {
            return pages
          }
        })
      var r,
        a,
        s = t(85893),
        o = t(67294),
        u = t(36808),
        i = t.n(u),
        c = t(5152),
        d = t.n(c),
        l = t(32971),
        _ = t(21888)
      ;((r = a || (a = {})).WE_ARE = 'ComponentHomePageWeAre'),
        (r.FEATURES = 'ComponentHomePageFeatures')
      let E = d()(
          () =>
            Promise.resolve()
              .then(t.bind(t, 32971))
              .then(e => e.Hero),
          { loadableGenerated: { webpack: () => [32971] } }
        ),
        m = d()(
          () =>
            t
              .e(9689)
              .then(t.bind(t, 39689))
              .then(e => e.HomeWeAre),
          { loadableGenerated: { webpack: () => [39689] } }
        ),
        h = d()(
          () =>
            Promise.all([t.e(7294), t.e(3009), t.e(9438)])
              .then(t.bind(t, 49438))
              .then(e => e.HomeFeatures),
          { loadableGenerated: { webpack: () => [49438] } }
        ),
        Home = e => {
          let { hero: n, sections: t, isFirstVisit: r } = e
          return (
            (0, o.useEffect)(() => {
              r && i().set('home-page-visited', '1')
            }, [r]),
            (0, s.jsxs)(s.Fragment, {
              children: [
                !!n &&
                  (0, s.jsx)(E, {
                    variant: l.HeroVariant.HOME,
                    shouldEndWordsAnimate: r,
                    isSticky: !0,
                    ...n
                  }),
                (0, s.jsx)(_.b, {
                  sections: t,
                  customSections: e => {
                    switch (e.__typename) {
                      case a.WE_ARE:
                        return (0, s.jsx)(m, { ...e })
                      case a.FEATURES:
                        return (0, s.jsx)(h, { ...e })
                      default:
                        return null
                    }
                  }
                })
              ]
            })
          )
        }
      var f = !0,
        pages = e => (0, s.jsx)(Home, { ...e })
    }
  },
  function (e) {
    e.O(0, [9190, 4251, 4816, 9661, 8957, 2568, 9774, 2888, 179], function () {
      return e((e.s = 48312))
    }),
      (_N_E = e.O())
  }
])
//# sourceMappingURL=index-1c69272c35cf4f3b.js.map
