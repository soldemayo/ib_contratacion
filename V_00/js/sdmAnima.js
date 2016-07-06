var eventosFinTransicion = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend ' +
	'MSTransitionEnd';

var $controlAudio = undefined;

function Animacion( paramAnimacion, esPrimera ) {
	
	this.parametros = paramAnimacion;
	this.esPrimera  = esPrimera;
	this.acciones = paramAnimacion.acciones != undefined ? paramAnimacion.acciones :
		[{ accion : paramAnimacion.accion, valor_final : paramAnimacion.valor_final}];
	this.indexAccion = 0;
	this.$elemento = $( "#" + this.parametros.id_elemento );
	this.idClipAudio = paramAnimacion.idClipAudio;
	
	//Inicialización de la animación en el objeto
	var paramGenerales = {"transition-duration" : this.parametros.duracion + "s" };
	
	if ( this.parametros.funcion_animacion != undefined ) {
		paramGenerales["transition-timing-function"] = this.parametros.funcion_animacion; 
	}
	this.$elemento.addClass(this.parametros.accion ).css(paramGenerales);
	
	this.ejecuta = function () {
		if ( this.parametros.elem_precedente != undefined ) {
			this.programaEjecucion();
			return;
		}
		var acciones = new Array(), 
			_this = this;
		for ( var i = 0; i < this.acciones.length; i++ ){
			var accion = new Accion(this.$elemento, this.acciones[i]);
			acciones.push(accion);
		}
		if ( this.parametros.retardo == undefined ) this.ejecutaAcciones(acciones);
		else {
			setTimeout( function(){_this.ejecutaAcciones(acciones);}, 
					this.parametros.retardo*1000);
		}	
	};
	
	this.programaEjecucion = function () {
		var acciones = new Array(), 
			_this = this;
		for ( var i = 0; i < this.acciones.length; i++ ){
			var accion = new Accion(this.$elemento, this.acciones[i]);
			acciones.push(accion);
		}
			
		$("#"+this.parametros.elem_precedente).one(eventosFinTransicion, 
				function() {
					if ( _this.parametros.retardo == undefined ) {
						_this.ejecutaAcciones(acciones);
					} else {
						setTimeout( function(){_this.ejecutaAcciones(acciones);},
								_this.parametros.retardo*1000);
					}
				});
	};
	
	this.ejecutaAcciones = function( listaAcciones ) {
		if ( this.idClipAudio != undefined ) playAudio(this.idClipAudio);
		
		for(var accion = listaAcciones.pop(); accion != undefined; accion = listaAcciones.pop()) {
			accion.ejecuta();
		}
	};
};

