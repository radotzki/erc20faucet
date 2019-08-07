(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{466:function(t,e,n){"use strict";n.r(e);n(37);var r=n(8),o=n(15),c=n(118),l={data:function(){return{amount:"1"}},computed:Object(o.a)({},Object(c.d)("metamask",["balance","ethAccount"]),Object(c.d)("token",["txs"]),Object(c.c)("metamask",["networkName","currency"]),{address:{get:function(){return this.$store.state.metamask.address.value},set:function(address){this.$store.dispatch("metamask/setAddress",{address:address})}},isAddressValid:{get:function(){return this.$store.state.metamask.address.valid}},tokenBalance:{get:function(){return this.$store.state.token.balance}},tokenAddress:{get:function(){return this.$store.state.token.address}}}),watch:{address:function(t){this.$validator.validate("address",t)},amount:function(t){this.$validator.validate("amount",t)}},created:function(){var t=this;this.$validator.extend("valid_address",{getMessage:function(t){return"The ".concat(t," must be valid.")},validate:function(){return!!t.isAddressValid}})},mounted:function(){var t=this;window.onload=Object(r.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.dispatch("metamask/fetchGasPrice",{}),e.next=3,t.$store.dispatch("metamask/askPermission");case 3:case"end":return e.stop()}},e)}))},methods:Object(o.a)({},Object(c.b)("token",["mintTokens"]),{makeUrl:function(t){var e=this.$store.getters["metamask/networkConfig"];return"".concat(e.explorerUrl.tx,"/tx/").concat(t)},addressUrl:function(address){var t=this.$store.getters["metamask/networkConfig"];return"".concat(t.explorerUrl.tx,"/address/").concat(address)},validateBeforeSubmit:function(){var t=this;this.$validator.validateAll().then(function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return e.next=3,t.mintTokens({to:t.address,amount:t.amount});case 3:return t.$toast.open({message:"Success",type:"is-success",position:"is-top"}),e.abrupt("return");case 5:t.$toast.open({message:"Please check the fields.",type:"is-danger",position:"is-top"});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}})},d=n(44),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two-thirds-tablet is-half-desktop"},[n("h1",{staticClass:"title"},[t._v("\n      Ethereum ERC20 Token Faucet\n    ")]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("\n      Mint tokens to an address\n    ")]),t._v(" "),n("div",[n("b-field",{staticClass:"field-height",attrs:{label:"Address",type:{"is-danger":t.errors.has("address")},message:t.errors.first("address")}},[n("b-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,max:42,valid_address:!0},expression:"{ required: true, max: 42, valid_address: true }"}],attrs:{name:"address",placeholder:"0x00000...",maxlength:"42"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),t._v(" "),n("b-field",{staticClass:"field-height",attrs:{label:"Amount",type:{"is-danger":t.errors.has("amount")},message:t.errors.first("amount")}},[n("b-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,numeric:!0,min_value:1,max_value:1e7},expression:"{ required: true, numeric: true, min_value: 1, max_value: 10000000 }"}],attrs:{type:"number",min:"1",max:"10000000",name:"amount",placeholder:"1"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),t._v(" "),n("div",{staticClass:"level is-mobile"},[n("button",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),t.validateBeforeSubmit(e)}}},[t._v("\n          Mint Free Tokens\n        ")]),t._v(" "),t._m(0)])],1),t._v(" "),n("div",{staticClass:"info columns is-multiline"},[n("div",{staticClass:"column"},[n("p",{staticClass:"heading"},[t._v("\n          Network\n        ")]),t._v(" "),n("p",{staticClass:"title"},[t._v("\n          "+t._s(t.networkName)+"\n        ")])]),t._v(" "),n("div",{staticClass:"column"},[n("p",{staticClass:"heading"},[t._v("\n          Balance\n        ")]),t._v(" "),n("p",{staticClass:"title"},[t._v("\n          "+t._s(t.balance)+" "+t._s(t.currency)+"\n        ")])]),t._v(" "),n("div",{staticClass:"column"},[n("p",{staticClass:"heading"},[t._v("\n          Token Balance\n        ")]),t._v(" "),n("p",{staticClass:"title"},[t._v("\n          "+t._s(t.tokenBalance)+" FAU\n        ")])]),t._v(" "),n("div",{staticClass:"column is-12"},[n("p",{staticClass:"heading"},[t._v("\n          ETH Account\n        ")]),t._v(" "),n("p",{staticClass:"title"},[n("a",{staticClass:"title",attrs:{href:t.addressUrl(t.ethAccount),target:"_blank"}},[t._v("\n            "+t._s(t.ethAccount)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"column is-12"},[n("p",{staticClass:"heading"},[t._v("\n          Token Address\n        ")]),t._v(" "),n("p",{staticClass:"title"},[n("a",{staticClass:"title",attrs:{href:t.addressUrl(t.tokenAddress),target:"_blank"}},[t._v("\n            "+t._s(t.tokenAddress)+"\n          ")])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.txs.length>0,expression:"txs.length > 0"}],staticClass:"column is-12"},[n("p",{staticClass:"heading"},[t._v("\n          Sent transactions\n        ")]),t._v(" "),n("b-field",{staticClass:"explorer",attrs:{grouped:"","group-multiline":""}},t._l(t.txs,function(e,r){return n("p",{key:r,staticClass:"control"},[n("a",{attrs:{href:t.makeUrl(e),target:"_blank"}},[t._v("\n              "+t._s(t.makeUrl(e))+"\n            ")])])}),0)],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"is-flex",attrs:{href:"https://peppersec.com",target:"_blank"}},[e("span",{staticClass:"icon icon-madeby"})])}],!1,null,null,null);e.default=component.exports}}]);