(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(162)),i={id:"contributing",title:"Contributing to Build Tracker",sidebar_label:"Contributing"},c={id:"guides/contributing",title:"Contributing to Build Tracker",description:"> Thank you for your interest in helping out with Build Tracker! This is a project done with joy and care, out of our free time. Before getting started, please familiarize yourself with the [Contributor Covenant Code of Conduct](https://github.com/paularmstrong/build-tracker/blob/next/CODE_OF_CONDUCT.md).",source:"@site/docs/guides/contributing.md",permalink:"/docs/guides/contributing",editUrl:"https://github.com/paularmstrong/build-tracker/edit/next/docs/docs/guides/contributing.md",sidebar_label:"Contributing",sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/docs/guides/ci"},next:{title:"@build-tracker/api-errors",permalink:"/docs/packages/api-errors"}},l=[{value:"Getting started",id:"getting-started",children:[{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"Make your changes",id:"make-your-changes",children:[]},{value:"Open a pull request",id:"open-a-pull-request",children:[]}]},{value:"Monorepo",id:"monorepo",children:[{value:"Package workspace structure",id:"package-workspace-structure",children:[]}]},{value:"Development",id:"development",children:[{value:"Adding a dependency to a package",id:"adding-a-dependency-to-a-package",children:[]},{value:"Don&#39;t abstract too early",id:"dont-abstract-too-early",children:[]}]},{value:"Typescript",id:"typescript",children:[]},{value:"Dev environment",id:"dev-environment",children:[]},{value:"Code integrity",id:"code-integrity",children:[]},{value:"Documentation",id:"documentation",children:[{value:"Running the docs locally",id:"running-the-docs-locally",children:[]},{value:"Updating documentation",id:"updating-documentation",children:[]},{value:"Updating other pages",id:"updating-other-pages",children:[]},{value:"Submitting your PR",id:"submitting-your-pr",children:[]},{value:"Other help",id:"other-help",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Thank you for your interest in helping out with Build Tracker! This is a project done with joy and care, out of our free time. Before getting started, please familiarize yourself with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/paularmstrong/build-tracker/blob/next/CODE_OF_CONDUCT.md"}),"Contributor Covenant Code of Conduct"),".")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("p",null,"Fork and pull the repository from Github. If you're unsure how to fork a repository, read the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.github.com/en/articles/fork-a-repo"}),"getting started docs here"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git clone git@github.com:<myuser>/build-tracker.git\n")),Object(o.b)("p",null,"Once you've pulled the repository, you'll be working on the ",Object(o.b)("em",{parentName:"p"},"next")," branch. This may be slightly different from what you're used to, so make sure to pay attention to always keep the ",Object(o.b)("em",{parentName:"p"},"next")," branch up to date, and don't worry about ",Object(o.b)("em",{parentName:"p"},"master"),"."),Object(o.b)("h3",{id:"install-dependencies"},"Install dependencies"),Object(o.b)("p",null,"Build Tracker is a monorepo managed by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://yarnpkg.com"}),"Yarn"),". Start by installing dependencies for all packages:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"cd build-tracker\nyarn\n")),Object(o.b)("h3",{id:"make-your-changes"},"Make your changes"),Object(o.b)("p",null,"Always work on features in a separate branch from the main ",Object(o.b)("em",{parentName:"p"},"next")," or ",Object(o.b)("em",{parentName:"p"},"master")," branch."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"git checkout -b my-feature\n")),Object(o.b)("p",null,"Now that you're on a branch, make changes directly to the code related to your feature or bug fix."),Object(o.b)("p",null,"Ensure to always add tests, preferrably before you start making changes. This helps both you and any future reviewer verify that the code's intentions work correctly."),Object(o.b)("p",null,"Run tests using the main script from the root of the repository:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn test\n")),Object(o.b)("p",null,"Once you've completed your changes and all of your tests pass, commit and push your branch to your fork:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'git commit -am "[bugfix] a short description of what I did"\ngit push\n')),Object(o.b)("h3",{id:"open-a-pull-request"},"Open a pull request"),Object(o.b)("p",null,"Finally, open a pull request on the main ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/paularmstrong/build-tracker"}),"Build Tracker repository"),"."),Object(o.b)("h2",{id:"monorepo"},"Monorepo"),Object(o.b)("p",null,"The Build Tracker git repository is a monorepo that is composed of many publishable packages. This has been done so that it's easier to iterate on cross-functional dependencies without requiring premature publishing steps."),Object(o.b)("p",null,"The tool for managing these packages is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/lerna/lerna"}),"Lerna")," with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://yarnpkg.com/en/docs/workspaces"}),"Yarn workspaces"),"."),Object(o.b)("h3",{id:"package-workspace-structure"},"Package workspace structure"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plaintext"}),"\u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u2514\u2500\u2500 website\n\u251c\u2500\u2500 plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 with-mariadb\n\u2502\xa0\xa0 \u2514\u2500\u2500 with-postgres\n\u2514\u2500\u2500 src\n \xa0\xa0 \u251c\u2500\u2500 api-errors\n \xa0\xa0 \u251c\u2500\u2500 app\n \xa0\xa0 \u251c\u2500\u2500 build\n \xa0\xa0 \u251c\u2500\u2500 cli\n \xa0\xa0 \u251c\u2500\u2500 comparator\n \xa0\xa0 \u251c\u2500\u2500 fixtures\n \xa0\xa0 \u251c\u2500\u2500 formatting\n \xa0\xa0 \u251c\u2500\u2500 server\n \xa0\xa0 \u2514\u2500\u2500 types\n")),Object(o.b)("h4",{id:"source-src"},"Source ",Object(o.b)("inlineCode",{parentName:"h4"},"./src")),Object(o.b)("p",null,"All core Build Tracker packages reside here."),Object(o.b)("p",null,"All folder names should be mapped as the publishable name without the ",Object(o.b)("inlineCode",{parentName:"p"},"@build-tracker")," scope. For example: ",Object(o.b)("inlineCode",{parentName:"p"},"@build-tracker/app")," is in the path ",Object(o.b)("inlineCode",{parentName:"p"},"src/app"),", while ",Object(o.b)("inlineCode",{parentName:"p"},"@build-tracker/server")," is at ",Object(o.b)("inlineCode",{parentName:"p"},"src/server"),"."),Object(o.b)("h4",{id:"plugins-plugins"},"Plugins ",Object(o.b)("inlineCode",{parentName:"h4"},"./plugins")),Object(o.b)("p",null,"All implementation-specific code for various integrations should be kept here, instead of in the ",Object(o.b)("inlineCode",{parentName:"p"},"src")," directory."),Object(o.b)("p",null,"All folder names should be mapped as the publishable name without the ",Object(o.b)("inlineCode",{parentName:"p"},"@build-tracker/plugin-")," scope. For example: ",Object(o.b)("inlineCode",{parentName:"p"},"@build-tracker/plugin-with-mariadb")," is in the path ",Object(o.b)("inlineCode",{parentName:"p"},"plugins/with-mariadb"),"."),Object(o.b)("p",null,"Some local configs are available for development purposes. To use them, it's recommended to use a Docker container, since it's easy to seed and throw away:"),Object(o.b)("h5",{id:"mariadb"},"MariaDB"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker run -p 3307:3306 --name bt-mariadb -e MYSQL_ROOT_PASSWORD=tacos -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=buildtracker -d mariadb --default-authentication-plugin=mysql_native_password\nyarn ts-node src/server/src/index.ts setup -c ./config/mariadb.js\nyarn ts-node src/server/src/index.ts seed -c ./config/mariadb.js\nyarn dev:mariadb\n")),Object(o.b)("h5",{id:"mysql"},"MySQL"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker run -p 3306:3306 --name bt-mysql -e MYSQL_ROOT_PASSWORD=tacos -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=buildtracker -d mysql --default-authentication-plugin=mysql_native_password\nyarn ts-node src/server/src/index.ts setup -c ./config/mysql.js\nyarn ts-node src/server/src/index.ts seed -c ./config/mysql.js\nyarn dev:mysql\n")),Object(o.b)("h5",{id:"postgres"},"Postgres"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"docker run --name pg -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=buildtracker -p 54320:5432 -d postgres\nyarn ts-node src/server/src/index.ts setup -c ./config/postgres.js\nyarn ts-node src/server/src/index.ts seed -c ./config/postgres.js\nyarn dev:postgres\n")),Object(o.b)("h4",{id:"docs-docs"},"Docs ",Object(o.b)("inlineCode",{parentName:"h4"},"./docs")),Object(o.b)("p",null,"This directory holds packages related to the documentation website"),Object(o.b)("h2",{id:"development"},"Development"),Object(o.b)("p",null,"Here are some things to keep in mind while working in a monorepo:"),Object(o.b)("h3",{id:"adding-a-dependency-to-a-package"},"Adding a dependency to a package"),Object(o.b)("p",null,"To add a third-party dependency to a sub-package in the Build Tracker repository, ensure that it's done from the specific sub-package using the ",Object(o.b)("inlineCode",{parentName:"p"},"yarn workspace")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# To add to the @build-tracker/app package\n$ yarn workspace @build-tracker/app add <some-third-party-module>\n")),Object(o.b)("h3",{id:"dont-abstract-too-early"},"Don't abstract too early"),Object(o.b)("p",null,"Repeating code is not inherently bad. If some logic clearly fits in one of the already published packages, that's probably the right place for it. If there isn't a package available for something that is reusable, use your best judgement about complexity and scope of functions to determine if a new package is warranted."),Object(o.b)("h2",{id:"typescript"},"Typescript"),Object(o.b)("p",null,"Build Tracker is written in Typescript throughout all workspaces. Please do not add code that is not written in Typescript or change to another language."),Object(o.b)("h2",{id:"dev-environment"},"Dev environment"),Object(o.b)("p",null,"To run the development environment, some shortcuts are provided in the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," scripts:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn dev")," Run the server and application in a hot-reloadable environment using pre-seeded builds on the filesystem"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn dev:large")," This is the same as ",Object(o.b)("inlineCode",{parentName:"li"},"yarn:dev"),", but with a larger dataset. More builds and many more artifacts in each."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn dev:maria")," Run the server using a local MariaDB instance"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn dev:postgres")," Run the server using a local Postgres instance")),Object(o.b)("h2",{id:"code-integrity"},"Code integrity"),Object(o.b)("p",null,"The following conformance checks can be run manually and will be automatically run on ",Object(o.b)("inlineCode",{parentName:"p"},"pre-commit")," as well as during the pull-request verification flow via Github Actions."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn lint")," Lint and auto-format code"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn test")," Jest tests"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn tsc")," Typescript type check")),Object(o.b)("h2",{id:"documentation"},"Documentation"),Object(o.b)("p",null,"Documentation is a great place to get started contributing to the Build Tracker project because writing good docs is difficult. For that reason, your help is ",Object(o.b)("em",{parentName:"p"},"always")," appreciated."),Object(o.b)("h3",{id:"running-the-docs-locally"},"Running the docs locally"),Object(o.b)("p",null,"To run the documentation with hot reloading from your local machine, simple run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ yarn docs\nLiveReload server started on port 35729\nDocusaurus server started on port 3000\n")),Object(o.b)("p",null,"Your browser should automatically be opened to the documentation site running locally. If it is not, you can visit ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000")," (or swap the port ",Object(o.b)("inlineCode",{parentName:"p"},"3000")," with whatever is on the last line of the output above)"),Object(o.b)("h3",{id:"updating-documentation"},"Updating documentation"),Object(o.b)("p",null,"To update any documentation pages, first update the files from the repository root at ",Object(o.b)("inlineCode",{parentName:"p"},"docs/docs"),". If your changes are also relevant to the 1.x.x version, you will also need to update ",Object(o.b)("inlineCode",{parentName:"p"},"website/versioned_docs/1.0.0")," files."),Object(o.b)("h3",{id:"updating-other-pages"},"Updating other pages"),Object(o.b)("p",null,"All pages and templates are written with React.js and can be found in ",Object(o.b)("inlineCode",{parentName:"p"},"website/core")," and ",Object(o.b)("inlineCode",{parentName:"p"},"website/pages"),"."),Object(o.b)("h3",{id:"submitting-your-pr"},"Submitting your PR"),Object(o.b)("p",null,"After your changes look the way you want on your local documentation server. You can close the server down (",Object(o.b)("inlineCode",{parentName:"p"},"CTRL+C"),"). Simply commit your changes and open a PR on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/paularmstrong/build-tracker"}),"Build Tracker repository"),"."),Object(o.b)("h3",{id:"other-help"},"Other help"),Object(o.b)("p",null,"Build Tracker uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docusaurus.io"}),"Docusaurus")," for generating it's docs. If you're unfamiliar with any of the internals of how the docs are built, structured, or how to add a feature to them, the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docusaurus.io"}),"official docs")," are the best place to start."))}p.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(h,c({ref:t},s,{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);