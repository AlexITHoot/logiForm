window.addEventListener("DOMContentLoaded",(function(){"use strict";let t=document.querySelectorAll(".nav-item"),e=document.querySelector(".nav-tabs"),s=document.querySelectorAll(".tab-content-item");function a(t){for(let e=t;e<s.length;e++)s[e].classList.remove("show"),s[e].classList.add("hide")}a(1),t[0].classList.add("active"),e.addEventListener("click",(function(e){t.forEach((t=>{t.classList.remove("active")}));let i=e.target;if(i&&i.classList.contains("nav-item"))for(let e=0;e<t.length;e++)if(i==t[e]){a(0),s[c=e].classList.contains("hide")&&(s[c].classList.remove("hide"),s[c].classList.add("show")),i.classList.add("active");break}var c}))}));