const js = document.getElementById("js");
function JS() {
js.style.display = "block";
css.style.display = "none";
html.style.display = "none";
}
const css = document.getElementById("css");
function CSS() {
    css.style.display = "block";
    js.style.display = "none";
    html.style.display = "none";
}
const html = document.getElementById("html");
function HTML() {
    html.style.display = "block";
    css.style.display = "none";
    js.style.display = "none";
}