import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';


Template.Javascript.events({

  'submit .file': function (event) {
    event.preventDefault();
    const target = event.target;
    eval(target.code.value);
  }
});


