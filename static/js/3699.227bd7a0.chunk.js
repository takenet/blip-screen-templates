"use strict";(self.webpackChunkblip_screen_templates=self.webpackChunkblip_screen_templates||[]).push([[3699],{3699:(e,t,n)=>{n.r(t),n.d(t,{bds_radio_group:()=>o});var r=n(6510),o=function(){function e(e){var t=this;(0,r.r)(this,e),this.bdsRadioGroupChange=(0,r.c)(this,"bdsRadioGroupChange",7),this.radioGroupElement=null,this.chagedOptions=function(e,n){1==n.detail.checked&&(t.value=e)},this.value=void 0}return e.prototype.valueChanged=function(e){this.setSelectedRadio(e),this.bdsRadioGroupChange.emit({value:e})},e.prototype.componentWillRender=function(){var e=this;this.radioGroupElement=this.element.getElementsByTagName("bds-radio");for(var t=function(t){n.radioGroupElement[t].addEventListener("bdsChange",(function(n){return e.chagedOptions(e.radioGroupElement[t].value,n)}))},n=this,r=0;r<this.radioGroupElement.length;r++)t(r)},e.prototype.setSelectedRadio=function(e){for(var t=this.radioGroupElement,n=0;n<t.length;n++){var r=t[n].value;t[n].checked=!1,0==t[n].checked&&e==r&&(t[n].checked=!0)}},e.prototype.render=function(){return(0,r.h)(r.H,null,(0,r.h)("slot",null))},Object.defineProperty(e.prototype,"element",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:!1,configurable:!0}),e}()}}]);
//# sourceMappingURL=3699.227bd7a0.chunk.js.map