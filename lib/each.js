module.exports = function (fn) {
    this.dom.forEach(fn);
    return this;
};
