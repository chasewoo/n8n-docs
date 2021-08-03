(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1266:function(e,t,o){e.exports=o.p+"assets/img/workflow.1327ac62.png"},1267:function(e,t,o){e.exports=o.p+"assets/img/Twist_node.cbf1ad45.png"},1268:function(e,t,o){e.exports=o.p+"assets/img/Twist1_node.2c92eb7c.png"},1269:function(e,t,o){e.exports=o.p+"assets/img/Twist2_node.de3926b3.png"},1920:function(e,t,o){"use strict";o.r(t);var n=o(27),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"twist"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#twist"}},[e._v("#")]),e._v(" Twist")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://twist.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twist"),n("OutboundLink")],1),e._v(" is a communication app that helps teams balance focused work with collaborative conversations.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Twist/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.twist"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create and update a channel as well as send a message on Twist. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/826",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Twist")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1266),alt:"A workflow with the Twist node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-twist-node-create-channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-twist-node-create-channel"}},[e._v("#")]),e._v(" 2. Twist node (create: channel)")]),e._v(" "),n("p",[e._v("This node will create a channel "),n("code",[e._v("n8n-docs")]),e._v(" and add a user to the channel.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Twist node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Twist/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"2"}},[n("li",[e._v("Select 'Channel' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select a workspace from the "),n("em",[n("strong",[e._v("Workspace ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("n8n-docs")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field. If you want to create a channel with a different name, enter that name instead.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'User IDs' from the dropdown list.")]),e._v(" "),n("li",[e._v("Select the users from the "),n("em",[n("strong",[e._v("User IDs")])]),e._v(" dropdown list. The users you select will be added to the channel.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node creates a new channel named "),n("code",[e._v("n8n-docs")]),e._v(", and adds a user to the channel.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1267),alt:"Using the Twist node to create a channel"}})]),e._v(" "),n("h3",{attrs:{id:"_3-twist1-node-update-channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-twist1-node-update-channel"}},[e._v("#")]),e._v(" 3. Twist1 node (update: channel)")]),e._v(" "),n("p",[e._v("This node will update the description of the channel that we created in the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Channel' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Channel ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Twist > Output Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$node["Twist"].json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'Description' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter a description in the "),n("em",[n("strong",[e._v("Description")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node adds a description to the channel that we created in the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1268),alt:"Using the Twist node to update the description of a channel"}})]),e._v(" "),n("h3",{attrs:{id:"_4-twist2-node-create-messageconversation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-twist2-node-create-messageconversation"}},[e._v("#")]),e._v(" 4. Twist2 node (create: messageConversation)")]),e._v(" "),n("p",[e._v("This node will send a message to the General conversation on Twist. The message contains an action button that navigates to "),n("code",[e._v("https://docs.n8n.io")]),e._v(".")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select a workspace from the "),n("em",[n("strong",[e._v("Workspace ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'General' from the "),n("em",[n("strong",[e._v("Conversation ID")])]),e._v(" dropdown list. If you want to send a message to a different conversation, select that conversation instead.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Channel ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Enter the following text in the "),n("em",[n("strong",[e._v("Content")])]),e._v(" field:")])]),e._v(" "),n("div",{pre:!0,attrs:{class:"language- extra-class"}},[n("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[n("code",[e._v('Hey [Harshil](twist-mention://475370)!\nYou have been added to the {{$node["Twist"].json["name"]}} channel.\nClick on the button below to quickly navigate to the documentation website.\n')])])]),n("p",[e._v("The above message mentions the user "),n("code",[e._v("Harshil")]),e._v(". To mention a user in your workspace you need to use their User ID. Refer to the "),n("a",{pre:!0,attrs:{href:"#where-can-i-get-the-user-id"}},[e._v("FAQs")]),e._v(" to learn how to get a User ID.")]),e._v(" "),n("ol",{pre:!0,attrs:{start:"6"}},[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add options")])]),e._v(" and select 'Actions' from the dropdown list.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Action")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Open URL' from the "),n("em",[n("strong",[e._v("Action")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Documentation site")]),e._v(" in the "),n("em",[n("strong",[e._v("Button Text")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Select 'Action' from the "),n("em",[n("strong",[e._v("Type")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("https://docs.n8n.io")]),e._v(" in the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sends a message to the General conversation and mentions the user.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1269),alt:"Using the Twist node to send a message"}})]),e._v(" "),n("h2",{attrs:{id:"faqs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),n("h3",{attrs:{id:"where-can-i-get-the-user-id"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-get-the-user-id"}},[e._v("#")]),e._v(" Where can I get the User ID?")]),e._v(" "),n("p",[e._v("To get the User ID for a user follow the steps mentioned below")]),e._v(" "),n("ol",[n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Team")])]),e._v(" tab.")]),e._v(" "),n("li",[e._v("Click on a user's avatar.")]),e._v(" "),n("li",[e._v("Copy the string of characters located after "),n("code",[e._v("/u/")]),e._v(" in your Twist URL. This string is the User ID. For example, if the URL is "),n("code",[e._v("https://twist.com/a/4qw45/people/u/475370")]),e._v(" the User ID will be "),n("code",[e._v("475370")]),e._v(".")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);