Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application.nav.about", options) : helperMissing.call(depth0, "t", "application.nav.about", options))));
  }

function program3(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application.nav.news", options) : helperMissing.call(depth0, "t", "application.nav.news", options))));
  }

function program5(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application.nav.contact", options) : helperMissing.call(depth0, "t", "application.nav.contact", options))));
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setLocale", "code", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"search-error\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application.search.error", options) : helperMissing.call(depth0, "t", "application.search.error", options))));
  data.buffer.push("\n        </div>\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  
  data.buffer.push("?");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\n    <div class=\"map-ui-button-icon add-organization-button-icon\"></div>\n    add org\n");
  }

  data.buffer.push("<header>\n    <div id=\"logo\">\n        <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reset", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application.header", options) : helperMissing.call(depth0, "t", "application.header", options))));
  data.buffer.push("</a>\n    </div>\n    <nav id=\"nav\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news", options) : helperMissing.call(depth0, "link-to", "news", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </nav>\n    <div id=\"tagline\">\n        <div>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application.tagline", options) : helperMissing.call(depth0, "t", "application.tagline", options))));
  data.buffer.push("\n        </div>\n        <div class=\"languages\">\n            ");
  stack1 = helpers.each.call(depth0, "languages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n    <div id=\"search\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers['type-ahead'] || (depth0 && depth0['type-ahead']),options={hash:{
    'data': ("organizations"),
    'name': ("name"),
    'action': ("search"),
    'selection': ("selectedOrganization"),
    'value': ("searchText"),
    'placeholder': ("Search by name, city, state")
  },hashTypes:{'data': "ID",'name': "STRING",'action': "STRING",'selection': "ID",'value': "ID",'placeholder': "STRING"},hashContexts:{'data': depth0,'name': depth0,'action': depth0,'selection': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "type-ahead", options))));
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "searchError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <a href=\"#\" id=\"list-button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></a>\n</header>\n\n<div id=\"map\">\n    <a href=\"http://mapbox.com/about/maps\" class='mapbox-maplogo' target=\"_blank\">MapBox</a>\n</div>\n\n<div id=\"project-authors\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application.project_of", options) : helperMissing.call(depth0, "t", "application.project_of", options))));
  data.buffer.push("\n    <a href=\"http://foodchainworkers.org/\" target=\"_blank\">Food Chain Workers Alliance</a> &amp;\n    <a href=\"http://thehandthatfeedsfilm.com/\" target=\"_blank\">The Hand That Feeds</a>\n</div>\n\n<div id=\"filters\" class=\"full-height\">\n    <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clearFilters", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"filters-clear\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application.filters.clear", options) : helperMissing.call(depth0, "t", "application.filters.clear", options))));
  data.buffer.push("</a>\n    <h2>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application.filters.header", options) : helperMissing.call(depth0, "t", "application.filters.header", options))));
  data.buffer.push("</h2>\n    <section class=\"filters-type\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("pull-right help-button")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "help-organization-types", options) : helperMissing.call(depth0, "link-to", "help-organization-types", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <h3>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application.filters.organization_type", options) : helperMissing.call(depth0, "t", "application.filters.organization_type", options))));
  data.buffer.push("</h3>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.OrganizationTypeView", {hash:{
    'content': ("types")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </section>\n    <section class=\"filters-sector\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("pull-right help-button")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "help-industry-types", options) : helperMissing.call(depth0, "link-to", "help-industry-types", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <h3>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application.filters.industry_type", options) : helperMissing.call(depth0, "t", "application.filters.industry_type", options))));
  data.buffer.push("</h3>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SectorView", {hash:{
    'content': ("sectors")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </section>\n</div>\n\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("map-ui-button add-organization-button")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organizations.add", options) : helperMissing.call(depth0, "link-to", "organizations.add", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<a id=\"share-button\" class=\"map-ui-button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openShare", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <div class=\"map-ui-button-icon add-organization-button-icon\"></div>\n    share\n</a>\n\n<div id=\"popup\" class=\"full-height\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<div id=\"page\" class=\"full-height full-width\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "page", options) : helperMissing.call(depth0, "outlet", "page", options))));
  data.buffer.push("\n</div>\n\n<div id=\"help\" class=\"full-height full-width\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "help", options) : helperMissing.call(depth0, "outlet", "help", options))));
  data.buffer.push("\n</div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["carousel-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("view.content.fullUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"\"/>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.content.embedCode", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "view.content.fullUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"carousel-caption\"></div>\n");
  return buffer;
  
});

Ember.TEMPLATES["carousel"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.indicatorsView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.itemsView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n<a class=\"left carousel-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previousSlide", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">‹</a>\n<a class=\"right carousel-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextSlide", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">›</a>   \n");
  return buffer;
  
});

Ember.TEMPLATES["embed"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"form-group\">\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'class': ("form-control"),
    'content': ("sizes"),
    'value': ("size")
  },hashTypes:{'class': "STRING",'content': "ID",'value': "ID"},hashContexts:{'class': depth0,'content': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("code")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <div id=\"embed-map\" class=\"embed-map\"></div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["error"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("We're sorry, but there was a problem while loading the page. Please try again\nand let us know if it continues to happen.\n");
  
});

