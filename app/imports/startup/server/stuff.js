import { _ } from 'meteor/underscore';
import { Stuff } from '../../api/stuff/stuff.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const stuffSeeds = [
  { first: 'Andrew', last: 'Lewis', address: 'everywhere', phone: '123-456-7890', email: 'andrew.b.lewis@wsu.edu' },
  { first: 'Peter', last: 'Parker', address: 'NY, NY', phone: '102-938-4756', email: 'spiderman@idk.com' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}
