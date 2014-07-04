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

  data.buffer.push("<header>\n    <div id=\"logo\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    <div id=\"search\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("search"),
    'action': ("search"),
    'value': ("searchText"),
    'placeholder': ("Search by name, city, state")
  },hashTypes:{'type': "STRING",'action': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'action': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n    <nav id=\"nav\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </nav>\n    <div id=\"languages\">\n        <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setLocale", "en", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">english</a>\n        <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setLocale", "es", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">español</a>\n    </div>\n</header>\n\n<div id=\"map\"></div>\n\n<div id=\"filters\">\n    Filters / legend\n</div>\n\n<div id=\"popup\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "popup", options) : helperMissing.call(depth0, "outlet", "popup", options))));
  data.buffer.push("\n</div>\n\n<div id=\"page\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "page", options) : helperMissing.call(depth0, "outlet", "page", options))));
  data.buffer.push("\n</div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["organization"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Add media");
  }

  data.buffer.push("<div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n<div>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n<div>");
  stack1 = helpers._triageMustache.call(depth0, "address", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(", ");
  stack1 = helpers._triageMustache.call(depth0, "city", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "organization.add_media", options) : helperMissing.call(depth0, "link-to", "organization.add_media", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["organization/add_media"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

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
  data.buffer.push("\n\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\n                        <li class=\"active\"><a href=\"#video\" role=\"tab\" data-toggle=\"tab\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeTab", "video", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Video</a></li>\n                        <li><a href=\"#photo\" role=\"tab\" data-toggle=\"tab\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeTab", "photo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Photo</a></li>\n                    </ul>\n\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane active\" id=\"video\">\n                            <div class=\"form-group\">\n                                <label>Vimeo or YouTube link</label>\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("url"),
    'value': ("videoUrl")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                            </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"photo\">\n                            <div class=\"form-group\">\n                                <label>Add a photo</label>\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("photo"),
    'class': ("form-control"),
    'type': ("file")
  },hashTypes:{'name': "STRING",'class': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'class': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Submit</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["page"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</div>\n");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});