Ember.TEMPLATES["help-industry-types"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n\n<h1 class=\"help-header\">Industry Types</h1>\n<div class=\"help-types help-industry-types\">\n    <div class=\"help-types-item\">\n        <div class=\"help-types-item-name\">\n            <img src=\"img/agriculture.png\" />\n        </div>\n        <div class=\"help-types-item-text\">\nAenean ac purus feugiat, sagittis lectus id, volutpat magna. Praesent nec purus ut est eleifend viverra nec non nisi. Integer bibendum urna eget leo sodales, interdum suscipit sem blandit. Nam egestas diam odio, vitae ornare justo adipiscing ut. Ut ullamcorper erat ac ipsum viverra, sit amet sollicitudin tellus mollis. Aenean blandit cursus quam. Aenean sagittis cursus est sed dictum. Aenean suscipit nisi id orci viverra, eget adipiscing turpis tincidunt.\n        </div>\n    </div>\n    <div class=\"help-types-item\">\n        <div class=\"help-types-item-name\">\n            <img src=\"img/foodprocessing.png\" />\n        </div>\n        <div class=\"help-types-item-text\">\nAenean ac purus feugiat, sagittis lectus id, volutpat magna. Proin nec arcu in leo euismod porta a et tellus. Mauris tristique velit sit amet fringilla viverra. Maecenas nec interdum sem, vel mollis augue. Nulla sed lacus sed est feugiat volutpat. Curabitur sed neque suscipit, ullamcorper augue egestas, tristique mi. Vestibulum quis suscipit lacus, tristique convallis nibh. Nulla suscipit aliquet iaculis. Aenean sagittis cursus est sed dictum. Aenean suscipit nisi id orci viverra, eget adipiscing turpis tincidunt.\n        </div>\n    </div>\n    <div class=\"help-types-item\">\n        <div class=\"help-types-item-name\">\n            <img src=\"img/distribution.png\" />\n        </div>\n        <div class=\"help-types-item-text\">\nAenean ac purus feugiat, sagittis lectus id, volutpat magna. Ut ullamcorper erat ac ipsum viverra, sit amet sollicitudin tellus mollis. Aenean blandit cursus quam. Nulla sed lacus sed est feugiat volutpat. Curabitur sed neque suscipit, ullamcorper augue egestas, tristique mi. Vestibulum quis suscipit lacus, tristique convallis nibh. Nulla suscipit aliquet iaculis. Aenean sagittis cursus est sed dictum. Aenean suscipit nisi id orci viverra, eget adipiscing turpis tincidunt.\n        </div>\n    </div>\n    <div class=\"help-types-item\">\n        <div class=\"help-types-item-name\">\n            <img src=\"img/retail.png\" />\n        </div>\n        <div class=\"help-types-item-text\">\nAenean ac purus feugiat, sagittis lectus id, volutpat magna. Integer bibendum urna eget leo sodales, interdum suscipit sem blandit. Ut ullamcorper erat ac ipsum viverra, sit amet sollicitudin tellus mollis. Proin nec arcu in leo euismod porta a et tellus. Maecenas nec interdum sem, vel mollis augue. Curabitur sed neque suscipit, ullamcorper augue egestas, tristique mi. Nulla suscipit aliquet iaculis. Aenean suscipit nisi id orci viverra, eget adipiscing turpis tincidunt.\n        </div>\n    </div>\n    <div class=\"help-types-item\">\n        <div class=\"help-types-item-name\">\n            <img src=\"img/foodservice.png\" />\n        </div>\n        <div class=\"help-types-item-text\">\nAenean ac purus feugiat, sagittis lectus id, volutpat magna. Integer bibendum urna eget leo sodales, interdum suscipit sem blandit. Ut ullamcorper erat ac ipsum viverra, sit amet sollicitudin tellus mollis. Proin nec arcu in leo euismod porta a et tellus. Maecenas nec interdum sem, vel mollis augue. Curabitur sed neque suscipit, ullamcorper augue egestas, tristique mi. Nulla suscipit aliquet iaculis. Aenean suscipit nisi id orci viverra, eget adipiscing turpis tincidunt.\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["help-organization-types"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n\n<h1 class=\"help-header\">Organization Types</h1>\n<div class=\"help-types\">\n    <div class=\"help-types-item\">\n        <div class=\"help-types-item-name\">\n            <img src=\"img/advocacy.png\" />\n        </div>\n        <div class=\"help-types-item-text\">\nAenean ac purus feugiat, sagittis lectus id, volutpat magna. Praesent nec purus ut est eleifend viverra nec non nisi. Integer bibendum urna eget leo sodales, interdum suscipit sem blandit. Nam egestas diam odio, vitae ornare justo adipiscing ut. Ut ullamcorper erat ac ipsum viverra, sit amet sollicitudin tellus mollis. Aenean blandit cursus quam. Aenean sagittis cursus est sed dictum. Aenean suscipit nisi id orci viverra, eget adipiscing turpis tincidunt.\n        </div>\n    </div>\n    <div class=\"help-types-item\">\n        <div class=\"help-types-item-name\">\n            <img src=\"img/service.png\" />\n        </div>\n        <div class=\"help-types-item-text\">\nAenean ac purus feugiat, sagittis lectus id, volutpat magna. Proin nec arcu in leo euismod porta a et tellus. Mauris tristique velit sit amet fringilla viverra. Maecenas nec interdum sem, vel mollis augue. Nulla sed lacus sed est feugiat volutpat. Curabitur sed neque suscipit, ullamcorper augue egestas, tristique mi. Vestibulum quis suscipit lacus, tristique convallis nibh. Nulla suscipit aliquet iaculis. Aenean sagittis cursus est sed dictum. Aenean suscipit nisi id orci viverra, eget adipiscing turpis tincidunt.\n        </div>\n    </div>\n    <div class=\"help-types-item\">\n        <div class=\"help-types-item-name\">\n            <img src=\"img/workerscenter.png\" />\n        </div>\n        <div class=\"help-types-item-text\">\nAenean ac purus feugiat, sagittis lectus id, volutpat magna. Ut ullamcorper erat ac ipsum viverra, sit amet sollicitudin tellus mollis. Aenean blandit cursus quam. Nulla sed lacus sed est feugiat volutpat. Curabitur sed neque suscipit, ullamcorper augue egestas, tristique mi. Vestibulum quis suscipit lacus, tristique convallis nibh. Nulla suscipit aliquet iaculis. Aenean sagittis cursus est sed dictum. Aenean suscipit nisi id orci viverra, eget adipiscing turpis tincidunt.\n        </div>\n    </div>\n    <div class=\"help-types-item\">\n        <div class=\"help-types-item-name\">\n            <img src=\"img/union.png\" />\n        </div>\n        <div class=\"help-types-item-text\">\nAenean ac purus feugiat, sagittis lectus id, volutpat magna. Integer bibendum urna eget leo sodales, interdum suscipit sem blandit. Ut ullamcorper erat ac ipsum viverra, sit amet sollicitudin tellus mollis. Proin nec arcu in leo euismod porta a et tellus. Maecenas nec interdum sem, vel mollis augue. Curabitur sed neque suscipit, ullamcorper augue egestas, tristique mi. Nulla suscipit aliquet iaculis. Aenean suscipit nisi id orci viverra, eget adipiscing turpis tincidunt.\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["news-category-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"section-indicator\"></div>\n<div class=\"section-label\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "view.content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<div class=\"clearfix\"></div>\n");
  return buffer;
  
});

