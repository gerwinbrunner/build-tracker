(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),r=(n(0),n(164)),o={id:"api-client",title:"@build-tracker/api-client",sidebar_label:"@build-tracker/api-client"},c={id:"packages/api-client",title:"@build-tracker/api-client",description:"The `@build-tracker/api-client` package includes node.js functions for creating and uploading builds to your Build Tracker instance\u2019s API.",source:"@site/docs/packages/api-client.md",permalink:"/docs/packages/api-client",editUrl:"https://github.com/paularmstrong/build-tracker/edit/master/docs/docs/packages/api-client.md",sidebar_label:"@build-tracker/api-client",sidebar:"docs",previous:{title:"Contributing to Build Tracker",permalink:"/docs/guides/contributing"},next:{title:"@build-tracker/api-errors",permalink:"/docs/packages/api-errors"}},l=[{value:"Install",id:"install",children:[]},{value:"Configuration",id:"configuration",children:[{value:"<code>applicationUrl: string</code>",id:"applicationurl-string",children:[]},{value:"<code>artifacts: Array&lt;string&gt;</code>",id:"artifacts-arraystring",children:[]},{value:"<code>baseDir?: string = process.cwd()</code>",id:"basedir-string--processcwd",children:[]},{value:"<code>cwd?: string = process.cwd()</code>",id:"cwd-string--processcwd",children:[]},{value:"<code>getFilenameHash?: (filename: string) =&gt; string | null</code>",id:"getfilenamehash-filename-string--string--null",children:[]},{value:"<code>nameMapper?: (filename: string) =&gt; string</code>",id:"namemapper-filename-string--string",children:[]},{value:"<code>buildUrlFormat?: string</code>",id:"buildurlformat-string",children:[]},{value:"<code>onCompare?: (data: APIResponse) =&gt; Promise&lt;void&gt;</code>",id:"oncompare-data-apiresponse--promisevoid",children:[]}]},{value:"API",id:"api",children:[{value:"<code>getConfig(path?: string): Promise&lt;Config&gt;</code>",id:"getconfigpath-string-promiseconfig",children:[]},{value:"<code>createBuild(config: Config, opts: Options): Promise&lt;Build&gt;</code>",id:"createbuildconfig-config-opts-options-promisebuild",children:[]},{value:"<code>statArtifacts(config): Map&lt;string, Stat&gt;</code>",id:"statartifactsconfig-mapstring-stat",children:[]},{value:"<code>uploadBuild(config: Config, build: Build, apiToken?: string, logger: { log, error }): Promise&lt;ApiReturn&gt;</code>",id:"uploadbuildconfig-config-build-build-apitoken-string-logger--log-error--promiseapireturn",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@build-tracker/api-client")," package includes node.js functions for creating and uploading builds to your Build Tracker instance\u2019s API."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Important note:")," Set up the Build Tracker API configuration close to your application's code (in the same repository and workspace). Remember that the configuration for the API is ",Object(r.b)("strong",{parentName:"p"},"not")," the same as the configuration for the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/packages/server"}),"server"),".")),Object(r.b)("h2",{id:"install"},"Install"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @build-tracker/api-client@latest\n# or\nnpm install --save @build-tracker/api-client@latest\n")),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"The Build Tracker API is easily configured using a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/davidtheclark/cosmiconfig"}),"cosmiconfig")," compatible file."),Object(r.b)("p",null,"Starting from the current working directory, it will look for the following possible sources, in this order:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"a ",Object(r.b)("inlineCode",{parentName:"li"},"build-tracker")," property in your ",Object(r.b)("inlineCode",{parentName:"li"},"package.json")),Object(r.b)("li",{parentName:"ol"},"a ",Object(r.b)("inlineCode",{parentName:"li"},".build-tracerrc")," file"),Object(r.b)("li",{parentName:"ol"},"a ",Object(r.b)("inlineCode",{parentName:"li"},"build-tracker.config.js")," file exporting a JS object")),Object(r.b)("p",null,"The .",Object(r.b)("inlineCode",{parentName:"p"},".build-trackerrc")," file (without extension) can be in JSON or YAML format."),Object(r.b)("p",null,"Alternately, you can add a filename extension to designate JSON, YAML, or JS format: ",Object(r.b)("inlineCode",{parentName:"p"},".build-trackerrc.json"),", ",Object(r.b)("inlineCode",{parentName:"p"},".build-trackerrc.yaml"),", ",Object(r.b)("inlineCode",{parentName:"p"},".build-trackerrc.yml"),", ",Object(r.b)("inlineCode",{parentName:"p"},".build-trackerrc.js"),". You may want to use an extension so that your text editor can better interpret the file, and help with syntax checking and highlighting."),Object(r.b)("p",null,"Once one of these is found and parsed, the search will stop and that object will be used."),Object(r.b)("p",null,"The configuration search can also be short-circuited by passing a ",Object(r.b)("inlineCode",{parentName:"p"},"--config")," argument with a path to your configuration file."),Object(r.b)("h3",{id:"applicationurl-string"},Object(r.b)("inlineCode",{parentName:"h3"},"applicationUrl: string")),Object(r.b)("p",null,"The full URL (with scheme) to your application. New builds will be posted to the API available at this URL"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  applicationUrl: 'https://build-tracker-demo.herokuapp.com',\n  // OR, if you're running from a subdirectory\n  applicationUrl: 'https://mysite.dev/build-tracker',\n};\n")),Object(r.b)("h3",{id:"artifacts-arraystring"},Object(r.b)("inlineCode",{parentName:"h3"},"artifacts: Array<string>")),Object(r.b)("p",null,"An array of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/isaacs/node-glob#readme"}),"glob")," paths to search for your artifacts."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  artifacts: ['./dist/**/*.js'],\n};\n")),Object(r.b)("h3",{id:"basedir-string--processcwd"},Object(r.b)("inlineCode",{parentName:"h3"},"baseDir?: string = process.cwd()")),Object(r.b)("p",null,"A base directory option to calculate relative paths for your artifacts. This is most often useful for stripping off unwanted paths, like ",Object(r.b)("inlineCode",{parentName:"p"},"dist"),", though it must be an absolute path on your system. This can be most easily accomplished by using the ",Object(r.b)("inlineCode",{parentName:"p"},"path")," node API:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  baseDir: path.join(__dirname, 'dist'),\n};\n")),Object(r.b)("h3",{id:"cwd-string--processcwd"},Object(r.b)("inlineCode",{parentName:"h3"},"cwd?: string = process.cwd()")),Object(r.b)("p",null,"The command working directory. Set this to change the script working path to something else other than ",Object(r.b)("inlineCode",{parentName:"p"},"process.cwd()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  cwd: path.join(__dirname, '..'),\n};\n")),Object(r.b)("h3",{id:"getfilenamehash-filename-string--string--null"},Object(r.b)("inlineCode",{parentName:"h3"},"getFilenameHash?: (filename: string) => string | null")),Object(r.b)("p",null,"This optional method allows you to extract a filename hash from the built artifact filename. Many applications built with webpack will include a chunk hash in the filename for cache-busting reasons."),Object(r.b)("p",null,"It's important to register filename hashes in Build Tracker builds foe each artifact to know if your service is requiring users to redownload files, even though their functional content has not changed."),Object(r.b)("p",null,"For example, if your dist folder looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"vendor.a64785b.js\nmain.56acd2e.js\n")),Object(r.b)("p",null,"You can extract the hash from the filename with a function:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  getFilenameHash: (fileName) => {\n    const parts = path.basename(fileName, '.js').split('.');\n    return parts.length > 1 ? parts[parts.length - 1] : null;\n  },\n};\n")),Object(r.b)("h3",{id:"namemapper-filename-string--string"},Object(r.b)("inlineCode",{parentName:"h3"},"nameMapper?: (filename: string) => string")),Object(r.b)("p",null,"Similar to the ",Object(r.b)("inlineCode",{parentName:"p"},"getFilenameHash")," method above, you may want to strip out parts of the artifact filenames to make them more legible in reports and the application."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const filenameHash = (fileName) => {\n  const parts = path.basename(fileName, '.js').split('.');\n  return parts.length > 1 ? parts[parts.length - 1] : null;\n};\n\nmodule.exports = {\n  nameMapper: (fileName) => {\n    const hash = filenameHash(fileName);\n    const out = fileName.replace(/\\.js$/, '');\n    return hash ? out.replace(`.${hash}`, '') : out;\n  },\n};\n")),Object(r.b)("h3",{id:"buildurlformat-string"},Object(r.b)("inlineCode",{parentName:"h3"},"buildUrlFormat?: string")),Object(r.b)("p",null,"You may want to link each build to a commit. Provide ",Object(r.b)("inlineCode",{parentName:"p"},"buildUrlFormat")," in the following format to map revision value to an url."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  buildUrlFormat: 'https://github.com/paularmstrong/build-tracker/commit/:revision',\n};\n")),Object(r.b)("h3",{id:"oncompare-data-apiresponse--promisevoid"},Object(r.b)("inlineCode",{parentName:"h3"},"onCompare?: (data: APIResponse) => Promise<void>")),Object(r.b)("p",null,"Take any action on the response from the API."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  onCompare: (data) => {\n    // send markdown response somewhere\u2026\n    GithubApi.postComment(data.summary.join('\\n'));\n    return Promise.resolve();\n  },\n};\n")),Object(r.b)("p",null,"The data response consists of a lot of useful information. Depending on how you want to report information, you may only need part of it."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface APIResponse {\n  // JSON serialized string that can be read back into a `Comparator` instance\n  comparatorData: string;\n  // Summary response from the original Comparator object\n  summary: Array<string>;\n}\n")),Object(r.b)("p",null,"More can be done with the data. Check out the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"guides/ci.md"}),"Continuous Integration guide")," for more ideas."),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("h3",{id:"getconfigpath-string-promiseconfig"},Object(r.b)("inlineCode",{parentName:"h3"},"getConfig(path?: string): Promise<Config>")),Object(r.b)("p",null,"Reads your Build Tracker Utility configuration. If a path is not provided, this will use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/davidtheclark/cosmiconfig"}),"cosmiconfig")," to find the appropriate file."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { getConfig } from '@build-tracker/api-client';\n\nconst config = await getConfig();\n")),Object(r.b)("h3",{id:"createbuildconfig-config-opts-options-promisebuild"},Object(r.b)("inlineCode",{parentName:"h3"},"createBuild(config: Config, opts: Options): Promise<Build>")),Object(r.b)("p",null,"Creates a JSON-friendly build configuration, suitable for POSTing to the Build Tracker API."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createBuild, getConfig } from '@build-tracker/api-client';\n\nconst config = await getConfig();\ncreateBuild(config, {\n  branch: 'master', // optional, in case your git state is not on a branch\n  meta: {}, // optional additional metadata to provide in the build\n  parentRevision: '123456', // optional, in case your git state cannot find the merge-base\n  skipDirtyCheck: false, // set to true to bypass enforcing no local changes in your git work tree\n}).then((build) => {\n  // do something with the build\n});\n")),Object(r.b)("h3",{id:"statartifactsconfig-mapstring-stat"},Object(r.b)("inlineCode",{parentName:"h3"},"statArtifacts(config): Map<string, Stat>")),Object(r.b)("p",null,"Reads the artifacts from disk and builds a map of filenames to size stats. This is done automatically by ",Object(r.b)("inlineCode",{parentName:"p"},"createBuild"),"; it is only included in case you want to create builds with a custom script."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { getConfig, statArtifacts } from '@build-tracker/api-client';\n\nconst config = await getConfig();\nconst artifactMap = statArtifacts(config);\nconst mainSizes = artifactMap.get('main.js');\n")),Object(r.b)("h3",{id:"uploadbuildconfig-config-build-build-apitoken-string-logger--log-error--promiseapireturn"},Object(r.b)("inlineCode",{parentName:"h3"},"uploadBuild(config: Config, build: Build, apiToken?: string, logger: { log, error }): Promise<ApiReturn>")),Object(r.b)("p",null,"Uploads a Build to your Build Tracker instance."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createBuild, getConfig, uploadBuild } from '@build-tracker/api-client';\n\nconst config = await getConfig();\ncreateBuild(config, {}).then((build) => {\n  return uploadBuild(config, build, process.env.BT_API_AUTH_TOKEN);\n});\n")))}p.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return n?i.a.createElement(m,c({ref:t},s,{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);