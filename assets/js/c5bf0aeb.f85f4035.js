"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[233],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2730:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={},d="Available Methods",s={unversionedId:"api_reference/methods",id:"api_reference/methods",title:"Available Methods",description:"| Method                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Result                                                 | Description                                                                                                                                                                                                                                                                                                                        |",source:"@site/docs/api_reference/methods.md",sourceDirName:"api_reference",slug:"/api_reference/methods",permalink:"/docs/api_reference/methods",editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/api_reference/methods.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AvailablePurchase",permalink:"/docs/api_reference/available_purchase"},next:{title:"Product",permalink:"/docs/api_reference/product"}},u=[],p={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"available-methods"},"Available Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Result"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"initConnection()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<boolean>")),(0,i.kt)("td",{parentName:"tr",align:null},"Init IAP module. On Android this can be called to preload the connection to Play Services. True means the Native SDK was initialized successfully. On iOS, it will simply call ",(0,i.kt)("inlineCode",{parentName:"td"},"canMakePayments")," method and return value which is required for the listeners to work properly.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"purchaseUpdatedListener((purchase: ProductPurchase) => {})")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"EmitterSubscription")),(0,i.kt)("td",{parentName:"tr",align:null},"Register a callback that gets called when the store has any updates to purchases that have not yet been finished, consumed or acknowledged. Returns a React Native ",(0,i.kt)("inlineCode",{parentName:"td"},"EmitterSubscription")," on which you can call ",(0,i.kt)("inlineCode",{parentName:"td"},".remove()")," to stop receiving updates. Register you listener as soon as possible and react to updates at all times.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"purchaseErrorListener((error: PurchaseError) => {})")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"EmitterSubscription")),(0,i.kt)("td",{parentName:"tr",align:null},"Register a callback that gets called when there has been an error with a purchase. Returns a React Native ",(0,i.kt)("inlineCode",{parentName:"td"},"EmitterSubscription")," on which you can call ",(0,i.kt)("inlineCode",{parentName:"td"},".remove()")," to stop receiving updates.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getProducts(skus: string[])"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"skus: array of Product ID/sku"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<Product[]>")),(0,i.kt)("td",{parentName:"tr",align:null},"Get a list of products (consumable and non-consumable items, but not subscriptions). Note: With before ",(0,i.kt)("inlineCode",{parentName:"td"},"iOS 11.2"),", this method ",(0,i.kt)("em",{parentName:"td"},"will")," also return subscriptions if they are included in your list of SKUs. This is because we cannot differentiate between IAP products and subscriptions prior to ",(0,i.kt)("inlineCode",{parentName:"td"},"iOS 11.2"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getSubscriptions(skus: string[])"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"skus: array of Subscription ID/sku"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<Subscription[]>")),(0,i.kt)("td",{parentName:"tr",align:null},"Get a list of subscriptions. Note: With before ",(0,i.kt)("inlineCode",{parentName:"td"},"iOS 11.2"),", this method ",(0,i.kt)("em",{parentName:"td"},"will")," also return products if they are included in your list of SKUs. This is because we cannot differentiate between IAP products and subscriptions prior to ",(0,i.kt)("inlineCode",{parentName:"td"},"iOS 11.2"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getPurchaseHistory()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<Purchase[]>")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets an inventory of purchases made by the user regardless of consumption status (where possible).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getAvailablePurchases()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<Purchase[]>")),(0,i.kt)("td",{parentName:"tr",align:null},"Get all purchases made by the user (either non-consumable, or haven't been consumed yet). On Android, it can be called at app launch, but on iOS, only at restoring purchase is recommended (See: ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/dooboolab/react-native-iap/issues/747"},"#747"),").")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"requestPurchase(sku: string, andDangerouslyFinishTransactionAutomatically: boolean, obfuscatedAccountIdAndroid: string, obfuscatedProfileIdAndroid: string)"),(0,i.kt)("ul",null)),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<ProductPurchase>")),(0,i.kt)("td",{parentName:"tr",align:null},"Request a purchase. ",(0,i.kt)("inlineCode",{parentName:"td"},"purchaseUpdatedListener")," will receive the result.",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"andDangerouslyFinishTransactionAutomatically")," defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," for backwards compatibility but this is deprecated and you should set it to false once you're ",(0,i.kt)("a",{parentName:"td",href:"../usage_instructions/purchase"},"manually finishing your transactions"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"requestPurchaseWithQuantityIOS(sku: string, quantity: number)"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"sku: product ID/sku"),(0,i.kt)("li",null,"quantity: Quantity"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"iOS only")," Buy a product with a specified quantity. ",(0,i.kt)("inlineCode",{parentName:"td"},"purchaseUpdatedListener")," will receive the result")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"*","deprecated")," ",(0,i.kt)("del",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"del"},"buySubscription(sku: string)")),(0,i.kt)("ul",null,(0,i.kt)("li",null,"sku: subscription ID/sku"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:null},"Create (buy) a subscription to a sku.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"requestSubscription(sku: string, andDangerouslyFinishTransactionAutomaticallyIOS: boolean, /**oldSkuAndroid: string **WARNING** this parameter has been removed*/, purchaseTokenAndroid: string, prorationModeAndroid: ProrationModesAndroid, obfuscatedAccountIdAndroid: string, obfuscatedProfileIdAndroid: string)"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"sku: subscription ID/sku"),(0,i.kt)("li",null,"prorationModeAndroid: one of undefined, UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY, IMMEDIATE_WITH_TIME_PRORATION, IMMEDIATE_AND_CHARGE_PRORATED_PRICE, IMMEDIATE_WITHOUT_PRORATION, DEFERRED"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"Promise<SubscriptionPurchase ","|"," null>")),(0,i.kt)("td",{parentName:"tr",align:null},"Create (buy) a subscription to a sku. ",(0,i.kt)("strong",{parentName:"td"},"Note:")," Promise resolves to null when using proratioModesAndroid=DEFERRED, and to a SubscriptionPurchase otherwise")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"clearTransactionIOS()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"iOS only")," Clear up unfinished transanctions which sometimes cause problems. Read more in ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/dooboolab/react-native-iap/issues/257"},"#257"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/dooboolab/react-native-iap/issues/801"},"#801"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"clearProductsIOS()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"iOS only")," Clear all products and subscriptions. Read more in below README.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getReceiptIOS()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<string>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"iOS only")," Get the current receipt.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getPendingPurchasesIOS()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<ProductPurchase[]>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"IOS only")," Gets all the transactions which are pending to be finished.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"validateReceiptIos(body: Record<string, unknown>, devMode: boolean)"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"body: receiptBody"),(0,i.kt)("li",null,"devMode: isTest"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"Object ","|"," boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"iOS only")," Validate receipt.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"presentCodeRedemptionSheetIOS()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<null>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"iOS only")," Availability: ",(0,i.kt)("inlineCode",{parentName:"td"},"iOS 14.0+")," Displays a sheet that enables users to redeem subscription offer codes that you generated in App Store Connect.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"endConnection()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<void>")),(0,i.kt)("td",{parentName:"tr",align:null},"End billing connection.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"flushFailedPurchasesCachedAsPendingAndroid()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<void>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Android only")," Consume all 'ghost' purchases (that is, pending payment that already failed but is still marked as pending in Play Store cache)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"finishTransaction(purchase: InAppPurchase/ProductPurchase, isConsumable?: boolean, developerPayloadAndroid?: string)"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"purchase: purchase object"),(0,i.kt)("li",null,"isConsumable?: specify whether the product is a consumable"),(0,i.kt)("li",null,"developerPayloadAndroid: developerPayload"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<void>")),(0,i.kt)("td",{parentName:"tr",align:null},"This method works for both platforms. Equal to finishTransaction for iOS, consume purchase for Android consumables and acknowledge purchase for Android non-consumables.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"*","deprecated")," ",(0,i.kt)("del",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"del"},"buySubscription(sku: string, prevSku?: string, mode?: number)")),(0,i.kt)("ul",null,(0,i.kt)("li",null,"sku: subscription ID/sku"),(0,i.kt)("li",null,"prevSku: old subscription ID/sku (optional)"),(0,i.kt)("li",null,"mode: proration mode (optional)"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<Purchase>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Android only")," Create (buy) a subscription to a sku. For upgrading/downgrading subscription on Android pass the second parameter with current subscription ID, on iOS this is handled automatically by store. You can also optionally pass in a proration mode integer for upgrading/downgrading subscriptions on Android")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"validateReceiptAndroid(bundleId: string, productId: string, productToken: string, accessToken: string)")," ",(0,i.kt)("ul",null,(0,i.kt)("li",null,"bundleId: the packageName"),(0,i.kt)("li",null,"productId: productId"),(0,i.kt)("li",null,"productToken: productToken"),(0,i.kt)("li",null,"accessToken: accessToken"),(0,i.kt)("li",null,"isSubscription: isSubscription"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"Object ","|"," boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Android only")," Validate receipt.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deepLinkToSubscriptionsAndroid(sku: string)")," ",(0,i.kt)("ul",null,(0,i.kt)("li",null,"sku: subscription sku"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Android only")," Deep link user into Google Play's subscriptions screen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"validateReceiptAmazon(developerSecret: string, userId: string, receiptId: string, useSandbox : boolean)")," ",(0,i.kt)("ul",null,(0,i.kt)("li",null,"developerSecret: from the Amazon developer console"),(0,i.kt)("li",null,"userId: who purchased the item"),(0,i.kt)("li",null,"receiptId: long obfuscated string returned when purchasing the item"),(0,i.kt)("li",null,"useSandbox: Defaults to true, use sandbox environment or production."))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"Object ","|"," boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Amazon only")," Validate receipt.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getPromotedProductIOS()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"Promise<Product ","|"," null>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"IOS only")," Returns the productId of the promoted product. Indicates the the App Store purchase should continue from the app instead of the App Store.")))))}c.isMDXComponent=!0}}]);