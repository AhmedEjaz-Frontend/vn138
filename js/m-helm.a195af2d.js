"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [5438],
  {
    77034: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = a(74376),
        o = (n(a(5556)), a(39125)),
        r = a(68686),
        m = n(a(94188)),
        s = a(51628),
        l = a(74848);
      t.default = (e) => {
        let { path: t } = e;
        const a =
            s.i18n[`meta.description.${t}`] ||
            s.i18n["meta.description"] ||
            window.defaultDesc ||
            m.default.brand.title,
          n = ((e) => {
            const t = (0, r.domain_from_url)(
              m.default.portal.apiServer.baseURL
            );
            let a = s.i18n[`meta.canonical.${e}`];
            return (
              "p20prod" === m.default.brand.code &&
                (a = `https://www.${t}${e}`),
              a
            );
          })(t);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(o.Helmet, {
              children: [
                (0, l.jsx)("html", {
                  lang: i.iSO639_1CodeEnum[s.currLocale] || "en",
                }),
                (0, l.jsx)("title", {
                  children:
                    s.i18n[`head.title.${t}`] ||
                    s.i18n["head.title"] ||
                    m.default.brand.title,
                }),
                a &&
                  (0, l.jsx)("meta", {
                    name: "description",
                    content: a,
                  }),
                (s.i18n[`meta.keywords.${t}`] || s.i18n["meta.keywords"]) &&
                  (0, l.jsx)("meta", {
                    name: "keywords",
                    content:
                      s.i18n[`meta.keywords.${t}`] || s.i18n["meta.keywords"],
                  }),
                s.i18n["meta.abstract"] &&
                  (0, l.jsx)("meta", {
                    name: "abstract",
                    content: s.i18n["meta.abstract"],
                  }),
                s.i18n[`head.og:locale.${t}`] &&
                  (0, l.jsx)("meta", {
                    property: "og:locale",
                    content: s.i18n[`head.og:locale.${t}`],
                  }),
                s.i18n[`head.og:type.${t}`] &&
                  (0, l.jsx)("meta", {
                    property: "og:type",
                    content: s.i18n[`head.og:type.${t}`],
                  }),
                s.i18n[`head.og:locale:alternate.${t}`] &&
                  (0, l.jsx)("meta", {
                    property: "og:locale:alternate",
                    content: s.i18n[`head.og:locale:alternate.${t}`],
                  }),
                (s.i18n[`head.og:title.${t}`] || s.i18n["head.og:title"]) &&
                  (0, l.jsx)("meta", {
                    property: "og:title",
                    content:
                      s.i18n[`head.og:title.${t}`] || s.i18n["head.og:title"],
                  }),
                (s.i18n[`meta.og:description.${t}`] ||
                  s.i18n["meta.og:description"]) &&
                  (0, l.jsx)("meta", {
                    property: "og:description",
                    content:
                      s.i18n[`meta.og:description.${t}`] ||
                      s.i18n["meta.og:description"],
                  }),
                s.i18n[`meta.og:keywords.${t}`] &&
                  (0, l.jsx)("meta", {
                    property: "og:keywords",
                    content: s.i18n[`meta.og:keywords.${t}`],
                  }),
                s.i18n[`meta.og:url.${t}`] &&
                  (0, l.jsx)("meta", {
                    property: "og:url",
                    content: s.i18n[`meta.og:url.${t}`],
                  }),
                s.i18n[`meta.og:image.${t}`] &&
                  (0, l.jsx)("meta", {
                    property: "og:image",
                    content: s.i18n[`meta.og:image.${t}`],
                  }),
                s.i18n[`meta.og:image:alt.${t}`] &&
                  (0, l.jsx)("meta", {
                    property: "og:image:alt",
                    content: s.i18n[`meta.og:image:alt.${t}`],
                  }),
                s.i18n[`meta.og:image:width.${t}`] &&
                  (0, l.jsx)("meta", {
                    property: "og:image:width",
                    content: s.i18n[`meta.og:image:width.${t}`],
                  }),
                s.i18n[`meta.og:image:height.${t}`] &&
                  (0, l.jsx)("meta", {
                    property: "og:image:height",
                    content: s.i18n[`meta.og:image:height.${t}`],
                  }),
                s.i18n[`meta.og:site_name.${t}`] &&
                  (0, l.jsx)("meta", {
                    property: "og:site_name",
                    content: s.i18n[`meta.og:site_name.${t}`],
                  }),
                s.i18n[`meta.article:tag.${t}`] &&
                  (0, l.jsx)("meta", {
                    property: "article:tag",
                    content: s.i18n[`meta.article:tag.${t}`],
                  }),
                s.i18n[`head.twitter:title.${t}`] &&
                  (0, l.jsx)("meta", {
                    name: "twitter:title",
                    content: s.i18n[`head.twitter:title.${t}`],
                  }),
                s.i18n[`meta.twitter:description.${t}`] &&
                  (0, l.jsx)("meta", {
                    name: "twitter:description",
                    content: s.i18n[`meta.twitter:description.${t}`],
                  }),
                s.i18n[`meta.twitter:keywords.${t}`] &&
                  (0, l.jsx)("meta", {
                    name: "twitter:keywords",
                    content: s.i18n[`meta.twitter:keywords.${t}`],
                  }),
                n &&
                  (0, l.jsx)("link", {
                    rel: "canonical",
                    href: n,
                  }),
                s.i18n["meta.robots"] &&
                  (0, l.jsx)("meta", {
                    name: "robots",
                    content: s.i18n["meta.robots"],
                  }),
              ],
            }),
            (0, l.jsx)("div", {
              style: {
                display: "none",
              },
              children: s.i18n[`seo.page.hidden.desc.${t}`],
            }),
          ],
        });
      };
    },
  },
]);
