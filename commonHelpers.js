import"./assets/modulepreload-polyfill-ec808ebb.js";import{f,i as h}from"./assets/vendor-651d7991.js";const t={inputDate:document.getElementById("datetime-picker"),startBtn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};t.startBtn.disabled=!0;let r,o,n;t.startBtn.addEventListener("click",T);const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,onClose(e){p(e),D()}};f(t.inputDate,y);function a(){h.error({message:"Please choose a date in the future",position:"topRight"})}function p(e){r=e[0].getTime(),o=r-new Date}function D(){r-new Date<=0?(t.startBtn.disabled=!0,a()):t.startBtn.disabled=!1}function C(e){const d=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:c,minutes:l,seconds:m}}function i(e){n=C(e);for(let s in n)n[s]=n[s].toString().padStart(2,"0")}function T(){if(!o){a();return}i(o),u();const e=setInterval(()=>{if(g(),o<=0){t.days.textContent="00",t.hours.textContent="00",t.minutes.textContent="00",t.seconds.textContent="00",clearInterval(e),t.startBtn.disabled=!1,t.inputDate.disabled=!1;return}},1e3);t.startBtn.disabled=!0,t.inputDate.disabled=!0}function g(){o-=1e3,i(o),u()}function u(){t.days.textContent=n.days,t.hours.textContent=n.hours,t.minutes.textContent=n.minutes,t.seconds.textContent=n.seconds}
//# sourceMappingURL=commonHelpers.js.map