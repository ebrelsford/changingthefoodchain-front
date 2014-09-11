/*
 * Typeahead component for Ember, strongly based on 
 *
 *  https://github.com/charlieridley/ember-typeahead/
 *
 * but updated for Bloodhound and remote data sources.
 */
require('typeahead');

(function(root, undefined) {
    'use strict';
    Ember.TypeAheadComponent = Ember.TextField.extend({

        didInsertElement: function() {
            this._super();
            this.initializeTypeahead();
        },

        initializeTypeahead: function() {
            var _this = this,
                data = this.get('data'),
                remote = this.get('remote');

            var bloodhoundOptions = {
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
                queryTokenizer: Bloodhound.tokenizers.whitespace
            };

            if (data) {
                bloodhoundOptions.local = data.map(function(item) {
                    return {
                        value: item.get(_this.get('name')),
                        name: item.get(_this.get('name'))
                    };
                });
            }
            else if (remote) {
                bloodhoundOptions.remote = remote;
            }

            var itemsBloodhound = new Bloodhound(bloodhoundOptions);
            itemsBloodhound.initialize();

            this.typeahead = this.$().typeahead({
                hint: true,
                highlight: true,
                minLength: 1
            }, {
                name: _this.$().attr('id') || 'typeahead',
                displayKey: this.get('name'),
                limit: this.get('limit') || 5,
                source: itemsBloodhound.ttAdapter()
            });

            this.typeahead.on('typeahead:selected', function(event, item) {
                _this.set('selection', item);
            });

            this.typeahead.on('typeahead:autocompleted', function(event, item) {
                _this.set('selection', item);
            });

            if (this.get('selection')) {
                this.typeahead.val(this.get('selection.name'));
            }
        },

        selectionObserver: function() {
            if (Ember.isEmpty(this.get('selection')) === true) {
                return this.typeahead.val('');
            }
            return this.typeahead.val(this.get('selection')[this.get('name')]);
        }.observes('selection')

    });
    Ember.Handlebars.helper('type-ahead', Ember.TypeAheadComponent);
}(this));
