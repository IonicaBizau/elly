module.exports = function toggleClass () {
    return this.each(elm => elm.classList.toggle.apply(elm.classList, arguments));
};
