module.exports = function addClass () {
    return this.each(elm => elm.classList.add.apply(elm.classList, arguments));
};
