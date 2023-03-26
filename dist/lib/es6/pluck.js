export var pluck = function (elements, fields) {
    return elements.map(function (element) { return element[fields]; });
};
