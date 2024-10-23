;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2568],
  {
    1342: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
        })(t, {
          noSSR: function () {
            return noSSR
          },
          default: function () {
            return dynamic
          }
        })
      let r = n(38754),
        i = (n(67294), r._(n(24304)))
      function convertModule (e) {
        return { default: (null == e ? void 0 : e.default) || e }
      }
      function noSSR (e, t) {
        return delete t.webpack, delete t.modules, e(t)
      }
      function dynamic (e, t) {
        let n = i.default,
          r = {
            loading: e => {
              let { error: t, isLoading: n, pastDelay: r } = e
              return null
            }
          }
        e instanceof Promise
          ? (r.loader = () => e)
          : 'function' == typeof e
          ? (r.loader = e)
          : 'object' == typeof e && (r = { ...r, ...e }),
          (r = { ...r, ...t })
        let l = r.loader
        return (r.loadableGenerated &&
          ((r = { ...r, ...r.loadableGenerated }), delete r.loadableGenerated),
        'boolean' != typeof r.ssr || r.ssr)
          ? n({
              ...r,
              loader: () =>
                null != l
                  ? l().then(convertModule)
                  : Promise.resolve(convertModule(() => null))
            })
          : (delete r.webpack, delete r.modules, noSSR(n, r))
      }
      ;('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default))
    },
    30043: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'LoadableContext', {
          enumerable: !0,
          get: function () {
            return l
          }
        })
      let r = n(38754),
        i = r._(n(67294)),
        l = i.default.createContext(null)
    },
    24304: function (e, t, n) {
      'use strict'
      /**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/ Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return c
          }
        })
      let r = n(38754),
        i = r._(n(67294)),
        l = n(30043),
        o = [],
        a = [],
        u = !1
      function load (e) {
        let t = e(),
          n = { loading: !0, loaded: null, error: null }
        return (
          (n.promise = t
            .then(e => ((n.loading = !1), (n.loaded = e), e))
            .catch(e => {
              throw ((n.loading = !1), (n.error = e), e)
            })),
          n
        )
      }
      let LoadableSubscription = class LoadableSubscription {
        promise () {
          return this._res.promise
        }
        retry () {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 })
          let { _res: e, _opts: t } = this
          e.loading &&
            ('number' == typeof t.delay &&
              (0 === t.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 })
                  }, t.delay))),
            'number' == typeof t.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 })
              }, t.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts()
              })
              .catch(e => {
                this._update({}), this._clearTimeouts()
              }),
            this._update({})
        }
        _update (e) {
          ;(this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...e
          }),
            this._callbacks.forEach(e => e())
        }
        _clearTimeouts () {
          clearTimeout(this._delay), clearTimeout(this._timeout)
        }
        getCurrentValue () {
          return this._state
        }
        subscribe (e) {
          return (
            this._callbacks.add(e),
            () => {
              this._callbacks.delete(e)
            }
          )
        }
        constructor (e, t) {
          ;(this._loadFn = e),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry()
        }
      }
      function Loadable (e) {
        return (function (e, t) {
          let n = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null
              },
              t
            ),
            r = null
          function init () {
            if (!r) {
              let t = new LoadableSubscription(e, n)
              r = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t)
              }
            }
            return r.promise()
          }
          if (!u) {
            let e = n.webpack ? n.webpack() : n.modules
            e &&
              a.push(t => {
                for (let n of e) if (t.includes(n)) return init()
              })
          }
          function LoadableComponent (e, t) {
            !(function () {
              init()
              let e = i.default.useContext(l.LoadableContext)
              e &&
                Array.isArray(n.modules) &&
                n.modules.forEach(t => {
                  e(t)
                })
            })()
            let o = i.default.useSyncExternalStore(
              r.subscribe,
              r.getCurrentValue,
              r.getCurrentValue
            )
            return (
              i.default.useImperativeHandle(t, () => ({ retry: r.retry }), []),
              i.default.useMemo(() => {
                var t
                return o.loading || o.error
                  ? i.default.createElement(n.loading, {
                      isLoading: o.loading,
                      pastDelay: o.pastDelay,
                      timedOut: o.timedOut,
                      error: o.error,
                      retry: r.retry
                    })
                  : o.loaded
                  ? i.default.createElement(
                      (t = o.loaded) && t.default ? t.default : t,
                      e
                    )
                  : null
              }, [e, o])
            )
          }
          return (
            (LoadableComponent.preload = () => init()),
            (LoadableComponent.displayName = 'LoadableComponent'),
            i.default.forwardRef(LoadableComponent)
          )
        })(load, e)
      }
      function flushInitializers (e, t) {
        let n = []
        for (; e.length; ) {
          let r = e.pop()
          n.push(r(t))
        }
        return Promise.all(n).then(() => {
          if (e.length) return flushInitializers(e, t)
        })
      }
      ;(Loadable.preloadAll = () =>
        new Promise((e, t) => {
          flushInitializers(o).then(e, t)
        })),
        (Loadable.preloadReady = e => (
          void 0 === e && (e = []),
          new Promise(t => {
            let res = () => ((u = !0), t())
            flushInitializers(a, e).then(res, res)
          })
        )),
        (window.__NEXT_PRELOADREADY = Loadable.preloadReady)
      let c = Loadable
    },
    33546: function (e, t, n) {
      'use strict'
      n.d(t, {
        CW: function () {
          return b
        },
        Co: function () {
          return m
        },
        JN: function () {
          return h
        },
        LR: function () {
          return _
        },
        OU: function () {
          return p
        },
        dI: function () {
          return f
        }
      })
      var r = n(82729),
        i = n(68777),
        l = n(4251),
        o = n(7658),
        a = n(34203),
        u = n(73584),
        c = n(52586)
      function _templateObject () {
        let e = (0, r._)([
          '\n  0% {\n    translate: 0 0;\n  }\n\n  80%,\n  100%  {\n    translate: 0 calc((var(--hero-title-font-size) * var(--hero-title-line-height)) * -1px);\n  }\n'
        ])
        return (
          (_templateObject = function () {
            return e
          }),
          e
        )
      }
      function _templateObject1 () {
        let e = (0, r._)([
          '\n  0% {\n    scale: 1.4;\n  }\n\n  100% {\n    scale: 1;\n  }\n'
        ])
        return (
          (_templateObject1 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject2 () {
        let e = (0, r._)([
          '\n    position: sticky;\n    top: 0;\n    z-index: -1;\n  '
        ])
        return (
          (_templateObject2 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject3 () {
        let e = (0, r._)([
          '\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 510px;\n  max-height: 100vh;\n\n  ',
          '\n\n  @media (orientation: landscape) {\n    aspect-ratio: unset;\n    height: 100vh;\n  }\n\n  @media ',
          ' {\n    height: 810px;\n  }\n\n  @media ',
          ' {\n    height: 1200px;\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(10.96deg, rgba(0, 0, 0, 0.55) 11.15%, rgba(0, 0, 0, 0) 38.82%, rgba(0, 0, 0, 0.16) 66.08%);\n  }\n\n  video {\n    object-fit: cover;\n    object-position: center;\n  }\n\n  img {\n    scale: 1.4;\n    animation: ',
          ' 8s forwards ease-out 0.5s;\n  }\n'
        ])
        return (
          (_templateObject3 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject4 () {
        let e = (0, r._)(['\n    place-items: center;\n  '])
        return (
          (_templateObject4 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject5 () {
        let e = (0, r._)([
          '\n  position: relative;\n  z-index: 1;\n  align-items: end;\n  height: 100%;\n  padding: 56px 0;\n\n  ',
          '\n\n  @media ',
          ' {\n    padding: 80px 0;\n  }\n'
        ])
        return (
          (_templateObject5 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject6 () {
        let e = (0, r._)([
          '\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  @media ',
          ' {\n    gap: 16px;\n  }\n'
        ])
        return (
          (_templateObject6 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject7 () {
        let e = (0, r._)([
          '\n  margin: 0;\n  color: ',
          ';\n  font-weight: ',
          ';\n  font-size: ',
          'px;\n  line-height: ',
          ';\n\n  @media ',
          ' {\n    font-weight: ',
          ';\n    font-size: ',
          'px;\n    line-height: ',
          ';\n  }\n'
        ])
        return (
          (_templateObject7 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject8 () {
        let e = (0, r._)([
          '\n          --hero-title-font-size: ',
          ';\n          --hero-title-line-height: ',
          ';\n          font-weight: ',
          ';\n          letter-spacing: ',
          'em;\n\n          @media ',
          ' {\n            --hero-title-font-size: ',
          ';\n            --hero-title-line-height: ',
          ';\n            font-weight: ',
          ';\n            letter-spacing: ',
          'em;\n          }\n        '
        ])
        return (
          (_templateObject8 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject9 () {
        let e = (0, r._)([
          '\n          --hero-title-font-size: ',
          ';\n          --hero-title-line-height: ',
          ';\n          font-weight: ',
          ';\n          letter-spacing: ',
          'em;\n\n          @media ',
          ' {\n            --hero-title-font-size: ',
          ';\n            --hero-title-line-height: ',
          ';\n            font-weight: ',
          ';\n            letter-spacing: ',
          'em;\n          }\n        '
        ])
        return (
          (_templateObject9 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject10 () {
        let e = (0, r._)([''])
        return (
          (_templateObject10 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject11 () {
        let e = (0, r._)([
          '\n  margin: 0;\n  padding: 0;\n  color: ',
          ';\n  font-size: calc(var(--hero-title-font-size) * 1px);\n  line-height: calc(var(--hero-title-line-height) * 1em);\n\n  ',
          '\n'
        ])
        return (
          (_templateObject11 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject12 () {
        let e = (0, r._)([
          '\n    translate: 0 0;\n\n    span {\n      animation: ',
          ' 3s 2s forwards ease-in-out;\n\n      &:first-child {\n        display: unset;\n      }\n    }\n  '
        ])
        return (
          (_templateObject12 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject13 () {
        let e = (0, r._)([
          '\n  overflow: hidden;\n  display: inline-flex;\n  flex-direction: column;\n  height: calc((var(--hero-title-font-size)) * 1px);\n\n  span:first-child {\n    display: none;\n  }\n\n  ',
          '\n'
        ])
        return (
          (_templateObject13 = function () {
            return e
          }),
          e
        )
      }
      let s = (0, i.F4)(_templateObject()),
        d = (0, i.F4)(_templateObject1()),
        f = i.ZP.section.withConfig({ componentId: 'sc-521181ee-0' })(
          _templateObject3(),
          e => {
            let { isSticky: t } = e
            return t && (0, i.iv)(_templateObject2())
          },
          o.e.md,
          o.e.xl,
          d
        ),
        p = (0, i.ZP)(a.r).withConfig({ componentId: 'sc-521181ee-1' })(
          _templateObject5(),
          e => {
            let { isCentered: t } = e
            return t && (0, i.iv)(_templateObject4())
          },
          o.e.md
        ),
        h = (0, i.ZP)(l.m.div).withConfig({ componentId: 'sc-521181ee-2' })(
          _templateObject6(),
          o.e.md
        ),
        m = i.ZP.p.withConfig({ componentId: 'sc-521181ee-3' })(
          _templateObject7(),
          e => {
            let {
              theme: { ColorInkAccentOnDark: t }
            } = e
            return t
          },
          e => {
            let {
              theme: { TypographyHeadlineKickerPhoneFontWeight: t }
            } = e
            return (0, u.O)(t)
          },
          e => {
            let {
              theme: { TypographyHeadlineKickerPhoneFontSize: t }
            } = e
            return t
          },
          e => {
            let {
              theme: { TypographyHeadlineKickerPhoneLineHeight: t }
            } = e
            return t
          },
          o.e.md,
          e => {
            let {
              theme: { TypographyHeadlineKickerDesktopFontWeight: t }
            } = e
            return (0, u.O)(t)
          },
          e => {
            let {
              theme: { TypographyHeadlineKickerDesktopFontSize: t }
            } = e
            return t
          },
          e => {
            let {
              theme: { TypographyHeadlineKickerDesktopLineHeight: t }
            } = e
            return t
          }
        ),
        _ = (0, i.ZP)(l.m.h2).withConfig({ componentId: 'sc-521181ee-4' })(
          _templateObject11(),
          e => {
            let {
              theme: { ColorInkAccentOnDark: t }
            } = e
            return t
          },
          e => {
            let {
              variant: t,
              theme: {
                TypographyHeadlineTitlePhoneFontWeight: n,
                TypographyHeadlineTitlePhoneFontSize: r,
                TypographyHeadlineTitlePhoneLineHeight: l,
                TypographyHeadlineTitlePhoneLetterSpacing: a,
                TypographyHeadlineChapterPhoneFontWeight: s,
                TypographyHeadlineChapterPhoneFontSize: d,
                TypographyHeadlineChapterPhoneLineHeight: f,
                TypographyHeadlineChapterPhoneLetterSpacing: p,
                TypographyHeadlineTitleDesktopFontWeight: h,
                TypographyHeadlineTitleDesktopFontSize: m,
                TypographyHeadlineTitleDesktopLineHeight: _,
                TypographyHeadlineTitleDesktopLetterSpacing: b,
                TypographyHeadlineChapterDesktopFontWeight: g,
                TypographyHeadlineChapterDesktopFontSize: j,
                TypographyHeadlineChapterDesktopLineHeight: O,
                TypographyHeadlineChapterDesktopLetterSpacing: y
              }
            } = e
            switch (t) {
              case c.h.HOME:
                return (0, i.iv)(
                  _templateObject8(),
                  r,
                  (0, u.c)(l),
                  (0, u.O)(n),
                  (0, u.c)(a),
                  o.e.md,
                  m,
                  (0, u.c)(_),
                  (0, u.O)(h),
                  (0, u.c)(b)
                )
              case c.h.TARGET_PAGE:
                return (0, i.iv)(
                  _templateObject9(),
                  d,
                  (0, u.c)(f),
                  (0, u.O)(s),
                  (0, u.c)(p),
                  o.e.md,
                  j,
                  (0, u.c)(O),
                  (0, u.O)(g),
                  (0, u.c)(y)
                )
              default:
                return (0, i.iv)(_templateObject10())
            }
          }
        ),
        b = i.ZP.span.withConfig({ componentId: 'sc-521181ee-5' })(
          _templateObject13(),
          e => {
            let { withAnimation: t } = e
            return t && (0, i.iv)(_templateObject12(), s)
          }
        )
    },
    52586: function (e, t, n) {
      'use strict'
      var r, i
      n.d(t, {
        h: function () {
          return r
        }
      }),
        ((i = r || (r = {})).HOME = 'home'),
        (i.TARGET_PAGE = 'target-page')
    },
    32971: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          Hero: function () {
            return Hero
          },
          HeroVariant: function () {
            return s.h
          }
        })
      var r = n(85893),
        i = n(45204),
        l = n(12421),
        o = n(34203),
        a = n(22254),
        u = n(14362),
        c = n(33546)
      let Hero = e => {
        let {
            variant: t,
            kicker: n,
            title: s,
            titleEndWords: d,
            shouldEndWordsAnimate: f,
            backgroundImage: p,
            backgroundVideo: h,
            isSticky: m
          } = e,
          { scrollYProgress: _ } = (0, i.v)(),
          b = (0, l.H)(_, [0, 1], [0, -600])
        return (0, r.jsxs)(c.dI, {
          isSticky: m,
          children: [
            !!(null == p ? void 0 : p.data) &&
              (0, r.jsx)(u.Ee, {
                ...p,
                highPriority: !0,
                lazyLoading: !1,
                fill: !0
              }),
            !!h &&
              (0, r.jsx)(a.n, {
                videos: h,
                autoPlay: !0,
                loop: !0,
                playsInline: !0,
                muted: !0,
                disablePictureInPicture: !0,
                disableRemotePlayback: !0
              }),
            (0, r.jsx)(c.OU, {
              children: (0, r.jsx)(o.s, {
                md: 10,
                offsetMd: 2,
                children: (0, r.jsxs)(c.JN, {
                  style: { y: b },
                  children: [
                    !!n && (0, r.jsx)(c.Co, { children: n }),
                    !!s &&
                      (0, r.jsxs)(c.LR, {
                        variant: t,
                        children: [
                          s,
                          !!d &&
                            (0, r.jsxs)(r.Fragment, {
                              children: [
                                ' ',
                                (0, r.jsx)(c.CW, {
                                  withAnimation: f,
                                  children: d.map(e => {
                                    let { word: t, id: n } = e
                                    return (0, r.jsx)(
                                      'span',
                                      { children: t },
                                      'hero-title-end-word-'.concat(n)
                                    )
                                  })
                                })
                              ]
                            })
                        ]
                      })
                  ]
                })
              })
            })
          ]
        })
      }
      var s = n(52586)
    },
    5152: function (e, t, n) {
      e.exports = n(1342)
    }
  }
])
//# sourceMappingURL=2568-16537650d4658853.js.map
