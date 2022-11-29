(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{472:function(t,s,a){"use strict";a.r(s);var e=a(33),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"php中this、self和parent的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php中this、self和parent的区别"}},[t._v("#")]),t._v(" PHP中this、self和parent的区别")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("''")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("this")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是指向对象实例的一个指针，在实例化的时候来确定指向；")])]),t._v(" "),a("tr",[a("td",[t._v("self")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是对类本身的一个引用，一般用来指向类中的静态变量；")])]),t._v(" "),a("tr",[a("td",[t._v("parent")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是对父类的引用，一般使用parent来调用父类的构造函数。")])])])]),t._v(" "),a("h2",{attrs:{id:"解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[t._v("#")]),t._v(" 解析")]),t._v(" "),a("h3",{attrs:{id:"this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[t._v("#")]),t._v(" this")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("this")]),t._v("是在实例化的时候来确定指向谁。所以说，this就是"),a("strong",[t._v("指向当前对象实例的指针")]),t._v("，不指向任何其他对象或类。")])]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$obj1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"Home"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"self"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#self"}},[t._v("#")]),t._v(" self")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("self")]),t._v("是指向类本身，也就是"),a("strong",[t._v("self")]),t._v("是不指向任何已经实例化的对象，一般"),a("strong",[t._v("self")]),t._v("使用来指向类中的"),a("strong",[t._v("静态变量")]),t._v("。假如我们使用类里面的静态（用static定义）成员或常量（用const定义），我们也必须使用self来调用。还要注意使用self来调用静态变量必须使用:: (域运算符号)，见实例。")])]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("lastCount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$firstCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"parent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parent"}},[t._v("#")]),t._v(" parent")]),t._v(" "),a("p",[t._v("parent是指向父类的指针，一般我们使用parent来调用父类的构造函数。")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("parent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"Home"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);