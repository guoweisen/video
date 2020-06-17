window.__require=function e(t,c,o){function n(r,a){if(!c[r]){if(!t[r]){var l=r.split("/");if(l=l[l.length-1],!t[l]){var u="function"==typeof __require&&__require;if(!a&&u)return u(l,!0);if(i)return i(l,!0);throw new Error("Cannot find module '"+r+"'")}r=l}var s=c[r]={exports:{}};t[r][0].call(s.exports,function(e){return n(t[r][1][e]||e)},s,s.exports,e,t,c,o)}return c[r].exports}for(var i="function"==typeof __require&&__require,r=0;r<o.length;r++)n(o[r]);return n}({Anims:[function(e,t,c){"use strict";cc._RF.push(t,"8ddf0dZe1tFrIToUyoWQXfj","Anims");var o,n=this&&this.__extends||function(){var e=function(t,c){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var c in t)t.hasOwnProperty(c)&&(e[c]=t[c])})(t,c)};return function(t,c){function o(){this.constructor=t}e(t,c),t.prototype=null===c?Object.create(c):(o.prototype=c.prototype,new o)}}(),i=this&&this.__decorate||function(e,t,c,o){var n,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,c):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,c,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i<3?n(r):i>3?n(t,c,r):n(t,c))||r);return i>3&&r&&Object.defineProperty(t,c,r),r};Object.defineProperty(c,"__esModule",{value:!0}),function(e){e[e.FloatH=0]="FloatH",e[e.FloatV=1]="FloatV",e[e.Rotate=2]="Rotate",e[e.Rotate10=3]="Rotate10",e[e.Twinkle=4]="Twinkle",e[e.Scale=5]="Scale",e[e.MoveHand=6]="MoveHand",e[e.MoveAround=7]="MoveAround"}(o||(o={}));var r=cc._decorator,a=r.ccclass,l=r.property,u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.aniType=o.FloatH,t}return n(t,e),t.prototype.onLoad=function(){switch(this.aniType){case o.FloatH:this.node.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1.5,10,0),cc.moveBy(1.2,-10,0))));break;case o.FloatV:this.node.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5,0,20),cc.moveBy(.5,0,-20))));break;case o.Rotate:this.node.runAction(cc.repeatForever(cc.rotateBy(6,360)));break;case o.Twinkle:this.node.runAction(cc.repeatForever(cc.sequence(cc.fadeOut(.5),cc.fadeIn(.5))));break;case o.Rotate10:this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.1,10),cc.spawn(cc.rotateTo(.1,0),cc.moveBy(.1,5,0)),cc.rotateTo(.1,-10),cc.spawn(cc.rotateTo(.1,0),cc.moveBy(.1,-5,0)))));break;case o.Scale:this.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5,.95),cc.scaleTo(.5,1))));break;case o.MoveHand:this.node.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5,-10,10),cc.moveBy(.5,10,-10))));break;case o.MoveAround:this.node.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5,20,0),cc.moveBy(.5,-20,0))))}},i([l({type:cc.Enum(o),displayName:"\u52a8\u753b\u7c7b\u578b"})],t.prototype,"aniType",void 0),t=i([a],t)}(cc.Component);c.default=u,cc._RF.pop()},{}],gameScript:[function(e,t,c){"use strict";cc._RF.push(t,"f9490RadHZFcJL5IGqiuRTy","gameScript");var o=this&&this.__extends||function(){var e=function(t,c){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var c in t)t.hasOwnProperty(c)&&(e[c]=t[c])})(t,c)};return function(t,c){function o(){this.constructor=t}e(t,c),t.prototype=null===c?Object.create(c):(o.prototype=c.prototype,new o)}}(),n=this&&this.__decorate||function(e,t,c,o){var n,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,c):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,c,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i<3?n(r):i>3?n(t,c,r):n(t,c))||r);return i>3&&r&&Object.defineProperty(t,c,r),r};Object.defineProperty(c,"__esModule",{value:!0});var i=e("../script/playableScript"),r=e("../script/musicScript"),a=cc._decorator,l=a.ccclass,u=(a.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.homePage=null,t.startBtn=null,t.gamePage=null,t.moneyNode=null,t.packetNode=null,t.packetNode2=null,t.packetNode3=null,t.gamehintNode=null,t.hintgame2=null,t.packetState=!1,t.redbagNode=null,t.goldParticleNode=null,t.resultPage=null,t.overNode=null,t.winNode=null,t.iconNode=null,t}return o(t,e),t.prototype.onLoad=function(){this.homePage=this.node.getChildByName("initialUi"),this.startBtn=this.homePage.getChildByName("startButton"),this.startBtn.on("click",this.startFun,this),this.gamePage=this.node.getChildByName("gameUi"),this.moneyNode=this.gamePage.getChildByName("moneyNode").getChildByName("moneyNode"),this.packetNode=this.moneyNode.getChildByName("money"),this.packetNode2=this.moneyNode.getChildByName("money2"),this.packetNode3=this.moneyNode.getChildByName("money3"),this.gamehintNode=this.gamePage.getChildByName("gamehint"),this.hintgame2=this.gamePage.getChildByName("hintgame2"),this.redbagNode=this.gamePage.getChildByName("moneyNode").getChildByName("openbag"),this.goldParticleNode=this.node.getChildByName("Particle"),this.resultPage=this.node.getChildByName("resultUi"),this.overNode=this.resultPage.getChildByName("overNode"),this.winNode=this.resultPage.getChildByName("winNode"),this.iconNode=this.resultPage.getChildByName("moneyNode").getChildByName("resultbg"),this.gamePage.active=!1,this.resultPage.active=!1,this.homePage.active=!0},t.prototype.startFun=function(){var e=this;r.default.clickMusic(),this.homePage.active=!1,this.gamePage.active=!0,this.scheduleOnce(function(){e.gamehintNode.active=!1,e.packetRunFun()},3),i.default.sendFun("startPlayPlayable"),i.default.interactionFun(1,"\u70b9\u51fb\u5f00\u59cb\u6e38\u620f\u6309\u94ae")},t.prototype.packetRunFun=function(){var e=this;r.default.turnMusic(),this.packetNode.runAction(cc.repeat(cc.sequence(cc.spawn(cc.moveTo(.3,-150,50),cc.callFunc(function(){e.packetNode.zIndex=0})),cc.moveTo(.3,0,100),cc.moveTo(.3,160,20),cc.spawn(cc.moveTo(.3,0,-70),cc.callFunc(function(){e.packetNode.zIndex=2}))),4)),this.packetNode2.runAction(cc.repeat(cc.sequence(cc.spawn(cc.moveTo(.3,0,-70),cc.callFunc(function(){e.packetNode2.zIndex=2})),cc.spawn(cc.moveTo(.3,-150,50),cc.callFunc(function(){e.packetNode2.zIndex=0})),cc.moveTo(.3,0,100),cc.moveTo(.3,160,20)),4)),this.packetNode3.runAction(cc.sequence(cc.repeat(cc.sequence(cc.moveTo(.3,0,100),cc.moveTo(.3,160,20),cc.spawn(cc.moveTo(.3,0,-70),cc.callFunc(function(){e.packetNode3.zIndex=2})),cc.spawn(cc.moveTo(.3,-150,50),cc.callFunc(function(){e.packetNode3.zIndex=0}))),4),cc.callFunc(function(){e.hintgame2.active=!0,e.packetState=!0})))},t.prototype.openPacketFun=function(e,t){var c=this;if(r.default.clickMusic(),i.default.interactionFun(2,"\u70b9\u51fb\u7ea2\u5305"),this.packetState&&0==this.redbagNode.active){i.default.sendFun("finishPlayPlayable"),this.hintgame2.active=!1;var o=cc.sys.localStorage.getItem("mu");cc.loader.loadRes(3==t||"mu"==o?"winbg":"resultbg",function(e,t){c.iconNode.getComponent(cc.Sprite).spriteFrame=new cc.SpriteFrame(t)}),this.redbagNode.active=!0,this.redbagNode.getComponent(cc.Animation).play("bag"),this.scheduleOnce(function(){3!=t&&"mu"!=o||(r.default.goldMusic(),c.goldParticleNode.active=!0)},.43),this.scheduleOnce(function(){c.gamePage.active=!1,c.resultPage.active=!0,3==t||"mu"==o?(r.default.winMusic(),c.overNode.active=!1,c.winNode.active=!0):(r.default.overMusic(),c.winNode.active=!1,c.overNode.active=!0)},1)}},t.prototype.recurBtnFun=function(){cc.log("\u518d\u6765"),r.default.clickMusic(),cc.director.loadScene("game"),cc.sys.localStorage.setItem("mu","mu"),i.default.interactionFun(3,"\u70b9\u51fb\u518d\u6765\u4e00\u6b21\u6309\u94ae")},t.prototype.downloadFun=function(e,t){cc.log("\u4e0b\u8f7d"),r.default.clickMusic(),i.default.appStore(),t?i.default.downloadGamePlayingFun():i.default.downloadGameOverFun()},t=n([l],t)}(cc.Component));c.default=u,cc._RF.pop()},{"../script/musicScript":"musicScript","../script/playableScript":"playableScript"}],loadScript:[function(e,t,c){"use strict";cc._RF.push(t,"8326dqE1W5Drr0obwqsQDbD","loadScript");var o=this&&this.__extends||function(){var e=function(t,c){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var c in t)t.hasOwnProperty(c)&&(e[c]=t[c])})(t,c)};return function(t,c){function o(){this.constructor=t}e(t,c),t.prototype=null===c?Object.create(c):(o.prototype=c.prototype,new o)}}(),n=this&&this.__decorate||function(e,t,c,o){var n,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,c):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,c,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i<3?n(r):i>3?n(t,c,r):n(t,c))||r);return i>3&&r&&Object.defineProperty(t,c,r),r};Object.defineProperty(c,"__esModule",{value:!0});var i=e("../script/playableScript"),r=cc._decorator,a=r.ccclass,l=r.property,u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.progressBar=null,t}return o(t,e),t.prototype.onLoad=function(){console.log("\u8fdb\u67651"),cc.director.preloadScene("game",this.onProgress.bind(this),function(){cc.director.loadScene("game"),i.default.sendFun("loadMainScene"),console.log("\u8fdb\u67652")}),cc.sys.localStorage.setItem("mu",""),i.default.initFun()},t.prototype.onProgress=function(e,t,c){this.progressBar.progress=e/t,console.log("\u8fdb\u5ea6===",e/t)},t.prototype.init=function(){var e=cc.Canvas.instance,t=e.designResolution.height/e.designResolution.width;cc.winSize.height/cc.winSize.width>t?(e.fitHeight=!1,e.fitWidth=!0):(e.fitHeight=!0,e.fitWidth=!1)},n([l(cc.ProgressBar)],t.prototype,"progressBar",void 0),t=n([a],t)}(cc.Component);c.default=u,cc._RF.pop()},{"../script/playableScript":"playableScript"}],musicScript:[function(e,t,c){"use strict";cc._RF.push(t,"b43501G0l1A2736IhcgU+wA","musicScript");var o=this&&this.__extends||function(){var e=function(t,c){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var c in t)t.hasOwnProperty(c)&&(e[c]=t[c])})(t,c)};return function(t,c){function o(){this.constructor=t}e(t,c),t.prototype=null===c?Object.create(c):(o.prototype=c.prototype,new o)}}(),n=this&&this.__decorate||function(e,t,c,o){var n,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,c):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,c,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i<3?n(r):i>3?n(t,c,r):n(t,c))||r);return i>3&&r&&Object.defineProperty(t,c,r),r};Object.defineProperty(c,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,a=(i.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.clickMusic=function(){cc.loader.loadResDir("music/click",function(e,t){e||cc.audioEngine.play(t[0],!1,1)})},t.winMusic=function(){cc.loader.loadResDir("music/win",function(e,t){e||cc.audioEngine.play(t[0],!1,1)})},t.overMusic=function(){cc.loader.loadResDir("music/over",function(e,t){e||cc.audioEngine.play(t[0],!1,1)})},t.turnMusic=function(){cc.loader.loadResDir("music/turn",function(e,t){e||cc.audioEngine.play(t[0],!1,1)})},t.goldMusic=function(){cc.loader.loadResDir("music/daoGold",function(e,t){e||cc.audioEngine.play(t[0],!1,1)})},t=n([r],t)}(cc.Component));c.default=a,cc._RF.pop()},{}],playableScript:[function(e,t,c){"use strict";cc._RF.push(t,"522cbPvvqNGJKhhqGQDNwbD","playableScript");var o=this&&this.__extends||function(){var e=function(t,c){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var c in t)t.hasOwnProperty(c)&&(e[c]=t[c])})(t,c)};return function(t,c){function o(){this.constructor=t}e(t,c),t.prototype=null===c?Object.create(c):(o.prototype=c.prototype,new o)}}(),n=this&&this.__decorate||function(e,t,c,o){var n,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,c):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,c,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i<3?n(r):i>3?n(t,c,r):n(t,c))||r);return i>3&&r&&Object.defineProperty(t,c,r),r};Object.defineProperty(c,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,a=(i.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.initFun=function(){window.playableSDK&&(window.playableSDK.isViewable().then(function(e){console.log("isViewable\u9875\u9762\u53ef\u89c1\uff1a",e)}),window.playableSDK.addEventListener("visibilityChange",function(e){console.log("addEventListener\u9875\u9762\u53ef\u89c1\uff1a",e.viewable),e.viewable}),window.playableSDK.removeEventListener("visibilityChange",function(e){}))},t.appStore=function(){window.playableSDK&&window.playableSDK.openAppStore()},t.sendFun=function(e){window.playableSDK&&window.playableSDK.sendEvent(e)},t.interactionFun=function(e,t){void 0===e&&(e=1),void 0===t&&(t=""),window.playableSDK&&window.playableSDK.sendEvent("enterSection",{section:"section"+e,section_remark:t})},t.downloadGamePlayingFun=function(){window.playableSDK&&(window.playableSDK.sendEvent("clickContent",{section:"section1",area:"area1",section_remark:"\u6e38\u620f\u4e2d\u70b9\u51fb\u4e86\u4e0b\u8f7d\u6309\u94ae"}),window.playableSDK.sendEvent("clickDownloadBar",{section:"section1",area:"area1",section_remark:"\u6e38\u620f\u4e2d\u70b9\u51fb\u4e86\u4e0b\u8f7d\u6309\u94ae"}))},t.downloadGameOverFun=function(){window.playableSDK&&(window.playableSDK.sendEvent("clickFinishContent",{section:"section1",area:"area1",section_remark:"\u6e38\u620f\u7ed3\u675f\u9875\u70b9\u51fb\u4e0b\u8f7d\u6309\u94ae"}),window.playableSDK.sendEvent("clickFinishDownloadBar",{section:"section1",area:"area1",section_remark:"\u6e38\u620f\u7ed3\u675f\u9875\u70b9\u51fb\u4e0b\u8f7d\u6309\u94ae"}))},t=n([r],t)}(cc.Component));c.default=a,cc._RF.pop()},{}]},{},["Anims","gameScript","loadScript","musicScript","playableScript"]);