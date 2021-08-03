(window.webpackJsonp=window.webpackJsonp||[]).push([[570],{2013:function(t,a,e){"use strict";e.r(a);var s=e(27),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"setup-via-pm2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-via-pm2"}},[t._v("#")]),t._v(" Setup via PM2")]),t._v(" "),e("p",[t._v("PM2 is a daemon process manager that will help you manage and keep your application online. It allows you to wrap a Node.js application into a service. You can deploy n8n via PM2.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("We don't officially support running n8n via PM2. You should follow the instructions mentioned "),e("RouterLink",{attrs:{to:"/reference/server-setup.html"}},[t._v("here")]),t._v(" to deploy n8n via Docker.")],1)]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("p",[t._v("To run n8n via PM2, you need to have the following software installed:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Node.js and npm:")]),t._v(" You can find instructions on how to install both using nvm (Node Version Manager) "),e("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(". The current minimum version is "),e("code",[t._v("14.15")]),t._v(". In case you already have installed Node.js, you can check your current version with the following command:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("node -v\n")])])]),e("ul",[e("li",[e("strong",[t._v("PM2:")]),t._v(" You can install PM2 globally with the following command:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pm2 -g\n")])])]),e("ul",[e("li",[e("strong",[t._v("n8n:")]),t._v(" You can install n8n globally with the following command:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" n8n -g\n")])])]),e("h2",{attrs:{id:"start-n8n"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-n8n"}},[t._v("#")]),t._v(" Start n8n")]),t._v(" "),e("p",[t._v("To start the n8n service via PM2, execute the following command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("pm2 start n8n\n")])])]),e("h3",{attrs:{id:"auto-start-on-machine-restarts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auto-start-on-machine-restarts"}},[t._v("#")]),t._v(" Auto-start on machine restarts")]),t._v(" "),e("p",[t._v("PM2 can generate startup scripts and configure them to keep your process list intact across expected or unexpected machine restarts.")]),t._v(" "),e("p",[t._v("Refer to the official "),e("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/startup/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PM2 documetation"),e("OutboundLink")],1),t._v(" to learn about configuring the auto-start script.")]),t._v(" "),e("h2",{attrs:{id:"update-n8n"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-n8n"}},[t._v("#")]),t._v(" Update n8n")]),t._v(" "),e("p",[t._v("To update n8n, follow the steps mentioned below:")]),t._v(" "),e("ol",[e("li",[t._v("Stop the n8n service")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("pm2 stop n8n\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Install the latest version of n8n")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g n8n@latest\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Restart the n8n service")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("pm2 restart n8n\n")])])]),e("h2",{attrs:{id:"configurations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[t._v("#")]),t._v(" Configurations")]),t._v(" "),e("p",[t._v("You can set environment variables to override the default n8n configurations. For example, if you want to enable basic authentication for your n8n service, use the following command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_BASIC_AUTH_ACTIVE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_BASIC_AUTH_USER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("USERNAME "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_BASIC_AUTH_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PASSWORD pm2 restart n8n --update-env\n")])])]),e("p",[t._v("You can learn more about all the possible configurations "),e("RouterLink",{attrs:{to:"/reference/configuration.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),e("p",[t._v("If you want to set these configurations via a file, refer to the "),e("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/application-declaration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PM2 documentation"),e("OutboundLink")],1),t._v(" to learn more.")]),t._v(" "),e("h2",{attrs:{id:"faqs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[t._v("#")]),t._v(" FAQs")]),t._v(" "),e("h3",{attrs:{id:"how-to-run-n8n-with-pm2-on-windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-run-n8n-with-pm2-on-windows"}},[t._v("#")]),t._v(" How to run n8n with PM2 on Windows?")]),t._v(" "),e("p",[t._v("To run n8n via PM2 on Windows, execute the command "),e("code",[t._v("pm2 start n8n")]),t._v(" from the start directory "),e("code",[t._v("C:\\Users\\%AppData%\\Roaming\\npm\\node_modules\\n8n\\bin")]),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("Note:")]),t._v(" If you have installed n8n in a different directory execute the above-mentioned command from that directory.")])])}),[],!1,null,null,null);a.default=n.exports}}]);