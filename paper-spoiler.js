'use strict';
new Polymer({
  is: 'paper-spoiler',

  properties: {
    disabled: {
      type: Boolean,
      value: false
    },
    showed: {
      type: Boolean,
      value: false,
      observer: '_showedChange'
    }
  },

  _showedChange(showed) {
    if (this.disabled) {
      return;
    }

    let $content = this.$$('.content');

    if (showed) {
      this.transform(`rotateZ(${0}deg)`, this.$.dropdownIcon);
      $content.classList.add('active');
    } else {
      this.transform(`rotateZ(${-180}deg)`, this.$.dropdownIcon);
      $content.classList.remove('active');
    }
  },

  toggleShowContent() {
    if (!this.disabled) {
      this.showed = !this.showed;
    }
  }

});
