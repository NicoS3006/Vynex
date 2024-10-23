'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9438],
  {
    49438: function (e, t, n) {
      n.r(t),
        n.d(t, {
          HomeFeatures: function () {
            return HomeFeatures
          }
        })
      var o = n(85893),
        l = n(97650),
        i = n(71911),
        r = n(30719)
      n(92261)
      var a = n(67294),
        s = n(34203),
        u = n(16567),
        d = n(14362),
        c = n(82729),
        p = n(68777),
        m = n(7658)
      function _templateObject () {
        let e = (0, c._)([
          '\n  padding: 24px 0 60px;\n  background-color: ',
          ';\n  background-image: url("kP4MY76jvt94.com/static/assets/roof.svg");\n  background-position: left 30% bottom -5px;\n  background-size: cover;\n  background-repeat: no-repeat;\n\n  @media ',
          ' {\n    background-position: left -20% bottom -5px;\n  }\n'
        ])
        return (
          (_templateObject = function () {
            return e
          }),
          e
        )
      }
      function _templateObject1 () {
        let e = (0, c._)([
          '\n  margin: 40px 0 0;\n\n  @media ',
          ' {\n    margin: 48px -60px 0;\n  }\n\n  .swiper-slide {\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    width: 100% !important;\n\n    img {\n      position: static !important;\n      height: auto !important;\n      border-radius: 8px;\n      object-fit: cover;\n    }\n  }\n'
        ])
        return (
          (_templateObject1 = function () {
            return e
          }),
          e
        )
      }
      let f = p.ZP.section.withConfig({ componentId: 'sc-eae286-0' })(
          _templateObject(),
          e => {
            let {
              theme: { ColorBrandYellow: t }
            } = e
            return t
          },
          m.e.md
        ),
        g = (0, p.ZP)(s.s).withConfig({ componentId: 'sc-eae286-1' })(
          _templateObject1(),
          m.e.md
        ),
        HomeFeatures = e => {
          let { slides: t } = e,
            [n, c] = (0, a.useState)(null),
            [p, m] = (0, a.useState)(0),
            [h, b] = (0, a.useState)(!1),
            { inView: x, ref: j } = (0, l.YD)({ triggerOnce: !0 })
          return ((0, a.useEffect)(() => {
            var e, t
            null == n || null === (e = n.autoplay) || void 0 === e || e.stop(),
              x &&
                (null == n ||
                  null === (t = n.autoplay) ||
                  void 0 === t ||
                  t.start(),
                b(!0))
          }, [x, null == n ? void 0 : n.autoplay]),
          t.length)
            ? (0, o.jsx)(f, {
                ref: j,
                role: 'region',
                children: (0, o.jsxs)(s.r, {
                  children: [
                    (0, o.jsx)(s.s, {
                      md: 10,
                      offsetMd: 2,
                      children: (0, o.jsx)(u.I, {
                        items: t,
                        activeSlide: p,
                        changeSlide: e => {
                          ;(null == n ? void 0 : n.slideToLoop) &&
                            (n.slideToLoop(e),
                            null == n || n.autoplay.stop(),
                            b(!1))
                        },
                        isTimerRunning: x && h
                      })
                    }),
                    (0, o.jsx)(g, {
                      md: 10,
                      offsetMd: 2,
                      children: (0, o.jsx)(r.tq, {
                        preloadImages: !1,
                        autoplay: { delay: 3800 },
                        loop: !0,
                        modules: [i.Qr, i.s5, i.pt],
                        onSwiper: c,
                        onRealIndexChange: e => {
                          let { realIndex: t } = e
                          return m(t)
                        },
                        slidesPerView: 1,
                        allowTouchMove: !1,
                        children: t.map(e => {
                          let { image: t } = e
                          return (
                            !!(null == t ? void 0 : t.data) &&
                            (0, o.jsx)(
                              r.o5,
                              {
                                children: (0, o.jsx)(d.Ee, {
                                  ...t,
                                  fill: !0,
                                  withAspectRatio: !0
                                })
                              },
                              t.data.id
                            )
                          )
                        })
                      })
                    })
                  ]
                })
              })
            : null
        }
    }
  }
])
//# sourceMappingURL=9438.6dad85add155ef07.js.map