Ember.TEMPLATES["news-entry"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news.header", options) : helperMissing.call(depth0, "t", "news.header", options))));
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <h2 class=\"news-entry-title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n            <div class=\"news-entry-meta\">\n                <div class=\"news-entry-meta-publication-date\">");
  stack1 = helpers._triageMustache.call(depth0, "published_on_long", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n            </div>\n            <div class=\"news-entry-cover\">\n                ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "cover", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            </div>\n            <div class=\"news-entry-content\">\n                <div class=\"news-entry-preview\">\n                    ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "main", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n            </div>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"news-row\">\n    <div class=\"page-sections\">\n        <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"news-category-clear\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news.categories.clear", options) : helperMissing.call(depth0, "t", "news.categories.clear", options))));
  data.buffer.push("</a>\n        <h2 class=\"news-category-header\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news.categories.header", options) : helperMissing.call(depth0, "t", "news.categories.header", options))));
  data.buffer.push("</h2>\n        <ul class=\"news-category-list\">\n            <li class=\"news-category-list-item\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pickFeatured", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("featured:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                <div class=\"section-indicator\"></div>\n                <div class=\"section-label\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news.categories.featured", options) : helperMissing.call(depth0, "t", "news.categories.featured", options))));
  data.buffer.push("\n                </div>\n                <div class=\"clearfix\"></div>\n            </li>\n        </ul>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.NewsCategoryView", {hash:{
    'content': ("controllers.news.categories")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n    <div class=\"page-content\">\n        <h1 class=\"news-header fixed-header\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news", options) : helperMissing.call(depth0, "link-to", "news", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n        </h1>\n        <div class=\"news-entry news-entry-detail fixed-header-spacer\">\n            ");
  stack1 = helpers['with'].call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["news"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"news-entry\">\n            <div class=\"news-entry-cover\">\n                ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "cover", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            </div>\n            <div class=\"news-entry-content\">\n                <h2 class=\"news-entry-title\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openEntry", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n                <div class=\"news-entry-meta\">\n                    <div class=\"news-entry-meta-publication-date\">");
  stack1 = helpers._triageMustache.call(depth0, "published_on_short", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                </div>\n                <div class=\"news-entry-preview\">\n                    ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "preview", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n                <div class=\"news-entry-link\">\n                    ");
  stack1 = helpers['if'].call(depth0, "link", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("link")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\">\n                        ");
  stack1 = helpers['if'].call(depth0, "read_more_at", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </a>\n                    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news.read_more_at", options) : helperMissing.call(depth0, "t", "news.read_more_at", options))));
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "read_more_at", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news.read_more", options) : helperMissing.call(depth0, "t", "news.read_more", options))));
  data.buffer.push("\n                        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openEntry", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news.read_more", options) : helperMissing.call(depth0, "t", "news.read_more", options))));
  data.buffer.push("</a>\n                    ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news.empty", options) : helperMissing.call(depth0, "t", "news.empty", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"news-row\">\n    <div class=\"page-sections\">\n        <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"news-category-clear\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news.categories.clear", options) : helperMissing.call(depth0, "t", "news.categories.clear", options))));
  data.buffer.push("</a>\n        <h2 class=\"news-category-header\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news.categories.header", options) : helperMissing.call(depth0, "t", "news.categories.header", options))));
  data.buffer.push("</h2>\n        <ul class=\"news-category-list\">\n            <li class=\"news-category-list-item\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pickFeatured", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("featured:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                <div class=\"section-indicator\"></div>\n                <div class=\"section-label\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news.categories.featured", options) : helperMissing.call(depth0, "t", "news.categories.featured", options))));
  data.buffer.push("\n                </div>\n                <div class=\"clearfix\"></div>\n            </li>\n        </ul>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.NewsCategoryView", {hash:{
    'content': ("categories")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n    <div class=\"page-content news-entry-list\">\n        <h1 class=\"news-header fixed-header\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news.header", options) : helperMissing.call(depth0, "t", "news.header", options))));
  data.buffer.push("\n            <div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n        </h1>\n        ");
  stack1 = helpers.each.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["organization-type-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"section-indicator\"></div>\n<div class=\"section-label\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "view.content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<div class=\"clearfix\"></div>\n");
  return buffer;
  
});

