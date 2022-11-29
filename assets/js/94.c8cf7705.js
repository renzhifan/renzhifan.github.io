(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{509:function(s,a,t){"use strict";t.r(a);var e=t(33),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"关闭-debug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭-debug"}},[s._v("#")]),s._v(" 关闭 debug")]),s._v(" "),t("ul",[t("li",[s._v("打开.env 文件，把 debug 设置为 false.")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("APP_ENV")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("local\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("APP_DEBUG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("APP_KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("base64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("ouIfKdFXfaIGZrH9qBCKAWupg4kVwuRsRGpeQnCRh4"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"配置信息缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置信息缓存"}},[s._v("#")]),s._v(" 配置信息缓存")]),s._v(" "),t("ul",[t("li",[s._v("使用以下 Artisan 自带命令，把 config 文件夹里所有配置信息合并到一个文件里，减少运行时文件的载入数量")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("php artisan config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("cache\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("上面命令会生成文件 bootstrap/cache/config.php，可以使用以下命令来取消配置信息缓存：")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("php artisan config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("clear\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("此命令做的事情就是把 bootstrap/cache/config.php 文件删除。")])]),s._v(" "),t("blockquote",[t("p",[s._v("注意：配置信息缓存不会随着更新而自动重载，所以，开发时候建议关闭配置信息缓存，一般在生产环境中使用，可以配合 "),t("a",{attrs:{href:"https://learnku.com/docs/laravel/5.1/envoy/1076",target:"_blank",rel:"noopener noreferrer"}},[s._v("Envoy 任务运行器"),t("OutboundLink")],1),s._v(" 一起使用。")])]),s._v(" "),t("h2",{attrs:{id:"路由缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由缓存"}},[s._v("#")]),s._v(" 路由缓存")]),s._v(" "),t("ul",[t("li",[s._v("路由缓存可以有效的提高路由器的注册效率，在大型应用程序中效果越加明显，可以使用以下命令：")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("php artisan route"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("cache\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("以上命令会生成 bootstrap/cache/routes.php 文件，需要注意的是，路由缓存不支持路由匿名函数编写逻辑，详见："),t("a",{attrs:{href:"https://learnku.com/docs/laravel/5.1/controllers/1043#%E8%B7%AF%E7%94%B1%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档 - 路由缓存"),t("OutboundLink")],1),s._v("。")])]),s._v(" "),t("ul",[t("li",[s._v("可以使用下面命令清除路由缓存：")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("php artisan route"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("clear\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("此命令做的事情就是把 bootstrap/cache/routes.php 文件删除。")])]),s._v(" "),t("blockquote",[t("p",[s._v("注意：路由缓存不会随着更新而自动重载，所以，开发时候建议关闭路由缓存，一般在生产环境中使用，可以配合 "),t("a",{attrs:{href:"https://learnku.com/docs/laravel/5.1/envoy/1076",target:"_blank",rel:"noopener noreferrer"}},[s._v("Envoy 任务运行器"),t("OutboundLink")],1),s._v("  一起使用。")])]),s._v(" "),t("h2",{attrs:{id:"类映射加载优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类映射加载优化"}},[s._v("#")]),s._v(" 类映射加载优化")]),s._v(" "),t("ul",[t("li",[s._v("optimize 命令把常用加载的类合并到一个文件里，通过减少文件的加载，来提高运行效率：")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("php artisan optimize\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("会生成 bootstrap/cache/compiled.php 和 bootstrap/cache/services.json 两个文件。")])]),s._v(" "),t("li",[t("p",[s._v("你可以可以通过修改 config/compile.php 文件来添加要合并的类。")])]),s._v(" "),t("li",[t("p",[s._v("在 production 环境中，参数 --force 不需要指定，文件就会自动生成。")])]),s._v(" "),t("li",[t("p",[s._v("要清除类映射加载优化，请运行以下命令：")])])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("php artisan optimize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("clear \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("此命令会删除上面 optimize 生成的两个文件。")])]),s._v(" "),t("blockquote",[t("p",[s._v("注意：此命令要运行在 php artisan config:cache 后，因为 optimize 命令是根据配置信息（如：config/app.php 文件的 providers 数组）来生成文件的。")])]),s._v(" "),t("h2",{attrs:{id:"自动加载优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动加载优化"}},[s._v("#")]),s._v(" 自动加载优化")]),s._v(" "),t("blockquote",[t("p",[s._v("此命令不止针对于 Laravel 程序，适用于所有使用 composer 来构建的程序。此命令会把 PSR-0 和 PSR-4 转换为一个类映射表，来提高类的加载速度。")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("composer dumpautoload "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("注意：php artisan optimize --force 命令里已经做了这个操作。")])]),s._v(" "),t("h2",{attrs:{id:"使用-memcached-来存储会话"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-memcached-来存储会话"}},[s._v("#")]),s._v(" 使用 Memcached 来存储会话")]),s._v(" "),t("blockquote",[t("p",[s._v("每一个 Laravel 的请求，都会产生会话，修改会话的存储方式能有效提高程序效率，会话的配置信息是 config/session.php，建议修改为 Memcached 或者 Redis 等专业的缓存软件：")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'driver'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'memcached'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"使用专业缓存驱动器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用专业缓存驱动器"}},[s._v("#")]),s._v(" 使用专业缓存驱动器")]),s._v(" "),t("blockquote",[t("p",[s._v("「缓存」是提高应用程序运行效率的法宝之一，默认缓存驱动是 file 文件缓存，建议切换到专业的缓存系统，如 Redis 或者 Memcached，不建议使用数据库缓存。")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'default'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'redis'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"数据库请求优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库请求优化"}},[s._v("#")]),s._v(" 数据库请求优化")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("数据库请求优化")]),s._v(" "),t("ul",[t("li",[s._v("数据关联模型读取时使用 "),t("a",{attrs:{href:"https://learnku.com/docs/laravel/5.1/eloquent-relationships/1085#%E9%A2%84%E5%8A%A0%E8%BD%BD",target:"_blank",rel:"noopener noreferrer"}},[s._v("延迟预加载"),t("OutboundLink")],1),s._v(" 和 "),t("a",{attrs:{href:"https://learnku.com/docs/laravel/5.1/eloquent-relationships/1085#%E9%A2%84%E5%8A%A0%E8%BD%BD",target:"_blank",rel:"noopener noreferrer"}},[s._v("预加载"),t("OutboundLink")],1),s._v(" ；")]),s._v(" "),t("li",[s._v("使用 "),t("a",{attrs:{href:"https://github.com/barryvdh/laravel-debugbar",target:"_blank",rel:"noopener noreferrer"}},[s._v("Laravel Debugbar"),t("OutboundLink")],1),s._v(" 或者 "),t("a",{attrs:{href:"https://learnku.com/laravel/t/23/use-clockwork-to-debug-laravel-app",target:"_blank",rel:"noopener noreferrer"}},[s._v("Clockwork"),t("OutboundLink")],1),s._v(" 留意每一个页面的总数据库请求数量；")])])]),s._v(" "),t("li",[t("p",[s._v("这里的篇幅只写到与 Laravel 相关的，其他关于数据优化的内容，请自行查阅其他资料。")])])]),s._v(" "),t("h2",{attrs:{id:"为数据集书写缓存逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为数据集书写缓存逻辑"}},[s._v("#")]),s._v(" 为数据集书写缓存逻辑")]),s._v(" "),t("blockquote",[t("p",[s._v("合理的使用 Laravel 提供的缓存层操作，把从数据库里面拿出来的数据集合进行缓存，减少数据库的压力，运行在内存上的专业缓存软件对数据的读取也远远快于数据库")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$posts")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("Cache")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("remember")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'index.posts'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$minutes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("Post")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'comments'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'tags'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'author'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'seo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereHidden")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("blockquote",[t("p",[s._v("remember 甚至连数据关联模型也都一并缓存了，多么方便呀。")])]),s._v(" "),t("h2",{attrs:{id:"使用即时编译器-jit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用即时编译器-jit"}},[s._v("#")]),s._v(" 使用即时编译器（JIT)")]),s._v(" "),t("ul",[t("li",[s._v("HHVM 是目前比较好的 JIT 实现，能轻轻松松的让你的应用程序在不用做任何修改的情况下，直接提高 50% 或者更高的性能。")])]),s._v(" "),t("h2",{attrs:{id:"开启-opcache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启-opcache"}},[s._v("#")]),s._v(" 开启 OpCache")]),s._v(" "),t("ul",[t("li",[s._v("PHPhub 之前做个一个实验，具体请见："),t("a",{attrs:{href:"https://learnku.com/laravel/t/301/using-opcache-to-enhance-the-performance-of-the-php-55-program",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 OpCache 提升 PHP 5.5+ 程序性能"),t("OutboundLink")],1),s._v("。")])]),s._v(" "),t("h3",{attrs:{id:"如何启用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何启用"}},[s._v("#")]),s._v(" 如何启用")]),s._v(" "),t("blockquote",[t("p",[s._v("虽然内建了，但是默认没有启用，下面是开启的布置，以这套环境为例子:")])]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("PHP "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v("\nUbuntu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.04")]),s._v("\nNginx\nPHP-FPM\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"修改-php-ini-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改-php-ini-文件"}},[s._v("#")]),s._v(" 修改 php.ini 文件")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/php5/fpm/php.ini\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"在文件最后面加入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在文件最后面加入"}},[s._v("#")]),s._v(" 在文件最后面加入:")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 开关打开\nopcache.enable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 可用内存, 酌情而定, 单位 megabytes\nopcache.memory_consumption"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 对多缓存文件限制, 命中率不到 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% 的话, 可以试着提高这个值\nopcache.max_accelerated_files"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Opcache 会在一定时间内去检查文件的修改时间, 这里设置检查的时间周期, 默认为 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", 定位为秒\nopcache.revalidate_freq"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("240")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"重启服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启服务器"}},[s._v("#")]),s._v(" 重启服务器")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" php5-fpm restart\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"前端资源合并"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端资源合并"}},[s._v("#")]),s._v(" 前端资源合并")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("作为优化的标准，一个页面只应该加载一个 CSS 和 一个 JS 文件，并且文件要能方便走 CDN，需要文件名随着修改而变化。")])]),s._v(" "),t("li",[t("p",[s._v("Laravel Elixir 提供了一套简便实用的方案，详细请见文档. "),t("a",{attrs:{href:"https://learnku.com/docs/laravel/5.1/elixir/1062",target:"_blank",rel:"noopener noreferrer"}},[s._v("Laravel Elixir 文档"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=r.exports}}]);