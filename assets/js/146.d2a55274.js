(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1749:function(e,t,o){"use strict";o.r(t);var r=o(27),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"aws-transcribe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aws-transcribe"}},[e._v("#")]),e._v(" AWS Transcribe")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://aws.amazon.com/transcribe/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Transcribe"),r("OutboundLink")],1),e._v(" is a service that recognizes speech in your audio or video and transcribes that speech into text.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/AWS/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Transcription Job")]),e._v(" "),r("ul",[r("li",[e._v("Create a transcription job")]),e._v(" "),r("li",[e._v("Delete a transcription job")]),e._v(" "),r("li",[e._v("Get a transcription job")]),e._v(" "),r("li",[e._v("Get all transcriptions job")])])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create transcription jobs for all your audio and video files stored in AWS S3. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/1111",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/AWSS3/"}},[e._v("AWS S3")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("AWS Transcribe")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(762),alt:"A workflow with the AMQP Sender node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-aws-s3-node-getall-file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-aws-s3-node-getall-file"}},[e._v("#")]),e._v(" 2. AWS S3 node (getAll: file)")]),e._v(" "),r("p",[e._v("This node will retrieve all the files from an S3 bucket you specify.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the AWS S3 node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/AWS/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Get All' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter the bucket name in the "),r("em",[r("strong",[e._v("Bucket Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Toggle "),r("em",[r("strong",[e._v("Return All")])]),e._v(" to "),r("code",[e._v("true")]),e._v(". This option will return information on all the files stored in the S3 bucket.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node returns information of all the files stored in the bucket you specified.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(763),alt:"Using the AWS S3 node to fetch information of files stored in a bucket"}})]),e._v(" "),r("h3",{attrs:{id:"_3-aws-transcribe-node-create-transcriptionjob"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-aws-transcribe-node-create-transcriptionjob"}},[e._v("#")]),e._v(" 3. AWS Transcribe node (create: transcriptionJob)")]),e._v(" "),r("p",[e._v("This node will create a transcription job for the files that get returned by the previous node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Job Name")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("{{$json[\"Key\"].replace(/\\s/g,'-')}}")]),e._v(" in the "),r("em",[r("strong",[e._v("Expression")])]),e._v(" field. The code snippet fetches the name of the file and replaces the white-spaces with a hyphen (-).")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Media File URI")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v('s3://{{$node["AWS S3"].parameter["bucketName"]}}/{{$json["Key"]}}')]),e._v(" in the "),r("em",[r("strong",[e._v("Expression")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Toggle "),r("em",[r("strong",[e._v("Detect Language")])]),e._v(" to "),r("code",[e._v("true")]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node creates a transcription job for the files stored in an S3 bucket.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(764),alt:"Using the AWS Transcribe node to create a transcription job"}})])])}),[],!1,null,null,null);t.default=n.exports},762:function(e,t,o){e.exports=o.p+"assets/img/workflow.de3d9d72.png"},763:function(e,t,o){e.exports=o.p+"assets/img/AWSS3_node.a207567e.png"},764:function(e,t,o){e.exports=o.p+"assets/img/AWSTranscribe_node.c3f407de.png"}}]);