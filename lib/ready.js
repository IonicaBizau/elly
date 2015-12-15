module.exports = function (fn) {
    this.on("load", fn);
};
