"use strict";

function select(str, context) {
    if (typeof str === "string") {
        if (context && context.constructor === jQ) {
            let first = context.elms[0];
            if (!first) {
                return [];
            }
            context = first;
        }
        context = context || document;
        return context.querySelectorAll(str);
    }
    return [str];
}

class jQ {
    constructor (elms) {
        this.elms = elms;
        this.length = this.elms.length;
    }
}

jQ.prototype.each = require("./modules/each");
jQ.prototype.on = require("./modules/on");
jQ.prototype.click = require("./modules/click");
jQ.prototype.off = require("./modules/off");
jQ.prototype.css = require("./modules/css");
jQ.prototype.hide = require("./modules/hide");
jQ.prototype.show = require("./modules/show");
jQ.prototype.addClass = require("./modules/add-class");
jQ.prototype.removeClass = require("./modules/remove-class");
jQ.prototype.toggleClass = require("./modules/toggle-class");
jQ.prototype.attr = require("./modules/attr");
jQ.prototype.removeAttr = require("./modules/remove-attr");
jQ.prototype.text = require("./modules/text");
jQ.prototype.html = require("./modules/html");
jQ.prototype.eq = require("./modules/eq");
jQ.prototype.remove = require("./modules/remove");
jQ.prototype.focus = require("./modules/focus");

function jq(selector, context) {
    if (typeof selector === "function") {
        return jq(window).on("DOMContentLoaded", selector);
    }
    return new jQ(select(selector, context) || []);
}

jq.fn = jQ.prototype;

module.exports = jq;
