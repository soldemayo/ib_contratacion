// JavaScript Documentvar eventosFinAnimacion = 'transitionend webkitTransitionEnd oTransitionEnd ' +
	'otransitionend MSTransitionEnd ' +
	'animationend webkitAnimationEnd oAnimationEnd oAnimationend MSAnimationEnd';
function isTouchDevice() { return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);}

var eventosTab = {
	tabPalante : "sdmTabAvance",
	tabPatras: "sdmTabRetroceso",
	erFoco: "sdmFoco"
};

var claseFoco = "sdmFoco",
	selectorFoco = "." + claseFoco,
	clasePrimerTab = "sdmPrimerTab",
	selectorPrimerTab = "." + clasePrimerTab;

var eventoLoc = "sdmLocucion";

var eventosClick;

if (isTouchDevice()) eventosClick = 'touchstart';
else eventosClick = 'click';

var optsTexFillSecciones = {
	innerTag:'p',
	maxFontPixels : 15,
	explicitHeight : 45
};

function alternaPopup( $dialogo ) {
	if ( $dialogo.dialog("isOpen")) $dialogo.dialog("close");
	else $dialogo.dialog("open");
};

function getLocuciones(){
	if (!( navigator.userAgent.match(/(MSIE 9.0)/g) ? true : false )) {
		return new Locuciones();
	}
	$.ajax({url : 'js/locuciones_ie9.js', dataType : 'script', async : false});
	return new LocucionesIE9();
};

