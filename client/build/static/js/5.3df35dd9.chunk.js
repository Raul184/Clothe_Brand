(this["webpackJsonpcloting-ecommerce"]=this["webpackJsonpcloting-ecommerce"]||[]).push([[5],{117:function(n,t,e){"use strict";e.r(t);var r=e(45),i=e(0),a=e.n(i),c=e(19),o=e(13),u=e(23),l=e(89),m=e(8),d=e(9);function p(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 800px){\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]);return p=function(){return n},n}function s(){var n=Object(m.a)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n  cursor: pointer;\n\n  &:hover {\n    color: grey;\n  }\n"]);return s=function(){return n},n}function f(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 800px){\n    align-items: center;\n  }\n"]);return f=function(){return n},n}var b=d.b.div(f()),v=d.b.h1(s()),g=d.b.div(p()),h=Object(u.g)((function(n){var t=n.title,e=n.items,r=n.history,i=n.match,c=n.routeName;return a.a.createElement(b,null,a.a.createElement(v,{onClick:function(){return r.push("".concat(i.path,"/").concat(c))}},t.toUpperCase()),a.a.createElement(g,null,e.filter((function(n,t){return t<4})).map((function(n){return a.a.createElement(l.a,{key:n.id,item:n})}))))})),x=e(88);function y(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return y=function(){return n},n}var j=d.b.div(y()),w=Object(o.b)({collections:x.b});t.default=Object(c.b)(w)((function(n){var t=n.collections;return a.a.createElement(j,null,t.map((function(n){var t=n.id,e=Object(r.a)(n,["id"]);return a.a.createElement(h,Object.assign({key:t},e))})))}))},89:function(n,t,e){"use strict";var r=e(0),i=e.n(r),a=e(19),c=e(27),o=e(8),u=e(9),l=e(44);function m(){var n=Object(o.a)(["\n  width: 10%;\n  text-align: right;\n"]);return m=function(){return n},n}function d(){var n=Object(o.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return d=function(){return n},n}function p(){var n=Object(o.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]);return p=function(){return n},n}function s(){var n=Object(o.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return s=function(){return n},n}function f(){var n=Object(o.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n\n  @media screen and (max-width: 800px){\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0px 10px;\n  }\n"]);return f=function(){return n},n}function b(){var n=Object(o.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n\n  @media screen and (max-width: 800px){\n    width: 40vw;\n    \n    &:hover {\n      .image {\n        opacity: unset;\n      } \n  \n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]);return b=function(){return n},n}var v=u.b.div(b()),g=Object(u.b)(l.a)(f()),h=u.b.div(s(),(function(n){var t=n.imageUrl;return"url(".concat(t,")")})),x=u.b.div(p()),y=u.b.span(d()),j=u.b.span(m());t.a=Object(a.b)(null,(function(n){return{addItem:function(t){return n(Object(c.a)(t))}}}))((function(n){var t=n.item,e=n.addItem,r=t.name,a=t.price,c=t.imageUrl;return i.a.createElement(v,null,i.a.createElement(h,{className:"image",imageUrl:c}),i.a.createElement(x,null,i.a.createElement(y,null,r),i.a.createElement(j,null,a)),i.a.createElement(g,{onClick:function(){return e(t)},inverted:!0},"Add to cart"))}))}}]);
//# sourceMappingURL=5.3df35dd9.chunk.js.map