__NUXT_JSONP__("/engineering/builds-and-releases", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at){return {data:[{document:{slug:"builds-and-releases",description:"NocoDB creates Docker and Binaries for each PR",title:C,position:3300,category:"Engineering",menuTitle:C,toc:[{id:D,depth:v,text:E},{id:F,depth:v,text:G},{id:H,depth:o,text:I},{id:J,depth:o,text:K},{id:L,depth:o,text:M},{id:N,depth:o,text:O},{id:P,depth:o,text:Q},{id:R,depth:v,text:S},{id:T,depth:o,text:U},{id:V,depth:o,text:y},{id:W,depth:v,text:X},{id:Y,depth:o,text:Z},{id:_,depth:o,text:y},{id:$,depth:v,text:aa}],body:{type:"root",children:[{type:b,tag:w,props:{id:D},children:[{type:b,tag:f,props:{href:"#builds-of-nocodb",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"There are 3 kinds of docker builds in NocoDB"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Release builds "},{type:b,tag:f,props:{href:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Fnocodb\u002Fnocodb",rel:[p,q,r],target:s},children:[{type:a,value:"nocodb\u002Fnocodb"}]},{type:a,value:" : built during NocoDB release."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Daily builds "},{type:b,tag:f,props:{href:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Fnocodb\u002Fnocodb-daily",rel:[p,q,r],target:s},children:[{type:a,value:ab}]},{type:a,value:" : built every 6 hours from Develop branch."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Timely builds "},{type:b,tag:f,props:{href:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Fnocodb\u002Fnocodb-timely",rel:[p,q,r],target:s},children:[{type:a,value:z}]},{type:a,value:": built for every PR and manually triggered PRs."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Below is an overview of how to make these builds and what happens behind the scenes."}]},{type:a,value:c},{type:b,tag:w,props:{id:F},children:[{type:b,tag:f,props:{href:"#release-builds",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:t,props:{id:H},children:[{type:b,tag:f,props:{href:"#how-to-make-a-release-build--",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Click "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Factions\u002Fworkflows\u002Frelease-nocodb.yml",rel:[p,q,r],target:s},children:[{type:a,value:"NocoDB release action"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You should see the below screen"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:u,props:{alt:x,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F167240353-a02f690f-c865-4ade-8645-64382405c9ea.png"},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Change "},{type:b,tag:g,props:{},children:[{type:a,value:"Use workflow from"}]},{type:a,value:" to "},{type:b,tag:g,props:{},children:[{type:a,value:"Branch: master"}]},{type:a,value:". If you choose the wrong branch, the workflow will be ended."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:u,props:{alt:x,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F167240383-dda05f76-8323-4f4a-b3e7-9db886dbd68d.png"},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Then there would be two cases - you can either leave target tag and pervious tag blank or manually input some values"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Target Tag means the target deployment version, while Previous Tag means the latest version as of now. Previous Tag is used for Release Note only - showing the file \u002F commit differences between two tags."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{id:J},children:[{type:b,tag:f,props:{href:"#tagging",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The naming convention would be following given the actual release tag is "},{type:b,tag:g,props:{},children:[{type:a,value:ac}]}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"0.100.0-beta.0"}]},{type:a,value:" (first version of pre-release)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"0.100.0-beta.1"}]},{type:a,value:" (include bug fix changes on top of the previous version)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"0.100.0-beta.2"}]},{type:a,value:"(include bug fix changes on top of the previous version)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"and so on ..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ac}]},{type:a,value:" (actual release)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"0.100.1"}]},{type:a,value:ad}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"0.100.2"}]},{type:a,value:ad}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{id:L},children:[{type:b,tag:f,props:{href:"#case-1-leaving-inputs-blank",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If Previous Tag is blank, then the value will be fetched from "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Freleases\u002Flatest",rel:[p,q,r],target:s},children:[{type:a,value:"latest"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If Target Tag is blank, then the value will be Previous Tag plus one. Example: 0.90.11 (Previous Tag) + 0.0.1 = 0.90.12 (Target Tag)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{id:N},children:[{type:b,tag:f,props:{href:"#case-2-manually-input",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Why? Sometimes we may mess up in NPM deployment. As NPM doesn't allow us to redeploy to the same tag again, in this case we cannot just use the previous tag + 1. Therefore, we need to use previous tag + 2 instead and we manually configure it."}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After that, click "},{type:b,tag:g,props:{},children:[{type:a,value:"Run workflow"}]},{type:a,value:" to start"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can see Summary for the overall job status."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:ae},{type:b,tag:g,props:{},children:[{type:a,value:A}]},{type:a,value:af},{type:b,tag:g,props:{},children:[{type:a,value:"release-executables"}]},{type:a,value:" is finished, then go to "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Freleases",rel:[p,q,r],target:s},children:[{type:a,value:"releases"}]},{type:a,value:", edit the draft note and save as draft for time being.\n"},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Example: Adding header, update content if necessary, and click "},{type:b,tag:g,props:{},children:[{type:a,value:"Auto-generate release notes"}]},{type:a,value:" to include more info."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:ae},{type:b,tag:g,props:{},children:[{type:a,value:B}]},{type:a,value:" is finished, then test it locally first. You'll be expected to see "},{type:b,tag:g,props:{},children:[{type:a,value:"Upgrade Available"}]},{type:a,value:" notification in UI as we haven't published the release note. (the version is retrieved from there)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once everything is finished, then publish the release note and the deployment is considered as DONE."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{id:P},children:[{type:b,tag:f,props:{href:"#how-does-release-action-work-",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:n,props:{id:ag},children:[{type:b,tag:f,props:{href:"#validate-branch",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:ag}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To check if "},{type:b,tag:g,props:{},children:[{type:a,value:"github.ref"}]},{type:a,value:" is master. Otherwise, other branches will be not accepted."}]},{type:a,value:c},{type:b,tag:n,props:{id:ah},children:[{type:b,tag:f,props:{href:"#process-input",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:ah}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To enrich target tag or previous tag if necessary."}]},{type:a,value:c},{type:b,tag:n,props:{id:ai},children:[{type:b,tag:f,props:{href:"#pr-to-master",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:ai}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Automate a PR from develop to master branch so that we know the actual differences between the previous tag and the current tag. We choose master branch for a deployment base."}]},{type:a,value:c},{type:b,tag:n,props:{id:aj},children:[{type:b,tag:f,props:{href:"#release-npm",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:aj}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Build frontend and backend and release them to NPM. The changes during built such as version bumping will be committed and pushed to a temporary branch and an automated PR will be created and merged to master branch."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Note that once you publish with a certain tag, you cannot publish with the same tag again."}]},{type:a,value:c},{type:b,tag:n,props:{id:A},children:[{type:b,tag:f,props:{href:"#release-draft-note",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Generate a draft release note. Some actions need to be done after this step."}]},{type:a,value:c},{type:b,tag:n,props:{id:B},children:[{type:b,tag:f,props:{href:"#release-docker",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Build docker image and publish it to Docker Hub. It may take around 15 - 30 mins."}]},{type:a,value:c},{type:b,tag:n,props:{id:ak},children:[{type:b,tag:f,props:{href:"#close-issues",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:ak}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Open issues marked with label "},{type:b,tag:g,props:{},children:[{type:a,value:"Status: Fixed"}]},{type:a,value:af},{type:b,tag:g,props:{},children:[{type:a,value:"Status: Resolved"}]},{type:a,value:" will be closed by bot automatically with comment mentioning the fix is included in which version."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Example:"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:u,props:{alt:x,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F167241574-f8f7061f-c689-444a-b761-0a727974c53f.png"},children:[]}]},{type:a,value:c},{type:b,tag:n,props:{id:al},children:[{type:b,tag:f,props:{href:"#publish-docs",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:al}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Publish Documentations"}]},{type:a,value:c},{type:b,tag:n,props:{id:am},children:[{type:b,tag:f,props:{href:"#update-sdk-path",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:am}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"nocodb-sdk"}]},{type:a,value:" is used in frontend and backend. However, in develop branch, the value would be "},{type:b,tag:g,props:{},children:[{type:a,value:"file:..\u002Fnocodb-sdk"}]},{type:a,value:" for development purpose (so that the changes done in nocodb-sdk in develop will be included in frontend and backend). During the deployment, the value will be changed to the target tag. This job is to update them back."}]},{type:a,value:c},{type:b,tag:n,props:{id:an},children:[{type:b,tag:f,props:{href:"#sync-to-develop",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:an}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Once the deployment is finished, there would be some new changes being pushed to master branch. This job is to sync the changes back to develop so that both branch won't have any difference."}]},{type:a,value:c},{type:b,tag:w,props:{id:R},children:[{type:b,tag:f,props:{href:"#daily-builds",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:t,props:{id:T},children:[{type:b,tag:f,props:{href:"#what-are-daily-builds-",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"NocoDB creates every 6 hours from develop branches and publishes as nocodb\u002Fnocodb-daily"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is so that we can easily try what is in the develop branch easily."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{id:V},children:[{type:b,tag:f,props:{href:"#docker-images",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:ao},{type:b,tag:f,props:{href:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Fnocodb\u002Fnocodb-daily\u002Ftags",rel:[p,q,r],target:s},children:[{type:a,value:ab}]},{type:a,value:ap}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{id:W},children:[{type:b,tag:f,props:{href:"#timely-builds",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:t,props:{id:Y},children:[{type:b,tag:f,props:{href:"#what-are-timely-builds-",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"NocoDB has github actions which creates docker and binaries for each PR! And these can be found as a "},{type:b,tag:"strong",props:{},children:[{type:a,value:"comment on the last commit"}]},{type:a,value:" of the PR."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Example shown below"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Go to a PR and click on the comment."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:u,props:{width:1111,alt:"Screenshot 2023-01-23 at 15 46 36",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F5435402\u002F214083736-80062398-3712-430f-9865-86b110090c91.png"},children:[]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Click on the link to copy the docker image and run it locally."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:u,props:{width:1231,alt:"Screenshot 2023-01-23 at 15 46 55",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F5435402\u002F214083755-945d9485-2b9e-4739-8408-068bdf4a84b7.png"},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:aq}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:ar}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:as}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{id:_},children:[{type:b,tag:f,props:{href:"#docker-images-1",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"When a non-draft Pull Request is created, reopened or synchronized, a timely build for Docker would be triggered for the changes only included in the following paths."}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"packages\u002Fnocodb-sdk\u002F**"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"packages\u002Fnc-gui\u002F**"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"packages\u002Fnc-plugin\u002F**"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"packages\u002Fnocodb\u002F**"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:ao},{type:b,tag:f,props:{href:"https:\u002F\u002Fhub.docker.com\u002Fr\u002Fnocodb\u002Fnocodb-timely\u002Ftags",rel:[p,q,r],target:s},children:[{type:a,value:z}]},{type:a,value:" for the full list). Once the image is ready, Github bot will add a comment with the command in the pull request. The tag would be "},{type:b,tag:g,props:{},children:[{type:a,value:"\u003CNOCODB_CURRENT_VERSION\u003E-pr-\u003CPR_NUMBER\u003E-\u003CYYYYMMDD\u003E-\u003CHHMM\u003E"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:u,props:{alt:x,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F175012097-240dab05-da93-4c4e-87c1-1c36fb1350bd.png"},children:[]}]},{type:a,value:c},{type:b,tag:w,props:{id:$},children:[{type:b,tag:f,props:{href:"#executables-or-binaries",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Similarly, we provide a timely build for executables for non-docker users. The source code will be built, packaged as binary files, and pushed to Github (See "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb-timely\u002Freleases",rel:[p,q,r],target:s},children:[{type:a,value:z}]},{type:a,value:ap}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Currently, we only support the following targets:"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"node16-linux-arm64"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"node16-macos-arm64"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"node16-win-arm64"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"node16-linux-x64"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"node16-macos-x64"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"node16-win-x64"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Once the executables are ready, Github bot will add a comment with the commands in the pull request."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:u,props:{alt:x,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F175012070-f5f3e7b8-6dc5-4d1c-9f7e-654bc5039521.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"NocoDB creates Docker and Binaries for each PR."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:aq}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:ar}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:as}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Fengineering",path:"\u002Fen\u002Fengineering\u002Fbuilds-and-releases",extension:".md",createdAt:at,updatedAt:at,to:"\u002Fengineering\u002Fbuilds-and-releases"},prev:{slug:"playwright",title:"Playwright E2E Testing",to:"\u002Fengineering\u002Fplaywright"},next:{slug:"translation",title:"i18n translation",to:"\u002Fengineering\u002Ftranslation"}}],fetch:{},mutations:[]}}("text","element","\n","li","p","a","code","true",-1,"span","icon","icon-link","ul","h4",3,"nofollow","noopener","noreferrer","_blank","h3","img",2,"h2","image","Docker images","nocodb\u002Fnocodb-timely","release-draft-note","release-docker","Releases & Builds","builds-of-nocodb","Builds of NocoDB","release-builds","Release builds","how-to-make-a-release-build--","How to make a release build  ?","tagging","Tagging","case-1-leaving-inputs-blank","Case 1: Leaving inputs blank","case-2-manually-input","Case 2: Manually Input","how-does-release-action-work-","How does release action work ?","daily-builds","Daily builds","what-are-daily-builds-","What are daily builds ?","docker-images","timely-builds","Timely builds","what-are-timely-builds-","What are timely builds ?","docker-images-1","executables-or-binaries","Executables or Binaries","nocodb\u002Fnocodb-daily","0.100.0"," (minor bug fix release)","Once "," and ","validate-branch","process-input","pr-to-master","release-npm","close-issues","publish-docs","update-sdk-path","sync-to-develop","The docker images will be built and pushed to Docker Hub (See "," for the full list).","This is to","reduce pull request cycle time","allow issue reporters \u002F reviewers to verify the fix without setting up their local machines","2023-06-28T13:56:32.849Z")));