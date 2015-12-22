module.exports = function off (event, fn) {
    return this.each(elm => elm.removeEventListener(event, fn));
};