function Curso() {

	//TÃƒÂ­tulo del curso
	this.titulo = null;
	//Indicador de si ha de llevarse control SCORM
	this.esCursoSCORM = false;
    //Lista de items que componen el curso
	this.items = new Array();
	
	//Lista de unidades que componen el curso
	this.unidades = new Array();
	
	//Item que se estÃƒÂ¡ mostrando actualmente
	this.itemActual = null;
	//Lista de items visitados
	this.vistos = new Array();
	
	//Control de avance
	this.$controlAvance = $('#control_avance');
	//Control de retroceso
	this.$controlRetroceso = $('#control_retroceso');
	//Area donde se cargan los items
	this.$areaVisualizacion = $('#contenedor_pagina');
	//Area oculta donde se halla el ÃƒÂ­ndide
	this.$popupIndice = $('#popup_indice');
	//Area donde se escribe el ÃƒÂ­ndide
	this.$areaIndice = $('#area_indice');
	this.$feedbackItemVisto = $('#feedback_item_visto');
	//Area done se muestra el avance de la unidad
	this.$indicador_progreso = $('#indicador_progreso');
	//Parametros de configuracion del curso
	this.paramJson = null;
	//Elemento de audio de la ayuda
	this.$objetoAudioAyuda = undefined;
	//indicador de existencia del menÃƒÂº de herramientas
	this.hayPopupHerramientas = false;
	//Lista de acceso rÃƒÂ¡pido
	this.listaTeclasAccesoRapido = [];
	//Botones de zoom
	this.$btnZoomMas = undefined;
	this.$btnZoomMenos = undefined;
	
	//Flag para establecer si la animanción del home se ha ejecutado
	this.homeRun = undefined;
	
	//Flag para establecer si la animanción de la ayuda se ha ejecutado
	this.helpRun = false;
	
	this.locuciones = getLocuciones();
	
	this.primerUso =true;
	
	this.objetoEdgeAyuda = undefined;
	
	
	//OperaciÃƒÂ³n que recupera y carga el documento JSON de definiciÃƒÂ³n de curso, generando la
	//lista de items
	this.cargarJson = function(){
       var _this = this;
       $.ajax({
    	   url : 'js/contenido_curso.json',
    	   data : {},
    	   type : 'GET',
    	   dataType : 'JSON',
    	   success : function(objetoJson) {
    		   _this.paramJson = objetoJson;
    		   _this.titulo = objetoJson.titulo;
    		   _this.esCursoSCORM = objetoJson.esCursoSCORM == "si";
    		   _this.avance_restringido = objetoJson.avance_restringido;
			   $.each(objetoJson.unidades, function(){
				   _this.unidades.push( new Unidad(this, _this) );
			   });
    	   },
    	   async : false,
    	   error : function(jqXHR, status, error) {
    		   alert('Disculpe, existe un problema');
    	   }
       });
	};
	this.posicionaElementos = function () {
		var $btnHerramientas = $( "#btn_herramientas" );
		 $( "#contenedor1024" ).position({
			  my: "center center",
			  at: "center center",
			  of: "#contenedorFondo"
		});
        
        
        $( window ).resize(function() {
			$( "#contenedor1024" ).position({
			  my: "center center",
			  at: "center center",
			  of: "#contenedorFondo"
		});
            
       });

    
        $( "#indicador_progreso" ).position({
			  my: "center bottom",
			  at: "center bottom-30",
			  of: "#contenedor_pagina"
		});
        
       
        
         $('#contenedor_navegacion').position({
			my: "right top",
			at: "right bottom-35px",
			of: "#contenedor_zoom"
		});
       
       
		/*//Posicionamiento de los titulos
		$( "#contenedor_titulos" ).position({
			  my: "center top",
			  at: "center top",
			  of: "#contenedor_header"
		});*/
		
		//Posicionamiento de las secciones
		$( "#contenedor_secciones" ).position({
			  my: "center top",
			  at: "center bottom",
			  of: "#contenedor_titulos"
		});
		
		///Posicionamiento y activacion del boton de salida
		/*$( "#btn_exit" ).position({
			  my: "right top",
			  at: "right top",
			  of: "#contenedor_titulos"
		});*/
		
		//Posicionamiento del control de retroceso
		/*this.$controlRetroceso.position({
			  my: "right center",
			  at: "left center",
			  of: $("#feedback_items_vistos")
		})*/
					
		//Posicionamiento del control de avance
		/*this.$controlAvance.position({
			  my: "left center",
			  at: "right center",
			  of: $("#feedback_items_totales")
		})*/

		
		//Posicionamiento y activacion del boton de herramientas si hay 
		//alguna herramienta configurada; activacion del popup de 
		//herramientas si existe el botÃƒÂ³n de herramientas
		
		if ( $btnHerramientas.length > 0 ) {
			//Posicionamiento del boton de herramientas
			$btnHerramientas.position({
				my: "right bottom",
				at: "right bottom",
				of: "#contenedor_0"
			});
		}

	};
	this.inicializaInterfaz = function () {
		var _this = this,
			$menuHerramientas = $( "#menu_herramientas" ),
			$btnHerramientas = $( "#btn_herramientas" );
		
		$('#titulo_curso').html(this.titulo);
		document.title = this.titulo;
		
		//Activacion de los tooltips
		$(document).tooltip({
			items: '*:not(.ui-dialog-titlebar-close)'
		});
		
		///Activacion del boton de salida
		$( "#btn_exit" ).on(eventosClick,function() {
			alternaPopup($( "#popup_conf_salir" ));
		});
		
		$( "#popup_conf_salir" ).dialog({
			resizable: false,
			dialogClass: 'clase_dialogo_salida', 
		    height:170,
		    modal: true,
		    autoOpen: false,
		    buttons: {
		    	"SI": function() {
		    		$( this ).dialog( "close" );
		    		if( _this.esCursoSCORM ) {
						_this.actualizaSCORM();
						terminarSesion();
					}
					window.close();
		        },
		        "NO": function() {
		        	$( this ).dialog( "close" );		        	
		        }
		    },
		    open: function() {
		        $('.ui-widget-overlay').addClass('overlay-modal');
                $(".ui-dialog-titlebar-close").hide();
                $('button:visible').attr('tabindex', '1');
		        _this.abiertoPopup();
		        _this.locuciones.play('loc_salir');
		    }, 
		    close: function() {
		    	$('.ui-widget-overlay').removeClass('overlay-modal');
                $(".ui-dialog-titlebar-close").show();
		    	_this.cerradoPopup();
		    }
		});
		this.listaTeclasAccesoRapido.push({tecla: "X", $control:$( "#btn_exit" )});
		//Programación de las locuciones de los botones
		$( "div[aria-describedby='popup_conf_salir'] div.ui-dialog-buttonset button" ).first()
			.attr('sdm_id_locucion','loc_si');
		$( "div[aria-describedby='popup_conf_salir'] div.ui-dialog-buttonset button" ).last()
			.attr('sdm_id_locucion','loc_no');
		//Activacion del control de retroceso
		this.$controlRetroceso.on(eventosClick, function() {
			_this.visualizarAnterior();
		});
		
		//Activacion del control de avance
		this.$controlAvance.on(eventosClick, function() {
			_this.visualizarSiguiente();
		});
		
		//Activacion del boton de herramientas si hay 
		//alguna herramienta configurada; activacion del popup de 
		//herramientas si existe el botÃƒÂ³n de herramientas
		
		if ( this.paramJson.con_indice == undefined &&
			 this.paramJson.con_glosario == undefined &&
			 this.paramJson.con_bibliografia == undefined &&
			 this.paramJson.con_control_audio == undefined &&
			 this.paramJson.con_ayuda == undefined ) {
			
			$btnHerramientas.hide();
			$menuHerramientas.hide();
		} else {
			if ( $btnHerramientas.length > 0 ) {
				//Activacion del boton de herramientas
				$btnHerramientas.on(eventosClick, function() {
					alternaPopup($menuHerramientas);
				});
				
				//ActivaciÃƒÂ³n del menu de herramientas
				$menuHerramientas.dialog({
					height: 140,
				    modal: true,
				    autoOpen: false,
				    show : {effect: 'blind', direction : "down"},
				    position: { my: "right bottom", 
				    	at: "right top", 
				    	of: "#btn_herramientas" },
				    open: function() {
				        $('.ui-widget-overlay')
				        	.addClass('overlay-modal');
				    },
				    close: function() {
				        $('.ui-widget-overlay')
				        	.removeClass('overlay-modal');
				    } 
				});
	  			this.listaTeclasAccesoRapido.push({tecla: "H", $control:$btnHerramientas});
				this.hayPopupHerramientas = true;
			} else {
				//Si no hay boton de herramientas, posicionar el menu 
				/*$menuHerramientas.css({'position': 'absolute',
					'width': '100%',
					'height': '50px'});*/
			}
		}

		//Activa el boton y la funcionalidad de indice si asÃƒÂ­ se indica en el parametro con_indice
	  	//del objeto de configuracion del curso
		if ( this.paramJson.con_indice == undefined ) {
  			$('#btn_indice').hide();
  		} else {
  			//InicializaciÃƒÂ³n del popup de indice
  			this.$popupIndice.dialog({
				width: 'auto',
				height: 'auto',
				dialogClass : 'sinTitulo',
				modal: true,
			    autoOpen: false,
			    show : true,
			    hide : true,
			    position: { 
			    	my: "center center+5%", 
			    	at: "center center", 
			    	of: window },
			    open: function() {
			        $('.ui-widget-overlay').addClass('overlay-modal');
			        _this.abiertoPopup();
			        _this.locuciones.play("loc_indice");
			    },
			    close: function() {
			        $('.ui-widget-overlay')
			        	.removeClass('overlay-modal');
			        _this.cerradoPopup();
                    
			    }
			});
  		
  			$('#btn_indice').on(eventosClick,  function() {
  				if (_this.hayPopupHerramientas) 
  					$menuHerramientas.dialog("close");
  				alternaPopup(_this.$popupIndice);
  			});
  			
  			$('.ui-dialog-titlebar-close').on(eventosClick, 
  					function() {_this.$popupIndice.dialog('close');});
  			
  			this.listaTeclasAccesoRapido.push({tecla: "I", $control:$( "#btn_indice" )});
  		}
      
		//Activa el boton y la funcionalidad de glosario si asÃƒÂ­ se indica en el parametro 
		//con_glosario del objeto de configuracion del curso
		if ( this.paramJson.con_glosario == undefined ) {
  			$('#btn_glosario').hide();
  		} else {
  			$("#popup_glosario").Glosario("xml/glosario.xml")
	  			.on( "dialogopen", function( event, ui ) {
					_this.abiertoPopup();	
				}).on( "dialogclose", function( event, ui ) {
					_this.cerradoPopup();	
				});
  			
  			$("#btn_glosario").on(eventosClick, function() {
  				if (_this.hayPopupHerramientas) 
  					$menuHerramientas.dialog("close");
  				$("#popup_glosario").Glosario().mostrarGlosario();
  			});
  			this.listaTeclasAccesoRapido.push({tecla: "G", $control:$( "#btn_glosario" )});
		}
      
		//Activa el boton y la funcionalidad de bibliografia si asÃƒÂ­ se indica en el parametro 
		//con_bibliografia del objeto de configuracion del curso
		if ( this.paramJson.con_bibliografia == undefined ) {
  			$('#btn_doc').hide();
  		} else {
			$("#popup_doc").Enlaces("xml/enlaces.xml");
			
			$("#btn_doc").on(eventosClick, function() { 
				if (_this.hayPopupHerramientas) 
  					$menuHerramientas.dialog("close");
				$("#popup_doc").Enlaces().mostrarEnlaces(
						function( event, ui ) {
							_this.abiertoPopup();
							_this.locuciones.play("loc_biblioteca");
						},
						function( event, ui ) {_this.cerradoPopup();});
			});
			this.listaTeclasAccesoRapido.push({tecla: "B", $control:$( "#btn_doc" )});
  		}
      
		//Activa el boton y la funcionalidad de control de audio si asÃƒÂ­ se indica en el parametro 
		//con_audio del objeto de configuracion del curso
		if ( this.paramJson.con_audio == undefined ) {
  			$('#btn_audio').hide();
  		} else {
  			$('#btn_audio').on(eventosClick, function() {
  				if (_this.hayPopupHerramientas) 
  					$menuHerramientas.dialog("close");
  				$(this).toggleClass('audio_apagado');
  				_this.actualizarAudio();
  			});
  			this.listaTeclasAccesoRapido.push({tecla: "S", $control:$( "#btn_audio" )});
  		}
      
		//Activa el boton y la funcionalidad de ayuda si asÃƒÂ­ se indica en el parametro 
		//con_control_audio del objeto de configuracion del curso
		if ( this.paramJson.con_ayuda == undefined ) {
  			$('#btn_ayuda').hide();
  		} else {
  			var $popupAyuda = $('#popup_ayuda');
			
			$popupAyuda.dialog({
				height: 620,
				width: 900,
			    modal: true,
                dialogClass: 'clase_dialogo_salida',
			    autoOpen: false,
			    show : true,
			    hide : true,
			    position: { my: "center center", 
			    	at: "center center", 
			    	of: "#contenedor_0" },
			    open: function() {
			    	$('.ui-widget-overlay').addClass('overlay-modal');
			    	_this.abiertoPopup();
			    	_this.locuciones.play("loc_ayuda");
			    	
				    if (_this.helpRun== false) {
			    		$('#contenedor_ayuda')[0].src = './contenido/ayuda/pagina.html';
			    	} else {
						_this.locuciones.cargarTag('audioHelp');
						$("#contenedor_ayuda").contents().find("#Stage_flecha_anterior").trigger('click');
					}
				    _this.actualizarAudio();

			    },
			    close: function() {
				
			        $('.ui-widget-overlay').removeClass('overlay-modal');
			        
			        _this.locuciones.pausarAudios();
			 	    if ( _this.objetoEdgeAyuda != undefined ) {
			 	    	_this.objetoEdgeAyuda.stop();
			 	    }
					
			        _this.locuciones.descargarTag('audioHelp');
					_this.cerradoPopup();
			    } 
			});
			$("#btn_ayuda").on(eventosClick, function() {
				if (_this.hayPopupHerramientas) 
					$menuHerramientas.dialog("close");
				alternaPopup($popupAyuda);		
  			});
  			this.listaTeclasAccesoRapido.push({tecla: "A", $control:$( "#btn_ayuda" )});
  		}
		
        
		//Controles de zoom
		this.$btnZoomMas = $('#btn_zoom_mas'),
		this.$btnZoomMenos = $('#btn_zoom_menos');
		if ( this.$btnZoomMas.length > 0 && this.$btnZoomMenos.length >0) {
			this.$btnZoomMas.on(eventosClick, function() {
				if (_this.hayPopupHerramientas) 
					$menuHerramientas.dialog("close");
				if ( _this.$btnZoomMas.css('display') == 'none') return;
				
				if (_this.$areaVisualizacion.hasClass('clase_zoom_1') )	_this.setZoom(4);
				else _this.setZoom(2);
			});
			
			this.$btnZoomMenos.on(eventosClick, function() {
				if (_this.hayPopupHerramientas) 
					$menuHerramientas.dialog("close");
				if ( _this.$btnZoomMenos.css('display') == 'none') return;
				
				if (_this.$areaVisualizacion.hasClass('clase_zoom_2') )	_this.setZoom(2);
				else _this.setZoom(1);
			}).hide();
			this.listaTeclasAccesoRapido.push({tecla: "k",keyCode: 171, $control:this.$btnZoomMas});
			this.listaTeclasAccesoRapido.push({tecla: "m",keyCode: 173, $control:this.$btnZoomMenos});
		}
		
		var $popupHome = $('#popup_home');       
        		
		$popupHome.dialog({
			height: 643,
			width: 940,
            dialogClass: 'clase_dialogo_home',
		    modal: true,
		    autoOpen: false,
		    show : true,
		    hide : true,
		    position: { my: "center center", 
		    	at: "center center", 
		    	of: "#contenedorFondo" },
		    open: function() {_this.onPopupHomeOpen();},
		    close: function() {
		        $('.ui-widget-overlay').removeClass('overlay-modal');
		        $('#contenedor_0').removeClass('home_activo');
                $('#contenedor_sombra').removeClass('home_activo');
                _this.locuciones.pausarAudios();
                _this.locuciones.descargarTag('audioHome');
                _this.locuciones.stop();
				//_this.cerradoPopup();
		    } 
		});
       
		$("#btn_home").on(eventosClick, function() {
			if (_this.hayPopupHerramientas) 
				$menuHerramientas.dialog("close");
			alternaPopup($popupHome);		
		});
		this.listaTeclasAccesoRapido.push({tecla: "H", $control:$( "#btn_home" )});

		
		$(document).keydown(function( event ) {_this.handlerKeypress(event);});
		//$(window).keydown(function( event ) {_this.handlerKeypress(event);});

		
		$('.ui-dialog-titlebar-close,.bClose').attr({
			tabindex: '100',
			sdm_id_locucion: 'siguiente'});
		
		//Trigger del inicializador del home
		$('#contenedor_home').load(function(){
			_this.homeRun = false;
			_this.locuciones.nuevoTag = "audioHome";
			_this.inicializaIframeEdge(this, "homeRun", 
					function(){
				setTimeout(function(){_this.setUnidadesVistas();}, 10000);
				});
		});
		
		//trigger del inicializador del popup externo
		$('#area_popup_externo').load(function(){
			_this.inicializaIframeEdge(this);
		});
		
		//trigger del inicializador de la ayuda
		$('#contenedor_ayuda').load(function(){
			_this.helpRun = false;
			_this.locuciones.nuevoTag = "audioHelp";
			_this.inicializaIframeEdge(this, "helpRun", function(){
				_this.$objetoAudioAyuda = $("#contenedor_ayuda").contents().find("audio");
				_this.actualizarAudio();
			}, "objetoEdgeAyuda");
		});
		
		
		
		//Al iniciar la reproducciâˆšÃ‰Â¬â‰¥n de la pista de audio, se activa o desactiva
		//dependiendo del estado del botâˆšÃ‰Â¬â‰¥n de control de audio
		//this.$controlAudio.bind("play", function(){_this.actualizarAudio();});
		//$('#contenedor_pagina').bind('load',function(){_this.centrarContenido();});
  	};
  	
  	this.onPopupHomeOpen = function() {
  		var _this = this;
        $('.ui-widget-overlay').addClass('overlay-modal');
        $('#contenedor_0').addClass('home_activo');
        $('#contenedor_sombra').addClass('home_activo');
        $('#indicador_progreso').empty();
		this.abiertoPopup();
		if (!this.locuciones.esAudioActivo) this.locuciones.activarAudioiOS();
		var $contenidoHome = $('#contenedor_home').contents();
		
		if (this.homeRun ) {
			this.actualizarCicloTabIframe($('#contenedor_home'));
			this.setPrimerTabHome();
			this.activarLocuciones($contenidoHome.find('[sdm_id_locucion]'));
			_this.locuciones.cargarTag('audioHome');
			this.setUnidadesVistas();
			
			$contenidoHome.find('#Stage_Loc_carcasa_01,#Stage_Loc_carcasa_02,#Stage_Loc_carcasa_03')
				.css("display", "none");
			var numUnidadesVistas = this.getNumUnidadesVistas(),
				$feedbackHome = undefined;
			if (numUnidadesVistas > 0 ) {
				if (numUnidadesVistas == this.unidades.length) {
					$feedbackHome = $contenidoHome.find('#Stage_Loc_carcasa_03');
				} else {
					$feedbackHome = $contenidoHome.find('#Stage_Loc_carcasa_02');					
				}
				
			} else $feedbackHome = $contenidoHome.find('#Stage_Loc_carcasa_02');
			$feedbackHome.css("display", "");
			this.locuciones.play($feedbackHome.attr('sdm_id_locucion'));
		}	
    };
    
    this.setUnidadesVistas = function() {
    	var _this = this;
    	$('#contenedor_home').contents().find('*[sdm_id_unidad]').each(function(){
    		if( _this.estaCompletadaUnidad($(this).attr('sdm_id_unidad')) ) {
    			$(this).css("opacity", 0.4);
    		}
		});
    };
  	
  	this.inicializaIframeEdge = function( iframeEdge, 
  			flagEdgeFin, 
  			funcionEdgeFin,
  			refComposicion ) {
  		var AdobeEdgeIframe = iframeEdge.contentWindow.AdobeEdge, _this = this;
		AdobeEdgeIframe.bootstrapCallback(function(compId) {
			if ( refComposicion != undefined ) 
				_this[refComposicion]= AdobeEdgeIframe.getComposition(compId).getStage();
			AdobeEdgeIframe.Symbol.bindTimelineAction(compId[0], 
					"stage", 
					"Default Timeline", 
					"complete", 
					function(sym, e){
						if( flagEdgeFin != undefined) _this[flagEdgeFin] = true;
						_this.actualizarCicloTab();
						if( funcionEdgeFin != undefined) funcionEdgeFin();
					});
				
		});
		$(iframeEdge.contentWindow).keydown(function( event ) {
			_this.handlerKeypress(event);
		});		
  	};
  	
  	this.handlerKeypress = function( event){
  		event.preventDefault();
  		
		if ( event.which == $.ui.keyCode.TAB ) {
			var $elemFoco = this.getElemEnFoco();
			if ( $elemFoco.length > 0 ) {
				if ( !event.shiftKey ) $elemFoco.trigger( eventosTab.tabPalante);
				else $elemFoco.trigger( eventosTab.tabPatras);
			} else {
				var primerElemTab = this.getPrimerElemTab(), 
					eventoTab = eventosTab.erFoco;
				if ( primerElemTab.css('display') == 'none') eventoTab = eventosTab.tabPalante;
				primerElemTab.removeClass(clasePrimerTab).trigger(eventoTab);
			}
		}
		if ( event.which == $.ui.keyCode.ENTER ) {
			this.getElemEnFoco().removeClass(claseFoco).css('outline', 'none')
				.trigger("click")
				.addClass(clasePrimerTab);
		}
		$.each(this.listaTeclasAccesoRapido, function(){
			if ( event.which == this.tecla.charCodeAt(0) ||
					event.which == this.keyCode ) {
				this.$control.trigger("click");
			}
		});
		if ( event.which == "C".charCodeAt(0)) this.cerrarPopupAbierto();
	
		var hayZoom = this.$areaVisualizacion.hasClass('clase_zoom_1') || 
			this.$areaVisualizacion.hasClass('clase_zoom_2'),
			$contenedorZoom = $("#contenedor_zoom");
		if ( hayZoom ) {
			switch(event.which) {
		        case $.ui.keyCode.LEFT:
		        	$contenedorZoom.scrollLeft($contenedorZoom.scrollLeft()-10);
		        break;
	
		        case $.ui.keyCode.UP:
		        	$contenedorZoom.scrollTop($contenedorZoom.scrollTop()-10);
		        break;
	
		        case $.ui.keyCode.RIGHT:
		        	$contenedorZoom.scrollLeft($contenedorZoom.scrollLeft()+10);
		        break;
	
		        case $.ui.keyCode.DOWN:
		        	$contenedorZoom.scrollTop($contenedorZoom.scrollTop()+10);
		        break;
	
		        default: return; // allow other keys to be handled
		    }
		} else {
			switch(event.which) {
		        case $.ui.keyCode.LEFT:
		        	if(!this.$controlRetroceso.hasClass("navegacion_desactivada") ) {
		        		this.$controlRetroceso.trigger("click");
		        	};		        
		        	break;
		        case $.ui.keyCode.RIGHT:
		        	if(!this.$controlAvance.hasClass("navegacion_desactivada") ) {
		        		this.$controlAvance.trigger("click");
		        	};		        
		        	break;
		        break;
		        
		        default: return; // allow other keys to be handled
		    }
		}
  	};
  	
  	this.setZoom = function( nivelZoom ) {
  		if ( nivelZoom == 1 ) this.$btnZoomMenos.hide();
  		else this.$btnZoomMenos.show();
  		
  		if ( nivelZoom == 4 ) this.$btnZoomMas.hide();
  		else this.$btnZoomMas.show();
  		
  		this.$areaVisualizacion.removeClass('clase_zoom_1 clase_zoom_2');
  		if ( nivelZoom == 2 ) this.$areaVisualizacion.addClass('clase_zoom_1');
  		if ( nivelZoom == 4 ) this.$areaVisualizacion.addClass('clase_zoom_2');
  		
  		this.$areaVisualizacion.css({'position': 'relative',
			'left': ((this.$areaVisualizacion.width()/2)*(nivelZoom-1)) + 'px',
			'top': ((this.$areaVisualizacion.height()/2)*(nivelZoom-1)) + 'px'});
  	};
  	
  	this.cerrarPopupAbierto = function (){
  		var $popupUIAbiertos = $('div[role=dialog]')
  			.filter(function() {return $(this).css('display') == 'block';}),
  		$bPopupAbiertos = $('.popup_glosario, .popup_enlaces, .popup_contenido')
  			.filter(function() {return $(this).css('display') == 'block';}),
  		idDivPopup = undefined;
  		
  		if ( $popupUIAbiertos.length > 0 ) {
  			idDivPopup = $popupUIAbiertos.attr('aria-describedby');
  		} 
  		if ( $bPopupAbiertos.length > 0 ) idDivPopup = $bPopupAbiertos.attr('id');
  		
  		switch (idDivPopup){
  			case 'menu_herramientas':
  				$( "#btn_herramientas" ).trigger("click");
  				break;
  			case 'popup_indice':
  				$( "#btn_indice" ).trigger("click");
  				break;
  			case 'popup_glosario':
  				$( "#btn_glosario" ).trigger("click");
  				break;
  			case 'popup_doc':
  				$( "#btn_doc" ).trigger("click");
  				break;
  			case 'popup_ayuda':
  				$( "#btn_ayuda" ).trigger("click");
  				break;
  			case 'popup_conf_salir':
  				$( "#btn_exit" ).trigger("click");
  				break;
  		}
  	}
  	
  	this.getPopupAbierto = function (){  		
  		var $popupUIAbiertos = $('div[role=dialog]')
			.filter(function() {return $(this).css('display') == 'block';}),
		$bPopupAbiertos = $('.popup_glosario, .popup_enlaces, .popup_contenido')
			.filter(function() {return $(this).css('display') == 'block';});
		
		if ( $popupUIAbiertos.length > 0 ) {
			return $('#' + $popupUIAbiertos.attr('aria-describedby'));
		} else return $bPopupAbiertos;
  	};

  	//Le setea a los indices de progreso la funcionalidad del click
  	this.setClickListener = function(itemAMostrar) {
		var nextItem,
			tiempoVisualizacion;

		if(!itemAMostrar.visitado && !itemAMostrar.clickSet) {
			//setea propiedad clickSet para evitar que se siga seteando el click
			itemAMostrar.clickSet = true;
			$("#indice_item_" + itemAMostrar.id).on("click", function() {
				itemAMostrar.refCurso.visualizarItem(itemAMostrar)
			});
		}
		
		//obtiene el siguiente item, si es null entonces toma el valor del actual	
		nextItem = getNextItem(itemAMostrar);
		nextItem = nextItem || itemAMostrar;
		//da formato numerico al valor de tiempoVisualizacion
		tiempoVisualizacion = Number(nextItem.tiempoVisualizacion) * 200000;

		if(!nextItem.clickSet) {
			nextItem.clickSet = true;
			setTimeout(function() {
				$("#indice_item_" + nextItem.id).on("click", function() {
					itemAMostrar.refCurso.visualizarItem(nextItem);
				});
			}, tiempoVisualizacion);
		}
	};

	//Devuelve el siguiente item en la lista del curso. Si no hay siguiente, devuelve NULL!
	function getNextItem(itemActual) {
		var itemsCurso = itemActual.refCurso.items;
		var length = itemsCurso.length;
		var nextItem = null;

		for(var i = 0; i < length; i++) {
			if(itemActual.id === itemsCurso[i].id) {
				nextItem = itemsCurso[i+1];
				break;
			}
		}

		return nextItem;
	}
  	  	
	//OperaciÃƒÂ³n que muestra el item recibido como parÃƒÂ¡metro, cargando el item actual en el 
	//atributo vistos, estableciendo el item recibido como item actual, mostrÃƒÂ¡ndolo, 
    //desactivando el control de retroceso si es el primer item o el de avance si es el ÃƒÂºltimo
    //estableciendo la activaciÃƒÂ³n del control de avance y actualizando la informaciÃƒÂ³n de 
    //progreso
    this.visualizarItem = function( itemAMostrar ) {
			//Si el item que se quiere mostrar es el actual en el indice de progreso, se hace return
			//para evitar cargar de nuevo.
			if (this.itemActual === itemAMostrar) {
				return false;
			}

			//Si esta seteado avance_restringido entonces evalua setClickListener
    	//(le da funcionalidad de click a los indices de avance)
			if (itemAMostrar.refCurso.avance_restringido) {
				itemAMostrar.refCurso.setClickListener(itemAMostrar);
			}

			this.itemActual = itemAMostrar;
			if (this.itemActual != null && !this.itemActual.visitado ) this.itemActual.setVisitado();
    	this.locuciones.pausarAudios();
    	if ( this.esPrimerItem( this.itemActual ) ) {
    		this.$controlRetroceso.addClass("navegacion_desactivada");
    	} else this.$controlRetroceso.removeClass("navegacion_desactivada");
  
		if ( this.itemActual.visitado && 
				!this.esUltimoItem(this.itemActual) ) this.habilitaAvance(false);
		else this.deshabilitaAvance();
		
		this.itemActual.visualizar();
  	};
    
	//Operacion que muestra el item cuyo identificador se recibe como parÃƒÂ¡metro
	this.visualizarItemPorId = function( idItemAMostrar ) {
		this.visualizarItem(this.getItem(idItemAMostrar));
	};
	
	//OperaciÃƒÂ³n que muestra el item anterior al item actual de entre los que son navegables
	//mediante los controles de avance y retroceso
   this.visualizarAnterior = function () {
	   var indiceAnterior = jQuery.inArray(this.itemActual, this.items) - 1;
	   if ( indiceAnterior >= 0 ) this.visualizarItem(this.items[indiceAnterior]);
   };
	
   //OperaciÃƒÂ³n que muestra el item posterior al item actual de entre los que son navegables
   //mediante los controles de avance y retroceso
   this.visualizarSiguiente = function () {
	   var indiceSiguiente = jQuery.inArray(this.itemActual, this.items) + 1;
	   if ( indiceSiguiente < this.items.length ) this.visualizarItem(this.items[indiceSiguiente]);
   }; 
	
   //OperaciÃƒÂ³n que activa el control de avance y muestra el popup correspondiente
   this.habilitaAvance = function (conFeedback) {
	   if (this.esUltimoItem(this.itemActual)) return;
	   this.$controlAvance.attr('hidden', false).removeClass("navegacion_desactivada");
	   if( conFeedback ) this.$controlAvance.addClass("activacion_avance");
   };
	
   //OperaciÃƒÂ³n que desactiva el control de avance
   this.deshabilitaAvance = function () {
	   this.$controlAvance.addClass("navegacion_desactivada")
	   		.removeClass("activacion_avance");
   };
	
	//OperaciÃƒÂ³n que retorna cierto si sonido esta activado
	this.esAudioActivo = function() {
		return ( !$('#btn_audio').hasClass('audio_apagado') );
	};
	
	//OperaciÃƒÂ³n que retorna el objeto de audio actualmente activo, o el valor
	//undefined si no hay objeto de audio
	this.getObjetoAudio = function () {
		return $('#contenedor_ayuda:visible').length > 0 ? this.$objetoAudioAyuda : 
				this.itemActual.$objetoAudio;
	};
	
	//OperaciÃƒÂ³n que desactiva o activa el sonido dependiendo del estado del botÃƒÂ³n
	//de control de audio
	this.actualizarAudio = function () {
		this.locuciones.setMute(!this.esAudioActivo());
		var objetoAudio = this.getObjetoAudio();
		if ( objetoAudio == undefined ) return;
		objetoAudio.prop("muted",!this.esAudioActivo() );
	};
	
	//OperaciÃƒÂ³n que desactiva el sonido
	this.desactivaAudio = function () {
		var objetoAudio = this.getObjetoAudio();
		if ( objetoAudio != undefined ) objetoAudio.prop("muted", true );
  	    this.locuciones.setMute(true);	
	};
	
	//OperaciÃƒÂ³n ejecutada al abrir un dialogo, para detener la 
	//animanciÃƒÂ³n y el audio del contenido
	this.abiertoPopup = function (){
		if ( this.itemActual != null ) this.itemActual.pausarReproduccion();
		this.actualizarCicloTab();
	};
	
	//OperaciÃƒÂ³n ejecutada al abrir un dialogo, para reanudar la 
	//animanciÃƒÂ³n y el audio del contenido
	this.cerradoPopup = function (noReanudarVideo){
		if ( $('[role="dialog"]').filter(':visible').length == 0 ) {
			if ( noReanudarVideo == undefined && this.itemActual != null ) {
				this.itemActual.reanudarReproduccion();
			}
			
			this.locuciones.stop();
			
		}
		var _this = this;
		setTimeout(function(){_this.actualizarCicloTab()},100);
	}; 
	/*//Operacion que carga en el elemento DOM de audio el fichero cuya url se recibe
	//como parÃƒÂ¡metro e inicia su reproducciÃƒÂ³n
	this.setClipAudio = function( urlClip ) {
		if ( this.paramJson.con_audio == undefined ) return; 
		this.$controlAudio.attr("src", urlClip );
		this.$controlAudio.load();
	};*/
	
	//OperaciÃƒÂ³n que retorna cierto si el item recibido como parÃƒÂ¡metro es el ÃƒÂºltimo del curso
	this.esUltimoItem = function( item ) {
		return jQuery.inArray(item, this.items) == (this.items.length - 1);
	};
	
	//OperaciÃƒÂ³n que retorna cierto si el item recibido como parÃƒÂ¡metro es el primero del curso
	this.esPrimerItem = function( item ) {
		return jQuery.inArray(item, this.items) == 0;
	};
		
	//OperaciÃƒÂ³n que retorna cierto si quedan items por visualizar
	this.quedanItemsPorVer = function() {
		return !this.esUltimoItem( this.itemActual );
	};
	
	//OperaciÃƒÂ³n que retorna el nÃƒÂºmero del item recibido como parÃƒÂ¡metro de entre todos los 
	//del curso
	this.numOrdenItem = function( item ) {
		return jQuery.inArray(item, this.items) + 1;
	};
   
	//OperaciÃƒÂ³n que retorna el objeto Item correspondiente al identificador de item recibido
	//como parÃƒÂ¡metro
	this.getItem = function( idItem ) {
		var itemEncontrado = [],
			itemsTotales = undefined;
		
		if (this.unidades == undefined) itemsTotales = this.items;
		else {
			itemsTotales = [];
			$.each(this.unidades, 
					function(){ itemsTotales = itemsTotales.concat(this.items);});
		}
		
		itemEncontrado = jQuery.grep(itemsTotales, 
				function (a) { return a.id == idItem; });
		if ( itemEncontrado.length == 0 ) return null;
		else return itemEncontrado[0];
	};
	
	//OperaciÃƒÂ³n que retorna el objeto Unidad correspondiente al identificador de 
	//unidad recibido como parÃƒÂ¡metro
	this.getUnidad = function( idUnidad ) {
		var unidadEncontrada = jQuery.grep(this.unidades, 
				function (a) { return a.id == idUnidad*1; });
		if ( unidadEncontrada.length == 0 ) return null;
		else return unidadEncontrada[0];
	};
	
	this.getNumUnidadesVistas = function() {
		var numUnidadesVistas = 0;
		$.each(this.unidades, function(){
			if (this.estaCompletada()) numUnidadesVistas ++;
		});
		return numUnidadesVistas;
	}
    
	//OperaciÃƒÂ³n que actualiza los datos de seguimiento SCORM si el curso tiene 
	//dicho seguimiento activado
	this.actualizaSCORM = function () {
		if( !this.esCursoSCORM ) return;
		var idItemsVistos = this.getIdItemsVistos(),
			numItemsTotales = this.getNumItemsTotales();
		setPosicion(this.itemActual.id, idItemsVistos, numItemsTotales );

		if ( idItemsVistos.length == numItemsTotales ) setCompletado();
	};
	
	this.getNumItemsTotales = function(){
		if (this.unidades == undefined ) return this.items.length;
		else {
			var numItems = 0;
			$.each(this.unidades, function(){ numItems += this.items.length;});
			return numItems;
		} 
	};
	
	this.getIdItemsVistos = function() {
		var idsVistos = new Array();
		
		if (this.unidades == undefined ) {
			$.each(this.items, function(){
				if ( this.visitado == true ) idsVistos.push(this.id*1); 
			});
		} else {
			$.each(this.unidades, function(){ 
				$.each(this.items, function(){
					if ( this.visitado == true ) idsVistos.push(this.id*1); 
				});
			});
		}
		return idsVistos;
	};
	
	//
	this.activarUnidad = function (idUnidad) {
		this.getUnidad(idUnidad).activar();
	};
	
	this.estaCompletadaUnidad = function (idUnidad) {
		return this.getUnidad(idUnidad).estaCompletada();
	};
	this.alternarHome = function () {
		alternaPopup($('#popup_home'));
	};
    this.alternarGas = function (opcion) {
		
		if (opcion == "electrico"){
		$('#iconoTema').removeClass("iconoGas");
		$('#iconoTema').addClass("iconoE");
		$("#nombreN0").text("Suministro Eléctricooooo")
		}
	};
	
    this.abrirPopupExterno = function( opciones ){
  		var $popupExterno = $('#popup_externo'),
  			_this = this;
  		if (opciones.posicion == undefined) opciones.posicion = ['auto','auto'];
  		if (opciones.dimensiones == undefined ) {
  			opciones.dimensiones = ["",""];
  		}
  		$popupExterno.width(opciones.dimensiones[0]);
  		$popupExterno.height(opciones.dimensiones[1]);

  		$popupExterno.bPopup({
  			content:'iframe',
  			contentContainer:'#area_popup_externo',
            loadUrl: opciones.url,
            position: opciones.posicion,
            fadeSpeed: 400,
            onOpen: function(){_this.abiertoPopup();},
            onClose: function(){_this.cerradoPopup();}
        });
  		$("#bIframe").width(opciones.dimensiones[0]).height(opciones.dimensiones[1]);
  	};

  	this.getElemEnFoco = function(){
  		var $elemFoco = $(selectorFoco)
  			.add(this.$areaVisualizacion.contents().find(selectorFoco))
  			.add( $('#contenedor_home').contents().find(selectorFoco))
  			.add( $('#contenedor_ayuda').contents().find(selectorFoco))
  			.add( $('#area_popup_externo').contents().find(selectorFoco));
 
		return $elemFoco;
  	};
  	
  	this.getPrimerElemTab = function(){
  		var $primerElemFoco = $(selectorPrimerTab)
  			.add(this.$areaVisualizacion.contents().find(selectorPrimerTab))
  			.add( $('#contenedor_home').contents().find(selectorPrimerTab))
  			.add( $('#contenedor_ayuda').contents().find(selectorPrimerTab))
  			.add( $('#area_popup_externo').contents().find(selectorPrimerTab));
 
		return $primerElemFoco;
  	};
  	
  	this.setPrimerElemTab = function(nuevoPrimerElemTab){
  		this.getPrimerElemTab().removeClass(clasePrimerTab);
  		
  		nuevoPrimerElemTab.addClass(clasePrimerTab);
  	};

  	
  	this.actualizarCicloTab = function(){
  		var popUpAbierto = this.getPopupAbierto();
  		
  		if ( popUpAbierto.length == 0 ) this.actualizarCicloTabBase();
  		else {
  			var idPopupAbierto = popUpAbierto.prop('id'),
  				iFramePopup = $('#' + idPopupAbierto + ' iframe'),
  				elemsTab = $('#' + idPopupAbierto + ' *[tabindex]');
  			
  			if (iFramePopup.length > 0) {
  				elemsTab = elemsTab.add(iFramePopup.contents().find('*[tabindex]'));
  			}
  			
  			if (popUpAbierto.hasClass('ui-dialog-content')) {
  				elemsTab = elemsTab.add('.ui-button:visible');
  			}
  			
  			this.setCicloTab(elemsTab);
  		}
  	};
  	
  	this.actualizarCicloTabBase = function(){
	  	this.setCicloTab( $('*[tabindex][tabindex!="-1"]:visible')
	  			.add(this.$areaVisualizacion.contents().find('*[tabindex]')));
  	};
  	
  	this.actualizarCicloTabIframe = function( $iframe ){
  		this.setCicloTab( $iframe.contents().find('*[tabindex]') );
  	};
  	
  	this.setCicloTab = function ( $listaControles ){
  		var _this = this;
  		
  		this.getElemEnFoco().removeClass(claseFoco).css('outline', 'none');
  		this.getPrimerElemTab().removeClass(clasePrimerTab);
  		$listaControles = $listaControles
  			.sort(function(a,b){ return a.tabIndex < b.tabIndex ? -1 : 1; });
  		$listaControles.off( eventosTab.erFoco ).on( eventosTab.erFoco, function() {
  			_this.getElemEnFoco().removeClass(claseFoco).css('outline', 'none');
  			$(this).addClass(claseFoco)
  				.css('outline', 'blue dotted 2px')
  				.trigger(eventoLoc);
  		}).off(eventosTab.tabPalante).off(eventosTab.tabPatras);
  		
  		var anterior = $listaControles.last();
  		
  		$listaControles.each(function(i){
	  		var actual = $(this), curAnterior = anterior;
	  		//console.log( "preparando blur de " + anterior[0].id + "para ir a" +actual[0].id);
			anterior.on( eventosTab.tabPalante, function(){
				if( actual.css('display') == 'none' ) actual.trigger(eventosTab.tabPalante);
				else actual.trigger(eventosTab.erFoco);
				//console.log( "Avanzando de:" + this.id + " a " + actual[0].id);
			});
			actual.on( eventosTab.tabPatras, function(){
				if( curAnterior.css('display') == 'none' ) curAnterior.trigger(eventosTab.tabPatras);
				else curAnterior.trigger(eventosTab.erFoco);
				//console.log( "Retrocediendo de:" + this.id + " a " + anterior[0].id);
			});
			anterior = actual;
		});
  		
  		$listaControles.first().addClass(clasePrimerTab);
  		
  		this.activarLocuciones($listaControles);
  	}; 
  	
  	this.setPrimerTabHome = function (  ){
  		var _this = this,
  			$listaControles = $('#contenedor_home').contents().find('*[tabindex]')
  				.sort(function(a,b){ return a.tabIndex < b.tabIndex ? -1 : 1; });
  		  		
  		$listaControles.each(function(i){
  			var $controlActual = $(this);
  			if( !_this.estaCompletadaUnidad($controlActual.attr('sdm_id_unidad'))) {
  				_this.getPrimerElemTab().removeClass(clasePrimerTab);
  				$controlActual.addClass(clasePrimerTab);
  				return false;
			}
		});
   	}; 
   	
   	this.setProximoTab = function($elemento) {
   		if ($elemento.length != 1) return;
   		this.getElemEnFoco().removeClass(claseFoco).css('outline', 'none');
   		this.getPrimerElemTab().removeClass(clasePrimerTab);
   		$elemento.addClass(clasePrimerTab);
   	};
  	
  	this.inicializaLocuciones = function(){
  		this.activarLocuciones( $('[sdm_id_locucion]')
  				.add( $('#contenedor_home').contents().find('[sdm_id_locucion]')));
  	};
  	
  	this.activarLocuciones = function( $listaElemsLoc) {
  		var _this = this;
  		this.locuciones.stop();
  		$listaElemsLoc.each(function(){
  			var sdmIdLocucion = $(this).attr('sdm_id_locucion'); 
  			if (sdmIdLocucion != undefined ) {
	  			$(this).off(eventoLoc).on(eventoLoc, function(){
	  				_this.locuciones.play($(this).attr('sdm_id_locucion'));
	  			});
  			}
  		});
  	};
  	 	
	this.cargarJson();
	this.inicializaInterfaz();
	this.posicionaElementos();

	//this.inicializaPosicion();
	//alternaPopup($('#popup_home'));
};

