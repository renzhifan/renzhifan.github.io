(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{626:function(s,a,n){"use strict";n.r(a);var e=n(33),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("优先级队列，顾名思义，优先级高的消息具备优先被消费的特权。")]),s._v(" "),n("p",[s._v("RabbitMQ优先级队列注意点：")]),s._v(" "),n("p",[s._v("只有当消费者不足，不能及时进行消费的情况下，优先级队列才会生效。\nRabbitMQ3.5版本以后才支持优先级队列。")]),s._v(" "),n("h2",{attrs:{id:"rabbitmq优先级队列使用步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq优先级队列使用步骤"}},[s._v("#")]),s._v(" RabbitMQ优先级队列使用步骤")]),s._v(" "),n("ul",[n("li",[s._v("设置队列最大优先级")]),s._v(" "),n("li",[s._v("设置消息优先级")])]),s._v(" "),n("h3",{attrs:{id:"设置队列最大优先级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置队列最大优先级"}},[s._v("#")]),s._v(" 设置队列最大优先级")]),s._v(" "),n("blockquote",[n("p",[s._v("在声明队列的时候，通过队列属性（x-max-priority）设置队列的最大优先级，优先级的最大值为255，官方建议最好在1到10之间。\nGolang设置方式:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 队列属性\n    props := make(map[string]interface{})\n    // 设置队列最大优先级\n    props["x-max-priority"] = 10\n\n// 声明队列\n    q, err := ch.QueueDeclare(\n        "exchange.hello", // 队列名\n        true,   // 队列持久化\n        false,   // delete when unused\n        false,   // exclusive\n        false,   // no-wait\n        props,     // 设置队列属性\n    )\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"设置消息优先级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置消息优先级"}},[s._v("#")]),s._v(" 设置消息优先级")]),s._v(" "),n("blockquote",[n("p",[s._v("Golang设置方式:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('err = ch.Publish(\n            "exchange",     // 交换机\n            "", // 路由参数\n            false,\n            false,\n            amqp.Publishing{\n                Priority:5, // 设置消息优先级\n                DeliveryMode:2,  // 消息投递模式，1代表非持久化，2代表持久化，\n                ContentType: "text/plain",\n                Body:        []byte(body),\n            })\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);