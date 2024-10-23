'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8957],
  {
    21888: function (e, t, n) {
      n.d(t, {
        b: function () {
          return Sections
        }
      })
      var a,
        r,
        o = n(85893),
        c = n(5152),
        i = n.n(c),
        l = n(11163),
        u = n(67294),
        s = n(82729),
        d = n(68777),
        p = n(783)
      function _templateObject () {
        let e = (0, s._)(['\n  background-color: ', ';\n'])
        return (
          (_templateObject = function () {
            return e
          }),
          e
        )
      }
      function _templateObject1 () {
        let e = (0, s._)(['\n  background-color: ', ';\n'])
        return (
          (_templateObject1 = function () {
            return e
          }),
          e
        )
      }
      let b = d.ZP.section.withConfig({ componentId: 'sc-b8e7e5af-0' })(
          _templateObject(),
          e => {
            let {
              theme: { ColorBackgroundPage: t }
            } = e
            return t
          }
        ),
        m = d.ZP.div.withConfig({ componentId: 'sc-b8e7e5af-1' })(
          _templateObject1(),
          e => {
            let {
              colorMode: t,
              theme: {
                ColorBackgroundPage: n,
                ColorBackgroundPageDark: a,
                ColorBrandDarkGrey: r,
                ColorBackgroundHighlightA: o
              }
            } = e
            switch (t) {
              case p.h.DARK:
                return a
              case p.h.GRAY:
                return r
              case p.h.YELLOW:
                return o
              case p.h.LIGHT:
              default:
                return n
            }
          }
        )
      ;((a = r || (r = {})).TITLE = 'ComponentPageSectionsHeader'),
        (a.INSET = 'ComponentPageSectionsInset'),
        (a.SEPARATOR = 'ComponentPageSectionsSeparator'),
        (a.IMAGE = 'ComponentPageSectionsImage'),
        (a.TARGET_LINKS = 'ComponentPageSectionsTargetLinks'),
        (a.TEASER_BASIC = 'ComponentPageSectionsBasic'),
        (a.TEASER_GRADIENT = 'ComponentPageSectionsGradient'),
        (a.MAGAZINE_ARTICLES = 'ComponentPageSectionsMagazineArticles'),
        (a.TEASER_CARDS = 'ComponentPageSectionsTeaserCards'),
        (a.COLUMNS_LINKS = 'ComponentPageSectionsColumnsLinks'),
        (a.GALLERY = 'ComponentPageSectionsGallery')
      let h = i()(
          () =>
            Promise.all([n.e(9190), n.e(4251), n.e(9634), n.e(7026)])
              .then(n.bind(n, 89693))
              .then(e => e.Title),
          { loadableGenerated: { webpack: () => [89693] } }
        ),
        f = i()(
          () =>
            n
              .e(3106)
              .then(n.bind(n, 93106))
              .then(e => e.ImageSection),
          { loadableGenerated: { webpack: () => [93106] } }
        ),
        _ = i()(
          () =>
            Promise.all([n.e(9190), n.e(4251), n.e(9634), n.e(2490)])
              .then(n.bind(n, 74353))
              .then(e => e.Inset),
          { loadableGenerated: { webpack: () => [74353] } }
        ),
        j = i()(
          () =>
            n
              .e(1210)
              .then(n.bind(n, 71210))
              .then(e => e.TargetLinks),
          { loadableGenerated: { webpack: () => [71210] } }
        ),
        g = i()(
          () =>
            Promise.all([n.e(9190), n.e(4251), n.e(3913), n.e(9634), n.e(7282)])
              .then(n.bind(n, 14427))
              .then(e => e.TeaserBasic),
          { loadableGenerated: { webpack: () => [14427] } }
        ),
        O = i()(
          () =>
            Promise.all([n.e(9190), n.e(4251), n.e(9634), n.e(1476)])
              .then(n.bind(n, 64127))
              .then(e => e.TeaserGradient),
          { loadableGenerated: { webpack: () => [64127] } }
        ),
        S = i()(
          () =>
            n
              .e(3368)
              .then(n.bind(n, 43368))
              .then(e => e.Separator),
          { loadableGenerated: { webpack: () => [43368] } }
        ),
        E = i()(
          () =>
            Promise.all([n.e(9190), n.e(4251), n.e(9634), n.e(7773), n.e(1377)])
              .then(n.bind(n, 41377))
              .then(e => e.MagazineArticles),
          { loadableGenerated: { webpack: () => [41377] } }
        ),
        v = i()(
          () =>
            n
              .e(9176)
              .then(n.bind(n, 59176))
              .then(e => e.TeaserCards),
          { loadableGenerated: { webpack: () => [59176] } }
        ),
        A = i()(
          () =>
            n
              .e(4579)
              .then(n.bind(n, 54579))
              .then(e => e.ColumnsLinks),
          { loadableGenerated: { webpack: () => [54579] } }
        ),
        x = i()(
          () =>
            Promise.all([
              n.e(9190),
              n.e(4251),
              n.e(2687),
              n.e(7907),
              n.e(9199),
              n.e(6254)
            ])
              .then(n.bind(n, 46254))
              .then(e => e.Gallery),
          { loadableGenerated: { webpack: () => [46254] } }
        ),
        Sections = e => {
          let { sections: t, customSections: n } = e,
            { locale: a } = (0, l.useRouter)(),
            c = (0, u.useCallback)(e => {
              switch (e.__typename) {
                case r.TITLE:
                  return (0, o.jsx)(h, { ...e })
                case r.IMAGE:
                  return (0, o.jsx)(f, { ...e })
                case r.INSET:
                  return (0, o.jsx)(_, { ...e })
                case r.TEASER_BASIC:
                  return (0, o.jsx)(g, { ...e })
                case r.TEASER_GRADIENT:
                  return (0, o.jsx)(O, { ...e })
                case r.TARGET_LINKS:
                  return (0, o.jsx)(j, { ...e })
                case r.SEPARATOR:
                  return (0, o.jsx)(S, { ...e })
                case r.MAGAZINE_ARTICLES:
                  return (0, o.jsx)(E, { ...e })
                case r.TEASER_CARDS:
                  return (0, o.jsx)(v, { ...e })
                case r.COLUMNS_LINKS:
                  return (0, o.jsx)(A, { ...e })
                case r.GALLERY:
                  return (0, o.jsx)(x, { ...e })
                default:
                  if (n) return n(e)
                  return null
              }
            }, [])
          return (null == t ? void 0 : t.length)
            ? (0, o.jsx)(b, {
                children: t.map(e => {
                  var t
                  return (0, o.jsx)(
                    m,
                    {
                      colorMode:
                        'displayOptions' in e
                          ? null === (t = e.displayOptions) || void 0 === t
                            ? void 0
                            : t.colorMode
                          : void 0,
                      children: c(e)
                    },
                    ''.concat(e.__typename, '-').concat(e.id, '-').concat(a)
                  )
                })
              })
            : null
        }
    },
    5565: function (e, t, n) {
      var a, r
      n.d(t, {
        x: function () {
          return a
        }
      }),
        ((r = a || (a = {})).YELLOW = 'yellow'),
        (r.BLACK = 'black')
    },
    14362: function (e, t, n) {
      n.d(t, {
        Ee: function () {
          return h
        }
      })
      var a = n(85893),
        r = n(67294),
        o = n(9008),
        c = n.n(o),
        i = n(68417),
        l = n(17473),
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
        b = s.ZP.figure.withConfig({ componentId: 'sc-5d0cb03f-0' })(
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
                  ColorInkAccentOnActionPrimary: a,
                  ColorInkSubdued: r,
                  ColorFillActionAccentHover: o,
                  ColorInkDefault: c
                }
              } = e,
              i = ''.concat(c, ' 30%, ').concat(r, ' 40%, ').concat(c, ' 50%'),
              l = ''.concat(o, ' 30%, ').concat(a, ' 40%, ').concat(o, ' 50%')
            return (
              n && (0, s.iv)(_templateObject2(), t === d.x.YELLOW ? l : i, p)
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
          let e = (0, r.useRef)(null),
            [t, n] = (0, r.useState)(!1)
          return (
            (0, r.useEffect)(() => {
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
        h = (0, r.forwardRef)((e, t) => {
          let {
              borderRadius: n,
              disablePlaceholder: o,
              fill: u,
              height: s,
              highPriority: p,
              isAriaHidden: h = !1,
              lazyLoading: f = !0,
              placeholderVariant: _ = d.x.YELLOW,
              staticImage: j,
              width: g,
              withAspectRatio: O,
              caption: S,
              ...E
            } = e,
            {
              imgRef: v,
              isImageLoaded: A,
              setIsImageLoaded: x
            } = useImageLoaded(),
            C = (0, r.useCallback)(
              () =>
                O && (null == E ? void 0 : E.data)
                  ? (0, i.qH)(E)
                  : O && j
                  ? +((g || 1) / (s || 1)).toFixed(2)
                  : null,
              [E, j]
            )
          if (!(null == E ? void 0 : E.data) && !j) return null
          let L = j || (0, l.II)(E)
          return (0, a.jsxs)(a.Fragment, {
            children: [
              p &&
                (0, a.jsx)(c(), {
                  children: (0, a.jsx)('link', {
                    rel: 'preload',
                    as: 'image',
                    imageSrcSet: null == L ? void 0 : L.srcSet
                  })
                }),
              (0, a.jsxs)(b, {
                children: [
                  (0, a.jsx)(m, {
                    ...L,
                    aspectRatio: C(),
                    borderRadius: n,
                    fetchPriority: p ? 'high' : 'auto',
                    $fill: u,
                    height: s,
                    'aria-hidden': h,
                    loading: f ? 'lazy' : 'eager',
                    onLoad: () => x(!0),
                    ref: e => {
                      v && (v.current = e),
                        t && 'object' == typeof t && (t.current = e)
                    },
                    showPlaceholder: !o && !A,
                    placeholderVariant: _,
                    width: g
                  }),
                  !!S && (0, a.jsx)('figcaption', { children: S })
                ]
              })
            ]
          })
        })
    },
    22254: function (e, t, n) {
      n.d(t, {
        n: function () {
          return Video
        }
      })
      var a = n(85893),
        r = n(67294),
        o = n(69452),
        c = n(17473),
        i = n(82729),
        l = n(68777)
      function _templateObject () {
        let e = (0, i._)([
          '\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n'
        ])
        return (
          (_templateObject = function () {
            return e
          }),
          e
        )
      }
      function _templateObject1 () {
        let e = (0, i._)([
          '\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n'
        ])
        return (
          (_templateObject1 = function () {
            return e
          }),
          e
        )
      }
      function _templateObject2 () {
        let e = (0, i._)([
          '\n  backdrop-filter: blur(0);\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 64px;\n  height: 64px;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background: none;\n  cursor: pointer;\n'
        ])
        return (
          (_templateObject2 = function () {
            return e
          }),
          e
        )
      }
      let u = l.ZP.div.withConfig({ componentId: 'sc-24fe02a1-0' })(
          _templateObject()
        ),
        s = l.ZP.video.withConfig({ componentId: 'sc-24fe02a1-1' })(
          _templateObject1()
        ),
        d = l.ZP.button.withConfig({ componentId: 'sc-24fe02a1-2' })(
          _templateObject2()
        ),
        Video = e => {
          var t, n
          let {
              videos: i,
              hasControls: l = !1,
              ariaLabelButton: p,
              ariaLabelPause: b,
              ariaLabelPlay: m,
              ...h
            } = e,
            [f, _] = (0, r.useState)(h.autoPlay || !1),
            j = (0, r.useRef)(null),
            g =
              null == i
                ? void 0
                : null ===
                    (t = i.data.find(
                      e => 'video/webm' === e.attributes.mime
                    )) || void 0 === t
                ? void 0
                : t.attributes,
            O =
              null == i
                ? void 0
                : null ===
                    (n = i.data.find(e => 'video/mp4' === e.attributes.mime)) ||
                  void 0 === n
                ? void 0
                : n.attributes
          if (!g || !O) return null
          let playPause = () => {
            ;(null == j ? void 0 : j.current) &&
              (j.current.paused
                ? (j.current.play(), _(!0))
                : (j.current.pause(), _(!1)))
          }
          return (0, a.jsxs)(u, {
            children: [
              (0, a.jsxs)(s, {
                ...h,
                ref: j,
                preload: 'metadata',
                children: [
                  (0, a.jsx)('source', {
                    src: ''.concat((0, c.cB)(g.url), '#t=0.1'),
                    type: 'video/webm'
                  }),
                  (0, a.jsx)('source', {
                    src: ''.concat((0, c.cB)(O.url), '#t=0.1'),
                    type: 'video/mp4'
                  })
                ]
              }),
              l &&
                (0, a.jsx)(d, {
                  onClick: () => playPause(),
                  'aria-label': ''.concat(f ? b : m, ' ').concat(p),
                  children: (0, a.jsx)(o.JO, {
                    color: 'white',
                    name: f ? o.Qy.PAUSE : o.Qy.PLAY,
                    size: 24,
                    weight: o.xW.BOLD
                  })
                })
            ]
          })
        }
    },
    783: function (e, t, n) {
      var a, r
      n.d(t, {
        h: function () {
          return a
        }
      }),
        ((r = a || (a = {})).LIGHT = 'light'),
        (r.GRAY = 'gray'),
        (r.DARK = 'dark'),
        (r.YELLOW = 'yellow')
    }
  }
])
//# sourceMappingURL=8957-db9a0102c7965173.js.map
