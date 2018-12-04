import { FlowRouter } from 'meteor/kadira:flow-router';
import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { Group } from '../../ui/api/Group.js';


Template.Add_Group_Form.events({
  'submit .create': function (event) {
    event.preventDefault();
    const target = event.target;
    Group.insert({
      name: target.name.value,
      creator: 'DefaultTest',
      users: [],
    });
    if(Group.find().count() !== 0){
      console.log(Group.find().fetch()[0].creator);
    }
    FlowRouter.go('Javascript');
  },
});