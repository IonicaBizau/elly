
module.exports = function (selector) {
    var c = this.clone();
    return this.dom.querySelector(selector);
};
