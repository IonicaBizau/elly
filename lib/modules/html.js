module.exports = function html (html) {
    return this.each(elm => elm.innerHTML = html);
};
