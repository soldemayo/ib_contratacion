/*
SCOFunction BAYER

Características y línea para ActionScript:
-----------------------------------------------
1) Session_time: Tiempo de permanencia del último acceso.
Automático

2) Lesson_location: última página visitada.
_root.getURL("javascript:getLocation('modulo3')"); //Obtiene la última página visitada para el ID modulo3
_root.getURL("javascript:setLocation('10')"); // Fija la página 10 como visitada

3) lesson_status: Estado del SCO (incompleted, passed y failed)
a) Cambia el modulo a completo
_root.getURL("javascript:setCompleted()"); 

b) Agrega el puntaje y evalúa si en el promedio total de los ejericios es mayor al 74%
cod_ejercicio = "3";
ultimo="1";
_root.getURL("javascript:setObScore(\'"+cod_ejercicio+"\',\'"+Porcentaje+"\',\'"+ultimo+"\')");

4) cmi.objectives.'+nro_objetivo+'.score.raw: Puntaje del ejercicio número "nro_objetivo".
a) Agrega el puntaje (Porcentaje) del ejercicio (cod_ejercicio)
cod_ejercicio = "3";
_root.getURL("javascript:setObScore(\'"+cod_ejercicio+"\',\'"+Porcentaje+"\')"); 

5)  setComment(comentario) para agregar notas desde la aplicación en flash.
Se agrega la siguiente línea en AS
_root.getURL("javascript:setComment(\'"+txt+"\')");

Característica Particular
----------------------------

Evalúa si es correcto o incorrecto (passed o failed) si el promedio de todos los ejercicios es  mayor o igual a un 75% del total, por
lo que usa la variable 'ultimo' en la página que se decida dar por finalizado el modulo.

*/

var ocurre_error = "nada";
var api = null;
var startDate;
var Q_contador = 0;
// set this to false to turn debugging off and get rid of those annoying alert boxes.
var _Debug = false;


/*******************************************************************************
 **  Comprobamos que el LMS esté inicializado.
 **  Si no, lo inicializamos
 **  nro_objetivo  cantidad de ejercicios
 *******************************************************************************/

function inicializaSCORM() {
	var result = false;
    api = getAPIHandle();
	doInitialize(); //AJG 15-12-09: añadido para que el test de ADL no arroje error. La comprobación posterior LMSIsInitialized se mantiene por si acaso.
	msg = 'No se pudo conectar con el LMS, cierre esta ventana y vuelva a intentarlo.\n\nSi el problema persiste, pongase en contacto con el administrador del curso.';
    if (api == null) {
        window.status = msg;
		//mensaje_alerta("index",msg);
        return false;
    }
    else	{
        if (LMSIsInitialized() == false) {
            if (_Debug == true) {
				window.status = msg;
				//mensaje_alerta("index",msg);
            }
            result = doInitialize();
        }
        else {
            if (_Debug == true) {
            	alert('inicializa(): LMS ya inicializado.');
            }
            result = true;
        }
    }
    return result;
}

function getProgresoCurso() {	
	if (inicializaSCORM() == true) {
		startTimer();  
		var lesson_status = doGetValue("cmi.core.lesson_status");
		if (lesson_status != "completed" && lesson_status != "passed"){
					doSetValue("cmi.core.lesson_status", "incomplete");
		}
	} else {
		alert("Error en la inicialización de la plataforma SCORM");
		return null;
	}
		
	var posicionInicial = doGetValue("cmi.core.lesson_location"),
		itemsVisitados = doGetValue('cmi.suspend_data'),
		arrItemsVisitados;
		
	if(posicionInicial == undefined || posicionInicial == ""){
		posicionInicial = 0;
	}
		
	if(itemsVisitados != undefined && itemsVisitados != "" ){
		arrItemsVisitados = JSON.parse(itemsVisitados);
	} else arrItemsVisitados = new Array();
	
	if (_Debug) {
		alert('posInicial :' + posicionInicial + 
				';idsVistos :' + arrItemsVisitados + 
				';resUnidades :' + resultadoUnidades);
    };
	return { 
		posActual : posicionInicial, 
		idsVistos : arrItemsVisitados
	};
}

function setPosicion(itemActual, itemsVistos, totalItems) {
	doSetValue("cmi.core.lesson_location", itemActual+"");
	doSetValue("cmi.suspend_data", JSON.stringify(itemsVistos));
	
	if (totalItems!=undefined) {
		doSetValue("cmi.core.score.raw", (itemsVistos.length/totalItems)*100);
	}
	
	doCommit();
}

function setCompletado(){
	doSetValue("cmi.core.lesson_status", "completed");
	doCommit();
}

function terminarSesion() {
    doSetValue( "cmi.core.exit", "" );
    computeTime();
    exitPageStatus = true;
    doTerminate();
    //result = doLMSFinish();
}

function startTimer() {
    startDate = new Date().getTime();
}

function computeTime() {
    if ( startDate != 0 ) {
        var currentDate = new Date().getTime();
        var elapsedSeconds = ( (currentDate - startDate) / 1000 );
        var formattedTime = convertTotalSeconds( elapsedSeconds );
    }
    else 	{
        formattedTime = "00:00:00.0";
    }

    if (_Debug == true) {
        alert("computeTime(): formattedTime == "+formattedTime);
    }
	alert("computeTime(): formattedTime == "+formattedTime);
    doSetValue( "cmi.core.session_time", formattedTime );
}
/*******************************************************************************
 ** this function will convert seconds into hours, minutes, and seconds in
 ** CMITimespan type format - HHHH:MM:SS.SS (Hours has a max of 4 digits &
 ** Min of 2 digits
 *******************************************************************************/
function convertTotalSeconds(ts) {
    var sec = (ts % 60);

    ts -= sec;
    var tmp = (ts % 3600);  //# of seconds in the total # of minutes
    ts -= tmp;              //# of seconds in the total # of hours

    // convert seconds to conform to CMITimespan type (e.g. SS.00)
    sec = Math.round(sec*100)/100;

    var strSec = new String(sec);
    var strWholeSec = strSec;
    var strFractionSec = "";

    if (strSec.indexOf(".") != -1) {
        strWholeSec =  strSec.substring(0, strSec.indexOf("."));
        strFractionSec = strSec.substring(strSec.indexOf(".")+1, strSec.length);
    }

    if (strWholeSec.length < 2) {
        strWholeSec = "0" + strWholeSec;
    }
    strSec = strWholeSec;

    if (strFractionSec.length) {
        strSec = strSec+ "." + strFractionSec;
    }


    if ((ts % 3600) != 0 )
        var hour = 0;
    else var hour = (ts / 3600);
    if ( (tmp % 60) != 0 )
        var min = 0;
    else var min = (tmp / 60);

    if ((new String(hour)).length < 2)
        hour = "0"+hour;
    if ((new String(min)).length < 2)
        min = "0"+min;

    var rtnVal = hour+":"+min+":"+strSec;

    if (_Debug == true) {
        alert("convertTotalSeconds(): rtnVal == "+rtnVal);
    }

    return rtnVal;
}