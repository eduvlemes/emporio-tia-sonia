(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{213:function(n,t,e){"use strict";e.r(t);e(47),e(4);var a=e(3),o=e(23),i=e(161);window._info=window._info||{};const s=[],p=[{endpoint:"list_payments"},{endpoint:"calculate_shipping"}];Object.keys(i.a).length&&p.push({endpoint:"apply_discount",reqOptions:{method:"post",data:{utm:i.a}}}),p.forEach((({endpoint:n,reqOptions:t})=>{const e={};window._info[n]=e;const i=new Promise((i=>{Object(a.c)({url:"/".concat(n,".json"),...t,axiosConfig:{timeout:1e4}}).then((({data:t})=>{const{result:a}=t;Array.isArray(a)&&a.forEach((({error:t,response:a})=>{if(!t){let t,o;switch(n){case"calculate_shipping":t="free_shipping_from_value",o=a[t],"number"==typeof o&&(void 0===e[t]||o<e[t])&&(e[t]=o);break;case"list_payments":t="installments_option",o=a[t],o&&(!e[t]||o.monthly_interest<e[t].monthly_interest||o.max_number>e[t].max_number)&&(e[t]=o),t="discount_option",o=a[t],o&&(!e[t]||o.value>e[t].value)&&a.payment_gateways.forEach((({discount:n})=>{n&&"freight"!==n.apply_at&&n.value===o.value&&(e[t]={apply_at:n.apply_at,...o})}));break;default:t="available_extra_discount",o=a[t],o&&(!e[t]||o.value>e[t].value)&&(e[t]=o)}}})),o.a.emit("info:".concat(n),e)})).catch((t=>{console.error(t),o.a.emit("info:".concat(n),t)})).finally(i)}));s.push(i)})),Promise.all(s).then((()=>o.a.emit("info",window._info)))}}]);
//# sourceMappingURL=chunk.e5c4c4cbfa0b0c2e3512.js.map