import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  first: {
    label: 'First',
    type: String,
    optional: false,
    max: 25,
    autoform: {
      group: 'Stuff',
      placeholder: 'John',
    },
  },
  last: {
    label: 'Last',
    type: String,
    optional: false,
    max: 25,
    autoform: {
      group: 'Stuff',
      placeholder: 'Doe',
    },
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 25,
    autoform: {
      group: 'Stuff',
      placeholder: 'Sesame St',
    },
  },
  phone: {
    label: 'Phone',
    type: String,
    optional: false,
    max: 25,
    autoform: {
      group: 'Stuff',
      placeholder: '1-800-000-0000',
    },
  },
  email: {
    label: 'Email',
    type: String,
    optional: false,
    max: 25,
    autoform: {
      group: 'Stuff',
      placeholder: '123fake@notreal.com',
    },
  },
});

Stuff.attachSchema(StuffSchema);
