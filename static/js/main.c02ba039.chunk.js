(this["webpackJsonpreact-salario"]=this["webpackJsonpreact-salario"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),o=(t(13),t(1)),i=t(2),s=t(5),u=t(4),d=t(3),m=t.n(d),S=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).handleInputChange=function(a){var t=a.target.value;e.props.onInputChange(t)},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.inputSalary,t=e.label,n=e.id;return r.a.createElement("div",{className:m.a.input},r.a.createElement("label",{className:"active",htmlFor:n},t),r.a.createElement("input",{type:"text",id:n,onChange:this.handleInputChange,style:{fontWeight:"bold"},value:a})," ")}}]),t}(n.Component),v=[{id:1,minValue:0,maxValue:1045,difference:1045,discountPercentage:.075,discountValue:-1},{id:2,minValue:1045.01,maxValue:2089.6,difference:1044.6,discountPercentage:.09},{id:3,minValue:2089.61,maxValue:3134.4,difference:3134.4-2089.6,discountPercentage:.12},{id:4,minValue:3134.41,maxValue:6101.06,difference:6101.06-3134.4,discountPercentage:.14}];function b(e){return+e.toFixed(2)}function f(e){var a=new Number(e),t=function(e){var a=0;if(e>6101.07)return 713.1;for(var t=0;t<v.length;t++){var n=v[t];if(!(e>n.maxValue)){a+=b((e-n.minValue)*n.discountPercentage);break}a+=b(n.difference*n.discountPercentage)}return a=b(a)}(a),n=a-t,r=function(e){var a=e<1903.98?0:e<2826.65?b(.075*e)-142.8:e<3751.05?b(.15*e)-354.8:e<4664.68?b(.225*e)-636.13:b(.275*e)-869.36;return a=b(a)}(n);return{baseINSS:a,discountINSS:t,baseIRPF:n,discountIRPF:r,netSalary:a-t-r}}var p=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.value,t=e.label,n=e.id,l=e.color;return r.a.createElement("div",{className:m.a.input},r.a.createElement("label",{htmlFor:n},t),r.a.createElement("input",{type:"text",id:n,value:a,style:{fontWeight:"bold",color:l},readOnly:!0})," ")}}]),t}(n.Component);function y(e,a){return 100*a/e}function I(e){return e.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}var h=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.value,t=e.color,n=void 0===t?"black":t;return r.a.createElement("div",{style:{marginTop:"40px",width:a+"%",height:"20px",backgroundColor:n}})}}]),t}(n.Component),g=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).handleInputChange=function(a){e.setState({grossSalary:a}),e.getDataFromSalary(a)},e.getDataFromSalary=function(a){var t=f(a),n=t.baseINSS,r=t.discountINSS,l=t.baseIRPF,c=t.discountIRPF,o=t.netSalary;e.setState({grossSalary:a,baseINSS:n,discountINSS:r,baseIRPF:l,discountIRPF:c,netSalary:o})},e.state={grossSalary:"",baseINSS:0,discountINSS:0,baseIRPF:0,discountIRPF:0,netSalary:0},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getDataFromSalary(1e3)}},{key:"render",value:function(){var e=this.state,a=e.grossSalary,t=e.baseINSS,n=e.discountINSS,l=e.baseIRPF,c=e.discountIRPF,o=e.netSalary,i={discINSS:y(a,n),discIRPF:y(a,c),netSalary:y(a,o)};return r.a.createElement("div",null,r.a.createElement("h1",{className:m.a.title},"React Sal\xe1rio"),r.a.createElement("div",{className:m.a.flexRow},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col l12 s12"},r.a.createElement(S,{id:"grossSalary",label:"Sal\xe1rio Bruto",inputSalary:a,onInputChange:this.handleInputChange})),r.a.createElement("div",{className:"col l3 s6"},r.a.createElement(p,{id:"baseINSS",label:"Base INSS",value:"".concat(I(t))})),r.a.createElement("div",{className:"col l3 s6"},r.a.createElement(p,{id:"discountINSS",color:"#e67e22",label:"Desconto INSS",value:"".concat(I(n)," (").concat(i.discINSS.toFixed(2),"%) ")})),r.a.createElement("div",{className:"col l3 s6"},r.a.createElement(p,{id:"baseIRPF",label:"Base IRPF",value:I(l)})),r.a.createElement("div",{className:"col l3 s6"},r.a.createElement(p,{id:"discountIRPF",color:"#c0392b",label:"Desconto IRPF",value:"".concat(I(c)," (").concat(i.discIRPF.toFixed(2),"%) ")})),r.a.createElement("div",{className:"col l3 s6"},r.a.createElement(p,{id:"netSalary",color:"#16a085",label:"Sal\xe1rio L\xedquido",value:"".concat(I(o)," (").concat(i.netSalary.toFixed(2),"%) ")})),r.a.createElement("div",{className:"col l12 s12 ",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}},r.a.createElement(h,{value:i.discINSS,color:"#e67e22"}),r.a.createElement(h,{value:i.discIRPF,color:"#c0392b"}),r.a.createElement(h,{value:i.netSalary,color:"#16a085"})))))}}]),t}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},3:function(e,a,t){e.exports={flexRow:"styles_flexRow__1JbWI",input:"styles_input__3k8u6",title:"styles_title__A5cXe",colorBar:"styles_colorBar__2ujzK"}},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c02ba039.chunk.js.map