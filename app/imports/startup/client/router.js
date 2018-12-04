import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Javascript',
  action() {
    BlazeLayout.render('App_Body', { main: 'Javascript' });
  },
});

FlowRouter.route('/Add_Group_Form', {
  name: 'Add_Group_Form',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Group_Form' });
  },
});
/*
FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});
*/
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
