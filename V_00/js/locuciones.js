function Locuciones() {

	this.listaAudio = undefined;
	this.contenedorAudio = undefined;
	this.locEnPlay = undefined;
	this._esAudioActivo = false;
	this.es_iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/g) ? true : false );
	//this.es_iOS = true;
	this.$audiosContenidoEdge = undefined;
	this.tamPoolAudios = 20;
	this.preservarAudioPrevio = false;
	this.nuevoTag = undefined;
	this._extAudios = ['.mp3', '.ogg'];
	this._tagsBloque = {};

	
	this.inicializaLocuciones = function(){
       var _this = this;
       
       this.contenedorAudio = 
    	   $("<div id=contenedor_audio></div>").appendTo('body');
       $.ajax({
    	   url : 'js/locuciones.json',
    	   data : {},
    	   type : 'GET',
    	   dataType : 'JSON',
    	   success : function(objetoJson) {
			   $.each(objetoJson, function(){
				   _this.crearObjetoAudio(this);
			   });
			   _this.listaAudio = $("#contenedor_audio audio");
    	   },
    	   async : false,
    	   error : function(jqXHR, status, error) {
    		   alert('Disculpe, existe un problema');
    	   }
       });
       
       this.crearAudiosContenidoEdge();
	};
	
	this.crearObjetoAudio = function(objetoJson) {
		var _this = this, 
			$objetoAudio = $('<audio id="' + objetoJson.id + '"></audio>')
				.appendTo(this.contenedorAudio)
				.on( "play", function(){_this.locEnPlay = this; })
				.on( "pause", function(){_this.locEnPlay = undefined;});
		$.each(objetoJson.types, function() {
			var extension = this == "mpeg" ? "mp3" : this;
			$objetoAudio.append($("<source/>", 
					{src: objetoJson.src + '.' + extension}));
		});
	};
	
	this.play = function(idLocucion){
		this.pararLocEnPlay();

		this.contenedorAudio.find('#' + idLocucion ).trigger("play");
	};
	
	this.pararLocEnPlay = function(){
		if (this.locEnPlay != undefined) {
			this.locEnPlay.pause();
			if ( this.locEnPlay.currentTime > 0 ) this.locEnPlay.currentTime = 0;
		}
	};
	
	this.setMute = function(muted){
		this.listaAudio.prop('muted', muted);
		this.$audiosContenidoEdge.prop('muted', muted);
	};
	
	this.stop = function(){
		this.pararLocEnPlay();
	};
	
	this.crearAudiosContenidoEdge = function() {	
		for (i=0; i<this.tamPoolAudios; i++ ) {
			$('<audio class=audio_contenido_edge></audio>')
				.appendTo(this.contenedorAudio);
		}
		this.$audiosContenidoEdge = this.contenedorAudio.find('.audio_contenido_edge' );

	};
	
	this.activarAudioiOS = function() {
		if (!this.es_iOS || this._esAudioActivo) return;
		
		var _this = this;
		$( "#popup_activacion_audio" ).dialog({
			resizable: false,
			dialogClass: 'clase_dialogo_salida', 
		    height:170,
		    modal: true,
		    autoOpen: true,
		    buttons: {
		    	"OK": function() {
					$( this ).dialog( "close" );
					_this.$audiosContenidoEdge.trigger("play").trigger("pause");
					_this._esAudioActivo = true;
		        }
		    },
		    open: function() {
		        $('.ui-widget-overlay').addClass('overlay-modal');
                $(".ui-dialog-titlebar-close").hide();
                $('button:visible').attr('tabindex', '1');
		    }, 
		    close: function() {
		    	$('.ui-widget-overlay').removeClass('overlay-modal');
                $(".ui-dialog-titlebar-close").show();
		    }
		});	
	};
	
	this.getAudioLibre = function(){
		var $audioLibre = this.$audiosContenidoEdge.filter(function(){
			return ($(this).attr('sdm_now_playing') == undefined);
		}).first();
		
		if ($audioLibre.length == 0 ){
			$audioLibre = this.$audiosContenidoEdge
				.sort(function(a,b){
					if (a.ended ) return 1;
					else if (b.ended ) return -1
					else return a.timestamp - b.timestamp;}).first();
			$audioLibre.removeAttr('sdm_now_playing').empty();
		}
		return $audioLibre;
	};
	
	this.getAudioAsignado = function( idAudio ){
		return this.$audiosContenidoEdge.filter('[sdm_now_playing="' + idAudio + '"]');
	};
	
	this.cargarAudio = function(urlBase, paramsAudio){
		//console.log("configurando audio para:" + paramsAudio.idClip);
		
		if ( this.getAudioAsignado(paramsAudio.idClip).length > 0 ) return;
		var $audioAsignado = this.getAudioLibre();
		if ($audioAsignado.length == 0 ){	
			console.log("no hay audio asignado para:" + paramsAudio.idClip);
			return;
		}
		
		$.each(this._extAudios, function(){
			$audioAsignado.append($("<source/>", 
					{src: urlBase + paramsAudio.fichero + this}));
		});
		
		$audioAsignado.attr('sdm_now_playing', paramsAudio.idClip);
		$audioAsignado[0].load();
		$audioAsignado.prop("timestamp", $.now());
	};
	
	this.registrarAudios = function( urlBase, listaAudios ) {
		var _this = this;
		
		this.pausarAudios();
		
		if ( this.nuevoTag != undefined ) {
			this.crearNuevoTag(urlBase, listaAudios);
			this.nuevoTag = undefined;
		} else this.$audiosContenidoEdge.removeAttr('sdm_now_playing').empty();
		
		$.each(listaAudios, function(){_this.cargarAudio(urlBase, this);});
	};
	
	
	this.pausarAudios = function(){
		this.$audiosContenidoEdge
			.filter(function(){return (this.currentTime > 0 && !this.ended);})
			.trigger("pause");
	};
	
	this.pararAudios = function(){
		this.$audiosContenidoEdge
			.filter(function(){return (this.currentTime > 0 && !this.ended);})
			.currentTime = 0
			.trigger("pause");
			
	};
	
	this.reanudarAudios = function(){	
		this.$audiosContenidoEdge.filter(function(){
			return ($(this).attr('sdm_now_playing') != undefined && 
					this.paused && 
					this.currentTime > 0 && 
					!this.ended);
		}).trigger("play");
	};
	
	this.playAudio = function(idClip, restart) {
		var $audioAsignado = this.getAudioAsignado(idClip);
		if( $audioAsignado.prop('readyState') < 4 ) {
			$audioAsignado.one('canplay', function(){$(this).trigger('play');});
		}
		if (restart != undefined && restart) $audioAsignado.prop('currentTime', 0);
		
		$audioAsignado.trigger("play");
	};
	
	this.crearNuevoTag = function(urlBase, listaAudios){
		this._tagsBloque[this.nuevoTag] = { base: urlBase, audios: listaAudios };
	};
	
	this.cargarTag = function(tag){
		var _this = this, 
			datosTag = this._tagsBloque[tag];
		$.each(datosTag.audios, function(){_this.cargarAudio(datosTag.base, this);});
	};
	
	
	this.descargarTag = function(tag){	
		var _this = this;
		$.each( this._tagsBloque[tag].audios, function(){
			_this.getAudioAsignado(this.idClip)
				.removeAttr('sdm_now_playing')
				.empty();
		});
			
	};
	
	this.inicializaLocuciones();
};