Ember.TEMPLATES["organization"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["organization/add_media"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        <div class=\"alert alert-danger\" role=\"alert\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add_media.error", options) : helperMissing.call(depth0, "t", "organization_add_media.error", options))));
  data.buffer.push("\n                        </div>\n                    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        <div class=\"alert alert-success\" role=\"alert\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add_media.success", options) : helperMissing.call(depth0, "t", "organization_add_media.success", options))));
  data.buffer.push("\n                        </div>\n                    ");
  return buffer;
  }

  data.buffer.push("<div class=\"modal fade\" id=\"addOrganizationMediaModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addOrganizationMediaModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                <h4 class=\"modal-title\" id=\"addOrganizationMediaModalLabel\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add_media.title", options) : helperMissing.call(depth0, "t", "organization_add_media.title", options))));
  data.buffer.push("\n                </h4>\n            </div>\n            <form>\n                <div class=\"modal-body\">\n                    ");
  stack1 = helpers['if'].call(depth0, "error", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = helpers['if'].call(depth0, "success", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.tabButtonsView", {hash:{
    'content': ("tabs")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.tabContentView", {hash:{
    'content': ("tabs")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "buttons.cancel", options) : helperMissing.call(depth0, "t", "buttons.cancel", options))));
  data.buffer.push("\n                    </button>\n                    <button type=\"submit\" class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("submitting")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "buttons.submit", options) : helperMissing.call(depth0, "t", "buttons.submit", options))));
  data.buffer.push("\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["organization/add_media_photo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"form-group\">\n    <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add_media.photo.label", options) : helperMissing.call(depth0, "t", "organization_add_media.photo.label", options))));
  data.buffer.push("</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("photo"),
    'class': ("form-control"),
    'type': ("file")
  },hashTypes:{'name': "STRING",'class': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'class': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["organization/add_media_tab_button"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("view.content.tabId")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" role=\"tab\" data-toggle=\"tab\">");
  stack1 = helpers._triageMustache.call(depth0, "view.content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n");
  return buffer;
  
});

