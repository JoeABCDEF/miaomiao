(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1455e66f"],{"535f":function(i,t,n){},"671f":function(i,t,n){"use strict";n.r(t);var s=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{class:{movie_body:!0,centerLoading:i.isLoading}},[i.isLoading?s("Loading",{staticClass:"loading"}):s("Scroller",{attrs:{handleToScroll:i.handleToScroll,handleToTouchEnd:i.handleToTouchEnd}},[s("ul",[s("li",{staticClass:"pullDown"},[i._v(i._s(i.pullDownMsg))]),i._l(i.movieList,function(t){return s("li",{key:t.id},[s("div",{staticClass:"pic_show",on:{tap:function(n){return i.handleToDesc(t.id)}}},[s("img",{attrs:{src:i._f("setWH")(t.img,"128.180")}})]),s("div",{staticClass:"info_list",on:{tap:function(n){return i.handleToDesc(t.id)}}},[s("h2",[i._v(i._s(t.nm)),t.version?s("img",{attrs:{src:n("bd8e")}}):i._e()]),s("p",[i._v("观众评 "),s("span",{staticClass:"grade"},[i._v(i._s(t.sc))])]),s("p",[i._v("主演: "+i._s(t.star))]),s("p",[i._v(i._s(t.showInfo))])]),s("div",{staticClass:"btn_mall"},[i._v("\n                    购票\n                ")])])})],2)])],1)},o=[],e={name:"NowPlaying",data:function(){return{movieList:[],pullDownMsg:"",isLoading:!0,prevCiId:-1}},activated:function(){var i=this,t=this.$store.state.city.id;-1!==this.prevCiId&&this.prevCiId===t||(this.isLoading=!0,this.axios.get("/api/movieOnInfoList?cityId="+t).then(function(n){var s=n.data.msg;"ok"===s&&(i.prevCiId=t,setTimeout(function(){i.movieList=n.data.data.movieList,i.isLoading=!1},200))}))},methods:{handleToDesc:function(i){this.$router.push("/movie/detail/1/"+i)},handleToScroll:function(i){i.y>20&&(this.pullDownMsg="正在更新中...")},handleToTouchEnd:function(i){var t=this;i.y>20&&this.axios.get("/api/movieOnInfoList?cityId="+this.$store.state.city.id).then(function(i){t.$nextTick(function(){t.pullDownMsg="更新成功",t.pullDownMsg=""})})}}},a=e,l=(n("b3d0"),n("2877")),d=Object(l["a"])(a,s,o,!1,null,"634ff654",null);t["default"]=d.exports},b3d0:function(i,t,n){"use strict";var s=n("535f"),o=n.n(s);o.a},bd8e:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAD+klEQVRoQ+1YzW4SURT+DjRR3FgfQB1q99KdCxMpuLd9gtLWvXVloqA0g4076wNU4QmkexkxceGu9AEKo3EvbqSLDsfcKTNcZgbmtnSqJEPSTTn3nPOd3+9AmPEPzbj/iAH86wzGGYgzMGUE4hKaMoBTP48zMHUIp1Tgy0C+yCvWHFrNMplT6r7Q59kya8kTZBoVqsuKRwBkyzyftPDLFmDUxV/jNdUu1JMzKsu/4DUQCiBkGej2k0g3y9R11IwAyJW4QMAHycZ+Q6eVM9q8UPF8iUXEHzlKGVg3dKoGAsgX+QCEjOsBY9Wbsgv1TkGZL6iMZqNCyz4Ado1Z6EjO/25UaF7BRuQi+SJ3QbjuGLJOy8juUbeEckXeJcITN1WMd0aFtiL3TsFAgG/bRoXKowBK3CFAc1FaWGruUEtBf+Qi2eecSSZxIPWBaeiUdgGI0QnCR0ng0NBp2AuRuxhuIFfiFgF33dpnLH+qUNMuoXyRqyCsSQCeGjrthqu9PIlcibcIeCv1aK1RoQJ5Zr/z/VcAJ5fnnpKlOQD3bUkSa+p0J5AzppgBmhFmxIPpI3aCACDq6MEsAgCw7wKwUyOgAd8AHCsl9fKFrgK45wx/Br6Qr4H/o/nvjY93H4BRo4AZ2zV0uvG418n2gQeqQe4DtWoqrcRgC72OlsBw6oXZoAQO966k67kS/yLAZQeWhSW7bb0zVjTHredmMwkeUotJVph/W6mEVqW0yxLDnNrstQXY22Fyp0OHlts7miYTTQbsXeUAGGWhA8K02WsL1ufuh3HGGLz9PnXHXu2qn41ep0BgmfkGPmXG4ftrC5l8kT8LSi3tKpuV2gDsXXAC00uYFp+ZGoM/hzllgdKifMRGZ2lbBr0j4NBhuJt/jrogcklakDyD1tu61pKpBBgu0RxL5kSDiE230WvbY3YCiNpeaqGQK/FbApTIHwNVQ6f1jd5RmUCvJuj+vpda0CYNGheAl047m27xmZmZlAUR/Z+vNY0JoZkacZSxelM3m8le3xyXBSZ+2n6zUE1YEERz2LxBdHrQzCPRdq6fzT/tOtNQgeMIAaaIvjdCYSU3+N6+9jaOj7bAwVdf/yqt/HiprXia94uhk9sLk09KRqtPIWVBmE+I+1n6EMO9mOT/e7PUx7Apx4FOMHblK3HiSSmUeK8fxWgOxQa9E/TunJmSdfuuRB998227MyIQ0Rc8PejZwyJnz9wrkiIOYAk+AKKZExbq8vGgiiHIgPfteQMkFlc/iaz8k4rQPZZAiwMC7G/csbUKNMdF3vtGZEKl/t13BEFvAg+sGbkAxtdADEC1P6KSizMQVWRV9cYZUI1UVHJxBqKKrKreOAOqkYpK7i+cHKNhg2lz0wAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-1455e66f.083dcb52.js.map