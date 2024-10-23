'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9661],
  {
    37301: function (e, t, n) {
      n.d(t, {
        I: function () {
          return resolveElements
        }
      })
      var r = n(45487)
      function resolveElements (e, t, n) {
        var o
        if ('string' == typeof e) {
          let l = document
          t &&
            ((0, r.k)(!!t.current, 'Scope provided, but no element detected.'),
            (l = t.current)),
            n
              ? ((null !== (o = n[e]) && void 0 !== o) ||
                  (n[e] = l.querySelectorAll(e)),
                (e = n[e]))
              : (e = l.querySelectorAll(e))
        } else e instanceof Element && (e = [e])
        return Array.from(e || [])
      }
    },
    45204: function (e, t, n) {
      let r, o
      n.d(t, {
        v: function () {
          return useScroll
        }
      })
      var l = n(33234),
        i = n(96681),
        s = n(67294),
        f = n(45487),
        a = n(66405),
        u = n(37367),
        c = n(37301)
      let d = new WeakMap()
      function notifyTarget ({ target: e, contentRect: t, borderBoxSize: n }) {
        var r
        null === (r = d.get(e)) ||
          void 0 === r ||
          r.forEach(r => {
            r({
              target: e,
              contentSize: t,
              get size () {
                return (function (e, t) {
                  if (t) {
                    let { inlineSize: e, blockSize: n } = t[0]
                    return { width: e, height: n }
                  }
                  return e instanceof SVGElement && 'getBBox' in e
                    ? e.getBBox()
                    : { width: e.offsetWidth, height: e.offsetHeight }
                })(e, n)
              }
            })
          })
      }
      function notifyAll (e) {
        e.forEach(notifyTarget)
      }
      let g = new Set()
      var h = n(23967),
        p = n(3038)
      let createAxisInfo = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0
        }),
        createScrollInfo = () => ({
          time: 0,
          x: createAxisInfo(),
          y: createAxisInfo()
        }),
        m = {
          x: { length: 'Width', position: 'Left' },
          y: { length: 'Height', position: 'Top' }
        }
      function updateAxisInfo (e, t, n, r) {
        let o = n[t],
          { length: l, position: i } = m[t],
          s = o.current,
          f = n.time
        ;(o.current = e['scroll' + i]),
          (o.scrollLength = e['scroll' + l] - e['client' + l]),
          (o.offset.length = 0),
          (o.offset[0] = 0),
          (o.offset[1] = o.scrollLength),
          (o.progress = (0, h.Y)(0, o.scrollLength, o.current))
        let a = r - f
        o.velocity = a > 50 ? 0 : (0, p.R)(o.current - s, a)
      }
      let v = {
          All: [
            [0, 0],
            [1, 1]
          ]
        },
        y = { start: 0, center: 0.5, end: 1 }
      function resolveEdge (e, t, n = 0) {
        let r = 0
        if ((void 0 !== y[e] && (e = y[e]), 'string' == typeof e)) {
          let t = parseFloat(e)
          e.endsWith('px')
            ? (r = t)
            : e.endsWith('%')
            ? (e = t / 100)
            : e.endsWith('vw')
            ? (r = (t / 100) * document.documentElement.clientWidth)
            : e.endsWith('vh')
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t)
        }
        return 'number' == typeof e && (r = t * e), n + r
      }
      let E = [0, 0]
      var w = n(64606),
        x = n(60599)
      let A = { x: 0, y: 0 },
        L = new WeakMap(),
        W = new WeakMap(),
        S = new WeakMap(),
        getEventTarget = e => (e === document.documentElement ? window : e)
      var T = n(58868)
      function refWarning (e, t) {
        ;(0, f.K)(
          !!(!t || t.current),
          `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        )
      }
      let createScrollMotionValues = () => ({
        scrollX: (0, l.B)(0),
        scrollY: (0, l.B)(0),
        scrollXProgress: (0, l.B)(0),
        scrollYProgress: (0, l.B)(0)
      })
      function useScroll ({
        container: e,
        target: t,
        layoutEffect: n = !0,
        ...l
      } = {}) {
        let f = (0, i.h)(createScrollMotionValues),
          h = n ? T.L : s.useEffect
        return (
          h(
            () => (
              refWarning('target', t),
              refWarning('container', e),
              (function (
                e,
                { container: t = document.documentElement, ...n } = {}
              ) {
                let l = S.get(t)
                l || ((l = new Set()), S.set(t, l))
                let i = createScrollInfo(),
                  s = (function (e, t, n, r = {}) {
                    return {
                      measure: () =>
                        (function (e, t = e, n) {
                          if (
                            ((n.x.targetOffset = 0),
                            (n.y.targetOffset = 0),
                            t !== e)
                          ) {
                            let r = t
                            for (; r && r !== e; )
                              (n.x.targetOffset += r.offsetLeft),
                                (n.y.targetOffset += r.offsetTop),
                                (r = r.offsetParent)
                          }
                          ;(n.x.targetLength =
                            t === e ? t.scrollWidth : t.clientWidth),
                            (n.y.targetLength =
                              t === e ? t.scrollHeight : t.clientHeight),
                            (n.x.containerLength = e.clientWidth),
                            (n.y.containerLength = e.clientHeight)
                        })(e, r.target, n),
                      update: t => {
                        updateAxisInfo(e, 'x', n, t),
                          updateAxisInfo(e, 'y', n, t),
                          (n.time = t),
                          (r.offset || r.target) &&
                            (function (e, t, n) {
                              let { offset: r = v.All } = n,
                                { target: o = e, axis: l = 'y' } = n,
                                i = 'y' === l ? 'height' : 'width',
                                s =
                                  o !== e
                                    ? (function (e, t) {
                                        let n = { x: 0, y: 0 },
                                          r = e
                                        for (; r && r !== t; )
                                          if (r instanceof HTMLElement)
                                            (n.x += r.offsetLeft),
                                              (n.y += r.offsetTop),
                                              (r = r.offsetParent)
                                          else if (
                                            r instanceof SVGGraphicsElement &&
                                            'getBBox' in r
                                          ) {
                                            let { top: e, left: t } =
                                              r.getBBox()
                                            for (
                                              n.x += t, n.y += e;
                                              r && 'svg' !== r.tagName;

                                            )
                                              r = r.parentNode
                                          }
                                        return n
                                      })(o, e)
                                    : A,
                                f =
                                  o === e
                                    ? {
                                        width: e.scrollWidth,
                                        height: e.scrollHeight
                                      }
                                    : {
                                        width: o.clientWidth,
                                        height: o.clientHeight
                                      },
                                a = {
                                  width: e.clientWidth,
                                  height: e.clientHeight
                                }
                              t[l].offset.length = 0
                              let u = !t[l].interpolate,
                                c = r.length
                              for (let e = 0; e < c; e++) {
                                let n = (function (e, t, n, r) {
                                  let o = Array.isArray(e) ? e : E,
                                    l = 0
                                  return (
                                    'number' == typeof e
                                      ? (o = [e, e])
                                      : 'string' == typeof e &&
                                        (o = (e = e.trim()).includes(' ')
                                          ? e.split(' ')
                                          : [e, y[e] ? e : '0']),
                                    resolveEdge(o[0], n, r) -
                                      resolveEdge(o[1], t)
                                  )
                                })(r[e], a[i], f[i], s[l])
                                u ||
                                  n === t[l].interpolatorOffsets[e] ||
                                  (u = !0),
                                  (t[l].offset[e] = n)
                              }
                              u &&
                                ((t[l].interpolate = (0, w.s)(
                                  t[l].offset,
                                  (0, x.Y)(r)
                                )),
                                (t[l].interpolatorOffsets = [...t[l].offset])),
                                (t[l].progress = t[l].interpolate(t[l].current))
                            })(e, n, r)
                      },
                      notify: () => t(n)
                    }
                  })(t, e, i, n)
                if ((l.add(s), !L.has(t))) {
                  let measureAll = () => {
                      for (let e of l) e.measure()
                    },
                    updateAll = () => {
                      for (let e of l) e.update(u.frameData.timestamp)
                    },
                    notifyAll = () => {
                      for (let e of l) e.notify()
                    },
                    listener = () => {
                      a.Z_.read(measureAll, !1, !0),
                        a.Z_.update(updateAll, !1, !0),
                        a.Z_.update(notifyAll, !1, !0)
                    }
                  L.set(t, listener)
                  let e = getEventTarget(t)
                  window.addEventListener('resize', listener, { passive: !0 }),
                    t !== document.documentElement &&
                      W.set(
                        t,
                        'function' == typeof t
                          ? (g.add(t),
                            o ||
                              ((o = () => {
                                let e = {
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                  },
                                  t = {
                                    target: window,
                                    size: e,
                                    contentSize: e
                                  }
                                g.forEach(e => e(t))
                              }),
                              window.addEventListener('resize', o)),
                            () => {
                              g.delete(t), !g.size && o && (o = void 0)
                            })
                          : (function (e, t) {
                              r ||
                                'undefined' == typeof ResizeObserver ||
                                (r = new ResizeObserver(notifyAll))
                              let n = (0, c.I)(e)
                              return (
                                n.forEach(e => {
                                  let n = d.get(e)
                                  n || ((n = new Set()), d.set(e, n)),
                                    n.add(t),
                                    null == r || r.observe(e)
                                }),
                                () => {
                                  n.forEach(e => {
                                    let n = d.get(e)
                                    null == n || n.delete(t),
                                      (null == n ? void 0 : n.size) ||
                                        null == r ||
                                        r.unobserve(e)
                                  })
                                }
                              )
                            })(t, listener)
                      ),
                    e.addEventListener('scroll', listener, { passive: !0 })
                }
                let f = L.get(t)
                return (
                  a.Z_.read(f, !1, !0),
                  () => {
                    var e
                    a.qY.read(f)
                    let n = S.get(t)
                    if (!n || (n.delete(s), n.size)) return
                    let r = L.get(t)
                    L.delete(t),
                      r &&
                        (getEventTarget(t).removeEventListener('scroll', r),
                        null === (e = W.get(t)) || void 0 === e || e(),
                        window.removeEventListener('resize', r))
                  }
                )
              })(
                ({ x: e, y: t }) => {
                  f.scrollX.set(e.current),
                    f.scrollXProgress.set(e.progress),
                    f.scrollY.set(t.current),
                    f.scrollYProgress.set(t.progress)
                },
                {
                  ...l,
                  container: (null == e ? void 0 : e.current) || void 0,
                  target: (null == t ? void 0 : t.current) || void 0
                }
              )
            ),
            []
          ),
          f
        )
      }
    },
    12421: function (e, t, n) {
      n.d(t, {
        H: function () {
          return useTransform
        }
      })
      var r = n(64606)
      let isCustomValueType = e => 'object' == typeof e && e.mix,
        getMixer = e => (isCustomValueType(e) ? e.mix : void 0)
      var o = n(67294),
        l = n(33234),
        i = n(16014),
        s = n(96681),
        f = n(66405),
        a = n(58868)
      function useTransform (e, t, n, o) {
        let l =
          'function' == typeof t
            ? t
            : (function (...e) {
                let t = !Array.isArray(e[0]),
                  n = t ? 0 : -1,
                  o = e[0 + n],
                  l = e[1 + n],
                  i = e[2 + n],
                  s = e[3 + n],
                  f = (0, r.s)(l, i, { mixer: getMixer(i[0]), ...s })
                return t ? f(o) : f
              })(t, n, o)
        return Array.isArray(e)
          ? useListTransform(e, l)
          : useListTransform([e], ([e]) => l(e))
      }
      function useListTransform (e, t) {
        let n = (0, s.h)(() => [])
        return (function (e, t) {
          let n = (function (e) {
              let t = (0, s.h)(() => (0, l.B)(e)),
                { isStatic: n } = (0, o.useContext)(i._)
              if (n) {
                let [, n] = (0, o.useState)(e)
                ;(0, o.useEffect)(() => t.on('change', n), [])
              }
              return t
            })(t()),
            updateValue = () => n.set(t())
          return (
            updateValue(),
            (0, a.L)(() => {
              let scheduleUpdate = () => f.Z_.update(updateValue, !1, !0),
                t = e.map(e => e.on('change', scheduleUpdate))
              return () => {
                t.forEach(e => e()), f.qY.update(updateValue)
              }
            }),
            n
          )
        })(e, () => {
          n.length = 0
          let r = e.length
          for (let t = 0; t < r; t++) n[t] = e[t].get()
          return t(n)
        })
      }
    }
  }
])
//# sourceMappingURL=9661-8cb297b301a9a278.js.map
