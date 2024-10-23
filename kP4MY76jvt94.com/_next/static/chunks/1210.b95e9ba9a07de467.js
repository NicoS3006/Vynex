'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1210],
  {
    71210: function (e, t, n) {
      n.r(t),
        n.d(t, {
          TargetLinks: function () {
            return TargetLinks
          },
          TargetLinksSizes: function () {
            return l
          }
        })
      var r,
        l,
        c = n(85893),
        i = n(31760),
        o = n(34203),
        a = n(86305),
        u = n(82729),
        m = n(68777),
        p = n(7658)
      function _templateObject () {
        let e = (0, u._)(['\n  background: ', ';\n'])
        return (
          (_templateObject = function () {
            return e
          }),
          e
        )
      }
      function _templateObject1 () {
        let e = (0, u._)(['\n          padding: 144px 0;\n        '])
        return (
          (_templateObject1 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject2 () {
        let e = (0, u._)([
          '\n          padding: 20px 0 80px;\n\n          @media ',
          ' {\n            padding-top: 50px;\n          }\n        '
        ])
        return (
          (_templateObject2 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject3 () {
        let e = (0, u._)([
          '\n  display: grid;\n  grid-template-columns: 1fr;\n  row-gap: 32px;\n  column-gap: 82px;\n\n  ',
          ';\n\n  @media ',
          ' {\n    justify-items: center;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n'
        ])
        return (
          (_templateObject3 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject4 () {
        let e = (0, u._)(['\n  margin-bottom: -24px;\n'])
        return (
          (_templateObject4 = function () {
            return e
          }),
          e
        )
      }
      ;((r = l || (l = {})).NORMAL = 'normal'), (r.LARGE = 'large')
      let s = m.ZP.section.withConfig({ componentId: 'sc-aaa444e7-0' })(
          _templateObject(),
          e => {
            let {
              theme: { ColorBackgroundPage: t }
            } = e
            return t
          }
        ),
        h = (0, m.ZP)(o.s).withConfig({ componentId: 'sc-aaa444e7-1' })(
          _templateObject3(),
          e => {
            let { size: t } = e
            switch (t) {
              case l.LARGE:
                return (0, m.iv)(_templateObject1())
              case l.NORMAL:
              default:
                return (0, m.iv)(_templateObject2(), p.e.md)
            }
          },
          p.e.md
        ),
        d = (0, m.ZP)(o.s).withConfig({ componentId: 'sc-aaa444e7-2' })(
          _templateObject4()
        ),
        TargetLinks = e => {
          let { separatorText: t, links: n, paddingSize: r = l.NORMAL } = e
          return (0, c.jsx)(s, {
            children: (0, c.jsxs)(o.r, {
              children: [
                !!t &&
                  (0, c.jsx)(d, {
                    lg: 10,
                    offsetLg: 2,
                    children: (0, c.jsx)(a.Z, { children: t })
                  }),
                (0, c.jsx)(h, {
                  lg: 10,
                  offsetLg: 2,
                  size: r,
                  children: n.map(e => (0, c.jsx)(i.Y, { ...e }, e.id))
                })
              ]
            })
          })
        }
    },
    31760: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return CardLink
        },
        Q: function () {
          return l
        }
      })
      var r,
        l,
        c = n(85893),
        i = n(41664),
        o = n.n(i),
        a = n(52737),
        u = n(69452),
        m = n(82729),
        p = n(68777),
        s = n(7658),
        h = n(73584)
      function _templateObject () {
        let e = (0, m._)([
          '\n    font-weight: ',
          ';\n    font-size: ',
          'px;\n    line-height: ',
          'em;\n    letter-spacing: ',
          'em;\n\n    @media ',
          ' {\n      font-weight: ',
          ';\n      font-size: ',
          'px;\n      line-height: ',
          'em;\n      letter-spacing: ',
          'em;\n    }\n  '
        ])
        return (
          (_templateObject = function () {
            return e
          }),
          e
        )
      }
      function _templateObject1 () {
        let e = (0, m._)([
          '\n    font-weight: ',
          ';\n    font-size: ',
          'px;\n    line-height: ',
          'em;\n    letter-spacing: ',
          'em;\n  '
        ])
        return (
          (_templateObject1 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject2 () {
        let e = (0, m._)(['\n  ', ';\n  transition: all 0.3s ease;\n'])
        return (
          (_templateObject2 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject3 () {
        let e = (0, m._)(['\n  color: ', ';\n'])
        return (
          (_templateObject3 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject4 () {
        let e = (0, m._)(['\n  color: ', ';\n'])
        return (
          (_templateObject4 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject5 () {
        let e = (0, m._)([
          '\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  padding: 6px;\n  background-color: ',
          ';\n  transition: translate 0.3s ease;\n'
        ])
        return (
          (_templateObject5 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject6 () {
        let e = (0, m._)([
          '\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 4px;\n  width: 100%;\n  outline: 0;\n  border-bottom: 1px solid ',
          ';\n  padding-bottom: 24px;\n  text-decoration: none;\n  transition: border 0.3s ease;\n\n  &:hover {\n    border-color: ',
          ';\n\n    ',
          " {\n      translate: -8px 0;\n    }\n  }\n\n  &:focus-visible {\n    &::before {\n      content: '';\n      position: absolute;\n      top: -12px;\n      left: -12px;\n      display: block;\n      width: calc(100% + 24px);\n      height: calc(100% + 24px);\n      border: 2px solid ",
          ';\n      border-radius: 8px;\n      background-color: transparent;\n    }\n  }\n'
        ])
        return (
          (_templateObject6 = function () {
            return e
          }),
          e
        )
      }
      let d = {
          normal: (0, p.iv)(
            _templateObject(),
            e => {
              let {
                theme: { TypographyHeadlineMediumPhoneFontWeight: t }
              } = e
              return (0, h.O)(t)
            },
            e => {
              let {
                theme: { TypographyHeadlineMediumPhoneFontSize: t }
              } = e
              return t
            },
            e => {
              let {
                theme: { TypographyHeadlineMediumPhoneLineHeight: t }
              } = e
              return (0, h.c)(t)
            },
            e => {
              let {
                theme: { TypographyHeadlineMediumPhoneLetterSpacing: t }
              } = e
              return (0, h.c)(t)
            },
            s.e.md,
            e => {
              let {
                theme: { TypographyHeadlineMediumDesktopFontWeight: t }
              } = e
              return (0, h.O)(t)
            },
            e => {
              let {
                theme: { TypographyHeadlineMediumDesktopFontSize: t }
              } = e
              return t
            },
            e => {
              let {
                theme: { TypographyHeadlineMediumDesktopLineHeight: t }
              } = e
              return (0, h.c)(t)
            },
            e => {
              let {
                theme: { TypographyHeadlineMediumDesktopLetterSpacing: t }
              } = e
              return (0, h.c)(t)
            }
          ),
          small: (0, p.iv)(
            _templateObject1(),
            e => {
              let {
                theme: { TypographyHeadlineParagraphShortFontWeight: t }
              } = e
              return (0, h.O)(t)
            },
            e => {
              let {
                theme: { TypographyHeadlineParagraphShortFontSize: t }
              } = e
              return t
            },
            e => {
              let {
                theme: { TypographyHeadlineParagraphShortLineHeight: t }
              } = e
              return (0, h.c)(t)
            },
            e => {
              let {
                theme: { TypographyHeadlineParagraphShortLetterSpacing: t }
              } = e
              return t
            }
          )
        },
        f = p.ZP.div.withConfig({ componentId: 'sc-40026c9b-0' })(
          _templateObject2(),
          e => {
            let { size: t } = e
            return d[t]
          }
        ),
        b = (0, p.ZP)(f).withConfig({ componentId: 'sc-40026c9b-1' })(
          _templateObject3(),
          e => {
            let {
              theme: { ColorInkDefault: t }
            } = e
            return t
          }
        ),
        _ = (0, p.ZP)(f).withConfig({ componentId: 'sc-40026c9b-2' })(
          _templateObject4(),
          e => {
            let {
              theme: { ColorInkSubdued: t }
            } = e
            return t
          }
        ),
        j = p.ZP.div.withConfig({ componentId: 'sc-40026c9b-3' })(
          _templateObject5(),
          e => {
            let {
              theme: { ColorFillActionAccent: t }
            } = e
            return t
          }
        ),
        O = p.ZP.a.withConfig({ componentId: 'sc-40026c9b-4' })(
          _templateObject6(),
          e => {
            let {
              theme: { ColorSeparatorDefault: t }
            } = e
            return t
          },
          e => {
            let {
              theme: { ColorFillActionAccentPressed: t }
            } = e
            return t
          },
          j,
          e => {
            let {
              theme: { ColorSignalFocus: t }
            } = e
            return t
          }
        )
      ;((r = l || (l = {})).SMALL = 'small'), (r.NORMAL = 'normal')
      let CardLink = e => {
        let { title: t, subtitle: n, url: r, size: i = l.NORMAL } = e,
          m = (0, a.$c)(r)
        return r
          ? (0, c.jsx)(o(), {
              href: r,
              passHref: !0,
              legacyBehavior: !0,
              children: (0, c.jsxs)(O, {
                ...(m && { rel: 'nofollow' }),
                children: [
                  (0, c.jsxs)('div', {
                    children: [
                      !!n && (0, c.jsx)(_, { size: i, children: n }),
                      (0, c.jsx)(b, { size: i, children: t })
                    ]
                  }),
                  (0, c.jsx)(j, {
                    children: (0, c.jsx)(u.JO, {
                      name: u.Qy.ARROW,
                      rotation: u._l.RIGHT
                    })
                  })
                ]
              })
            })
          : null
      }
    },
    86305: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o
        }
      })
      var r = n(82729),
        l = n(68777),
        c = n(73584),
        i = n(783)
      function _templateObject () {
        let e = (0, r._)([
          '\n  --theme-color: ',
          ';\n  border-top: 1px solid var(--theme-color);\n  padding: 24px 0;\n  color: var(--theme-color);\n  font-weight: ',
          ';\n  font-size: ',
          'px;\n  line-height: ',
          'em;\n'
        ])
        return (
          (_templateObject = function () {
            return e
          }),
          e
        )
      }
      let o = l.ZP.div.withConfig({ componentId: 'sc-69791ab7-0' })(
        _templateObject(),
        e => {
          let {
            colorMode: t,
            theme: { ColorInkOnDark: n, ColorInkSubdued: r }
          } = e
          switch (t) {
            case i.h.GRAY:
            case i.h.DARK:
              return n
            case i.h.LIGHT:
            default:
              return r
          }
        },
        e => {
          let {
            theme: { TypographyUiLabelFontWeight: t }
          } = e
          return (0, c.O)(t)
        },
        e => {
          let {
            theme: { TypographyUiLabelFontSize: t }
          } = e
          return t
        },
        e => {
          let {
            theme: { TypographyUiLabelLineHeight: t }
          } = e
          return (0, c.c)(t)
        }
      )
    }
  }
])
//# sourceMappingURL=1210.b95e9ba9a07de467.js.map
