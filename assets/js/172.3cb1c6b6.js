(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{584:function(s,e,a){"use strict";a.r(e);var n=a(33),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("mysql中的条件语句主要有if 和case when。")]),s._v(" "),a("h2",{attrs:{id:"if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if"}},[s._v("#")]),s._v(" IF")]),s._v(" "),a("p",[s._v("IF(expr1,expr2,expr3)：如果第一个条件为True,则返回第二个参数，否则返回第三个")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select if(author='Felix', 'yes', 'no') as AU from test;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"用case-when实现if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用case-when实现if"}},[s._v("#")]),s._v(" 用case when实现if")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select case author when 'Felix' then 'yes' else 'no' end as AU from test;  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"case-when-多重判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-when-多重判断"}},[s._v("#")]),s._v(" case when 多重判断")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select case author   \nwhen 'Felix' then 'good'\nwhen 'Tom' then 'top'\nwhen 'Bob' then 'down'\nelse 'do not know' \nend\nas AU \nfrom test;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"case-when-多重判断-另一种形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-when-多重判断-另一种形式"}},[s._v("#")]),s._v(" case when 多重判断，另一种形式")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select \ncase when author='Felix' then 'good'\nwhen author='Tom' then 'top'\nwhen author='Bob' then 'down'\nelse 'do not know'\nend \nas AU \nfrom test;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"ifnull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ifnull"}},[s._v("#")]),s._v(" ifnull")]),s._v(" "),a("p",[s._v("ifnull 判断是否为空：假如第一个参数为null，则返回第二个参数；"),a("strong",[s._v("否则直接返回第一个参数的值")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select ifnull(author,'yes') from test;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);