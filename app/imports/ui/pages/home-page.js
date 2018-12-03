import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find();
  },
  /**
   * @returns {boolean} True if there is a logged in user.
   */
  canShow: function canShow() {
    return !!Meteor.user();
  },
});
