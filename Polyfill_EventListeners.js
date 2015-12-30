//hasElement?Element.prototype:{};
(function(win, doc, elem){
  var e,d,w=win, p='attachEvent' ;
  if(p in w && !(p='addEventListeners',w[p])){
	d=doc;
	e=elem;
	e[p]=w[p]=d[p]=function(s,f){
		var o=this;
		return o.attachEvent('on'+s,function(evt){
			var e=evt||w.event,g=function(a,b){var p=a,o=e;o[p]=o[p]||b;};
			g('target',e.srcElement);
			g('preventDefault',function(){e.returnValue=false;});
			g('stopPropagation',function(){e.cancelBubble=true;});
			g=e.button;
			e.which=g?g===2?3:g===4?2:g:e.keyCode;
			f.call(o,e);
		});
	};
	p='removeEventListener';
	e[p]=w[p]=d[p]=function(s,f){return this.detachEvent('on'+s,f);};
  };

})(window,document,Element.prototype);
