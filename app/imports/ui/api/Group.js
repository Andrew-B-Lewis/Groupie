import { Mongo } from 'meteor/mongo';
import  SimpleSchema  from 'simpl-schema';

export const Group = new Mongo.Collection("Group");
export const Event = new Mongo.Collection("Event");

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
    type: Array,
    minCount: 0,
  },
  'users.$': String,
});

export const EventSchema = new SimpleSchema({
  title: {
    label: 'title',
    type: String,
  },
  time: {
    label: 'time',
    type: String,
  },
  desc: {
    label: 'desc',
    type: String,
  },
});
