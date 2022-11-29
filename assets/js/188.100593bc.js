(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{605:function(t,a,e){"use strict";e.r(a);var r=e(33),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"docker方式部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker方式部署"}},[t._v("#")]),t._v(" Docker方式部署")]),t._v(" "),e("ul",[e("li",[t._v("首次安装命令")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("说明：\n上面命令下载并且启动了一个rabbitmq容器实例，开放了两个端口5672和15672， 15672端口是管理后台的端口号，5672是我们写代码的时候要访问的端口。")]),t._v(" "),e("p",[t._v("关于rabbitmq docker镜像版本，这里使用的是3-management版本\n可以到docker官方镜像仓库找最新版本\n地址："),e("a",{attrs:{href:"https://hub.docker.com/_/rabbitmq",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/_/rabbitmq"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"rabbitmq容器维护"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq容器维护"}},[t._v("#")]),t._v(" rabbitmq容器维护")]),t._v(" "),e("ul",[e("li",[t._v("关闭rabbitmq容器")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker stop rabbitmq\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("再次启动rabbitmq容器")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker start rabbitmq\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"rabbitmq管理后台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq管理后台"}},[t._v("#")]),t._v(" Rabbitmq管理后台")]),t._v(" "),e("p",[t._v("访问rabbitMQ管理后台地址："),e("a",{attrs:{href:"http://localhost:15672/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:15672/"),e("OutboundLink")],1),t._v("\n默认账号和密码：guest / guest")]),t._v(" "),e("h3",{attrs:{id:"效果图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#效果图"}},[t._v("#")]),t._v(" 效果图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/renzhifan/upic_img/master/uPic/2022/05/16/10-48-27-B0MVcN-TK7tDD.jpg",alt:"10-48-27-B0MVcN-TK7tDD"}})]),t._v(" "),e("h2",{attrs:{id:"docker-compose-方式部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-方式部署"}},[t._v("#")]),t._v(" docker-compose 方式部署")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone git@gitee.com:renzhifan/docker-rabbitmq-cluster.git rabbitmq\ncd rabbitmq\ncp .env.example .env\ndocker-compose up -d\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])])])}),[],!1,null,null,null);a.default=s.exports}}]);