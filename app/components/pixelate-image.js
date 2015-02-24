import Ember from 'ember';

var PixelateImageComponent = Ember.Component.extend({
  value: 0,

  performPixelation: Ember.observer("value", function() {
    var amount = this.get("value") / 100;
    if(!this.pixelate) {
      this.pixelate = new Pixelate(this.$("img").get(0), {amount: amount});
    } else {
      this.pixelate.setAmount(amount).render();
    }
  }).on("didInsertElement"),

  rerenderOnSrcChange: Ember.observer("src", function() {
    var _this = this;
    Ember.run.later(function() {
      _this.pixelate = null;
      _this.rerender();
    }, 100);
  })
});

export default PixelateImageComponent;
