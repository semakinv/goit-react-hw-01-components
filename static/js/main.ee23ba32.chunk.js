(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke!!!!!!!!!!!!!!!!!!!!","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),l=t.n(r);t(12);var s=function(e){var a=e.name,t=e.tag,n=e.location,r=e.avatar,l=e.stats,s=l.followers,i=l.views,m=l.likes;return c.a.createElement("div",{class:"profile"},c.a.createElement("div",{class:"description"},c.a.createElement("img",{src:r,alt:"user avatar",class:"avatar"}),c.a.createElement("p",{class:"name"},a),c.a.createElement("p",{class:"tag"},"@",t),c.a.createElement("p",{class:"location"},n)),c.a.createElement("ul",{class:"stats"},c.a.createElement("li",null,c.a.createElement("span",{class:"label"},"Followers"),c.a.createElement("span",{class:"quantity"},s)),c.a.createElement("li",null,c.a.createElement("span",{class:"label"},"Views"),c.a.createElement("span",{class:"quantity"},i)),c.a.createElement("li",null,c.a.createElement("span",{class:"label"},"Likes"),c.a.createElement("span",{class:"quantity"},m))))};function i(e){var a=e.title,t=e.stats;return c.a.createElement("section",{class:"statistics"},a&&c.a.createElement("h2",{class:"title"},a),c.a.createElement("ul",{class:"stat-list"},t.map((function(e){return c.a.createElement("li",{key:e.id,class:"item"},c.a.createElement("span",{class:"label"},e.label),c.a.createElement("span",{class:"percentage"},e.percentage))}))))}i.defaultProps={title:"Upload stats"};var m=i,u=function(e){var a=e.name,t=e.isOnline,n=e.avatar;return c.a.createElement("li",{class:"item"},c.a.createElement("span",{class:"status"},t?"online":"offline"),c.a.createElement("img",{class:"avatar",src:n,alt:"",width:"48"}),c.a.createElement("p",{class:"name"},a))};var o=function(e){var a=e.friends;return c.a.createElement("ul",{class:"friend-list"},a.map((function(e){return c.a.createElement(u,Object.assign({},e,{key:e.id}))})))};var d=function(e){var a=e.items;return c.a.createElement("table",{class:"transaction-history"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),c.a.createElement("tbody",null,a.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.amount),c.a.createElement("td",null,e.currency))}))))},p=t(3),f=t(4),b=t(5),y=t(6);l.a.render(c.a.createElement((function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,p),c.a.createElement(m,{title:"Upload stats",stats:f}),c.a.createElement(o,{friends:b}),c.a.createElement(d,{items:y}))}),null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.ee23ba32.chunk.js.map