Ember.I18n.translations = {
    buttons: {
        cancel: 'cancel',
        submit: 'submit'
    },

    application: {
        title: 'Changing the Food Chain',
        nav: {
            about: 'about',
            contact: 'contact',
            news: 'news'
        },
        tagline: 'An action map for food chain workers & organizations.',
        filters: {
            organization_type: 'organization type',
            industry_type: 'industry type'
        },
        search: {
            error: "Sorry we couldn't find the location you searched for. Try again?"
        }
    },

    list_organizations: {
        title: 'Organization List',
        headers: {
            name: 'name',
            city: 'city',
            state: 'state',
            types: 'types',
            sectors: 'sectors'
        },
        add: {
            message: "Don't see your organization in this list? Add it here.",
            button: 'add my organization'
        }
    },

    news: {
        categories: {
            clear: 'clear',
            header: 'categories',
            featured: 'featured'
        },
        empty: 'No news to show for this category',
        read_more: 'read more'
    },

    organization: {
        actions: {
            add_media: 'add media',
            share: 'share',
            visit: 'visit'
        }
    },

    organization_add: {
        title: 'Add My Organization',
        errors: {
            centroid: 'Please enter a valid address that shows up on the map.',
            name: 'Please enter a name for your organization.',
            sectors: 'Please choose a sector.',
            type: 'Please choose a type.',
            general: 'Something went wrong. Please try again.'
        },
        success: 'Successfully added organization.',
        location: {
            message: "Your organization will be placed here. Make sure it's in the right spot on the map.",
            accept: 'Use this address',
            error: "Sorry, we couldn't find the address you added. Could you be more specific?"
        },
        fields: {
            name: 'organization name',
            address: 'address',
            address2: 'address line 2',
            city: 'city',
            state: 'state',
            zip: 'zip',
            email: 'email',
            phone: 'phone',
            types: 'organization types',
            sectors: 'sectors'
        }
    },

    organization_add_media: {
        title: 'Add Media',
        error: 'Something went wrong. Please try again.',
        success: 'Successfully added media.',
        photo: {
            label: 'Add a photo'
        },
        video: {
            label: 'Vimeo or YouTube link'
        }
    },

    share: {
        title: 'Share',
        actions: {
            facebook: 'share on facebook',
            twitter: 'share on twitter'
        },
        tabs: {
            embed: 'Embed',
            share: 'Share'
        }
    }
};
