//import PropertyBindings from 'ember-binding-macros/mixins/property-bindings';

/**
 * A component to represent a number that must fall between two
 * (inclusive) bounds and can be updated by a discrete step size.
 * See: http://www.w3.org/wiki/HTML/Elements/input/range

 * For example:
 *
 *
 *   {{x-slider min=0 max=100 step=1 value=someNumber}}
 *
 * @class XSliderComponent
 */

//import Ember from 'ember';

function parseSpecifier(spec) {
  if (!spec) {
    return null;
  }
  var match;
  var normal = spec.replace(/\s+/g, '');
  if ((match = normal.match(/^(.+)<>(.+)$/))) {
    return {
      oneWay: false,
      from: match[1],
      to: match[2]
    };
  } else if ((match = normal.match(/^(.+)>(.+)$/))) {
    return {
      oneWay: true,
      from: match[1],
      to: match[2]
    };
  } else if ((match = normal.match(/^(.+)<(.+)$/))) {
    return {
      oneWay: true,
      from: match[2],
      to: match[1]
    };
  } else {
    throw new Error("invalid property binding specifier '"+ spec + "'");
  }
}

function bindingsFor(obj) {
  var meta = Ember.meta(obj);
  if (!meta.propertyBindings) {
    meta.propertyBindings = [];
  }
  return meta.propertyBindings;
}

PropertyBindings = Ember.Mixin.create({
  __initializePropertyBindings__: Ember.observer(function() {
    var bindings = bindingsFor(this);
    var specifiers = this.get('propertyBindings') || [];

    specifiers.forEach(function(specifier) {
      var spec = parseSpecifier(specifier);
      if (spec) {
        var binding = Ember.Binding.from(spec.from).to(spec.to);
        if (spec.oneWay) {
          binding.oneWay();
        }
        binding.connect(this);
        bindings.push(binding);
      }
    }, this);
  }).on('init'),

  willDestroy: function() {
    var bindings = bindingsFor(this);
    bindings.forEach(function(binding) {
      binding.disconnect(this);
    }, this);
    this._super.apply(this, arguments);
  }
});

Ember.Object.prototype.concatenatedProperties.push('propertyBindings');
Ember.Object.reopen(PropertyBindings);


App.XSliderComponent = Ember.Component.extend(PropertyBindings, {
  type: "range",
  tagName: ['input'],
  classNames: ['x-slider'],
  propertyBindings: ['value > element.value'],
  attributeBindings: ['min', 'max', 'step', 'type', 'name'],

  /**
   * The minimum value that this component's `value` property may
   * have.
   *
   * @property min
   * @type {Number}
   * @default 0
   */
  min: 0,

  /**
   * The maximum value (inclusive) that this component's `value` may
   * have.
   *
   * @property max
   * @type {Number}
   * @default 100
   */
  max: 100,

  /**
   * The "granularity". The value of the input will be a multiple of
   * this number.
   *
   * @property step
   * @type {Number}
   * @default 0
   */
  step: 1,

  /**
   * The current value of the input. It will lie on or between `min`
   * and `max` and will be a multiple of `step`.
   *
   * @property value
   * @type {Number}
   * @default 0
   */
  value: 0,

  /**
   * On any `input` event, copy the numeric value of the DOM element
   * onto the `value` property of the component so that it can be
   * bound to and from.
   *
   * @private
   */
  input: function() {
    this.set('value', Number(this.get('element.value')).valueOf());
  }
});
