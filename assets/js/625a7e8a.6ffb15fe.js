"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[732],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6729:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},s="Retrieving available items",u={unversionedId:"usage_instructions/retrieve_available",id:"usage_instructions/retrieve_available",title:"Retrieving available items",description:"First thing you should do is to define your product IDs for iOS and Android separately like defined below.",source:"@site/docs/usage_instructions/retrieve_available.md",sourceDirName:"usage_instructions",slug:"/usage_instructions/retrieve_available",permalink:"/docs/usage_instructions/retrieve_available",editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/usage_instructions/retrieve_available.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lifecycle",permalink:"/docs/usage_instructions/connection_lifecycle"},next:{title:"Making a purchase",permalink:"/docs/usage_instructions/purchase"}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"retrieving-available-items"},"Retrieving available items"),(0,o.kt)("p",null,"First thing you should do is to define your product IDs for iOS and Android separately like defined below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const productIds = Platform.select({\n  ios: ['com.example.coins100'],\n  android: ['com.example.coins100'],\n});\n")),(0,o.kt)("p",null,"To get a list of valid items, call ",(0,o.kt)("inlineCode",{parentName:"p"},"getProducts()"),"."),(0,o.kt)("p",null,"You can do it in ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount()"),", or another area as appropriate for your app."),(0,o.kt)("p",null,"Since a user may first start your app with a bad internet connection, then later have an internet connection, making preparing/getting items more than once may be a good idea."),(0,o.kt)("p",null,"Like if the user has no IAPs available when the app first starts, you may want to check again when the user enters your IAP store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as RNIap from 'react-native-iap';\n\n  async componentDidMount() {\n    try {\n      const products: Product[] = await RNIap.getProducts(productIds);\n      this.setState({ products });\n    } catch(err) {\n      console.warn(err); // standardized err.code and err.message available\n    }\n  }\n")),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"product")," returns from ",(0,o.kt)("inlineCode",{parentName:"p"},"getProducts()")," contains a ",(0,o.kt)("a",{parentName:"p",href:"../api_reference/product"},"Product object"),"."))}d.isMDXComponent=!0}}]);