Ember.TEMPLATES["organization/add_media_tab_content"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("tabId")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":tab-pane isActive:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "tabView", {hash:{
    'content': ("view.content")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "view.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["organization/add_media_video"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"form-group\">\n    <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add_media.video.label", options) : helperMissing.call(depth0, "t", "organization_add_media.video.label", options))));
  data.buffer.push("</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("url"),
    'value': ("controller.videoUrl")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["organization/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"organization-details\">\n\n        <div class=\"organization-header\">\n            <div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n            ");
  stack1 = helpers.each.call(depth0, "types", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        <div class=\"organization-details-inner\">\n            <h2>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n            <div class=\"organization-details-contact\">\n                <div>\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "address_line1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(", ");
  stack1 = helpers._triageMustache.call(depth0, "city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(", ");
  stack1 = helpers._triageMustache.call(depth0, "state_province", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "postal_code", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                ");
  stack1 = helpers['if'].call(depth0, "phone", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n\n            <div class=\"organization-details-actions\">\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-primary")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "share", options) : helperMissing.call(depth0, "link-to", "share", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "site_url", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-primary")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization.add_media", options) : helperMissing.call(depth0, "link-to", "organization.add_media", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n\n            ");
  stack1 = helpers['if'].call(depth0, "media", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "mission", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image"),
    'alt': ("name")
  },hashTypes:{'src': "ID",'alt': "ID"},hashContexts:{'src': depth0,'alt': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n            ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div class=\"organization-details-contact-phone\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "phone", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div class=\"organization-details-contact-email\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                ");
  return buffer;
  }

function program8(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization.actions.share", options) : helperMissing.call(depth0, "t", "organization.actions.share", options))));
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("site_url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"btn btn-primary\" target=\"_blank\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization.actions.visit", options) : helperMissing.call(depth0, "t", "organization.actions.visit", options))));
  data.buffer.push("</a>\n                ");
  return buffer;
  }

function program12(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization.actions.add_media", options) : helperMissing.call(depth0, "t", "organization.actions.add_media", options))));
  }

