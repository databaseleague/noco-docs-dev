"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[5785],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,g=d["".concat(o,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7644:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={title:"Playwright E2E Testing",description:"Overview to playwright based e2e tests"},l=void 0,s={unversionedId:"engineering/playwright",id:"engineering/playwright",title:"Playwright E2E Testing",description:"Overview to playwright based e2e tests",source:"@site/docs/050.engineering/050.playwright.md",sourceDirName:"050.engineering",slug:"/engineering/playwright",permalink:"/engineering/playwright",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/050.engineering/050.playwright.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Playwright E2E Testing",description:"Overview to playwright based e2e tests"},sidebar:"tutorialSidebar",previous:{title:"Writing Unit Tests",permalink:"/engineering/unit-testing"},next:{title:"Releases & Builds",permalink:"/engineering/builds-and-releases"}},o={},p=[{value:"How to run tests",id:"how-to-run-tests",level:2},{value:"Run Test Server",id:"run-test-server",level:3},{value:"Running all tests",id:"running-all-tests",level:3},{value:"Running individual tests",id:"running-individual-tests",level:3},{value:"Concepts",id:"concepts",level:2},{value:"Independent tests",id:"independent-tests",level:3},{value:"What to test",id:"what-to-test",level:3},{value:"Playwright",id:"playwright",level:3},{value:"Page Objects",id:"page-objects",level:2},{value:"Writing a test",id:"writing-a-test",level:2},{value:"Create a test suite",id:"create-a-test-suite",level:3},{value:"Create a page object",id:"create-a-page-object",level:3},{value:"Writing an action method",id:"writing-an-action-method",level:3},{value:"Writing an assertion/verification method",id:"writing-an-assertionverification-method",level:3},{value:"Tips to avoid flakiness",id:"tips-to-avoid-flakiness",level:2},{value:"Accessing playwright report in the CI",id:"accessing-playwright-report-in-the-ci",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to-run-tests"},"How to run tests"),(0,i.kt)("p",null,"All the tests reside in ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/playwright")," folder."),(0,i.kt)("p",null,"Make sure to install the dependencies (in the playwright folder):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm --filter=playwright install\npnpm exec playwright install --with-deps chromium\n")),(0,i.kt)("h3",{id:"run-test-server"},"Run Test Server"),(0,i.kt)("p",null,"Start the backend test server (in ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/nocodb")," folder):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run watch:run:playwright\n")),(0,i.kt)("p",null,"Start the frontend test server (in ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/nc-gui")," folder):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"NUXT_PAGE_TRANSITION_DISABLE=true pnpm run dev\n")),(0,i.kt)("h3",{id:"running-all-tests"},"Running all tests"),(0,i.kt)("p",null,"For selecting db type, rename ",(0,i.kt)("inlineCode",{parentName:"p"},".env.example")," to ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," and set ",(0,i.kt)("inlineCode",{parentName:"p"},"E2E_DEV_DB_TYPE")," to  ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlite"),"(default), ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"pg"),"."),(0,i.kt)("p",null,"headless mode(without opening browser):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run test\n")),(0,i.kt)("p",null,"with browser:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run test:debug\n")),(0,i.kt)("p",null,"For setting up mysql(sakila):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f ./tests/playwright/scripts/docker-compose-mysql-playwright.yml  up -d\n")),(0,i.kt)("p",null,"For setting up postgres(sakila):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f ./tests/playwright/scripts/docker-compose-playwright-pg.yml \n")),(0,i.kt)("h3",{id:"running-individual-tests"},"Running individual tests"),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},".only")," to the test you want to run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"test.only('should login', async ({ page }) => {\n  // ...\n})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run test\n")),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("h3",{id:"independent-tests"},"Independent tests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All tests are independent of each other."),(0,i.kt)("li",{parentName:"ul"},"Each test starts with a fresh project with a fresh sakila database(option to not use sakila db is also there)."),(0,i.kt)("li",{parentName:"ul"},"Each test creates a new user(email as ",(0,i.kt)("inlineCode",{parentName:"li"},"user@nocodb.com"),") and logs in with that user to the dashboard.")),(0,i.kt)("p",null,"Caveats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Some stuffs are shared i.e, users, plugins etc. So be catious while writing tests touching that. A fix for this is in the works."),(0,i.kt)("li",{parentName:"ul"},"In test, we prefix email and project with the test id, which will be deleted after the test is done.")),(0,i.kt)("h3",{id:"what-to-test"},"What to test"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UI verification. This includes verifying the state of the UI element, i.e if the element is visible, if the element has a particular text etc."),(0,i.kt)("li",{parentName:"ul"},"Test should verify all user flow. A test has a default timeout of 60 seconds. If a test is taking more than 60 seconds, it is a sign that the test should be broken down into smaller tests."),(0,i.kt)("li",{parentName:"ul"},"Test should also verify all the side effects the feature(i.e. On adding a new column type, should verify column deletion as well) will have, and also error cases."),(0,i.kt)("li",{parentName:"ul"},"Test name should be descriptive. It should be easy to understand what the test is doing by just reading the test name.")),(0,i.kt)("h3",{id:"playwright"},"Playwright"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Playwright is a nodejs library for automating chromium, firefox and webkit."),(0,i.kt)("li",{parentName:"ul"},"For each test, a new browser context is created. This means that each test runs in a new incognito window."),(0,i.kt)("li",{parentName:"ul"},"For assertion always use ",(0,i.kt)("inlineCode",{parentName:"li"},"expect")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"@playwright/test")," library. This library provides a lot of useful assertions, which also has retry logic built in.")),(0,i.kt)("h2",{id:"page-objects"},"Page Objects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Page objects are used to abstract over the components/page. This makes the tests more readable and maintainable."),(0,i.kt)("li",{parentName:"ul"},"All page objects are in ",(0,i.kt)("inlineCode",{parentName:"li"},"tests/playwright/pages")," folder."),(0,i.kt)("li",{parentName:"ul"},"All the test related code should be in page objects."),(0,i.kt)("li",{parentName:"ul"},"Methods should be as thin as possible and its better to have multiple methods than one big method, which improves reusability.")),(0,i.kt)("p",null,"The methods of a page object can be classified into 2 categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Actions: Performs an UI actions like click, type, select etc. Is also responsible for waiting for the element to be ready and the action to be performed. This included waiting for API calls to complete."),(0,i.kt)("li",{parentName:"ul"},"Assertions: Asserts the state of the UI element, i.e if the element is visible, if the element has a particular text etc. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"expect")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"@playwright/test")," and if not use ",(0,i.kt)("inlineCode",{parentName:"li"},"expect.poll")," to wait for the assertion to pass.")),(0,i.kt)("h2",{id:"writing-a-test"},"Writing a test"),(0,i.kt)("p",null,"Let's write a test for testing filter functionality."),(0,i.kt)("p",null,"For simplicity, we will have ",(0,i.kt)("inlineCode",{parentName:"p"},"DashboardPage")," implemented, which will have all the methods related to dashboard page and also its child components like Grid, etc."),(0,i.kt)("h3",{id:"create-a-test-suite"},"Create a test suite"),(0,i.kt)("p",null,"Create a new file ",(0,i.kt)("inlineCode",{parentName:"p"},"filter.spec.ts")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/playwright/tests")," folder and use ",(0,i.kt)("inlineCode",{parentName:"p"},"setup")," method to create a new project and user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { test, expect } from '@playwright/test';\nimport setup, { NcContext } from '../setup';\n\ntest.describe('Filter', () => {\n  let context: NcContext;\n\n  test.beforeEach(async ({ page }) => {\n    context = await setup({ page });\n  })\n\n  test('should filter', async ({ page }) => {\n    // ...\n  });\n});\n")),(0,i.kt)("h3",{id:"create-a-page-object"},"Create a page object"),(0,i.kt)("p",null,"Since filter is UI wise scoped to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Toolbar")," , we will add filter page object to ",(0,i.kt)("inlineCode",{parentName:"p"},"ToolbarPage")," page object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export class ToolbarPage extends BasePage {\n  readonly parent: GridPage | GalleryPage | FormPage | KanbanPage;\n  readonly filter: ToolbarFilterPage;\n\n  constructor(parent: GridPage | GalleryPage | FormPage | KanbanPage) {\n    super(parent.rootPage);\n    this.parent = parent;\n    this.filter = new ToolbarFilterPage(this);\n  }\n}\n")),(0,i.kt)("p",null,"We will create ",(0,i.kt)("inlineCode",{parentName:"p"},"ToolbarFilterPage")," page object, which will have all the methods related to filter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export class ToolbarFilterPage extends BasePage {\n  readonly toolbar: ToolbarPage;\n\n  constructor(toolbar: ToolbarPage) {\n    super(toolbar.rootPage);\n    this.toolbar = toolbar;\n  }\n}\n")),(0,i.kt)("p",null,"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"BasePage")," is an abstract class, which used to enforce structure for all page objects. Thus all page object ",(0,i.kt)("em",{parentName:"p"},"should")," inherit ",(0,i.kt)("inlineCode",{parentName:"p"},"BasePage"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Helper methods like ",(0,i.kt)("inlineCode",{parentName:"li"},"waitForResponse")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"getClipboardText")," (this can be access on any page object, with ",(0,i.kt)("inlineCode",{parentName:"li"},"this.waitForResponse"),")"),(0,i.kt)("li",{parentName:"ul"},"Provides structure for page objects, enforces all Page objects to have ",(0,i.kt)("inlineCode",{parentName:"li"},"rootPage")," property, which is the page object created in the test setup."),(0,i.kt)("li",{parentName:"ul"},"Enforces all pages to have a ",(0,i.kt)("inlineCode",{parentName:"li"},"get")," method which will return the locator of the main container of that page, hence we can have focused dom selection, i.e.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// This will only select the button inside the container of the concerned page\nawait this.get().querySelector('button').count();\n")),(0,i.kt)("h3",{id:"writing-an-action-method"},"Writing an action method"),(0,i.kt)("p",null,"This a method which will reset/clear all the filters. Since this is an action method, it will also wait for the ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," filter API to return. Ignoring this API call will cause flakiness in the test, down the line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"async resetFilter() {\n  await this.waitForResponse({\n    uiAction: async () => await this.get().locator('.nc-filter-item-remove-btn').click(),\n    httpMethodsToMatch: ['DELETE'],\n    requestUrlPathToMatch: '/api/v1/db/meta/filters/',\n  });\n}\n")),(0,i.kt)("h3",{id:"writing-an-assertionverification-method"},"Writing an assertion/verification method"),(0,i.kt)("p",null,"Here we use ",(0,i.kt)("inlineCode",{parentName:"p"},"expect")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"@playwright/test")," library, which has retry logic built in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { expect } from '@playwright/test';\n\nasync verifyFilter({ title }: { title: string }) {\n  await expect(\n    this.get().locator(`[data-testid=\"nc-fields-menu-${title}\"]`).locator('input[type=\"checkbox\"]')\n  ).toBeChecked();\n}\n")),(0,i.kt)("h2",{id:"tips-to-avoid-flakiness"},"Tips to avoid flakiness"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If an UI action, causes an API call or the UI state change, then wait for that API call to complete or the UI state to change."),(0,i.kt)("li",{parentName:"ul"},"What to wait out can be situation specific, but in general, is best to wait for the final state to be reached, i.e. in the case of creating filter, while it seems like waiting for the filter API to complete is enough, but after its return the table rows are reloaded and the UI state changes, so its better to wait for the table rows to be reloaded.")),(0,i.kt)("h2",{id:"accessing-playwright-report-in-the-ci"},"Accessing playwright report in the CI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},"Summary")," tab in the CI workflow in github actions."),(0,i.kt)("li",{parentName:"ul"},"Scroll down to ",(0,i.kt)("inlineCode",{parentName:"li"},"Artifacts")," section."),(0,i.kt)("li",{parentName:"ul"},"Access reports which suffixed with the db type and shard number(corresponding to the CI workerflow name). i.e ",(0,i.kt)("inlineCode",{parentName:"li"},"playwright-report-mysql-2")," is for ",(0,i.kt)("inlineCode",{parentName:"li"},"playwright-mysql-2")," workflow."),(0,i.kt)("li",{parentName:"ul"},"Download it and run ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm install -D @playwright/test && npx playwright show-report ./")," inside the downloaded folder.")))}u.isMDXComponent=!0}}]);