/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'open-sans, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>',
            'open-sans-condensed, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans-condensed:n7,n3,i3:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"interfaz_contenido.js",
            js+"TweenMax.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo',
                            type: 'rect',
                            rect: ['0', '0', '1000', '586px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "fondo_falso"
                        },
                        {
                            id: 'anima1',
                            type: 'group',
                            rect: ['40', '0', '400', '586', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '0px', '400px', '586px', 'auto', 'auto'],
                                fill: ["rgba(112,112,112,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'anima2',
                            type: 'group',
                            rect: ['493px', '31', '485', '205', 'auto', 'auto'],
                            c: [
                            {
                                id: 'txtDepto',
                                type: 'text',
                                rect: ['0px', '5px', '250px', '200px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-indent: 0%;\">​Debemos<span style=\"font-size: 30px; color: rgb(195, 255, 92); letter-spacing: 0em;\"> </span><span style=\"font-weight: 400; font-size: 30px; word-spacing: 0em; letter-spacing: 0em;\">verificar con el cliente el punto de suministro contrata​​ble,</span> siempre y cuando esté cerrado el expediente de pre contratación que debió gestionarse con la Distribuidora.</p><p style=\"margin: 0px;\"></p>",
                                align: "left",
                                userClass: "menosUno",
                                font: ['open-sans-condensed, sans-serif', [18, "px"], "rgba(112,112,112,1.00)", "300", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'animafin',
                            type: 'group',
                            rect: ['430px', '325px', '485', '205', 'auto', 'auto'],
                            c: [
                            {
                                id: 'txtDeptoCopy',
                                type: 'text',
                                rect: ['108px', '-57px', '308px', '224px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​En caso de bloques de viviendas se debe <span style=\"font-size: 30px;\">revisar si los servicios generales de la finca están contratado</span>s.&nbsp;</p><p style=\"margin: 0px;\">Si no fuera así, es posible que al gestionar el alta de las viviendas el ascensor quede sin servicio, por lo que conviene</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>",
                                align: "right",
                                userClass: "menosUno",
                                font: ['open-sans-condensed, sans-serif', [18, "px"], "rgba(112,112,112,1.00)", "300", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'enlace1',
                                type: 'text',
                                rect: ['318px', '206px', '167px', '27px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">​contratarlos en primer lugar.</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>",
                                align: "center",
                                userClass: "enlacePop enlace1",
                                font: ['open-sans-condensed, sans-serif', [17, "px"], "rgba(0,7,255,1.00)", "300", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'gasN2_P00',
                            type: 'image',
                            rect: ['40px', '23px', '450px', '309px', 'auto', 'auto'],
                            clip: 'rect(0px 399.77734375px 309px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"gasN2_P00.jpg",'0px','0px']
                        },
                        {
                            id: 'txtPrincipal',
                            type: 'text',
                            tag: 'p',
                            rect: ['58px', '347px', '363px', '224px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: left; line-height: 34px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 18px;\">Se seguirán los criterios de contratación establecidos en cada momento y se deberá seleccionar la sociedad correspondiente en la configuración de la oferta.</span><span style=\"font-size: 18px; color: rgb(113, 113, 113);\">&nbsp;&nbsp;</span><span style=\"color: rgb(195, 255, 92); font-size: 35px;\">Quieres volver a revisar cómo hacerlo? </span><span style=\"color: rgb(195, 255, 92); font-size: 22px;\">Accede a los diversos apartados del bloque Criterios de la Home.</span></p><p style=\"margin: 0px; text-align: left; line-height: 22px;\"><span style=\"color: rgb(255, 255, 255); font-size: 18px;\"></span></p><p style=\"margin:0px\">​</p><p style=\"margin: 0px; text-align: left; line-height: 46px;\"><span style=\"color: rgb(255, 255, 255);\"></span><span style=\"font-size: 55px; text-transform: none; color: rgb(195, 255, 92);\"></span></p><p style=\"margin:0px\">​</p>",
                            align: "left",
                            userClass: "",
                            font: ['open-sans-condensed, sans-serif', [24, ""], "rgba(113,113,113,1.00)", "300", "none", "", "break-word", "normal"],
                            textStyle: ["0px", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1000', '586px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(92,136,26,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pagina_edgeActions.js");
})("PAG-8990704");
