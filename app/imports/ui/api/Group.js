import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Group = new Mongo.Collection("Group");

export const GroupSchema = new SimpleSchema({
  name: {
    label: 'name',
    type: String,
  },
  creator: {
    label: 'creator',
    type: String,
  },
  users: {
    label: 'users',
    type: [],
  }

});

Group.attachSchema(GroupSchema);