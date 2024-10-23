'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3009],
  {
    16567: function (e, t, n) {
      n.d(t, {
        I: function () {
          return PaginationTimedTextual
        }
      })
      var i = n(85893),
        r = n(77294),
        o = n(82729),
        l = n(68777),
        s = n(7658),
        c = n(73584)
      function _templateObject () {
        let e = (0, o._)([
          '\n  display: grid;\n  grid-template-columns: 1fr;\n  row-gap: 16px;\n  column-gap: 32px;\n\n  @media ',
          ' {\n    justify-items: center;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n'
        ])
        return (
          (_templateObject = function () {
            return e
          }),
          e
        )
      }
      function _templateObject1 () {
        let e = (0, o._)([
          '\n    ',
          ' {\n      color: ',
          ';\n    }\n\n    &:hover {\n      svg {\n        background-color: ',
          ';\n      }\n    }\n\n    &:active {\n      svg {\n        background-color: ',
          ';\n      }\n    }\n  '
        ])
        return (
          (_templateObject1 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject2 () {
        let e = (0, o._)([
          '\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  outline: 0;\n  border: 0;\n  background: transparent;\n  font-family: inherit;\n  text-align: left;\n  cursor: pointer;\n\n  svg {\n    flex-shrink: 0;\n    border-radius: 50%;\n    transition: background 0.3s ease;\n  }\n\n  ',
          '\n\n  &:focus-visible {\n    &::before {\n      content: "";\n      position: absolute;\n      top: -12px;\n      left: -12px;\n      width: calc(100% + 24px);\n      height: calc(100% + 24px);\n      border: 2px solid ',
          ';\n      border-radius: 8px;\n    }\n  }\n'
        ])
        return (
          (_templateObject2 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject3 () {
        let e = (0, o._)([
          '\n  color: ',
          ';\n  font-weight: ',
          ';\n  font-size: ',
          'px;\n  line-height: ',
          'em;\n  transition: color 0.5s linear;\n'
        ])
        return (
          (_templateObject3 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject4 () {
        let e = (0, o._)([
          '\n  color: ',
          ';\n  font-size: ',
          'px;\n  line-height: ',
          'em;\n'
        ])
        return (
          (_templateObject4 = function () {
            return e
          }),
          e
        )
      }
      let u = l.ZP.div.withConfig({ componentId: 'sc-f3d430b5-0' })(
          _templateObject(),
          s.e.md
        ),
        a = l.ZP.button.withConfig({ componentId: 'sc-f3d430b5-1' })(
          _templateObject2(),
          e => {
            let {
              isActive: t,
              theme: {
                ColorInkSubdued: n,
                ColorFillActionQuietHover: i,
                ColorFillActionQuietPressed: r
              }
            } = e
            return !t && (0, l.iv)(_templateObject1(), d, n, i, r)
          },
          e => {
            let {
              theme: { ColorSignalFocus: t }
            } = e
            return t
          }
        ),
        d = l.ZP.div.withConfig({ componentId: 'sc-f3d430b5-2' })(
          _templateObject3(),
          e => {
            let {
              theme: { ColorInkDefault: t }
            } = e
            return t
          },
          e => {
            let {
              theme: { TypographyHeadlineParagraphBodyFontWeight: t }
            } = e
            return (0, c.O)(t)
          },
          e => {
            let {
              theme: { TypographyHeadlineParagraphBodyFontSize: t }
            } = e
            return t
          },
          e => {
            let {
              theme: { TypographyHeadlineParagraphBodyLineHeight: t }
            } = e
            return (0, c.c)(t)
          }
        ),
        f = l.ZP.div.withConfig({ componentId: 'sc-f3d430b5-3' })(
          _templateObject4(),
          e => {
            let {
              theme: { ColorInkSubdued: t }
            } = e
            return t
          },
          e => {
            let {
              theme: { TypographyCopyCaptionFontSize: t }
            } = e
            return t
          },
          e => {
            let {
              theme: { TypographyCopyCaptionLineHeight: t }
            } = e
            return (0, c.c)(t)
          }
        ),
        PaginationTimedTextual = e => {
          let {
            items: t,
            changeSlide: n,
            activeSlide: r,
            isTimerRunning: o
          } = e
          return (0, i.jsx)(u, {
            children: t.map((e, t) => {
              let { title: l, caption: s, id: c } = e
              return (0, i.jsx)(
                PaginationTimedTextualItem,
                {
                  title: l,
                  caption: s,
                  changeSlide: n,
                  isActive: r === t,
                  slideIndex: t,
                  isTimerRunning: o
                },
                c
              )
            })
          })
        },
        PaginationTimedTextualItem = e => {
          let {
            title: t,
            caption: n,
            changeSlide: o,
            isActive: l,
            slideIndex: s,
            isTimerRunning: c
          } = e
          return (0, i.jsxs)(a, {
            onClick: () => o(s),
            isActive: l,
            children: [
              (0, i.jsx)(r._3, {
                size: r.Mk.MEDIUM,
                variant: r.bO.DEFAULT,
                isActive: l,
                isTimerRunning: c && l
              }),
              (0, i.jsxs)('div', {
                children: [
                  (0, i.jsx)(d, { children: t }),
                  (0, i.jsx)(f, { children: n })
                ]
              })
            ]
          })
        }
    },
    97650: function (e, t, n) {
      let i
      n.d(t, {
        YD: function () {
          return useInView
        }
      })
      var r = n(67294)
      let o = new Map(),
        l = new WeakMap(),
        s = 0
      function useInView ({
        threshold: e,
        delay: t,
        trackVisibility: n,
        rootMargin: c,
        root: u,
        triggerOnce: a,
        skip: d,
        initialInView: f,
        fallbackInView: m,
        onChange: p
      } = {}) {
        var h
        let [g, b] = r.useState(null),
          v = r.useRef(),
          [x, _] = r.useState({ inView: !!f, entry: void 0 })
        ;(v.current = p),
          r.useEffect(() => {
            let r
            if (!d && g)
              return (
                (r = (function (e, t, n = {}, r = i) {
                  if (void 0 === window.IntersectionObserver && void 0 !== r) {
                    let i = e.getBoundingClientRect()
                    return (
                      t(r, {
                        isIntersecting: r,
                        target: e,
                        intersectionRatio:
                          'number' == typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: i,
                        intersectionRect: i,
                        rootBounds: i
                      }),
                      () => {}
                    )
                  }
                  let {
                      id: c,
                      observer: u,
                      elements: a
                    } = (function (e) {
                      let t = Object.keys(e)
                          .sort()
                          .filter(t => void 0 !== e[t])
                          .map(t => {
                            var n
                            return `${t}_${
                              'root' === t
                                ? (n = e.root)
                                  ? (l.has(n) ||
                                      ((s += 1), l.set(n, s.toString())),
                                    l.get(n))
                                  : '0'
                                : e[t]
                            }`
                          })
                          .toString(),
                        n = o.get(t)
                      if (!n) {
                        let i
                        let r = new Map(),
                          l = new IntersectionObserver(t => {
                            t.forEach(t => {
                              var n
                              let o =
                                t.isIntersecting &&
                                i.some(e => t.intersectionRatio >= e)
                              e.trackVisibility &&
                                void 0 === t.isVisible &&
                                (t.isVisible = o),
                                null == (n = r.get(t.target)) ||
                                  n.forEach(e => {
                                    e(o, t)
                                  })
                            })
                          }, e)
                        ;(i =
                          l.thresholds ||
                          (Array.isArray(e.threshold)
                            ? e.threshold
                            : [e.threshold || 0])),
                          (n = { id: t, observer: l, elements: r }),
                          o.set(t, n)
                      }
                      return n
                    })(n),
                    d = a.get(e) || []
                  return (
                    a.has(e) || a.set(e, d),
                    d.push(t),
                    u.observe(e),
                    function () {
                      d.splice(d.indexOf(t), 1),
                        0 === d.length && (a.delete(e), u.unobserve(e)),
                        0 === a.size && (u.disconnect(), o.delete(c))
                    }
                  )
                })(
                  g,
                  (e, t) => {
                    _({ inView: e, entry: t }),
                      v.current && v.current(e, t),
                      t.isIntersecting && a && r && (r(), (r = void 0))
                  },
                  {
                    root: u,
                    rootMargin: c,
                    threshold: e,
                    trackVisibility: n,
                    delay: t
                  },
                  m
                )),
                () => {
                  r && r()
                }
              )
          }, [Array.isArray(e) ? e.toString() : e, g, u, c, a, d, n, m, t])
        let j = null == (h = x.entry) ? void 0 : h.target
        r.useEffect(() => {
          g || !j || a || d || _({ inView: !!f, entry: void 0 })
        }, [g, j, a, d, f])
        let w = [b, x.inView, x.entry]
        return (w.ref = w[0]), (w.inView = w[1]), (w.entry = w[2]), w
      }
    }
  }
])
//# sourceMappingURL=3009.83a40d1a7beb89e5.js.map
