'use strict';
Polymer({
  is: 'paper-spoiler',

  properties: {
    showed: {
      type: Boolean,
      value: false,
      observer: '_showedChange'
    }
  },

  _showedChange: function (showed) {
    var $content = this.$$('.content');

    if (showed) {
      this.transform(`rotateZ(${0}deg)`, this.$.dropdownIcon);
      $content.classList.add('active');
    } else {
      this.transform(`rotateZ(${-180}deg)`, this.$.dropdownIcon);
      $content.classList.remove('active');
    }
  },

  toggleShowContent: function (e) {
    this.showed = !this.showed;
  }

});
