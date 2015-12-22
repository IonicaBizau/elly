module.exports = function removeClass () {
    return this.each(elm => elm.classList.remove.apply(elm.classList, arguments));
};