function Accion( $elemAccion, paramAccion ) {
	
	this.$elemento = $elemAccion;
	this.parametros = paramAccion;
	
	this.ejecuta = function() {
		this[this.parametros.accion]();
	};
	
	this.anima_opacidad = function() {
		this.$elemento.css({"opacity" : this.parametros.valor_final});
	};
	
	this.anima_posicion = function() {
		this.$elemento.css({ 
			"left" : this.calculaPosicionHorizontal(),
			"top" : this.calculaPosicionVertical()
		});
	};
	
	this.anima_dimension = function() {
		var dimHorizontal = this.calculaDimHorizontal(),
			dimVertical = this.calculaDimVertical(),
			estilos = {"width" : dimHorizontal.valor, "height" : dimVertical.valor };
		if ( this.parametros.valor_final.centrado != undefined ){
			estilos["left"] = dimHorizontal.desplazamiento;
			estilos["top"] = dimVertical.desplazamiento;
		}
		this.$elemento.css(estilos);
	};
	
	this.anima_orientacion = function() {
		this.$elemento.css({ 
			"transform" : "rotate(" + this.parametros.valor_final + "deg)"
		});
	};
	
	this.anima_desenfoque = function() {
		var valorDesenfoque = "blur(" +
			Math.round( this.parametros.valor_final*
				(this.$elemento.height()+this.$elemento.width())/2 ) + 
			"px)";
		this.$elemento.css({ 
			"-moz-filter" : valorDesenfoque ,
			"-webkit-filter" : valorDesenfoque, 
			"-o-filter" : valorDesenfoque, 
			"-ms-filter" : valorDesenfoque,
			"filter" : valorDesenfoque
		});
	};

	this.calculaPosicionHorizontal  = function() {
		var posicion = 0;

		switch (this.parametros.valor_final.horizontal) {
			case "fuera-izquierda" :	
				posicion = - this.$elemento.outerWidth();
			break;
			case "izquierda" :	
				posicion = 0;
			break;
			case "centro-izquierda" :
				posicion = ($("body").outerWidth(true) - this.$elemento.outerWidth())/4;
			break;
			case "centro" :
				posicion = ($("body").outerWidth(true) - this.$elemento.outerWidth())/2;
			break;
			case "centro-derecha" :
				posicion = (($("body").outerWidth(true) - this.$elemento.outerWidth())/4)*3;
			break;
			case "derecha" :
				posicion = $("body").outerWidth(true) - this.$elemento.outerWidth();
			break;
			case "fuera-derecha" :
				posicion = $("body").outerWidth(true);
			break;
			case undefined :
				posicion = this.$elemento.position().left;
			break;
		}
		return Math.round( posicion ) + "px";;
	};
	
	this.calculaPosicionVertical  = function() {
		var posicion = 0;

		switch (this.parametros.valor_final.vertical) {
			case "fuera-arriba" :	
				posicion = - this.$elemento.outerHeight();
			break;
			case "arriba" :	
				posicion = 0;
			break;
			case "centro-arriba" :
				posicion = ($("body").outerHeight(true) - this.$elemento.outerHeight())/4;
			break;
			case "centro" :
				posicion = ($("body").outerHeight(true) - this.$elemento.outerHeight())/2;
			break;
			case "centro-abajo" :
				posicion = (($("body").outerHeight(true) - this.$elemento.outerHeight())/4)*3;
			break;
			case "abajo" :
				posicion = $("body").outerHeight(true) - this.$elemento.outerHeight();
			break;
			case "fuera-abajo" :
				posicion = $("body").outerHeight(true);
			break;
			case undefined :
				posicion = this.$elemento.position().top;
			break;
		}
		return Math.round( posicion ) + "px";
	};
	
	this.calculaDimHorizontal  = function() {
		if ( this.parametros.valor_final.horizontal == undefined ) {
			this.parametros.valor_final.horizontal = 1;
		}
		var anchoActual = this.$elemento.width(),
			anchoFinal = anchoActual*this.parametros.valor_final.horizontal;

		return { valor : Math.round( anchoFinal )+"px", 
			desplazamiento : Math.round( this.$elemento.position().left +
					(anchoActual-anchoFinal)/2 )+"px" };
	};
	
	this.calculaDimVertical  = function() {
		if ( this.parametros.valor_final.vertical == undefined ) {
			this.parametros.valor_final.vertical = 1;
		}
		var altoActual = this.$elemento.height(),
			altoFinal = altoActual*this.parametros.valor_final.vertical;

		return { valor : Math.round( altoFinal )+"px", 
			desplazamiento : Math.round( this.$elemento.position().top +
					(altoActual-altoFinal)/2 )+"px" };
	};
};

registrarAudiosAnimaciones = function(listaAnimaciones){
	var audios = [];
	$.each(listaAnimaciones, function(i){
		if ( this.audio != undefined ){
			this.idClipAudio = "sdmAnima_" + i;
			audios.push({ idClip: this.idClipAudio, fichero: this.audio });
		}
    });
	
	if (audios.length > 0) registrarAudios("", audios );
};

lanzaAnimaciones = function(){
	$.ajax({
        url : 'js/sdmAnima.json',
        data : {},
        type : 'GET',
        dataType : 'JSON',
        success : function(listaAnimaciones) {
        	registrarAudiosAnimaciones(listaAnimaciones);
        	$.each(listaAnimaciones, function(i){
        		(new Animacion(this, i==0)).ejecuta();
            });
        },
        async : false,
        error : function(jqXHR, status, error) {
            alert('Disculpe, existe un problema');
        }
    });
};