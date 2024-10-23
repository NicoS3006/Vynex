'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4251],
  {
    25364: function (e, t, n) {
      n.d(t, {
        p: function () {
          return a
        }
      })
      var r = n(67294)
      let a = (0, r.createContext)({})
    },
    16014: function (e, t, n) {
      n.d(t, {
        _: function () {
          return a
        }
      })
      var r = n(67294)
      let a = (0, r.createContext)({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: 'never'
      })
    },
    240: function (e, t, n) {
      n.d(t, {
        O: function () {
          return a
        }
      })
      var r = n(67294)
      let a = (0, r.createContext)(null)
    },
    4251: function (e, t, n) {
      n.d(t, {
        m: function () {
          return U
        }
      })
      var r,
        a = n(67294),
        o = n(16014)
      let i = (0, a.createContext)({})
      var u = n(240),
        l = n(58868),
        s = n(70398),
        c = n(51804),
        d = n(97732),
        f = n(7504)
      function variantLabelsAsDependency (e) {
        return Array.isArray(e) ? e.join(' ') : e
      }
      var m = n(81879),
        p = n(11741),
        v = n(96681)
      let y = { hasEverUpdated: !1 },
        g = 1
      var h = n(25364)
      let S = (0, a.createContext)({}),
        C = Symbol.for('motionComponentSymbol')
      var x = n(62627),
        E = n(96728),
        V = n(40406),
        b = n(38057)
      let createHtmlRenderState = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
      })
      function copyRawValuesOnly (e, t, n) {
        for (let r in t) (0, V.i)(t[r]) || (0, E.j)(r, n) || (e[r] = t[r])
      }
      function useHTMLProps (e, t, n) {
        let r = {},
          o = (function (e, t, n) {
            let r = e.style || {},
              o = {}
            return (
              copyRawValuesOnly(o, r, e),
              Object.assign(
                o,
                (function ({ transformTemplate: e }, t, n) {
                  return (0, a.useMemo)(() => {
                    let r = createHtmlRenderState()
                    return (
                      (0, b.r)(r, t, { enableHardwareAcceleration: !n }, e),
                      Object.assign({}, r.vars, r.style)
                    )
                  }, [t])
                })(e, t, n)
              ),
              e.transformValues ? e.transformValues(o) : o
            )
          })(e, t, n)
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((r.draggable = !1),
            (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
            (o.touchAction =
              !0 === e.drag ? 'none' : `pan-${'x' === e.drag ? 'y' : 'x'}`)),
          void 0 === e.tabIndex &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (r.tabIndex = 0),
          (r.style = o),
          r
        )
      }
      let w = new Set([
        'animate',
        'exit',
        'variants',
        'initial',
        'style',
        'values',
        'variants',
        'transition',
        'transformTemplate',
        'transformValues',
        'custom',
        'inherit',
        'onLayoutAnimationStart',
        'onLayoutAnimationComplete',
        'onLayoutMeasure',
        'onBeforeLayoutMeasure',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        '_dragX',
        '_dragY',
        'onHoverStart',
        'onHoverEnd',
        'onViewportEnter',
        'onViewportLeave',
        'ignoreStrict',
        'viewport'
      ])
      function isValidMotionProp (e) {
        return (
          e.startsWith('while') ||
          (e.startsWith('drag') && 'draggable' !== e) ||
          e.startsWith('layout') ||
          e.startsWith('onTap') ||
          e.startsWith('onPan') ||
          w.has(e)
        )
      }
      let shouldForward = e => !isValidMotionProp(e)
      try {
        ;(r = require('@emotion/is-prop-valid').default) &&
          (shouldForward = e =>
            e.startsWith('on') ? !isValidMotionProp(e) : r(e))
      } catch (e) {}
      var M = n(85415)
      let createSvgRenderState = () => ({
        ...createHtmlRenderState(),
        attrs: {}
      })
      var A = n(79854)
      function useSVGProps (e, t, n, r) {
        let o = (0, a.useMemo)(() => {
          let n = createSvgRenderState()
          return (
            (0, M.i)(
              n,
              t,
              { enableHardwareAcceleration: !1 },
              (0, A.a)(r),
              e.transformTemplate
            ),
            { ...n.attrs, style: { ...n.style } }
          )
        }, [t])
        if (e.style) {
          let t = {}
          copyRawValuesOnly(t, e.style, e), (o.style = { ...t, ...o.style })
        }
        return o
      }
      var P = n(68504),
        R = n(16832),
        L = n(2445),
        k = n(79432),
        H = n(8715)
      let makeUseVisualState = e => (t, n) => {
          let r = (0, a.useContext)(i),
            o = (0, a.useContext)(u.O),
            make = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: e,
                  createRenderState: t,
                  onMount: n
                },
                r,
                a,
                o
              ) {
                let i = {
                  latestValues: (function (e, t, n, r) {
                    let a = {},
                      o = r(e, {})
                    for (let e in o)
                      a[e] = (function (e) {
                        let t = (0, V.i)(e) ? e.get() : e
                        return (0, H.p)(t) ? t.toValue() : t
                      })(o[e])
                    let { initial: i, animate: u } = e,
                      l = (0, f.G)(e),
                      s = (0, f.M)(e)
                    t &&
                      s &&
                      !l &&
                      !1 !== e.inherit &&
                      (void 0 === i && (i = t.initial),
                      void 0 === u && (u = t.animate))
                    let c = !!n && !1 === n.initial
                    c = c || !1 === i
                    let d = c ? u : i
                    if (d && 'boolean' != typeof d && !(0, L.H)(d)) {
                      let t = Array.isArray(d) ? d : [d]
                      t.forEach(t => {
                        let n = (0, k.o)(e, t)
                        if (!n) return
                        let { transitionEnd: r, transition: o, ...i } = n
                        for (let e in i) {
                          let t = i[e]
                          if (Array.isArray(t)) {
                            let e = c ? t.length - 1 : 0
                            t = t[e]
                          }
                          null !== t && (a[e] = t)
                        }
                        for (let e in r) a[e] = r[e]
                      })
                    }
                    return a
                  })(r, a, o, e),
                  renderState: t()
                }
                return n && (i.mount = e => n(r, e, i)), i
              })(e, t, r, o)
          return n ? make() : (0, v.h)(make)
        },
        T = {
          useVisualState: makeUseVisualState({
            scrapeMotionValuesFromProps: R.U,
            createRenderState: createSvgRenderState,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
              try {
                n.dimensions =
                  'function' == typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect()
              } catch (e) {
                n.dimensions = { x: 0, y: 0, width: 0, height: 0 }
              }
              ;(0, M.i)(
                n,
                r,
                { enableHardwareAcceleration: !1 },
                (0, A.a)(t.tagName),
                e.transformTemplate
              ),
                (0, P.K)(t, n)
            }
          })
        }
      var D = n(50189)
      let O = {
          useVisualState: makeUseVisualState({
            scrapeMotionValuesFromProps: D.U,
            createRenderState: createHtmlRenderState
          })
        },
        U = (function (e) {
          function custom (t, n = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: t,
              useRender: n,
              useVisualState: r,
              Component: x
            }) {
              e && (0, m.K)(e)
              let E = (0, a.forwardRef)(function (m, C) {
                var E
                let V
                let b = {
                    ...(0, a.useContext)(o._),
                    ...m,
                    layoutId: (function ({ layoutId: e }) {
                      let t = (0, a.useContext)(h.p).id
                      return t && void 0 !== e ? t + '-' + e : e
                    })(m)
                  },
                  { isStatic: w } = b,
                  M = (function (e) {
                    let { initial: t, animate: n } = (function (e, t) {
                      if ((0, f.G)(e)) {
                        let { initial: t, animate: n } = e
                        return {
                          initial: !1 === t || (0, d.$)(t) ? t : void 0,
                          animate: (0, d.$)(n) ? n : void 0
                        }
                      }
                      return !1 !== e.inherit ? t : {}
                    })(e, (0, a.useContext)(i))
                    return (0, a.useMemo)(
                      () => ({ initial: t, animate: n }),
                      [
                        variantLabelsAsDependency(t),
                        variantLabelsAsDependency(n)
                      ]
                    )
                  })(m),
                  A = w
                    ? void 0
                    : (0, v.h)(() => {
                        if (y.hasEverUpdated) return g++
                      }),
                  P = r(m, w)
                if (!w && p.j) {
                  M.visualElement = (function (e, t, n, r) {
                    let { visualElement: c } = (0, a.useContext)(i),
                      d = (0, a.useContext)(s.u),
                      f = (0, a.useContext)(u.O),
                      m = (0, a.useContext)(o._).reducedMotion,
                      p = (0, a.useRef)()
                    ;(r = r || d.renderer),
                      !p.current &&
                        r &&
                        (p.current = r(e, {
                          visualState: t,
                          parent: c,
                          props: n,
                          presenceContext: f,
                          blockInitialAnimation: !!f && !1 === f.initial,
                          reducedMotionConfig: m
                        }))
                    let v = p.current
                    ;(0, a.useInsertionEffect)(() => {
                      v && v.update(n, f)
                    }),
                      (0, l.L)(() => {
                        v && v.render()
                      }),
                      (0, a.useEffect)(() => {
                        v && v.updateFeatures()
                      })
                    let y = window.HandoffAppearAnimations ? l.L : a.useEffect
                    return (
                      y(() => {
                        v &&
                          v.animationState &&
                          v.animationState.animateChanges()
                      }),
                      v
                    )
                  })(x, P, b, t)
                  let n = (0, a.useContext)(S),
                    r = (0, a.useContext)(s.u).strict
                  M.visualElement &&
                    (V = M.visualElement.loadFeatures(b, r, e, A, n))
                }
                return a.createElement(
                  i.Provider,
                  { value: M },
                  V && M.visualElement
                    ? a.createElement(V, {
                        visualElement: M.visualElement,
                        ...b
                      })
                    : null,
                  n(
                    x,
                    m,
                    A,
                    ((E = M.visualElement),
                    (0, a.useCallback)(
                      e => {
                        e && P.mount && P.mount(e),
                          E && (e ? E.mount(e) : E.unmount()),
                          C &&
                            ('function' == typeof C
                              ? C(e)
                              : (0, c.I)(C) && (C.current = e))
                      },
                      [E]
                    )),
                    P,
                    w,
                    M.visualElement
                  )
                )
              })
              return (E[C] = x), E
            })(e(t, n))
          }
          if ('undefined' == typeof Proxy) return custom
          let t = new Map()
          return new Proxy(custom, {
            get: (e, n) => (t.has(n) || t.set(n, custom(n)), t.get(n))
          })
        })(function (e, { forwardMotionProps: t = !1 }, n, r) {
          let o = (0, x.q)(e) ? T : O
          return {
            ...o,
            preloadedFeatures: n,
            useRender: (function (e = !1) {
              return (t, n, r, o, { latestValues: i }, u) => {
                let l = (0, x.q)(t) ? useSVGProps : useHTMLProps,
                  s = l(n, i, u, t),
                  c = (function (e, t, n) {
                    let r = {}
                    for (let a in e)
                      ('values' !== a || 'object' != typeof e.values) &&
                        (shouldForward(a) ||
                          (!0 === n && isValidMotionProp(a)) ||
                          (!t && !isValidMotionProp(a)) ||
                          (e.draggable && a.startsWith('onDrag'))) &&
                        (r[a] = e[a])
                    return r
                  })(n, 'string' == typeof t, e),
                  d = { ...c, ...s, ref: o },
                  { children: f } = n,
                  m = (0, a.useMemo)(() => ((0, V.i)(f) ? f.get() : f), [f])
                return (
                  r && (d['data-projection-id'] = r),
                  (0, a.createElement)(t, { ...d, children: m })
                )
              }
            })(t),
            createVisualElement: r,
            Component: e
          }
        })
    },
    96681: function (e, t, n) {
      n.d(t, {
        h: function () {
          return useConstant
        }
      })
      var r = n(67294)
      function useConstant (e) {
        let t = (0, r.useRef)(null)
        return null === t.current && (t.current = e()), t.current
      }
    },
    58868: function (e, t, n) {
      n.d(t, {
        L: function () {
          return o
        }
      })
      var r = n(67294),
        a = n(11741)
      let o = a.j ? r.useLayoutEffect : r.useEffect
    }
  }
])
//# sourceMappingURL=4251-ccb46d0ef2ec5191.js.map
