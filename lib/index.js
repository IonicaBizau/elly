"use strict";

function select(str, context) {
    if (typeof str === "string") {
        return context.querySelectorAll(str);
    }
    return [str];
}

class jQ {
    constructor (elms) {
        this.elms = elms;
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

function jq(selector, context) {
    if (typeof selector === "function") {
        return $(window).on("DOMContentLoaded", selector);
    }
    var elms = [];
    context = (select(context, document) || [document])[0];
    elms = select(selector, context) || [];
    return new jQ(elms);
}

jq.fn = jQ.prototype;

module.exports = jq;
