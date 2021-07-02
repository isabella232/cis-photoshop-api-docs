(self.webpackChunkcis_photoshop_api_docs=self.webpackChunkcis_photoshop_api_docs||[]).push([[355],{8875:function(e,o,t){"use strict";t.r(o),t.d(o,{_frontmatter:function(){return s},default:function(){return d}});var r=t(2122),a=t(9756),i=(t(5007),t(4983)),n=t(9536),l=["components"],s={},p={_frontmatter:s},m=n.Z;function d(e){var o=e.components,t=(0,a.Z)(e,l);return(0,i.mdx)(m,(0,r.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"general-workflow-for-our-api"},"General Workflow for our API"),(0,i.mdx)("p",null,"The typical workflow involves making one or more calls to our API, to edit PSD or other image files, and to create new image renditions."),(0,i.mdx)("p",null,"As you begin integrating the Ps APIs into your workflow, there are a few considerations to keep in mind which we've outlined below:"),(0,i.mdx)("h2",{id:"input-and-output-file-storage"},"Input and Output file storage"),(0,i.mdx)("p",null,"Currently we support the following storage types to reference your assets from:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"AWS S3: By using a presigned GET/PUT URL"),(0,i.mdx)("li",{parentName:"ul"},"Azure: By generating a SAS (Shared Access Signature) for upload/download"),(0,i.mdx)("li",{parentName:"ul"},"Dropbox: Generate temporary upload/download links using ",(0,i.mdx)("a",{parentName:"li",href:"https://dropbox.github.io/dropbox-api-v2-explorer/"},"https://dropbox.github.io/dropbox-api-v2-explorer/"))),(0,i.mdx)("h2",{id:"current-limitations"},"Current Limitations"),(0,i.mdx)("p",null,"There are a few limitations to the APIs you should be aware of ahead of time.  "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Multi-part uploads and downloads are not yet supported"),(0,i.mdx)("li",{parentName:"ul"},"All the endpoints only support a single file input"),(0,i.mdx)("li",{parentName:"ul"},"Error handling is a work in progress. Sometimes you may not see the most helpful of messages")),(0,i.mdx)("h2",{id:"retries"},"Retries"),(0,i.mdx)("p",null,"For increased reliability and stability we have added a retry mechanism for all API calls, and have some recommendations on how to handle these:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The service will retry status codes of 429, 502, 503, 504 three times."),(0,i.mdx)("li",{parentName:"ul"},"You should only retry requests that have a 5xx response code. A 5xx error response indicates there was a problem processing the request on the server."),(0,i.mdx)("li",{parentName:"ul"},"You should implement an exponential back-off retry strategy with 3 retry attempts."),(0,i.mdx)("li",{parentName:"ul"},"You should not retry requests for any other response code.")),(0,i.mdx)("h2",{id:"compatibility-with-photoshop-versions"},"Compatibility with Photoshop versions"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The APIs will open any PSD created with Photoshop 1.0 or later."),(0,i.mdx)("li",{parentName:"ul"},"When saving as PSD, the APIs will create PSDs compatible with the current shipping Photoshop."),(0,i.mdx)("li",{parentName:"ul"},'In regards to "maximize compatibility" referenced in ',(0,i.mdx)("a",{parentName:"li",href:"https://helpx.adobe.com/photoshop/using/file-formats.html#maximize_compatibility_for_psd_and_psb_files"},"https://helpx.adobe.com/photoshop/using/file-formats.html#maximize_compatibility_for_psd_and_psb_files"),"  the API's default to “yes”")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-general-workflow-index-md-733949f1b5a44177f887.js.map