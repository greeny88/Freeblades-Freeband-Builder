(self.webpackChunkfreeblades_freeband_builder=self.webpackChunkfreeblades_freeband_builder||[]).push([[934],{9828:(e,t,n)=>{"use strict";n.d(t,{D:()=>a});var o=n(5752),r=n(6716),i=n(1480);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e,t,n,o){var r,i=arguments.length,f=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)f=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(f=(i<3?r(f):i>3?r(t,n,f):r(t,n))||f);return i>3&&f&&Object.defineProperty(t,n,f),f},u=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){this.navSub=new r.x}return e.prototype.setFreeband=function(e){this.prebuiltFreeband=e},e.prototype.getFreeband=function(){var e=this;return new i.y((function(t){return t.next(e.prebuiltFreeband),t.complete(),{unsubscribe:function(){this.prebuiltFreeband=void 0}}}))},e.prototype.closeNav=function(){this.navSub.next(void 0)},e.prototype.closeNavTrigger=function(){return this.navSub},e=f([(0,o.GSi)(),u("design:paramtypes",[])],e)}()},611:(e,t,n)=>{"use strict";n.d(t,{M:()=>u});var o=n(5752),r=n(6716);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e,t,n,o){var r,c=arguments.length,f=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":i(Reflect))&&"function"==typeof Reflect.decorate)f=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(f=(c<3?r(f):c>3?r(t,n,f):r(t,n))||f);return c>3&&f&&Object.defineProperty(t,n,f),f},f=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":i(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(){var e=this,t=window.indexedDB.open("freeband_builder",1);this.dbConnection=new r.x,t.onerror=function(e){throw console.error(e),e},t.onsuccess=function(){e.db=t.result,e.dbConnection.next(e.db)},t.onupgradeneeded=function(e){e.target.result.createObjectStore("previous",{keyPath:"faction"})}}return e.prototype.getPreviousFreeband=function(){var e=new r.x;return this.dbConnection.subscribe((function(t){var n=t.transaction("previous","readonly").objectStore("previous"),o=void 0;n.openCursor().onsuccess=function(t){var n=t.target.result;n?(n.value&&(o=n.value),n.continue()):e.next(o)}})),this.db&&this.dbConnection.next(this.db),e},e.prototype.deleteOldFreeband=function(){this.dbConnection.subscribe((function(e){var t=e.transaction("previous","readwrite");t.objectStore("previous").clear();t.onerror=function(e){return console.error(e)}})),this.db&&this.dbConnection.next(this.db)},e.prototype.saveCurrentFreeband=function(e){this.dbConnection.subscribe((function(t){var n=t.transaction("previous","readwrite");n.objectStore("previous").put(e);n.onerror=function(e){return console.error(e)}})),this.db&&this.dbConnection.next(this.db)},e=c([(0,o.GSi)(),f("design:paramtypes",[])],e)}()},7683:(e,t,n)=>{"use strict";n.d(t,{b:()=>f});var o=n(5752);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e,t,n,o){var i,c=arguments.length,f=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)f=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(f=(c<3?i(f):c>3?i(t,n,f):i(t,n))||f);return c>3&&f&&Object.defineProperty(t,n,f),f},c=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(){this.version="21-1",this.buildingRules="96",this.altLeaderRules=""}return e=i([(0,o.GSi)(),c("design:paramtypes",[])],e)}()},3148:(e,t,n)=>{"use strict";n(6037),n(8660);var o=n(6374),r=n(5752),i=n(9266),c=n(1995),f=n(5284),u=n(3181),a=n(5980),l=n(7741),s=n(8381),d=n(1964),p=n(7167),b=n(9828),y=n(3205);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var v=function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},h=function(){function e(){}return e=v([(0,r.wA2)({selector:"page-not-found",template:'<div><p>Rolled a 20 on the Gaalabor? Go back a page, <a routerLink="">try from the home page</a> or <a href="https://github.com/greeny88/Freeblades-Freeband-Builder/issues" target="_blank">let me know there is an issue</a>.</p></div>'})],e)}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var R=function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":g(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},S=[{path:"builder",loadChildren:function(){return Promise.all([n.e(975),n.e(447)]).then(n.bind(n,733)).then((function(e){return e.BuilderModule}))}},{path:"prebuilt",loadChildren:function(){return n.e(905).then(n.bind(n,2318)).then((function(e){return e.PrebuiltModule}))}},{path:"",redirectTo:"builder",pathMatch:"full"},{path:"**",component:h}],w=function(){function e(){}return e=R([(0,r.LVF)({imports:[y.Bz.forRoot(S)],exports:[y.Bz],declarations:[h]})],e)}(),j=n(611),O=n(7683);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var k=function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":P(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},F=function(){function e(){}return e=k([(0,r.LVF)({imports:[w],exports:[w],providers:[j.M,O.b]})],e)}();function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var x=function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":C(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},D=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":C(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},L=function(){function e(e,t,n){this.commService=e,this.zone=t,this.snackBar=n}return e.prototype.ngOnInit=function(){var e=this;this.commService.closeNavTrigger().subscribe((function(){return e.sidenav.close()})),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.getRegistration("service-worker.js").then((function(t){t.onupdatefound=function(t){e.zone.run((function(){e.snackBar.open("New version of app available","Refresh").onAction().subscribe((function(){return location.reload()}))}))}}))}))},x([(0,r.i9L)("sidenav"),D("design:type",s.JX)],e.prototype,"sidenav",void 0),e=x([(0,r.wA2)({selector:"freeband-builder",template:'<div id="mainDisplay"><mat-toolbar class="top-bar mat-primary"><mat-toolbar-row class="noPrint"><button mat-icon-button (click)="sidenav.toggle()"><mat-icon>menu</mat-icon></button><h1>Freeblades Freeband Builder</h1></mat-toolbar-row></mat-toolbar><mat-sidenav-container id="mainContainer"><mat-sidenav #sidenav mode="side"><p><a routerLink="/builder" (click)="sidenav.close()">Builder</a></p><p><a routerLink="/prebuilt" (click)="sidenav.close()">Browse Prebuilt Freebands</a></p></mat-sidenav><mat-sidenav-content><router-outlet></router-outlet></mat-sidenav-content></mat-sidenav-container><footer>This is a fan created tool based on the rules and models from Freeblades Fantasy Skirmish Game which is owned and created by DGS Games LLC (<a href="https://www.dgsgames.com/" target="_blank">https://www.dgsgames.com/</a>).</footer></div>'}),D("design:paramtypes",[b.D,r.R0b,d.ux])],e)}();function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var G=function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":B(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},_=function(){function e(){}return e=G([(0,r.LVF)({imports:[f.b2,u.PW,i.o9,c.u5,F,a.ot,l.Ps,s.SJ,d.ZX,p.g0],declarations:[L],bootstrap:[L],providers:[b.D]})],e)}();(0,o.y)().bootstrapModule(_)}},e=>{"use strict";e.O(0,[934],(()=>[975,447,905].map(e.E)),5);e.O(0,[975,531,509,967],(()=>{return t=3148,e(e.s=t);var t}));e.O()}]);