//Clase que contiene los atributos de una unidad del curso
function Unidad(objetoJson, refCurso) {
   
	//Identificador del item
	this.id = objetoJson.id;
	//TÃƒÂ­tulo del Item
	this.titulo = objetoJson.titulo;
	//Lista de las secciones de la unidad
	this.secciones = objetoJson.secciones;
	this.longSecciones = objetoJson.longSecciones;
	//Lista de los items de la unidad
	this.items = new Array();
	//Referencia al objeto del curso
	this.refCurso = refCurso;
	//Objetos del Ã­ndice
	this.$indice = undefined;
	
	var _this = this;
	//Creacion del Ã­ndice
	$('<p id=indice_unidad_'+this.id+' class="indice_unidad">' + this.titulo + '</p>')
		.appendTo(this.refCurso.$areaIndice);
	var seccionAnterior = undefined;
	$.each(objetoJson.items, function(){
		this.id = _this.id + ("000" + this.id).slice(-3);
		var idItem = this.id;
		if (seccionAnterior != this.seccion && this.seccion != undefined){
			seccionAnterior = this.seccion;
			$('<a id=indice_seccion_' + 
			  _this.id + '_' + 
			  this.seccion + 
			  ' class="indice_seccion" tabindex=' + (this.seccion*1 + 1) + 
			  ' sdm_id_locucion="loc_seccion_' + ("00" + _this.id).slice(-2) + '_' +
			  ("000" + this.seccion).slice(-3) + '">' + 
			  _this.secciones[this.seccion] + '</a><br>')
			  	.appendTo(_this.refCurso.$areaIndice)
			  	.on(eventosClick, function(){
			  		_this.refCurso.$popupIndice.dialog('close');
			  		_this.refCurso.visualizarItemPorId(idItem);
			  	});
			
		}
		_this.items.push( new Item(this, refCurso) );
	});

	this.refCurso.itemAnterior = _this.items[0];
	this.$indice = this.refCurso.$areaIndice.children().detach();

	//OperaciÃƒÂ³n que establece la posiciÃƒÂ³n inicial de navegaciÃƒÂ³n y los items visitados a partir de la
	//informaciÃƒÂ³n almacenada en la plataforma SCORM
	this.inicializaPosicion = function () {
		var _this = this;
		var itemAVisualizar = undefined;
		if ( this.refCurso.esCursoSCORM ){
			var progreso = getProgresoCurso();
			if ( progreso == null ) {
				this.esCursoSCORM = false;
				itemAVisualizar = this.items[0];
			} else{
				//Carga de la lista de elementos vistos
				$.each( progreso.idsVistos, function(index){_this.getItem(this).setVisitado();});
						
				//Establecimiento de la posiciÃƒÂ³n de inicio
				itemAVisualizar = _this.getItem(progreso.posActual);
			}
		} else itemAVisualizar = _this.items[0];

		if (itemAVisualizar != undefined && $('#popup_home').length == 0 ){
			_this.visualizarItem(itemAVisualizar);
		}
	};
	
	this.activar = function(){
		var _this = this;
		$('#titulo_unidad').text(this.titulo);
		this.refCurso.items = this.items;
		
		this.refCurso.$areaIndice.children().detach();
		this.refCurso.$areaIndice.append( this.$indice );
		
		this.crearTabsSecciones();
		
		$('#feedback_items_totales').html(this.items.length);
		this.refCurso.visualizarItem(this.refCurso.items[0]);	
	};
	
	this.crearTabsSecciones = function(){
		var _this = this,
			anchoSeccion = $('#contenedor_secciones').empty().innerWidth()/this.secciones.length;
		var avance_restringido = this.refCurso.avance_restringido;
		//Recorre los items de la unidad y los appendea a #indicador_progreso.
		//Si el curso no tiene restriccion de avance, le asigna la funcionalidad click.
		if (_this.items.length > 1) {
			_this.items.forEach(function(item) {
				$('<div id="indice_item_' + item.id + '" class="item_contenido item_pendiente" title="' + item.titulo + '" style="display: inline-block;"></div>')
				.appendTo("#indicador_progreso")
				.on("click", function(ev) {
					var itemId,
							item;

					if(!avance_restringido) {
						//Si no esta seteado avance_restringido le da funcionalidad click a todos
						//los indices de avance
						itemId = ev.currentTarget.id.replace('indice_item_', '');
						item = _this.refCurso.getItem(itemId);
						_this.refCurso.visualizarItem(item);
					}
				});
			});
		}

		_this.inicializaPosicion();
        
		if ( this.longSecciones == undefined ) {
			this.longSecciones = [];
			while(this.longSecciones.length != this.secciones.length) {
				this.longSecciones.push(anchoSeccion);
			}
		} else {
			var totalAnchoPrefijado = 0, secsAnchoPrefijado = 0;
			for (i = 0; i < this.longSecciones.length; i++) {
				if ( this.longSecciones[i] != 0) {
					totalAnchoPrefijado += this.longSecciones[i];
					secsAnchoPrefijado++
				}
			}
			anchoSeccion = ($('#contenedor_secciones').innerWidth()-totalAnchoPrefijado)/(this.secciones.length-secsAnchoPrefijado);
			for (i = 0; i < this.longSecciones.length; i++) {
				if ( this.longSecciones[i] == 0) this.longSecciones[i] = anchoSeccion;
			}
		}
		$('.seccion_activa').remove();
        var totalSecciones = this.secciones.length-1;
        var ultimaSeccion = "#linea_secciones_" + (totalSecciones);
       $.each(this.secciones, function(index){
    	   var $elemSeccion = undefined;
    	   anchoSeccion = _this.longSecciones[index];
    	   $elemSeccion = $('<div class="seccion"><p>' + this + '</p><div id="linea_secciones_' +	index +	'" class="linea_secciones"></div></div>')
				.appendTo("#contenedor_secciones")
		  		.outerWidth(anchoSeccion)
		  		.on(eventosClick, function(){
		  			_this.refCurso.visualizarItem(_this.getPrimerItemSeccion(index));
		  		})
		  		.textfill(optsTexFillSecciones);
    	   $('<div id="seccion_' +	index +	'" class="seccion_activa"><div id="sombra"></div><p>' + this + '</p><div id="pico_seccion"></div></div>')
    	   		.appendTo("#contenedor_0")
				.outerWidth(anchoSeccion+1)
				.position({ my: "right top", at: "right+1 top-1", of: $elemSeccion})
                .textfill(optsTexFillSecciones)
				.hide();
		});
        
       $(ultimaSeccion).remove();	
	};
	
	this.estaActivada = function () {
		return _this.items[0].id == _this.refCurso.items[0].id;
	};
	
	this.estaCompletada = function(){
		var hayItemsNoVistos = false;
		
		$.each(this.items, function(){
			if (this.visitado == false) hayItemsNoVistos = true;
		});
		
		return !hayItemsNoVistos;
	};
	
	this.getPrimerItemSeccion = function(indexSeccion){
		var itemEncontrado = jQuery.grep(this.items, 
				function (a) { return a.seccion == indexSeccion; });
		if ( itemEncontrado.length == 0 ) return null;
		else return itemEncontrado[0];
		
	}
};


