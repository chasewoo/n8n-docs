(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1427:function(e,t,o){e.exports=o.p+"assets/img/workflow.a17c5561.png"},1428:function(e,t,o){e.exports=o.p+"assets/img/WooCommerceTrigger_node.4fa1a1ae.png"},1429:function(e,t,o){e.exports=o.p+"assets/img/Mattermost_node.e3df31f4.png"},1998:function(e,t,o){"use strict";o.r(t);var r=o(27),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"woocommerce-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#woocommerce-trigger"}},[e._v("#")]),e._v(" WooCommerce Trigger")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://woocommerce.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WooCommerce"),r("OutboundLink")],1),e._v(" is a customizable, open-source e-commerce plugin for WordPress.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/WooCommerce/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"events"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),r("ul",[r("li",[e._v("coupon.created")]),e._v(" "),r("li",[e._v("coupon.updated")]),e._v(" "),r("li",[e._v("coupon.deleted")]),e._v(" "),r("li",[e._v("customer.created")]),e._v(" "),r("li",[e._v("customer.updated")]),e._v(" "),r("li",[e._v("customer.deleted")]),e._v(" "),r("li",[e._v("order.created")]),e._v(" "),r("li",[e._v("order.updated")]),e._v(" "),r("li",[e._v("order.deleted")]),e._v(" "),r("li",[e._v("product.created")]),e._v(" "),r("li",[e._v("product.updated")]),e._v(" "),r("li",[e._v("product.deleted")])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to send a message on Mattermost when an order is created in WooCommerce. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/848",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:""}},[e._v("WooCommerce Trigger")])]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Mattermost/"}},[e._v("Mattermost")])],1)]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1427),alt:"A workflow with the WooCommerce Trigger node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-woocommerce-trigger-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-woocommerce-trigger-node"}},[e._v("#")]),e._v(" 1. WooCommerce Trigger node")]),e._v(" "),r("p",[e._v("This node will trigger the workflow when an order is created in your WooCommerce store.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the WooCommerce Trigger node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/WooCommerce/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'order.created' from the "),r("em",[r("strong",[e._v("Event")])]),e._v(" dropdown list. This will trigger the workflow when a user sends a message.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node triggers the workflow when a new order gets created.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1428),alt:"Using the WooCommerce Trigger node to trigger the workflow"}})]),e._v(" "),r("h3",{attrs:{id:"_2-mattermost-post-message"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-mattermost-post-message"}},[e._v("#")]),e._v(" 2. Mattermost (post: message)")]),e._v(" "),r("p",[e._v("This node will send a message to a Mattermost channel sharing the details of the order that was created in WooCommerce.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Mattermost node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Mattermost/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select the channel from the "),r("em",[r("strong",[e._v("Channel ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to "),r("em",[r("strong",[e._v("Message")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter the following message in the "),r("em",[r("strong",[e._v("Expression")])]),e._v(" editor")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{{$node["WooCommerce Trigger"].json["billing"]["first_name"]}} bought {{$node["WooCommerce Trigger"].json["line_items"][0]["name"]}}!\n')])])]),r("ol",{attrs:{start:"5"}},[r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node sends a message to the "),r("code",[e._v("Sales")]),e._v(" channel on Mattermost about the order that was created in WooCommerce.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1429),alt:"Using the Mattermost node to send the information of the order to a channel"}})]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),r("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the WooCommerce Trigger node.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);