function addJs(src, cb) {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = cb;
    document.head.appendChild(s);
}

addJs(chrome.runtime.getURL('lib/jquery-3.6.0.min.js'), () => {
addJs(chrome.runtime.getURL('lib/codemirror.min.js'), () => {
addJs(chrome.runtime.getURL('lib/javascript.min.js'), () => {
addJs(chrome.runtime.getURL('lib/canvasjs.min.js'), () => {
addJs(chrome.runtime.getURL('lib/lua.min.js'), () => {
addJs(chrome.runtime.getURL('lib/fengari.js'), () => {
addJs(chrome.runtime.getURL('lib/easytimer.js'), () => {
addJs(chrome.runtime.getURL('lib/crypto-js.min.js'), () => {
addJs(chrome.runtime.getURL('lib/fengari-web.js'), () => {
  // ✅ FINAL script
  addJs(chrome.runtime.getURL('index.js'));
});});});});});});});});});


const div1 = document.createElement('div');
div1.id = "imagedata";
div1.dataset.active =  chrome.runtime.id;
document.body.appendChild(div1)


