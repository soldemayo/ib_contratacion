/**
 * @name        jQuery Enlaces Plugin
 * @author      Miguel Palacio
 * @version     1.0
 * @url         
 * @license     GNU
 */
function isTouchDevice() { return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);}

var eventosClick;

if (isTouchDevice()) eventosClick = 'touchstart';
else eventosClick = 'click';

/*jshint browser: true, jquery: true */
(function($){
	"use strict";
	// Creating the plugin
	$.fn.Enlaces = function(ficheroEnlaces){
		if(this.length !== 1) return this;
		
		var $areaEnlaces = this;
		
		$areaEnlaces.mostrarEnlaces = function ( funcOnOpen, funcOnClose){
			if ($areaEnlaces.css("display") == "none" )	{
				$areaEnlaces.bPopup({onClose:funcOnClose});
				funcOnOpen();
				$areaEnlaces.find('[tabindex=1]').focus();
			} else {
				$areaEnlaces.bPopup().close();
				funcOnClose();
			}
		};
		
		if ( ficheroEnlaces == undefined ) return $areaEnlaces;
		init(ficheroEnlaces);
        		
		function init(fichEnlaces){
			$areaEnlaces.addClass("popup_enlaces");
			$.ajax({
				url : fichEnlaces,
			    data : {},
			    type : 'GET',
			    dataType : 'xml',
			    success : function(xml) {
			    	$(xml).find('enlace').each(function(indice, seccionXml){
			    		$("<a href='#' tabindex=" +	
			    				(indice + 1) + ">" + 
			    				$(seccionXml).attr('titulo') + 
			    				"</a><br>").appendTo($areaEnlaces)
			    			.on(eventosClick, function(event){
			    				event.preventDefault();
			    				window.open($(seccionXml).attr('url'), 
			    						'newwindow', 
			   							'width=800,height=700'); 
			   					return false;
			   				});
			    	});
			    },
			    async : false,
			    error : function(jqXHR, status, error) {
			    	alert('Disculpe, existe un problema');
			    }
			});
		};
		
		return this;
	};
}(jQuery));