function program14(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <div class=\"organization-details-media\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.CarouselView", {hash:{
    'content': ("media")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            </div>\n            ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <div class=\"organization-details-mission-statement\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization.mission", options) : helperMissing.call(depth0, "t", "organization.mission", options))));
  data.buffer.push(": ");
  stack1 = helpers._triageMustache.call(depth0, "mission", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"organization-filters\">\n        <h2>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application.filters.header", options) : helperMissing.call(depth0, "t", "application.filters.header", options))));
  data.buffer.push("</h2>\n        <section class=\"filters-type\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("pull-right help-button")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "help-organization-types", options) : helperMissing.call(depth0, "link-to", "help-organization-types", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <h3>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application.filters.organization_type", options) : helperMissing.call(depth0, "t", "application.filters.organization_type", options))));
  data.buffer.push("</h3>\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.OrganizationTypeView", {hash:{
    'content': ("types")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </section>\n        <section class=\"filters-sector\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("pull-right help-button")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "help-industry-types", options) : helperMissing.call(depth0, "link-to", "help-industry-types", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <h3>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "application.filters.industry_type", options) : helperMissing.call(depth0, "t", "application.filters.industry_type", options))));
  data.buffer.push("</h3>\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SectorView", {hash:{
    'content': ("sectors")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </section>\n    </div>\n    ");
  return buffer;
  }
function program19(depth0,data) {
  
  
  data.buffer.push("?");
  }

  data.buffer.push("<div class=\"organization-row\">\n\n    ");
  stack1 = helpers['with'].call(depth0, "controllers.organization.model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  stack1 = helpers['with'].call(depth0, "controllers.organization", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["organizations"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["organizations/add"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"alert alert-danger\" role=\"alert\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.errors.centroid", options) : helperMissing.call(depth0, "t", "organization_add.errors.centroid", options))));
  data.buffer.push("\n            </div>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"alert alert-danger\" role=\"alert\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.errors.name", options) : helperMissing.call(depth0, "t", "organization_add.errors.name", options))));
  data.buffer.push("\n            </div>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"alert alert-danger\" role=\"alert\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.errors.sectors", options) : helperMissing.call(depth0, "t", "organization_add.errors.sectors", options))));
  data.buffer.push("\n            </div>\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"alert alert-danger\" role=\"alert\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.errors.types", options) : helperMissing.call(depth0, "t", "organization_add.errors.types", options))));
  data.buffer.push("\n            </div>\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"alert alert-danger\" role=\"alert\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.errors.general", options) : helperMissing.call(depth0, "t", "organization_add.errors.general", options))));
  data.buffer.push("\n            </div>\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"alert alert-success\" role=\"alert\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.success", options) : helperMissing.call(depth0, "t", "organization_add.success", options))));
  data.buffer.push("\n            </div>\n        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <div class=\"add-organization-location-output-address\">\n                    <div class=\"add-organization-location-output-address-message\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.location.message", options) : helperMissing.call(depth0, "t", "organization_add.location.message", options))));
  data.buffer.push("\n                    </div>\n                    <div class=\"add-organization-location-output-address-address\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "geocodedAddress", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<br />\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "geocodedCity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "geocodedState", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "geocodedZip", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                    <div class=\"add-organization-location-output-address-accept\">\n                        <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "useGeocodedAddress", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.location.accept", options) : helperMissing.call(depth0, "t", "organization_add.location.accept", options))));
  data.buffer.push("\n                        </a>\n                    </div>\n                </div>\n                ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div class=\"add-organization-location-output-error\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.location.error", options) : helperMissing.call(depth0, "t", "organization_add.location.error", options))));
  data.buffer.push("\n                </div>\n                ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <div>\n                            <label>\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "typeCheckbox", {hash:{
    'name': ("type.name")
  },hashTypes:{'name': "ID"},hashContexts:{'name': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "type.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </label>\n                        </div>\n                        ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <div>\n                            <label>\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "sectorCheckbox", {hash:{
    'name': ("sector.name")
  },hashTypes:{'name': "ID"},hashContexts:{'name': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "sector.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </label>\n                        </div>\n                        ");
  return buffer;
  }

  data.buffer.push("<h1 class=\"add-organization-header fixed-header\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.title", options) : helperMissing.call(depth0, "t", "organization_add.title", options))));
  data.buffer.push("\n    <div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n</h1>\n\n<div class=\"fixed-header-spacer\">\n    <form>\n        ");
  stack1 = helpers['if'].call(depth0, "centroidError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "nameError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "sectorsError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "typesError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "error", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "success", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"add-organization-location-row\">\n            <div class=\"add-organization-location-output\">\n                <div id=\"add-organization-map\" class=\"add-organization-location-output-map\"></div>\n                ");
  stack1 = helpers['if'].call(depth0, "geocodedAddress", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "geocodeError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            <div class=\"add-organization-location-form\">\n                <div class=\"form-group\">\n                    <label for=\"organization-name\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.fields.name", options) : helperMissing.call(depth0, "t", "organization_add.fields.name", options))));
  data.buffer.push("\n                    </label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("organization-name"),
    'value': ("name")
  },hashTypes:{'class': "STRING",'id': "STRING",'value': "ID"},hashContexts:{'class': depth0,'id': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n\n                <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":form-group geocodeError:has-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                    <label for=\"address\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.fields.address", options) : helperMissing.call(depth0, "t", "organization_add.fields.address", options))));
  data.buffer.push("\n                    </label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("address"),
    'value': ("address"),
    'focus-out': ("updateCentroid")
  },hashTypes:{'class': "STRING",'id': "STRING",'value': "ID",'focus-out': "STRING"},hashContexts:{'class': depth0,'id': depth0,'value': depth0,'focus-out': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"address2\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.fields.address2", options) : helperMissing.call(depth0, "t", "organization_add.fields.address2", options))));
  data.buffer.push("\n                    </label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("address2"),
    'value': ("address2")
  },hashTypes:{'class': "STRING",'id': "STRING",'value': "ID"},hashContexts:{'class': depth0,'id': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n\n                <div class=\"add-organization-location-form-city-state\">\n                    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":form-group :field-city geocodeError:has-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                        <label for=\"city\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.fields.city", options) : helperMissing.call(depth0, "t", "organization_add.fields.city", options))));
  data.buffer.push("\n                        </label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("city"),
    'value': ("city"),
    'focus-out': ("updateCentroid")
  },hashTypes:{'class': "STRING",'id': "STRING",'value': "ID",'focus-out': "STRING"},hashContexts:{'class': depth0,'id': depth0,'value': depth0,'focus-out': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n\n                    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":form-group :field-state geocodeError:has-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                        <label for=\"state\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.fields.state", options) : helperMissing.call(depth0, "t", "organization_add.fields.state", options))));
  data.buffer.push("\n                        </label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("state"),
    'value': ("state"),
    'focus-out': ("updateCentroid")
  },hashTypes:{'class': "STRING",'id': "STRING",'value': "ID",'focus-out': "STRING"},hashContexts:{'class': depth0,'id': depth0,'value': depth0,'focus-out': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n\n                    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":form-group :field-zip geocodeError:has-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                        <label for=\"zip\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.fields.zip", options) : helperMissing.call(depth0, "t", "organization_add.fields.zip", options))));
  data.buffer.push("\n                        </label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("zip"),
    'value': ("zip"),
    'focus-out': ("updateCentroid")
  },hashTypes:{'class': "STRING",'id': "STRING",'value': "ID",'focus-out': "STRING"},hashContexts:{'class': depth0,'id': depth0,'value': depth0,'focus-out': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"add-organization-contact\">\n                    <div class=\"form-group field-email\">\n                        <label for=\"email\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.fields.email", options) : helperMissing.call(depth0, "t", "organization_add.fields.email", options))));
  data.buffer.push("\n                        </label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("email"),
    'type': ("email"),
    'value': ("email")
  },hashTypes:{'class': "STRING",'id': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'id': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n                    <div class=\"form-group field-phone\">\n                        <label for=\"phone\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.fields.phone", options) : helperMissing.call(depth0, "t", "organization_add.fields.phone", options))));
  data.buffer.push("\n                        </label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("phone"),
    'type': ("phone"),
    'value': ("phone")
  },hashTypes:{'class': "STRING",'id': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'id': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"add-organization-site-url\">\n                    <div class=\"form-group field-site-url\">\n                        <label for=\"site_url\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.fields.siteUrl", options) : helperMissing.call(depth0, "t", "organization_add.fields.siteUrl", options))));
  data.buffer.push("\n                        </label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("site_url"),
    'type': ("url"),
    'value': ("siteUrl")
  },hashTypes:{'class': "STRING",'id': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'id': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"add-organization-mission\">\n                    <div class=\"form-group field-mission\">\n                        <label for=\"mission\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.fields.mission", options) : helperMissing.call(depth0, "t", "organization_add.fields.mission", options))));
  data.buffer.push("\n                        </label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'class': ("form-control"),
    'id': ("mission"),
    'value': ("mission")
  },hashTypes:{'class': "STRING",'id': "STRING",'value': "ID"},hashContexts:{'class': depth0,'id': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"add-organization-type\">\n                    <div class=\"form-group field-types\">\n                        <h3>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.fields.types", options) : helperMissing.call(depth0, "t", "organization_add.fields.types", options))));
  data.buffer.push("</h3>\n                        ");
  stack1 = helpers.each.call(depth0, "type", "in", "potentialTypes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                    <div class=\"form-group field-sectors\">\n                        <h3>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization_add.fields.sectors", options) : helperMissing.call(depth0, "t", "organization_add.fields.sectors", options))));
  data.buffer.push("</h3>\n                        ");
  stack1 = helpers.each.call(depth0, "sector", "in", "potentialSectors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div>\n            <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "buttons.cancel", options) : helperMissing.call(depth0, "t", "buttons.cancel", options))));
  data.buffer.push("\n            </button>\n            <button type=\"submit\" class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("submitting")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "buttons.submit", options) : helperMissing.call(depth0, "t", "buttons.submit", options))));
  data.buffer.push("\n            </button>\n        </div>\n    </form>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["organizations/error"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"organization-header\">\n</div>\n\n<div class=\"organization-row\">\n    <div class=\"organization-filters\"></div>\n\n    <div class=\"organization-details\">\n        <div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n        Sorry, there was an error while loading this organization. Please try\n        again and let us know if this continues to happen.\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["organizations/list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"organizations-list-item\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openOrganization", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n        <div class=\"organizations-list-item-field organizations-list-item-name\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"organizations-list-item-field organizations-list-item-city\">");
  stack1 = helpers._triageMustache.call(depth0, "city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"organizations-list-item-field organizations-list-item-state\">");
  stack1 = helpers._triageMustache.call(depth0, "state_province", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"organizations-list-item-field organizations-list-item-types\">\n            ");
  stack1 = helpers.each.call(depth0, "types", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div class=\"organizations-list-item-field organizations-list-item-sectors\">\n            ");
  stack1 = helpers.each.call(depth0, "sectors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program4(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organizations_list.add.button", options) : helperMissing.call(depth0, "t", "organizations_list.add.button", options))));
  }

  data.buffer.push("<div class=\"organizations-list-headers\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("sortAscending:sort-ascending:sort-descending")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    <div class=\"organizations-list-item-name\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortBy", "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("sortByName:sorted")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organizations_list.headers.name", options) : helperMissing.call(depth0, "t", "organizations_list.headers.name", options))));
  data.buffer.push("\n    </div>\n    <div class=\"organizations-list-item-city\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortBy", "city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("sortByCity:sorted")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organizations_list.headers.city", options) : helperMissing.call(depth0, "t", "organizations_list.headers.city", options))));
  data.buffer.push("\n    </div>\n    <div class=\"organizations-list-item-state\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortBy", "state_province", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("sortByState:sorted")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organizations_list.headers.state", options) : helperMissing.call(depth0, "t", "organizations_list.headers.state", options))));
  data.buffer.push("\n    </div>\n    <div class=\"organizations-list-item-types\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortBy", "types", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("sortByTypes:sorted")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organizations_list.headers.types", options) : helperMissing.call(depth0, "t", "organizations_list.headers.types", options))));
  data.buffer.push("\n    </div>\n    <div class=\"organizations-list-item-sectors\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortBy", "sectors", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("sortBySectors:sorted")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organizations_list.headers.sectors", options) : helperMissing.call(depth0, "t", "organizations_list.headers.sectors", options))));
  data.buffer.push("\n    </div>\n</div>\n\n");
  stack1 = (helper = helpers.collection || (depth0 && depth0.collection),options={hash:{
    'contentBinding': ("controller.content")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "listView", options) : helperMissing.call(depth0, "collection", "listView", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"organizations-list-add-organization\">\n    <span>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organizations_list.add.message", options) : helperMissing.call(depth0, "t", "organizations_list.add.message", options))));
  data.buffer.push("</span>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'id': ("organizations-list-add-organization-button"),
    'class': ("btn btn-primary pull-right")
  },hashTypes:{'id': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organizations.add", options) : helperMissing.call(depth0, "link-to", "organizations.add", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <div class=\"clearfix\"></div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["organizations/loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"organization-header\">\n</div>\n\n<div class=\"organization-row\">\n    <div class=\"organization-filters\"></div>\n\n    <div class=\"organization-details loading\">\n        <div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n        <div class=\"loading-indicator\"></div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["page"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <li class=\"page-sections-list-item\">\n                <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "scrollToSection", "id", {hash:{
    'bubbles': ("false")
  },hashTypes:{'bubbles': "STRING"},hashContexts:{'bubbles': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n            </li>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"text-page\">\n    <div class=\"page-sections\">\n        <h2 class=\"page-sections-header\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.sections.header", options) : helperMissing.call(depth0, "t", "page.sections.header", options))));
  data.buffer.push("</h2>\n        <ul class=\"page-sections-list\">\n            ");
  stack1 = helpers.each.call(depth0, "sections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n    </div>\n    <div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n    ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["sector-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"section-indicator\"></div>\n<div class=\"section-label\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "view.content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<div class=\"clearfix\"></div>\n");
  return buffer;
  
});

