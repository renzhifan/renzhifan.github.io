(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{442:function(e,t,a){"use strict";a.r(t);var r=a(33),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"全局命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局命令"}},[e._v("#")]),e._v(" 全局命令")]),e._v(" "),a("blockquote",[a("p",[e._v("在windows 系统中在安装 VisualStudio Code 时选择设置PATH就可以在命令行全局使用了。")])]),e._v(" "),a("blockquote",[a("p",[e._v("在Mac系统中使用以下方式")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("修改 "),a("code",[e._v("vim ~/.bash_profile")]),e._v(" 如果安装了 "),a("code",[e._v("zsh")]),e._v(" 修改 "),a("code",[e._v("vim ~/.zshrc")])])]),e._v(" "),a("li",[a("p",[e._v("添加 "),a("code",[e._v("export PATH=/Applications/Visual\\ Studio\\ Code.app/Contents/Resources/app/bin:$PATH")])])])]),e._v(" "),a("h2",{attrs:{id:"重置软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重置软件"}},[e._v("#")]),e._v(" 重置软件")]),e._v(" "),a("p",[e._v("1.删除软件")]),e._v(" "),a("p",[e._v("2.苹果系统执行rm -rf ~/.vscode")]),e._v(" "),a("h3",{attrs:{id:"mac-彻底卸载vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-彻底卸载vscode"}},[e._v("#")]),e._v(" mac 彻底卸载vscode")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOME")]),e._v("/Library/Application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v(" Support/Code\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOME")]),e._v("/.vscode\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOME")]),e._v("/.vscode-insiders/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("blockquote",[a("p",[e._v("然后再你的应用中移除vscode应用程序即可")])]),e._v(" "),a("h2",{attrs:{id:"配置共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置共享"}},[e._v("#")]),e._v(" 配置共享")]),e._v(" "),a("p",[e._v("你完全不需要配置vscode，可以将其他用户的配置拿来使用，也可以将配置分享给其他电脑或用户，")]),e._v(" "),a("p",[e._v("首先安装插件 "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync",target:"_blank",rel:"noopener noreferrer"}},[e._v("settings-sync"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://book.renzhifan.cn/books/%E5%B7%A5%E5%85%B7/page/settings-sync-%E5%A6%82%E4%BD%95%E5%90%8C%E6%AD%A5vscode%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[e._v("settings-sync 如何同步vscode的自定义配置"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"提交配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交配置"}},[e._v("#")]),e._v(" 提交配置")]),e._v(" "),a("p",[e._v("1.安装完插件后会要求登录 "),a("code",[e._v("github")]),e._v(" 帐号")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/renzhifan/image/master/img/20210123220407.png",alt:""}})]),e._v(" "),a("p",[e._v("2.登录后在 "),a("code",[e._v("vscode")]),e._v(" 的界面中选择一个"),a("code",[e._v("gist")]),e._v(" 或 "),a("code",[e._v("skip")]),e._v(" 自动创建一个用来在github上保存配置")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/renzhifan/image/master/img/20210123220445.png",alt:""}})]),e._v(" "),a("p",[e._v("3.使用 "),a("code",[e._v("command+shift+p")]),e._v(" 在弹出的命令框中输入 "),a("code",[e._v("sync")]),e._v(" 并选择更新上传，好了配置已经可以上传了")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/renzhifan/image/master/img/20210123220511.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"下载配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载配置"}},[e._v("#")]),e._v(" 下载配置")]),e._v(" "),a("p",[e._v("下面来介绍其他电脑下载配置的方法")]),e._v(" "),a("p",[e._v("1.安装 "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync",target:"_blank",rel:"noopener noreferrer"}},[e._v("settings-sync"),a("OutboundLink")],1),e._v(" 插件")]),e._v(" "),a("p",[e._v("2.和上面步骤一样登录"),a("code",[e._v("github")]),e._v(" 并选择和提交配置电脑一样的 "),a("code",[e._v("gist")])]),e._v(" "),a("p",[e._v("2.使用 "),a("code",[e._v("command+shift+p")]),e._v(" 在弹出的命令框中输入 "),a("code",[e._v("sync")]),e._v(" 并选择下载配置")]),e._v(" "),a("h2",{attrs:{id:"公共配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公共配置"}},[e._v("#")]),e._v(" 公共配置")]),e._v(" "),a("blockquote",[a("p",[e._v("如果我们想使用别人的配置，首先对方需要提供给你 "),a("code",[e._v("gist")]),e._v(" 。")])]),e._v(" "),a("p",[e._v("1.将settings sync 插件初始化")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/renzhifan/image/master/img/20210123220544.png",alt:""}})]),e._v(" "),a("p",[e._v("2.在命令窗口选择下载配置")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/renzhifan/image/master/img/20210123220924.png",alt:""}})]),e._v(" "),a("p",[e._v("3.这步不需要登录github 了，选择 Download Public Gist 并在弹出的窗口中输入别人分享的 gist")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/renzhifan/image/master/img/20210123220614.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"我的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我的配置"}},[e._v("#")]),e._v(" 我的配置")]),e._v(" "),a("blockquote",[a("p",[e._v("下面是我的 gist 分享给大家")])]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("bd8a7f74de7aa443bcea631ef51174fd\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"重启vscode工具完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启vscode工具完成"}},[e._v("#")]),e._v(" 重启vscode工具完成")]),e._v(" "),a("h2",{attrs:{id:"代码片段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码片段"}},[e._v("#")]),e._v(" 代码片段")]),e._v(" "),a("p",[a("code",[e._v("vscode")]),e._v(" 提供自定义代码片段功能非常方便，同时结合"),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync",target:"_blank",rel:"noopener noreferrer"}},[e._v("Settings Sync 在不同电脑间同步配置"),a("OutboundLink")],1),e._v(" 进行同步后，可以在多台电脑中共享代码片段。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/renzhifan/image/master/img/20210123221106.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[e._v("#")]),e._v(" 参数说明")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("说明")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("prefix")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("这个参数是使用代码段的快捷入口,比如这里的log在使用时输入log会有智能感知.")])]),e._v(" "),a("tr",[a("td",[e._v("body")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("这个是代码段的主体.需要设置的代码放在这里,字符串间换行的话使用\\r\\n换行符隔开.注意如果值里包含特殊字符需要进行转义.多行语句的以,隔开")])]),e._v(" "),a("tr",[a("td",[e._v("$1")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("这个为光标的所在位置.")])]),e._v(" "),a("tr",[a("td",[e._v("$2")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("使用这个参数后会光标的下一位置将会另起一行,按tab键可进行快速切换,还可以有$3,$4,$5.....")])]),e._v(" "),a("tr",[a("td",[e._v("description")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("代码段描述,在使用智能感知时的描述")])])])]),e._v(" "),a("h3",{attrs:{id:"操作实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作实例"}},[e._v("#")]),e._v(" 操作实例")]),e._v(" "),a("p",[e._v("下面自定义一个代码片段，当输入 bd 并按 tab 键后自动输出 baidu.com。")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Print to console"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"prefix"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"bd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"body"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"baidu.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"baidu.com"')]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h3",{attrs:{id:"多段文字配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多段文字配置"}},[e._v("#")]),e._v(" 多段文字配置")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"表关联"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"prefix"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hd-foreign"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"body"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"\\\\$table->unsignedBigInteger('package_id')->nullable()->comment('套餐编号');\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"\\\\$table->foreign('package_id')->references('id')->on('packages')->onDelete('cascade');\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"多表关联"')]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("h2",{attrs:{id:"常用插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用插件"}},[e._v("#")]),e._v(" 常用插件")]),e._v(" "),a("p",[e._v("1."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP IntelliSense PHP"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("2."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP Intelephense"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("3."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-pack",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP Extension Pack PHP扩展集合"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("4."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP Debug PHP调试插件"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("5."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=junstyle.php-cs-fixer",target:"_blank",rel:"noopener noreferrer"}},[e._v("php cs fixerPHP代码格式化插件"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("6."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel-blade",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Blade Snippets"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("7."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=stef-k.laravel-goto-controller",target:"_blank",rel:"noopener noreferrer"}},[e._v("laravel-goto-controller"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("8."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("9."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel-blade",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel代码片段"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("10."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ryannaddy.laravel-artisan",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Artisan"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("11."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced",target:"_blank",rel:"noopener noreferrer"}},[e._v("Markdown Preview Enhanced Markdown预览"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("12."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime",target:"_blank",rel:"noopener noreferrer"}},[e._v("WakaTime记录工作数据报表，需要到官方网站注册并获取key"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("13."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=octref.vetur",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vetur一个好用的Vue.js开发插件"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("14."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code Runner 支持多种语言的代码的立即执行"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("15."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code Spell Checker 用于检测代码语法"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("16."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=lihui.vs-color-picker",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Color Picker 选择颜色"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("17."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=mikey.vscode-fileheader",target:"_blank",rel:"noopener noreferrer"}},[e._v("vscode-fileheader 设置文件头"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("18."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag",target:"_blank",rel:"noopener noreferrer"}},[e._v("auto-close-tag 自动结束HTML标签"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("19."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",target:"_blank",rel:"noopener noreferrer"}},[e._v("auto-rename-tag 自动更改HTML标签名"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("20."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less",target:"_blank",rel:"noopener noreferrer"}},[e._v("easy-less 编译LESS"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("21."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-faker",target:"_blank",rel:"noopener noreferrer"}},[e._v("faker 随机生成图片等信息"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("22."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ericadamski.carbon-now-sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("carbon-now-sh 生成漂亮的代码截图"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("23."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag",target:"_blank",rel:"noopener noreferrer"}},[e._v("Highlight Matching 高亮匹配标签"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("24."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync",target:"_blank",rel:"noopener noreferrer"}},[e._v("Settings Sync 在不同电脑间同步配置"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("25."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code Runner 编辑器中运行代码"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("26."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Live Server 浏览器自动刷新"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("27."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode",target:"_blank",rel:"noopener noreferrer"}},[e._v("tabnine AI代码自动补全"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("28."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=jeff-hykin.polacode-2019",target:"_blank",rel:"noopener noreferrer"}},[e._v("将代码生成漂亮的图片"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("29."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prettier 代码格式化"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("30."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=percygrunwald.vscode-intellij-recent-files",target:"_blank",rel:"noopener noreferrer"}},[e._v("vscode-intellij-recent-files 快速在最近编辑文件切换"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("31."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bracket Pair Colorizer 2 代码块快速匹配"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("32."),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",target:"_blank",rel:"noopener noreferrer"}},[e._v("EditorConfig 格式化配置Laravel 开发必装"),a("OutboundLink")],1)]),e._v(" "),a("h1",{attrs:{id:"settings-sync-如何同步vscode的自定义配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings-sync-如何同步vscode的自定义配置"}},[e._v("#")]),e._v(" settings-sync 如何同步vscode的自定义配置")]),e._v(" "),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[e._v("#")]),e._v(" 说明")]),e._v(" "),a("p",[a("code",[e._v("vscode")]),e._v("本身只是一个编辑器，是没有自己的账户体系的，所以我们个性化的信息都需要"),a("code",[e._v("Settings Sync")]),e._v("这个插件来做支持")]),e._v(" "),a("blockquote",[a("p",[e._v("在进入Github后按照下列顺序寻找设置")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Go to Settings")])]),e._v(" "),a("li",[a("p",[e._v("Developer settings")])]),e._v(" "),a("li",[a("p",[e._v("Personal access tokens")])]),e._v(" "),a("li",[a("p",[e._v("Generate New Token")])])]),e._v(" "),a("h2",{attrs:{id:"详细步骤如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#详细步骤如下"}},[e._v("#")]),e._v(" 详细步骤如下")]),e._v(" "),a("p",[e._v("1.进入你的"),a("code",[e._v("github")]),e._v("->点击你的用户头像，进入"),a("code",[e._v("Settings")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/renzhifan/image/master/img/20210123221141.png",alt:""}})]),e._v(" "),a("p",[e._v("2.接着进入左下角的"),a("code",[e._v("Developer settings")]),e._v("->随后进入左侧三列菜单最后一栏的"),a("code",[e._v("Personal access tokens")]),e._v("->新建一个"),a("code",[e._v("token")]),e._v("：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/renzhifan/image/master/img/20210123221216.png",alt:""}})]),e._v(" "),a("p",[e._v("3.如图设置两项后点击下面的完成：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/renzhifan/image/master/img/20210123221243.png",alt:""}})]),e._v(" "),a("p",[e._v("4.保存这个token值")]),e._v(" "),a("p",[e._v("5.转到vscode")]),e._v(" "),a("p",[e._v("6.按"),a("code",[e._v("shift+alt+u")]),e._v("在弹出窗里输入你的"),a("code",[e._v("token")]),e._v(",然后等下会在你的用户设置中生成"),a("code",[e._v("gist")]),e._v("值这个值用来你再另一台电脑上来下载你的设置")]),e._v(" "),a("p",[e._v("7.如果你已经下载过别人的配置 请先充值本地的sync配置  再重新配置")])])}),[],!1,null,null,null);t.default=s.exports}}]);