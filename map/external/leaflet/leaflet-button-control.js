/**
 * https://gist.github.com/ejh/2935327
 */

L.Control.Button = L.Control.extend({
  options: {
    position: 'topleft'
  },
  initialize: function (options) {
    this._button = {};
    this.setButton(options);
  },

  onAdd: function (map) {
    this._map = map;
    var container = L.DomUtil.create('div', 'leaflet-control-button');
	
    this._container = container;
    
    this._update();
    return this._container;
  },

  onRemove: function (map) {
  },

  setButton: function (options) {
    var button = {
      'text': options.text || "",           //string
      'iconUrl': options.iconUrl,           //string
      'onClick': options.onClick,           //callback function
      'hideText': !!options.hideText,       //forced bool
      'maxWidth': options.maxWidth || 70,   //number
      'doToggle': options.toggle,			//bool
      'toggleStatus': false					//bool
    };

    this._button = button;
    this._update();
  },
  
  getText: function () {
  	return this._button.text;
  },
  
  getIconUrl: function () {
  	return this._button.iconUrl;
  },
  
  destroy: function () {
  	this._button = {};
  	this._update();
  },
  
  toggle: function (e) {
  	if(typeof e === 'boolean'){
  		this._button.toggleStatus = e;
  	}
  	else{
  		this._button.toggleStatus = !this._button.toggleStatus;
  	}
  	this._update();
  },
  
  _update: function () {
    if (!this._map) {
      return;
    }

    this._container.innerHTML = '';
    this._makeButton(this._button);
 
  },

  _makeButton: function (button) {
    var newButton = L.DomUtil.create('div', 'leaflet-buttons-control-button', this._container);
    if(button.toggleStatus)
    	L.DomUtil.addClass(newButton,'leaflet-buttons-control-toggleon');
        
    var image = L.DomUtil.create('img', 'leaflet-buttons-control-img', newButton);
    image.setAttribute('src',button.iconUrl);
    
    if(button.text !== ''){

      L.DomUtil.create('br','',newButton);  //there must be a better way

      var span = L.DomUtil.create('span', 'leaflet-buttons-control-text', newButton);
      var text = document.createTextNode(button.text);  //is there an L.DomUtil for this?
      span.appendChild(text);
      if(button.hideText)
        L.DomUtil.addClass(span,'leaflet-buttons-control-text-hide');
    }

    L.DomEvent
      .addListener(newButton, 'click', L.DomEvent.stop)
      .addListener(newButton, 'click', button.onClick)
      .addListener(newButton, 'click', this._clicked, this);
    L.DomEvent.disableClickPropagation(newButton);
    return newButton;

  },
  
  _clicked: function() {  //'this' refers to button
  	if(this._button.doToggle){
  		if(this._button.toggleStatus) {	//currently true, remove class
  			L.DomUtil.removeClass(this._container.childNodes[0],'leaflet-buttons-control-toggleon');
  		}
  		else{
  			L.DomUtil.addClass(this._container.childNodes[0],'leaflet-buttons-control-toggleon');
  		}
  		this.toggle();
  	}
  	return;
  }

});