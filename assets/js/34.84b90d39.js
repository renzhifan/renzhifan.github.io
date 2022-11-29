(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{448:function(s,n,a){"use strict";a.r(n);var t=a(33),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"主模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主模块"}},[s._v("#")]),s._v(" 主模块")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置用户或者组，默认为nobody nobody。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#user www www;  ")]),s._v("\n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Nginx开启的worker进程数，建议为CPU的核数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#worker_processes 2; ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定nginx进程运行文件存放地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#pid /nginx/pid/nginx.pid;")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定日志路径，级别。这个设置可以放入全局块、http块、server块，级别以此为：debug|info|notice|warn|error|crit|alert|emerg")]),s._v("\nerror_log log/error.log debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可以在任意地方使用include指令实现配置文件的包含，类似于apache中的include方法，可减少主配置文件长度。")]),s._v("\ninclude vhosts/*.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"事件模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件模块"}},[s._v("#")]),s._v(" 事件模块")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("events "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置网路连接序列化，防止惊群现象发生，默认为on")]),s._v("\n    accept_mutex on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认: 500ms 如果一个进程没有互斥锁，它将延迟至少多长时间。默认情况下，延迟是500ms 。")]),s._v("\n    accept_mutex_delay 100ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置一个进程是否同时接受多个网络连接，默认为off")]),s._v("\n    multi_accept on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#事件驱动模型，select|poll|kqueue|epoll|resig|/dev/poll|eventport，不建议设置，nginx会自行选择")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#use epoll;")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#最大连接数，默认为512")]),s._v("\n    worker_connections  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"http-部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-部分"}},[s._v("#")]),s._v(" http 部分")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("http "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件扩展名与文件类型映射表")]),s._v("\n    include       mime.types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认文件类型，默认为text/plain")]),s._v("\n    default_type  application/octet-stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#取消服务日志 ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#access_log off; ")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许sendfile方式传输文件，默认为off，可以在http块，server块，location块。")]),s._v("\n    sendfile on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   \n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#每个进程每次调用传输数量不能大于设定的值，默认为0，即不设上限。")]),s._v("\n    sendfile_max_chunk 100k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#连接超时时间，默认为75s，可以在http，server，location块。")]),s._v("\n    keepalive_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启gzip资源压缩")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v("  on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 负载均衡，详细可看了一篇文章：https://learnku.com/articles/36737")]),s._v("\n    upstream blog "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("   \n        server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.167")]),s._v(".20.19:8081"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.121:8080 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设定请求缓冲")]),s._v("\n    client_header_buffer_size    128k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    large_client_header_buffers  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 128k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#上传文件的大小限制  默认1m")]),s._v("\n    client_max_body_size 8m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#单连接请求上限次数。")]),s._v("\n        keepalive_requests "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("120")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#监听端口")]),s._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   \n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#监听地址")]),s._v("\n        server_name  blog.13sai.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设定日志格式")]),s._v("\n        log_format  main  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$remote_addr - $remote_user [$time_local] \"$request\" '")]),s._v("\n                      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$status $body_bytes_sent \"$http_referer\" '")]),s._v("\n                      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"$http_user_agent" "$http_x_forwarded_for"\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        access_log  /data/logs/access.log  main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根目录")]),s._v("\n        root /www/web/public"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义错误提示页面")]),s._v("\n        error_page   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v(" /50x.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        location /static/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#root与alias主要区别在于nginx如何解释location后面的uri，这会使两者分别以不同的方式将请求映射到服务器文件上。")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#root的处理结果是：root路径＋location路径")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#alias的处理结果是：使用alias路径替换location路径")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" /www/static/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#过期30天，静态文件不怎么更新，过期可以设大一点,如果频繁更新，则可以设置得小一点。")]),s._v("\n            expires 30d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 处理php请求到fpm端口")]),s._v("\n        location ~ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".php$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            fastcgi_pass   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            fastcgi_index  index.php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            fastcgi_param  SCRIPT_FILENAME  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$document_root")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fastcgi_script_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            include        fastcgi_params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            proxy_set_header Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_set_header  X-Real-IP  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_pass  http://blog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#请求转向blog 定义的服务器列表 ")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁止访问文件")]),s._v("\n        location ~ /.git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            deny all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            allow "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许的ip ")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br")])]),a("h3",{attrs:{id:"部分参数详细说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部分参数详细说明"}},[s._v("#")]),s._v(" 部分参数详细说明")]),s._v(" "),a("ul",[a("li",[s._v("server_name")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.首先选择所有字符串完全匹配的server_name，如 blog.13sai.com 。\n2.其次选择通配符在前面的server_name，如 *.13sai.com。\n3.再次选择通配符在后面的server_name，如www.13sai.* 。 \n4.最后选择使用正则表达式才匹配的server_name，如 ~^\\.sai\\.com$\n\n如果都不匹配\n1、优先选择listen配置项后有default或default_server的 \n2、找到匹配listen端口的第一个server块\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("location")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("location\n语法: location[=|~|~*|^~|@]/uri/{...}\n配置块: server location会尝试根据用户请求中的URI来匹配上面的/uri表达式，如果可以匹配，就选择 location{}块中的配置来处理用户请求。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("location 表达式类型")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("~ 表示执行一个正则匹配，区分大小写;\n~* 表示执行一个正则匹配，不区分大小写;\n^~ 表示普通字符匹配。使用前缀匹配。如果匹配成功，则不再匹配其他location; \n= 进行普通字符精确匹配。也就是完全匹配;\n@ 它定义一个命名的 location，使用在内部定向时，例如 error_page, try_files\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("优先级:")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("等号类型 (=) 的优先级最高。一旦匹配成功，则不再查找其他匹配项")])]),s._v(" "),a("li",[a("p",[s._v("前缀普通匹配 (^~) 优先级次之。不支持正则表达式。使用前缀匹配，如果有多个 location 匹配的话，则使用表达式最长的那个")])]),s._v(" "),a("li",[a("p",[s._v("正则表达式类型 (~ ~*) 的优先级次之。一旦匹配成功，则不再查找其他匹配项")])]),s._v(" "),a("li",[a("p",[s._v("常规字符串匹配，如果有多个 location 匹配的话，则使用表达式最长的那个")])]),s._v(" "),a("li",[a("p",[s._v("return")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("语法:return code [text] return code URL;\nreturn URL;\n配置块:server，location，if\n该指令用于结束规则的执行并返回状态吗给客户端。\n状态码包括:\n204(No Content)、\n400(Bad Request)、\n402(Payment Required)、\n403(Forbidden) \n404(Not Found)、\n405(Method Not Allowed)、\n406(Not Acceptable)、 \n408(Request Timeout)、\n410(Gone)、\n411(Length Required)、\n413(Request Entity Too Large)、\n416(Requested Range Not Satisfiable)、 500(Internal Server Error)、\n501(Not Implemented)、\n502(Bad Gateway)、 \n503(Service Unavailable)\n504(Gateway Timeout)。\n\n例如，示例，如果访问的URL以.sh .bash 结尾，返回状态码403 \nlocation ~ .*\\.(sh|bash)?$ {\n    return 403;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("ul",[a("li",[s._v("rewrite")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("语法:rewrite regex replacement [flag]; \n默认值:—\n配置块:server, location, if\nrewrite是实现URL重写的关键指令，根据regex(正则表达式)部分内容，重定向到replacement，结尾是flag标记。 正则:perl兼容正则表达式语句进行规则匹配\n替代内容:将正则匹配的内容替换成replacement\nflag标记:rewrite支持的flag标记\n\n执行顺序：\n1. 执行server块的rewrite指令(这里的块指的是server关键字后{}包围的区域，其它xx块类似)\n2. 执行location匹配\n3. 执行选定的location中的rewrite指令\n如果其中某步URI被重写，则重新循环执行1-3，直到找到真实存在的文件\n\n如果循环超过10次，则返回500 Internal Server Error错误\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ul",[a("li",[s._v("if 指令")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("语法：if(condition){...}\n默认值：无\n配置块：server,location\n对给定的条件condition进行判断。如果为真，大括号内的rewrite指令将被执行。\nif条件(conditon)可以是如下任何内容:\n\n一个变量名；false如果这个变量是空字符串或者以0开始的字符串；\n使用= ,!= 比较的一个变量和字符串\n是用~， ~*与正则表达式匹配的变量，如果这个正则表达式中包含}，;则整个表达式需要用\" 或' 包围\n使用-f ，!-f 检查一个文件是否存在\n使用-d, !-d 检查一个目录是否存在\n使用-e ，!-e 检查一个文件、目录、符号链接是否存在\n使用-x ， !-x 检查一个文件是否可执行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[s._v("if 实例")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("if ($http_user_agent~*(mobile|nokia|iphone|ipad|android|samsung|htc|blackberry)) {\n    rewrite ^.+ /mobile last; ＃跳转到手机站\n}\n\nif ($request_method = POST) {\n    return 405;\n}\n\nif ($slow) {\n    limit_rate 10k;\n}\n\nif ($invalid_referer) {\n    return 403;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ul",[a("li",[s._v("last & break")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("（1）last 和 break 当出现在location 之外时，两者的作用是一致的没有任何差异。\n注意一点就是，他们会跳过所有的在他们之后的rewrite 模块中的指令，去选择自己匹配的location\n（2）last 和 break 当出现在location 内部时，两者就存在了差异\n-- last: 使用了last 指令，rewrite 后会跳出location 作用域，重新开始再走一次刚刚的行为\n-- break: 使用了break 指令，rewrite后不会跳出location 作用域。它的生命也在这个location中终结。\n\n解释通俗易懂：\n\nlast：\n        重新将rewrite后的地址在server标签中执行\nbreak：\n        将rewrite后的地址在当前location标签中执行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[s._v("permanent & redirect:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("permanent: 永久性重定向。请求日志中的状态码为301\nredirect:临时重定向。请求日志中的状态码为302\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("从实现功能的角度上去看，permanent 和 redirect 是一样的。不存在好坏。也不存在什么性能上的问题。但是对 seo 会有影响，这里要根据需要做出选择\n在 permanent 和 redirect 中提到了 状态码 301 和 302。")]),s._v(" "),a("p",[s._v("记住：last 和 break 想对于的访问日志的请求状态码为 200")]),s._v(" "),a("p",[s._v("当你打开一个网页，同时打开 debug 模式时，会发现 301 和 302 时的行为是这样的。")]),s._v(" "),a("p",[s._v("第一个请求 301 或者 302 后，浏览器重新获取了一个新的 URL ，然后会对这个新的 URL 重新进行访问。所以当你配置的是 permanent 和 redirect , 你对一个 URL 的访问请求，落到服务器上至少为 2 次；而当你配置了 last 或者是 break 时，你最终的 URL 确定下来后，不会将这个 URL 返回给浏览器，而是将其扔给了 fastcgi_pass 或者是 proxy_pass 指令去处理。请求一个 URL ，落到服务器上的次数就为 1 次。")]),s._v(" "),a("p",[s._v("注意：配置 last 在跨域的时候效果和 redirect 一致，都是返回 302 状态码，请求地址也发生改变")]),s._v(" "),a("h2",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[s._v("#")]),s._v(" 应用")]),s._v(" "),a("h3",{attrs:{id:"估算并发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#估算并发"}},[s._v("#")]),s._v(" 估算并发")]),s._v(" "),a("ul",[a("li",[s._v("nginx 作为 http 服务器的时候")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("max_clients = worker_processes * worker_connections/2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("nginx 作为反向代理服务器的时候：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("max_clients = worker_processes * worker_connections/4  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"限制每个-ip-的并发连接数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限制每个-ip-的并发连接数"}},[s._v("#")]),s._v(" 限制每个 IP 的并发连接数")]),s._v(" "),a("blockquote",[a("p",[s._v("demo: 定义一个叫 “two” 的记录区，总容量为 10M（超过大小将请求失败，以变量 $binary_remote_addr 作为会话的判断基准（即一个地址一个会话）。 限制 /download/ 目录下，一个会话只能进行一个连接。 简单点，就是限制 /download/ 目录下，一个 IP 只能发起一个连接，多过一个，一律 503")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http {\n    ...\n    limit_conn_zone $binary_remote_addr zone=two:10m;\n\n    server {\n        ...\n\n        location /download {\n            limit_conn   two  1;\n        }\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"限流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限流"}},[s._v("#")]),s._v(" 限流")]),s._v(" "),a("blockquote",[a("p",[s._v("demo: 定义一个叫 “one” 的记录区，占用空间大小为 10m（超过大小将请求失败），平均处理的请求频率不能超过每秒一次，也可以设置分钟速率")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http {\n    ...\n\n    limit_req_zone  $binary_remote_addr  zone=one:10m  rate=1r/s;\n\n    server {\n        ...\n\n        location / {\n            #缓存区队列burst=5个,nodelay表示不延期(超过的请求失败)，即每秒最多可处理rate+burst个,同时处理rate个。\n            limit_req zone=one burst=5 nodelay; \n        }\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"白名单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#白名单"}},[s._v("#")]),s._v(" 白名单")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('http{\n    ...\n\n    #判断客户端的ip地址是否在白名单列表当中,如果返回为0,则在白名单列表当中,否则返回为1\n    geo $whiteIpList {\n        default  1;\n        118.24.109.254 0;\n        47.98.147.0/24 1;\n        #可以引入一些白名单配置\n        include \'whiteIP.conf\'\n    }\n\n    #如果不在白名单之内,返回客户端的二进制的ip地址\n    map $whiteIpList  $limit {\n        default  "";\n        1   $binary_remote_addr;\n        0   "";\n    }\n\n    #如果返回的是空字符串那么速率限制会失效\n    limit_req_zone $limit zone=test:2m rate=1r/m;\n\n    ...\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h3",{attrs:{id:"防盗链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防盗链"}},[s._v("#")]),s._v(" 防盗链")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http {\n    ...\n\n    server {\n        ...\n        #valid_referers后面的referer列表进行匹配，如果匹配到了就invalid_referer字段值为0 否则设置该值为1\n        location ~* \\.(gif|jpg|png|swf|flv)$ {\n            valid_referers none blocked *.13sai.com;\n            if ($invalid_referer) {\n                rewrite ^/ blog.13sai.com\n            }\n        }\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);