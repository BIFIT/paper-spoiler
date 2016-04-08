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

  /**
   * Observer
   * @param showed {Boolean}
   */
    _showedChange(showed) {
    if (this.disabled) {
      return;
    }

    const content = this.$$('.content');
    const clist = 'active';

    if (showed) {
      this.transform(`rotateZ(0deg)`, this.$.dropdownIcon);
      content.classList.add(clist);
    } else {
      this.transform(`rotateZ(-180deg)`, this.$.dropdownIcon);
      content.classList.remove(clist);
    }

  },

  /**
   * Toggle visible content
   */
    onShowContent() {
    if (this.disabled) {
      return;
    }

    this.showed = !this.showed;
  }

});
