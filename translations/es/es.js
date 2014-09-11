Ember.I18n.translations = {
    buttons: {
        cancel: 'cancel',
        submit: 'submit'
    },

    application: {
        title: 'Changing the Food Chain',
        header: 'Changing the<br />Food Chain',
        nav: {
            about: 'about',
            contact: 'contact',
            news: 'news'
        },
        tagline: 'An action map for food chain workers & organizations.',
        filters: {
            header: 'filters',
            clear: 'clear',
            organization_type: 'organization type',
            industry_type: 'industry type'
        },
        search: {
            error: "Sorry we couldn't find the location you searched for. Try again?"
        },
        project_of: 'A project of'
    },

    help: {
        industries: {
            agriculture: "As the first stage of all food items, workers plant, care for, and harvest raw food items as well as raise livestock. Some of these raw foods, such as corn and grains, become material for processed food items and animal feed. other fruits and vegetables are brought directly to market for consumption. This stage also includes fisheries.",
            processing: "Workers in food processing turn raw food items into finished products, either by hand or on assembly lines in plants or factories. This includes both highly processed snack foods as well simpler items such as breads, cheese, and tortillas. Also included in this category are slaughterhouse workers and animal processors.",
            distribution: "At this stage, workers transport food from one destination to another and load and unload food at warehouses and distribution centers. These may be final points of sale or intermediate locations for storage or further processing. Essentially, distribution connects the material at each stage of the food system. While a large component of this involves transportation, this stage also includes warehousing, refrigeration, logistics, and coordination.",
            retail: "Workers in this sector sell food directly to consumers in retail outlets including supermarkets, convenience, grocery stores, and buyers’ clubs. Workers in retail also include those who cook and prepare foods for delis and bakeries within the retail outlets, receive shipments, stock shelves, and clean the facilities.",
            service: "The service sector is the largest segment of the food system. Workers in this segment prepare, cook and serve food, bartend, and wash dishes. This sector includes full-service restaurants, casual dining and quick service establishments, catering businesses, food trucks, street vendors, and food service establishments such as cafeterias and dining halls."
        }
    },

    organizations_list: {
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
        header: 'news',
        read_more: 'read more'
    },

    organization: {
        actions: {
            add_media: 'add media',
            share: 'share',
            visit: 'visit'
        },
        mission: 'Our mission'
    },

    organization_add: {
        title: 'Add My Organization',
        errors: {
            centroid: 'Please enter a valid address that shows up on the map.',
            name: 'Please enter a name for your organization.',
            sectors: 'Please choose a sector.',
            types: 'Please choose a type.',
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
            siteUrl: 'website',
            mission: 'mission',
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

    page: {
        sections: {
            header: 'sections'
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
