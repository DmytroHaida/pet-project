(this["webpackJsonppet-project"]=this["webpackJsonppet-project"]||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),i=a(16),s=a.n(i),r=(a(33),a(10)),o=(a(34),a(3)),j=a(8),d=function(e){var t=e.params,a=e.size,n=e.name,i=e.count,s=e.price,r=e.id,o=e.decreaseGoodsCount,j=e.addGoodsCount,d=e.index,p=e.image,l=e.cartItemDeleter,u={params:t,size:a,count:i,id:r};function b(){window.confirm("\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u043d\u0456 \u0449\u043e \u0445\u043e\u0447\u0438\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438")&&l(d)}return Object(c.jsxs)("div",{className:"shopping--cart__item",children:[Object(c.jsx)("img",{src:p,width:"80px",alt:"pizzaImage"}),Object(c.jsxs)("div",{className:"shopping--cart__item-info",children:[Object(c.jsx)("h4",{children:n}),Object(c.jsxs)("p",{children:[t," \u0442\u0456\u0441\u0442\u043e, ",a]})]}),Object(c.jsxs)("div",{className:"shopping--cart__item-counter",children:[Object(c.jsx)("button",{onClick:function(){return i>1?o(u):b()},children:Object(c.jsx)("span",{children:"-"})}),Object(c.jsx)("b",{children:i}),Object(c.jsx)("button",{onClick:function(){return j(u)},children:Object(c.jsx)("span",{children:"+"})})]}),Object(c.jsx)("div",{className:"shopping--cart__item-price",children:Object(c.jsxs)("b",{children:[i*s," \u20b4"]})}),Object(c.jsx)("div",{children:Object(c.jsx)("div",{onClick:function(){return b()},className:"shopping--cart__item-remove"})})]})},p=a(24),l=a(7),u=a.p+"static/media/doublePepperoni.14183a10.jpg",b=a.p+"static/media/fruty-dy-mare.b5908c6e.jpg",h=a.p+"static/media/hot-dog.7910f0d5.jpg",m=a.p+"static/media/kalcone.211d7c94.jpg",A=a.p+"static/media/korbonara.272a4d26.jpg",O=a.p+"static/media/mushrooms.063dd37d.png",g=a.p+"static/media/vinni-puh.054dab95.jpg",x=a.p+"static/media/kaprichoza.a63ecef8.jpg",f="SET_SHOPPING_CART_ITEMS",v="SET_SHOPPING_CART_ITEMS_COUNT",C="SET_SHOPPING_CART_ITEMS_DECREMENT_COUNT",E="SET_SHOPPING_CART_ITEMS_DELETER",z="SET_CLEAR_SHOPPING_CART_ITEMS",I="SET_GOODS_IS_FETCHING",K={pizzaItems:[{name:"\u0412\u0406\u041d\u041d\u0406 \u041f\u0423\u0425",size:["20\u0441\u043c","30\u0441\u043c","50\u0441\u043c"],price:[67,80,110],params:["\u0422\u043e\u043d\u043a\u0435","\u0422\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043d\u0435"],image:g,id:1},{name:"\u0424\u0420\u0423\u0422\u0406 \u0414\u0406 \u041c\u0410\u0420\u0415",size:["20\u0441\u043c","30\u0441\u043c","50\u0441\u043c"],price:[209,260,335],params:["\u0422\u043e\u043d\u043a\u0435","\u0422\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043d\u0435"],image:b,id:2},{name:"\u041f\u041e\u0414\u0412\u0406\u0419\u041d\u0410 \u041f\u0415\u041f\u0415\u0420\u041e\u041d\u0406",size:["20\u0441\u043c","30\u0441\u043c","50\u0441\u043c"],price:[127,160,220],params:["\u0422\u043e\u043d\u043a\u0435","\u0422\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043d\u0435"],image:u,id:3},{name:"\u041f\u0406\u0426\u0410 \u0425\u041e\u0422-\u0414\u041e\u0413",size:["20\u0441\u043c","30\u0441\u043c","50\u0441\u043c"],price:[128,160,225],params:["\u0422\u043e\u043d\u043a\u0435","\u0422\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043d\u0435"],image:h,id:4},{name:"\u041a\u0410\u041b\u042c\u0426\u041e\u041d\u0415 \u0410\u041b\u042c \u0424\u041e\u0420\u041d\u041e",size:["20\u0441\u043c","30\u0441\u043c","50\u0441\u043c"],price:[99,140,210],params:["\u0422\u043e\u043d\u043a\u0435","\u0422\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043d\u0435"],image:m,id:5},{name:"\u0413\u0420\u0418\u0411\u041e\u0427\u041e\u041a",size:["20\u0441\u043c","30\u0441\u043c","50\u0441\u043c"],price:[53,65,90],params:["\u0422\u043e\u043d\u043a\u0435","\u0422\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043d\u0435"],image:O,id:6},{name:"\u041a\u0410\u0420\u0411\u041e\u041d\u0410\u0420\u0410",size:["20\u0441\u043c","30\u0441\u043c","50\u0441\u043c"],price:[96,140,189],params:["\u0422\u043e\u043d\u043a\u0435","\u0422\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043d\u0435"],image:A,id:7},{name:"\u041a\u0410\u041f\u0420\u0418\u0427\u041e\u0417\u0410",size:["20\u0441\u043c","30\u0441\u043c","50\u0441\u043c"],price:[99,130,170],params:["\u0422\u043e\u043d\u043a\u0435","\u0422\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043d\u0435"],image:x,id:8}],shoppingCart:[],GoodsIsFetching:!1},N=function(e){return{type:v,payloads:e}},H=function(e){return function(t,a){var c=a().pizzaItems.shoppingCart,n=c.find((function(t){return t.params===e.params&&t.size===e.size&&t.id===e.id}));t(c.some((function(t){return t.params===e.params&&t.size===e.size&&t.id===e.id}))?N(n):{type:f,payloads:e})}},S=function(e){return function(t){t({type:C,payloads:e})}},Q=function(e){return function(t){t({type:E,payloads:e})}},y=function(){return function(e){var t;e({type:z,payloads:t})}},D=function(e){return function(t){t({type:I,payloads:e})}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(l.a)(Object(l.a)({},e),{},{shoppingCart:[t.payloads].concat(Object(p.a)(e.shoppingCart))});case v:return Object(l.a)(Object(l.a)({},e),{},{shoppingCart:e.shoppingCart.map((function(e){return e.id===t.payloads.id&&e.size===t.payloads.size&&e.params===t.payloads.params?(e.count++,e):e}))});case C:return Object(l.a)(Object(l.a)({},e),{},{shoppingCart:e.shoppingCart.map((function(e){return e.id===t.payloads.id&&e.params===t.payloads.params&&e.size===t.payloads.size?(e.count--,e):e}))});case E:return e.shoppingCart.splice(t.payloads,1),Object(l.a)(Object(l.a)({},e),{},{shoppingCart:Object(p.a)(e.shoppingCart)});case z:return Object(l.a)(Object(l.a)({},e),{},{shoppingCart:[]});case I:return Object(l.a)(Object(l.a)({},e),{},{GoodsIsFetching:t.payloads});default:return e}},P=a.p+"static/media/emptyCart.34f99e23.png",R=function(){return Object(c.jsxs)("div",{className:"shopping--cart__empty",children:[Object(c.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(c.jsxs)("p",{children:["\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u0437\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0443\u0441\u0442\u0430.",Object(c.jsx)("br",{}),"C\u043a\u043e\u0440\u0456\u0448 \u0437\u0430 \u0432\u0441\u0435 \u0432\u0438 \u0437\u0430\u0431\u0443\u043b\u0438 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f, \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0449\u043e\u0431 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f, \u043f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u043d\u0430 ",Object(c.jsx)(r.b,{to:"La_Pizza",children:" \u0433\u043e\u043b\u043e\u0432\u043d\u0443 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443."})]}),Object(c.jsx)("img",{src:P,width:"500px",alt:"emptyCart"})]})},U=function(){var e=Object(j.c)((function(e){return e.pizzaItems.shoppingCart})),t=Object(j.b)(),a=function(){var t=0;return e.map((function(e){return t+=e.count})),t},n=function(){var t=0;return e.map((function(e){return t+=e.price*e.count})),t},i=function(e){t(S(e))},s=function(e){t(function(e){return function(t){t(N(e))}}(e))},o=function(e){t(Q(e))};return Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)("div",{className:"shopping--cart",children:[e.length>0?Object(c.jsxs)("div",{className:"shopping--cart__top",children:[Object(c.jsxs)("div",{className:"shopping--cart__tittle",children:[Object(c.jsx)("img",{src:"data:image/png;base64,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",height:"30px",alt:"shoppingCart"}),Object(c.jsx)("h3",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})]}),Object(c.jsxs)("div",{onClick:function(){t(y())},className:"shopping--cart__clear",children:[Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAACJiYlhYWFpaWkpKSlxcXHY2NgEBAQeHh7V1dU/Pz96enovLy91dXVkZGSWlpY3NzdcXFyQkJDm5uZsbGy0tLSoqKj5+fmVlZW8vLzs7Ozz8/NERESgoKBSUlLIyMgzMzPg4OAUFBSBgYHExMQQEBAjIyNtGiLhAAADkElEQVR4nO3d61LiQBRFYSKIIBDu4C2I6Mj7v+Gwe8qatEWgTwh00PX97rbOGjAkjVXTaACHzRbLx4+0NW81c4bDYas1n7fbadpPl7FHPMXL6i0JsHqIPWhZ05A85zH2qKU8BfftdNaxx7VrWgJ35rEHNnoeGAOTpPsce2iLmblPNrHHDvdcKjBJZrEHD/XSKVmYvMQePVBWNjDJYo8eZlU6cPfhH3v4EOWuMl+u4X1q/SD0pbHHP27PS/j+Pu71sqZnkvXG3c+rfBHb/sDjp8PLZ4uxv6H2t6gP/rw3AVv63o7B2Uc80dob9zVoT8/bU/ebN/+jYh20x38KOfK2ju7DmzZsz4u3Z3TeAU+WepeZwE3v+U39s853Ou9SGvZr+O02r3XW+U43zA/bDNz0WuafJZZmmZfDK+yddb7TecOGvoaTMr+8sWRlCpvXVDj48YXdH1/oHWAMAzd5F+BzX2k2q5t0kmUDue2abfOzJp1t2Cb/XCdsk+dW475l2SS9WR45zhol1+/gbd9N7OkqceCRbX1891VYFxb2jm++CoWHkmWPquun6Cn6p7xJk+S+oPBP7MEqU1R42llunRSe9WyP770KxTd+pi+ma2xdWPjt6PJaTYsDG41l7OkqsDgUuHO/WD1OR6Npv/1P6j3xfabt2FLv247B10D9qYwWd0f69pjnf+CtfX/lbvMDVfEnHK1aF1Zx9kjhxVFoRuHFUWhG4cVRaEahZL3/xgUnsptBbtGg4G9JR+PcooIjsyiF+SVFB7J33qKCRwD/SHr/miiF3hcPlRV29q+h0IxCoVAodCgUCs0oFAqFQodCodCMQqFQKHQoFArNKBQKhUKHQqHQjEKhUCh0KBQKzSgUCoVCh0Kh0IxCoVAodCgUCs0oFAqFQodCodCMQqFQKHQoFArNKBQKhUKHQqHQjEKhUCh0KBQKzSgUCoVCh0Kh0IxCoVAodCgUCs0oFAqFQodCodCMQqFQKHQoFArNKBQKhUKHQqHQjEKhUCh0KBQKzSgUCoVCh0Kh0IxCoVAodCgUCs0oFAqFQodCodCMQqFQKHQoFArNKBQKhUKHQqHQjEKhUCh0KJQohd7wlRXW6f/l7ueki/1rZu3covZs/6JFmv9R+9dEKbwoCs0ovDgKzSi8OArNflnhdnMf22Z71sLaoZBCCuOjkEIK46OQwt9ROIwdcdCwgsLppFlfk2kFhai7vyAZfDHzpOA0AAAAAElFTkSuQmCC",height:"16px",alt:"trashIcon"}),Object(c.jsx)("span",{children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}):null,e.length>0?e.map((function(t){return Object(c.jsx)(d,{name:t.name,size:t.size,params:t.params,count:t.count,price:t.price,image:t.image,id:t.id,index:e.indexOf(t),addGoodsCount:s,decreaseGoodsCount:i,cartItemDeleter:o},t.name+t.size+t.params)})):Object(c.jsx)(R,{}),e.length>0?Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"shopping--cart__bottom-details",children:[Object(c.jsxs)("span",{children:["\u0412\u0441\u044c\u043e\u0433\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u043e:",Object(c.jsxs)("b",{children:[" ",a()]})," \u0448\u0442."]}),Object(c.jsxs)("span",{children:["\u0421\u0443\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0443:",Object(c.jsxs)("b",{children:[n()," \u20b4"]})]})]}),Object(c.jsxs)("div",{className:"shopping--cart__bottom",children:[Object(c.jsx)(r.b,{to:"/La_Pizza",children:Object(c.jsx)("button",{className:"my-button button-variant-black",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044c \u043d\u0430\u0437\u0430\u0434"})}),Object(c.jsx)("button",{className:"my-button",onClick:function(){return alert("\u0412\u0438 \u0437\u0430\u043c\u043e\u0432\u0438\u043b\u0438: ".concat(a()," \u0448\u0442. \u043d\u0430 \u0441\u0443\u043c\u0443 ").concat(n()," \u0413\u0440\u043d. "))},children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u0438"})]})]}):Object(c.jsx)("div",{className:"shopping--cart__bottom-empty",children:Object(c.jsx)(r.b,{to:"/La_Pizza",children:Object(c.jsx)("button",{className:"my-button button-variant-black",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044c \u043d\u0430\u0437\u0430\u0434"})})})]})})},B=a(13),q=function(e){var t=e.id,a=e.name,i=e.price,s=e.size,r=e.params,o=e.shoppingCart,j=e.addToCart,d=e.image,p=Object(n.useState)(r[0]),l=Object(B.a)(p,2),u=l[0],b=l[1],h=Object(n.useState)(s[0]),m=Object(B.a)(h,2),A=m[0],O=m[1],g=Object(n.useState)(i[0]),x=Object(B.a)(g,2),f=x[0],v=x[1],C=o.filter((function(e){return e.id===t})),E=0;return C.forEach((function(e){E+=e.count})),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"goods-block",children:[Object(c.jsx)("img",{src:d,width:"250px",alt:a}),Object(c.jsx)("h4",{className:"goods-block__tittle",children:a}),Object(c.jsxs)("div",{className:"goods-block__selector",children:[Object(c.jsx)("ul",{children:r.map((function(e){return Object(c.jsx)("li",{className:u===e?"active":null,onClick:function(){b(e)},children:e},t+e)}))}),Object(c.jsx)("ul",{children:s.map((function(e){return Object(c.jsx)("li",{className:A===e?"active":null,onClick:function(){!function(e){O(e);var t=s.findIndex((function(t){return t===e}));v(i[t])}(e)},children:e},t+e)}))})]}),Object(c.jsxs)("div",{className:"goods-block__bottom",children:[Object(c.jsxs)("p",{children:[f," \u20b4"]}),Object(c.jsxs)("button",{className:"my-button",onClick:function(){j({name:a,image:d,price:f,params:u,size:A,count:1,id:t})},children:["+  \u0414\u043e\u0434\u0430\u0442\u0438",!0===o.some((function(e){return e.id===t}))?Object(c.jsx)("span",{children:E}):null]})]})]},t)})},Y=a.p+"static/media/preloader.ac5e857e.gif",k=function(e){return Object(c.jsx)("div",{className:"userPreloaderLayer",children:Object(c.jsx)("img",{className:"preloaderIMG",src:Y,width:e.width,alt:"Preloading"})})},X=function(){var e=Object(n.useState)("\u0417\u0430 \u043d\u0430\u0437\u0432\u043e\u044e"),t=Object(B.a)(e,2),a=t[0],i=t[1],s=Object(j.c)((function(e){return e.pizzaItems.pizzaItems})),r=Object(j.c)((function(e){return e.pizzaItems.shoppingCart})),o=Object(j.c)((function(e){return e.pizzaItems.GoodsIsFetching})),d=Object(j.b)(),p=[{value:"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0437\u0430:"},{value:"\u0412\u0456\u0434 \u0434\u0435\u0448\u0435\u0432\u0438\u0445 \u0434\u043e \u0434\u043e\u0440\u043e\u0433\u0438\u0445"},{value:"\u0412\u0456\u0434 \u0434\u043e\u0440\u043e\u0433\u0438\u0445 \u0434\u043e \u0434\u0435\u0448\u0435\u0432\u0438\u0445"}];function l(e){d(H(e))}return Object(n.useEffect)((function(){!function(){a===p[1].value&&(d(D(!o)),s.sort((function(e,t){return e.price[0]-t.price[0]})));a===p[2].value&&(d(D(!o)),s.sort((function(e,t){return t.price[0]-e.price[0]})));d(D(!1))}()}),[a]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"navigation-bar",children:Object(c.jsx)("select",{name:"select",id:"",value:a,onChange:function(e){return i(e.target.value)},children:p.map((function(e){return Object(c.jsx)("option",{value:e.value,children:e.value},e.value)}))})}),Object(c.jsx)("div",{className:"content",children:o?Object(c.jsx)(k,{width:"400px"}):s.map((function(e){return Object(c.jsx)(q,{id:e.id,name:e.name,price:e.price,size:e.size,image:e.image,params:e.params,shoppingCart:r,addToCart:l},e.id)}))})]})};var L=function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(o.b,{path:"/La_Pizza",render:function(){return Object(c.jsx)(X,{})}}),Object(c.jsx)(o.b,{path:"/shopping_cart",render:function(){return Object(c.jsx)(U,{className:"content"})}}),Object(c.jsx)(o.a,{from:"/",to:"/La_Pizza"})]})},V=a.p+"static/media/pizzalogo.98a8f761.svg";var T=function(){var e=Object(j.c)((function(e){return e.pizzaItems.shoppingCart})),t=0;return e.forEach((function(e){return t+=e.count})),Object(c.jsx)("header",{className:"container",children:Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)(r.b,{to:"/La_Pizza",className:"header__logo",children:[Object(c.jsx)("img",{src:V,width:"110px",alt:"Pizza logo"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"La Pizza"}),Object(c.jsxs)("p",{children:["\u0411\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043f\u0456\u0446\u0438 \u043d\u0430 \u0434\u0440\u043e\u0432\u0430\u0445 ",Object(c.jsx)("span",{children:"\u0434\u043e 30\u0445\u0432"})]})]})]}),Object(c.jsxs)(r.b,{to:"shopping_cart",className:"header__cart",children:[Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAmCAYAAAHbzwkFAAAACXBIWXMAAAsSAAALEgHS3X78AAAEn0lEQVRYw61Y3XHbRhD+yFs8G+oAqsBQBaE7YAeBKghTQaAKQldgqALDFRiuIGAFRirQ6Rk3c3nQLrVcLkh6Jjdzg7+73W//94CcM3LOCIGy3BMAEBUVXzMAIARqQ6AcAlWyWraO8iIEyoS3MQCYiIqc0rySlbWsXIVAGe/jbg3gEz88A3gBc+v4mlc553c8AFY5v93zy3sAHYCJuX9JaV6JNDsAdwAqADWA35jIPVEREQJtGaLw60SgEKgMgbZa2kZAyeRvmyMmPQR0SvMKwJvelOoHprLX70+Uq/BV+nkVAlUA9gAis2iY3QOAf1KaVzBgR22MEKgPgbI1CFKaV1rbALA2gj0og50tehIM/FwDOLAKnqG0O2j3YYnjUQXqg16UQ6D2ZJFRag6BhhNlmgUba8MQaHLelXrfWtm0Z/U0LOyzUl0F4FH7t0QDUVEffUBx2fK1Via38tbKPUvRwVEUs1hv0hbvHDEbCdyNiv0nY+xtSnPN9xXPiaeI3REVX7RotYOmU2hHE3Vi/ykEOrNUY3TgiS0EtyFQPElUyvSRF0fNXRES/UQhuOhHiujesVqjCOUQqL6FUGssNEi0e9Mj4Hmxne0iIeVcmdGUfG0Yzc4wikuE8oJjtuo+MtHGEluzM8aT3Pk+rIPWAOqU5o5j7wNR0UrxqhyLlEuIFOJe+9EaQM/cIoADXyeO8H8VmteU5pIzxKMKGRAV9UmqM4EYlcLjQlBLRPRw4GcrygKRk310QbEirowfzvdjFjjJ6iqaJyVO66DqjYEGHag7xzojw28lRzv1OIdA2zWALYMT6/1Q1vmoxHghKkq2JgAciIqB/a+nlOaBqACAnwDuU5onJvIJwHejoxcmJMRepEhIK1PyS6kQcv8ngJLv/zJVpDqWdam1Kc1RFeMXdrhHLk16HNSaSYfUSd9ikAHAK+twYxDBxubafIj88Z65f5Aqo8LlYK44a5KuZMuT0LBr3JbMG0RFA2BnXOKW8cqt5z6lebq6+opE+4VY7aUEOntKTgr7hfQ/efsu1ZBS9yEqpCue3VJNcd6Pqn31hDsz2dqYZcfeKGZ5ZqfqOBB//qK59gC+cuBumdYDmxEAvhMVo9v4EhUdgL+VB9+pMjUysW8AflfZ9InfLY0dM39Iaa6YR8fB/pnXfCQqIofmsX3UiXFSVXkwXUxtTDryGm0y6Tui+Iox86SKT2P52rYhO34yGuf0gGlAS0C8jr00a1qbG3oDsLnQHGlgGzl3OUBs7tmab/qIMVhA7S0J7v+eGvDaSYA1n1HsjERFa55r/aNAB8gCjYGomNRzezwLSfo3B4Zozsedk+A8H2nVUblUkns+1Fzw19bb2LFfRNPCuUAMoFbt8YDtVSA0xp/OTsSDdm7VE90SNe1C8RxVL6WjsnYCpvJOVpZh4zCanDJgAZWqGfY01hsXKC/Vstp02aJqYTL9gobyBY3V3kHtUijWTpEVifYLlb41zAeTcyZPYzcBcsAN106QN2goX8t5dEvJTmkeVeuo883m7AjyPj4D+EO1l5F//X0D0HDjfDZu7hhv7Cq3AL6qjmHig0h/U7cI4D/v1vN5ENqqmgAAAABJRU5ErkJggg==",alt:"cart icon"}),Object(c.jsx)("span",{children:t})]})]})})};var W=function(){return Object(c.jsx)(r.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(T,{}),Object(c.jsx)(L,{}),Object(c.jsx)("div",{className:"footer",children:"React PIZZA \xa92021"})]})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))},M=a(12),G=a(27),J=Object(M.c)({pizzaItems:F}),Z=Object(M.d)(J,Object(M.a)(G.a));s.a.render(Object(c.jsx)(j.a,{store:Z,children:Object(c.jsx)(W,{})}),document.getElementById("root")),w()}},[[40,1,2]]]);
//# sourceMappingURL=main.b9cc4a71.chunk.js.map