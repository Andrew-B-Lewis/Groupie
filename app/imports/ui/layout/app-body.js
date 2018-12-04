import { Template } from 'meteor/templating';
import { Group } from '../../ui/api/Group.js';

Template.header.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  groupList() {
    return Group.find();
  },
});