(function(g){var window=this;'use strict';var Lib=function(a,b){g.X.call(this,{G:"button",Ma:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Y:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},X:[{G:"svg",Y:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},X:[{G:"g",Y:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},X:[{G:"g",Y:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
X:[{G:"path",Y:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.I=a;this.Ua("click",this.onClick,this);this.updateValue("title",g.uT(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.tb(this,g.oT(b.Gc(),this.element))},Mib=function(a){g.X.call(this,{G:"div",
S:"ytp-miniplayer-ui"});this.xg=!1;this.player=a;this.T(a,"minimized",this.gi);this.T(a,"onStateChange",this.oQ)},Nib=function(a){g.dU.call(this,a);
this.u=new g.fK(this);this.j=new Mib(this.player);this.j.hide();g.cT(this.player,this.j.element,4);a.Zf()&&(this.load(),g.Cq(a.getRootNode(),"ytp-player-minimized",!0))};
g.x(Lib,g.X);Lib.prototype.onClick=function(){this.I.Qa("onExpandMiniplayer")};g.x(Mib,g.X);g.k=Mib.prototype;
g.k.lN=function(){this.tooltip=new g.zW(this.player,this);g.G(this,this.tooltip);g.cT(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Vc=new g.GU(this.player);g.G(this,this.Vc);this.jk=new g.X({G:"div",S:"ytp-miniplayer-scrim"});g.G(this,this.jk);this.jk.Ia(this.element);this.T(this.jk.element,"click",this.PH);var a=new g.X({G:"button",Ma:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.lR()]});g.G(this,a);a.Ia(this.jk.element);this.T(a.element,"click",this.Ap);
a=new Lib(this.player,this);g.G(this,a);a.Ia(this.jk.element);this.ov=new g.X({G:"div",S:"ytp-miniplayer-controls"});g.G(this,this.ov);this.ov.Ia(this.jk.element);this.T(this.ov.element,"click",this.PH);var b=new g.X({G:"div",S:"ytp-miniplayer-button-container"});g.G(this,b);b.Ia(this.ov.element);a=new g.X({G:"div",S:"ytp-miniplayer-play-button-container"});g.G(this,a);a.Ia(this.ov.element);var c=new g.X({G:"div",S:"ytp-miniplayer-button-container"});g.G(this,c);c.Ia(this.ov.element);this.QX=new g.LV(this.player,
this,!1);g.G(this,this.QX);this.QX.Ia(b.element);b=new g.KV(this.player,this);g.G(this,b);b.Ia(a.element);this.nextButton=new g.LV(this.player,this,!0);g.G(this,this.nextButton);this.nextButton.Ia(c.element);this.Dj=new g.sW(this.player,this);g.G(this,this.Dj);this.Dj.Ia(this.jk.element);this.Oc=new g.QV(this.player,this);g.G(this,this.Oc);g.cT(this.player,this.Oc.element,4);this.xH=new g.X({G:"div",S:"ytp-miniplayer-buttons"});g.G(this,this.xH);g.cT(this.player,this.xH.element,4);a=new g.X({G:"button",
Ma:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.lR()]});g.G(this,a);a.Ia(this.xH.element);this.T(a.element,"click",this.Ap);a=new g.X({G:"button",Ma:["ytp-miniplayer-replay-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.PDa()]});g.G(this,a);a.Ia(this.xH.element);this.T(a.element,"click",this.M7);this.T(this.player,"presentingplayerstatechange",this.Kd);this.T(this.player,"appresize",this.Jb);this.T(this.player,"fullscreentoggled",this.Jb);this.Jb()};
g.k.show=function(){this.xf=new g.oq(this.jw,null,this);this.xf.start();this.xg||(this.lN(),this.xg=!0);0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Oc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.xf&&(this.xf.dispose(),this.xf=void 0);g.X.prototype.hide.call(this);this.player.Zf()||(this.xg&&this.Oc.hide(),this.player.loadModule("annotations_module"))};
g.k.xa=function(){this.xf&&(this.xf.dispose(),this.xf=void 0);g.X.prototype.xa.call(this)};
g.k.Ap=function(){this.player.stopVideo();this.player.Qa("onCloseMiniplayer")};
g.k.M7=function(){this.player.playVideo()};
g.k.PH=function(a){if(a.target===this.jk.element||a.target===this.ov.element)g.mQ(this.player.Nb())?this.player.pauseVideo():this.player.playVideo()};
g.k.gi=function(){g.Cq(this.player.getRootNode(),"ytp-player-minimized",this.player.Zf())};
g.k.Ye=function(){this.Oc.Ac();this.Dj.Ac()};
g.k.jw=function(){this.Ye();this.xf&&this.xf.start()};
g.k.Kd=function(a){g.HP(a.state,32)&&this.tooltip.hide()};
g.k.Jb=function(){g.bW(this.Oc,0,this.player.qb().getPlayerSize().width,!1);g.RV(this.Oc)};
g.k.oQ=function(a){this.player.Zf()&&(0===a?this.hide():this.show())};
g.k.Gc=function(){return this.tooltip};
g.k.Kg=function(){return!1};
g.k.jh=function(){return!1};
g.k.pm=function(){return!1};
g.k.MI=function(){};
g.k.kq=function(){};
g.k.Hy=function(){};
g.k.hn=function(){return null};
g.k.pG=function(){return null};
g.k.BM=function(){return new g.ye(0,0)};
g.k.Lk=function(){return new g.nn(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.ww=function(a,b,c,d,e){var f=0,h=d=0,l=g.Bn(a);if(b){c=g.xq(b,"ytp-prev-button")||g.xq(b,"ytp-next-button");var m=g.xq(b,"ytp-play-button"),n=g.xq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.zn(b,this.element),h=b.x,f=b.y-12):n&&(h=g.xq(b,"ytp-miniplayer-button-top-left"),f=g.zn(b,this.element),b=g.Bn(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.qb().getPlayerSize().width;e=f+(e||0);l=g.re(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Mp=function(){};
g.k.Zl=function(){return!1};
g.k.rE=function(){};
g.k.eA=function(){};
g.k.Er=function(){};
g.k.Dr=function(){};
g.k.mB=function(){};
g.k.Ks=function(){};
g.k.bE=function(){};g.x(Nib,g.dU);g.k=Nib.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Cq(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.dU.prototype.create.call(this);this.u.T(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.ol=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.cU("miniplayer",Nib);})(_yt_player);
