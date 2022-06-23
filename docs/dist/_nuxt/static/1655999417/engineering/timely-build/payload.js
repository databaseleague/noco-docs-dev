__NUXT_JSONP__("/engineering/timely-build", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){return {data:[{document:{slug:"timely-build",description:h,title:h,position:5000,category:"Engineering",menuTitle:h,toc:[{id:j,depth:k,text:l},{id:m,depth:k,text:n}],body:{type:"root",children:[{type:b,tag:f,props:{},children:[{type:a,value:"NocoDB provides timely build versions on Docker and Executables by compiling our source code and packaging as a deliverable so that it can"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"reduce pull request cycle time"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"allow issue reporters \u002F reviewers to verify the fix without setting up their local machines"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:j},children:[{type:b,tag:g,props:{href:"#docker",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"When a non-draft Pull Request is created, reopened or synchronized, a timely build for Docker would be triggered for the changes only included in the following paths."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"packages\u002Fnocodb-sdk\u002F**"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"packages\u002Fnc-gui\u002F**"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"packages\u002Fnc-plugin\u002F**"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"packages\u002Fnocodb\u002F**"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"The docker images will be built and pushed to Docker Hub (See "},{type:b,tag:g,props:{href:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Fnocodb\u002Fnocodb-timely\u002Ftags",rel:[u,v,w],target:x},children:[{type:a,value:y}]},{type:a,value:" for the full list). Once the image is ready, Github bot will add a comment with the command in the pull request. The tag would be "},{type:b,tag:e,props:{},children:[{type:a,value:"\u003CNOCODB_CURRENT_VERSION\u003E-pr-\u003CPR_NUMBER\u003E-\u003CYYYYMMDD\u003E-\u003CHHMM\u003E"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:z,props:{alt:A,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F175012097-240dab05-da93-4c4e-87c1-1c36fb1350bd.png"},children:[]}]},{type:a,value:c},{type:b,tag:o,props:{id:m},children:[{type:b,tag:g,props:{href:"#executables",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Similarly, we provide a timely build for executables for non-docker users. The source code will be built, packaged as binary files, and pushed to Github (See "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb-timely\u002Freleases",rel:[u,v,w],target:x},children:[{type:a,value:y}]},{type:a,value:" for the full list)."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Currently, we only support the following targets:"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"node16-linux-arm64"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"node16-macos-arm64"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"node16-win-arm64"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"node16-linux-x64"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"node16-macos-x64"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"node16-win-x64"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Once the executables are ready, Github bot will add a comment with the commands in the pull request."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:z,props:{alt:A,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F175012070-f5f3e7b8-6dc5-4d1c-9f7e-654bc5039521.png"},children:[]}]}]},dir:"\u002Fen\u002Fengineering",path:"\u002Fen\u002Fengineering\u002Ftimely-build",extension:".md",createdAt:B,updatedAt:B,to:"\u002Fengineering\u002Ftimely-build"},prev:{slug:"architecture",title:"NocoDB Architecture",to:"\u002Fengineering\u002Farchitecture"},next:{slug:C,title:C,to:"\u002FFAQs"}}],fetch:{},mutations:[]}}("text","element","\n","li","code","p","a","Timely Build","ul","docker",2,"Docker","executables","Executables","h2","true",-1,"span","icon","icon-link","nofollow","noopener","noreferrer","_blank","nocodb\u002Fnocodb-timely","img","image","2022-06-23T15:49:17.328Z","FAQs")));