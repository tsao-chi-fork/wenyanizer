(this["webpackJsonpgh-pages"]=this["webpackJsonpgh-pages"]||[]).push([[0],{15:function(e,t){var n=["\u96f6","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d"],r=["\u5341","\u767e","\u5343"],a=["\u842c","\u5104","\u5146","\u4eac","\u5793","\u79ed","\u7a63","\u6e9d","\u6f97","\u6b63","\u8f09","\u6975","\u6046\u6cb3\u6c99","\u963f\u50e7\u7947","\u90a3\u7531\u4ed6","\u4e0d\u53ef\u601d\u8b70","\u7121\u91cf\u5927\u6578"],o=["\u5206","\u91d0","\u6beb","\u7d72","\u5ffd","\u5fae","\u7e96","\u6c99"],i=["\u5875","\u57c3","\u6e3a","\u6f20","\u6a21\u7cca","\u9021\u5de1","\u9808\u81fe","\u77ac\u606f","\u5f48\u6307","\u524e\u90a3","\u516d\u5fb7","\u865b","\u7a7a","\u6e05","\u6de8"];try{e.exports={hanzi2num:function e(t){function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];e=e.replace(r,":"+r+",")}var a=e.split(",");for(n=0;n<a.length;n++)a[n]=a[n].split(":");return a}function l(e,t,r,a,o){for(var i=s(e,a),l=0,c=0;c<i.length;c++){i[c].length>1&&""==i[c][0]&&(i[c][0]="\u4e00");for(var u=s(i[c][0],t),p=0,f=0;f<u.length;f++)1==u[f].length?""!=u[f][0]&&(p+=n.indexOf(u[f][0])):(""==u[f][0]&&(u[f][0]="\u4e00"),p+=n.indexOf(u[f][0])*Math.pow(r,t.indexOf(u[f][1])+1));2==i[c].length?l+=p*Math.pow(o,a.indexOf(i[c][1])+1):l+=p}return l}function c(e){return function(e,t,r,a,o){for(var i=s(e,a),l=0,c=0;c<i.length;c++){i[c].length>1&&"\u96f6"==i[c][0]&&(i[c][0]="\u4e00");for(var u=s(i[c][0],t),p=0,f=10,h=0;h<u.length;h++){var y=!1;"\u96f6"==u[h][0][0]?u[h][0]=u[h][0].slice(1):y=!0,1==u[h].length?""!=u[h][0]&&(p+=y?n.indexOf(u[h][0])*(f/10):n.indexOf(u[h][0])):(""==u[h][0]&&(u[h][0]="\u4e00"),f=Math.pow(r,t.indexOf(u[h][1])+1),p+=n.indexOf(u[h][0])*f)}2==i[c].length?l+=p*Math.pow(o,a.indexOf(i[c][1])+1):l+=p}return l}("\u96f6"+e,r,10,a,1e4)}function u(e){for(var t=-1,n=0;n<e.length&&(o.includes(e[n])&&(t=n),!i.includes(e[n]));n++);return l(e.slice(0,t+1),[],0,o,.1)+l(e.slice(t+1),r,10,i,1e-4)*Math.pow(.1,o.length)}if("\u8ca0"==(t=t.replace(/\u6709/g,""))[0])return-1*e(t.slice(1));if(t.includes("\u53c8")){var p=t.split("\u53c8")[0],f=t.split("\u53c8")[1];return c(p)+u(f)}for(var h=o.concat(i),y=0;y<h.length;y++)if(t.includes(h[y]))return u(t);return c(t)},num2hanzi:function e(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;function l(e){if(e<10)return n[e];for(var t="",o=-1,i=a.length-1;i>=0;i--){var s=Math.pow(1e4,i+1);(c=Math.floor(e/s))>0?(e%=s,t+=l(c)+a[i],o=0):0==o&&(t+="\u96f6",o=1)}for(i=r.length-1;i>=0;i--){var c;s=Math.pow(10,i+1);(c=Math.floor(e/s))>0?(e%=s,t+=l(c)+r[i],o=0):0==o&&(t+="\u96f6",o=1)}return e&&(t+=l(e)),"\u96f6"==t[t.length-1]&&(t=t.slice(0,t.length-1)),t}if(t<0)return"\u8ca0"+e(-t);var c=Math.floor(t);return c==t?l(t):l(c)+"\u53c8"+function(e){for(var t=Math.pow(.1,s),n="",r=-1,a=0;a<o.length;a++){if((c=Math.pow(.1,a+1))<t)break;(u=Math.floor(e/c))>0?(e-=u*c,n+=l(u)+o[a],r=0):0==r&&(n+="\u96f6",r=1)}for(a=0;a<i.length;a++){var c,u;if((c=1e-8*Math.pow(1e-4,a+1))<t)break;(u=Math.floor(e/c))>0?(e-=u*c,n+=l(u)+i[a],r=0):0==r&&(n+="\u96f6",r=1)}return"\u96f6"==n[n.length-1]&&(n=n.slice(0,n.length-1)),n}(t-c)}}}catch(s){}},35:function(e,t,n){e.exports=n(69)},40:function(e,t,n){},66:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(28),i=n.n(o),s=(n(40),n(16)),l=n(31),c=n(33),u=n(87),p=n(29),f=n.n(p),h=(n(48),n(49),function(e){return a.a.createElement(f.a,{value:e.value,mode:"javascript",theme:"mono_industrial",onChange:e.onChange,className:"editor",name:"JavaScript",editorProps:{$blockScrolling:!0},style:{borderRadius:8,boxShadow:"0 6px 24px 4px rgba(10, 10, 14, 0.3)",padding:6}})}),y=n(86),m=n(90),v=n(89),d=n(88),g=n(14),b=n(17),x=n(30),E=n(15),w={"==":"\u7b49\u65bc","===":"\u7b49\u65bc","!=":"\u4e0d\u7b49\u65bc","!==":"\u4e0d\u7b49\u65bc","<=":"\u4e0d\u5927\u65bc",">=":"\u4e0d\u5c0f\u65bc",">":"\u5927\u65bc","<":"\u5c0f\u65bc"},k={"*":"\u4e58","/":"\u9664","+":"\u52a0","-":"\u6e1b","||":"\u4e2d\u6709\u967d\u4e4e","&&":"\u4e2d\u7121\u9670\u4e4e",not:"\u8b8a",mod:"\u6240\u9918\u5e7e\u4f55"},j={obj:"\u7269",num:"\u6578",arr:"\u5217",str:"\u8a00",fun:"\u8853",bol:"\u723b"},S=0;function O(e){var t=j[e];if(null==t)throw new Error("Type ".concat(e," not found"));return t}function M(e){return"\u300c".concat(e,"\u300d")}function I(e){if(null==e)return"undefined";if("iden"===e[0])return"\u300c".concat(e[1],"\u300d");if("num"===e[0])return Object(E.num2hanzi)(e[1]);if("ans"===e[0])return"\u5176";if("lit"===e[0])return"\u300c\u300c".concat(e[1].slice(1,-1),"\u300d\u300d");if("bool"===e[0])return e[1]?"\u967d":"\u9670";if("data"===e[0])return"\n"===e[1][e[1].length-1]?" ".concat(e[1].slice(0,-1)):" ".concat(e[1]);if(e[0].startsWith("op"))return console.log("Weird value",e),"";if("cmp"===e[0])return function(e){if("cmp"!==e[0])throw new Error;return w[e[1]]}(e);if("ctnr"===e[0]){if("len"===e[1])return"\u9577";if("rest"===e[1])return"\u5176\u9918"}else if("lop"===e[0])return k[e[1]]||function(){throw new Error}();throw console.log(e),new Error("Prop type ".concat(e[0]," not found"))}var L="\u7532\u4e59\u4e19\u4e01\u620a\u5df1\u5e9a\u8f9b\u58ec\u7678\u5341\u4e8c\u5730\u652f\u5b50\u4e11\u5bc5\u536f\u8fb0\u5df3\u5348\u672a\u7533\u9149\u620c\u4ea5".split(""),C=["\u96f6","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d"];function _(e){return function(e){e instanceof Array||(e=JSON.parse(e));var t="",n=0,r=0,a=[];function o(){for(var e=0;e<r;e++)t+="    "}function i(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t||(console.log(e[n]),console.log("ERROR",r))}function s(e){o();var n=Math.max(e.count,1),r=j[e.type];if(null==r)throw new Error("Type ".concat(e.type," not found"));t+="\u543e\u6709".concat(Object(E.num2hanzi)(n)).concat(r,"\u3002");for(var i=0;i<n;i++)e.values[i]?t+="\u66f0".concat(I(e.values[i]),"\u3002"):"num"===e.type&&n>1&&(t+="\u66f0\u96f6\u3002");for(var s=0;s<e.names.length;s++)0===s&&(t+="\u540d\u4e4b"),null==e.names[s]&&(e.names[s]="_ans"+ ++S),t+="\u66f0\u300c".concat(e.names[s],"\u300d");"fun"===e.type&&a.push(e.names[0]),t+="\n"}function l(e){i(null!=e.arity),o(),t+="\u6b32\u884c\u662f\u8853\u3002\u5fc5\u5148\u5f97",o();for(var n=0;n<e.arity;n++)t+="\u4e00".concat(O(e.args[n].type),"\u3002"),t+="\u66f0\u300c".concat(e.args[n].name,"\u300d\u3002");t+="\n"}function c(e){switch(o(),e.op){case"op+":case"op-":case"op/":case"op*":t+="".concat(k[e.op[2]]).concat(I(e.lhs),"\u4ee5").concat(I(e.rhs),"\u3002");break;case"op%":t+="\u9664".concat(I(e.lhs),"\u4ee5").concat(I(e.rhs),"\u3002\u6240\u9918\u5e7e\u4f55\u3002");break;case"op||":t+="\u592b".concat(I(e.lhs)).concat(I(e.rhs),"\u4e2d\u6709\u967d\u4e4e\u3002");break;case"op&&":t+="\u592b".concat(I(e.lhs)).concat(I(e.rhs),"\u4e2d\u7121\u9670\u4e4e\u3002");break;case"op==":case"op===":case"op!=":case"op!==":case"op>":case"op<":case"op>=":case"op<=":if(null==e.name)throw new Error;t+="\u543e\u6709\u4e00\u723b\u3002\u540d\u4e4b\u66f0".concat(M(e.name),"\u3002\u82e5").concat(I(e.lhs)).concat(w[e.op.slice(2)]).concat(I(e.rhs),"\u8005\u3002\u6614\u4e4b").concat(M(e.name),"\u8005\u3002\u4eca\u967d\u662f\u77e3\u4e91\u4e91\u3002");break;default:throw console.log(e),new Error}t+="\n"}function u(e){i(e.value.length>=2),o(),t+="\u70ba\u662f".concat(I(e.value),"\u904d\u3002\n")}function p(e){o(),i(e.names.length>=1),t+="\u540d\u4e4b";for(var n=0;n<e.names.length;n++)t+="\u66f0\u300c".concat(e.names[n],"\u300d\u3002");t+="\n"}function f(e){if(i(1===e.test.length||e.test.length>=3),o(),t+="\u82e5",e.test&&e.test.length>=3)for(var n=0;n<e.test.length;n++)"ctnr"===e.test[n][0]?"len"===e.test[n][1]?t+="\u4e4b\u9577":"subs"===e.test[n][1]&&(t+="\u4e4b".concat(I(e.test[++n]))):t+=I(e.test[n]);else{if(!e.test||1!==e.test.length)throw console.log(e),new Error;t+="".concat(I(e.test[0]))}t+="\u8005\u3002\n",r++}for(n=0;n<e.length;n++){var h=e[n];if(h.op.startsWith("op"))c(h);else switch(h.op){case"var":s(h);break;case"fun":l(h);break;case"funbody":o(),t+="\u4e43\u884c\u662f\u8853\u66f0\u3002\n",r++;break;case"whilen":u(h),r++;break;case"whiletrue":o(),t+="\u6046\u70ba\u662f\u3002\n",r++;break;case"print":o(),t+="\u66f8\u4e4b\u3002\n";break;case"end":r--,o(),t+="\u4e91\u4e91\u3002\n";break;case"name":p(h);break;case"if":f(h);break;case"else":r--,o(),r++,t+="\u82e5\u975e\u3002\n";break;case"return":o(),t+="\u4e43\u5f97 ".concat(I(h.value),"\n");break;case"funend":r--,o(),t+="\u662f\u8b02\u300c".concat(a.pop(),"\u300d\u4e4b\u8853\u4e5f\u3002\n\n");break;case"push":o(),t+="\u5145\u300c".concat(h.container,"\u300d\u4ee5").concat(I(h.values[0]),"\u3002");for(var y=1;y<h.values.length;y++)t+="\u4ee5".concat(I(h.values[y]),"\u3002");t+="\n";break;case"break":o(),t+="\u4e43\u6b62\u3002\n";break;case"reassign":o(),i("iden"===h.lhs[0]),h.lhssubs?t+="\u6614\u4e4b\u300c".concat(h.lhs[1],"\u300d\u4e4b").concat(I(h.lhssubs),"\u8005\u3002"):t+="\u6614\u4e4b\u300c".concat(h.lhs[1],"\u300d\u8005\u3002"),t+="\u4eca".concat(I(h.rhs),"\u662f\u77e3\u3002\n");break;case"call":o(),t+="\u65bd\u300c".concat(h.fun,"\u300d");for(var m=0;m<h.args.length;m++)t+="\u65bc".concat(I(h.args[m]),"\u3002");t+="\n";break;case"comment":o(),t+="\u6279\u66f0\u3002".concat(I(h.value),"\n");break;case"subscript":o(),t+="\u592b\u300c".concat(h.container,"\u300d\u4e4b").concat(I(h.value),"\u3002\n");break;case"not":o(),t+="\u8b8a".concat(I(h.value),"\n");break;case"cat":o(),t+="\u929c".concat(M(h.containers[0]));for(var v=1;v<h.containers.length;v++)t+="\u4ee5".concat(M(h.containers[v]));t+="\u3002\n";break;case"for":o(),t+="\u51e1".concat(M(h.container),"\u4e2d\u4e4b").concat(M(h.iterator),"\n"),r++;break;case"discard":t+="\u566b\u3002";break;case"length":o(),t+="\u592b".concat(M(h.container),"\u4e4b\u9577\u3002");break;default:throw console.log(h),new Error("NotImp")}}return t}(function(e){var t=function(e,t){A=[],U=[],W=new Map;var n={},r=function(e){var t={};function n(e){e in t?t[e]+=1:t[e]=1}!function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t&&"object"===typeof t){if("Identifier"===t.type)return n(t.name),void(r&&(n(t.name),n(t.name)));if(t instanceof Array){var a=!0,o=!1,i=void 0;try{for(var s,l=t[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){e(s.value,r)}}catch(p){o=!0,i=p}finally{try{a||null==l.return||l.return()}finally{if(o)throw i}}}else for(var c in t){var u=r||"test"===c||"arguments"===c||"update"===c;e(t[c],u)}}}(e);var r=new Set;for(var a in t)2===t[a]&&r.add(a);return r}(e.program.body),a=e.program.body,o=[],i=!0,s=!1,l=void 0;try{for(var c,u=a[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var p=c.value;f(p)}}catch(I){s=!0,l=I}finally{try{i||null==u.return||u.return()}finally{if(s)throw l}}return o;function f(e){switch(e.type){case"VariableDeclaration":j(e);break;case"ExpressionStatement":k(e.expression);break;case"UpdateExpression":case"CallExpression":k(e);break;case"WhileStatement":"BooleanLiteral"===e.test.type?!0===e.test.value&&o.push({op:"whiletrue"}):E(e);var t=!0,n=!1,r=void 0;try{for(var a,i=e.body.body[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){f(a.value)}}catch(I){n=!0,r=I}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}o.push({op:"end"});break;case"IfStatement":!function(e){"BinaryExpression"===e.test.type?J.includes(e.test.operator)?o.push({op:"if",test:[].concat(Object(b.a)(v(e.test.left)),[["cmp",e.test.operator]],Object(b.a)(v(e.test.right)))}):e.test in B?o.push({op:"if",test:[d(e.test,!1)]}):E(e):e.test.type in B?o.push({op:"if",test:[d(e.test,!1)],pos:e.start}):"LogicalExpression"===e.test.type||"BinaryExpression"===e.test.type||"UnaryExpression"===e.test.type?o.push({op:"if",test:[d(e.test,!1)],pos:e.start}):E(e)}(e);var s=!0,l=!1,c=void 0;try{for(var u,p=e.consequent.body[Symbol.iterator]();!(s=(u=p.next()).done);s=!0){f(u.value)}}catch(I){l=!0,c=I}finally{try{s||null==p.return||p.return()}finally{if(l)throw c}}if(e.alternate){o.push({op:"else"});var h=!0,g=!1,M=void 0;try{for(var L,C=e.alternate.body[Symbol.iterator]();!(h=(L=C.next()).done);h=!0){f(L.value)}}catch(I){g=!0,M=I}finally{try{h||null==C.return||C.return()}finally{if(g)throw M}}}o.push({op:"end"});break;case"BreakStatement":o.push({op:"break"});break;case"LogicalExpression":case"BinaryExpression":!function(e){return R.includes(e.operator)}(e)?E(e):o.push({lhs:d(e.left,!1),rhs:d(e.right,!0),op:"op"+e.operator,name:e._name});break;case"ObjectExpression":x(null!=e._name),m([e._name],[],"obj"),S(e._name,e.properties);break;case"ReturnStatement":var _={op:"return",value:d(e.argument,!1),pos:e.start};null==_.value&&delete _.value,o.push(_);break;case"ForStatement":!function(e){var t=e.init.declarations[0].id.name,n=!e.init||!e.init.declarations.length||0!==e.init.declarations[0].init.value||!e.update||"++"!==e.update.operator||e.update.argument.name!==t||e.test&&(e.test.left.name!==t||"<"!==e.test.operator||!(e.test.right.type in B))||function e(t,n){if(!n||"object"!==typeof n)return!1;if(n.left&&n.left.name===t&&"AssignmentExpression"===n.type)return!0;if("UpdateExpression"===n.type&&n.argument.name===t)return!0;if(n instanceof Array){var r=!0,a=!1,o=void 0;try{for(var i,s=n[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var l=i.value;if(e(t,l))return!0}}catch(I){a=!0,o=I}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return!1}for(var c in n)if(n.hasOwnProperty(c)&&e(t,n[c]))return!0;return!1}(t,e.body),r=n||e.init&&e.init.declarations&&e.init.declarations[0]&&!e.init.declarations[0].id.name.startsWith("_rand");r&&O("num",e.init.declarations[0].init.value,t);n?o.push({op:"whiletrue"}):!function(e){if(!e.init||1!==e.init.declarations.length)return!1;try{if(0!==e.init.declarations[0].init.value)return!1;if(e.test.left.name!==e.init.declarations[0].id.name)return!1;if("<"!==e.test.operator)return!1;if(!(e.test.right.type in D))return!1;if("++"!==e.update.operator)return!1}catch(t){return!1}return!0}(e)?E(e):o.push({op:"whilen",value:d(e.test.right),pos:e.start});var a=!0,i=!1,s=void 0;try{for(var l,c=e.body.body[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){f(l.value)}}catch(I){i=!0,s=I}finally{try{a||null==c.return||c.return()}finally{if(i)throw s}}e.test&&n&&(o.push({op:"if",test:[d(e.test),["cmp","=="],["bool",!1]]}),o.push({op:"break"}),o.push({op:"end"}));r&&f(e.update);o.push({op:"end"})}(e);break;case"ForOfStatement":x("Identifier"===e.right.type),o.push({op:"for",container:e.right.name,iterator:d(e.left,!1)[1]});var N=!0,A=!1,U=void 0;try{for(var W,F=e.body.body[Symbol.iterator]();!(N=(W=F.next()).done);N=!0){f(W.value)}}catch(I){A=!0,U=I}finally{try{N||null==F.return||F.return()}finally{if(A)throw U}}o.push({op:"end"});break;case"MemberExpression":!function(e){var t=e.object;if("CallExpression"===e.object.type||"MemberExpression"===t.type){f(e.object);var n=function(){var e=z();return y([e]),e}();t={name:n,type:"Identifier"}}"Identifier"!==t.type&&E(e);"BinaryExpression"===e.property.type?"-"===e.property.operator&&1===e.property.right.value?o.push({op:"subscript",container:t.name,value:d(e.property.left,!0)}):(f(e.property),o.push({op:"subscript",container:t.name,value:["ans",null]})):e.property.type in B?"length"===e.property.name?o.push({op:"length",container:t.name}):null!=e.property.name?o.push({op:"subscript",container:t.name,value:["lit",'"'.concat(e.property.name,'"')]}):null!=e.property.value?"StringLiteral"===e.property.type?o.push({op:"subscript",container:t.name,value:["lit",'"'.concat(e.property.value,'"')]}):(x("NumericLiteral"===e.property.type),o.push({op:"subscript",container:t.name,value:["num",e.property.value+1]})):E(e):E(e)}(e);break;case"ArrayExpression":var V=e._name||z();m([V],[],"arr"),o.push({op:"push",container:V,values:e.elements.map((function(e){return d(e,!1)}))}),null==e._name&&m([],[["iden",V]],"arr");break;case"UnaryExpression":o.push({op:"not",value:d(e.argument,!0),pos:e.start});break;case"FunctionDeclaration":m([e.id.name],[],"fun"),w(e);break;case"EmptyStatement":break;default:E(e)}}function h(e,t){W.has(e)||U.push(e),W.set(e,t)}function y(e){o.push({op:"name",names:e});var t=!0,n=!1,r=void 0;try{for(var a,i=e[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){h(a.value,"obj")}}catch(I){n=!0,r=I}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}function m(e,t,n){var r=Math.max(e.length,t.length);o.push({op:"var",count:r,names:e,values:t,type:n});var a=!0,i=!1,s=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){h(l.value,n)}}catch(I){i=!0,s=I}finally{try{a||null==c.return||c.return()}finally{if(i)throw s}}}function v(e){if("MemberExpression"===e.type){if("Identifier"===e.object.type&&"Identifier"===e.property.type&&"length"===e.property.name)return[["iden",e.object.name],["ctnr","len"]];if("Identifier"===e.object.type&&"BinaryExpression"===e.property.type&&"-"===e.property.operator&&"NumericLiteral"===e.property.right.type&&1===e.property.right.value)return[["iden",e.object.name],["ctnr","subs"],d(e.property.left,!1)];throw console.log(e),new Error}if(e.type in B)return[d(e,!1)];if("BinaryExpression"===e.type||"LogicalExpression"===e.type)return[d(e,!1)];throw new Error}function d(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=e){if("CallExpression"===e.type)return g(e),a();if("MemberExpression"===e.type||"CallExpression"===e.type)return f(e),a();if("ArrayExpression"===e.type)return e._name=z(),f(e),["iden",e._name,e.start];if("VariableDeclaration"===e.type){var n=j(e);return x(1===n.length),["iden",n[0],e.start]}if("BinaryExpression"===e.type||"LogicalExpression"===e.type||"ObjectExpression"===e.type)return"ObjectExpression"===e.type||J.includes(e.operator)?(e._name=z(),f(e),["iden",e._name,e.start]):(f(e),a());if("UnaryExpression"===e.type){if("-"===e.operator)return"NumericLiteral"===e.argument.type?["num",-e.argument.value]:(o.push({op:"op-",lhs:["num",0],rhs:d(e.argument,!0)}),a());if("!"===e.operator)return o.push({op:"not",value:d(e.argument,!0),pos:e.start}),a();E(e)}return e.type in B||E(e),"Identifier"===e.type?t&&function(e){if(!r.has(e))return!1;var t=o[o.length-1];return"var"===t.op&&t.names[t.names.length-1]===e?(t.names.splice(t.names.length-1,1),!0):"reassign"===t.op&&t.lhs[1]===e&&null==t.lhssubs?(o.splice(o.length-1,1),!0):"name"===t.op&&1===t.names.length&&t.names[0]===e&&(o.splice(o.length-1,1),!0)}(e.name)?["ans",null]:["iden",e.name,e.start]:"StringLiteral"===e.type?e.value?["lit",'"'.concat(e.value,'"'),e.start]:["lit",null,e.start]:[B[e.type],e.value,e.start]}function a(){if(t)return["ans",null];var n=z();return y([n]),["iden",n,e.start]}}function g(e){W.has(e.callee.name)?o.push({op:"call",fun:e.callee.name,args:e.arguments.map((function(e){return d(e,!1)})),pos:e.start}):function(e){x("CallExpression"===e.type);var t,r="",a=[];!function e(t){if("Identifier"===t.type)r+=t.name;else if("MemberExpression"===t.type)e(t.object),r+=".",e(t.property);else if("CallExpression"===t.type){e(t.callee),x(t.arguments.length<=L.length),r+="(";for(var n=0;n<t.arguments.length;n++){var o="_a"+n;r+="".concat(o,","),a.push(o)}r+=")"}else E()}(e),r in n?t=n[r]:(t=z(),n[r]=t,m([t],[],"fun"),o.push({op:"fun",arity:e.arguments.length,args:e.arguments.map((function(e,t){return{type:"obj",name:a[t]}})),pos:e.start}),o.push({op:"funbody"}),o.push({op:"return",value:["data",r]}),o.push({op:"funend"})),o.push({op:"call",fun:t,args:e.arguments.map((function(e){return d(e,!1)})),pos:e.start})}(e)}function x(e,t){if(!e)throw new Error(t+JSON.stringify(p.loc.start))}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=t.slice(e.start,e.end);throw console.log(r),new Error("NotImplementedError: line ".concat(e.loc.start.line,", col ").concat(e.loc.start.column,';\n    \t"').concat(r,'"\n    \t').concat(n,"\n    The grammar is not supported yet.\n    "))}function w(e){o.push({op:"fun",arity:e.params.length,args:e.params.map((function(e){return{name:d(e)[1],type:"obj"}})),pos:e.start}),e.id&&h(e.id.name,"fun"),o.push({op:"funbody",pos:e.start});var t=!0,n=!1,r=void 0;try{for(var a,i=e.body.body[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){f(a.value)}}catch(I){n=!0,r=I}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}o.push({op:"funend",pos:e.end})}function k(e){switch(e.type){case"CallExpression":!function(e){if("Identifier"===e.callee.type)o.push({op:"call",fun:e.callee.name,args:e.arguments.map((function(e){return d(e,!1)})),pos:e.start});else if("console"===e.callee.object.name){for(var t=!0,n=e.arguments.length,a=0;a<n;a++){var i=e.arguments[a].name;if(i!==U[U.length-n+a]||!r.has(i)||o[o.length-n+a].names[0]!==i){t=!1;break}}if(t)for(var s=0;s<n;s++)"var"===o[o.length-n+s].op?o[o.length-n+s].names=[]:"name"===o[o.length-n+s].op&&o.splice(o.length-n+s,1);else!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=e.map((function(e){return d(e,!1)}));"iden"===(t=M(t||r[0][0],e[0]).type)&&x(null!=(t=W.get(e[0]))),m(n,r,t)}(e.arguments);o.push({op:"print"})}else if("MemberExpression"===e.callee.type&&"push"===e.callee.property.name)x("Identifier"===e.callee.object.type),o.push({op:"push",container:e.callee.object.name,pos:e.callee.object.start,values:e.arguments.map((function(e){return d(e,!1)}))});else if(e.callee.type.endsWith("MemberExpression")){for(var l=!0,c=!1,u=e,p=[];u&&"CallExpression"===u.type;){if(1!==u.arguments.length){l=!1;break}if(p.push(u.arguments[0].name),"concat"!==u.callee.property.name){l=!1;break}u=u.callee.object}if("slice"===e.callee.property.name&&1===e.arguments.length&&1===e.arguments[0].value&&"Identifier"===e.callee.object.type&&(c=!0),l)return p.push(u.name),void o.push({op:"cat",containers:p.reverse(),pos:e.start});if(c)return void o.push({op:"subscript",container:e.callee.object.name,value:["ctnr","rest"]});g(e)}else E(e)}(e);break;case"ExpressionStatement":f(e.expression);break;case"AssignmentExpression":!function(e){if(x("="===e.operator),"Identifier"===e.left.type)if("FunctionExpression"===e.right.type){var t=o[o.length-1];"var"===t.op&&t.names[0]===e.left.name||E(e),w(e.right)}else o.push({op:"reassign",lhs:["iden",e.left.name],rhs:d(e.right,!0)});else if(e.left.type.endsWith("Expression"))if("Identifier"===e.left.object.type&&"BinaryExpression"===e.left.property.type&&"-"===e.left.property.operator&&1===e.left.property.right.value){var n=d(e.left.property.left,!1);o.push({op:"reassign",lhssubs:n,lhs:["iden",e.left.object.name],rhs:d(e.right,!0)})}else"Identifier"===e.left.object.type&&"StringLiteral"===e.left.property.type?o.push({op:"reassign",lhssubs:["lit",'"'.concat(e.left.property.value,'"')],lhs:["iden",e.left.object.name],rhs:d(e.right,!0)}):"Identifier"===e.left.object.type&&"NumericLiteral"===e.left.property.type?o.push({op:"reassign",lhssubs:["num",e.left.property.value+1],lhs:["iden",e.left.object.name],rhs:d(e.right,!0)}):E(e);else E(e)}(e);break;case"UpdateExpression":!function(e){"++"===e.operator?o.push({op:"op+",lhs:["iden",e.argument.name],rhs:["num",1,e.start]}):"--"===e.operator?o.push({op:"op-",lhs:["iden",e.argument.name],rhs:["num",1,e.start]}):E(e);o.push({op:"reassign",lhs:["iden",e.argument.name],rhs:["ans",null]})}(e);break;default:E(e,"Unknown expression ".concat(e.expression.type))}}function j(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var t=[],n=0;n<e.declarations.length;n++){var r=e.declarations[n],a=r.id.name;if(null==r.init)m([a],[],"obj"),t.push(a);else if("BinaryExpression"===r.init.type||"CallExpression"===r.init.type||"MemberExpression"===r.init.type||"UnaryExpression"===r.init.type||"LogicalExpression"===r.init.type)r.init._name=a,f(r.init),J.includes(r.init.operator)||(W.has(a)?o.push({op:"reassign",lhs:["iden",a],rhs:["ans",null]}):y([a])),t.push(a);else{var i=r.init.value||r.init.name,s=F(r.init.type||typeof i,i);O(s,i,a),t.push(a),"fun"===s&&(r.init.body.extra&&"0"===r.init.body.extra.raw||("ArrowFunctionExpression"===r.init.type||"FunctionExpression"===r.init.type?w(r.init):E(r))),"obj"===s&&r.init.properties.length&&S(a,r.init.properties),"arr"===s&&r.init.elements.length&&o.push({op:"push",container:a,values:r.init.elements.map((function(e){return d(e,!1)}))})}}return t}function S(e,t){var n=!0,r=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var l=i.value;o.push({op:"reassign",lhs:["iden",e],lhssubs:["lit",'"'.concat(l.key.name||l.key.value,'"')],rhs:d(l.value,!0)})}}catch(I){r=!0,a=I}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}}function O(e,t,n){var r,a,o=M(e,t);r=o.type,a=o.toIgnoreValues,t=o.value,m([n],a?[]:[[e,t]],r)}function M(e,t){var n=e,a="fun"===n||"arr"===n||"obj"===n;if("iden"===n){n=W.get(t)||"obj";var i=t;if(r.has(i))o[o.length-1]}return"bool"===n&&(n="bol"),"lit"===e&&(n="str",t?t='"'.concat(t,'"'):a=!0),{type:n,toIgnoreValues:a,value:t}}}(Object(x.parse)(e),e);return function(e){function t(e){for(var t in e)if(e[t]&&"iden"===e[t][0]&&r.has(e[t][1]))return e[t][1]}function n(e,t,n){for(var r in e)if("iden"===e[r][0]&&e[r][1]===t)return e[r]=n,e;throw new Error}for(var r=function(){var t,n={},r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var l=i.value;for(var c in l)l[c]&&"iden"===l[c][0]&&(t=l[c][1],null==n[t]?n[t]=1:n[t]++)}}catch(f){a=!0,o=f}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}var u=new Set;for(var p in n)1===n[p]&&u.add(p);return u}(),a=1;a<e.length;a++){var o=t(e[a]);null!=o&&("var"===e[a-1].op&&1===e[a-1].values.length&&1===e[a-1].names.length&&e[a-1].names[0]===o&&(n(e[a],o,e[a-1].values[0]),e.splice(a-1,1),a--))}}(t),t}(e))}var B={string:"lit",number:"num",function:"fun",boolean:"bool",StringLiteral:"lit",NumericLiteral:"num",Identifier:"iden",BooleanLiteral:"bool"},N=Object.assign({VariableDeclarator:"var"},B),A=[],U=[],W=new Set;function z(){var e=function(e){for(var t=L[Math.floor(Math.random()*L.length)];e.has(t);)t+=C[Math.floor(Math.random()*C.length)];return t}(W);return A.push(e),e}function F(e,t){if(N[e])return N[e];if("ArrowFunctionExpression"===e||"FunctionExpression"===e)return"fun";if("ArrayExpression"===e)return"arr";if("ObjectExpression"===e)return"obj";if(t instanceof Array)return"arr";if(t instanceof Object)return"obj";throw new Error("Unknown type ".concat(typeof t," of ").concat(t))}var D={NumericLiteral:"num",Identifier:"iden",BooleanLiteral:"bol",StringLiteral:"str"},J=["!=","==",">=","<=","<",">","===","!=="],R=["!=","==",">=","<=","<",">","+","-","*","/","%","&&","||"];n(66);var V=Object(l.a)((function(e){return{root:{flexGrow:1,margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},title:{margin:"32px 0",textAlign:"center"},paper:{padding:e.spacing(2),boxShadow:"0 6px 16px 12px rgba(10, 10, 16, 0.2)"}}}));i.a.render(a.a.createElement((function(){var e=Object(y.a)("(prefers-color-scheme: dark)"),t=a.a.useState("function wenyanizer(js){\n    var ast = parse(js);\n    var asc = ast2asc(ast);\n  \tvar wy = asc2wy(asc);\n  \treturn wy;\n}"),n=Object(s.a)(t,2),r=n[0],o=n[1],i=a.a.useState("\n\u543e\u6709\u4e00\u8853\u3002\u540d\u4e4b\u66f0\u300c\u6587\u8a00\u8f49\u63db\u300d\n\u6b32\u884c\u662f\u8853\u3002\u5fc5\u5148\u5f97\u4e00\u7269\u3002\u66f0\u300c\u89ba\u8a92\u65af\u300d\u3002\n\u4e43\u884c\u662f\u8853\u66f0\u3002\n    \u65bd\u300c\u8a9e\u6cd5\u5206\u6790\u300d\u65bc\u300c\u89ba\u8a92\u65af\u300d\u3002\u540d\u4e4b\u66f0\u300c\u62bd\u8c61\u8a9e\u6cd5\u6a39\u300d\u3002\n    \u65bd\u300c\u6a39\u93c8\u8f49\u63db\u300d\u65bc\u300c\u62bd\u8c61\u8a9e\u6cd5\u6a39\u300d\u3002\u540d\u4e4b\u66f0\u300c\u62bd\u8c61\u8a9e\u6cd5\u93c8\u300d\u3002\n    \u65bd\u300c\u5b9a\u7a3f\u300d\u65bc\u300c\u62bd\u8c61\u8a9e\u6cd5\u93c8\u300d\u3002\u540d\u4e4b\u66f0\u300c\u6587\u8a00\u300d\u3002\n    \u4e43\u5f97\u300c\u6587\u8a00\u300d\n\u662f\u8b02\u300c\u6587\u8a00\u8f49\u63db\u300d\u4e4b\u8853\u4e5f\u3002\n  "),l=Object(s.a)(i,2),p=l[0],f=l[1],b=a.a.useMemo((function(){return Object(c.a)({palette:{type:e?"dark":"light"}})}),[e]),x=V(),E=a.a.useCallback(Object(g.debounce)((function(e){try{f(_(e))}catch(t){f(t.toString())}}),1e3),[]),w=a.a.useCallback(Object(g.debounce)((function(e){o(e),E(e)}),50),[]);return a.a.createElement(u.a,{theme:b},a.a.createElement(d.a,null),a.a.createElement("div",{className:x.root},a.a.createElement("div",{className:x.title},a.a.createElement("h1",null,"\u6587\u8a00\u8f6c\u6362 ",a.a.createElement("a",{href:"https://github.com/zxch3n/wenyanizer"},"Wenyanizer")),a.a.createElement("p",null,"JavaScript \u2192"," ",a.a.createElement("a",{href:"https://github.com/LingDong-/wenyan-lang"},"Wenyan Lang"))),a.a.createElement(v.a,{container:!0,spacing:2,style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement(v.a,{item:!0,xs:12,md:6,style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement(h,{onChange:w,value:r})),a.a.createElement(v.a,{item:!0,xs:12,md:6},a.a.createElement(m.a,{className:x.paper},a.a.createElement("pre",null,a.a.createElement("code",null,p)))))))}),null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.65d7e9f3.chunk.js.map