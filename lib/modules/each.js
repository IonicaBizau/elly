module.exports = function each (fn) {
    for (var i = 0; i < elms.length; ++i) {
        fn(elms[i], i);
    }
    return this;
};
