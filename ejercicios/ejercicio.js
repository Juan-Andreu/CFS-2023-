var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ElementoHtml = /** @class */ (function () {
    function ElementoHtml(id, className, value) {
        this.Id = id;
        this.Class = className;
        this.Value = value;
    }
    ElementoHtml.prototype.toDom = function () {
    };
    return ElementoHtml;
}());
var ElementInput = /** @class */ (function (_super) {
    __extends(ElementInput, _super);
    function ElementInput(Id, Name, Class, Value, Type) {
        var _this = _super.call(this, Id, Class, Value) || this;
        _this.Type = Type;
        return _this;
    }
    ElementInput.prototype.crearElemento = function () {
        var elemento = document.createElement('input');
        elemento.id = this.Id;
        elemento.className = this.Class;
        elemento.setAttribute('value', this.Value);
        elemento.setAttribute('type', this.Type);
        return elemento;
    };
    return ElementInput;
}(ElementoHtml));
var ElementTextarea = /** @class */ (function (_super) {
    __extends(ElementTextarea, _super);
    function ElementTextarea(Id, Name, Class, Value, cols, rows) {
        var _this = _super.call(this, Id, Class, Value) || this;
        _this.cols = cols;
        _this.rows = rows;
        return _this;
    }
    ElementTextarea.prototype.crearElemento = function () {
        var textarea = document.createElement('textarea');
        textarea.id = this.Id;
        textarea.className = this.Class;
        textarea.cols = this.cols;
        textarea.rows = this.rows;
        return textarea;
    };
    return ElementTextarea;
}(ElementoHtml));
