import { Template } from 'meteor/templating';

import './compiler.html';

Template.Compiler_Page.events({

  'submit .file': function (event) {
    event.preventDefault();
    const target = event.target;
    eval(target.code.value);
  },
});
