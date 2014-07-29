Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "title", options) : helperMissing.call(depth0, "t", "title", options))));
  }

function program3(depth0,data) {
  
  
  data.buffer.push("about");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("contact");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("news");
  }

  data.buffer.push("<header>\n    <div id=\"logo\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    <nav id=\"nav\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "news", options) : helperMissing.call(depth0, "link-to", "news", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </nav>\n    <div id=\"tagline\">\n        <div>\n            An action map for food chain workers &amp; organizations.\n        </div>\n        <div>\n            <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setLocale", "en", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">english</a>\n            <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setLocale", "es", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">español</a>\n        </div>\n    </div>\n    <div id=\"search\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers['type-ahead'] || (depth0 && depth0['type-ahead']),options={hash:{
    'data': ("organizations"),
    'name': ("name"),
    'action': ("search"),
    'selection': ("selectedOrganization"),
    'value': ("searchText"),
    'placeholder': ("Search by name, city, state")
  },hashTypes:{'data': "ID",'name': "STRING",'action': "STRING",'selection': "ID",'value': "ID",'placeholder': "STRING"},hashContexts:{'data': depth0,'name': depth0,'action': depth0,'selection': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "type-ahead", options))));
  data.buffer.push("\n    </div>\n    <a id=\"list-button\" href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openOrganizationList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">list</a>\n</header>\n\n<div id=\"map\"></div>\n\n<div id=\"filters\" class=\"full-height\">\n    <h2>filters</h2>\n    <section class=\"filters-type\">\n        <a class=\"pull-right help-button\" href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openHelpOrganizationTypes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">?</a>\n        <h3>organization type</h3>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.OrganizationTypeView", {hash:{
    'content': ("types")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </section>\n    <section class=\"filters-sector\">\n        <h3>industry type</h3>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SectorView", {hash:{
    'content': ("sectors")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </section>\n</div>\n\n<a id=\"add-organization-button\" class=\"map-ui-button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openAddOrganization", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">add org</a>\n<a id=\"share-button\" class=\"map-ui-button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openShare", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">share</a>\n\n<div id=\"popup\" class=\"full-height\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "popup", options) : helperMissing.call(depth0, "outlet", "popup", options))));
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

Ember.TEMPLATES["help-organization-types"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n\n<h2>Organization Types</h2>\n<div class=\"help-organization-types\">\n    <div class=\"help-organization-types-item\">\n        <div class=\"help-organization-types-item-name\">advocacy group</div>\n        <div class=\"help-organization-types-item-text\">\nAenean ac purus feugiat, sagittis lectus id, volutpat magna. Praesent nec purus ut est eleifend viverra nec non nisi. Integer bibendum urna eget leo sodales, interdum suscipit sem blandit. Nam egestas diam odio, vitae ornare justo adipiscing ut. Ut ullamcorper erat ac ipsum viverra, sit amet sollicitudin tellus mollis. Aenean blandit cursus quam. Aenean sagittis cursus est sed dictum. Aenean suscipit nisi id orci viverra, eget adipiscing turpis tincidunt.\n        </div>\n    </div>\n    <div class=\"help-organization-types-item\">\n        <div class=\"help-organization-types-item-name\">service organization</div>\n        <div class=\"help-organization-types-item-text\">\nAenean ac purus feugiat, sagittis lectus id, volutpat magna. Proin nec arcu in leo euismod porta a et tellus. Mauris tristique velit sit amet fringilla viverra. Maecenas nec interdum sem, vel mollis augue. Nulla sed lacus sed est feugiat volutpat. Curabitur sed neque suscipit, ullamcorper augue egestas, tristique mi. Vestibulum quis suscipit lacus, tristique convallis nibh. Nulla suscipit aliquet iaculis. Aenean sagittis cursus est sed dictum. Aenean suscipit nisi id orci viverra, eget adipiscing turpis tincidunt.\n        </div>\n    </div>\n    <div class=\"help-organization-types-item\">\n        <div class=\"help-organization-types-item-name\">workers center</div>\n        <div class=\"help-organization-types-item-text\">\nAenean ac purus feugiat, sagittis lectus id, volutpat magna. Ut ullamcorper erat ac ipsum viverra, sit amet sollicitudin tellus mollis. Aenean blandit cursus quam. Nulla sed lacus sed est feugiat volutpat. Curabitur sed neque suscipit, ullamcorper augue egestas, tristique mi. Vestibulum quis suscipit lacus, tristique convallis nibh. Nulla suscipit aliquet iaculis. Aenean sagittis cursus est sed dictum. Aenean suscipit nisi id orci viverra, eget adipiscing turpis tincidunt.\n        </div>\n    </div>\n    <div class=\"help-organization-types-item\">\n        <div class=\"help-organization-types-item-name\">union</div>\n        <div class=\"help-organization-types-item-text\">\nAenean ac purus feugiat, sagittis lectus id, volutpat magna. Integer bibendum urna eget leo sodales, interdum suscipit sem blandit. Ut ullamcorper erat ac ipsum viverra, sit amet sollicitudin tellus mollis. Proin nec arcu in leo euismod porta a et tellus. Maecenas nec interdum sem, vel mollis augue. Curabitur sed neque suscipit, ullamcorper augue egestas, tristique mi. Nulla suscipit aliquet iaculis. Aenean suscipit nisi id orci viverra, eget adipiscing turpis tincidunt.\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["list-organizations"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"organizations-list-item\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openOrganization", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n        <div class=\"organizations-list-item-name\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"organizations-list-item-city\">");
  stack1 = helpers._triageMustache.call(depth0, "city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"organizations-list-item-state\">");
  stack1 = helpers._triageMustache.call(depth0, "state_province", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"organizations-list-item-types\">\n            ");
  stack1 = helpers.each.call(depth0, "types", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div class=\"organizations-list-item-sectors\">\n            ");
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

  data.buffer.push("<div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n<div class=\"organizations-list-headers\">\n    <div class=\"organizations-list-item-name\">name</div>\n    <div class=\"organizations-list-item-city\">city</div>\n    <div class=\"organizations-list-item-state\">state</div>\n    <div class=\"organizations-list-item-types\">types</div>\n    <div class=\"organizations-list-item-sectors\">sectors</div>\n</div>\n\n<div class=\"organizations-list-add-organization\">\n    <span>Don't see your organization in this list? Add it here.</span>\n    <a id=\"organizations-list-add-organization-button\" class=\"pull-right\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openAddOrganization", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">add my organization</a>\n    <div class=\"clearfix\"></div>\n</div>\n\n");
  stack1 = (helper = helpers.collection || (depth0 && depth0.collection),options={hash:{
    'contentBinding': ("controller.content")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "listView", options) : helperMissing.call(depth0, "collection", "listView", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["organization-type-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "view.content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["organization"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"organization-details-contact-phone\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "model.phone", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"organization-details-contact-email\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "model.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Share");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Add media");
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div class=\"organization-details-media\">\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.CarouselView", {hash:{
    'content': ("model.media")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <section class=\"organization-sectors\">\n                <h3>sectors:</h3>\n                <ul>\n                    ");
  stack1 = helpers.each.call(depth0, "model.sectors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n            </section>\n        ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <li>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n                    ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <section class=\"organization-types\">\n                <h3>types:</h3>\n                <ul>\n                    ");
  stack1 = helpers.each.call(depth0, "model.types", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n            </section>\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"organization-header\">organization type icon</div>\n\n<div class=\"organization-row\">\n    <div class=\"organization-filters\">\n        filters that match organization\n    </div>\n\n    <div class=\"organization-details\">\n        <div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n        <h2>");
  stack1 = helpers._triageMustache.call(depth0, "model.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n        <div class=\"organization-details-contact\">\n            <div>\n                ");
  stack1 = helpers._triageMustache.call(depth0, "model.address_line1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(", ");
  stack1 = helpers._triageMustache.call(depth0, "model.city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(", ");
  stack1 = helpers._triageMustache.call(depth0, "model.state_province", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "model.postal_code", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            ");
  stack1 = helpers['if'].call(depth0, "model.phone", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "model.email", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        <div class=\"organization-details-actions\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-primary")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "share", options) : helperMissing.call(depth0, "link-to", "share", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <a href=\"#\" class=\"btn btn-primary\">Visit</a>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-primary")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization.add_media", options) : helperMissing.call(depth0, "link-to", "organization.add_media", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        ");
  stack1 = helpers['if'].call(depth0, "model.media", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"organization-mission-statement\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit metus quis orci blandit varius. In sed pulvinar nisi. Vivamus sodales viverra magna in consequat. Nullam porta augue vel enim semper, ut tristique metus semper. Sed eget eros tortor. Aliquam semper rutrum eleifend. Fusce et egestas purus. Vestibulum vitae varius justo. Nam sagittis tristique turpis, nec vestibulum eros molestie quis.\n        </div>\n\n        ");
  stack1 = helpers['if'].call(depth0, "model.sectors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "model.types", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["organization/add"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"alert alert-danger\" role=\"alert\">\n                Please enter a valid address that shows up on the map.\n            </div>\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"alert alert-danger\" role=\"alert\">\n                Please enter a name for your organization.\n            </div>\n        ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"alert alert-danger\" role=\"alert\">\n                Please choose a sector.\n            </div>\n        ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"alert alert-danger\" role=\"alert\">\n                Please choose a type.\n            </div>\n        ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"alert alert-danger\" role=\"alert\">\n                Something went wrong. Please try again.\n            </div>\n        ");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"alert alert-success\" role=\"alert\">\n                Successfully added organization.\n            </div>\n        ");
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div class=\"add-organization-location-output-address\">\n                    <div class=\"add-organization-location-output-address-message\">\n                        Your organization will be placed here. Make sure it's in\n                        the right spot on the map.\n                    </div>\n                    <div class=\"add-organization-location-output-address-address\">\n                        ");
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
  data.buffer.push(">Use this address</a>\n                    </div>\n                </div>\n                ");
  return buffer;
  }

function program15(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"add-organization-location-output-error\">\n                    Sorry, we couldn't find the address you added. Could you be\n                    more specific?\n                </div>\n                ");
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

  data.buffer.push("<div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n<h4>Add My Organization</h4>\n\n<div>\n    <form>\n        ");
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
  data.buffer.push("\n            </div>\n            <div class=\"add-organization-location-form\">\n                <div class=\"form-group\">\n                    <label for=\"organization-name\">organization name</label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("organization-name"),
    'value': ("name")
  },hashTypes:{'class': "STRING",'id': "STRING",'value': "ID"},hashContexts:{'class': depth0,'id': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n\n                <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":form-group geocodeError:has-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                    <label for=\"address\">address</label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("address"),
    'value': ("address"),
    'focus-out': ("updateCentroid")
  },hashTypes:{'class': "STRING",'id': "STRING",'value': "ID",'focus-out': "STRING"},hashContexts:{'class': depth0,'id': depth0,'value': depth0,'focus-out': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"address2\">address line 2</label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("address2"),
    'value': ("address2")
  },hashTypes:{'class': "STRING",'id': "STRING",'value': "ID"},hashContexts:{'class': depth0,'id': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n\n                <div class=\"add-organization-location-form-city-state\">\n                    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":form-group :field-city geocodeError:has-error")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                        <label for=\"city\">city</label>\n                        ");
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
  data.buffer.push(">\n                        <label for=\"state\">state</label>\n                        ");
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
  data.buffer.push(">\n                        <label for=\"zip\">zip</label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("zip"),
    'value': ("zip"),
    'focus-out': ("updateCentroid")
  },hashTypes:{'class': "STRING",'id': "STRING",'value': "ID",'focus-out': "STRING"},hashContexts:{'class': depth0,'id': depth0,'value': depth0,'focus-out': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"add-organization-contact\">\n                    <div class=\"form-group field-email\">\n                        <label for=\"email\">email</label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("email"),
    'type': ("email"),
    'value': ("email")
  },hashTypes:{'class': "STRING",'id': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'id': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n                    <div class=\"form-group field-phone\">\n                        <label for=\"phone\">phone</label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("phone"),
    'type': ("phone"),
    'value': ("phone")
  },hashTypes:{'class': "STRING",'id': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'id': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    </div>\n                </div>\n\n                <div class=\"add-organization-type\">\n                    <div class=\"form-group field-types\">\n                        <h3>organization types</h3>\n                        ");
  stack1 = helpers.each.call(depth0, "type", "in", "potentialTypes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                    <div class=\"form-group field-sectors\">\n                        <h3>sectors</h3>\n                        ");
  stack1 = helpers.each.call(depth0, "sector", "in", "potentialSectors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div>\n            <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Close</button>\n            <button type=\"submit\" class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("submitting")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Submit</button>\n        </div>\n    </form>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["organization/add_media"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                        <div class=\"alert alert-danger\" role=\"alert\">\n                            Something went wrong. Please try again.\n                        </div>\n                    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                        <div class=\"alert alert-success\" role=\"alert\">\n                            Successfully added video.\n                        </div>\n                    ");
  }

  data.buffer.push("<div class=\"modal fade\" id=\"addOrganizationMediaModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addOrganizationMediaModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                <h4 class=\"modal-title\" id=\"addOrganizationMediaModalLabel\">Add media</h4>\n            </div>\n            <form>\n                <div class=\"modal-body\">\n                    ");
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
  data.buffer.push(">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Submit</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["organization/add_media_photo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"form-group\">\n    <label>Add a photo</label>\n    ");
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


  data.buffer.push("<div class=\"form-group\">\n    <label>Vimeo or YouTube link</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("url"),
    'value': ("controller.videoUrl")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["page"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n<div class=\"page-sections\">\n    sections\n</div>\n");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n<div class=\"clearfix\"></div>\n");
  return buffer;
  
});

Ember.TEMPLATES["sector-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "view.content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["share"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"modal fade\" id=\"shareModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"shareModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n            </div>\n            <div class=\"modal-body\">\n                <ul class=\"nav nav-tabs\" role=\"tablist\">\n                    <li class=\"active\"><a href=\"#share\" role=\"tab\" data-toggle=\"tab\">Share</a></li>\n                    <li><a href=\"#embed\" role=\"tab\" data-toggle=\"tab\" id=\"embed-tab\">Embed</a></li>\n                </ul>\n\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane active\" id=\"share\">\n                        <div class=\"form-group\">\n                            <div class=\"share-actions\">\n                                <a href=\"#\" class=\"btn btn-primary\">share on facebook</a>\n                                <a href=\"#\" class=\"btn btn-primary\">share on twitter</a>\n                            </div>\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("url"),
    'value': ("controllers.application.previousUrl")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                        </div>\n                    </div>\n                    <div class=\"tab-pane\" id=\"embed\">\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.embedView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});