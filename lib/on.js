module.exports = function (event, handler) {
    this.dom.addEventListener(event, handler);
    return this;
};
