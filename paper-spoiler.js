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
      this.dropdownIcon = 'expand-less';
      $content.classList.add('active');
    } else {
      this.dropdownIcon = 'expand-more';
      $content.classList.remove('active');
    }
  },

  toggleShowContent: function (e) {
    this.showed = !this.showed;
  }

});
