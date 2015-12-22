module.exports = function each (fn) {
    var elms = this.elms
      , i = 0
      ;

    for (; i < elms.length; ++i) {
        fn(elms[i], i);
    }

    return this;
};
