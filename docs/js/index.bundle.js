!function(){const e=document.querySelectorAll(".dropdown-btn"),t=document.querySelectorAll(".dropdown-content"),o=document.querySelector(".block-table");console.log(o,e);const n=document.querySelector(".content");document.addEventListener("DOMContentLoaded",(function(){e.forEach((e=>{e.addEventListener("click",(()=>{let o=e.getBoundingClientRect();console.log(o,o.top,o.left),t.forEach((e=>{e.classList.remove("show"),e.style.focus="none"})),e.nextElementSibling.classList.toggle("show"),e.nextElementSibling.style.transform=`translate(${o.left-(e.nextElementSibling.offsetWidth-e.offsetWidth)}px, ${o.top+e.offsetHeight}px)`}))}))})),n.addEventListener("scroll",(()=>{n.scrollTop>0&&(t.forEach((e=>{e.classList.remove("show")})),e.forEach((e=>{e.blur()})))})),window.onclick=function(e){if(!e.target.matches(".dropdown-btn")){var t,o=document.getElementsByClassName("dropdown-content");for(t=0;t<o.length;t++){var n=o[t];n.classList.contains("show")&&n.classList.remove("show")}}};const c=document.querySelectorAll(".menu-nav li"),s=location.pathname.split("/");c.forEach((e=>{s[s.length-1]==e.querySelector("a").getAttribute("href")&&""!=e.querySelector("a").getAttribute("href")?e.classList.add("active"):e.classList.remove("active")}));const l=document.querySelector("body"),r=document.querySelector(".menu-btn"),i=document.querySelector(".sidebar"),a=document.querySelector(".sidebar-header .close"),d=document.querySelector(".overlay");d.addEventListener("click",(()=>{u(!1)})),a.addEventListener("click",(()=>{u(!1)})),r.addEventListener("click",(()=>{u(!0)}));const u=e=>{e?(i.classList.add("active"),d.classList.add("active"),l.classList.add("active")):(i.classList.remove("active"),d.classList.remove("active"),l.classList.remove("active"))};window.addEventListener("resize",(()=>{window.innerWidth>=992&&u(!1)}))}();