var jQ = require("./jq");

function jq(selector, context) {
    if (typeof selector === "function") {
        return jq.window.ready(selector);
    }
    return new jQ(selector, context);
}

jq.fn = jQ.prototype;
jq.fn.find = require("./find");
jq.fn.clone = require("./clone");
jq.fn.on = require("./on");
jq.fn.ready = require("./ready");

var _doc = null;
var _win = null;

// Create a custom document
if (typeof document === "undefined") {
    _doc = {};
    _win = {};
} else {
    _doc = document;
    _win = window;
}

jQ.document = jq.document = new jQ(_doc);
jQ.window = jq.window = new jQ(_win);

module.exports = jq;
