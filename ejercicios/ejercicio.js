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
var ElementoHTML = /** @class */ (function () {
    function ElementoHTML(id, className, value) {
        this.Id = id;
        this.ClassName = className;
        this.Value = value;
    }
    return ElementoHTML;
}());
var ElementoInput = /** @class */ (function (_super) {
    __extends(ElementoInput, _super);
    function ElementoInput(Id, ClassName, Value, Type) {
        var _this = _super.call(this, Id, ClassName, Value) || this;
        _this.Type = Type;
        return _this;
    }
    ElementoInput.prototype.crearElemento = function () {
        var elemento = document.createElement('input');
        elemento.id = this.Id;
        elemento.className = this.ClassName;
        elemento.setAttribute('value', this.Value);
        elemento.setAttribute('type', this.Type);
        return elemento;
    };
    return ElementoInput;
}(ElementoHTML));
var ElementoTextarea = /** @class */ (function (_super) {
    __extends(ElementoTextarea, _super);
    function ElementoTextarea(Id, ClassName, Value, cols, rows) {
        var _this = _super.call(this, Id, ClassName, Value) || this;
        _this.cols = cols;
        _this.rows = rows;
        return _this;
    }
    ElementoTextarea.prototype.crearElemento = function () {
        var textarea = document.createElement('textarea');
        textarea.id = this.Id;
        textarea.className = this.ClassName;
        textarea.value = this.Value;
        textarea.cols = this.cols;
        textarea.rows = this.rows;
        return textarea;
    };
    return ElementoTextarea;
}(ElementoHTML));
var CustomOption = /** @class */ (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption(text, value) {
        var _this = _super.call(this) || this;
        _this.text = text;
        _this.value = value;
        return _this;
    }
    return CustomOption;
}(HTMLOptionElement));
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(Id, ClassName, options) {
        var _this = _super.call(this, Id, ClassName, "") || this;
        _this.options = options;
        return _this;
    }
    Select.prototype.crearElemento = function () {
        var select = document.createElement("select");
        select.id = this.Id;
        select.className = this.ClassName;
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            select.appendChild(option);
        }
        return select;
    };
    return Select;
}(ElementoHTML));
function mostrarElemento() {
    var elementoInput = new ElementoInput("inputId", "inputClass", "Input Value", "text");
    var elementoTextarea = new ElementoTextarea("textareaId", "textareaClass", "Textarea Value", 4, 6);
    var opcionesSelect = [
        new CustomOption("Option 1", "1"),
        new CustomOption("Option 2", "2")
    ];
    var elementoSelect = new Select("selectId", "selectClass", opcionesSelect);
    var container = document.createElement("div");
    container.appendChild(elementoInput.crearElemento());
    container.appendChild(elementoTextarea.crearElemento());
    container.appendChild(elementoSelect.crearElemento());
    document.body.appendChild(container);
}
