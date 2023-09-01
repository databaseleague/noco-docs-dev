"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[5485],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,m=u["".concat(s,".").concat(c)]||u[c]||k[c]||o;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9819:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const o={title:"Webhooks",description:"Webhooks allows user to trigger on certain operations on following database operations"},r=void 0,i={unversionedId:"developer-resources/webhooks",id:"developer-resources/webhooks",title:"Webhooks",description:"Webhooks allows user to trigger on certain operations on following database operations",source:"@site/docs/040.developer-resources/040.webhooks.md",sourceDirName:"040.developer-resources",slug:"/developer-resources/webhooks",permalink:"/developer-resources/webhooks",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/040.developer-resources/040.webhooks.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Webhooks",description:"Webhooks allows user to trigger on certain operations on following database operations"},sidebar:"tutorialSidebar",previous:{title:"NocoDB SDK",permalink:"/developer-resources/sdk"},next:{title:"Upload via API",permalink:"/developer-resources/upload-via-api"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Configure Webhook",id:"configure-webhook",level:3},{value:"Enable/Disable Webhook",id:"enabledisable-webhook",level:3},{value:"Delete Webhook",id:"delete-webhook",level:3},{value:"Duplicate Webhook",id:"duplicate-webhook",level:3},{value:"Webhook Response Sample",id:"webhook-response-sample",level:3},{value:"Insert",id:"insert",level:4},{value:"Update",id:"update",level:4},{value:"Delete",id:"delete",level:4},{value:"Bulk Insert",id:"bulk-insert",level:4},{value:"Bulk Update",id:"bulk-update",level:4},{value:"Bulk Delete",id:"bulk-delete",level:4},{value:"Call Log",id:"call-log",level:2},{value:"Triggers",id:"triggers",level:2},{value:"Applications/services",id:"applicationsservices",level:3},{value:"Accessing Data: Handlebars",id:"accessing-data-handlebars",level:2},{value:"Example",id:"example",level:3},{value:"JSON format",id:"json-format",level:3},{value:"Additional references:",id:"additional-references",level:3},{value:"Discord",id:"discord",level:2},{value:"1. Create WebHook",id:"1-create-webhook",level:3},{value:"2. Install Plugin",id:"2-install-plugin",level:3},{value:"3. Configure",id:"3-configure",level:3},{value:"Slack",id:"slack",level:2},{value:"1. Create WebHook",id:"1-create-webhook-1",level:3},{value:"2. Install Plugin",id:"2-install-plugin-1",level:3},{value:"3. Configure Webhook",id:"3-configure-webhook",level:3},{value:"Microsoft Teams",id:"microsoft-teams",level:2},{value:"1. Create WebHook",id:"1-create-webhook-2",level:3},{value:"2. Install Plugin",id:"2-install-plugin-2",level:3},{value:"3. Configure",id:"3-configure-1",level:3},{value:"Webhook V2",id:"webhook-v2",level:2}],d={toc:p},u="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"You can employ webhooks to notify external systems whenever there are additions, updates, or removals of rows within NocoDB. This feature allows you to receive instantaneous notifications for any changes made to your database.\nNocoDB also offers webhooks for bulk endpoints for creating, updating, or deleting multiple records simultaneously."),(0,l.kt)("p",null,"Note that, Webhooks currently are specific for associated table."),(0,l.kt)("h3",{id:"configure-webhook"},"Configure Webhook"),(0,l.kt)("p",null,"To setup a new Webhook"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open ",(0,l.kt)("inlineCode",{parentName:"li"},"Details")," tab in topbar,"),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Webhooks")," tab"),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Add New Webhook"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/07f375af-f2c3-4d7c-9500-976f38b15c12",alt:"webhook"})),(0,l.kt)("p",null,"Webhook configuration  "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/338c8f23-237c-4a00-870d-5221e00a1d34",alt:"webhook config"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Name")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Event"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"After Insert"),(0,l.kt)("li",{parentName:"ol"},"After Update"),(0,l.kt)("li",{parentName:"ol"},"After Delete"),(0,l.kt)("li",{parentName:"ol"},"After Bulk Insert"),(0,l.kt)("li",{parentName:"ol"},"After Bulk Update"),(0,l.kt)("li",{parentName:"ol"},"After Bulk Delete      "))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Type"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trigger"),(0,l.kt)("th",{parentName:"tr",align:null},"Details"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Email"),(0,l.kt)("td",{parentName:"tr",align:null},"Send email to certain email addresses")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slack"),(0,l.kt)("td",{parentName:"tr",align:null},"Notify via Slack channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Microsoft Teams"),(0,l.kt)("td",{parentName:"tr",align:null},"Notify via Microsoft Teams channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Discord"),(0,l.kt)("td",{parentName:"tr",align:null},"Notify via Discord channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mattermost"),(0,l.kt)("td",{parentName:"tr",align:null},"Notify via Mattermost channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Twilio"),(0,l.kt)("td",{parentName:"tr",align:null},"Send SMS to certain mobile numbers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Whatsapp Twilio"),(0,l.kt)("td",{parentName:"tr",align:null},"Send Whatsapp messages to numbers using Twilio")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Invoke an HTTP API")))),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Action"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"GET"),(0,l.kt)("li",{parentName:"ol"},"POST"),(0,l.kt)("li",{parentName:"ol"},"DELETE"),(0,l.kt)("li",{parentName:"ol"},"PUT"),(0,l.kt)("li",{parentName:"ol"},"HEAD"),(0,l.kt)("li",{parentName:"ol"},"PATCH "))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Type specific configuration : additional configuration details depending on webhook type selected",(0,l.kt)("br",{parentName:"p"}),"\n","Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"Link")," for type ",(0,l.kt)("inlineCode",{parentName:"p"},"URL"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"[Optional]"," Headers & Parameters :\nConfigure Request headers & parameters (if any)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"[Optional]"," Condition :\nOnly records meeting the criteria will trigger webhook")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"[Optional]"," Test :\nTest webhook (with sample payload) to verify if parameter are configured appropriately")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Save"))),(0,l.kt)("h3",{id:"enabledisable-webhook"},"Enable/Disable Webhook"),(0,l.kt)("p",null,"To disable a Webhook"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open ",(0,l.kt)("inlineCode",{parentName:"li"},"Webhook")," tab to find list of webhooks created"),(0,l.kt)("li",{parentName:"ul"},"Toggle ",(0,l.kt)("inlineCode",{parentName:"li"},"Activate")," button to enable/disable")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/c62cca12-6164-46a8-87e5-179d28c989b6",alt:"Screenshot 2023-09-01 at 3 59 28 PM"})),(0,l.kt)("h3",{id:"delete-webhook"},"Delete Webhook"),(0,l.kt)("p",null,"To delete a Webhook"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open ",(0,l.kt)("inlineCode",{parentName:"li"},"Webhook")," tab to find list of webhooks created"),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"...")," actions button associated with the webhook to be deleted"),(0,l.kt)("li",{parentName:"ul"},"Select ",(0,l.kt)("inlineCode",{parentName:"li"},"Delete"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/23a8aec1-ba29-4be4-8143-f3c94198a88c",alt:"Screenshot 2023-09-01 at 4 01 46 PM"})),(0,l.kt)("h3",{id:"duplicate-webhook"},"Duplicate Webhook"),(0,l.kt)("p",null,"To duplicate a Webhook"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open ",(0,l.kt)("inlineCode",{parentName:"li"},"Webhook")," tab to find list of webhooks created"),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"...")," actions button associated with the webhook to be duplicate"),(0,l.kt)("li",{parentName:"ul"},"Select ",(0,l.kt)("inlineCode",{parentName:"li"},"Duplicate"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/23a8aec1-ba29-4be4-8143-f3c94198a88c",alt:"Screenshot 2023-09-01 at 4 01 46 PM"})),(0,l.kt)("p",null,"A copy of the webhook will be created (disabled by default) with a suffix ",(0,l.kt)("inlineCode",{parentName:"p"}," - Copy")),(0,l.kt)("h3",{id:"webhook-response-sample"},"Webhook Response Sample"),(0,l.kt)("h4",{id:"insert"},"Insert"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "type": "records.after.insert",\n  "id": "9dac1c54-b3be-49a1-a676-af388145fa8c",\n  "data": {\n    "table_id": "md_xzru7dcqrecc60",\n    "table_name": "Film",\n    "view_id": "vw_736wrpoas7tr0c",\n    "view_name": "Film",\n    "rows": [\n      {\n        "FilmId": 1011,\n        "Title": "FOO",\n        "Language": {\n          "LanguageId": 1,\n          "Name": "English"\n        },\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h4",{id:"update"},"Update"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "type": "records.after.update",\n  "id": "6a6ebfe4-b0b5-434e-b5d6-5212adbf82fa",\n  "data": {\n    "table_id": "md_xzru7dcqrecc60",\n    "table_name": "Film",\n    "view_id": "vw_736wrpoas7tr0c",\n    "view_name": "Film",\n    "previous_rows": [\n      {\n        "FilmId": 1,\n        "Title": "ACADEMY DINOSAUR",\n        "Description": "A Epic Drama of a Feminist in The Canadian Rockies",\n        "Actor List": [\n          {\n            "ActorId": 10,\n            "FirstName": "CHRISTIAN"\n          }\n        ],\n      }\n    ],\n    "rows": [\n      {\n        "FilmId": 1,\n        "Title": "ACADEMY DINOSAUR (Edited)",\n        "Actor List": [\n          {\n            "ActorId": 10,\n            "FirstName": "CHRISTIAN"\n          }\n        ],\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h4",{id:"delete"},"Delete"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "type": "records.after.delete",\n  "id": "e593079f-70e5-4965-8944-5ff7aeed005c",\n  "data": {\n    "table_id": "md_xzru7dcqrecc60",\n    "table_name": "Film",\n    "view_id": "vw_736wrpoas7tr0c",\n    "view_name": "Film",\n    "rows": [\n      {\n        "FilmId": 1010,\n        "Title": "ALL-EDITED",\n        "Language": {\n          "LanguageId": 1,\n          "Name": "English"\n        },\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h4",{id:"bulk-insert"},"Bulk Insert"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "type": "records.after.bulkInsert",\n  "id": "f8397b06-a399-4a3a-b6b0-6d1c0c2f7578",\n  "data": {\n    "table_id": "md_xzru7dcqrecc60",\n    "table_name": "Film",\n    "view_id": "vw_3fq2e9q8drkblw",\n    "view_name": "GridView",\n    "rows_inserted": 2\n  }\n}\n')),(0,l.kt)("h4",{id:"bulk-update"},"Bulk Update"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "type": "records.after.bulkUpdate",\n  "id": "e983cea5-8e38-438e-96a0-048751f6830b",\n  "data": {\n    "table_id": "md_xzru7dcqrecc60",\n    "table_name": "Film",\n    "view_id": "vw_3fq2e9q8drkblw",\n    "view_name": "Sheet-1",\n    "previous_rows": [\n      [\n        {\n          "FilmId": 1005,\n          "Title": "Q",\n          "Language": {\n            "LanguageId": 1,\n            "Name": "English"\n          },\n        },\n        {\n          "FilmId": 1004,\n          "Title": "P",\n          "Language": {\n            "LanguageId": 1,\n            "Name": "English"\n          }\n        }\n      ]\n    ],\n    "rows": [\n      [\n        {\n          "FilmId": 1005,\n          "Title": "Q-EDITED",\n          "Language": {\n            "LanguageId": 1,\n            "Name": "English"\n          }\n        },\n        {\n          "FilmId": 1004,\n          "Title": "P-EDITED",\n          "Language": {\n            "LanguageId": 1,\n            "Name": "English"\n          },\n        }\n      ]\n    ]\n  }\n}\n')),(0,l.kt)("h4",{id:"bulk-delete"},"Bulk Delete"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "type": "records.after.bulkDelete",\n  "id": "e7f1f4e5-7052-4ca2-9355-241ceb836f43",\n  "data": {\n    "table_id": "md_xzru7dcqrecc60",\n    "table_name": "Film",\n    "view_id": "vw_3fq2e9q8drkblw",\n    "view_name": "Sheet-1",\n    "rows": [\n      [\n        {\n          "FilmId": 1022,\n          "Title": "x",\n          "Language": {\n            "LanguageId": 1,\n            "Name": "English"\n          },\n        },\n        {\n          "FilmId": 1023,\n          "Title": "x",\n          "Language": {\n            "LanguageId": 1,\n            "Name": "English"\n          },\n        }\n      ]\n    ]\n  }\n}\n')),(0,l.kt)("h2",{id:"call-log"},"Call Log"),(0,l.kt)("p",null,"Call Log allows user to check the call history of the hook. By default, it has been disabled. However, it can be configured by using environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"NC_AUTOMATION_LOG_LEVEL"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NC_AUTOMATION_LOG_LEVEL=OFF"),": No logs will be displayed and no history will be inserted to meta database."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NC_AUTOMATION_LOG_LEVEL=ERROR"),": only error logs will be displayed and history of error logs will be inserted to meta database."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NC_AUTOMATION_LOG_LEVEL=ALL"),": Both error and success logs will be displayed and history of both types of logs will be inserted to meta database. ",(0,l.kt)("strong",{parentName:"li"},"This option is only available for Enterprise Edition."))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/228790148-1e3f21c7-9385-413a-843f-b93073ca6bea.png",alt:"image"})),(0,l.kt)("h2",{id:"triggers"},"Triggers"),(0,l.kt)("p",null,"Webhooks allows user to trigger on certain operations on following database operations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"AFTER INSERT"),(0,l.kt)("li",{parentName:"ul"},"AFTER UPDATE"),(0,l.kt)("li",{parentName:"ul"},"AFTER DELETE")),(0,l.kt)("p",null,"The triggers will trigger asynchronously without blocking the actual operation."),(0,l.kt)("h3",{id:"applicationsservices"},"Applications/services"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trigger"),(0,l.kt)("th",{parentName:"tr",align:null},"Details"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Email"),(0,l.kt)("td",{parentName:"tr",align:null},"Send email to certain email addresses")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slack"),(0,l.kt)("td",{parentName:"tr",align:null},"Notify via Slack channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Microsoft Teams"),(0,l.kt)("td",{parentName:"tr",align:null},"Notify via Microsoft Teams channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Discord"),(0,l.kt)("td",{parentName:"tr",align:null},"Notify via Discord channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mattermost"),(0,l.kt)("td",{parentName:"tr",align:null},"Notify via Mattermost channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Twilio"),(0,l.kt)("td",{parentName:"tr",align:null},"Send SMS to certain mobile numbers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Whatsapp Twilio"),(0,l.kt)("td",{parentName:"tr",align:null},"Send Whatsapp messages to numbers using Twilio")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Invoke an HTTP API")))),(0,l.kt)("h2",{id:"accessing-data-handlebars"},"Accessing Data: Handlebars"),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"You can accessing data using handlebars for v1 webhooks only.")),(0,l.kt)("p",null,"The current row data and other details will be available in the hooks payload so the user can use ",(0,l.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/#simple-expressions"},"handlebar syntax")," to use data."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"We are using ",(0,l.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/"},"Handlebars")," library to parse the payload internally.")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"For a table with column names (id, title, created_at, updated_at).",(0,l.kt)("br",{parentName:"p"}),"\n","For INSERT/ UPDATE based triggers, use following handlebars to access corresponding ",(0,l.kt)("strong",{parentName:"p"},"data")," fields."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"{{ ",(0,l.kt)("strong",{parentName:"li"},"data"),".id }}"),(0,l.kt)("li",{parentName:"ul"},"{{ ",(0,l.kt)("strong",{parentName:"li"},"data"),".title }}"),(0,l.kt)("li",{parentName:"ul"},"{{ ",(0,l.kt)("strong",{parentName:"li"},"data"),".created_at }}"),(0,l.kt)("li",{parentName:"ul"},"{{ ",(0,l.kt)("strong",{parentName:"li"},"data"),".updated_at }}  ")),(0,l.kt)("p",null,"Note that, for Update trigger - all the fields in the ROW will be accessible, not just the field updated.\nFor DELETE based triggers, ",(0,l.kt)("strong",{parentName:"p"},"only")," {{ data.id }} is accessible representing ID of the column deleted."),(0,l.kt)("h3",{id:"json-format"},"JSON format"),(0,l.kt)("p",null,"Use {{ json data }} to dump complete data & user information available in JSON format"),(0,l.kt)("h3",{id:"additional-references"},"Additional references:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/"},"Handlebar Guide"),"."),(0,l.kt)("h1",{id:"application-guide"},"Application Guide"),(0,l.kt)("h2",{id:"discord"},"Discord"),(0,l.kt)("h3",{id:"1-create-webhook"},"1. Create WebHook"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On Discord, open your Server Settings and head into the Integrations tab:"),(0,l.kt)("li",{parentName:"ul"},'Click the "Create Webhook" button to create a new webhook!')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/155087088-8f9fd762-9ff9-41a6-aed4-0f22add77fe6.png",alt:"Screenshot 2022-02-22 at 1 21 59 PM"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Choose channel to which this webhook will post to."),(0,l.kt)("li",{parentName:"ul"},"Copy webhook URL")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/155087126-c2cdd7b2-518a-46a5-82a5-aa90fe51a709.png",alt:"Screenshot 2022-02-22 at 1 23 18 PM"})),(0,l.kt)("p",null,"(Sample webhook URL: ",(0,l.kt)("a",{parentName:"p",href:"https://discord.com/api/webhooks/945558283756908644/GNUtiGuzfOky6wZ4ce30XuXc1sbPK3Od7EC-4t6hihh5Fovv6oU9OsdT6mGuoL1QlTzj"},"https://discord.com/api/webhooks/945558283756908644/GNUtiGuzfOky6wZ4ce30XuXc1sbPK3Od7EC-4t6hihh5Fovv6oU9OsdT6mGuoL1QlTzj"),").",(0,l.kt)("br",{parentName:"p"}),"\n","Detailed procedure for discord webhook described ",(0,l.kt)("a",{parentName:"p",href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"},"here"),"."),(0,l.kt)("h3",{id:"2-install-plugin"},"2. Install Plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open 'App Store' (under Settings), hover over Discord tile. Click 'Install'.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/190066333-04bab4eb-f114-48e5-b3f9-6327cadb1ca7.png",alt:"Screenshot 2022-09-14 at 10 47 59 AM"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Provide a name of your choice (not to be confused with Discord Channel name)."),(0,l.kt)("li",{parentName:"ul"},"Paste Discord Webhook URL copied from Step (1.) above.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/190066365-90e3136b-db24-4514-aa89-c1fb371b33ee.png",alt:"Screenshot 2022-09-14 at 10 52 14 AM"})),(0,l.kt)("h3",{id:"3-configure"},"3. Configure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open project and choose a table."),(0,l.kt)("li",{parentName:"ul"},"Click 'More' > 'Webhooks'."),(0,l.kt)("li",{parentName:"ul"},"Click 'Create webhook'"),(0,l.kt)("li",{parentName:"ul"},"Configure webhook",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Title"),": Name of your choice to identify this Webhook."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Event"),": Trigger event. Choose between.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"After Insert: Trigger event for new ROW insertion."),(0,l.kt)("li",{parentName:"ul"},"After Update: Trigger event for existing ROW updation."),(0,l.kt)("li",{parentName:"ul"},"After Delete: Trigger event for ROW deletion"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"On Condition"),": ","[Optional]"," Enable if you wish to associate additional condition/constraint with the trigger configured above."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Notification"),": Select 'Discord'."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Select Discord Channels"),": Select from the drop down list, channel name configured in Step (2). Please click on 'Reload' if drop down list is empty."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Body"),": Message to be posted over Discord channel, via webhooks on trigger of configured event.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Body can contain plain text &"),(0,l.kt)("li",{parentName:"ul"},"Handlebars {{ }}")))))),(0,l.kt)("h2",{id:"slack"},"Slack"),(0,l.kt)("h3",{id:"1-create-webhook-1"},"1. Create WebHook"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Details to create slack webhook are captured ",(0,l.kt)("a",{parentName:"li",href:"https://api.slack.com/messaging/webhooks"},"here"))),(0,l.kt)("h3",{id:"2-install-plugin-1"},"2. Install Plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Procedure remain same as listed for DISCORD channel configuration above")),(0,l.kt)("h3",{id:"3-configure-webhook"},"3. Configure Webhook"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Procedure remain same as listed for DISCORD channel configuration above")),(0,l.kt)("h2",{id:"microsoft-teams"},"Microsoft Teams"),(0,l.kt)("h3",{id:"1-create-webhook-2"},"1. Create WebHook"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On Teams, open your channel, click on three-dots menu (far right) and select 'Connectors'")),(0,l.kt)("img",{width:"319",alt:"154971352-6912d53b-cf71-4edd-a319-1c85be85f0c5",src:"https://user-images.githubusercontent.com/86527202/155095745-91abd708-834f-4f0e-a33c-ac362e60af0f.png"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select incoming webhook & click 'Configure'")),(0,l.kt)("img",{width:"442",alt:"154971434-0ced97f7-205a-4e2e-8f88-17092cb7771a",src:"https://user-images.githubusercontent.com/86527202/155095741-b23ad6b2-1276-46e3-8ada-0d0a871115bb.png"}),"-   Create webhook, Copy webhook URL ![154971683-db16be7f-4f07-4447-8f2e-ac50e133bef8](https://user-images.githubusercontent.com/86527202/155095733-c339a914-5d78-408c-8f1e-9cd75a7783e8.png)",(0,l.kt)("h3",{id:"2-install-plugin-2"},"2. Install Plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open 'App Store' (under Settings), hover over 'Microsoft Teams' tile. Click 'Install'.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/190066409-03311add-3b36-4521-acf7-dba5ffdef3fb.png",alt:"Screenshot 2022-09-14 at 10 53 22 AM"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Provide a name of your choice (not to be confused with Teams Channel name)."),(0,l.kt)("li",{parentName:"ul"},"Paste MS Teams Webhook URL copied from Step (1.) above.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/190066430-838eaa69-ac2c-49ce-a0eb-d84c97964f8b.png",alt:"Screenshot 2022-09-14 at 10 53 31 AM"})),(0,l.kt)("h3",{id:"3-configure-1"},"3. Configure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open project and choose a table."),(0,l.kt)("li",{parentName:"ul"},"Click 'More' > 'Webhooks'."),(0,l.kt)("li",{parentName:"ul"},"Click 'Create webhook'"),(0,l.kt)("li",{parentName:"ul"},"Configure webhook",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Title"),": Name of your choice to identify this Webhook."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Event"),": Trigger event. Choose between.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"After Insert: Trigger event for new ROW insertion."),(0,l.kt)("li",{parentName:"ul"},"After Update: Trigger event for existing ROW updation."),(0,l.kt)("li",{parentName:"ul"},"After Delete: Trigger event for ROW deletion"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"On Condition"),": ","[Optional]"," Enable if you wish to associate additional condition/constraint with the trigger configured above."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Notification"),": Select 'Microsoft Teams'."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Select Teams Channels"),": Select from the drop down list, channel name configured in Step (2). Please click on 'Reload' if drop down list is empty."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Body"),": Message to be posted over Teams channel, via webhooks on trigger of configured event.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Body can contain plain text &"),(0,l.kt)("li",{parentName:"ul"},"Handlebars {{ }}")))))),(0,l.kt)("h2",{id:"webhook-v2"},"Webhook V2"),(0,l.kt)("p",null,"Webhook v2 is available after v0.106.0. Here's the differences."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Response Payload has been predefined and cannot configure in Body using Handlebars. The payload can be referenced under ",(0,l.kt)("inlineCode",{parentName:"li"},"Sample Payload")," in Hook detail page."),(0,l.kt)("li",{parentName:"ul"},"Support the following bulk operations:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AFTER BULK INSERT"),(0,l.kt)("li",{parentName:"ul"},"AFTER BULK UPDATE"),(0,l.kt)("li",{parentName:"ul"},"AFTER BULK DELETE")))))}k.isMDXComponent=!0}}]);