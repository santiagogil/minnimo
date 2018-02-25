module.exports = function () {
  return `
html {
font-size: {{sizes.baseFontSize}}%;
line-height: {{sizes.ratio}};
background-color: {{colors.background}};
}

* {
  box-sizing: border-box;
}

img {
  margin-bottom: {{sizes.m}}rem;
}

@media (min-width: 960px) {
  img {
    width: 960px;
    height: {{sizes.imgheight}}px;
    overflow: hidden;
    }
}
@media (max-width: 960px) {
  img {
    width: 100vw;
    height: 66.7vw;
    overflow: hidden;
    }
}
body {
  hyphens: auto;
  overflow-wrap: break-word;
  font-variant-ligatures: common-ligatures;
  padding: 0;
  margin: 0 auto;
  color: {{colors.primary}};
  max-width: 960px;
}

address, article, aside, nav, dl, ol, ul {
}

article {
}

aside {
}

footer {
  color: {{colors.background}};
  background-color: {{colors.primary}};
  padding: 0;
  margin: 0;
}

header {
  padding: 0;
  margin: 0 0 {{sizes.xl}}rem 0;
}

h1, h2, h3, h4, h5, h6 {
  font-family: {{typefaces.title}};
  padding: 0;
  margin: 0 {{sizes.l}}rem 0 {{sizes.l}}rem;
  font-variant-ligatures: discretionary-ligatures;
  font-feature-settings: case;
  line-height: 1;
  font-weight: normal;
}

h1 {
  font-size: {{sizes.xxl}}rem;
  margin-bottom: {{sizes.l}}rem;
  font-weight: bold;
}

h2 {
  font-size: {{sizes.xl}}rem;
  margin-bottom: {{sizes.l}}rem;
}

h3 {
  font-size: {{sizes.l}}rem;
  margin-bottom: {{sizes.m}}rem;
}

h4 {
  font-size: {{sizes.s}}rem;
  margin-bottom: {{sizes.s}}rem;
}

h5 {
  font-size: {{sizes.xs}}rem;
  margin-bottom: {{sizes.xs}}rem;
}

h6 {
  font-size: {{sizes.xxs}}rem;
  margin-bottom: {{sizes.xxs}}rem;
}

hgroup {
  padding: 0;
  margin: 0 0 {{sizes.l}}rem 0;
}

nav {
}

section + section {
  margin: {{sizes.xxl}}rem 0 0 0;
}

p, li, dd, cite, small {
  font-family: {{typefaces.body}};
  font-variant-numeric: oldstyle-nums proportional-nums;
  width: 36rem;
  max-width: 90%;
}

dd {
}

div {
}

dl {
}

dt {
  font-family: {{typefaces.title}};
}

figcaption, caption {
  font-family: {{typefaces.caption}};
  font-size: {{sizes.s}}rem;
}

figure {
}

hr {
  background-color: {{colors.primary}};
  border: none;
  height: 1px;
}

li {
}

main {
}

ol {
  margin-left: {{sizes.l}}rem;
}

p {
  margin: 0 {{sizes.l}}rem {{sizes.l}}rem {{sizes.l}}rem;
}

p + p {
  text-indent: {{sizes.m}}rem;
  margin-top: -{{sizes.l}}rem;
}

pre {
  white-space: pre;
}

pre code {
    white-space: pre-wrap;
}

code {
    white-space: pre;
    font-family: monospace;
}

ul {
  margin-left: {{sizes.l}}rem;
}

ul, ol {
  list-style-position: outside;
  padding: 0;
}

ul  ul, ul  ol, ol  ol, ol  ul {
  padding-left: {{sizes.m}}rem;
}

a {
  color: {{colors.highlight}};
}

input, abbr, blockquote, code, kbd, q, samp, var {
  hyphens: none;
}

blockquote p {
  text-indent: -{{sizes.xxs}}rem;
}

blockquote {
  margin: 0;
  padding: 0;
  color: {{colors.secondary}};
}


abbr {
  text-transform: lowercase;
  font-variant-caps: small-caps;
  cursor: help;
}

b {
}

bdi {
}

bdo {
}

br {
}

cite {
}

code {
}

data {
}

dfn {
}

em {
}

i {
}

kbd {
}

mark {
}

q {
}

s {
}

samp {
}

small {
  font-size: {{sizes.s}}rem;
}

span {
}

strong {
}

sub {
}

sup {
}

time {
}

u {
}

var {
}

wbr {
}

del {
}

ins {
}

caption {
}

col {
}

colgroup {
}

tbody, var, code {
  font-variant-numeric: lining-nums tabular-nums;
}
table {
}

tbody {
  hyphens: auto;
}

td {
}

tfoot {
}

th {
}

thead {
}

tr {
}
`
}
