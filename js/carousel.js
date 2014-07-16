//
// CarouselView: Based on http://jsfiddle.net/marciojunior/U6V2x/
//
App.CarouselView = Ember.View.extend({    
    templateName: 'carousel',
    classNames: ['carousel', 'slide'],

    init: function() { 
        this._super.apply(this, arguments);
        // Disable the data api from boostrap
        $(document).off('.data-api');      

        // At least one item must have the active class, so we set the 
        // first here, and the class will be added by class binding
        var obj = this.get('content.firstObject');
        Ember.set(obj, 'isActive', true);
    },

    previousSlide: function() {
        this.$().carousel('prev');
    },

    nextSlide: function() {
        this.$().carousel('next');
    },

    didInsertElement: function() {
        this.$().carousel();
    },

    indicatorsView: Ember.CollectionView.extend({
        tagName: 'ol',
        classNames: ['carousel-indicators'],        
        contentBinding: 'parentView.content',
        itemViewClass: Ember.View.extend({
            click: function() {
                var $elem = this.get("parentView.parentView").$();
                $elem.carousel(this.get("contentIndex"));
            },
            template: '',
            classNameBindings: ['content.isActive:active']            
        })
    }),

    itemsView: Ember.CollectionView.extend({        
        classNames: ['carousel-inner'],
        contentBinding: 'parentView.content',
        itemViewClass: Ember.View.extend({
            classNames: ['item'],
            classNameBindings: ['content.isActive:active'],
            templateName: 'carousel-item'
        })
    })
});
