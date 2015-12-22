module.exports = function removeAttr (name) {
    return this.each(elm => elm.removeAttribute(name, value));
};
