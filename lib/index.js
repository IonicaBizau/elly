"use strict";

const iterateObj = require("iterate-object")
    , sliced = require("sliced")
    ;

/**
 * elly
 * Selects the DOM elements based on the provided selector. If there is no
 * commonjs/module environment, the `$` global variable will be created.
 *
 * @name elly
 * @function
 * @param {String|HTMLElement} input The element selector (e.g.
 * `'#my-id > .my-class'`), the element tag you want to create
 * (e.g. `'<ul>'`) or the HTML element (will be returned by the function).
 * @param {Object|HTMLElement} contextOrAttributes
 * @returns {HTMLElement} The HTMLElement that was provided or selected.
 */
function $ (input, contextOrAttributes) {
    if (typeof input === "string") {
        if (input.charAt(0) === "<") {
            input = document.createElement(input.slice(1, -1));
            iterateObj(contextOrAttributes || {}, (value, name) => {

                switch (name) {
                    case "text":
                        input.textContent = value;
                        return;
                    case "html":
                        input.innerHTML = value;
                        return;
                }

                input.setAttribute(name, value);
            });
            return input;
        } else {
            contextOrAttributes = contextOrAttributes || document;
            return contextOrAttributes.querySelector(input);
        }
    }
    return input;
};

/**
 * elly.$$
 * Selects multiple elements. Note that if there is no commonjs/module environment, you will access this function using `$.$$`.
 *
 * @name elly.$$
 * @function
 * @param {String} selector The DOM query selector.
 * @param {HTMLElement} context The element context/container. Defaults to `document`.
 * @returns {NodeList} The `NodeList` object containing the selected elements.
 */
$.$$ = function (selector, context) {
    context = context || document;
    return sliced(context.querySelectorAll(selector));
};

module.exports = $;
