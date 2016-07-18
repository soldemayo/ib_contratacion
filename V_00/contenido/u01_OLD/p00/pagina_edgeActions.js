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
         
         yepnope({nope:['css/pagina.css']});
         
         sym.$("fondo").hide();
         registrarAudios('./contenido/u01/p03/audio/', [{idClip: 'L001', fichero: 'LOC_U1_03'}]);
         
         
         var  mc1 = sym.$("anima1")
         var  mc2 = sym.$("anima2")
         var  mcFin = sym.$("animafin")
         
         TweenMax.from(mc1, 1, {opacity:0, delay:0.2});
         TweenMax.from(mc2, 1, {opacity:0, x:20, delay:1});
         TweenMax.from(mcFin, 1, {opacity:0, y:100, delay:2});
         
         
           $('#Stage_enlace1').click(function(){
         	abrirPopupExterno({dimensiones: [600,400], url: "contenido/u01/p00/pagina.html"});
          });

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "PAG-8990704");