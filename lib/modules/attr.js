module.exports = function attr (name, value) {
    return this.each(elm => elm.setAttribute(name, value));
};
