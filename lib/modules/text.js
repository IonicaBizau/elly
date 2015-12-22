module.exports = function text (text) {
    return this.each(elm => elm.textContent = text);
};
