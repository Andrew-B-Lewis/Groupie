import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Group } from '../../ui/api/Group.js';


Template.Add_Group_Form.events({
  'submit .create': function (event) {
    event.preventDefault();
    const target = event.target;
    Group.insert({
      name: target.name,
      creator: 'DefaultTest',
      users: [],
    });
    FlowRouter.go('Javascript');
  },
});