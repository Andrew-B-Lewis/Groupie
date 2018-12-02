import { Template } from 'meteor/templating';

import './main.html';

Template.hello.events({

  'submit .file': function (event) {
    event.preventDefault();
    const target = event.target;
    eval(target.code.value);
  }
});