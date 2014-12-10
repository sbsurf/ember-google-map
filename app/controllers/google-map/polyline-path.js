import Ember from 'ember';
import GoogleArrayMixin from 'ember-google-map/mixins/google-array';
import helpers from 'ember-google-map/core/helpers';

export default Ember.ArrayController.extend(GoogleArrayMixin, {
  model:             Ember.computed.alias('parentController.path'),
  googleItemFactory: helpers._latLngToGoogle,
  emberItemFactory:  helpers._latLngFromGoogle
});
