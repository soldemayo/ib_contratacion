/**
 * @name        jQuery Glosario Plugin
 * @author      Miguel Palacio
 * @version     1.0
 * @url         
 * @license     GNU
 */

/*jshint browser: true, jquery: true */
(function($){
	"use strict";
	// Creating the plugin
	$.fn.Glosario = function(ficheroTerminos){
		if(this.length !== 1) return this;
		
		var Termino = function (seccionXml, indiceTermino) {
            var palabra = $(seccionXml).attr("palabra").toLowerCase(),
            definicion =  $(seccionXml).find('definicion').text(),
            indice=indiceTermino;
	        return {
	        	palabra: palabra,
	        	definicion: definicion,
	        	indice: indice
	        };
	    },
	    $areaGlosario = this,

		// area del indice de iniciales

		$areaIndiceIniciales,
		$areaIndiceTerminos=$("#area_indice_terminos"),
		$areaTermino=$("#area_termino"),
		terminos;
	    
	    $areaGlosario.mostrarGlosario = function (){
			if ($areaGlosario.css("display") == "none" ) $areaGlosario.bPopup();
			else $areaGlosario.bPopup().close();
		};
		
		$areaGlosario.mostrarTerminoGlosario = function (termino){		
			var terminoEncontrado = jQuery.grep($areaGlosario.data('Glosario'),function (a) { 
				return a.palabra.toLowerCase().indexOf(termino) == 0; 
			});
			if ( terminoEncontrado.length > 0 ) {
				$areaGlosario.bPopup();
				irATermino(terminoEncontrado[0]);
			}
		};
		
	    if ($areaGlosario.data('Glosario')) return $areaGlosario; //POPUP already exists?
        init();
        
		function init(){
			$areaIndiceIniciales = $('<div id="area_indice_iniciales">')
				.appendTo($areaGlosario);
			$areaIndiceTerminos = $('<div id="area_indice_terminos">')
				.appendTo($areaGlosario);
			$areaTermino = $('<div id="area_termino">')
				.appendTo($areaGlosario);
			terminos = new Array();
		
			$areaGlosario.addClass("popup_glosario");
			cargarTerminos(ficheroTerminos);
			cargarAreaIndiceIniciales();
			cargarAreaIndiceTerminos();
			$areaGlosario.data('Glosario', terminos);
		};
		
		function cargarTerminos(ficheroTerminos){
			$.ajax({
				url : "xml/glosario.xml",
			    data : {},
			    type : 'GET',
			    dataType : 'xml',
			    success : function(xml) {
			    	$(xml).find('termino').each(function(indice, valor){
			    		terminos.push( new Termino(valor, indice) );
			    	});
			    },
			    async : false,
			    error : function(jqXHR, status, error) {
			    	alert('Disculpe, existe un problema');
			    }
			});
			terminos.sort( function(a, b){
				var aName = a.palabra.toLowerCase();
				var bName = b.palabra.toLowerCase(); 
				return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
			});
			$(terminos).each(function(indice, term){term.indice=indice;});
		};
		function cargarAreaIndiceIniciales(){
			var abecedario=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
			                'm', 'n', '\u00f1', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
			                'w', 'x', 'y', 'z'];
			$.each(abecedario, function(index, valor){
				var terminosInicial = jQuery.grep(terminos,function (a) { 
					return a.palabra.toLowerCase().indexOf(valor) == 0; 
				});
				if ( terminosInicial.length > 0 ) {
					//Hay palabras con esta inicial, enlace activo
					$("<a href='#' class='inicial_activa'> " + 
							valor.toUpperCase() + 
							"</a>").appendTo($areaIndiceIniciales).click(function(){
								irATermino(terminosInicial[0]);
								});
					
				} else {
					$("<a href='#' class='inicial_pasiva'> " + 
							valor.toUpperCase() + 
							"</a>").appendTo($areaIndiceIniciales);				
				}
			});
		};
		
		function cargarAreaIndiceTerminos(){
			$.each(terminos, function(index, valor){
				$("<a href='#' class='termino'> " +	valor.palabra +	"</a><br>")
					.appendTo($areaIndiceTerminos).click(function(){
						mostrarTermino(valor);
					});
			});
		};
		
		function irATermino(termino){
			$areaIndiceTerminos.scrollTop( 
					$areaIndiceTerminos.find("a").first().outerHeight() * termino.indice);
			mostrarTermino(termino);
		};
		
		function mostrarTermino(termino){
			$areaTermino.empty();
			$areaTermino.append("<p class='termino'> " + termino.palabra + "</p>");
			$areaTermino.append("<p class='definicion'> " + termino.definicion + "</p>");
		};
		
		return this;
	};
}(jQuery));
