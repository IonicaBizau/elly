module.exports = function css (prop, val) {
    return this.each(elm => elm.style[prop] = val);
};
