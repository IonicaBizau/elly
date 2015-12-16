function select(str, context) {
    if (typeof str === "string") {
        return context.querySelectorAll(str);
    }
    return str;
}

class jQ {
    constructor (elms) {
        this.elms = elms;
    }
    each (fn) {
        for (var i = 0; i < elms.length; ++i) {
            fn(elms[i], i);
        }
        return this;
    }
    on (event, fn) { return this.each(elm => elm.addEventListener(event, fn)); }
    click () {
        return this.each(elm => elm.click());
    }
    off (event, fn) {
        return this.each(elm => elm.removeEventListener(event, fn));
    }
    css (prop, val) {
        return this.each(elm => elm.style[prop] = val);
    }
    hide () {
        return this.css("display", "none");
    }
    show () {
        return this.css("display", "block");
    }
    addClass () {
        return this.each(elm => elm.classList.add.apply(elm.classList, arguments));
    }
    removeClass () {
        return this.each(elm => elm.classList.remove.apply(elm.classList, arguments));
    }
    toggleClass () {
        return this.each(elm => elm.classList.toggle.apply(elm.classList, arguments));
    }
    attr (name, value) {
        return this.each(elm => elm.setAttribute(name, value));
    }
    removeAttr (name) {
        return this.each(elm => elm.removeAttribute(name, value));
    }
}

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
