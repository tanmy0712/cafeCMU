import{dxFlyoutTagName as t}from"./flyout-7bc357c6.js";import{D as e}from"./popupportal-87b21a6c.js";import{d as o}from"./events-interseptor-35e91aec.js";import{a as r,b as s,A as i,E as p}from"./popup-1339ec31.js";import{_ as m}from"./_tslib-6e8ca86b.js";import{n as a}from"./property-4ec0b52d.js";import{e as c}from"./custom-element-267f9a21.js";import{s as n,i as d,x as l}from"./lit-element-462e7ad3.js";import"./point-e4ec110e.js";import"./layouthelper-0c7c89da.js";import"./constants-791d6f9b.js";import"./query-44b9267f.js";import"./rafaction-bba7928b.js";import"./screenhelper-cc818363.js";import"./transformhelper-ebad0156.js";import"./positiontracker-896b964e.js";import"./branch-e081818f.js";import"./capturemanager-43e041e5.js";import"./eventhelper-8570b930.js";import"./focushelper-cb993bae.js";import"./logicaltreehelper-7b19cc30.js";import"./portal-8366b474.js";import"./data-qa-utils-8be7c726.js";import"./constants-058ebb50.js";import"./const-90026e45.js";import"./dx-html-element-pointer-events-helper-b4d2ae7e.js";import"./dom-da46d023.js";import"./browser-d96520d8.js";import"./common-f853e871.js";import"./devices-afeafb19.js";import"./dx-ui-element-822e6c84.js";import"./lit-element-base-32a69cc0.js";import"./dx-license-dd341102.js";import"./nameof-factory-64d95f5b.js";import"./custom-events-helper-e7f279d3.js";import"./focustrap-8a58142c.js";import"./key-f9cbed1b.js";import"./keyboard-navigation-strategy-940ff3b3.js";import"./focus-utils-405a64a8.js";import"./touch-4bff3f51.js";import"./disposable-d2c2d283.js";import"./dom-utils-c35907a1.js";import"./css-classes-cee8476c.js";const j="dxbl-flyout-root";let f=class extends n{constructor(){super(...arguments),this.dropOpposite=!1,this.dropDirection=r.Near,this.dropAlignment=s.bottom}static get styles(){return d`
            :host {
                display: flex;
                flex: 1 1 auto;
                flex-direction: column;
                align-items: stretch;
                justify-items: stretch;
                min-height: 0;
            }
        }`}render(){return l`
            <slot></slot>
            <slot name="arrow"/>
        `}};m([a({type:Object,attribute:"drop-opposite"})],f.prototype,"dropOpposite",void 0),m([a({type:String,attribute:"drop-direction"})],f.prototype,"dropDirection",void 0),m([a({type:String,attribute:"drop-alignment"})],f.prototype,"dropAlignment",void 0),f=m([c(j)],f);function b(t){if(!t)throw new Error("failed");return t}const u={getReference:b,registeredComponents:[t,i,j,e,o,p]};export{u as default,b as getReference};
