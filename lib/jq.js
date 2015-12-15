"use strict";

class jQ {
    constructor (selector, context) {
        this.dom = [];
        if (selector) {
            context = context ? new jQ(context) : jQ.document;
            this.dom = typeof selector === "string"
                     ? context.findAll(selector)
                     : this.dom = selector
                     ;
        }
    }
}

module.exports = jQ;