//Clase que contiene los atributos de un item del curso
function Item(objetoJson, refCurso) {
   
	//Identificador del item
	this.id = objetoJson.id;
	//TÃƒÂ­tulo del Item
	this.titulo = objetoJson.titulo;
	//Tiempo de visualizaciÃƒÂ³n
	this.tiempoVisualizacion = objetoJson.tiempoVisualizacion;
	//Indicador de avance por interacciÃƒÂ³n con elementos
	this.interaccionConElementos = objetoJson.interaccionConElementos == "si";
		
	//Referencia al objeto curso
	this.refCurso = refCurso;
	this.elemPdteVisita = new Array();
	this.visitado = false;
	this.itemIndice = $('<div id=indice_item_' +	
	      	this.id +
  			' class="item_contenido item_pendiente" title="' +
  			this.titulo +
  			'"></div>').appendTo("#area_progreso");
	
	this.itemIndiceTexto = $('<p id=item_indice_texto_' + 
			   this.id +
			   ' class="no_visitado">' +
			   (this.refCurso.items.length+1) + " - " + this.titulo + 
  		       '</p>');
				//.appendTo(this.refCurso.$areaIndice);
	
	this.$objetoAudio = undefined;
	
	//Referencia a la animaciÃƒÂ³n Edge del contenido
	this.objetoEdge = undefined;
	
	//Flag que indica si la animacion ha terminado
	this.edgeRun = undefined;
	
	this.seccion = objetoJson.seccion;
	
	//OperaciÃƒÂ³n que retorna la url de la pÃƒÂ¡gina correspondiente al item           
	this.getUrlPag = function() {
		return "contenido/u" + this.id.slice(0,2) + 
			"/p" + this.id.slice(-2) + "/pagina.html";
	};
	
	
	//OperaciÃƒÂ³n que carga la pÃƒÂ¡gina correspondiente al item en el area de visualizaciÃƒÂ³n 
	this.visualizar = function() {
		var itemAnterior = this.refCurso.itemAnterior;
		var _this = this,
			estadoNuevo = "";
		
		this.refCurso.$areaVisualizacion.unbind("load");
		this.refCurso.$areaVisualizacion.empty();
		this.refCurso.$areaVisualizacion[0].src = this.getUrlPag();
		$('#titulo_item').text(" / " + this.getTitulo());
        if ( $('.seccion_activa:visible').length == 0 || $('.seccion_activa:visible')[0].id != 'seccion_' + this.seccion ) {
        	$('.seccion_activa').fadeOut();
        	$('#seccion_'+this.seccion).fadeIn();
        }
		$('#feedback_items_vistos').html(this.refCurso.numOrdenItem(this));
		
		this.refCurso.$areaVisualizacion.load(function(){
			//console.log("Cargada página:" + _this.id);
			if (this.contentWindow.AdobeEdge != undefined ){
				var AdobeEdgeIframe = this.contentWindow.AdobeEdge;
				AdobeEdgeIframe.bootstrapCallback(function(compId) {
					_this.objetoEdge = AdobeEdgeIframe.getComposition(compId).getStage();
					_this.refCurso.actualizarAudio();
					
					_this.edgeRun = false;
					
					AdobeEdgeIframe.Symbol.bindTimelineAction(compId, 
							"stage", 
							"Default Timeline", 
							"complete", 
							function(sym, e){
								if(!e.elapsed == 0) _this.edgeRun =true;
								_this.refCurso.actualizarCicloTab();
							});
				});
			} else {
				//console.log("No tiene contendio Edge");
				_this.$objetoAudio = 
					_this.refCurso.$areaVisualizacion.contents().find("audio");
				_this.refCurso.actualizarCicloTab();
			}
            
			if ( !_this.visitado ) {
				if (_this.interaccionConElementos ) {
					var cargarListaElementos = _this.elemPdteVisita.length == 0;

					$(this).contents().find(".activacion_obligatoria").each( function() {
						if (cargarListaElementos) _this.elemPdteVisita.push(this.id);
						$(this).on(eventosClick, function() {
							if (_this.elemPdteVisita.indexOf(this.id) == -1) return;
							_this.elemPdteVisita.splice( _this.elemPdteVisita.indexOf(this.id), 1 );
							if (_this.elemPdteVisita.length == 0) {
								_this.setVisto();
							}
						});
					});
					if (_this.elemPdteVisita.length == 0) {
						_this.setVisto();
					}
				}
				if ( _this.tiempoVisualizacion != undefined ) {
					var $animacionObligatoria = $(this).contents().find(".animacion_obligatoria");
					if ( $animacionObligatoria.length == 0 ) {
						setTimeout( function(){_this.setVisto();}, _this.tiempoVisualizacion*1000);
					} else {
						$animacionObligatoria.one(eventosFinAnimacion, function(e) {
							setTimeout( function(){_this.setVisto();},
									_this.tiempoVisualizacion*1000);
						});
					}
				}
				if (_this.interaccionConElementos == undefined && 
						_this.tiempoVisualizacion != undefined ) _this.setVisto(); 
			}
			$(this.contentWindow).keydown(function( event ) {
				_this.refCurso.handlerKeypress(event);
			});
		});

		
		if ( !_this.visitado ) {

			this.refCurso.actualizaSCORM();
			
			//estadoNuevo = "item_actual";
		}// else estadoNuevo = "item_actual_visto";
		
		$('#indice_item_' + this.id).removeClass("item_pendiente item_visitado").addClass("item_actual");
		$('#indice_item_' + this.id).removeClass("no_visitado visitado").addClass("actual");

		if (_this.id !== itemAnterior.id ) {
			$('#indice_item_' + itemAnterior.id).removeClass("item_actual").addClass("item_actual_visto");
		}

		_this.refCurso.itemAnterior = _this;

		//this.itemIndice.removeClass("item_pendiente item_visitado").addClass(estadoNuevo);
		//this.itemIndiceTexto.removeClass("no_visitado visitado").addClass("actual");

		if ( this.refCurso.$feedbackItemVisto.lenght > 0 ) {
			this.refCurso.$feedbackItemVisto.position({
			  my: "center bottom",
			  at: "center top",
			  of: this.itemIndice
			}).removeClass("animacion_item_actual_visto");
		}
   };
   
   //OperaciÃƒÂ³n que establece como visitado el item actual y lo marca como tal en el ÃƒÂ­ndice
   this.setVisitado = function() {
	   var _this = this;
	   
	   this.visitado = true;
	  
	   $('#indice_item_' + this.id).remove();//Class("item_pendiente item_actual_visto").addClass("item_visitado");

	   this.itemIndiceTexto.removeClass("no_visitado actual").addClass("visitado");
	   this.itemIndiceTexto.on(eventosClick, function(){
		   _this.refCurso.$popupIndice.dialog('close');
		   _this.refCurso.visualizarItem( _this );
	   });
	   /*this.itemIndice.removeClass("item_pendiente item_actual_visto").addClass("item_visitado");
	   this.itemIndice.on(eventosClick, function(){
		   _this.refCurso.visualizarItem( _this );
	   });
	   this.itemIndiceTexto.removeClass("no_visitado actual").addClass("visitado");
	   this.itemIndiceTexto.on(eventosClick, function(){
		   _this.refCurso.$popupIndice.dialog('close');
		   _this.refCurso.visualizarItem( _this );
	   });*/
   };
   
   //OperaciÃƒÂ³n que establece como visto el item actual, lo marca como tal en el ÃƒÂ­ndice,
   //actualiza los datos SCORM y habilita el avance
   this.setVisto = function() {
	  
	   this.visitado = true;
	   this.refCurso.actualizaSCORM();
	   this.refCurso.habilitaAvance(false);
	   $('#indice_item_' + this.id).removeClass("item_actual").addClass("item_actual_visto");
	   this.refCurso.$feedbackItemVisto.addClass("animacion_item_actual_visto");
   };
      
   //OperaciÃƒÂ³n que retorna el tÃƒÂ­tulo numerado del item actual
   this.getTitulo = function() {
      return this.titulo;
   };
    
   this.hayAudio = function() {
	   return ( this.$objetoAudio != undefined && this.$objetoAudio.length > 0 );
   };
   

   this.pausarReproduccion = function() {
	   if ( this.objetoEdge != undefined && !this.edgeRun ) this.objetoEdge.stop();
	   if ( this.hayAudio() ) {
		   this.$objetoAudio
		   		.filter(function(){return (this.currentTime > 0 && 
		   				this.currentTime < this.duration);})
		   		.trigger("pause");
	   }
	   this.refCurso.locuciones.pausarAudios();
   };
   
   this.reanudarReproduccion = function() {
	   if ( this.objetoEdge != undefined && !this.edgeRun ) this.objetoEdge.play();
	   if ( this.hayAudio() ) {
		   this.$objetoAudio
		   	.filter(function(){return ( this.paused && 
		   			this.currentTime > 0 && 
		   			this.currentTime < this.duration );})
		   	.trigger("play");
	   }
	   this.refCurso.locuciones.reanudarAudios();
   };
};

	
      
      
