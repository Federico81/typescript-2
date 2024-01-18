"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var MyClassComponent = /** @class */ (function (_super) {
    __extends(MyClassComponent, _super);
    function MyClassComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            name: 'Marco'
        };
        return _this;
    }
    MyClassComponent.prototype.render = function () {
        return ({ "this": .props.subTitle } < /h3>
            < p > { "this": .state.name.toUpperCase() } < /p>
            < /div>);
    };
    return MyClassComponent;
}(react_1.Component));
exports["default"] = MyClassComponent;
