module.exports = function trigger (e, data) {
    if (typeof e === "string") {
        e = new CustomEvent(e, { detail: data });
    }
    return this.each(elm => elm.dispatchEvent(e));
};
