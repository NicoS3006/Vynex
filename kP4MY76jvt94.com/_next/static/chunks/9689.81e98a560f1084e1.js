'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9689],
  {
    39689: function (e, t, n) {
      n.r(t),
        n.d(t, {
          HomeWeAre: function () {
            return HomeWeAre
          }
        })
      var r = n(85893),
        i = n(34203),
        l = n(82729),
        c = n(68777),
        o = n(4251),
        m = n(7658),
        u = n(73584)
      function _templateObject () {
        let e = (0, l._)([
          '\n  padding: 80px 0;\n  background-color: ',
          ';\n\n  @media ',
          ' {\n    padding: 144px 0;\n  }\n'
        ])
        return (
          (_templateObject = function () {
            return e
          }),
          e
        )
      }
      function _templateObject1 () {
        let e = (0, l._)([
          '\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n'
        ])
        return (
          (_templateObject1 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject2 () {
        let e = (0, l._)([
          '\n  margin: 0;\n  color: ',
          ';\n  font-weight: 500;\n  line-height: 1.4em;\n\n  @media ',
          ' {\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 1.35em;\n  }\n'
        ])
        return (
          (_templateObject2 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject3 () {
        let e = (0, l._)([
          '\n  margin: 0;\n  color: ',
          ';\n  font-weight: ',
          ';\n  font-size: ',
          'px;\n  line-height: ',
          'em;\n  letter-spacing: ',
          'em;\n\n  @media ',
          ' {\n    font-weight: ',
          ';\n    font-size: ',
          'px;\n    line-height: ',
          'em;\n    letter-spacing: ',
          'em;\n  }\n'
        ])
        return (
          (_templateObject3 = function () {
            return e
          }),
          e
        )
      }
      let a = c.ZP.section.withConfig({ componentId: 'sc-67e96366-0' })(
          _templateObject(),
          e => {
            let {
              theme: { ColorBrandYellow: t }
            } = e
            return t
          },
          m.e.md
        ),
        h = (0, c.ZP)(o.m.div).withConfig({ componentId: 'sc-67e96366-1' })(
          _templateObject1()
        ),
        p = c.ZP.p.withConfig({ componentId: 'sc-67e96366-2' })(
          _templateObject2(),
          e => {
            let {
              theme: { ColorBrandDarkGrey: t }
            } = e
            return t
          },
          m.e.md
        ),
        d = c.ZP.p.withConfig({ componentId: 'sc-67e96366-3' })(
          _templateObject3(),
          e => {
            let {
              theme: { ColorBrandBlack: t }
            } = e
            return t
          },
          e => {
            let {
              theme: { TypographyCopyBreakoutPhoneFontWeight: t }
            } = e
            return (0, u.O)(t)
          },
          e => {
            let {
              theme: { TypographyCopyBreakoutPhoneFontSize: t }
            } = e
            return t
          },
          e => {
            let {
              theme: { TypographyCopyBreakoutPhoneLineHeight: t }
            } = e
            return (0, u.c)(t)
          },
          e => {
            let {
              theme: { TypographyCopyBreakoutPhoneLetterSpacing: t }
            } = e
            return (0, u.c)(t)
          },
          m.e.md,
          e => {
            let {
              theme: { TypographyCopyBreakoutDesktopFontWeight: t }
            } = e
            return (0, u.O)(t)
          },
          e => {
            let {
              theme: { TypographyCopyBreakoutDesktopFontSize: t }
            } = e
            return t
          },
          e => {
            let {
              theme: { TypographyCopyBreakoutDesktopLineHeight: t }
            } = e
            return (0, u.c)(t)
          },
          e => {
            let {
              theme: { TypographyCopyBreakoutDesktopLetterSpacing: t }
            } = e
            return (0, u.c)(t)
          }
        ),
        HomeWeAre = e => {
          let { kicker: t, description: n } = e
          return t && n
            ? (0, r.jsx)(a, {
                role: 'region',
                'aria-labelledby': 'we-are-kicker',
                children: (0, r.jsx)(i.r, {
                  children: (0, r.jsx)(i.s, {
                    md: 10,
                    offsetMd: 2,
                    children: (0, r.jsxs)(h, {
                      initial: { opacity: 0, y: 40 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 1 },
                      viewport: { once: !0 },
                      children: [
                        (0, r.jsx)(p, { id: 'we-are-kicker', children: t }),
                        (0, r.jsx)(d, { children: n })
                      ]
                    })
                  })
                })
              })
            : null
        }
    }
  }
])
//# sourceMappingURL=9689.81e98a560f1084e1.js.map
