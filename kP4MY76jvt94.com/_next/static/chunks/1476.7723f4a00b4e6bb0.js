;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1476],
  {
    64127: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          ImageVerticalAlign: function () {
            return i
          },
          TeaserGradient: function () {
            return TeaserGradient
          }
        })
      var r,
        i,
        l = n(85893),
        a = n(41664),
        c = n.n(a),
        o = n(82273),
        u = n(79634),
        s = n(69452),
        d = n(14362),
        p = n(82729),
        f = n(68777),
        m = n(7658),
        h = n(34203),
        b = n(22958)
      function _templateObject () {
        let e = (0, p._)(['\n  padding: 24px 0;\n'])
        return (
          (_templateObject = function () {
            return e
          }),
          e
        )
      }
      function _templateObject1 () {
        let e = (0, p._)([
          '\n  overflow: hidden;\n  border-radius: 8px;\n  ',
          ';\n'
        ])
        return (
          (_templateObject1 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject2 () {
        let e = (0, p._)([
          '\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 32px;\n  padding: 44px;\n\n  @media ',
          ' {\n    padding: 80px 0;\n  }\n'
        ])
        return (
          (_templateObject2 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject3 () {
        let e = (0, p._)([
          '\n  position: absolute;\n  overflow: hidden;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n'
        ])
        return (
          (_templateObject3 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject4 () {
        let e = (0, p._)([
          "\n    aspect-ratio: 1;\n    clip-path: url('#shape-small');\n    margin: -94px 0 0 16px;\n  "
        ])
        return (
          (_templateObject4 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject5 () {
        let e = (0, p._)([
          "\n      aspect-ratio: 0.95;\n      clip-path: url('#shape-large');\n      margin-left: 40px;\n    "
        ])
        return (
          (_templateObject5 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject6 () {
        let e = (0, p._)([
          '\n  display: flex;\n  justify-content: center;\n  align-items: ',
          ';\n  margin-bottom: 0;\n\n  ',
          '\n\n  @media ',
          ' {\n    justify-content: flex-end;\n\n    ',
          '\n  }\n'
        ])
        return (
          (_templateObject6 = function () {
            return e
          }),
          e
        )
      }
      ;((r = i || (i = {})).TOP = 'top'),
        (r.BOTTOM = 'bottom'),
        (r.CENTER = 'center')
      let j = f.ZP.section.withConfig({ componentId: 'sc-56181844-0' })(
          _templateObject()
        ),
        g = (0, f.ZP)(h.r).withConfig({ componentId: 'sc-56181844-1' })(
          _templateObject1(),
          e => {
            let { theme: t, gradient: n } = e
            return (0, b.j)(t[n])
          }
        ),
        _ = (0, f.ZP)(h.s).withConfig({ componentId: 'sc-56181844-2' })(
          _templateObject2(),
          m.e.md
        ),
        O = f.ZP.div.withConfig({ componentId: 'sc-56181844-3' })(
          _templateObject3()
        ),
        x = (0, f.ZP)(h.s).withConfig({ componentId: 'sc-56181844-4' })(
          _templateObject6(),
          e => {
            let { verticalAlign: t } = e
            switch (t) {
              case i.TOP:
                return 'flex-start'
              case i.BOTTOM:
                return 'flex-end'
              case i.CENTER:
              default:
                return 'center'
            }
          },
          e => {
            let { hasMask: t } = e
            return t && (0, f.iv)(_templateObject4())
          },
          m.e.md,
          e => {
            let { hasMask: t } = e
            return t && (0, f.iv)(_templateObject5())
          }
        )
      var C = n(93229),
        v = n.n(C)
      let TeaserGradient = e => {
        let {
          sectionId: t,
          title: n,
          cta: r,
          gradient: i,
          image: a,
          withShapeMask: p = !1,
          imageVerticalAlignement: f
        } = e
        return (0, l.jsxs)(j, {
          'aria-label': null == n ? void 0 : n.firstPart,
          id: t,
          children: [
            p && (0, l.jsx)(O, { children: (0, l.jsx)(v(), {}) }),
            (0, l.jsxs)(g, {
              gradient: i,
              children: [
                (0, l.jsxs)(_, {
                  md: 3,
                  offsetMd: 2,
                  children: [
                    !!(null == n ? void 0 : n.firstPart) &&
                      !!(null == n ? void 0 : n.secondPart) &&
                      (0, l.jsx)(u.KT, {
                        title: n.firstPart,
                        subtitle: n.secondPart,
                        noPadding: !0
                      }),
                    !!(null == r ? void 0 : r.url) &&
                      (null == r ? void 0 : r.label) &&
                      (0, l.jsx)(c(), {
                        href: r.url,
                        passHref: !0,
                        legacyBehavior: !0,
                        children: (0, l.jsx)(o.zx, {
                          isLink: !0,
                          variant: o.Wu.PRIMARY_INVERTED,
                          label: r.label,
                          icon: (0, l.jsx)(s.JO, {
                            name: s.Qy.ARROW,
                            rotation: s._l.RIGHT
                          })
                        })
                      })
                  ]
                }),
                a &&
                  (0, l.jsx)(x, {
                    md: p ? 8 : 7,
                    offsetMd: p ? 5 : 6,
                    verticalAlign: f,
                    hasMask: p,
                    children: (0, l.jsx)(d.Ee, {
                      ...a,
                      disablePlaceholder: !0,
                      withAspectRatio: !0
                    })
                  })
              ]
            })
          ]
        })
      }
    },
    5565: function (e, t, n) {
      'use strict'
      var r, i
      n.d(t, {
        x: function () {
          return r
        }
      }),
        ((i = r || (r = {})).YELLOW = 'yellow'),
        (i.BLACK = 'black')
    },
    14362: function (e, t, n) {
      'use strict'
      n.d(t, {
        Ee: function () {
          return h
        }
      })
      var r = n(85893),
        i = n(67294),
        l = n(9008),
        a = n.n(l),
        c = n(68417),
        o = n(17473),
        u = n(82729),
        s = n(68777),
        d = n(5565)
      function _templateObject () {
        let e = (0, u._)([
          '\n  0% {\n    background-position: 100% 0%;\n  }\n  100% {\n    background-position: 0% 100%;\n  }\n'
        ])
        return (
          (_templateObject = function () {
            return e
          }),
          e
        )
      }
      function _templateObject1 () {
        let e = (0, u._)(['\n  margin: 0;\n'])
        return (
          (_templateObject1 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject2 () {
        let e = (0, u._)([
          '\n      background: linear-gradient(to right, ',
          ');\n      background-size: 400% 200%;\n      animation: ',
          ' 2s infinite;\n    '
        ])
        return (
          (_templateObject2 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject3 () {
        let e = (0, u._)(['\n    aspect-ratio: ', ';\n  '])
        return (
          (_templateObject3 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject4 () {
        let e = (0, u._)([
          '\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n  '
        ])
        return (
          (_templateObject4 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject5 () {
        let e = (0, u._)(['\n    border-radius: ', 'px;\n  '])
        return (
          (_templateObject5 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject6 () {
        let e = (0, u._)([
          '\n  display: block;\n  width: ',
          ';\n  height: ',
          ';\n  object-fit: cover;\n  object-position: center center;\n\n  ',
          '\n\n  ',
          '\n\n  ',
          '\n\n  ',
          '\n'
        ])
        return (
          (_templateObject6 = function () {
            return e
          }),
          e
        )
      }
      let p = (0, s.F4)(_templateObject()),
        f = s.ZP.figure.withConfig({ componentId: 'sc-5d0cb03f-0' })(
          _templateObject1()
        ),
        m = s.ZP.img.withConfig({ componentId: 'sc-5d0cb03f-1' })(
          _templateObject6(),
          e => {
            let { width: t } = e
            return t ? ''.concat(t, 'px') : '100%'
          },
          e => {
            let { height: t } = e
            return t ? ''.concat(t, 'px') : 'auto'
          },
          e => {
            let {
                placeholderVariant: t,
                showPlaceholder: n,
                theme: {
                  ColorInkAccentOnActionPrimary: r,
                  ColorInkSubdued: i,
                  ColorFillActionAccentHover: l,
                  ColorInkDefault: a
                }
              } = e,
              c = ''.concat(a, ' 30%, ').concat(i, ' 40%, ').concat(a, ' 50%'),
              o = ''.concat(l, ' 30%, ').concat(r, ' 40%, ').concat(l, ' 50%')
            return (
              n && (0, s.iv)(_templateObject2(), t === d.x.YELLOW ? o : c, p)
            )
          },
          e => {
            let { aspectRatio: t } = e
            return t && (0, s.iv)(_templateObject3(), t)
          },
          e => {
            let { $fill: t } = e
            return t && (0, s.iv)(_templateObject4())
          },
          e => {
            let { borderRadius: t } = e
            return t && (0, s.iv)(_templateObject5(), t)
          }
        ),
        useImageLoaded = () => {
          let e = (0, i.useRef)(null),
            [t, n] = (0, i.useState)(!1)
          return (
            (0, i.useEffect)(() => {
              var t
              ;(null == e
                ? void 0
                : null === (t = e.current) || void 0 === t
                ? void 0
                : t.complete) && n(!0)
            }, []),
            { imgRef: e, isImageLoaded: t, setIsImageLoaded: n }
          )
        },
        h = (0, i.forwardRef)((e, t) => {
          let {
              borderRadius: n,
              disablePlaceholder: l,
              fill: u,
              height: s,
              highPriority: p,
              isAriaHidden: h = !1,
              lazyLoading: b = !0,
              placeholderVariant: j = d.x.YELLOW,
              staticImage: g,
              width: _,
              withAspectRatio: O,
              caption: x,
              ...C
            } = e,
            {
              imgRef: v,
              isImageLoaded: P,
              setIsImageLoaded: E
            } = useImageLoaded(),
            k = (0, i.useCallback)(
              () =>
                O && (null == C ? void 0 : C.data)
                  ? (0, c.qH)(C)
                  : O && g
                  ? +((_ || 1) / (s || 1)).toFixed(2)
                  : null,
              [C, g]
            )
          if (!(null == C ? void 0 : C.data) && !g) return null
          let y = g || (0, o.II)(C)
          return (0, r.jsxs)(r.Fragment, {
            children: [
              p &&
                (0, r.jsx)(a(), {
                  children: (0, r.jsx)('link', {
                    rel: 'preload',
                    as: 'image',
                    imageSrcSet: null == y ? void 0 : y.srcSet
                  })
                }),
              (0, r.jsxs)(f, {
                children: [
                  (0, r.jsx)(m, {
                    ...y,
                    aspectRatio: k(),
                    borderRadius: n,
                    fetchPriority: p ? 'high' : 'auto',
                    $fill: u,
                    height: s,
                    'aria-hidden': h,
                    loading: b ? 'lazy' : 'eager',
                    onLoad: () => E(!0),
                    ref: e => {
                      v && (v.current = e),
                        t && 'object' == typeof t && (t.current = e)
                    },
                    showPlaceholder: !l && !P,
                    placeholderVariant: j,
                    width: _
                  }),
                  !!x && (0, r.jsx)('figcaption', { children: x })
                ]
              })
            ]
          })
        })
    },
    22958: function (e, t, n) {
      'use strict'
      n.d(t, {
        j: function () {
          return animatedGradientBackground
        }
      })
      var r = n(82729),
        i = n(68777)
      function _templateObject () {
        let e = (0, r._)([
          '\n  0% {\n    background-position: 100% 0%;\n  }\n  100% {\n    background-position: 0% 100%;\n  }\n'
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
          '\n    background: ',
          ';\n    background-size: 200% 200%;\n    animation: ',
          ' 6s ease infinite alternate;\n'
        ])
        return (
          (_templateObject1 = function () {
            return e
          }),
          e
        )
      }
      let l = (0, i.F4)(_templateObject()),
        animatedGradientBackground = e => (0, i.iv)(_templateObject1(), e, l)
    },
    93229: function (e, t, n) {
      var r = n(67294)
      function ShapeMasks (e) {
        return r.createElement(
          'svg',
          e,
          r.createElement('defs', null, [
            r.createElement(
              'clipPath',
              { id: 'shape-large', clipPathUnits: 'objectBoundingBox', key: 0 },
              r.createElement('path', {
                d: 'M0.0882842 0.862501C0.0316593 0.799906 8.54058e-09 0.716198 7.50165e-09 0.629076C6.46273e-09 0.541953 0.0216329 0.452351 0.0882842 0.39565L0.612519 -7.30422e-09L1.04827 0L1.04827 1L0.231163 1C0.231163 1 0.145249 0.927599 0.0882842 0.862501Z'
              })
            ),
            r.createElement(
              'clipPath',
              { id: 'shape-small', clipPathUnits: 'objectBoundingBox', key: 1 },
              r.createElement('path', {
                d: 'M0.147384 1.50938C0.0528527 1.39984 1.4946e-08 1.25335 1.31279e-08 1.10088C1.13098e-08 0.948418 0.0361144 0.791614 0.147384 0.692388L1.02255 -1.21938e-08L1.75 1.03305e-09L1.75 1.75L0.385908 1.75C0.385908 1.75 0.242482 1.6233 0.147384 1.50938Z'
              })
            )
          ])
        )
      }
      ;(ShapeMasks.defaultProps = { width: '0', height: '0' }),
        (e.exports = ShapeMasks),
        (ShapeMasks.default = ShapeMasks)
    },
    51526: function (e, t, n) {
      'use strict'
      n.d(t, {
        M: function () {
          return AnimatePresence
        }
      })
      var r = n(67294),
        i = n(66405),
        l = n(58868)
      function useIsMounted () {
        let e = (0, r.useRef)(!1)
        return (
          (0, l.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1
              }
            ),
            []
          ),
          e
        )
      }
      var a = n(240),
        c = n(96681)
      let PopChildMeasure = class PopChildMeasure extends r.Component {
        getSnapshotBeforeUpdate (e) {
          let t = this.props.childRef.current
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current
            ;(e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft)
          }
          return null
        }
        componentDidUpdate () {}
        render () {
          return this.props.children
        }
      }
      function PopChild ({ children: e, isPresent: t }) {
        let n = (0, r.useId)(),
          i = (0, r.useRef)(null),
          l = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 })
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: e, height: r, top: a, left: c } = l.current
            if (t || !i.current || !e || !r) return
            i.current.dataset.motionPopId = n
            let o = document.createElement('style')
            return (
              document.head.appendChild(o),
              o.sheet &&
                o.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${c}px !important;
          }
        `),
              () => {
                document.head.removeChild(o)
              }
            )
          }, [t]),
          r.createElement(
            PopChildMeasure,
            { isPresent: t, childRef: i, sizeRef: l },
            r.cloneElement(e, { ref: i })
          )
        )
      }
      let PresenceChild = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: i,
        custom: l,
        presenceAffectsLayout: o,
        mode: u
      }) => {
        let s = (0, c.h)(newChildrenMap),
          d = (0, r.useId)(),
          p = (0, r.useMemo)(
            () => ({
              id: d,
              initial: t,
              isPresent: n,
              custom: l,
              onExitComplete: e => {
                for (let t of (s.set(e, !0), s.values())) if (!t) return
                i && i()
              },
              register: e => (s.set(e, !1), () => s.delete(e))
            }),
            o ? void 0 : [n]
          )
        return (
          (0, r.useMemo)(() => {
            s.forEach((e, t) => s.set(t, !1))
          }, [n]),
          r.useEffect(() => {
            n || s.size || !i || i()
          }, [n]),
          'popLayout' === u &&
            (e = r.createElement(PopChild, { isPresent: n }, e)),
          r.createElement(a.O.Provider, { value: p }, e)
        )
      }
      function newChildrenMap () {
        return new Map()
      }
      var o = n(25364),
        u = n(45487)
      let getChildKey = e => e.key || '',
        AnimatePresence = ({
          children: e,
          custom: t,
          initial: n = !0,
          onExitComplete: a,
          exitBeforeEnter: c,
          presenceAffectsLayout: s = !0,
          mode: d = 'sync'
        }) => {
          var p
          ;(0, u.k)(!c, "Replace exitBeforeEnter with mode='wait'")
          let [f] = (function () {
              let e = useIsMounted(),
                [t, n] = (0, r.useState)(0),
                l = (0, r.useCallback)(() => {
                  e.current && n(t + 1)
                }, [t]),
                a = (0, r.useCallback)(() => i.Z_.postRender(l), [l])
              return [a, t]
            })(),
            m = (0, r.useContext)(o.p).forceRender
          m && (f = m)
          let h = useIsMounted(),
            b = (function (e) {
              let t = []
              return (
                r.Children.forEach(e, e => {
                  ;(0, r.isValidElement)(e) && t.push(e)
                }),
                t
              )
            })(e),
            j = b,
            g = new Set(),
            _ = (0, r.useRef)(j),
            O = (0, r.useRef)(new Map()).current,
            x = (0, r.useRef)(!0)
          if (
            ((0, l.L)(() => {
              ;(x.current = !1),
                (function (e, t) {
                  e.forEach(e => {
                    let n = getChildKey(e)
                    t.set(n, e)
                  })
                })(b, O),
                (_.current = j)
            }),
            (p = () => {
              ;(x.current = !0), O.clear(), g.clear()
            }),
            (0, r.useEffect)(() => () => p(), []),
            x.current)
          )
            return r.createElement(
              r.Fragment,
              null,
              j.map(e =>
                r.createElement(
                  PresenceChild,
                  {
                    key: getChildKey(e),
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: s,
                    mode: d
                  },
                  e
                )
              )
            )
          j = [...j]
          let C = _.current.map(getChildKey),
            v = b.map(getChildKey),
            P = C.length
          for (let e = 0; e < P; e++) {
            let t = C[e]
            ;-1 === v.indexOf(t) && g.add(t)
          }
          return (
            'wait' === d && g.size && (j = []),
            g.forEach(e => {
              if (-1 !== v.indexOf(e)) return
              let n = O.get(e)
              if (!n) return
              let i = C.indexOf(e)
              j.splice(
                i,
                0,
                r.createElement(
                  PresenceChild,
                  {
                    key: getChildKey(n),
                    isPresent: !1,
                    onExitComplete: () => {
                      O.delete(e), g.delete(e)
                      let t = _.current.findIndex(t => t.key === e)
                      if ((_.current.splice(t, 1), !g.size)) {
                        if (((_.current = b), !1 === h.current)) return
                        f(), a && a()
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: s,
                    mode: d
                  },
                  n
                )
              )
            }),
            (j = j.map(e => {
              let t = e.key
              return g.has(t)
                ? e
                : r.createElement(
                    PresenceChild,
                    {
                      key: getChildKey(e),
                      isPresent: !0,
                      presenceAffectsLayout: s,
                      mode: d
                    },
                    e
                  )
            })),
            r.createElement(
              r.Fragment,
              null,
              g.size ? j : j.map(e => (0, r.cloneElement)(e))
            )
          )
        }
    }
  }
])
//# sourceMappingURL=1476.7723f4a00b4e6bb0.js.map