Ember.TEMPLATES["share"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"modal fade\" id=\"shareModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"shareModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n            </div>\n            <div class=\"modal-body\">\n                <ul class=\"nav nav-tabs\" role=\"tablist\">\n                    <li class=\"active\"><a href=\"#share\" role=\"tab\" data-toggle=\"tab\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "share.tabs.share", options) : helperMissing.call(depth0, "t", "share.tabs.share", options))));
  data.buffer.push("</a></li>\n                    <li><a href=\"#embed\" role=\"tab\" data-toggle=\"tab\" id=\"embed-tab\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "share.tabs.embed", options) : helperMissing.call(depth0, "t", "share.tabs.embed", options))));
  data.buffer.push("</a></li>\n                </ul>\n\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane active\" id=\"share\">\n                        <div class=\"form-group\">\n                            <div class=\"share-actions\">\n                                <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("facebookUrl")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"btn btn-primary\" target=\"_blank\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "share.actions.facebook", options) : helperMissing.call(depth0, "t", "share.actions.facebook", options))));
  data.buffer.push("</a>\n                                <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("twitterUrl")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"btn btn-primary\" target=\"_blank\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "share.actions.twitter", options) : helperMissing.call(depth0, "t", "share.actions.twitter", options))));
  data.buffer.push("</a>\n                            </div>\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("url"),
    'value': ("previousUrl")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                        </div>\n                    </div>\n                    <div class=\"tab-pane\" id=\"embed\">\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.embedView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});