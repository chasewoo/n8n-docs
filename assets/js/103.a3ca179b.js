(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1107:function(e,t,o){e.exports=o.p+"assets/img/workflow.9e5c7298.png"},1108:function(e,t,o){e.exports=o.p+"assets/img/Phantombuster_node.09759dba.png"},1109:function(e,t,o){e.exports=o.p+"assets/img/Set_node.61164dca.png"},1110:function(e,t,o){e.exports=o.p+"assets/img/Airtable_node.005a42cd.png"},1871:function(e,t,o){"use strict";o.r(t);var n=o(27),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"phantombuster"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#phantombuster"}},[e._v("#")]),e._v(" Phantombuster")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.phantombuster.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Phantombuster"),n("OutboundLink")],1),e._v(" is a scraping platform that allows chain actions and data extraction on the web to generate business leads, marketing audiences, and overall growth.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Phantombuster/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.phantombuster"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to store the output of a phantom in Airtable. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/882",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Phantombuster")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Airtable/"}},[e._v("Airtable")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1107),alt:"A workflow with the Phantombuster node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-phantombuster-node-getoutput-agent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-phantombuster-node-getoutput-agent"}},[e._v("#")]),e._v(" 2. Phantombuster node (getOutput: agent)")]),e._v(" "),n("p",[e._v("Create and launch the "),n("a",{attrs:{href:"https://phantombuster.com/automations/linkedin/3112/linkedin-profile-scraper",target:"_blank",rel:"noopener noreferrer"}},[e._v("LinkedIn Profile Scraper"),n("OutboundLink")],1),e._v(" in your Phantombuster account. This node will return the output of this phantom.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Phantombuster node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Phantombuster/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Get Output' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select a phantom from the "),n("em",[n("strong",[e._v("Agent")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node returns the output from the LinkedIn Profile Scraper phantom.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1108),alt:"Using the Phantombuster node to get the output of a phantom"}})]),e._v(" "),n("h3",{attrs:{id:"_3-set-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),n("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Phantombuster > Output Data > JSON > general > fullName. You can also add the following expression: "),n("code",[e._v('{{$node["Phantombuster"].json["general"]["fullName"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Email")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Phantombuster > Output Data > JSON > details > mail. You can also add the following expression: "),n("code",[e._v('{{$node["Phantombuster"].json["details"]["mail"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Company")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Phantombuster > Output Data > JSON > jobs> [Item: 0] > companyName. You can also add the following expression: "),n("code",[e._v('{{$node["Phantombuster"].json["jobs"][0]["companyName"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Keep Only Set")])]),e._v(" to "),n("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node uses the data from the previous node and returns the data that we set for the workflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1109),alt:"Using the Set node to set the data"}})]),e._v(" "),n("h2",{attrs:{id:"_4-airtable-node-append"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-airtable-node-append"}},[e._v("#")]),e._v(" 4. Airtable node (Append)")]),e._v(" "),n("p",[e._v("This node will append the data that we set in the previous node to a table. Create a table like "),n("a",{attrs:{href:"https://airtable.com/shr6hP774ijrXFput",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),n("OutboundLink")],1),e._v(" in your Airtable base.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Airtable node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Append' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter the Base ID in the "),n("em",[n("strong",[e._v("Base ID")])]),e._v(" field. For obtaining the Base ID, head over to their "),n("a",{attrs:{href:"https://airtable.com/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("API page"),n("OutboundLink")],1),e._v(" and select the correct base. You’ll find the Base ID there.")]),e._v(" "),n("li",[e._v("Enter the name of your table in the "),n("em",[n("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node appends the data that we had set in the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1110),alt:"Using the Airtable node to insert data into an Airtable table"}})])],1)}),[],!1,null,null,null);t.default=a.exports}}]);