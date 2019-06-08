/*!
 * @form-create/iview v0.0.1
 * (c) 2018-2019 xaboy
 * Github https://github.com/xaboy/form-create
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('iview'), require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'iview', 'vue'], factory) :
  (global = global || self, factory(global.formCreate = {}, global.iview, global.Vue));
}(this, function (exports, iview, Vue) { 'use strict';

  iview = iview && iview.hasOwnProperty('default') ? iview['default'] : iview;
  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _extends() {
    return _extends = Object.assign || function (a) {
      for (var b, c = 1; c < arguments.length; c++) {
        for (var d in b = arguments[c], b) {
          Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
        }
      }

      return a;
    }, _extends.apply(this, arguments);
  }

  var normalMerge = ["attrs", "props", "domProps"],
      toArrayMerge = ["class", "style", "directives"],
      functionalMerge = ["on", "nativeOn"],
      mergeJsxProps = function mergeJsxProps(a) {
    return a.reduce(function (c, a) {
      for (var b in a) {
        if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge.indexOf(b)) c[b] = _extends({}, c[b], a[b]);else if (-1 !== toArrayMerge.indexOf(b)) {
          var d = c[b] instanceof Array ? c[b] : [c[b]],
              e = a[b] instanceof Array ? a[b] : [a[b]];
          c[b] = d.concat(e);
        } else if (-1 !== functionalMerge.indexOf(b)) {
          for (var f in a[b]) {
            if (c[b][f]) {
              var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                  h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
              c[b][f] = g.concat(h);
            } else c[b][f] = a[b][f];
          }
        } else if ("hook" == b) for (var i in a[b]) {
          c[b][i] = c[b][i] ? mergeFn(c[b][i], a[b][i]) : a[b][i];
        } else c[b] = a[b];
      }

      return c;
    }, {});
  },
      mergeFn = function mergeFn(a, b) {
    return function () {
      a && a.apply(this, arguments), b && b.apply(this, arguments);
    };
  };

  var helper = mergeJsxProps;

  var script = {
    name: 'fc-checkbox',
    props: {
      options: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      children: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      ctx: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      value: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    watch: {
      value: function value() {
        this.update();
      }
    },
    data: function data() {
      return {
        trueValue: []
      };
    },
    methods: {
      onInput: function onInput(n) {
        this.$emit('input', this.options.filter(function (opt) {
          return n.indexOf(opt.label) !== -1;
        }).map(function (opt) {
          return opt.value;
        }));
      },
      update: function update() {
        var _this = this;

        this.trueValue = this.options.filter(function (opt) {
          return _this.value.indexOf(opt.value) !== -1;
        }).map(function (option) {
          return option.label;
        });
      }
    },
    created: function created() {
      this.update();
    },
    render: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("CheckboxGroup", helper([{}, this.ctx, {
        "on": {
          "input": this.onInput
        },
        "model": {
          value: _this2.trueValue,
          callback: function callback($$v) {
            _this2.trueValue = $$v;
          }
        }
      }]), [this.options.map(function (opt) {
        var props = _objectSpread({}, opt);

        delete props.value;
        return h("Checkbox", {
          "props": _objectSpread({}, props)
        });
      }).concat(this.chlidren)]);
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  var __vue_script__ = script;
  /* template */

  /* style */

  var __vue_inject_styles__ = undefined;
  /* scoped */

  var __vue_scope_id__ = undefined;
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = undefined;
  /* style inject */

  /* style inject SSR */

  var Checkbox = normalizeComponent_1({}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

  var iview2 = {
    _v: 2,
    resetBtnType: 'ghost',
    resetBtnIcon: 'refresh',
    submitBtnIcon: 'ios-upload',
    fileIcon: 'document-text',
    fileUpIcon: 'folder',
    imgUpIcon: 'image'
  };
  var iview3 = {
    _v: 3,
    resetBtnType: 'default',
    resetBtnIcon: 'md-refresh',
    submitBtnIcon: 'ios-share',
    fileIcon: 'md-document',
    fileUpIcon: 'ios-folder-open',
    imgUpIcon: 'md-images'
  };
  var iviewConfig = function () {
    if (typeof iview === 'undefined') return iview2;
    return iview.version && iview.version.split('.')[0] == 3 ? iview3 : iview2;
  }();
  function getConfig() {
    return {
      form: {
        inline: false,
        labelPosition: 'right',
        labelWidth: 125,
        showMessage: true,
        autocomplete: 'off',
        size: undefined
      },
      row: {
        gutter: 0,
        type: undefined,
        align: undefined,
        justify: undefined,
        className: undefined
      },
      upload: {
        beforeUpload: function beforeUpload() {},
        onProgress: function onProgress(event, file, fileList) {},
        onSuccess: function onSuccess(response, file, fileList) {},
        onError: function onError(error, file, fileList) {},
        onPreview: function onPreview(file) {},
        onRemove: function onRemove(file, fileList) {},
        onFormatError: function onFormatError(file, fileList) {},
        onExceededSize: function onExceededSize(file, fileList) {},
        handleIcon: 'ios-eye-outline',
        allowRemove: true
      },
      submitBtn: {
        type: 'primary',
        size: 'large',
        shape: undefined,
        long: true,
        htmlType: 'button',
        disabled: false,
        icon: iviewConfig.submitBtnIcon,
        innerText: '提交',
        loading: false,
        show: true,
        col: undefined,
        click: undefined
      },
      resetBtn: {
        type: iviewConfig.resetBtnType,
        size: 'large',
        shape: undefined,
        long: true,
        htmlType: 'button',
        disabled: false,
        icon: iviewConfig.resetBtnIcon,
        innerText: '重置',
        loading: false,
        show: false,
        col: undefined,
        click: undefined
      }
    };
  }

  function $nt(fn) {
    Vue.nextTick(fn);
  }
  function $set(target, field, value) {
    Vue.set(target, field, value);
  }
  function $del(target, field) {
    Vue.delete(target, field);
  }
  function isValidChildren(children) {
    return Array.isArray(children) && children.length > 0;
  }
  var _toString = Object.prototype.toString;
  function isUndef(v) {
    return v === undefined || v === null;
  }
  function toString(val) {
    return val == null ? '' : _typeof(val) === 'object' ? JSON.stringify(val, null, 2) : String(val);
  }
  function extend(to, _from) {
    for (var key in _from) {
      $set(to, key, _from[key]);
    }

    return to;
  }
  function debounce(fn, wait) {
    var timeout = null;
    return function () {
      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      if (timeout !== null) clearTimeout(timeout);
      timeout = setTimeout(function () {
        return fn.apply(void 0, arg);
      }, wait);
    };
  }
  function isType(arg, type) {
    return _toString.call(arg) === '[object ' + type + ']';
  }
  function isDate(arg) {
    return isType(arg, 'Date');
  }
  function isPlainObject(arg) {
    return isType(arg, 'Object');
  }
  function isFunction(arg) {
    return isType(arg, 'Function');
  }
  function isString(arg) {
    return isType(arg, 'String');
  }
  function isBool(arg) {
    return isType(arg, 'Boolean');
  }
  function toLine(name) {
    var line = name.replace(/([A-Z])/g, '-$1').toLowerCase();
    if (line.indexOf('-') === 0) line = line.substr(1);
    return line;
  }
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }
  function toArray(a) {
    return Array.isArray(a) ? a : [a];
  }
  function isElement(arg) {
    return _typeof(arg) === 'object' && arg !== null && arg.nodeType === 1 && !isPlainObject(arg);
  }
  function deepExtend(origin) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var isArr = false;

    for (var key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        var clone = target[key];

        if ((isArr = Array.isArray(clone)) || isPlainObject(clone)) {
          var nst = origin[key] === undefined;

          if (isArr) {
            isArr = false;
            nst && $set(origin, key, []);
          } else {
            nst && $set(origin, key, {});
          }

          deepExtend(origin[key], clone);
        } else {
          $set(origin, key, clone);
        }
      }
    }

    return origin;
  }
  var id = 0;
  function uniqueId() {
    return ++id;
  }
  function timeStampToDate(timeStamp) {
    if (isDate(timeStamp)) return timeStamp;else {
      var date = new Date(timeStamp);
      return date.toString() === 'Invalid Date' ? timeStamp : date;
    }
  }
  function preventDefault(e) {
    e.preventDefault();
  }
  function dateFormat(fmt) {
    var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
    var o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      'S': date.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }

    return fmt;
  }
  function hasSlot(children, slotName) {
    return children.length !== 0 && children.some(function (child) {
      if (child.data) {
        if (!child.data.slot && slotName === 'default' || child.data.slot === slotName) return true;
      } else if (slotName === 'default') return true;

      return false;
    });
  }
  function errMsg(i) {
    return '\n\x67\x69\x74\x68\x75\x62\x3a\x68\x74\x74\x70' + '\x73\x3a\x2f\x2f\x67\x69\x74\x68\x75\x62\x2e\x63\x6f' + '\x6d\x2f\x78\x61\x62\x6f\x79\x2f\x66\x6f\x72\x6d\x2d' + '\x63\x72\x65\x61\x74\x65\n\x64\x6f\x63\x75\x6d\x65' + '\x6e\x74\x3a\x68\x74\x74\x70\x3a\x2f\x2f\x77\x77\x77' + '\x2e\x66\x6f\x72\x6d\x2d\x63\x72\x65\x61\x74\x65\x2e' + '\x63\x6f\x6d' + (i || '');
  }

  function getBaseConfig() {
    return {
      mounted: function mounted($f) {},
      onReload: function onReload($f) {},
      onSubmit: function onSubmit(formData, $f) {},
      el: null,
      switchMaker: true,
      iframeHelper: false
    };
  }
  var formCreateName = 'FormCreate';

  function getMixins(components) {
    return {
      data: function data() {
        return {
          rules: {},
          components: {},
          formData: {},
          buttonProps: {},
          resetProps: {},
          trueData: {},
          jsonData: {},
          $f: {},
          isShow: true,
          unique: 1
        };
      },
      components: components,
      methods: {
        _buttonProps: function _buttonProps(props) {
          this.$set(this, 'buttonProps', deepExtend(this.buttonProps, props));
        },
        _resetProps: function _resetProps(props) {
          this.$set(this, 'resetProps', deepExtend(this.resetProps, props));
        },
        _refresh: function _refresh() {
          this.unique += 1;
        }
      },
      beforeDestroy: function beforeDestroy() {
        this._fc.handle.reloadRule([]);
      },
      mounted: function mounted() {
        var _this = this;

        this._fc.handle.mounted();

        this.$watch('option', function () {
          $nt(function () {
            _this._refresh();
          });
        }, {
          deep: true
        });
      }
    };
  }

  function coreComponent(fc, components) {
    return {
      name: "".concat(formCreateName, "Core"),
      mixins: [getMixins(components)],
      render: function render() {
        return fc.handle.run();
      },
      beforeCreate: function beforeCreate() {
        this._fc = fc;
        fc.beforeCreate(this);
      },
      created: function created() {
        fc.handle.created();
        this.$f = fc.fCreateApi;
      },
      mounted: function mounted() {
        this.$watch('rules', function (n) {
          fc.handle.reloadRule(n);
        });
      }
    };
  }

  function $FormCreate(formCreate, components) {
    return {
      name: formCreateName,
      mixins: [getMixins(components)],
      props: {
        rule: {
          type: Array,
          required: true,
          default: function _default() {
            return {};
          }
        },
        option: {
          type: Object,
          default: function _default() {
            return {};
          },
          required: false
        },
        value: Object
      },
      render: function render() {
        return this._fc.handle.run();
      },
      beforeCreate: function beforeCreate() {
        var _this$$options$propsD = this.$options.propsData,
            rule = _this$$options$propsD.rule,
            option = _this$$options$propsD.option;
        this._fc = new formCreate(rule, option);

        this._fc.beforeCreate(this);
      },
      created: function created() {
        this._fc.handle.created();

        this.$f = this._fc.handle.fCreateApi;
        this.$emit('input', this.$f);
      },
      mounted: function mounted() {
        var _this = this;

        var _fc = this._fc;
        this.$watch('rule', function (n) {
          _fc.handle.reloadRule(n);

          _this.$emit('input', _this.$f);
        });
        this.$emit('input', this.$f);
      }
    };
  }

  function defVData() {
    return {
      class: {},
      style: {},
      attrs: {},
      props: {},
      domProps: {},
      on: {},
      nativeOn: {},
      directives: [],
      scopedSlots: {},
      slot: undefined,
      key: undefined,
      ref: undefined
    };
  }

  var VData =
  /*#__PURE__*/
  function () {
    function VData() {
      _classCallCheck(this, VData);

      this.init();
    }

    _createClass(VData, [{
      key: "class",
      value: function _class(classList) {
        var _this = this;

        var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        if (isUndef(classList)) return this;

        if (Array.isArray(classList)) {
          classList.forEach(function (cls) {
            $set(_this._data.class, toString(cls), true);
          });
        } else if (isPlainObject(classList)) {
          $set(this._data, 'class', extend(this._data.class, classList));
        } else {
          $set(this._data.class, toString(classList), status === undefined ? true : status);
        }

        return this;
      }
    }, {
      key: "directives",
      value: function directives(_directives) {
        if (isUndef(_directives)) return this;
        $set(this._data, 'directives', this._data.directives.concat(toArray(_directives)));
        return this;
      }
    }, {
      key: "init",
      value: function init() {
        this._data = defVData();
        return this;
      }
    }, {
      key: "get",
      value: function get() {
        var _this2 = this;

        var data = Object.keys(this._data).reduce(function (initial, key) {
          var value = _this2._data[key];
          if (value === undefined) return initial;
          if (Array.isArray(value) && !value.length) return initial;
          if (!Object.keys(value).length) return initial;
          initial[key] = value;
          return initial;
        }, {});
        this.init();
        return data;
      }
    }]);

    return VData;
  }();
  var keyList = ['ref', 'key', 'slot'];
  var objList = ['scopedSlots', 'nativeOn', 'on', 'domProps', 'props', 'attrs', 'style'];
  keyList.forEach(function (key) {
    VData.prototype[key] = function (val) {
      $set(this._data, key, val);
      return this;
    };
  });
  objList.forEach(function (key) {
    VData.prototype[key] = function (obj, val) {
      if (isUndef(obj)) return this;

      if (isPlainObject(obj)) {
        $set(this._data, key, extend(this._data[key], obj));
      } else {
        $set(this._data[key], toString(obj), val);
      }

      return this;
    };
  });

  function baseRule() {
    return {
      validate: [],
      options: [],
      col: {},
      children: [],
      emit: [],
      template: undefined,
      emitPrefix: undefined
    };
  }

  function creatorFactory(name) {
    return function (title, field, value) {
      var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return new Creator(name, title, field, value, props);
    };
  }
  function creatorTypeFactory(name, type) {
    var typeName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'type';
    return function (title, field, value) {
      var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var maker = new Creator(name, title, field, value, props);
      if (isFunction(type)) type(maker);else maker.props(typeName, type);
      return maker;
    };
  }

  var Creator =
  /*#__PURE__*/
  function (_VData) {
    _inherits(Creator, _VData);

    function Creator(type, title, field, value) {
      var _this;

      var props = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      _classCallCheck(this, Creator);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Creator).call(this));
      extend(_this._data, baseRule());
      extend(_this._data, {
        type: type,
        title: title,
        field: field,
        value: value
      }); // this.rule = extend(baseRule(), {type, title, field, value});
      // this.props({hidden: false, visibility: false});

      if (isPlainObject(props)) _this.props(props);
      return _this;
    }

    _createClass(Creator, [{
      key: "type",
      value: function type(_type) {
        this.props('type', _type);
        return this;
      }
    }, {
      key: "getRule",
      value: function getRule() {
        return this._data;
      }
    }, {
      key: "value",
      value: function value(_value) {
        $set(this._data, 'value', _value);
        return this;
      }
    }, {
      key: "event",
      value: function event() {
        this.on.apply(this, arguments);
        return this;
      }
    }]);

    return Creator;
  }(VData);
  var keyAttrs = ['emitPrefix', 'className', 'defaultSlot'];
  keyAttrs.forEach(function (attr) {
    Creator.prototype[attr] = function (value) {
      $set(this._data, attr, value);
      return this;
    };
  });
  var objAttrs = ['col'];
  objAttrs.forEach(function (attr) {
    Creator.prototype[attr] = function (opt) {
      $set(this._data, attr, extend(this._data[attr], opt));
      return this;
    };
  });
  var arrAttrs = ['validate', 'options', 'children', 'emit'];
  arrAttrs.forEach(function (attr) {
    Creator.prototype[attr] = function (opt) {
      if (!Array.isArray(opt)) opt = [opt];
      $set(this._data, attr, this._data[attr].concat(opt));
      return this;
    };
  });

  function makerFactory() {
    var maker = {};
    var commonMaker = creatorFactory('');
    extend(maker, {
      create: function create(type, field, title) {
        var make = commonMaker('', field);
        make._data.type = type;
        make._data.title = title;
        return make;
      },
      createTmp: function createTmp(template, vm, field, title) {
        var make = commonMaker('', field);
        make._data.type = 'template';
        make._data.template = template;
        make._data.title = title;
        make._data.vm = vm;
        return make;
      }
    });
    maker.template = maker.createTmp;
    maker.parse = parse;
    return maker;
  }

  function parse(rule) {
    var toMaker = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (isString(rule)) rule = JSON.parse(rule);
    if (rule instanceof Creator) return toMaker ? rule : rule.getRule();

    if (isPlainObject(rule)) {
      var maker = ruleToMaker(rule);
      return toMaker ? maker : maker.getRule();
    } else if (!Array.isArray(rule)) return rule;else {
      var rules = rule.map(function (r) {
        return parse(r, toMaker);
      });
      Object.defineProperty(rules, 'find', {
        value: findField,
        enumerable: false,
        configurable: false
      });
      return rules;
    }
  }

  function findField(field) {
    var children = [];

    for (var i in this) {
      var rule = this[i] instanceof Creator ? this[i].rule : this[i];
      if (rule.field === field) return this[i];
      if (isValidChildren(rule.children)) children = children.concat(rule.children);
    }

    if (children.length > 0) return findField.call(children, field);
  }

  function ruleToMaker(rule) {
    var maker = new Creator();
    Object.keys(rule).forEach(function (key) {
      maker._data[key] = rule[key];
    });
    return maker;
  }

  function parseVData(data) {
    if (isString(data)) data = {
      domProps: {
        innerHTML: data
      }
    };else if (data && isFunction(data.get)) data = data.get();
    return data;
  }

  function getVNode(VNode) {
    return isFunction(VNode) ? VNode() : VNode || [];
  }

  var VNode =
  /*#__PURE__*/
  function () {
    function VNode(vm) {
      _classCallCheck(this, VNode);

      if (vm) this.setVm(vm);
    }

    _createClass(VNode, [{
      key: "setVm",
      value: function setVm(vm) {
        this.vm = vm;
        this.$h = vm.$createElement;
      }
    }, {
      key: "make",
      value: function make(nodeName, data, VNodeFn) {
        var Node = this.$h(nodeName, parseVData(data), getVNode(VNodeFn));
        Node.context = this.vm;
        return Node;
      }
    }], [{
      key: "use",
      value: function use(nodes) {
        Object.keys(nodes).forEach(function (k) {
          VNode.prototype[k] = function (data, VNodeFn) {
            return this.make(nodes[k], data, VNodeFn);
          };
        });
      }
    }]);

    return VNode;
  }();

  var BaseParser =
  /*#__PURE__*/
  function () {
    function BaseParser(handle, rule, id) {
      _classCallCheck(this, BaseParser);

      this.rule = rule;
      this.vData = new VData();
      this.vNode = new VNode({});
      this.id = id;
      this.watch = [];
      this.type = toString(rule.type);
      this.isDef = true;
      this.el = undefined;

      if (!rule.field) {
        this.field = '_def_' + uniqueId();
        this.isDef = false;
      } else {
        this.field = rule.field;
      }

      this.unique = 'fc_' + id;
      this.key = 'key_' + id;
      this.refName = '__' + this.field + this.id;
      this.formItemRefName = 'fi' + this.refName;
      this.update(handle);
      this.init();
    }

    _createClass(BaseParser, [{
      key: "update",
      value: function update(handle) {
        this.$handle = handle;
        this.$render = handle.$render;
        this.vm = handle.vm;
        this.options = handle.options;
        this.vNode.setVm(this.vm);
        this.deleted = false;
      }
    }, {
      key: "init",
      value: function init() {}
    }, {
      key: "toFormValue",
      value: function toFormValue(value) {
        return value;
      }
    }, {
      key: "toValue",
      value: function toValue(formValue) {
        return formValue;
      }
    }]);

    return BaseParser;
  }();

  var $de = debounce(function (fn) {
    return fn();
  }, 1);

  var Render =
  /*#__PURE__*/
  function () {
    function Render(handle) {
      _classCallCheck(this, Render);

      this.$handle = handle;
      this.fc = handle.fc;
      this.vm = handle.vm;
      this.options = handle.options;
      this.form = handle.$form;
      this.vNode = new VNode(this.vm);
      this.vData = new VData();
      this.cache = {};
      this.renderList = {};
    }

    _createClass(Render, [{
      key: "clearCache",
      value: function clearCache(parser) {
        console.log('clear--------cache');
        if (this.cacheStatus(parser)) this.$handle.refresh();
        this.cache[parser.field] = null;
      }
    }, {
      key: "clearCacheAll",
      value: function clearCacheAll() {
        this.cache = {};
      }
    }, {
      key: "setCache",
      value: function setCache(parser, vnode) {
        this.cache[parser.field] = {
          vnode: vnode,
          use: false
        };
      }
    }, {
      key: "cacheStatus",
      value: function cacheStatus(parser) {
        return this.cache[parser.field] && this.cache[parser.field].use === true;
      }
    }, {
      key: "getCache",
      value: function getCache(parser) {
        var cache = this.cache[parser.field];
        cache.use = true;
        return cache.vnode;
      }
    }, {
      key: "initOrgChildren",
      value: function initOrgChildren() {
        var parsers = this.$handle.parsers;
        this.orgChildren = Object.keys(parsers).reduce(function (initial, id) {
          var children = parsers[id].children;
          initial[id] = isValidChildren(children) ? children : [];
          return initial;
        }, {});
      }
    }, {
      key: "getParser",
      value: function getParser(id) {
        return this.$handle.parsers[id];
      }
    }, {
      key: "run",
      value: function run() {
        var _this = this;

        if (!this.vm.isShow) return;
        this.form.beforeRender();
        var vn = this.$handle.sortList.map(function (id) {
          var parser = _this.getParser(id);

          if (parser.type === 'hidden') return;
          return _this.renderParser(parser, false);
        }).filter(function (val) {
          return val !== undefined;
        });
        return this.form.render(vn);
      }
    }, {
      key: "renderParser",
      value: function renderParser(parser, isChild) {
        var _this2 = this;

        if (!this.cache[parser.field] || parser.type === 'template') {
          var type = parser.type,
              rule = parser.rule,
              key = parser.key,
              form = this.form,
              vn;
          console.log(parser.field, 'rendering');

          if (type === 'template' && rule.template) {
            if (_vue.compile === undefined) {
              console.error('使用的 Vue 版本不支持 compile' + errMsg());
              return [];
            }

            if (!this.renderList[parser.id]) {
              if (isUndef(rule.vm)) rule.vm = new _vue();
              this.renderList[parser.id] = _vue.compile(rule.template);
              rule.vm.$on('input', function (value) {
                _this2.onInput(parser, value);
              });
            }

            vn = this.renderList[parser.id].render.call(rule.vm);
            if (vn.data === undefined) vn.data = {};
            vn.key = key;

            if (isChild) {
              this.setCache(parser, vn);
              return vn;
            }
          } else if (!this.$handle.isNoVal(parser)) {
            var children = this.renderChildren(parser);
            vn = parser.render ? parser.render(children) : this.defaultRender(parser, children);
          } else {
            vn = this.vNode.make(type, this.inputVData(parser), this.renderChildren(parser));

            if (isChild) {
              this.setCache(parser, vn);
              return vn;
            }
          }

          var cache = form.container(vn, parser);
          this.setCache(parser, cache);
          return cache;
        }

        return this.getCache(parser); // return form.container(vn, parser);
      }
    }, {
      key: "parserToData",
      value: function parserToData(parser) {
        Object.keys(parser.vData._data).forEach(function (key) {
          if (parser.rule[key] !== undefined) parser.vData[key](parser.rule[key]);
        });
        return parser.vData;
      }
    }, {
      key: "inputVData",
      value: function inputVData(parser, custom) {
        var _this3 = this;

        var refName = parser.refName,
            key = parser.key,
            rule = parser.rule;
        this.parserToData(parser);
        var data = parser.vData.ref(refName).key('fc_item' + key);
        if (!custom) data.on('input', function (value) {
          _this3.onInput(parser, value);
        }).props('value', this.$handle.getFormData(parser));
        if (isUndef(rule.props.size)) data.props('size', this.$handle.options.form.size);
        return data;
      }
    }, {
      key: "onInput",
      value: function onInput(parser, value) {
        this.$handle.onInput(parser, value);
      }
    }, {
      key: "renderChildren",
      value: function renderChildren(parser) {
        var _this4 = this;

        var children = parser.rule.children,
            orgChildren = this.orgChildren[parser.id];

        if (!isValidChildren(children)) {
          orgChildren.forEach(function (_rule) {
            _this4.removeField(_rule.__field__);
          });
          this.orgChildren[parser.id] = [];
          return [];
        }

        this.orgChildren[parser.id].forEach(function (child) {
          if (children.indexOf(child) === -1) {
            _this4.removeField(child.__field__);
          }
        });
        return children.map(function (child) {
          if (isString(child)) return child;

          if (child.__fc__) {
            return _this4.renderParser(child.__fc__, true);
          }

          $de(function () {
            return _this4.$handle.fc.reload();
          });
        });
      }
    }, {
      key: "defaultRender",
      value: function defaultRender(parser, children) {
        return this.vNode[parser.type] ? this.vNode[parser.type](this.inputVData(parser), children) : this.vNode.make(parser.type, this.inputVData(parser), children);
      }
    }]);

    return Render;
  }();

  function getRule(rule) {
    if (isFunction(rule.getRule)) return rule.getRule();else return rule;
  }
  /**
   * TODO 将 fComponentApi 移动到 FormCreate 里
   * TODO 将 options 一些事件触发移动到 FormCreate 里
   * TODO Form,Parser 里面可以获取到 options 和 handle
   * TODO 通过 emit 方式触发全局配置中的回调
   * TODO ERROR 图片上传进度条无效
   * TODO type 区分大小写问题
   * TODO parser在多个 form-create 中使用的问题
   * TODO 子组件数据发生变化不会印象父组件,父组件不会重新渲染,只渲染子组件
   *
   * FormCreate 负责生成表单,处理 drive 相关
   * Handle 负责处理生成规则,同步 Vm 操作
   * Render 负责处理表单渲染
   * Form 负责生成表单壳子
   */

  var Handle =
  /*#__PURE__*/
  function () {
    function Handle(fc) {
      _classCallCheck(this, Handle);

      var vm = fc.vm,
          rules = fc.rules,
          options = fc.options;
      this.vm = vm;
      this.fc = fc;
      this.id = uniqueId();
      this.options = options;
      this.validate = {};
      this.formData = {};
      this.fCreateApi = undefined;

      this.__init(rules);

      this.$form = new fc.drive.formRender(this, this.id);
      this.$render = new Render(this);
      this.loadRule(this.rules, false);
      this.$render.initOrgChildren();
      this.$form.init();
    }

    _createClass(Handle, [{
      key: "__init",
      value: function __init(rules) {
        this.fieldList = {};
        this.trueData = {};
        this.parsers = {};
        this.customData = {};
        this.sortList = [];
        this.rules = rules;
        this.origin = _toConsumableArray(this.rules);
      }
    }, {
      key: "loadRule",
      value: function loadRule(rules, child) {
        var _this = this;

        rules.map(function (_rule) {
          if (child && isString(_rule)) return;
          if (!_rule.type) return console.error('未定义生成规则的 type 字段' + errMsg());
          var parser;

          if (_rule.__fc__) {
            parser = _rule.__fc__;
            if (parser.vm !== _this.vm && !parser.deleted) return console.error("".concat(_rule.type, "\u89C4\u5219\u6B63\u5728\u5176\u4ED6\u7684 <form-create> \u4E2D\u4F7F\u7528") + errMsg());
            parser.update(_this);
          } else {
            parser = _this.createParser(_this.parseRule(_rule));
          }

          var children = parser.rule.children,
              rule = parser.rule;
          if (!_this.notField(parser.field)) return console.error("".concat(rule.field, " \u5B57\u6BB5\u5DF2\u5B58\u5728") + errMsg());

          _this.setParser(parser);

          if (!_rule.__fc__) {
            bindParser(_rule, parser);
          }

          if (isValidChildren(children)) {
            _this.loadRule(children, true);
          }

          if (!child) {
            _this.sortList.push(parser.id);
          }

          Object.defineProperty(parser.rule, 'value', {
            get: function get() {
              return parser.toValue(_this.getFormData(parser));
            },
            set: function set(value) {
              console.log('set parser', parser.field, value);

              if (_this.isChange(parser, value)) {
                _this.$render.clearCache(parser);

                _this.setFormData(parser, parser.toFormValue(value));
              }
            }
          });
          return parser;
        }).filter(function (h) {
          return h;
        }).forEach(function (h) {
          h.root = rules;
        });
      }
    }, {
      key: "createParser",
      value: function createParser(rule) {
        var id = this.id + '' + uniqueId(),
            parsers = this.fc.parsers,
            type = toString(rule.type).toLocaleLowerCase();
        var Parser = parsers[type] ? parsers[type] : BaseParser;
        return new Parser(this, rule, id);
      }
    }, {
      key: "parseRule",
      value: function parseRule(_rule) {
        var def = defRule(),
            rule = getRule(_rule);
        Object.keys(def).forEach(function (k) {
          if (isUndef(rule[k])) $set(rule, k, def[k]);
        });
        var parseRule = {
          col: parseCol(rule.col),
          validate: parseArray(rule.validate),
          options: parseArray(rule.options)
        };
        parseRule.on = parseOn(rule.on, this.parseEmit(rule));
        Object.keys(parseRule).forEach(function (k) {
          $set(rule, k, parseRule[k]);
        });
        if (isUndef(rule.props.elementId)) $set(rule.props, 'elementId', this.unique);
        return rule;
      }
    }, {
      key: "parseEmit",
      value: function parseEmit(rule) {
        var _this2 = this;

        var event = {},
            emit = rule.emit,
            emitPrefix = rule.emitPrefix,
            field = rule.field;
        if (!Array.isArray(emit)) return event;
        emit.forEach(function (eventName) {
          var emitKey = emitPrefix ? emitPrefix : field;
          var fieldKey = toLine("".concat(emitKey, "-").concat(eventName)).replace('_', '-');

          event[eventName] = function () {
            var _this2$vm;

            for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
              arg[_key] = arguments[_key];
            }

            (_this2$vm = _this2.vm).$emit.apply(_this2$vm, [fieldKey].concat(arg));
          };
        });
        return event;
      }
    }, {
      key: "run",
      value: function run() {
        console.log(this.id, '------------render------------');
        if (this.vm.unique > 0) return this.$render.run();else {
          this.vm.unique = 1;
          return [];
        }
      }
    }, {
      key: "setParser",
      value: function setParser(parser) {
        var id = parser.id,
            field = parser.field,
            name = parser.name,
            rule = parser.rule;
        if (this.parsers[id]) return;
        this.parsers[id] = parser;

        if (this.isNoVal(parser)) {
          if (name) $set(this.customData, name, rule);
          return;
        }

        this.fieldList[field] = parser;
        $set(this.formData, field, parser.toFormValue(rule.value));
        $set(this.validate, field, rule.validate);
        $set(this.trueData, field, rule);
      }
    }, {
      key: "notField",
      value: function notField(id) {
        return this.parsers[id] === undefined;
      }
    }, {
      key: "isChange",
      value: function isChange(parser, value) {
        return JSON.stringify(parser.rule.value) !== JSON.stringify(value);
      }
    }, {
      key: "onInput",
      value: function onInput(parser, value) {
        if (!this.isNoVal(parser) && this.isChange(parser, parser.toValue(value))) {
          this.$render.clearCache(parser);
          this.formData[parser.field] = value;
        }
      }
    }, {
      key: "created",
      value: function created() {
        console.log('---------created---------');
        var vm = this.vm; //TODO 可以不加到 vm 中
        // vm.$set(vm, 'rules', this.rules);
        // vm.$set(vm, 'trueData', this.trueData);
        // vm.$set(vm, 'components', this.customData);
        //^^^^^^^^^^^^^^^^^^^^^

        vm.$set(vm, 'buttonProps', this.options.submitBtn);
        vm.$set(vm, 'resetProps', this.options.resetBtn);
        vm.$set(vm, 'formData', this.formData);
        if (this.fCreateApi === undefined) this.fCreateApi = this.fc.drive.getGlobalApi(this);
        this.fCreateApi.rule = this.rules;
        this.fCreateApi.config = this.options;
      }
    }, {
      key: "addParserWitch",
      value: function addParserWitch(parser) {
        var _this3 = this;

        if (this.isNoVal(parser)) return;
        console.log('---------mountedParser---------', parser.field);
        var vm = this.vm;
        Object.keys(parser.rule).forEach(function (key) {
          if (['field', 'type', 'value', 'vm', 'template'].indexOf(key) !== -1 || parser.rule[key] === undefined) return;
          parser.watch.push(vm.$watch(function () {
            return parser.rule[key];
          }, function (n, o) {
            if (o === undefined) return;

            _this3.$render.clearCache(parser);

            console.log(key, ' -------------- change');
          }, {
            deep: true,
            immediate: true
          }));
        });
      }
    }, {
      key: "mountedParser",
      value: function mountedParser() {
        var _this4 = this;

        console.log('---------mountedParser---------');
        var vm = this.vm;
        Object.keys(this.parsers).forEach(function (id) {
          var parser = _this4.parsers[id];
          if (parser.watch.length === 0) _this4.addParserWitch(parser);
          parser.el = vm.$refs[parser.refName] || {};
          if (parser.defaultValue === undefined) parser.defaultValue = deepExtend({}, {
            value: parser.rule.value
          }).value;
          parser.mounted && parser.mounted();
        });
      }
    }, {
      key: "mounted",
      value: function mounted() {
        var mounted = this.options.mounted;
        this.mountedParser();
        mounted && mounted(this.fCreateApi);
        this.fc.$emit('mounted', this.fCreateApi);
      }
    }, {
      key: "reload",
      value: function reload() {
        var onReload = this.options.onReload;
        this.mountedParser();
        onReload && onReload(this.fCreateApi);
        this.fc.$emit('reload', this.fCreateApi);
      }
    }, {
      key: "removeField",
      value: function removeField(parser) {
        var id = parser.id,
            field = parser.field,
            index = this.sortList.indexOf(id);
        delParser(parser);
        $del(this.parsers, id);
        $del(this.validate, field);

        if (index !== -1) {
          this.sortList.splice(index, 1);
        }

        $del(this.formData, field);
        $del(this.customData, field);
        $del(this.trueData, field);
      }
    }, {
      key: "refresh",
      value: function refresh() {
        this.vm._refresh();
      }
    }, {
      key: "reloadRule",
      value: function reloadRule(rules) {
        var _this5 = this;

        var vm = this.vm;
        if (!rules) return this.reloadRule(this.rules);
        if (!this.origin.length) this.fCreateApi.refresh();
        this.origin = _toConsumableArray(rules);

        var parsers = _objectSpread({}, this.parsers);

        this.__init(rules);

        this.loadRule(rules, false);
        Object.keys(parsers).filter(function (id) {
          return _this5.parsers[id] === undefined;
        }).forEach(function (id) {
          return _this5.removeField(parsers[id]);
        });
        this.$render.initOrgChildren();
        this.created();
        $nt(function () {
          _this5.reload();
        });
        vm.$f = this.fCreateApi;
        this.$render.clearCacheAll();
        this.refresh();
      }
    }, {
      key: "setFormData",
      value: function setFormData(parser, value) {
        this.formData[parser.field] = value;
      }
    }, {
      key: "getFormData",
      value: function getFormData(parser) {
        return this.formData[parser.field];
      }
    }, {
      key: "fields",
      value: function fields() {
        return Object.keys(this.formData);
      }
    }, {
      key: "$emit",
      value: function $emit(parser, eventName) {
        var _this$vm, _parser$el;

        eventName = "fc:".concat(eventName);

        for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          params[_key2 - 2] = arguments[_key2];
        }

        if (parser.type === 'template' && parser.rule.template) (_this$vm = this.vm).$emit.apply(_this$vm, [eventName].concat(params));else if (this.isNoVal(parser) && parser.el.$emit) (_parser$el = parser.el).$emit.apply(_parser$el, [eventName].concat(params));
      }
    }, {
      key: "isNoVal",
      value: function isNoVal(parser) {
        return !parser.isDef;
      }
    }]);

    return Handle;
  }();
  function delParser(parser) {
    parser.watch.forEach(function (unWatch) {
      return unWatch();
    });
    parser.watch = [];
    parser.deleted = true;
    Object.defineProperty(parser.rule, 'value', {
      value: extend({}, {
        value: parser.rule.value
      }).value
    });
  }

  function parseOn(on, emitEvent) {
    if (Object.keys(emitEvent).length > 0) extend(on, emitEvent);
    return on;
  }

  function parseArray(validate) {
    return Array.isArray(validate) ? validate : [];
  }

  function parseCol(col) {
    if (isNumeric(col)) {
      return {
        span: col
      };
    } else if (col.span === undefined) $set(col, 'span', 24);

    return col;
  }

  function defRule() {
    return {
      validate: [],
      col: {},
      emit: [],
      props: {},
      on: {},
      options: [],
      title: '',
      value: '',
      field: '',
      className: ''
    };
  }

  function bindParser(rule, parser) {
    Object.defineProperties(rule, {
      __field__: {
        value: parser.field,
        enumerable: false,
        configurable: false
      },
      __fc__: {
        value: parser,
        enumerable: false,
        configurable: false
      }
    });
  }

  var _vue = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue;
  function createFormCreate(drive) {
    var components = {},
        parsers = {},
        maker = makerFactory();

    function setParser(id, parser) {
      id = toString(id);
      parsers[id.toLocaleLowerCase()] = parser;
      FormCreate.maker[id] = creatorFactory(id);
    }

    function component(id, component) {
      id = toString(id);

      var _id = id.toLocaleLowerCase();

      if (_id === 'form-create' || _id === 'formcreate') return _vue.extend($FormCreate(FormCreate, components));
      if (component === undefined) return components[toString(id)];else components[toString(id)] = component;
    }

    function margeGlobal(_options) {
      if (isBool(_options.sumbitBtn)) $set(_options, 'sumbitBtn', {
        show: _options.sumbitBtn
      });
      if (isBool(_options.resetBtn)) $set(_options, 'resetBtn', {
        show: _options.resetBtn
      });
      var options = deepExtend(extend(drive.getConfig(), getBaseConfig()), _options);
      $set(options, 'el', !options.el ? window.document.body : isElement(options.el) ? options.el : document.querySelector(options.el));
      return options;
    }

    function bindAttr(FormCreate) {
      extend(FormCreate, {
        version: drive.version,
        ui: drive.ui,
        maker: maker,
        component: component,
        setParser: setParser
      });
    }

    var FormCreate =
    /*#__PURE__*/
    function () {
      function FormCreate(rules) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, FormCreate);

        this.fCreateApi = undefined;
        this.drive = drive;
        this.parsers = parsers;
        this.vm = undefined;
        this.rules = Array.isArray(rules) ? rules : [];
        this.options = margeGlobal(options);
      }

      _createClass(FormCreate, [{
        key: "beforeCreate",
        value: function beforeCreate(vm) {
          this.vm = vm;
          this.handle = new Handle(this);
        }
      }, {
        key: "$emit",
        value: function $emit(eventName) {
          for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }

          if (this.$parent) {
            var _this$$parent;

            (_this$$parent = this.$parent).$emit.apply(_this$$parent, ["fc:".concat(eventName)].concat(params));
          } else {
            var _this$vm;

            (_this$vm = this.vm).$emit.apply(_this$vm, [eventName].concat(params));
          }
        }
      }], [{
        key: "create",
        value: function create(rule) {
          var _opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          var h = this.$createElement;
          var $vm = new _vue({
            data: function data() {
              return {
                rule: rule,
                option: isElement(_opt) ? {
                  el: _opt
                } : _opt
              };
            },
            render: function render() {
              var h = arguments[0];
              return h("form-create", helper([{
                "ref": 'fc'
              }, {
                "props": this.$data
              }]));
            }
          });
          $vm.$mount();

          $vm.$refs.fc._fc.options.el.appendChild($vm.$el);

          return $vm.$refs.fc._fc.handle.fCreateApi;
        }
      }, {
        key: "install",
        value: function install(Vue) {
          var $formCreate = function $formCreate(rules) {
            var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return FormCreate.create(rules, opt);
          };

          bindAttr($formCreate);
          Vue.prototype.$formCreate = $formCreate;
          Vue.component(formCreateName, Vue.extend($FormCreate(FormCreate, components)));
          _vue = Vue;
        }
      }, {
        key: "init",
        value: function init(rules) {
          var _opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          var opt = isElement(_opt) ? {
            el: _opt
          } : _opt;
          var fComponent = new FormCreate(rules, opt);

          var $fCreate = _vue.extend(coreComponent(fComponent, components));

          var $vm = new $fCreate().$mount();
          return {
            mount: function mount($el) {
              if ($el && isElement($el)) $set(fComponent.options, 'el', $el);
              fComponent.options.el.appendChild($vm.$el);
              return fComponent.fCreateApi;
            },
            remove: function remove() {
              fComponent.options.el.removeChild($vm.$el);
            },
            $f: fComponent.fCreateApi
          };
        }
      }]);

      return FormCreate;
    }(); // FormCreate.version = drive.version;
    // FormCreate.ui = drive.ui;
    // FormCreate.component = component;
    // FormCreate.maker = maker;
    // FormCreate.setParser = setParser;


    bindAttr(FormCreate);
    drive.components.forEach(function (component) {
      FormCreate.component(component.name, component);
    });
    drive.parsers.forEach(function (_ref) {
      var name = _ref.name,
          parser = _ref.parser;
      FormCreate.setParser(name, parser);
    });
    Object.keys(drive.makers).forEach(function (name) {
      FormCreate.maker[name] = drive.makers[name];
    });

    function install(Vue) {
      if (Vue._installedFormCreate === true) return;
      Vue._installedFormCreate = true;
      Vue.use(FormCreate);
    }

    return {
      FormCreate: FormCreate,
      install: install
    };
  }

  var BaseForm =
  /*#__PURE__*/
  function () {
    function BaseForm(handle) {
      _classCallCheck(this, BaseForm);

      this.$handle = handle;
      this.vm = handle.vm;
      this.drive = this.$handle.fc.drive;
      this.options = handle.options;
      this.vNode = new VNode(this.vm);
      this.vData = new VData();
      this.unique = handle.id;
    }

    _createClass(BaseForm, [{
      key: "init",
      value: function init() {
        this.$render = this.$handle.$render;
      }
    }, {
      key: "beforeRender",
      value: function beforeRender() {}
    }, {
      key: "render",
      value: function render() {}
    }]);

    return BaseForm;
  }();

  var vNode = new VNode({});

  var Modal = function Modal(options, cb) {
    return {
      name: 'fc-modal',
      data: function data() {
        return _objectSpread({
          value: true
        }, options);
      },
      render: function render() {
        vNode.setVm(this);
        return vNode.modal({
          props: this.$data,
          on: {
            'on-visible-change': this.remove
          }
        }, [cb(vNode, this)]);
      },
      methods: {
        onClose: function onClose() {
          this.value = false;
        },
        remove: function remove() {
          this.$el.parentNode.removeChild(this.$el);
        }
      }
    };
  };

  function mount(options, content) {
    var $modal = _vue.extend(Modal(options, content)),
        $vm = new $modal().$mount();
    window.document.body.appendChild($vm.$el);
  }
  function defaultOnHandle(src, title) {
    mount({
      title: title,
      footerHide: true
    }, function (vNode) {
      return vNode.make('img', {
        style: {
          width: '100%'
        },
        attrs: {
          src: src
        }
      });
    });
  }

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".fc-upload-btn, .fc-files {\n    display: inline-block;\n    width: 58px;\n    height: 58px;\n    text-align: center;\n    line-height: 58px;\n    border: 1px solid #c0ccda;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);\n    margin-right: 4px;\n    box-sizing: border-box;\n}\n\n.__fc_h {\n    display: none;\n}\n\n.__fc_v {\n    visibility: hidden;\n}\n\n.fc-files img {\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.fc-upload-btn {\n    border: 1px dashed #c0ccda;\n    cursor: pointer;\n}\n\n.fc-upload .fc-upload-cover {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, .6);\n    transition: opacity .3s;\n}\n\n.fc-upload .fc-upload-cover i {\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n\n.fc-files:hover .fc-upload-cover {\n    opacity: 1;\n}\n\n.fc-hide-btn .ivu-upload .ivu-upload {\n    display: none;\n}\n\n.fc-upload .ivu-upload-list {\n    margin-top: 0;\n}";
  styleInject(css);

  function parseValue(value) {
    return Array.isArray(value) ? value : !value ? [] : [value];
  }

  var script$1 = {
    name: 'fc-frame',
    props: {
      type: {
        type: String,
        default: 'input'
      },
      field: {
        type: String,
        default: ''
      },
      helper: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      src: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        default: iviewConfig.fileUpIcon
      },
      width: {
        type: [Number, String],
        default: 500
      },
      height: {
        type: [Number, String],
        default: 370
      },
      maxLength: {
        type: Number,
        default: 0
      },
      okBtnText: {
        type: String,
        default: '确定'
      },
      closeBtnText: {
        type: String,
        default: '关闭'
      },
      modalTitle: {
        type: String,
        default: '预览'
      },
      handleIcon: {
        type: [String, Boolean],
        default: ''
      },
      title: String,
      allowRemove: {
        type: Boolean,
        default: true
      },
      onOpen: {
        type: Function,
        default: function _default() {}
      },
      onOk: {
        type: Function,
        default: function _default() {}
      },
      onCancel: {
        type: Function,
        default: function _default() {}
      },
      onLoad: {
        type: Function,
        default: function _default() {}
      },
      onBeforeRemove: {
        type: Function,
        default: function _default() {}
      },
      onRemove: {
        type: Function,
        default: function _default() {}
      },
      onHandle: {
        type: Function,
        default: function _default(src) {
          defaultOnHandle(src, this.title);
        }
      },
      value: [Array, String]
    },
    data: function data() {
      return {
        modalVm: null,
        fileList: parseValue(this.value)
      };
    },
    watch: {
      value: function value(n) {
        this.$emit('on-change', n);
        this.fileList = parseValue(n);
      },
      fileList: function fileList(n) {
        this.$emit('input', this.maxLength === 1 ? n[0] || '' : n);
      }
    },
    methods: {
      closeModel: function closeModel() {
        this.modalVm && this.modalVm.onClose();
        this.modalVm = null;
      },
      showModel: function showModel() {
        var _this = this;

        if (this.disabled || false === this.onOpen()) return;
        var _this$$props = this.$props,
            width = _this$$props.width,
            height = _this$$props.height,
            src = _this$$props.src,
            title = _this$$props.title,
            okBtnText = _this$$props.okBtnText,
            closeBtnText = _this$$props.closeBtnText;
        mount({
          width: width,
          title: title
        }, function (vNode, _vm) {
          _this.modalVm = _vm;
          return [vNode.make('iframe', {
            attrs: {
              src: src
            },
            style: {
              'height': height,
              'border': '0 none',
              'width': '100%'
            },
            on: {
              'load': function load(e) {
                //TODO 补充 iframeHelper
                _this.onLoad(e);

                try {
                  if (_this.helper === true) {
                    var iframe = e.path[0].contentWindow;
                    iframe['form_create_helper'] = {
                      close: function close(field) {
                        _this.valid(field);

                        _vm.onClose();
                      },
                      set: function set(field, value) {
                        _this.valid(field);

                        _this.$emit('input', value);
                      },
                      get: function get(field) {
                        _this.valid(field);

                        return _this.value;
                      }
                    };
                  }
                } catch (e) {
                  console.log(e); //
                }
              }
            }
          }), vNode.make('div', {
            slot: 'footer'
          }, [vNode.button({
            on: {
              click: function click() {
                _vm.onClose();

                _this.onCancel();
              }
            }
          }, [closeBtnText]), vNode.button({
            props: {
              type: 'primary'
            },
            on: {
              click: function click() {
                _this.onOk() !== false && _vm.onClose();
              }
            }
          }, [okBtnText])])];
        });
      },
      makeInput: function makeInput(hidden) {
        var _this2 = this;

        var h = this.$createElement;
        var props = {
          type: 'text',
          value: this.fileList.toString(),
          icon: this.icon,
          readonly: true,
          clearable: false
        };
        return h("Input", helper([{
          "style": hidden ? 'display:none;' : ''
        }, {
          "props": props
        }, {}, {
          "on": {
            'on-click': function onClick() {
              return _this2.showModel();
            }
          }
        }]));
      },
      makeGroup: function makeGroup(children) {
        var h = this.$createElement;
        if (!this.maxLength || this.fileList.length < this.maxLength) children.push(this.makeBtn());
        children.push(this.makeInput(true));
        return h("div", {
          "class": css['fc-upload']
        }, _toConsumableArray(children));
      },
      makeItem: function makeItem(children) {
        var h = this.$createElement;
        return h("div", {
          "class": css['fc-files']
        }, _toConsumableArray(children));
      },
      valid: function valid(field) {
        if (field !== this.field) throw new Error('form-create:无效的表单字段');
      },
      makeIcons: function makeIcons(val) {
        var h = this.$createElement;

        if (this.handleIcon !== false || this.allowRemove === true) {
          var icons = [];
          if (this.type !== 'file' && this.handleIcon !== false || this.type === 'file' && this.handleIcon) icons.push(this.makeHandleIcon(val));
          if (this.allowRemove) icons.push(this.makeRemoveIcon(val));
          return h("div", {
            "class": css['fc-upload-cover']
          }, [icons]);
        }
      },
      makeHandleIcon: function makeHandleIcon(val) {
        var _this3 = this;

        var h = this.$createElement;
        return h("icon", helper([{}, {
          "props": {
            type: this.handleIcon === true ? 'ios-eye-outline' : this.handleIcon
          }
        }, {
          "on": {
            "click": function click() {
              return _this3.handleClick(val);
            }
          }
        }]));
      },
      makeRemoveIcon: function makeRemoveIcon(val) {
        var _this4 = this;

        var h = this.$createElement;
        return h("icon", helper([{}, {
          "props": {
            type: 'ios-trash-outline'
          }
        }, {
          "on": {
            "click": function click() {
              return _this4.handleRemove(val);
            }
          }
        }]));
      },
      makeFiles: function makeFiles() {
        var _this5 = this;

        var h = this.$createElement;
        return this.makeGroup(this.fileList.map(function (src) {
          return _this5.makeItem([h("icon", helper([{}, {
            "props": {
              type: iviewConfig.fileIcon,
              size: 40
            }
          }, {
            "on": {
              "click": function click() {
                return _this5.handleClick(src);
              }
            }
          }])), _this5.makeIcons(src)]);
        }));
      },
      makeImages: function makeImages() {
        var _this6 = this;

        var h = this.$createElement;
        return this.makeGroup(this.fileList.map(function (src) {
          return _this6.makeItem([h("img", {
            "attrs": {
              "src": src
            }
          }), _this6.makeIcons(src)]);
        }));
      },
      makeBtn: function makeBtn() {
        var _this7 = this;

        var h = this.$createElement;
        return h("div", {
          "class": css['fc-upload-btn'],
          "on": {
            "click": function click() {
              return _this7.showModel();
            }
          }
        }, [h("icon", helper([{}, {
          "props": {
            type: this.icon,
            size: 20
          }
        }]))]);
      },
      handleClick: function handleClick(src) {
        if (this.disabled) return;
        return this.onHandle(src);
      },
      handleRemove: function handleRemove(src) {
        if (this.disabled) return;

        if (false !== this.onBeforeRemove(src)) {
          this.fileList.splice(this.fileList.indexOf(src), 1);
          this.onRemove(src);
        }
      }
    },
    render: function render() {
      var type = this.type;
      if (type === 'input') return this.makeInput();else if (type === 'image') return this.makeImages();else return this.makeFiles();
    }
  };

  /* script */
  var __vue_script__$1 = script$1;
  /* template */

  /* style */

  var __vue_inject_styles__$1 = undefined;
  /* scoped */

  var __vue_scope_id__$1 = undefined;
  /* module identifier */

  var __vue_module_identifier__$1 = undefined;
  /* functional template */

  var __vue_is_functional_template__$1 = undefined;
  /* style inject */

  /* style inject SSR */

  var Frame = normalizeComponent_1({}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, undefined, undefined);

  var script$2 = {
    name: 'fc-radio',
    functional: true,
    props: {
      options: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    render: function render(h, ctx) {
      return h("RadioGroup", helper([{}, ctx.data]), [ctx.props.options.map(function (opt) {
        var props = _objectSpread({}, opt);

        delete props.value;
        return h("Radio", {
          "props": _objectSpread({}, props)
        });
      }).concat(ctx.chlidren)]);
    }
  };

  /* script */
  var __vue_script__$2 = script$2;
  /* template */

  /* style */

  var __vue_inject_styles__$2 = undefined;
  /* scoped */

  var __vue_scope_id__$2 = undefined;
  /* module identifier */

  var __vue_module_identifier__$2 = undefined;
  /* functional template */

  var __vue_is_functional_template__$2 = undefined;
  /* style inject */

  /* style inject SSR */

  var Radio = normalizeComponent_1({}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, undefined, undefined);

  var script$3 = {
    name: 'fc-select',
    functional: true,
    props: {
      options: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    render: function render(h, ctx) {
      return h("Select", helper([{}, ctx.data]), [ctx.props.options.map(function (props, index) {
        return h("Option", {
          "props": _objectSpread({}, props),
          "key": "t".concat(index).concat(ctx._uid)
        });
      }).concat(ctx.chlidren)]);
    }
  };

  /* script */
  var __vue_script__$3 = script$3;
  /* template */

  /* style */

  var __vue_inject_styles__$3 = undefined;
  /* scoped */

  var __vue_scope_id__$3 = undefined;
  /* module identifier */

  var __vue_module_identifier__$3 = undefined;
  /* functional template */

  var __vue_is_functional_template__$3 = undefined;
  /* style inject */

  /* style inject SSR */

  var Select = normalizeComponent_1({}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, undefined, undefined);

  function parseValue$1(value) {
    return Array.isArray(value) ? value : !value ? [] : [value];
  }

  var script$4 = {
    name: 'fc-tree',
    props: {
      ctx: {
        type: Object,
        default: function _default() {
          return {
            props: {}
          };
        }
      },
      children: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      type: {
        type: String,
        default: 'checked'
      },
      value: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    data: function data() {
      return {
        treeData: []
      };
    },
    watch: {
      value: function value(n) {
        n = parseValue$1(n);
        var data = this.$refs.tree.data;
        this.type === 'selected' ? this.selected(data, n) : this.checked(data, n);
      }
    },
    methods: {
      selected: function selected(_data, value) {
        var _this = this;

        _data.forEach(function (node) {
          _this.$set(node, 'selected', value.indexOf(node.id) !== -1);

          if (node.children !== undefined && Array.isArray(node.children)) _this.selected(node.children, value);
        });
      },
      checked: function checked(_data, value) {
        var _this2 = this;

        _data.forEach(function (node) {
          if (value.indexOf(node.id) !== -1) _this2.$set(node, 'checked', true);else {
            _this2.$set(node, 'indeterminate', false);

            _this2.$set(node, 'checked', false);
          }
          if (node.children !== undefined && Array.isArray(node.children)) _this2.checked(node.children, value);
        });
      },
      makeTree: function makeTree() {
        var h = this.$createElement;
        return h("Tree", helper([{
          "ref": "tree"
        }, this.ctx]), [this.children]);
      },
      updateTreeData: function updateTreeData() {
        var type = this.type.toLocaleLowerCase();
        if (type === 'selected') this.treeData = this.$refs.tree.getSelectedNodes();else if (type === 'indeterminate') this.treeData = this.$refs.tree.getCheckedAndIndeterminateNodes();else this.treeData = this.$refs.tree.getCheckedNodes();
        this.$emit('input', this.treeData.map(function (node) {
          return node.id;
        }));
      }
    },
    render: function render() {
      var h = arguments[0];
      return h("div", [this.makeTree()]);
    },
    mounted: function mounted() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.$watch(function () {
          return _this3.$refs.tree.flatState;
        }, function () {
          return _this3.updateTreeData();
        });
      });
    }
  };

  /* script */
  var __vue_script__$4 = script$4;
  /* template */

  /* style */

  var __vue_inject_styles__$4 = undefined;
  /* scoped */

  var __vue_scope_id__$4 = undefined;
  /* module identifier */

  var __vue_module_identifier__$4 = undefined;
  /* functional template */

  var __vue_is_functional_template__$4 = undefined;
  /* style inject */

  /* style inject SSR */

  var Tree = normalizeComponent_1({}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, undefined, undefined);

  function parseValue$2(value) {
    return Array.isArray(value) ? value : !value ? [] : [value];
  }

  function parseFile(file) {
    return {
      url: file,
      name: getFileName(file)
    };
  }

  function getFileName(file) {
    return toString(file).split('/').pop();
  }

  var script$5 = {
    name: 'fc-upload',
    props: {
      ctx: {
        type: Object,
        default: function _default() {
          return {
            props: {}
          };
        }
      },
      children: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      onHandle: {
        type: Function,
        default: function _default(file) {
          defaultOnHandle(file.url, this.modalTitle);
        }
      },
      uploadType: {
        type: String,
        default: 'file'
      },
      maxLength: {
        type: Number,
        default: 0
      },
      allowRemove: {
        type: Boolean,
        default: true
      },
      modalTitle: {
        type: String,
        default: '预览'
      },
      handleIcon: [String, Boolean],
      value: [Array, String]
    },
    data: function data() {
      return {
        uploadList: []
      };
    },
    created: function created() {
      if (this.ctx.props.showUploadList === undefined) this.ctx.props.showUploadList = false;
      this.ctx.props.defaultFileList = parseValue$2(this.value).map(parseFile);
    },
    watch: {
      value: function value(n) {
        this.$refs.upload.fileList = parseValue$2(n).map(parseFile);
        this.uploadList = this.$refs.upload.fileList;
      },
      maxLength: function maxLength(n, o) {
        if (o === 1 || n === 1) this.update();
      }
    },
    methods: {
      isDisabled: function isDisabled() {
        return this.ctx.props.disabled === true;
      },
      onRemove: function onRemove(file) {
        if (this.isDisabled()) return;
        this.$refs.upload.handleRemove(file);
      },
      handleClick: function handleClick(file) {
        if (this.isDisabled()) return;
        this.onHandle(file);
      },
      makeDefaultBtn: function makeDefaultBtn() {
        var h = this.$createElement;
        return h("div", {
          "class": css['fc-upload-btn']
        }, [h("icon", helper([{}, {
          "props": {
            type: this.uploadType === 'file' ? 'ios-cloud-upload-outline' : iviewConfig.imgUpIcon,
            size: 20
          }
        }]))]);
      },
      makeItem: function makeItem(file) {
        var h = this.$createElement;
        return this.uploadType === 'image' ? h("img", {
          "attrs": {
            "src": file.url
          }
        }) : h("icon", helper([{}, {
          "props": {
            type: iviewConfig.fileIcon,
            size: 40
          }
        }]));
      },
      makeRemoveIcon: function makeRemoveIcon(file) {
        var _this = this;

        var h = this.$createElement;
        return h("icon", {
          "attrs": {
            "type": 'ios-trash-outline'
          },
          "on": {
            "click": function click() {
              return _this.onRemove(file);
            }
          }
        });
      },
      makeHandleIcon: function makeHandleIcon(file) {
        var _this2 = this;

        var h = this.$createElement;
        return h("icon", {
          "attrs": {
            "type": this.handleIcon === true ? 'ios-eye-outline' : this.handleIcon
          },
          "on": {
            "click": function click() {
              return _this2.handleClick(file);
            }
          }
        });
      },
      makeProgress: function makeProgress(file) {
        var h = this.$createElement;
        return h("Progress", helper([{}, {
          "props": {
            percent: file.percentage,
            hideInfo: true
          }
        }, {
          "style": "width:90%"
        }]));
      },
      makeIcons: function makeIcons(file) {
        var h = this.$createElement;
        var icons = [];

        if (this.allowRemove || this.handleIcon) {
          if (this.handleIcon) icons.push(this.makeHandleIcon(file));
          if (this.allowRemove) icons.push(this.makeRemoveIcon(file));
          return h("div", {
            "class": css['fc-upload-cover']
          }, [icons]);
        }
      },
      makeFiles: function makeFiles() {
        var _this3 = this;

        var h = this.$createElement;
        return this.uploadList.map(function (file) {
          return h("div", {
            "class": css['fc-files']
          }, [file.showProgress ? _this3.makeProgress(file) : [_this3.makeItem(file), _this3.makeIcons(file)]]);
        });
      },
      makeUpload: function makeUpload() {
        var h = this.$createElement;
        return h("Upload", helper([{
          "ref": "upload",
          "class": "adf12",
          "style": {
            display: 'inline-block'
          }
        }, this.ctx]), [this.children]);
      },
      initChildren: function initChildren() {
        if (!hasSlot(this.children, 'default')) this.children.push(this.makeDefaultBtn());
      },
      update: function update() {
        var files = this.$refs.upload.fileList.map(function (file) {
          return file.url;
        }).filter(function (url) {
          return url !== undefined;
        });
        this.$emit('input', this.maxLength === 1 ? files[0] || '' : files);
      }
    },
    render: function render() {
      var _class;

      var h = arguments[0];
      var isShow = !this.maxLength || this.maxLength > this.uploadList.length;

      if (this.$refs.upload) {
        if (this.ctx.props.showUploadList === undefined) this.ctx.props.showUploadList = this.$refs.upload.showUploadList;
        this.ctx.props.defaultFileList = this.$refs.upload.defaultFileList;
      }

      this.initChildren();
      return h("div", {
        "class": (_class = {}, _defineProperty(_class, css['fc-upload'], true), _defineProperty(_class, css['fc-hide-btn'], !isShow), _class)
      }, [[this.ctx.props.showUploadList ? [] : this.makeFiles(), this.makeUpload()]]);
    },
    mounted: function mounted() {
      var _this4 = this;

      this.uploadList = this.$refs.upload.fileList;
      this.$watch(function () {
        return _this4.$refs.upload.fileList;
      }, function () {
        _this4.update();
      }, {
        deep: true
      });
    }
  };

  /* script */
  var __vue_script__$5 = script$5;
  /* template */

  /* style */

  var __vue_inject_styles__$5 = undefined;
  /* scoped */

  var __vue_scope_id__$5 = undefined;
  /* module identifier */

  var __vue_module_identifier__$5 = undefined;
  /* functional template */

  var __vue_is_functional_template__$5 = undefined;
  /* style inject */

  /* style inject SSR */

  var Upload = normalizeComponent_1({}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, undefined, undefined);

  var components = [Checkbox, Frame, Radio, Select, Tree, Upload];

  var parser =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(parser, _BaseParser);

    function parser() {
      _classCallCheck(this, parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(parser).apply(this, arguments));
    }

    _createClass(parser, [{
      key: "render",
      // toFormValue(value) {
      //     if (!value)
      //         value = [];
      //     else if (!Array.isArray(value))
      //         value = [value];
      //     return this.rule.options.filter((opt) => value.indexOf(opt.value) !== -1)
      //         .map((option) => option.label);
      // }
      //
      // toValue(parseValue) {
      //     let value = this.rule.options.filter((opt) => parseValue.indexOf(opt.label) !== -1)
      //         .map((opt) => opt.value);
      //     return value;
      // }
      value: function render(children) {
        var _this = this;

        //TODO 参考 date-picker 组件 children 未处理
        return this.vNode.checkbox({
          props: {
            ctx: this.$render.inputVData(this, true).get(),
            options: this.rule.options,
            value: this.$handle.formData[this.field]
          },
          on: {
            input: function input(n) {
              _this.$render.onInput(_this, n);
            }
          }
        }, children); // let {unique, rule} = this;
        // return this.vNode.checkboxGroup(this.r.inputVData(this), () => rule.options.map((option, index) => {
        //     let clone = {...option};
        //     delete clone.value;
        //     return this.vNode.checkbox({
        //         props: clone,
        //         key: `cbp_${index}${unique}`
        //     })
        // }).concat(children));
      }
    }]);

    return parser;
  }(BaseParser);

  var name = 'checkbox';
  var checkbox = {
    parser: parser,
    name: name
  };

  var Parser =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "init",
      value: function init() {
        var props = this.rule.props; //TODO 在inputVnode 中初始化默认属性

        if (isUndef(props.startDate)) $set(props, 'startDate', timeStampToDate(props.startDate));
      }
    }, {
      key: "toFormValue",
      value: function toFormValue(value) {
        var isArr = Array.isArray(value),
            props = this.rule.props,
            parseValue,
            type = props.type || 'date';

        if (['daterange', 'datetimerange'].indexOf(type) !== -1) {
          if (isArr) {
            parseValue = value.map(function (time) {
              return !time ? '' : timeStampToDate(time);
            });
          } else {
            parseValue = ['', ''];
          }
        } else if ('date' === type && props.multiple === true) {
          parseValue = toString(value);
        } else {
          parseValue = isArr ? value[0] || '' : value;
          parseValue = !parseValue ? '' : timeStampToDate(parseValue);
        }

        return parseValue;
      }
    }, {
      key: "mounted",
      value: function mounted() {
        var _this = this;

        this.toValue = function () {
          return _this.el.publicStringValue;
        };
      }
    }]);

    return Parser;
  }(BaseParser);

  var name$1 = 'datePicker';
  var datePicker = {
    parser: Parser,
    name: name$1
  };

  var Parser$1 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "render",
      // init() {
      //     parseRule(this.rule);
      // }
      //
      // toFormValue(value) {
      //     let parseValue, oldValue = value, isArr = Array.isArray(oldValue);
      //     if (oldValue === '')
      //         parseValue = [];
      //     else if (!isArr)
      //         parseValue = [oldValue];
      //     else
      //         parseValue = oldValue;
      //     this.parseValue = parseValue;
      //     return [...parseValue];
      // }
      //
      // toValue(parseValue) {
      //     return this.rule.props.maxLength != 1
      //         ? parseValue
      //         : (parseValue[0] === undefined
      //             ? ''
      //             : parseValue[0]);
      // }
      //
      // watchValue(n) {
      //     this.onChange(n);
      // }
      //
      // watchFormValue(n) {
      //     this.parseValue = n;
      // }
      value: function render(children) {
        // this.rule.props = {...this.rule.props,value:this.h.formData[this.field]};
        var data = this.$render.inputVData(this).props('field', this.field);
        return this.vNode.frame(data, children);
      }
    }, {
      key: "closeModel",
      value: function closeModel() {
        this.el.closeModel && this.el.closeModel();
      } // _render(children) {
      //     this._props = this.rule.props;
      //     this.issetIcon = this._props.handleIcon !== false || this._props.allowRemove === true;
      //     let type = this._props.type, vNode;
      //     if (type === 'image')
      //         vNode = this.makeGroup(this.makeImage());
      //     else if (type === 'file')
      //         vNode = this.makeGroup(this.makeFile());
      //     else
      //         vNode = this.makeInput();
      //     return vNode;
      // }
      //
      // makeInput(hidden) {
      //     let unique = this.unique, props = this.r.inputVData(this).props({
      //         type: 'text',
      //         value: this.parseValue.toString(),
      //         icon: this._props.icon,
      //         readonly: true,
      //         clearable: true
      //     }).on('on-click', () => {
      //         this.showModel();
      //     }).on('input', () => {
      //     }).key('ifit' + unique).class('__fc_h', hidden === true);
      //     return [this.vNode.input(props)];
      // }
      //
      // makeGroup(render) {
      //     let unique = this.unique, field = this.field;
      //     return [this.vNode.make('div', {
      //         key: `ifgp1${unique}`,
      //         class: {'fc-upload fc-frame': true},
      //         ref: this.refName,
      //         props: {value: this.vm._formData(field)}
      //     }, render),
      //     this.makeInput(true)
      //     ]
      // }
      //
      // makeImage() {
      //     let unique = this.unique;
      //     let vNode = this.parseValue.map((src, index) => {
      //         return this.vNode.make('div', {key: `ifid1${unique}${index}`, class: {'fc-files': true}}, [
      //             this.vNode.make('img', {key: `ifim${unique}${index}`, attrs: {src}}),
      //             this.makeIcons(src, unique, index)
      //         ]);
      //     });
      //     vNode.push(this.makeBtn());
      //     return vNode;
      // }
      //
      // makeFile() {
      //     let unique = this.unique;
      //     let vNode = this.parseValue.map((src, index) => {
      //         return this.vNode.make('div', {key: `iffd2${unique}${index}`, class: {'fc-files': true}}, [
      //             this.vNode.icon({key: `iff${unique}${index}`, props: {type: iviewConfig.fileIcon, size: 40}}),
      //             this.makeIcons(src, unique, index)
      //         ]);
      //     });
      //     vNode.push(this.makeBtn());
      //     return vNode;
      // }
      //
      // makeBtn() {
      //     let props = this.rule.props;
      //     if (props.maxLength > 0 && this.parseValue.length >= props.maxLength) return;
      //     let unique = this.unique;
      //     return this.vNode.make('div', {
      //         key: `ifbd3${unique}`, class: {'fc-upload-btn': true}, on: {
      //             click: () => {
      //                 if (props.disabled === true) return;
      //                 this.showModel();
      //             }
      //         }
      //     }, [
      //         this.vNode.icon({key: `ifbi3${unique}`, props: {type: this._props.icon, size: 20}})
      //     ])
      // }
      //
      // makeSpin(vNode) {
      //     if (true !== this._props.spin) return;
      //     let unique = this.unique;
      //     return vNode.make('Spin', {
      //         props: {fix: true},
      //         key: 'ifsp' + unique,
      //         ref: 'spin',
      //         class: {
      //             'fc-spin': true
      //         }
      //     }, [
      //         vNode.icon({
      //             props: {
      //                 type: 'load-c',
      //                 size: 18
      //             },
      //             class: {
      //                 'fc-spin-icon-load': true
      //             },
      //             key: 'ifspi' + unique
      //         }),
      //         vNode.make('div', {
      //             domProps: {
      //                 innerHTML: toString(this._props.loadingText)
      //             },
      //             key: 'ifspd' + unique
      //         })
      //     ])
      // }
      //
      // makeIcons(src, key, index) {
      //     if (this.issetIcon === true)
      //         return this.vNode.make('div', {key: `ifis${key}${index}`, class: {'fc-upload-cover': true}}, () => {
      //             let icon = [];
      //             if (this._props.handleIcon !== false)
      //                 icon.push(this.makeHandleIcon(src, key, index));
      //             if (this._props.allowRemove === true)
      //                 icon.push(this.makeRemoveIcon(src, key, index));
      //             return icon;
      //         });
      // }
      //
      // makeRemoveIcon(src, key, index) {
      //     return this.vNode.icon({
      //         key: `ifri${key}${index}`, props: {type: 'ios-trash-outline'}, nativeOn: {
      //             'click': () => {
      //                 if (this._props.disabled === true) return;
      //                 if (this.onRemove(src) !== false) {
      //                     this.parseValue.splice(index, 1);
      //                     this.sync();
      //                 }
      //             }
      //         }
      //     });
      // }
      //
      // makeHandleIcon(src, key, index) {
      //     let props = this._props;
      //     return this.vNode.icon({
      //         key: `ifhi${key}${index}`, props: {type: toString(props.handleIcon)}, nativeOn: {
      //             'click': () => {
      //                 if (props.disabled === true) return;
      //                 this.onHandle(src);
      //             }
      //         }
      //     });
      // }
      //
      // onRemove(src) {
      //     if (this._props.disabled === true) return;
      //     let fn = this.rule.event['on-remove'];
      //     if (fn)
      //         return fn(src, this.getValue());
      // }
      //
      // onHandle(src) {
      //     if (this._props.disabled === true) return;
      //     let fn = this.rule.event['on-handle'];
      //     if (fn)
      //         return fn(src);
      //     else
      //         defaultOnHandle(src, this._props.modalTitle);
      // }
      //
      // valid(field) {
      //     if (field !== this.field)
      //         throw new Error('无效的表单字段' + errMsg());
      // }
      //
      // onCloseModal() {
      //     this.$modal.onClose();
      //     this.$modal = null;
      // }
      //
      // showModel() {
      //     let isShow = false !== this.onOpen(),
      //         {width, height, src, title, okBtnText, closeBtnText} = this._props;
      //     if (!isShow) return;
      //
      //     mount({width, title}, (vNode, _vm) => {
      //         this.$modal = _vm;
      //         return [this.makeSpin(vNode), vNode.make('iframe', {
      //             attrs: {
      //                 src
      //             },
      //             style: {
      //                 'height': height,
      //                 'border': '0 none',
      //                 'width': '100%'
      //             },
      //             on: {
      //                 'load': (e) => {
      //                     const spin = _vm.$refs.spin;
      //                     if (spin)
      //                         spin.$el.parentNode.removeChild(spin.$el);
      //                     try {
      //                         if (this.options.iframeHelper === true) {
      //                             let iframe = e.path[0].contentWindow;
      //
      //                             iframe[`${this.field}_change`] = (val) => {
      //                                 this.setValue(val);
      //                             };
      //
      //
      //                             iframe['form_create_helper'] = {
      //                                 close: (field) => {
      //                                     this.valid(field);
      //                                     _vm.onClose();
      //                                 },
      //                                 set: (field, value) => {
      //                                     this.valid(field);
      //                                     iframe[`${field}_change`](value)
      //
      //                                 },
      //                                 get: (field) => {
      //                                     this.valid(field);
      //                                     return this.rule.value;
      //                                 }
      //                             };
      //
      //                         }
      //                     } catch (e) {
      //                     }
      //                 }
      //             },
      //         }), vNode.make('div', {slot: 'footer'}, [
      //             vNode.button({
      //                 on: {
      //                     click: () => {
      //                         _vm.onClose();
      //                         this.onCancel()
      //                     }
      //                 }
      //             }, [toString(closeBtnText)]),
      //             vNode.button({
      //                 props: {type: 'primary'}, on: {
      //                     click: () => {
      //                         this.onOk() !== false && _vm.onClose();
      //                     }
      //                 }
      //             }, [toString(okBtnText)])
      //         ])]
      //     });
      // }

    }]);

    return Parser;
  }(BaseParser); //

  var name$2 = 'frame';
  var frame = {
    parser: Parser$1,
    name: name$2
  };

  var name$3 = 'hidden';

  var parser$1 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(parser, _BaseParser);

    function parser() {
      _classCallCheck(this, parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(parser).apply(this, arguments));
    }

    _createClass(parser, [{
      key: "render",
      value: function render() {
        return [];
      }
    }]);

    return parser;
  }(BaseParser);

  var hidden = {
    parser: parser$1,
    name: name$3
  };

  var Parser$2 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "init",
      value: function init() {
        var props = this.rule.props;
        if (props.autosize && props.autosize.minRows) $set(props, 'rows', props.autosize.minRows || 2);
      }
    }]);

    return Parser;
  }(BaseParser);

  var name$4 = 'input';
  var input = {
    parser: Parser$2,
    name: name$4
  };

  var Parser$3 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "toFormValue",
      value: function toFormValue(value) {
        return this.rule.options.filter(function (opt) {
          return opt.value === value;
        }).reduce(function (initial, opt) {
          return opt.label;
        }, '');
      }
    }, {
      key: "toValue",
      value: function toValue(parseValue) {
        return this.rule.options.filter(function (opt) {
          return opt.label === parseValue;
        }).reduce(function (initial, opt) {
          return opt.value;
        }, '');
      }
    }, {
      key: "render",
      value: function render(children) {
        return this.vNode.radio(this.$render.inputVData(this).props({
          'options': this.rule.options
        }), children);
      }
    }]);

    return Parser;
  }(BaseParser);

  var name$5 = 'radio';
  var radio = {
    parser: Parser$3,
    name: name$5
  };

  var Parser$4 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "render",
      // toFormValue(value) {
      //     return value;
      //     // let isArr = Array.isArray(value);
      //     // if (this.rule.props.multiple === true)
      //     //     return isArr === true ? value : [value];
      //     // else
      //     //     return isArr === true ? (value[0] || '') : value;
      // }
      value: function render(children) {
        //TODO 处理 option.slot
        return this.vNode.select(this.$render.inputVData(this).props('options', this.rule.options), children); // let {unique, rule} = this;
        // return this.vNode.select(this.$render.inputVData(this), () => rule.options.map((option, index) => this.vNode.option({
        //     props: option,
        //     key: `sopt${index}${unique}`,
        // }, toDefSlot(option.slot, this.vm.$createElement, rule))).concat(children));
      }
    }]);

    return Parser;
  }(BaseParser);

  var name$6 = 'select';
  var select = {
    parser: Parser$4,
    name: name$6
  };

  var Parser$5 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "init",
      value: function init() {
        var rule = this.rule; //TODO 添加处理 vData 的方法,避免直接修改 props 对象
        // $set(rule.props, 'min', rule.props.min === undefined
        //     ? 0
        //     : (parseFloat(rule.props.min) || 0));
      }
    }, {
      key: "toFormValue",
      value: function toFormValue(value) {
        var rule = this.rule,
            isArr = Array.isArray(value),
            props = rule.props,
            min = props.min || 0,
            parseValue;

        if (props.range === true) {
          parseValue = isArr ? value : [min, parseFloat(value) || min];
        } else {
          parseValue = isArr ? parseFloat(value[0]) || min : parseFloat(value);
        }

        return parseValue;
      }
    }]);

    return Parser;
  }(BaseParser);

  var name$7 = 'slider';
  var slider = {
    parser: Parser$5,
    name: name$7
  };

  var parser$2 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(parser, _BaseParser);

    function parser() {
      _classCallCheck(this, parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(parser).apply(this, arguments));
    }

    _createClass(parser, [{
      key: "render",
      value: function render(children) {
        var rule = this.rule,
            slot = rule.props.slot || {};
        return this.vNode.switch(this.$render.inputVData(this).scopedSlots({
          open: function open() {
            return slot.open;
          },
          close: function close() {
            return slot.close;
          }
        }).get(), children);
      }
    }]);

    return parser;
  }(BaseParser);

  var name$8 = 'switch';
  var iswitch = {
    parser: parser$2,
    name: name$8
  };

  function getTime(date) {
    return isDate(date) ? dateFormat('hh:mm:ss', date) : date;
  }

  var Parser$6 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "init",
      value: function init() {
        var props = this.rule.props;
        if (!props.type) $set(props, 'type', 'time');
        if (isUndef(props.confirm)) $set(props, 'confirm', true);
      }
    }, {
      key: "toFormValue",
      value: function toFormValue(value) {
        var parseValue,
            isArr = Array.isArray(value);

        if ('timerange' === this.rule.props.type) {
          if (isArr) {
            parseValue = value.map(function (time) {
              return !time ? '' : getTime(timeStampToDate(time));
            });
          } else {
            parseValue = ['', ''];
          }
        } else {
          isArr && (value = value[0]);
          parseValue = !value ? '' : getTime(timeStampToDate(value));
        }

        return parseValue;
      }
    }, {
      key: "mounted",
      value: function mounted() {
        var _this = this;

        this.toValue = function () {
          return _this.el.publicStringValue;
        };
      }
    }]);

    return Parser;
  }(BaseParser);

  var name$9 = 'timePicker';
  var timePicker = {
    parser: Parser$6,
    name: name$9
  };

  function isMultiple(rule) {
    return !rule.props.multiple && rule.props.type === 'selected';
  }

  var Parser$7 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "toValue",
      value: function toValue(parseValue) {
        var value = parseValue;
        return !isMultiple(this.rule) ? value : value[0] || '';
      }
    }, {
      key: "render",
      value: function render(children) {
        var _this = this;

        var data = this.$render.parserToData(this).get();
        console.log(data);
        return this.vNode.tree({
          props: {
            ctx: data,
            children: children,
            value: this.$handle.formData[this.field],
            type: data.props.type
          },
          ref: this.refName,
          key: this.key,
          on: {
            input: function input(value) {
              _this.$render.onInput(_this, value);
            }
          }
        });
      }
    }]);

    return Parser;
  }(BaseParser);

  var name$a = 'tree';
  var tree = {
    parser: Parser$7,
    name: name$a
  };

  var Parser$8 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "render",
      value: function render(children) {
        var _this = this;

        var ctx = this.$render.parserToData(this).get();
        var key = this.key,
            refName = this.refName;
        delete ctx.props.defaultFileList;
        var props = {
          uploadType: ctx.props.uploadType,
          maxLength: ctx.props.maxLength,
          modalTitle: ctx.props.modalTitle,
          handleIcon: ctx.props.handleIcon,
          onHandle: ctx.props.onHandle,
          allowRemove: ctx.props.allowRemove,
          value: this.$handle.formData[this.field],
          ctx: ctx,
          key: key,
          ref: refName,
          children: children
        };
        return this.vNode.upload({
          props: props,
          on: {
            input: function input(n) {
              _this.$render.onInput(_this, n);
            }
          }
        });
      }
    }]);

    return Parser;
  }(BaseParser);

  var name$b = 'upload';
  var upload = {
    parser: Parser$8,
    name: name$b
  };

  var parsers = [checkbox, datePicker, frame, hidden, input, radio, select, slider, iswitch, timePicker, tree, upload];

  function getGlobalApi(h) {
    function tidyFields(fields) {
      var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!fields) fields = all ? Object.keys(h.fieldList) : h.fields();else if (!Array.isArray(fields)) fields = [fields];
      return fields;
    }

    return {
      formData: function formData() {
        var parsers = h.fieldList;
        return Object.keys(parsers).reduce(function (initial, id) {
          var parser = parsers[id];
          initial[parser.field] = deepExtend({}, {
            value: parser.rule.value
          }).value;
          return initial;
        }, {});
      },
      getValue: function getValue(field) {
        field = toString(field);
        var parser = h.fieldList[field];
        if (!parser) return;
        return deepExtend({}, {
          value: parser.rule.value
        }).value;
      },
      setValue: function setValue(field, value) {
        var formData = field;
        if (!isPlainObject(field)) formData = _defineProperty({}, field, value);
        Object.keys(formData).forEach(function (key) {
          var parser = h.fieldList[key];
          if (!parser) return;
          parser.rule.value = formData[key];
        });
      },
      changeValue: function changeValue(field, value) {
        this.setValue(field, value);
      },
      changeField: function changeField(field, value) {
        this.setValue(field, value);
      },
      removeField: function removeField(field) {
        var parser = h.fieldList[field];
        if (!parser) return;
        var fields = parser.root.map(function (rule) {
          return rule.__field__;
        }),
            index = fields.indexOf(toString(field));
        if (index === -1) return;
        parser.root.splice(index, 1);
        if (h.sortList.indexOf(parser.id) === -1) this.reload();
      },
      validate: function validate(callback) {
        h.$form.getFormRef().validate(function (valid) {
          callback && callback(valid);
        });
      },
      validateField: function validateField(field, callback) {
        if (!h.fieldList[field]) return;
        h.$form.getFormRef().validateField(field, callback);
      },
      resetFields: function resetFields(fields) {
        var parsers = h.fieldList;
        tidyFields(fields, true).forEach(function (field) {
          var parser = parsers[field];
          if (!parser) return; //TODO 自定义组件重置

          if (parser.type === 'hidden') return;
          h.vm.$refs[parser.formItemRefName].resetField();
          h.$render.clearCache(parser);
        });
      },
      destroy: function destroy() {
        h.vm.$el.parentNode.removeChild(h.vm.$el);
        h.vm.$destroy();
      },
      fields: function fields() {
        return h.fields();
      },
      append: function append(rule, after) {
        var fields = h.fieldList,
            index = h.sortList.length;
        after = toString(after);
        if (rule.field && fields.indexOf(toString(rule.field)) !== -1) return console.error("".concat(rule.field, " \u5B57\u6BB5\u5DF2\u5B58\u5728") + errMsg());

        if (h.fieldList[after]) {
          var parser = h.fieldList[after];
          index = parser.root.indexOf(parser.rule);
        }

        h.rules.splice(index + 1, 0, rule);
      },
      prepend: function prepend(rule, after) {
        var fields = h.fieldList,
            index = 0;
        after = toString(after);
        if (rule.field && fields.indexOf(toString(rule.field)) !== -1) return console.error("".concat(rule.field, " \u5B57\u6BB5\u5DF2\u5B58\u5728") + errMsg());

        if (h.fieldList[after]) {
          var parser = h.fieldList[after];
          index = parser.root.indexOf(parser.rule);
        }

        h.rules.splice(index, 0, rule);
      },
      submit: function submit(successFn, failFn) {
        var _this = this;

        this.validate(function (valid) {
          if (valid) {
            var formData = _this.formData();

            if (isFunction(successFn)) successFn(formData, _this);else h.options.onSubmit && h.options.onSubmit(formData, _this);
          } else {
            failFn && failFn(_this);
          }
        });
      },
      hidden: function hidden(_hidden, fields) {
        var hiddenList = h.$render.form.hidden;
        tidyFields(fields, true).forEach(function (field) {
          var parser = h.fieldList[field];
          if (!parser) return;
          _hidden ? hiddenList.push(parser) : hiddenList.splice(hiddenList.indexOf(parser), 1);
          h.$render.clearCache(parser);
        });
        h.refresh();
      },
      visibility: function visibility(_visibility, fields) {
        var visibilityList = h.$render.form.visibility;
        tidyFields(fields, true).forEach(function (field) {
          var parser = h.fieldList[field];
          if (!parser) return;
          _visibility ? visibilityList.push(parser) : visibilityList.splice(visibilityList.indexOf(parser), 1);
          h.$render.clearCache(parser);
        });
        h.refresh();
      },
      disabled: function disabled(_disabled, fields) {
        tidyFields(fields, true).forEach(function (field) {
          var parser = h.fieldList[field];
          if (!parser) return;
          h.vm.$set(parser.rule.props, 'disabled', !!_disabled);
        });
      },
      clearValidateState: function clearValidateState(fields) {
        tidyFields(fields).forEach(function (field) {
          var parser = h.fieldList[field];
          if (!parser) return;
          var fItem = h.vm.$refs[parser.formItemRefName];

          if (fItem) {
            fItem.validateMessage = '';
            fItem.validateState = '';
          }
        });
      },
      model: function model() {
        return _objectSpread({}, h.trueData);
      },
      component: function component() {
        return _objectSpread({}, h.customData);
      },
      bind: function bind(fields) {
        var bind = {},
            properties = {};
        tidyFields(fields).forEach(function (field) {
          var parser = h.fieldList[field];
          if (!parser) return console.error("".concat(field, " \u5B57\u6BB5\u4E0D\u5B58\u5728") + errMsg());
          properties[field] = {
            get: function get() {
              return parser.rule.value;
            },
            set: function set(value) {
              parser.rule.value = value;
            },
            enumerable: true,
            configurable: true
          };
        });
        Object.defineProperties(bind, properties);
        return bind;
      },
      submitBtnProps: function submitBtnProps() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        h.vm._buttonProps(props);
      },
      resetBtnProps: function resetBtnProps() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        h.vm._resetProps(props);
      },
      btn: {
        loading: function loading() {
          var _loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          h.vm._buttonProps({
            loading: !!_loading
          });
        },
        finish: function finish() {
          this.loading(false);
        },
        disabled: function disabled() {
          var _disabled2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          h.vm._buttonProps({
            disabled: !!_disabled2
          });
        },
        show: function show() {
          var isShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          h.vm._buttonProps({
            show: !!isShow
          });
        }
      },
      resetBtn: {
        loading: function loading() {
          var _loading2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          h.vm._resetProps({
            loading: !!_loading2
          });
        },
        finish: function finish() {
          this.loading(false);
        },
        disabled: function disabled() {
          var _disabled3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          h.vm._resetProps({
            disabled: !!_disabled3
          });
        },
        show: function show() {
          var isShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          h.vm._resetProps({
            show: !!isShow
          });
        }
      },
      closeModal: function closeModal(field) {
        var parser = h.fieldList[field];
        parser && parser.closeModel && parser.closeModel();
      },
      set: function set(node, field, value) {
        h.vm.$set(node, field, value);
      },
      reload: function reload(rules) {
        h.reloadRule(rules);
      },
      updateOptions: function updateOptions(options) {
        deepExtend(h.options, options);
      },
      onSubmit: function onSubmit(fn) {
        this.options({
          onSubmit: fn
        });
      },
      sync: function sync(field) {
        if (h.fieldList[field]) {
          h.$render.clearCache(h.fieldList[field]);
          h.refresh();
        }
      },
      refresh: function refresh() {
        h.$render.clearCacheAll();
        h.refresh();
      },
      show: function show() {
        var isShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        h.vm.isShow = !!isShow;
      }
    };
  }

  var nodes = {
    modal: 'Modal',
    progress: 'i-progress',
    button: 'i-button',
    icon: 'Icon',
    slider: 'Slider',
    rate: 'Rate',
    upload: 'fc-upload',
    cascader: 'Cascader',
    colorPicker: 'Color-Picker',
    timePicker: 'Time-Picker',
    datePicker: 'Date-Picker',
    'switch': 'i-switch',
    option: 'i-option',
    select: 'fc-select',
    checkbox: 'fc-checkbox',
    checkboxGroup: 'Checkbox-Group',
    radio: 'fc-radio',
    radioGroup: 'Radio-Group',
    inputNumber: 'Input-Number',
    input: 'i-input',
    formItem: 'Form-Item',
    form: 'i-form',
    frame: 'fc-frame',
    col: 'i-col',
    row: 'row',
    tree: 'fc-tree',
    autoComplete: 'AutoComplete'
  };

  var Form =
  /*#__PURE__*/
  function (_BaseForm) {
    _inherits(Form, _BaseForm);

    function Form(handle) {
      var _this;

      _classCallCheck(this, Form);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, handle));
      _this.refName = "cForm".concat(_this.id);
      _this.hidden = [];
      _this.visibility = [];
      return _this;
    }

    _createClass(Form, [{
      key: "getFormRef",
      value: function getFormRef() {
        return this.vm.$refs[this.refName];
      }
    }, {
      key: "beforeRender",
      value: function beforeRender() {
        this.propsData = this.vData.props(this.options.form).props({
          model: this.$handle.formData,
          rules: this.$handle.validate,
          key: 'form' + this.unique
        }).ref(this.refName).nativeOn({
          submit: preventDefault
        }).class('form-create', true).key(this.unique).get();
      }
    }, {
      key: "render",
      value: function render(vn) {
        if (vn.length > 0) vn.push(this.makeFormBtn());
        return this.vNode.form(this.propsData, [this.makeRow(vn)]);
      }
    }, {
      key: "makeRow",
      value: function makeRow(vn) {
        return this.vNode.row({
          props: this.options.row || {},
          key: 'fr' + this.unique
        }, vn);
      }
    }, {
      key: "container",
      value: function container(child, parser) {
        return this.makeFormItem(parser, child, "fItem".concat(parser.key).concat(this.unique));
      }
    }, {
      key: "makeFormItem",
      value: function makeFormItem(parser, VNodeFn, fItemUnique) {
        var rule = parser.rule,
            unique = parser.unique,
            field = parser.field,
            formItemRefName = parser.formItemRefName,
            labelWidth = !rule.col.labelWidth && !rule.title ? 1 : rule.col.labelWidth,
            className = rule.className,
            propsData = this.vData.props({
          prop: field,
          label: rule.title,
          labelFor: unique,
          rules: rule.validate,
          labelWidth: labelWidth,
          required: rule.props.required
        }).key(fItemUnique).ref(formItemRefName).class(className).get(),
            node = this.vNode.formItem(propsData, [VNodeFn]);
        return this.propsData.props.inline === true ? node : this.makeCol(parser, fItemUnique, [node]);
      }
    }, {
      key: "makeCol",
      value: function makeCol(parser, fItemUnique, VNodeFn) {
        var _class;

        var rule = parser.rule;
        return this.vNode.col({
          props: rule.col,
          'class': (_class = {}, _defineProperty(_class, css.__fc_h, this.hidden.indexOf(parser) !== -1), _defineProperty(_class, css.__fc_v, this.visibility.indexOf(parser) !== -1), _class),
          key: "".concat(fItemUnique, "col1")
        }, VNodeFn);
      }
    }, {
      key: "makeFormBtn",
      value: function makeFormBtn() {
        var btn = [],
            submitBtnShow = false !== this.vm.buttonProps && false !== this.vm.buttonProps.show,
            resetBtnShow = false !== this.vm.resetProps && false !== this.vm.resetProps.show;
        if (submitBtnShow) btn.push(this.makeSubmitBtn(resetBtnShow ? 19 : 24));
        if (resetBtnShow) btn.push(this.makeResetBtn(4));
        return this.vNode.col({
          props: {
            span: 24
          },
          key: "".concat(this.unique, "col2")
        }, btn);
      }
    }, {
      key: "makeResetBtn",
      value: function makeResetBtn(span) {
        var _this2 = this;

        var resetBtn = this.$handle.options.resetBtn,
            props = isUndef(this.$handle.options.resetBtn.col) ? {
          span: span,
          push: 1
        } : resetBtn.col;
        return this.vNode.col({
          props: props,
          key: "".concat(this.unique, "col3")
        }, [this.vNode.button({
          key: "frsbtn".concat(this.unique),
          props: this.vm.resetProps,
          on: {
            'click': function click() {
              var fApi = _this2.$handle.fCreateApi;
              isFunction(resetBtn.click) ? resetBtn.click(fApi) : fApi.resetFields();
            }
          }
        }, [this.vm.resetProps.innerText])]);
      }
    }, {
      key: "makeSubmitBtn",
      value: function makeSubmitBtn(span) {
        var _this3 = this;

        var submitBtn = this.$handle.options.submitBtn,
            props = isUndef(this.$handle.options.submitBtn.col) ? {
          span: span
        } : submitBtn.col;
        return this.vNode.col({
          props: props,
          key: "".concat(this.unique, "col4")
        }, [this.vNode.button({
          key: "fbtn".concat(this.unique),
          props: this.vm.buttonProps,
          on: {
            'click': function click() {
              var fApi = _this3.$handle.fCreateApi;
              isFunction(submitBtn.click) ? submitBtn.click(fApi) : fApi.submit();
            }
          }
        }, [this.vm.buttonProps.innerText])]);
      }
    }]);

    return Form;
  }(BaseForm);

  var name$c = 'datePicker';
  var datePicker$1 = ['date', 'dateRange', 'dateTime', 'dateTimeRange', 'year', 'month'].reduce(function (maker, type) {
    maker[type] = creatorTypeFactory(name$c, type.toLowerCase());
    return maker;
  }, {});

  var name$d = 'frame';
  var types = {
    frameInputs: ['input', 0],
    frameFiles: ['file', 0],
    frameImages: ['image', 0],
    frameInputOne: ['input', 1],
    frameFileOne: ['file', 1],
    frameImageOne: ['image', 1]
  };
  var maker = Object.keys(types).reduce(function (maker, key) {
    maker[key] = creatorTypeFactory(name$d, function (m) {
      return m.props({
        type: types[key][0],
        maxLength: types[key][1]
      });
    });
    return maker;
  }, {});
  maker.frameInput = maker.frameInputs;
  maker.frameFile = maker.frameFiles;
  maker.frameImage = maker.frameImages;

  var name$e = 'input';
  var maker$1 = ['password', 'url', 'email', 'text', 'textarea'].reduce(function (maker, type) {
    maker[type] = creatorTypeFactory(name$e, type);
    return maker;
  }, {});
  maker$1.idate = creatorTypeFactory(name$e, 'date');

  var name$f = 'select';
  var select$1 = {
    selectMultiple: creatorTypeFactory(name$f, true, 'multiple'),
    selectOne: creatorTypeFactory(name$f, false, 'multiple')
  };

  var name$g = 'slider';
  var slider$1 = {
    sliderRange: creatorTypeFactory(name$g, true, 'range')
  };

  var name$h = 'timePicker';
  var timePicker$1 = {
    time: creatorTypeFactory(name$h, 'time'),
    timeRange: creatorTypeFactory(name$h, 'timerange')
  };

  var name$i = 'tree';
  var types$1 = {
    'treeSelected': 'selected',
    'treeChecked': 'checked'
  };
  var tree$1 = Object.keys(types$1).reduce(function (maker, key) {
    maker[key] = creatorTypeFactory(name$i, types$1[key]);
    return maker;
  }, {});

  var name$j = 'upload';
  var types$2 = {
    image: ['image', 0],
    file: ['file', 0],
    uploadFileOne: ['file', 1],
    uploadImageOne: ['image', 1]
  };
  var maker$2 = Object.keys(types$2).reduce(function (maker, key) {
    maker[key] = creatorTypeFactory(name$j, function (m) {
      return m.props({
        uploadType: types$2[key][0],
        maxLength: types$2[key][1]
      });
    });
    return maker;
  }, {});
  maker$2.uploadImage = maker$2.image;
  maker$2.uploadFile = maker$2.file;

  var maker$3 = _objectSpread({}, datePicker$1, maker, maker$1, select$1, slider$1, timePicker$1, tree$1, maker$2),
      names = ['autoComplete', 'cascader', 'colorPicker', 'datePicker', 'frame', 'inputNumber', 'radio', 'rate'];

  names.forEach(function (name) {
    maker$3[name] = creatorFactory(name);
  });
  maker$3.auto = maker$3.autoComplete;
  maker$3.number = maker$3.inputNumber;
  maker$3.color = maker$3.colorPicker;

  maker$3.hidden = function (field, value) {
    return creatorFactory('hidden')('', field, value);
  };

  VNode.use(nodes);
  var drive = {
    ui: "iview",
    version: "0.0.1",
    formRender: Form,
    components: components,
    parsers: parsers,
    makers: maker$3,
    getGlobalApi: getGlobalApi,
    getConfig: getConfig
  };

  var _createFormCreate = createFormCreate(drive),
      FormCreate = _createFormCreate.FormCreate,
      install = _createFormCreate.install;

  if (typeof window !== 'undefined') {
    window.formCreate = FormCreate;

    if (window.Vue) {
      install(window.Vue);
    }
  }

  var maker$4 = FormCreate.maker;

  exports.default = FormCreate;
  exports.maker = maker$4;

  Object.defineProperty(exports, '__esModule', { value: true });

}));