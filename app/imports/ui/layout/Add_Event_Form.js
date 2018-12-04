import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';


Template.Add_Event_Form.events({
  'submit .create': function (event) {
    event.preventDefault();
    const target = event.target;
    Group.insert({

    });
    FlowRouter.go('List_Stuff_Page');
  },
});
