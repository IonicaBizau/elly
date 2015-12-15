var jQ = require("./jq");

module.exports = function () {
    var c = new jQ();
    c.dom = this.dom.map(current => {
        var _c = new jQ();
        _c.dom = current.dom
    });
    return this.dom.querySelector(selector);
};
