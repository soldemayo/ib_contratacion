/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         registrarAudios('./contenido/home/audio/', [{idClip: 'home_L001', fichero: 'LOC_HOME_DEMENCIA'}, {idClip: 'home_L002', fichero: 'Loc_carcasa_01'}]);
         
          yepnope({nope:['css/home.css']});
         
         $(".noFunciona").children(".hotSpot").prop('disabled',true).addClass("disable"); 
         
         
         $('#Stage_graficoCompleto_gasN2').attr({ sdm_id_unidad: "1", sdm_id_locucion:"LOC_BIENV_VOZENOFF_005"});
         
         $('#Stage_graficoCompleto_electricoN4').attr({ sdm_id_unidad: "1", sdm_id_locucion:"farma"});
         
         $('#Stage_graficoCompleto_criteriosN1').attr({ sdm_id_unidad: "1", sdm_id_locucion:"vivir"});
         
         
         
         $('#Stage_Loc_carcasa_01').attr({ sdm_id_locucion:"Loc_carcasa_01"});
         $('#Stage_Loc_carcasa_02').attr({ sdm_id_locucion:"Loc_carcasa_02"});
         $('#Stage_Loc_carcasa_03').attr({ sdm_id_locucion:"Loc_carcasa_03"});
         
         
          $('.gas').click(function(){
         	alternarSecc("g");
         });
         
          $('.electrico').click(function(){
         	alternarSecc("e");
         });
         
          $('.criterios').click(function(){
         	alternarSecc("c");
         });
         
         
          $('#Stage_graficoCompleto_gasN2').click(function(){
         	activarUnidad($(this).attr('sdm_id_unidad'));
         	sym.stop("fin");
         	alternarHome();
          });
         
          $('#Stage_graficoCompleto_electricoN4').click(function(){
         	activarUnidad($(this).attr('sdm_id_unidad'));
         	sym.stop("fin");
         	alternarHome();
          });
         
           $('#Stage_graficoCompleto_criteriosN1').click(function(){
         	activarUnidad($(this).attr('sdm_id_unidad'));
         	sym.stop("fin");
         	alternarHome();
          });
         
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnDerecha}", "click", function(sym, e) {
         sym.getSymbol("graficoCompleto").play();
         
         // Definir un conmutador para ocultar o mostrar un elemento 
         if (sym.$("btnIzquierda").is(":hidden")) {
         	sym.$("btnIzquierda").show();
         } 
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_btnIzquierda}", "click", function(sym, e) {
         
         sym.getSymbol("graficoCompleto").playReverse();
         
         // Definir un conmutador para ocultar o mostrar un elemento 
         if (sym.$("btnDerecha").is(":hidden")) {
         	sym.$("btnDerecha").show();
         } 
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'flecha'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
         // sym.stop(500); o sym.stop("miEtiqueta");
         sym.stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
         // sym.stop(500); o sym.stop("miEtiqueta");
         sym.stop("normal");
         

      });
      //Edge binding end

   })("flechaDerecha");
   //Edge symbol end:'flechaDerecha'

   //=========================================================
   
   //Edge symbol: 'graficoCompleto'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3552, function(sym, e) {
         
         // Ocultar un elemento 
         sym.getComposition().getStage().$("btnDerecha").hide();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40, function(sym, e) {
         // introducir código aquí
         // Ocultar un elemento 
         sym.getComposition().getStage().$("btnIzquierda").hide();
         
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("graficoCompleto");
   //Edge symbol end:'graficoCompleto'

   //=========================================================
   
   //Edge symbol: 'flechaDerecha_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
         // sym.stop(500); o sym.stop("miEtiqueta");
         sym.stop("over");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
         // sym.stop(500); o sym.stop("miEtiqueta");
         sym.stop("normal");
         

      });
         //Edge binding end

      })("flechaIzquierda");
   //Edge symbol end:'flechaIzquierda'

   //=========================================================
   
   //Edge symbol: 'gasN0'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );
         
         var altoCirculo = sym.getSymbolElement().height();
         var altolabel = sym.$( "label" ).height();
         
         var posicion0 = (altoCirculo / 2) - (altolabel / 2);
         var posicion =  posicion0;
         sym.$( "label" ).css( "top", posicion );
         

      });
      //Edge binding end

   })("gasN0");
   //Edge symbol end:'gasN0'

   //=========================================================
   
   //Edge symbol: 'gasN0_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );
         
         var altoCirculo = sym.getSymbolElement().height();
         var altolabel = sym.$( "label" ).height();
         
         var posicion0 = (altoCirculo / 2) - (altolabel / 2);
         var posicion =  posicion0;
         sym.$( "label" ).css( "top", posicion );

      });
         //Edge binding end

      })("electricoN0");
   //Edge symbol end:'electricoN0'

   //=========================================================
   
   //Edge symbol: 'gasN0_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );
         
         var altoCirculo = sym.getSymbolElement().height();
         var altolabel = sym.$( "label" ).height();
         
         var posicion0 = (altoCirculo / 2) - (altolabel / 2);
         var posicion =  posicion0;
         sym.$( "label" ).css( "top", posicion );
         

      });
         //Edge binding end

      })("criteriosN0");
   //Edge symbol end:'criteriosN0'

   //=========================================================
   
   //Edge symbol: 'rectN1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

   })("rectanguloAzulN1-3LIN");
   //Edge symbol end:'rectanguloAzulN1-3LIN'

   //=========================================================
   
   //Edge symbol: 'rectN1-3LIN_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

   })("rectanguloAzulN1-2LIN");
   //Edge symbol end:'rectanguloAzulN1-2LIN'

   //=========================================================
   
   //Edge symbol: 'rectanguloAzulN1-2LIN_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

   })("rectanguloAzulN1-1LIN");
   //Edge symbol end:'rectanguloAzulN1-1LIN'

   //=========================================================
   
   //Edge symbol: 'CP'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         sym.stop("over");

      });
      //Edge binding end

   })("CP");
   //Edge symbol end:'CP'

   //=========================================================
   
   //Edge symbol: 'rectanguloAzulN1-1LIN_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

   })("circuloAzulN2-1LIN");
   //Edge symbol end:'circuloAzulN2-1LIN'

   //=========================================================
   
   //Edge symbol: 'rectanguloAzulN1-2LIN_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

   })("rectanguloVerdeN1-2LIN");
   //Edge symbol end:'rectanguloVerdeN1-2LIN'

   //=========================================================
   
   //Edge symbol: 'rectanguloVerdeN1-2LIN_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

   })("rectanguloFucsiaN1-2LIN");
   //Edge symbol end:'rectanguloFucsiaN1-2LIN'

   //=========================================================
   
   //Edge symbol: 'rectanguloAzulN1-3LIN_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

   })("rectanguloFucsiaN1-3LIN");
   //Edge symbol end:'rectanguloFucsiaN1-3LIN'

   //=========================================================
   
   //Edge symbol: 'rectanguloAzulN1-1LIN_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

   })("rectanguloFucsiaN1-1LIN");
   //Edge symbol end:'rectanguloFucsiaN1-1LIN'

   //=========================================================
   
   //Edge symbol: 'rectanguloFucsiaN1-2LIN_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      })("labelComun1");
   //Edge symbol end:'labelComun1'

   //=========================================================
   
   //Edge symbol: 'labelComun1_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      })("labelComun2");
   //Edge symbol end:'labelComun2'

   //=========================================================
   
   //Edge symbol: 'labelComun2_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      })("labelComun3");
   //Edge symbol end:'labelComun3'

   //=========================================================
   
   //Edge symbol: 'labelComun2_2'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      })("labelComun4");
   //Edge symbol end:'labelComun4'

   //=========================================================
   
   //Edge symbol: 'labelComun4_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      })("labelComun5");
   //Edge symbol end:'labelComun5'

   //=========================================================
   
   //Edge symbol: 'rectanguloAzulN1-1LIN_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      })("labelSoloTXT-1LIN");
   //Edge symbol end:'labelSoloTXT-1LIN'

   //=========================================================
   
   //Edge symbol: 'rectanguloVerdeN1-2LIN_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      })("rectanguloVerdeN2-1LIN");
   //Edge symbol end:'rectanguloVerdeN2-1LIN'

   //=========================================================
   
   //Edge symbol: 'brilloCirculos'
   (function(symbolName) {   
   
   })("brilloCirculos");
   //Edge symbol end:'brilloCirculos'

   //=========================================================
   
   //Edge symbol: 'circuloAzulN2-1LIN_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      })("circuloVerdeN1-3LIN");
   //Edge symbol end:'circuloVerdeN1-3LIN'

   //=========================================================
   
   //Edge symbol: 'circuloVerdeN1-3LIN_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      })("circuloFucsiaN1-3LIN");
   //Edge symbol end:'circuloFucsiaN1-3LIN'

   //=========================================================
   
   //Edge symbol: 'circuloFucsiaN1-3LIN_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
         //Edge binding end

      })("circuloFucsiaN1-2LIN");
   //Edge symbol end:'circuloFucsiaN1-2LIN'

   //=========================================================
   
   //Edge symbol: 'rectanguloVerdeN2-1LIN_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var title = sym.getSymbolElement().attr( "title" );
         sym.$( "label" ).html( title );

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         sym.stop("normal");

      });
            //Edge binding end

         })("rectanguloFUCSIAN2-1LIN");
   //Edge symbol end:'rectanguloFUCSIAN2-1LIN'

   //=========================================================
   
   //Edge symbol: 'hojaFondo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseover", function(sym, e) {
         
         sym.stop("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
         // sym.stop(500); o sym.stop("miEtiqueta");
         sym.stop("normal");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotSpot}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
         // sym.stop(500); o sym.stop("miEtiqueta");
         sym.stop("normal");
         

      });
      //Edge binding end

   })("hojaFondo");
   //Edge symbol end:'hojaFondo'

})(jQuery, AdobeEdge, "EDGE-23769470");