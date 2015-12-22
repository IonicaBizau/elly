module.exports = function on(event, fn) {
    return this.each(elm => elm.addEventListener(event, fn));
};
