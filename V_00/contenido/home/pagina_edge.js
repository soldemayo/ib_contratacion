/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['open-sans-condensed, sans-serif']='<script src=\"http://use.edgefonts.net/open-sans-condensed:n7,n3,i3:all.js\"></script>';
    fonts['OSC']='<link href=\'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700,300italic\' rel=\'stylesheet\' type=\'text/css\'>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'tituloYlogo',
                type: 'group',
                rect: ['521px', '594px','444','52','auto', 'auto'],
                c: [
                {
                    id: 'tituloCurso',
                    type: 'text',
                    rect: ['158px', '5px','auto','auto','auto', 'auto'],
                    text: "Procedimiento de Ventas y Contratación",
                    align: "left",
                    userClass: "menoUno",
                    font: ['open-sans-condensed, sans-serif', 20, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
                },
                {
                    id: 'subtituloCurso',
                    type: 'text',
                    rect: ['339px', '25px','auto','auto','auto', 'auto'],
                    text: "Canal Teléfono",
                    align: "right",
                    font: ['open-sans-condensed, sans-serif', 20, "rgba(255,255,255,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'logoIBER',
                    type: 'image',
                    rect: ['-506px', '8px','121px','38px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"logoIBER.png",'0px','0px']
                },
                {
                    id: 'Rectangle2',
                    type: 'rect',
                    rect: ['442px', '8px','2px','37px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [1,"rgb(0, 255, 255)","none"]
                }]
            },
            {
                id: 'graficoCompleto',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'fondoDesvaneceDER',
                type: 'image',
                rect: ['965px', '0px','15px','643px','auto', 'auto'],
                borderRadius: ["0px", "0px", "0px", "0px"],
                opacity: 0.4,
                fill: ["rgba(0,0,0,0)",im+"fondoDesvanece.png",'0px','0px'],
                transform: [[],['180']]
            },
            {
                id: 'fondoDesvaneceIZQ',
                type: 'image',
                rect: ['0px', '0px','15px','643px','auto', 'auto'],
                opacity: 0.4,
                fill: ["rgba(0,0,0,0)",im+"fondoDesvanece.png",'0px','0px']
            },
            {
                id: 'btnDerecha',
                type: 'rect',
                rect: ['879', '280','auto','auto','auto', 'auto']
            },
            {
                id: 'btnIzquierda',
                type: 'rect',
                rect: ['606', '87','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'btnIzquierda',
                symbolName: 'flechaIzquierda',
                autoPlay: {

                }
            },
            {
                id: 'btnDerecha',
                symbolName: 'flechaDerecha',
                autoPlay: {

                }
            },
            {
                id: 'graficoCompleto',
                symbolName: 'graficoCompleto',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_subtituloCurso}": [
                ["style", "top", '25px'],
                ["style", "text-align", 'right'],
                ["style", "text-decoration", 'none'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '339px'],
                ["style", "font-size", '20px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '8px'],
                ["style", "border-width", '1px'],
                ["style", "height", '37px'],
                ["style", "border-style", 'none'],
                ["style", "left", '442px'],
                ["style", "width", '2px']
            ],
            "${_btnIzquierda}": [
                ["style", "left", '15px'],
                ["style", "top", '280px']
            ],
            "${_graficoCompleto}": [
                ["style", "left", '-10px'],
                ["transform", "scaleX", '0.98']
            ],
            "${_fondoDesvaneceDER}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '643px'],
                ["style", "opacity", '0.4'],
                ["style", "left", '965px'],
                ["style", "width", '15px']
            ],
            "${_btnDerecha}": [
                ["style", "left", '919px']
            ],
            "${_tituloCurso}": [
                ["style", "line-height", '23px'],
                ["style", "text-align", 'left'],
                ["style", "top", '5px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "text-decoration", 'none'],
                ["style", "left", '158px'],
                ["style", "font-size", '20px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '980px'],
                ["style", "height", '643px'],
                ["style", "overflow", 'hidden']
            ],
            "${_tituloYlogo}": [
                ["style", "left", '521px'],
                ["style", "top", '594px']
            ],
            "${_fondoDesvaneceIZQ}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '643px'],
                ["style", "opacity", '0.4'],
                ["style", "left", '0px'],
                ["style", "width", '15px']
            ],
            "${_logoIBER}": [
                ["style", "left", '-506px'],
                ["style", "top", '8px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 109,
            autoPlay: true,
            timeline: [
                { id: "eid417", tween: [ "style", "${_btnDerecha}", "left", '919px', { fromValue: '919px'}], position: 109, duration: 0 },
                { id: "eid8", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_btnDerecha}', [0] ], ""], position: 0 },
                { id: "eid15", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_graficoCompleto}', ['centro'] ], ""], position: 0 },
                { id: "eid23", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_btnIzquierda}', [] ], ""], position: 0 }            ]
        }
    }
},
"flechaDerecha": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'flechaOver2',
                    type: 'image',
                    rect: ['-10px', '-18px', '66px', '116px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flechaOver.png', '0px', '0px', '66px', '116px']
                },
                {
                    id: 'flecha',
                    type: 'image',
                    rect: ['0px', '0px', '46px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flecha.svg', '0px', '0px', '46.000001637209px', '80px']
                },
                {
                    id: 'flechaOver',
                    type: 'image',
                    rect: ['0px', '0px', '46px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flechaOver2.png', '0px', '0px', '46px', '80px']
                },
                {
                    rect: ['0px', '0px', '46px', '80px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hotSpot',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '46px']
            ],
            "${_flechaOver}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_flechaOver2}": [
                ["style", "top", '-18px'],
                ["style", "left", '-10px'],
                ["style", "overflow", 'visible']
            ],
            "${_flecha}": [
                ["style", "top", '0px'],
                ["style", "background-size", [46.000001637209,80], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 250
            },
            timeline: [
                { id: "eid1180", tween: [ "style", "${_flechaOver}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 250 }            ]
        }
    }
},
"graficoCompleto": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '940px', '643px', 'auto', 'auto'],
                    id: 'graficoCompleto',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'HOJA',
                        type: 'group',
                        rect: ['426px', '202px', '147', '245', 'auto', 'auto'],
                        c: [
                        {
                            id: 'hojaBtn',
                            type: 'rect',
                            rect: ['2', '13', 'auto', 'auto', 'auto', 'auto']
                        }]
                    },
                    {
                        id: 'lineAzul',
                        type: 'image',
                        rect: ['449px', '189px', '73px', '81px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/lineAzul.svg', '0px', '0px']
                    },
                    {
                        id: 'gasN0',
                        type: 'rect',
                        title: 'Suministro Gas',
                        rect: ['1012', '99', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'lineVerde',
                        type: 'image',
                        rect: ['565px', '362px', '85px', '20px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/lineVerde.svg', '0px', '0px']
                    },
                    {
                        id: 'electricoN0',
                        type: 'rect',
                        title: 'Suministro Eléctrico',
                        rect: ['238px', '266px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'lineFucsia',
                        type: 'image',
                        rect: ['357px', '364px', '71px', '20px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/lineFucsia.svg', '0px', '0px']
                    },
                    {
                        id: 'criteriosN0',
                        type: 'rect',
                        title: 'Criterios',
                        rect: ['407px', '94px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'CRITERIOS',
                        type: 'group',
                        rect: ['277px', '12px', '612', '207', 'auto', 'auto'],
                        c: [
                        {
                            id: 'lineasDERCopy5',
                            type: 'group',
                            rect: ['292px', '23px', '28', '127', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['13px', '3px', '3px', '123px', 'auto', 'auto'],
                                userClass: 'lineA1',
                                id: 'lineaAVN1Copy12',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['0px', '124px', '16px', '3px', 'auto', 'auto'],
                                userClass: 'lineA1',
                                id: 'lineaAHN1Copy43',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['14px', '63px', '14px', '3px', 'auto', 'auto'],
                                userClass: 'lineA1',
                                id: 'lineaAHN1Copy42',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['14px', '3px', '14px', '3px', 'auto', 'auto'],
                                userClass: 'lineA1',
                                id: 'lineaAHN1Copy41',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['14px', '124px', '14px', '3px', 'auto', 'auto'],
                                userClass: 'lineA1',
                                id: 'lineaAHN1Copy40',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            }]
                        },
                        {
                            id: 'punteadas',
                            type: 'group',
                            rect: ['474px', '23px', '28', '127', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['14px', '4px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], [], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy11',
                                stroke: [3, 'rgb(0, 255, 255)', 'dotted'],
                                clip: ['rect(0px 6.21875px 117.65940856933594px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['59px', '64px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1',
                                stroke: [3, 'rgb(0, 255, 255)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['59px', '-36px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy',
                                stroke: [3, 'rgb(0, 255, 255)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['-19px', '-7px', '29px', '3px', 'auto', 'auto'],
                                type: 'rect',
                                id: 'lineaAHN1Copy39',
                                stroke: [3, 'rgb(0, 255, 255)', 'dotted'],
                                clip: ['rect(6.0380859375px 35px 12.92333984375px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            }]
                        },
                        {
                            id: 'lineasIZQCopy2',
                            type: 'group',
                            rect: ['146px', '23px', '28', '127', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '63px', '3px', '63px', 'auto', 'auto'],
                                userClass: 'lineA1',
                                id: 'lineaAVN1Copy10',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['0px', '124px', '16px', '3px', 'auto', 'auto'],
                                userClass: 'lineA1',
                                id: 'lineaAHN1Copy36',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['-11px', '63px', '14px', '3px', 'auto', 'auto'],
                                userClass: 'lineA1',
                                id: 'lineaAHN1Copy35',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['-11px', '124px', '14px', '3px', 'auto', 'auto'],
                                userClass: 'lineA1',
                                id: 'lineaAHN1Copy34',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            }]
                        },
                        {
                            id: 'criteriosN5',
                            type: 'rect',
                            title: 'Consulta de situación actual de contrato',
                            rect: ['320px', '120px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'criteriosN4',
                            type: 'rect',
                            title: 'Criterio de venta',
                            rect: ['320px', '60px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'criteriosN3_2',
                            type: 'rect',
                            title: 'Validación de deuda',
                            rect: ['844px', '75px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'criteriosN3_1',
                            type: 'rect',
                            title: 'Política de admisión',
                            rect: ['844px', '75px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['320px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            title: 'Verificaciones previas',
                            id: 'criteriosN3',
                            userClass: 'criteriosN1_1',
                            type: 'rect'
                        },
                        {
                            id: 'criteriosN2',
                            type: 'rect',
                            title: 'Ofertas vigentes.  Consideraciones a tener en cuenta en DELTA',
                            rect: ['0px', '121px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'criteriosN1',
                            type: 'rect',
                            title: 'Criterio de verificación con grabación de llamada',
                            rect: ['715px', '139px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'criterios_CP',
                            type: 'rect',
                            rect: ['180px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }]
                    },
                    {
                        rect: ['1060px', '190px', '300', '275px', 'auto', 'auto'],
                        id: 'GAS_N2_ALTA',
                        type: 'group',
                        userClass: 'gas',
                        c: [
                        {
                            id: 'gasN1_1',
                            type: 'rect',
                            title: 'Requisitos previos a la contratación',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'gasN1_2',
                            type: 'rect',
                            title: 'Documentación a entregar a Iberdrola por cliente',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'gasN1_3',
                            type: 'rect',
                            title: 'Documentación a entregar al Distribuidor por cliente',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            title: 'Operativa en sistemas',
                            id: 'gasN1_4',
                            userClass: 'noFunciona',
                            type: 'rect'
                        },
                        {
                            id: 'gasN1_5',
                            type: 'rect',
                            title: 'Proceso de gestión de alta con la Distribuidora',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'gasN1_6',
                            type: 'rect',
                            title: 'Coste de alta de un contrato',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'gasN1_7',
                            type: 'rect',
                            title: 'Puesta en servicio de gas',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'gas_CP',
                            type: 'rect',
                            rect: ['-1055px', '5px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'OPERATIVA_SISTEMAS_N1_4',
                            type: 'group',
                            rect: ['285px', '84px', '239px', '183px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['20px', '39px', '215px', '196px', 'auto', 'auto'],
                                id: 'Rectangle3Copy2',
                                stroke: [2, 'rgba(255,255,255,0.35)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(120,119,119,0.60)']
                            },
                            {
                                id: 'gasN1_41',
                                type: 'rect',
                                title: 'Registro oferta',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'gasN1_42',
                                type: 'rect',
                                title: 'Registro de datos específicos',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'gasN1_43',
                                type: 'rect',
                                title: 'Datos a incluir en observaciones de la oferta',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'gasN1_44',
                                type: 'rect',
                                title: 'Registro otros datos, presentación e impresión',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'gasN1_45',
                                type: 'rect',
                                title: 'Registro de documentación y aceptación',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                rect: ['7px', '38px', '10px', '37px', 'auto', 'auto'],
                                id: 'flechas3Nivel2Copy2',
                                transform: [[], ['-90']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/flechas3Nivel.svg', '0px', '0px']
                            }]
                        },
                        {
                            id: 'gas2_punteadas',
                            type: 'group',
                            rect: ['-122px', '-12px', '152', '288px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['33px', '36px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], [], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy4',
                                stroke: [3, 'rgba(195,255,92,1.00)', 'dotted'],
                                clip: ['rect(0px 6.21875px 117.65940856933594px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['-38px', '34px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy16',
                                stroke: [3, 'rgba(195,255,92,1.00)', 'dotted'],
                                clip: ['rect(0px 6.21875px 102.3214111328125px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['33px', '153px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], [], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy15',
                                stroke: [3, 'rgba(195,255,92,1.00)', 'dotted'],
                                clip: ['rect(5.140485763549805px 6.21875px 117.65940856933594px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['78px', '9px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy3',
                                stroke: [3, 'rgba(195,255,92,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['78px', '49px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy5',
                                stroke: [3, 'rgba(195,255,92,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['78px', '88px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy6',
                                stroke: [3, 'rgba(195,255,92,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['78px', '130px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy7',
                                stroke: [3, 'rgba(195,255,92,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['78px', '170px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy8',
                                stroke: [3, 'rgba(195,255,92,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['78px', '209px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy9',
                                stroke: [3, 'rgba(195,255,92,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['78px', '-29px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy2',
                                stroke: [3, 'rgba(195,255,92,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            }]
                        }]
                    },
                    {
                        rect: ['732px', '231px', '131px', '199px', 'auto', 'auto'],
                        title: 'Alta de segunda ocupación',
                        id: 'GAS_N1',
                        type: 'group',
                        c: [
                        {
                            rect: ['-3058px', '-1073px', 'auto', 'auto', 'auto', 'auto'],
                            title: 'Alta de nuevo suministro',
                            id: 'gasN1',
                            userClass: 'noFunciona',
                            type: 'rect'
                        },
                        {
                            id: 'gasN2',
                            type: 'rect',
                            title: 'Alta de segunda ocupación',
                            rect: ['-3058px', '-1073px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'lineasDERCopy6',
                            type: 'group',
                            rect: ['8px', '67px', '28', '64px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['22px', '-18px', '3px', '104px', 'auto', 'auto'],
                                userClass: 'lineV1',
                                id: 'lineaAVN1Copy13',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['0px', '30px', '25px', '3px', 'auto', 'auto'],
                                userClass: 'lineV1',
                                id: 'lineaAHN1Copy47',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['23px', '-19px', '14px', '3px', 'auto', 'auto'],
                                userClass: 'lineV1',
                                id: 'lineaAHN1Copy46',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['23px', '84px', '14px', '3px', 'auto', 'auto'],
                                userClass: 'lineV1',
                                id: 'lineaAHN1Copy44',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            }]
                        }]
                    },
                    {
                        id: 'ELECTRICO_N3_CONTRATACION',
                        type: 'group',
                        rect: ['-295px', '404px', '300px', '275px', 'auto', 'auto'],
                        c: [
                        {
                            id: 'electrico_CP_N3',
                            type: 'rect',
                            rect: ['-1055px', '5px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'electricoN3_1',
                            type: 'rect',
                            title: 'Información Suministro Eventual',
                            rect: ['-1168px', '-28px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'electricoN3_2',
                            type: 'rect',
                            title: 'Operativa en sistemas',
                            rect: ['-1168px', '-28px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'elctro2_punteadasCopy',
                            type: 'group',
                            rect: ['283px', '9px', '152', '288px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['48px', '-28px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], [], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy35',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(0px 6.21875px 79.08675384521484px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['80px', '-93px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy34',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(0px 6.21875px 102.3214111328125px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['10px', '-13px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy32',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['10px', '-51px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy27',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            }]
                        },
                        {
                            id: 'OPERATIVA_EN_SISTEMAS_N3_2',
                            type: 'group',
                            rect: ['-287', '-32px', '251', '265', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '224px', '251px', 'auto', 'auto'],
                                id: 'Rectangle3Copy4',
                                stroke: [2, 'rgba(255,255,255,0.35)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(120,119,119,0.60)']
                            },
                            {
                                id: 'electricoSistemasN3_21',
                                type: 'rect',
                                title: 'Identificación del punto de suministro y generación de la oferta',
                                rect: ['-2108px', '-1429px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'electricoSistemasN3_22',
                                type: 'rect',
                                title: 'Registro de documentación',
                                rect: ['-2108px', '-1429px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'electricoSistemasN3_23',
                                type: 'rect',
                                title: 'Registro de información específica',
                                rect: ['-2108px', '-1429px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'electricoSistemasN3_24',
                                type: 'rect',
                                title: 'Recogida consentimiento telefónico y presentación de la oferta',
                                rect: ['-2108px', '-1429px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'electricoSistemasN3_25',
                                type: 'rect',
                                title: 'Impresión y aceptación de oferta',
                                rect: ['-2108px', '-1429px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'electricoSistemasN3_26',
                                type: 'rect',
                                title: 'Prórroga de un contrato eventual',
                                rect: ['-2108px', '-1429px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                rect: ['228px', '75px', '10px', '37px', 'auto', 'auto'],
                                id: 'flechas3Nivel2Copy4',
                                transform: [[], ['90']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/flechas3Nivel.svg', '0px', '0px']
                            }]
                        }]
                    },
                    {
                        id: 'ELECTRICO_N2_SEGUNDA',
                        type: 'group',
                        rect: ['-295px', '266px', '300', '275px', 'auto', 'auto'],
                        c: [
                        {
                            id: 'electricoSegundaN2_1',
                            type: 'rect',
                            title: 'Requisitos previos',
                            rect: ['-1168px', '-28px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'electricoSegundaN2_2',
                            type: 'rect',
                            title: 'Operativa en sistemas',
                            rect: ['-1168px', '-28px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'electricoSegundaN2_3',
                            type: 'rect',
                            title: 'Coste de contratación',
                            rect: ['-1168px', '-28px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'OPERATIVA_SISTEMASN2_1',
                            type: 'group',
                            rect: ['-299px', '71px', '239px', '183px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['11px', '-60px', '224px', '81px', 'auto', 'auto'],
                                id: 'Rectangle3Copy5',
                                stroke: [2, 'rgba(255,255,255,0.35)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(120,119,119,0.60)']
                            },
                            {
                                id: 'electricoSistemasN2_11',
                                type: 'rect',
                                title: 'Documentación exigible',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'electricoSistemasN2_12',
                                type: 'rect',
                                title: 'Verificación del suministro contratable',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                rect: ['238px', '-68px', '10px', '37px', 'auto', 'auto'],
                                id: 'flechas3Nivel2Copy5',
                                transform: [[], ['90']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/flechas3Nivel.svg', '0px', '0px']
                            }]
                        },
                        {
                            id: 'elctro2_punteadasCopy2',
                            type: 'group',
                            rect: ['283px', '9px', '152', '288px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['47px', '7px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], [], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy44',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(0px 6.21875px 84.57361602783203px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['80px', '-58px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy43',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(0px 6.21875px 102.3214111328125px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['10px', '-13px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy41',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['10px', '27px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy40',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['10px', '-51px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy36',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            }]
                        }]
                    },
                    {
                        id: 'ELECTRICO_N1_ALTA',
                        type: 'group',
                        rect: ['-295px', '14px', '300', '275px', 'auto', 'auto'],
                        c: [
                        {
                            id: 'electricoN1_1',
                            type: 'rect',
                            title: 'Requisitos previos a la contratación',
                            rect: ['-1168px', '-28px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'electricoN1_2',
                            type: 'rect',
                            title: 'Documentación necesaria',
                            rect: ['-1168px', '-28px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'electricoN1_3',
                            type: 'rect',
                            title: 'Asesoramiento potencia a contratar',
                            rect: ['-1168px', '-28px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['-1168px', '-28px', 'auto', 'auto', 'auto', 'auto'],
                            title: 'Operativa en sistemas',
                            id: 'electricoN1_4',
                            userClass: 'noFunciona',
                            type: 'rect'
                        },
                        {
                            id: 'electricoN1_5',
                            type: 'rect',
                            title: 'Coste de alta de un contrato',
                            rect: ['-1168px', '-28px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'electricoN1_6',
                            type: 'rect',
                            title: 'Puesta en servicio del suministro eléctrico',
                            rect: ['-1168px', '-28px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'OPERATIVA_SISTEMASN1_4',
                            type: 'group',
                            rect: ['-298px', '82px', '239px', '183px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['11px', '-91px', '224px', '261px', 'auto', 'auto'],
                                id: 'Rectangle3Copy3',
                                stroke: [2, 'rgba(255,255,255,0.35)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(120,119,119,0.60)']
                            },
                            {
                                id: 'electricoSistemasN1_41',
                                type: 'rect',
                                title: 'Comprobar que el suministro es contratable',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'electricoSistemasN1_42',
                                type: 'rect',
                                title: 'Registro de documentación',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'electricoSistemasN1_43',
                                type: 'rect',
                                title: 'Registro de los datos del titular',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'electricoSistemasN1_44',
                                type: 'rect',
                                title: 'Registro de la oferta',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'electricoSistemasN1_45',
                                type: 'rect',
                                title: 'Recogida de dirección y modo de pago',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'electricoSistemasN1_46',
                                type: 'rect',
                                title: 'Recogida de referencia catastral',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'electricoSistemasN1_47',
                                type: 'rect',
                                title: 'Recogida consentimiento telefónico',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'electricoSistemasN1_48',
                                type: 'rect',
                                title: 'Impresión y aceptación de la oferta ',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                rect: ['238px', '37px', '10px', '37px', 'auto', 'auto'],
                                id: 'flechas3Nivel2Copy3',
                                transform: [[], ['90']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/flechas3Nivel.svg', '0px', '0px']
                            }]
                        },
                        {
                            id: 'elctro2_punteadas',
                            type: 'group',
                            rect: ['283px', '9px', '152', '288px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['48px', '14px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], [], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy26',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(0px 6.21875px 117.65940856933594px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['80px', '96px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy25',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(0px 6.21875px 102.3214111328125px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['48px', '131px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], [], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy24',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(5.140485763549805px 6.21875px 80.7782974243164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['10px', '-13px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy23',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['10px', '27px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy22',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['10px', '66px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy21',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['10px', '108px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy20',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['10px', '148px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy19',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            },
                            {
                                rect: ['10px', '-51px', '3px', '126px', 'auto', 'auto'],
                                transform: [[], ['90'], [], ['1', '1.05303']],
                                type: 'rect',
                                id: 'lineaAVN1Copy17',
                                stroke: [3, 'rgba(249,89,0,1.00)', 'dotted'],
                                clip: ['rect(32.152381896972656px 6.21875px 114.3310317993164px 0px)'],
                                fill: ['rgba(119,119,119,0.00)']
                            }]
                        }]
                    },
                    {
                        rect: ['5px', '126px', '274', '409px', 'auto', 'auto'],
                        title: 'Contratación suministros eventuales',
                        id: 'ELECTRICO_N1',
                        type: 'group',
                        c: [
                        {
                            id: 'electrico_CP1',
                            type: 'rect',
                            rect: ['0px', '69px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'electricoN4',
                            type: 'rect',
                            title: 'Contratación IBERCUR',
                            rect: ['-92px', '229px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['-47px', '-64px', 'auto', 'auto', 'auto', 'auto'],
                            title: 'Contratación suministros eventuales',
                            id: 'electricoN3',
                            userClass: 'noFunciona',
                            type: 'rect'
                        },
                        {
                            rect: ['-47px', '-64px', 'auto', 'auto', 'auto', 'auto'],
                            title: 'Alta de segunda ocupación',
                            id: 'electricoN2',
                            userClass: 'noFunciona',
                            type: 'rect'
                        },
                        {
                            rect: ['-47px', '-64px', 'auto', 'auto', 'auto', 'auto'],
                            title: 'Alta de nuevo suministro',
                            id: 'electricoN1',
                            userClass: 'noFunciona',
                            type: 'rect'
                        },
                        {
                            id: 'lineasIZQCopy3',
                            type: 'group',
                            rect: ['238px', '89px', '28', '116px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '-43px', '3px', '310px', 'auto', 'auto'],
                                userClass: 'lineF1',
                                id: 'lineaAVN1Copy14',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['0px', '113px', '25px', '3px', 'auto', 'auto'],
                                userClass: 'lineF1',
                                id: 'lineaAHN1Copy50',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['-11px', '-43px', '14px', '3px', 'auto', 'auto'],
                                userClass: 'lineF1',
                                id: 'lineaAHN1Copy49',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['-11px', '59px', '14px', '3px', 'auto', 'auto'],
                                userClass: 'lineF1',
                                id: 'lineaAHN1Copy48',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['-11px', '163px', '14px', '3px', 'auto', 'auto'],
                                userClass: 'lineF1',
                                id: 'lineaAHN1Copy51',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            },
                            {
                                rect: ['-11px', '264px', '14px', '3px', 'auto', 'auto'],
                                userClass: 'lineF1',
                                id: 'lineaAHN1Copy52',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(119,119,119,1.00)']
                            }]
                        }]
                    },
                    {
                        id: 'ZC',
                        type: 'group',
                        rect: ['264px', '430px', '480', '120', 'auto', 'auto'],
                        c: [
                        {
                            id: 'fondoComun',
                            type: 'image',
                            rect: ['0px', '0px', '480px', '119px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fondoComun.png', '0px', '0px']
                        },
                        {
                            id: 'lineas',
                            type: 'group',
                            rect: ['55px', '46px', '193', '47', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '2px', '35px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: ['101px', '8px', '2px', '35px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: ['191px', '12px', '2px', '35px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [2, 'rgb(0, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            }]
                        },
                        {
                            id: 'ZC_CP',
                            type: 'rect',
                            rect: ['315px', '29px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'venta_cruzada',
                            type: 'rect',
                            rect: ['2px', '36px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'cambio_comercializador',
                            type: 'rect',
                            cursor: ['pointer'],
                            rect: ['61px', '43px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'retencion_de',
                            type: 'rect',
                            rect: ['254px', '50px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'renovacion',
                            type: 'rect',
                            rect: ['405px', '42px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'desestimiento',
                            type: 'rect',
                            rect: ['162px', '58px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'RETENCION',
                            type: 'group',
                            rect: ['158px', '93px', '204px', '115px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '27px', '199px', '86px', 'auto', 'auto'],
                                id: 'Rectangle3',
                                stroke: [2, 'rgba(255,255,255,0.35)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(120,119,119,0.60)']
                            },
                            {
                                id: 'retencionItem1',
                                type: 'rect',
                                title: 'Contrato de energía',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'retencionItem2',
                                type: 'rect',
                                title: 'Productos y servicios asociados',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'retencionItem3',
                                type: 'rect',
                                title: 'Baja productos y servicios asociados',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'flechas3Nivel2',
                                type: 'image',
                                rect: ['142px', '7px', '10px', '37px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/flechas3Nivel.svg', '0px', '0px']
                            }]
                        },
                        {
                            id: 'CAMBIO_COMER',
                            type: 'group',
                            rect: ['-64px', '93px', '204px', '115px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '27px', '199px', '86px', 'auto', 'auto'],
                                id: 'Rectangle3Copy6',
                                stroke: [2, 'rgba(255,255,255,0.35)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(120,119,119,0.60)']
                            },
                            {
                                id: 'cambiocomer1',
                                type: 'rect',
                                title: 'Consideraciones en ofertas de electricidad',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'cambiocomer2',
                                type: 'rect',
                                title: 'Productos y servicios asociados',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'flechas3Nivel2Copy6',
                                type: 'image',
                                rect: ['177px', '7px', '10px', '37px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/flechas3Nivel.svg', '0px', '0px']
                            }]
                        },
                        {
                            id: 'RENOVACION',
                            type: 'group',
                            rect: ['447px', '-16px', '251px', '111px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['43px', '37px', '199px', '68px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [2, 'rgba(255,255,255,0.35)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(120,119,119,0.60)']
                            },
                            {
                                id: 'renovacionItem1',
                                type: 'rect',
                                title: 'Identificación en sistemas',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                id: 'renovacionItem2',
                                type: 'rect',
                                title: 'Modificación condiciones de renovación',
                                rect: ['-2097px', '-1520px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                rect: ['29px', '72px', '10px', '37px', 'auto', 'auto'],
                                id: 'flechas3Nivel2Copy',
                                transform: [[], ['-90']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/flechas3Nivel.svg', '0px', '0px']
                            }]
                        }]
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'electricoSistemasN1_47',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'gasN1_44',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'ZC_CP',
                symbolName: 'CP',
                autoPlay: {

               }
            },
            {
                id: 'criteriosN2',
                symbolName: 'rectanguloAzulN1-3LIN',
                autoPlay: {

               }
            },
            {
                id: 'retencionItem1',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electrico_CP_N3',
                symbolName: 'CP',
                autoPlay: {

               }
            },
            {
                id: 'criteriosN5',
                symbolName: 'rectanguloAzulN1-2LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN1_43',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'gasN1',
                symbolName: 'circuloVerdeN1-3LIN',
                autoPlay: {

               }
            },
            {
                id: 'electrico_CP1',
                symbolName: 'CP',
                autoPlay: {

               }
            },
            {
                id: 'renovacionItem1',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN1_41',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoN0',
                symbolName: 'electricoN0',
                autoPlay: {

               }
            },
            {
                id: 'electricoN3',
                symbolName: 'circuloFucsiaN1-3LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN1_45',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'retencionItem2',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoN1',
                symbolName: 'circuloFucsiaN1-3LIN',
                autoPlay: {

               }
            },
            {
                id: 'gasN1_6',
                symbolName: 'rectanguloVerdeN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'gasN0',
                symbolName: 'gasN0',
                autoPlay: {

               }
            },
            {
                id: 'retencion_de',
                symbolName: 'labelComun4',
                autoPlay: {

               }
            },
            {
                id: 'gasN1_5',
                symbolName: 'rectanguloVerdeN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'criteriosN4',
                symbolName: 'rectanguloAzulN1-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'gasN2',
                symbolName: 'circuloVerdeN1-3LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoN1_3',
                symbolName: 'rectanguloFUCSIAN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'hojaBtn',
                symbolName: 'hojaFondo',
                autoPlay: {

               }
            },
            {
                id: 'gasN1_41',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN3_22',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'gasN1_4',
                symbolName: 'rectanguloVerdeN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN3_23',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'gasN1_42',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN3_21',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'renovacion',
                symbolName: 'labelComun5',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN3_24',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'cambio_comercializador',
                symbolName: 'labelComun2',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN3_25',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'criteriosN3',
                symbolName: 'rectanguloAzulN1-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'gasN1_7',
                symbolName: 'rectanguloVerdeN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'criteriosN3_2',
                symbolName: 'circuloAzulN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN2_11',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoN3_1',
                symbolName: 'rectanguloFUCSIAN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN1_48',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN1_42',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN2_12',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'criteriosN3_1',
                symbolName: 'circuloAzulN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'gasN1_3',
                symbolName: 'rectanguloVerdeN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'renovacionItem2',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'gasN1_1',
                symbolName: 'rectanguloVerdeN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSegundaN2_2',
                symbolName: 'rectanguloFUCSIAN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'criteriosN0',
                symbolName: 'criteriosN0',
                autoPlay: {

               }
            },
            {
                id: 'gasN1_2',
                symbolName: 'rectanguloVerdeN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'cambiocomer2',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'cambiocomer1',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoN4',
                symbolName: 'circuloFucsiaN1-2LIN',
                autoPlay: {

               }
            },
            {
                id: 'retencionItem3',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'desestimiento',
                symbolName: 'labelComun3',
                autoPlay: {

               }
            },
            {
                id: 'criterios_CP',
                symbolName: 'CP',
                autoPlay: {

               }
            },
            {
                id: 'electricoN1_2',
                symbolName: 'rectanguloFUCSIAN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'gasN1_43',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoN1_4',
                symbolName: 'rectanguloFUCSIAN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoN2',
                symbolName: 'circuloFucsiaN1-3LIN',
                autoPlay: {

               }
            },
            {
                id: 'gas_CP',
                symbolName: 'CP',
                autoPlay: {

               }
            },
            {
                id: 'electricoN1_6',
                symbolName: 'rectanguloFUCSIAN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'venta_cruzada',
                symbolName: 'labelComun1',
                autoPlay: {

               }
            },
            {
                id: 'electricoN1_1',
                symbolName: 'rectanguloFUCSIAN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoN1_5',
                symbolName: 'rectanguloFUCSIAN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'criteriosN1',
                symbolName: 'rectanguloAzulN1-3LIN',
                autoPlay: {

               }
            },
            {
                id: 'gasN1_45',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN1_46',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSegundaN2_1',
                symbolName: 'rectanguloFUCSIAN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN1_44',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSegundaN2_3',
                symbolName: 'rectanguloFUCSIAN2-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoSistemasN3_26',
                symbolName: 'labelSoloTXT-1LIN',
                autoPlay: {

               }
            },
            {
                id: 'electricoN3_2',
                symbolName: 'rectanguloFUCSIAN2-1LIN',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_lineaAVN1Copy10}": [
                ["style", "top", '63px'],
                ["style", "height", '63px'],
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_lineaAVN1Copy9}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '78px'],
                ["style", "width", '3px'],
                ["style", "top", '209px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(195,255,92,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_electricoN1_6}": [
                ["style", "left", '-51px'],
                ["style", "top", '208px']
            ],
            "${_lineaAHN1Copy39}": [
                ["style", "top", '-7px'],
                ["style", "border-width", '3px'],
                ["style", "clip", [6.0380859375,35,12.92333984375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["style", "height", '3px'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '-19px'],
                ["style", "width", '29px']
            ],
            "${_criteriosN3_1}": [
                ["style", "left", '570px'],
                ["style", "top", '2px']
            ],
            "${_gasN0}": [
                ["style", "left", '632px'],
                ["style", "top", '276px']
            ],
            "${_electricoN1}": [
                ["style", "left", '135px'],
                ["style", "top", '3px']
            ],
            "${_electricoN3_2}": [
                ["style", "left", '-51px'],
                ["style", "top", '48px']
            ],
            "${_lineaAVN1Copy15}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '33px'],
                ["style", "width", '3px'],
                ["style", "top", '153px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(195,255,92,1.00)'],
                ["style", "clip", [5.140485763549805,6.21875,117.65940856933594,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_ZC_CP}": [
                ["style", "top", '32px'],
                ["style", "left", '325px']
            ],
            "${_electricoSistemasN1_48}": [
                ["style", "left", '20px'],
                ["style", "top", '119px']
            ],
            "${_GAS_N2_ALTA}": [
                ["style", "top", '190px'],
                ["style", "left", '1060px'],
                ["style", "height", '275px']
            ],
            "${_criteriosN4}": [
                ["style", "top", '62px'],
                ["style", "left", '320px']
            ],
            "${_RENOVACION}": [
                ["style", "top", '-16px'],
                ["style", "height", '111px'],
                ["style", "left", '447px'],
                ["style", "width", '251px']
            ],
            "${_lineaAHN1Copy50}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '113px'],
                ["style", "left", '0px'],
                ["style", "width", '25px']
            ],
            "${_gas_CP}": [
                ["style", "top", '15px'],
                ["style", "left", '325px']
            ],
            "${_electricoSistemasN1_41}": [
                ["style", "left", '20px'],
                ["style", "top", '-82px']
            ],
            "${_CRITERIOS}": [
                ["style", "top", '12px'],
                ["style", "left", '277px']
            ],
            "${_criteriosN3_2}": [
                ["style", "left", '570px'],
                ["style", "top", '102px']
            ],
            "${_lineas}": [
                ["style", "left", '55px'],
                ["style", "top", '46px']
            ],
            "${_electricoSistemasN3_21}": [
                ["style", "left", '9px'],
                ["style", "top", '9px']
            ],
            "${_lineaAVN1Copy20}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '10px'],
                ["style", "width", '3px'],
                ["style", "top", '108px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_electricoSistemasN1_47}": [
                ["style", "left", '20px'],
                ["style", "top", '79px']
            ],
            "${_electricoN1_4}": [
                ["style", "left", '-51px'],
                ["style", "top", '128px']
            ],
            "${_RETENCION}": [
                ["style", "top", '93px'],
                ["style", "height", '115px'],
                ["style", "left", '158px'],
                ["style", "width", '204px']
            ],
            "${_flechas3Nivel2Copy6}": [
                ["style", "top", '7px'],
                ["style", "left", '177px']
            ],
            "${_ELECTRICO_N3_CONTRATACION}": [
                ["style", "height", '275px'],
                ["style", "left", '-295px'],
                ["style", "top", '404px']
            ],
            "${_punteadas}": [
                ["style", "left", '474px'],
                ["style", "top", '23px']
            ],
            "${_lineaAHN1Copy35}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '63px'],
                ["style", "left", '-11px'],
                ["style", "width", '14px']
            ],
            "${_lineaAHN1Copy46}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '-19px'],
                ["style", "left", '23px'],
                ["style", "width", '14px']
            ],
            "${_gasN1_1}": [
                ["style", "left", '-3px'],
                ["style", "top", '9px']
            ],
            "${_electricoSegundaN2_2}": [
                ["style", "left", '-51px'],
                ["style", "top", '48px']
            ],
            "${_elctro2_punteadasCopy}": [
                ["style", "top", '9px'],
                ["style", "left", '283px'],
                ["style", "height", '288px']
            ],
            "${_criteriosN1}": [
                ["style", "left", '0px'],
                ["style", "top", '62px']
            ],
            "${_lineaAVN1Copy41}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '10px'],
                ["style", "width", '3px'],
                ["style", "top", '-13px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_criteriosN3}": [
                ["style", "left", '320px'],
                ["style", "top", '2px']
            ],
            "${_lineaAHN1Copy49}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '-43px'],
                ["style", "left", '-11px'],
                ["style", "width", '14px']
            ],
            "${_renovacion}": [
                ["style", "left", '405px'],
                ["style", "top", '42px']
            ],
            "${_elctro2_punteadas}": [
                ["style", "top", '9px'],
                ["style", "left", '283px'],
                ["style", "height", '288px']
            ],
            "${_electricoN2}": [
                ["style", "left", '135px'],
                ["style", "top", '106px']
            ],
            "${_retencionItem1}": [
                ["style", "left", '8px'],
                ["style", "top", '31px']
            ],
            "${_gasN1_2}": [
                ["style", "left", '-3px'],
                ["style", "top", '48px']
            ],
            "${_cambiocomer1}": [
                ["style", "left", '8px'],
                ["style", "top", '31px']
            ],
            "${_graficoCompleto}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '0px'],
                ["style", "left", '620px'],
                ["style", "width", '1615px']
            ],
            "${_GAS_N1}": [
                ["style", "height", '199px'],
                ["style", "top", '231px'],
                ["style", "left", '732px'],
                ["style", "width", '131px']
            ],
            "${_electricoN1_5}": [
                ["style", "left", '-51px'],
                ["style", "top", '168px']
            ],
            "${_lineaAVN1Copy8}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '78px'],
                ["style", "width", '3px'],
                ["style", "top", '170px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(195,255,92,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_electricoSegundaN2_1}": [
                ["style", "left", '-51px'],
                ["style", "top", '9px']
            ],
            "${_lineaAVN1Copy22}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '10px'],
                ["style", "width", '3px'],
                ["style", "top", '27px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_criteriosN0}": [
                ["style", "left", '436px'],
                ["style", "top", '94px']
            ],
            "${_retencionItem3}": [
                ["style", "left", '8px'],
                ["style", "top", '72px']
            ],
            "${_lineaAVN1Copy43}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '80px'],
                ["style", "width", '3px'],
                ["style", "top", '-58px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [0,6.21875,102.32141113281,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_lineaAVN1Copy11}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '14px'],
                ["style", "width", '3px'],
                ["style", "top", '4px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["style", "clip", [0,6.21875,117.65940856933594,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_lineaAVN1Copy26}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '48px'],
                ["style", "width", '3px'],
                ["style", "top", '14px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [0,6.21875,117.65940856934,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_electricoN1_3}": [
                ["style", "left", '-51px'],
                ["style", "top", '88px']
            ],
            "${_gas2_punteadas}": [
                ["style", "top", '-12px'],
                ["style", "left", '-122px'],
                ["style", "height", '288px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '35px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '2px']
            ],
            "${_lineaAHN1Copy51}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '163px'],
                ["style", "left", '-11px'],
                ["style", "width", '14px']
            ],
            "${_lineaAHN1Copy34}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '124px'],
                ["style", "left", '-11px'],
                ["style", "width", '14px']
            ],
            "${_lineaAVN1}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '59px'],
                ["style", "width", '3px'],
                ["style", "top", '64px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["style", "clip", [32.152381896972656,6.21875,114.3310317993164,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_renovacionItem1}": [
                ["style", "left", '53px'],
                ["style", "top", '43px']
            ],
            "${_lineaAVN1Copy5}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '78px'],
                ["style", "width", '3px'],
                ["style", "top", '49px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(195,255,92,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_electricoN4}": [
                ["style", "left", '135px'],
                ["style", "top", '311px']
            ],
            "${_lineaAHN1Copy41}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '3px'],
                ["style", "left", '14px'],
                ["style", "width", '14px']
            ],
            "${_desestimiento}": [
                ["style", "left", '162px'],
                ["style", "top", '58px']
            ],
            "${_ELECTRICO_N1_ALTA}": [
                ["style", "top", '14px'],
                ["style", "left", '-295px'],
                ["style", "height", '275px']
            ],
            "${_electricoSegundaN2_3}": [
                ["style", "left", '-51px'],
                ["style", "top", '88px']
            ],
            "${_lineaAVN1Copy24}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '48px'],
                ["style", "width", '3px'],
                ["style", "top", '131px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [5.140485763549805,6.21875,80.7782974243164,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_gasN2}": [
                ["style", "left", '45px'],
                ["style", "top", '104px']
            ],
            "${_gasN1_4}": [
                ["style", "left", '-3px'],
                ["style", "top", '128px']
            ],
            "${_retencion_de}": [
                ["style", "left", '254px'],
                ["style", "top", '50px']
            ],
            "${_gasN1_5}": [
                ["style", "left", '-3px'],
                ["style", "top", '168px']
            ],
            "${_electricoSistemasN2_12}": [
                ["style", "left", '20px'],
                ["style", "top", '-27px']
            ],
            "${_HOJA}": [
                ["style", "top", '202px'],
                ["style", "left", '426px']
            ],
            "${_electricoSistemasN3_26}": [
                ["style", "left", '9px'],
                ["style", "top", '223px']
            ],
            "${_lineaAVN1Copy35}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '48px'],
                ["style", "width", '3px'],
                ["style", "top", '-28px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [0,6.21875,79.08675384521484,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_lineasIZQCopy3}": [
                ["style", "top", '89px'],
                ["style", "left", '238px'],
                ["style", "height", '116px']
            ],
            "${_lineaAVN1Copy21}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '10px'],
                ["style", "width", '3px'],
                ["style", "top", '66px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_electrico_CP1}": [
                ["style", "top", '168px'],
                ["style", "left", '45px']
            ],
            "${_lineaAVN1Copy44}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '47px'],
                ["style", "width", '3px'],
                ["style", "top", '7px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [0,6.21875,84.57361602783203,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_lineVerde}": [
                ["style", "top", '362px'],
                ["style", "left", '565px']
            ],
            "${_gasN1_7}": [
                ["style", "left", '-3px'],
                ["style", "top", '248px']
            ],
            "${_CAMBIO_COMER}": [
                ["style", "height", '115px'],
                ["style", "top", '93px'],
                ["style", "left", '-64px'],
                ["style", "width", '204px']
            ],
            "${_cambiocomer2}": [
                ["style", "left", '8px'],
                ["style", "top", '51px']
            ],
            "${_lineaAVN1Copy16}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '-38px'],
                ["style", "width", '3px'],
                ["style", "top", '34px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(195,255,92,1.00)'],
                ["style", "clip", [0,6.21875,102.3214111328125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_gasN1}": [
                ["style", "left", '45px'],
                ["style", "top", '1px']
            ],
            "${_criteriosN2}": [
                ["style", "left", '0px'],
                ["style", "top", '123px']
            ],
            "${_lineFucsia}": [
                ["style", "left", '357px'],
                ["style", "top", '364px']
            ],
            "${_ZC}": [
                ["style", "left", '264px'],
                ["style", "top", '430px']
            ],
            "${_lineaAVN1Copy}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '59px'],
                ["style", "width", '3px'],
                ["style", "top", '-36px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_lineAzul}": [
                ["style", "left", '449px'],
                ["style", "top", '192px']
            ],
            "${_lineaAVN1Copy32}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '10px'],
                ["style", "width", '3px'],
                ["style", "top", '-13px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_gasN1_41}": [
                ["style", "left", '28px'],
                ["style", "top", '65px']
            ],
            "${_criterios_CP}": [
                ["style", "top", '-3px'],
                ["style", "left", '193px']
            ],
            "${_flechas3Nivel2Copy4}": [
                ["style", "top", '75px'],
                ["style", "left", '228px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_lineaAHN1Copy44}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '84px'],
                ["style", "left", '23px'],
                ["style", "width", '14px']
            ],
            "${_gasN1_42}": [
                ["style", "left", '28px'],
                ["style", "top", '85px']
            ],
            "${_criteriosN5}": [
                ["style", "left", '320px'],
                ["style", "top", '123px']
            ],
            "${_lineaAVN1Copy34}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '80px'],
                ["style", "width", '3px'],
                ["style", "top", '-93px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [0,6.21875,102.32141113281,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_lineaAVN1Copy27}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '10px'],
                ["style", "width", '3px'],
                ["style", "top", '-51px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_lineaAHN1Copy52}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '264px'],
                ["style", "left", '-11px'],
                ["style", "width", '14px']
            ],
            "${_flechas3Nivel2Copy5}": [
                ["style", "top", '-68px'],
                ["style", "left", '238px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_lineasDERCopy6}": [
                ["style", "height", '64px'],
                ["style", "left", '8px'],
                ["style", "top", '67px']
            ],
            "${_venta_cruzada}": [
                ["style", "left", '2px'],
                ["style", "top", '36px']
            ],
            "${_gasN1_6}": [
                ["style", "left", '-3px'],
                ["style", "top", '208px']
            ],
            "${_lineaAVN1Copy3}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '78px'],
                ["style", "width", '3px'],
                ["style", "top", '9px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(195,255,92,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_lineaAVN1Copy17}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '10px'],
                ["style", "width", '3px'],
                ["style", "top", '-51px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_electricoSistemasN3_22}": [
                ["style", "left", '9px'],
                ["style", "top", '69px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '35px'],
                ["style", "top", '8px'],
                ["style", "left", '101px'],
                ["style", "width", '2px']
            ],
            "${_electricoSistemasN1_43}": [
                ["style", "left", '20px'],
                ["style", "top", '-24px']
            ],
            "${_OPERATIVA_EN_SISTEMAS_N3_2}": [
                ["style", "top", '-32px']
            ],
            "${_Rectangle3Copy2}": [
                ["color", "background-color", 'rgba(120,119,119,0.60)'],
                ["style", "top", '39px'],
                ["style", "left", '20px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '196px'],
                ["color", "border-color", 'rgba(255,255,255,0.35)'],
                ["style", "border-width", '2px'],
                ["style", "width", '215px']
            ],
            "${_gasN1_43}": [
                ["style", "left", '28px'],
                ["style", "top", '106px']
            ],
            "${_ELECTRICO_N2_SEGUNDA}": [
                ["style", "top", '266px'],
                ["style", "left", '-295px'],
                ["style", "height", '275px']
            ],
            "${_OPERATIVA_SISTEMAS_N1_4}": [
                ["style", "height", '183px'],
                ["style", "top", '84px'],
                ["style", "left", '285px'],
                ["style", "width", '239px']
            ],
            "${_Rectangle3Copy3}": [
                ["color", "background-color", 'rgba(120,119,119,0.60)'],
                ["style", "top", '-91px'],
                ["style", "border-width", '2px'],
                ["color", "border-color", 'rgba(255,255,255,0.35)'],
                ["style", "height", '261px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '11px'],
                ["style", "width", '224px']
            ],
            "${_Rectangle3Copy4}": [
                ["color", "background-color", 'rgba(120,119,119,0.60)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '251px'],
                ["color", "border-color", 'rgba(255,255,255,0.35)'],
                ["style", "border-width", '2px'],
                ["style", "width", '224px']
            ],
            "${_flechas3Nivel2Copy3}": [
                ["style", "top", '37px'],
                ["style", "left", '238px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_electricoSistemasN3_25}": [
                ["style", "left", '9px'],
                ["style", "top", '199px']
            ],
            "${_lineaAHN1Copy47}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '30px'],
                ["style", "left", '0px'],
                ["style", "width", '25px']
            ],
            "${_electricoN3}": [
                ["style", "left", '135px'],
                ["style", "top", '209px']
            ],
            "${_lineaAVN1Copy23}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '10px'],
                ["style", "width", '3px'],
                ["style", "top", '-13px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_electricoSistemasN1_42}": [
                ["style", "left", '20px'],
                ["style", "top", '-45px']
            ],
            "${_lineaAHN1Copy40}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '124px'],
                ["style", "left", '14px'],
                ["style", "width", '14px']
            ],
            "${_fondoComun}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_lineaAVN1Copy19}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '10px'],
                ["style", "width", '3px'],
                ["style", "top", '148px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_flechas3Nivel2Copy2}": [
                ["style", "top", '38px'],
                ["style", "left", '7px'],
                ["transform", "rotateZ", '-90deg']
            ],
            "${_Rectangle3Copy}": [
                ["color", "background-color", 'rgba(120,119,119,0.60)'],
                ["style", "top", '37px'],
                ["style", "border-width", '2px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '68px'],
                ["color", "border-color", 'rgba(255,255,255,0.35)'],
                ["style", "left", '43px'],
                ["style", "width", '199px']
            ],
            "${_cambio_comercializador}": [
                ["style", "top", '43px'],
                ["style", "left", '61px'],
                ["style", "cursor", 'pointer']
            ],
            "${_lineaAVN1Copy7}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '78px'],
                ["style", "width", '3px'],
                ["style", "top", '130px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(195,255,92,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_lineaAHN1Copy36}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '124px'],
                ["style", "left", '0px'],
                ["style", "width", '16px']
            ],
            "${_renovacionItem2}": [
                ["style", "left", '53px'],
                ["style", "top", '63px']
            ],
            "${_lineaAHN1Copy48}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '59px'],
                ["style", "left", '-11px'],
                ["style", "width", '14px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(120,119,119,0.60)'],
                ["style", "top", '27px'],
                ["style", "border-width", '2px'],
                ["color", "border-color", 'rgba(255,255,255,0.35)'],
                ["style", "height", '86px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '199px']
            ],
            "${symbolSelector}": [
                ["style", "height", '643px'],
                ["style", "width", '1000px']
            ],
            "${_elctro2_punteadasCopy2}": [
                ["style", "top", '9px'],
                ["style", "left", '283px'],
                ["style", "height", '288px']
            ],
            "${_ELECTRICO_N1}": [
                ["style", "height", '409px'],
                ["style", "left", '5px'],
                ["style", "top", '126px']
            ],
            "${_lineaAVN1Copy25}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '80px'],
                ["style", "width", '3px'],
                ["style", "top", '96px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [0,6.21875,102.32141113281,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_lineaAHN1Copy43}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '124px'],
                ["style", "left", '0px'],
                ["style", "width", '16px']
            ],
            "${_lineaAVN1Copy6}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '78px'],
                ["style", "width", '3px'],
                ["style", "top", '88px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(195,255,92,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_lineaAVN1Copy2}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '78px'],
                ["style", "width", '3px'],
                ["style", "top", '-29px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(195,255,92,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_lineaAVN1Copy13}": [
                ["style", "top", '-18px'],
                ["style", "height", '104px'],
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "left", '22px'],
                ["style", "width", '3px']
            ],
            "${_electrico_CP_N3}": [
                ["style", "top", '84px'],
                ["style", "left", '64px']
            ],
            "${_electricoSistemasN3_24}": [
                ["style", "left", '9px'],
                ["style", "top", '138px']
            ],
            "${_OPERATIVA_SISTEMASN2_1}": [
                ["style", "height", '183px'],
                ["style", "top", '71px'],
                ["style", "left", '-299px'],
                ["style", "width", '239px']
            ],
            "${_lineasDERCopy5}": [
                ["style", "left", '292px'],
                ["style", "top", '23px']
            ],
            "${_OPERATIVA_SISTEMASN1_4}": [
                ["style", "top", '82px'],
                ["style", "height", '183px'],
                ["style", "left", '-298px'],
                ["style", "width", '239px']
            ],
            "${_lineaAVN1Copy12}": [
                ["style", "top", '3px'],
                ["style", "height", '123px'],
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "left", '13px'],
                ["style", "width", '3px']
            ],
            "${_flechas3Nivel2Copy}": [
                ["style", "top", '72px'],
                ["style", "left", '29px'],
                ["transform", "rotateZ", '-90deg']
            ],
            "${_lineaAVN1Copy36}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '10px'],
                ["style", "width", '3px'],
                ["style", "top", '-51px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_lineaAHN1Copy42}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '3px'],
                ["style", "top", '63px'],
                ["style", "left", '14px'],
                ["style", "width", '14px']
            ],
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '35px'],
                ["style", "top", '12px'],
                ["style", "left", '191px'],
                ["style", "width", '2px']
            ],
            "${_electricoSistemasN1_44}": [
                ["style", "left", '20px'],
                ["style", "top", '-3px']
            ],
            "${_lineaAVN1Copy14}": [
                ["style", "top", '-43px'],
                ["style", "height", '310px'],
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_electricoSistemasN1_46}": [
                ["style", "left", '20px'],
                ["style", "top", '58px']
            ],
            "${_retencionItem2}": [
                ["style", "left", '8px'],
                ["style", "top", '51px']
            ],
            "${_gasN1_44}": [
                ["style", "left", '28px'],
                ["style", "top", '147px']
            ],
            "${_flechas3Nivel2}": [
                ["style", "top", '7px'],
                ["style", "left", '142px']
            ],
            "${_electricoN0}": [
                ["style", "left", '267px'],
                ["style", "top", '276px']
            ],
            "${_electricoSistemasN2_11}": [
                ["style", "left", '20px'],
                ["style", "top", '-49px']
            ],
            "${_gasN1_3}": [
                ["style", "left", '-3px'],
                ["style", "top", '88px']
            ],
            "${_lineaAVN1Copy4}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '33px'],
                ["style", "width", '3px'],
                ["style", "top", '36px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(195,255,92,1.00)'],
                ["style", "clip", [0,6.21875,117.65940856934,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_electricoN1_2}": [
                ["style", "left", '-51px'],
                ["style", "top", '48px']
            ],
            "${_electricoN1_1}": [
                ["style", "left", '-51px'],
                ["style", "top", '9px']
            ],
            "${_lineaAVN1Copy40}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '10px'],
                ["style", "width", '3px'],
                ["style", "top", '27px'],
                ["transform", "scaleY", '1.05303'],
                ["style", "height", '126px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "clip", [32.152381896973,6.21875,114.33103179932,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '3px']
            ],
            "${_lineasIZQCopy2}": [
                ["style", "left", '146px'],
                ["style", "top", '23px']
            ],
            "${_Rectangle3Copy6}": [
                ["color", "background-color", 'rgba(120,119,119,0.60)'],
                ["style", "top", '27px'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '86px'],
                ["color", "border-color", 'rgba(255,255,255,0.35)'],
                ["style", "border-width", '2px'],
                ["style", "width", '199px']
            ],
            "${_electricoN3_1}": [
                ["style", "left", '-51px'],
                ["style", "top", '9px']
            ],
            "${_Rectangle3Copy5}": [
                ["color", "background-color", 'rgba(120,119,119,0.60)'],
                ["style", "top", '-60px'],
                ["style", "left", '11px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '81px'],
                ["color", "border-color", 'rgba(255,255,255,0.35)'],
                ["style", "border-width", '2px'],
                ["style", "width", '224px']
            ],
            "${_electricoSistemasN3_23}": [
                ["style", "left", '9px'],
                ["style", "top", '96px']
            ],
            "${_electricoSistemasN1_45}": [
                ["style", "left", '20px'],
                ["style", "top", '18px']
            ],
            "${_gasN1_45}": [
                ["style", "left", '28px'],
                ["style", "top", '188px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3552,
            autoPlay: true,
            labels: {
                "centro": 2000
            },
            timeline: [
                { id: "eid1321", tween: [ "style", "${_cambiocomer2}", "top", '90px', { fromValue: '51px'}], position: 0, duration: 109 },
                { id: "eid1322", tween: [ "style", "${_cambiocomer2}", "left", '8px', { fromValue: '8px'}], position: 109, duration: 0 },
                { id: "eid1082", tween: [ "style", "${_electricoSistemasN1_48}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1297", tween: [ "style", "${_gasN1_45}", "top", '188px', { fromValue: '188px'}], position: 0, duration: 0 },
                { id: "eid1317", tween: [ "style", "${_retencionItem3}", "left", '8px', { fromValue: '8px'}], position: 109, duration: 0 },
                { id: "eid1172", tween: [ "style", "${_ZC_CP}", "top", '32px', { fromValue: '32px'}], position: 0, duration: 0 },
                { id: "eid1208", tween: [ "style", "${_electricoSistemasN3_26}", "left", '9px', { fromValue: '9px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1109", tween: [ "style", "${_electricoSistemasN2_11}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1290", tween: [ "style", "${_electricoSistemasN3_25}", "top", '199px', { fromValue: '199px'}], position: 0, duration: 0 },
                { id: "eid1211", tween: [ "style", "${_electricoSistemasN3_25}", "left", '9px', { fromValue: '9px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1293", tween: [ "style", "${_electricoSistemasN3_23}", "top", '96px', { fromValue: '96px'}], position: 0, duration: 0 },
                { id: "eid1291", tween: [ "style", "${_electricoSistemasN3_26}", "top", '223px', { fromValue: '223px'}], position: 0, duration: 0 },
                { id: "eid1214", tween: [ "style", "${_electricoSistemasN3_23}", "left", '9px', { fromValue: '9px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1090", tween: [ "style", "${_electricoSistemasN1_42}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1148", tween: [ "style", "${_electricoSistemasN1_48}", "top", '119px', { fromValue: '119px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1318", tween: [ "style", "${_retencionItem1}", "left", '8px', { fromValue: '8px'}], position: 109, duration: 0 },
                { id: "eid1235", tween: [ "style", "${_electrico_CP1}", "left", '45px', { fromValue: '45px'}], position: 0, duration: 0 },
                { id: "eid1146", tween: [ "style", "${_electricoSistemasN1_41}", "top", '-82px', { fromValue: '-82px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1299", tween: [ "style", "${_retencionItem2}", "top", '50px', { fromValue: '51px'}], position: 0, duration: 109 },
                { id: "eid12", tween: [ "style", "${_graficoCompleto}", "left", '0px', { fromValue: '620px'}], position: 40, duration: 1960, easing: "easeInOutQuad" },
                { id: "eid13", tween: [ "style", "${_graficoCompleto}", "left", '-620px', { fromValue: '0px'}], position: 2000, duration: 1552, easing: "easeInOutQuad" },
                { id: "eid1170", tween: [ "style", "${_criterios_CP}", "top", '-3px', { fromValue: '-3px'}], position: 0, duration: 0 },
                { id: "eid1234", tween: [ "style", "${_electrico_CP_N3}", "top", '84px', { fromValue: '84px'}], position: 0, duration: 0 },
                { id: "eid1108", tween: [ "style", "${_electricoSistemasN2_12}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1301", tween: [ "style", "${_retencionItem3}", "top", '71px', { fromValue: '72px'}], position: 0, duration: 109 },
                { id: "eid1145", tween: [ "style", "${_electricoSistemasN1_44}", "top", '-3px', { fromValue: '-3px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1303", tween: [ "style", "${_retencionItem1}", "top", '30px', { fromValue: '31px'}], position: 0, duration: 109 },
                { id: "eid1076", tween: [ "style", "${_electricoSistemasN1_47}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1084", tween: [ "style", "${_electricoSistemasN1_43}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1212", tween: [ "style", "${_electricoSistemasN3_24}", "left", '9px', { fromValue: '9px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1324", tween: [ "style", "${_cambiocomer1}", "top", '48px', { fromValue: '31px'}], position: 0, duration: 109 },
                { id: "eid1151", tween: [ "style", "${_electricoSistemasN1_42}", "top", '-45px', { fromValue: '-45px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1078", tween: [ "style", "${_electricoSistemasN1_45}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1171", tween: [ "style", "${_ZC_CP}", "left", '325px', { fromValue: '325px'}], position: 0, duration: 0 },
                { id: "eid1316", tween: [ "style", "${_retencionItem2}", "left", '8px', { fromValue: '8px'}], position: 109, duration: 0 },
                { id: "eid1110", tween: [ "style", "${_electricoSistemasN2_11}", "top", '-49px', { fromValue: '-49px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1200", tween: [ "style", "${_electrico_CP_N3}", "left", '64px', { fromValue: '64px'}], position: 0, duration: 0 },
                { id: "eid1238", tween: [ "style", "${_electrico_CP1}", "top", '168px', { fromValue: '168px'}], position: 0, duration: 0 },
                { id: "eid1144", tween: [ "style", "${_electricoSistemasN1_43}", "top", '-24px', { fromValue: '-24px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1080", tween: [ "style", "${_electricoSistemasN1_41}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1154", tween: [ "style", "${_electricoSistemasN2_12}", "top", '-27px', { fromValue: '-27px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1292", tween: [ "style", "${_electricoSistemasN3_24}", "top", '138px', { fromValue: '138px'}], position: 0, duration: 0 },
                { id: "eid1147", tween: [ "style", "${_electricoSistemasN1_45}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1152", tween: [ "style", "${_electricoSistemasN1_46}", "top", '58px', { fromValue: '58px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1289", tween: [ "style", "${_electricoSistemasN3_22}", "top", '69px', { fromValue: '69px'}], position: 0, duration: 0 },
                { id: "eid1149", tween: [ "style", "${_electricoSistemasN1_47}", "top", '79px', { fromValue: '79px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1086", tween: [ "style", "${_electricoSistemasN1_44}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1323", tween: [ "style", "${_cambiocomer1}", "left", '8px', { fromValue: '8px'}], position: 109, duration: 0 },
                { id: "eid1217", tween: [ "style", "${_electricoSistemasN3_22}", "left", '9px', { fromValue: '9px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1219", tween: [ "style", "${_electricoSistemasN3_21}", "left", '9px', { fromValue: '9px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1169", tween: [ "style", "${_criterios_CP}", "left", '193px', { fromValue: '193px'}], position: 0, duration: 0 },
                { id: "eid1088", tween: [ "style", "${_electricoSistemasN1_46}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1218", tween: [ "style", "${_electricoSistemasN3_21}", "top", '9px', { fromValue: '9px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid500", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_renovacionItem1}', [0] ], ""], position: 0 },
                { id: "eid279", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN0}', [0] ], ""], position: 0 },
                { id: "eid499", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_renovacionItem2}', [0] ], ""], position: 0 },
                { id: "eid278", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoN0}', [0] ], ""], position: 0 },
                { id: "eid463", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_retencionItem2}', [0] ], ""], position: 0 },
                { id: "eid1156", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSegundaN2_1}', [0] ], ""], position: 0 },
                { id: "eid1159", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSegundaN2_3}', [0] ], ""], position: 0 },
                { id: "eid464", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_retencionItem3}', [0] ], ""], position: 0 },
                { id: "eid277", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_criteriosN0}', [0] ], ""], position: 0 },
                { id: "eid1325", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_cambiocomer1}', [0] ], ""], position: 0 },
                { id: "eid611", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN2}', [0] ], ""], position: 0 },
                { id: "eid1326", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_cambiocomer2}', [0] ], ""], position: 0 },
                { id: "eid1158", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSegundaN2_2}', [0] ], ""], position: 0 },
                { id: "eid612", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN1}', [0] ], ""], position: 0 },
                { id: "eid541", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN1_1}', [0] ], ""], position: 0 },
                { id: "eid440", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_retencionItem1}', [0] ], ""], position: 0 },
                { id: "eid1241", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_hojaBtn}', [0] ], ""], position: 0 },
                { id: "eid246", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_criteriosN4}', [0] ], ""], position: 0 },
                { id: "eid816", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN1_41}', [0] ], ""], position: 0 },
                { id: "eid717", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN1_4}', [0] ], ""], position: 0 },
                { id: "eid718", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN1_5}', [0] ], ""], position: 0 },
                { id: "eid720", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN1_6}', [0] ], ""], position: 0 },
                { id: "eid721", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN1_7}', [0] ], ""], position: 0 },
                { id: "eid704", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN1_2}', [0] ], ""], position: 0 },
                { id: "eid815", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN1_42}', [0] ], ""], position: 0 },
                { id: "eid814", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN1_43}', [0] ], ""], position: 0 },
                { id: "eid244", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_criteriosN3_2}', [0] ], ""], position: 0 },
                { id: "eid1295", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN1_45}', [0] ], ""], position: 0 },
                { id: "eid247", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_criteriosN2}', [0] ], ""], position: 0 },
                { id: "eid251", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_criteriosN1}', [0] ], ""], position: 0 },
                { id: "eid248", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_criteriosN3}', [0] ], ""], position: 0 },
                { id: "eid250", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_criterios_CP}', [0] ], ""], position: 0 },
                { id: "eid245", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_criteriosN5}', [0] ], ""], position: 0 },
                { id: "eid249", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_criteriosN3_1}', [0] ], ""], position: 0 },
                { id: "eid719", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN1_3}', [0] ], ""], position: 0 },
                { id: "eid817", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gasN1_44}', [0] ], ""], position: 0 },
                { id: "eid846", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_gas_CP}', [0] ], ""], position: 0 },
                { id: "eid1223", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN3_24}', [0] ], ""], position: 0 },
                { id: "eid911", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoN1_2}', [0] ], ""], position: 0 },
                { id: "eid912", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoN1_3}', [0] ], ""], position: 0 },
                { id: "eid317", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electrico_CP1}', [0] ], ""], position: 0 },
                { id: "eid629", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoN3}', [0] ], ""], position: 0 },
                { id: "eid916", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoN1_4}', [0] ], ""], position: 0 },
                { id: "eid914", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoN1_1}', [0] ], ""], position: 0 },
                { id: "eid688", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoN4}', [0] ], ""], position: 0 },
                { id: "eid686", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoN2}', [0] ], ""], position: 0 },
                { id: "eid872", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN1_42}', [0] ], ""], position: 0 },
                { id: "eid948", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN1_45}', [0] ], ""], position: 0 },
                { id: "eid871", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN1_43}', [0] ], ""], position: 0 },
                { id: "eid913", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoN1_6}', [0] ], ""], position: 0 },
                { id: "eid870", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN1_44}', [0] ], ""], position: 0 },
                { id: "eid950", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN1_46}', [0] ], ""], position: 0 },
                { id: "eid915", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoN1_5}', [0] ], ""], position: 0 },
                { id: "eid873", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN1_41}', [0] ], ""], position: 0 },
                { id: "eid384", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_renovacion}', [0] ], ""], position: 0 },
                { id: "eid1225", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN3_21}', [0] ], ""], position: 0 },
                { id: "eid1157", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN2_11}', [0] ], ""], position: 0 },
                { id: "eid1155", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN2_12}', [0] ], ""], position: 0 },
                { id: "eid906", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoN3_1}', [0] ], ""], position: 0 },
                { id: "eid908", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoN3_2}', [0] ], ""], position: 0 },
                { id: "eid949", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN1_47}', [0] ], ""], position: 0 },
                { id: "eid1224", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN3_22}', [0] ], ""], position: 0 },
                { id: "eid1222", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN3_23}', [0] ], ""], position: 0 },
                { id: "eid361", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_venta_cruzada}', [0] ], ""], position: 0 },
                { id: "eid1221", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN3_25}', [0] ], ""], position: 0 },
                { id: "eid1220", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN3_26}', [0] ], ""], position: 0 },
                { id: "eid907", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electrico_CP_N3}', [0] ], ""], position: 0 },
                { id: "eid383", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_desestimiento}', [0] ], ""], position: 0 },
                { id: "eid687", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoN1}', [0] ], ""], position: 0 },
                { id: "eid385", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_retencion_de}', [0] ], ""], position: 0 },
                { id: "eid364", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_cambio_comercializador}', [0] ], ""], position: 0 },
                { id: "eid951", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_electricoSistemasN1_48}', [0] ], ""], position: 0 },
                { id: "eid354", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_ZC_CP}', [0] ], ""], position: 0 }            ]
        }
    }
},
"flechaIzquierda": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'flechaOver2',
                    type: 'image',
                    rect: ['-10px', '-18px', '66px', '116px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flechaOver.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['-180']],
                    id: 'flecha',
                    type: 'image',
                    rect: ['0px', '0px', '46px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flecha.svg', '0px', '0px', '46.000001637209px', '80px']
                },
                {
                    id: 'flechaOver',
                    type: 'image',
                    rect: ['0px', '0px', '46px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flechaOver2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '46px', '80px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hotSpot',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '46px']
            ],
            "${_flechaOver}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_flechaOver2}": [
                ["style", "top", '-18px'],
                ["style", "overflow", 'visible'],
                ["style", "left", '-10px'],
                ["transform", "rotateZ", '-180deg']
            ],
            "${_flecha}": [
                ["style", "top", '0px'],
                ["style", "background-size", [46.000001637209,80], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '-180deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 250
            },
            timeline: [
                { id: "eid1177", tween: [ "style", "${_flechaOver}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }            ]
        }
    }
},
"gasN0": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '102px', '102px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    userClass: 'bordeVerdeN0',
                    id: 'circuloN0',
                    stroke: [3, 'rgba(0,0,0,1)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(195,255,92,0.30)']
                },
                {
                    font: ['open-sans-condensed, sans-serif', 20, 'rgba(255,255,255,1.00)', '700', 'none', ''],
                    rect: ['4px', '36px', '99px', '38px', 'auto', 'auto'],
                    title: 'Suministro Gas',
                    userClass: 'meno04 labelN0',
                    id: 'label',
                    text: 'Suministro<br>Gas',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_circuloN0}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(195,255,92,0.30)'],
                ["style", "left", '0px'],
                ["style", "height", '102px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '3px'],
                ["style", "width", '102px']
            ],
            "${_label}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '4px'],
                ["style", "font-size", '20px'],
                ["style", "top", '36px'],
                ["style", "text-align", 'center'],
                ["style", "height", '38px'],
                ["style", "font-family", 'open-sans-condensed, sans-serif'],
                ["style", "width", '99px']
            ],
            "${symbolSelector}": [
                ["style", "height", '108px'],
                ["style", "width", '108px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"electricoN0": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '102px', '102px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    userClass: 'bordeFucsiaN0',
                    id: 'circuloN0',
                    stroke: [3, 'rgba(0,0,0,1)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(249,89,0,0.30)']
                },
                {
                    font: ['open-sans-condensed, sans-serif', 20, 'rgba(255,255,255,1.00)', '700', 'none', ''],
                    rect: ['4px', '35px', '99px', '37px', 'auto', 'auto'],
                    title: 'Suministro Gas',
                    userClass: 'meno04 labelN0',
                    align: 'center',
                    text: 'Suministro<br>Eléctrico',
                    id: 'label',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_circuloN0}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(249,89,0,0.30)'],
                ["style", "border-width", '3px'],
                ["style", "height", '102px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '102px']
            ],
            "${_label}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '4px'],
                ["style", "font-size", '20px'],
                ["style", "top", '35px'],
                ["style", "text-align", 'center'],
                ["style", "height", '37px'],
                ["style", "font-family", 'open-sans-condensed, sans-serif'],
                ["style", "width", '99px']
            ],
            "${symbolSelector}": [
                ["style", "height", '108px'],
                ["style", "width", '108px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"criteriosN0": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['45']],
                    rect: ['20px', '19px', '90px', '90px', 'auto', 'auto'],
                    borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                    userClass: 'bordeAzulN0',
                    id: 'romboN0',
                    stroke: [3, 'rgba(0,255,255,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(0,255,255,0.30)']
                },
                {
                    font: ['open-sans-condensed, sans-serif', 20, 'rgba(255,255,255,1.00)', '700', 'none', ''],
                    rect: ['18px', '57px', '99px', '18px', 'auto', 'auto'],
                    title: 'Suministro Gas',
                    userClass: 'meno04 labelN0',
                    id: 'label',
                    text: 'Termino',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_romboN0}": [
                ["color", "background-color", 'rgba(0,255,255,0.30)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '3px'],
                ["style", "width", '90px'],
                ["style", "top", '19px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '20px'],
                ["style", "height", '90px'],
                ["color", "border-color", 'rgba(0,255,255,1.00)'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "rotateZ", '45deg']
            ],
            "${_label}": [
                ["style", "line-height", '20px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '18px'],
                ["style", "font-size", '20px'],
                ["style", "top", '57px'],
                ["style", "text-align", 'center'],
                ["style", "height", '18px'],
                ["style", "font-family", 'open-sans-condensed, sans-serif'],
                ["style", "width", '99px']
            ],
            "${symbolSelector}": [
                ["style", "height", '136px'],
                ["style", "width", '136px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"rectanguloAzulN1-3LIN": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-32px', '-11px', '200px', '74px', 'auto', 'auto'],
                    id: 'rectanguloDesenfoque',
                    fill: ['rgba(0,0,0,0)', 'images/rectanguloDesenfoque.png', '0px', '0px']
                },
                {
                    userClass: 'pad0',
                    rect: ['0px', '0px', '131px', '46px', 'auto', 'auto'],
                    id: 'rectanguloN1',
                    stroke: [2, 'rgb(0, 255, 255)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.70)']
                },
                {
                    userClass: 'labelSegundonivel',
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(112,112,112,1.00)', 'bold', 'none', 'normal'],
                    align: 'center',
                    id: 'label',
                    text: 'label<br>label<br>label',
                    type: 'text',
                    rect: ['2px', '5px', '130px', '42px', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '135px', '50px', 'auto', 'auto'],
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '2px'],
                ["style", "left", '0px'],
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '135px']
            ],
            "${_label}": [
                ["style", "top", '5px'],
                ["style", "width", '130px'],
                ["color", "color", 'rgba(112,112,112,1.00)'],
                ["style", "height", '42px'],
                ["style", "line-height", '14px'],
                ["style", "left", '2px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '135px']
            ],
            "${_rectanguloN1}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,0.70)'],
                ["style", "height", '46px'],
                ["style", "border-width", '2px'],
                ["style", "left", '0px'],
                ["style", "width", '131px']
            ],
            "${_rectanguloDesenfoque}": [
                ["style", "top", '-11px'],
                ["style", "display", 'none'],
                ["style", "height", '74px'],
                ["style", "left", '-32px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid95", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'block', { fromValue: 'none'}], position: 509, duration: 0 }            ]
        }
    }
},
"rectanguloAzulN1-2LIN": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-32px', '-11px', '200px', '74px', 'auto', 'auto'],
                    id: 'rectanguloDesenfoque',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/rectanguloDesenfoque.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '131px', '46px', 'auto', 'auto'],
                    userClass: 'pad0',
                    id: 'rectanguloN1',
                    stroke: [2, 'rgb(0, 255, 255)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.70)']
                },
                {
                    rect: ['3px', '11px', '130px', '27px', 'auto', 'auto'],
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(112,112,112,1.00)', 'bold', 'none', 'normal'],
                    userClass: 'labelSegundonivel',
                    id: 'label',
                    text: 'label<br>label',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['0px', '0px', '135px', '50px', 'auto', 'auto'],
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "cursor", 'auto'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '50px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '135px']
            ],
            "${_label}": [
                ["style", "top", '11px'],
                ["style", "font-size", '14px'],
                ["style", "height", '27px'],
                ["color", "color", 'rgba(112,112,112,1.00)'],
                ["style", "line-height", '14px'],
                ["style", "left", '3px'],
                ["style", "width", '130px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '135px']
            ],
            "${_rectanguloN1}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,0.70)'],
                ["style", "height", '46px'],
                ["style", "left", '0px'],
                ["style", "border-width", '2px'],
                ["style", "width", '131px']
            ],
            "${_rectanguloDesenfoque}": [
                ["style", "top", '-11px'],
                ["style", "height", '74px'],
                ["style", "display", 'none'],
                ["style", "left", '-32px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid95", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'block', { fromValue: 'none'}], position: 509, duration: 0 }            ]
        }
    }
},
"rectanguloAzulN1-1LIN": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-32px', '-11px', '200px', '74px', 'auto', 'auto'],
                    id: 'rectanguloDesenfoque',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/rectanguloDesenfoque.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '131px', '46px', 'auto', 'auto'],
                    userClass: 'pad0',
                    id: 'rectanguloN1',
                    stroke: [2, 'rgb(0, 255, 255)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.70)']
                },
                {
                    rect: ['3px', '18px', '130px', '13px', 'auto', 'auto'],
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(112,112,112,1.00)', 'bold', 'none', 'normal'],
                    userClass: 'labelSegundonivel',
                    id: 'label',
                    text: 'label',
                    align: 'center',
                    type: 'text'
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '135px', '50px', 'auto', 'auto'],
                    userClass: 'hotSpot',
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '2px'],
                ["style", "left", '0px'],
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '135px']
            ],
            "${_label}": [
                ["style", "top", '18px'],
                ["style", "width", '130px'],
                ["color", "color", 'rgba(112,112,112,1.00)'],
                ["style", "height", '13px'],
                ["style", "line-height", '14px'],
                ["style", "left", '3px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '135px']
            ],
            "${_rectanguloN1}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,0.70)'],
                ["style", "height", '46px'],
                ["style", "border-width", '2px'],
                ["style", "left", '0px'],
                ["style", "width", '131px']
            ],
            "${_rectanguloDesenfoque}": [
                ["style", "top", '-11px'],
                ["style", "display", 'none'],
                ["style", "height", '74px'],
                ["style", "left", '-32px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid95", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'block', { fromValue: 'none'}], position: 509, duration: 0 }            ]
        }
    }
},
"CP": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-14px', '-17px', '119px', '119px', 'auto', 'auto'],
                    id: 'circuloDesenfoque',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/circuloDesenfoque.png', '0px', '0px']
                },
                {
                    id: 'casoPractico',
                    type: 'image',
                    rect: ['0px', '0px', '70px', '75px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/casoPractico.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '70px', '75px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(119,119,119,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '75px'],
                ["style", "width", '70px']
            ],
            "${_casoPractico}": [
                ["style", "top", '0px'],
                ["style", "height", '75px'],
                ["style", "left", '0px'],
                ["style", "width", '70px']
            ],
            "${_hotSpot}": [
                ["color", "background-color", 'rgba(119,119,119,0.00)'],
                ["style", "height", '75px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '70px']
            ],
            "${_circuloDesenfoque}": [
                ["style", "top", '-15px'],
                ["style", "display", 'none'],
                ["style", "height", '107px'],
                ["style", "left", '-14px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 510,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 510
            },
            timeline: [
                { id: "eid150", tween: [ "style", "${_circuloDesenfoque}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid151", tween: [ "style", "${_circuloDesenfoque}", "display", 'block', { fromValue: 'none'}], position: 510, duration: 0 }            ]
        }
    }
},
"circuloAzulN2-1LIN": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['-8', '-8', 'auto', 'auto', 'auto', 'auto'],
                    id: 'brilloCirculos'
                },
                {
                    rect: ['3px', '3px', '86px', '86px', 'auto', 'auto'],
                    borderRadius: ['50% 50%', '50% 50%', '50% 50%', '50% 50%'],
                    userClass: 'Fondo',
                    id: 'fondo',
                    stroke: [3, 'rgb(0, 255, 255)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.70)']
                },
                {
                    rect: ['0px', '0px', '86px', '86px', 'auto', 'auto'],
                    borderRadius: ['50% 50%', '50% 50%', '50% 50%', '50% 50%'],
                    userClass: 'Fondo',
                    id: 'borde',
                    stroke: [3, 'rgb(0, 255, 255)', 'dashed'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(112,112,112,1.00)', 'bold', 'none', 'normal'],
                    rect: ['11px', '34px', '70px', '25px', 'auto', 'auto'],
                    type: 'text',
                    id: 'label',
                    text: 'label<br>label',
                    align: 'center',
                    userClass: 'labelSegundonivel'
                },
                {
                    rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'brilloCirculos',
                symbolName: 'brilloCirculos',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '90px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '90px']
            ],
            "${_label}": [
                ["style", "top", '34px'],
                ["style", "font-size", '14px'],
                ["style", "height", '25px'],
                ["color", "color", 'rgba(112,112,112,1.00)'],
                ["style", "line-height", '14px'],
                ["style", "left", '11px'],
                ["style", "width", '70px']
            ],
            "${symbolSelector}": [
                ["style", "height", '92px'],
                ["style", "width", '92px']
            ],
            "${_brilloCirculos}": [
                ["style", "display", 'none']
            ],
            "${_fondo}": [
                ["color", "background-color", 'rgba(255,255,255,0.70)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '3px'],
                ["style", "width", '86px'],
                ["style", "top", '3px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '86px'],
                ["style", "border-width", '3px'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_borde}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-style", 'dashed'],
                ["style", "left", '0px'],
                ["style", "width", '86px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '86px'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-width", '3px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid575", tween: [ "style", "${_brilloCirculos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid576", tween: [ "style", "${_brilloCirculos}", "display", 'block', { fromValue: 'none'}], position: 509, duration: 0 },
                { id: "eid577", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_brilloCirculos}', [0] ], ""], position: 0 }            ]
        }
    }
},
"rectanguloVerdeN1-2LIN": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-32px', '-11px', '200px', '74px', 'auto', 'auto'],
                    id: 'rectanguloDesenfoque',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/rectanguloDesenfoque.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '131px', '46px', 'auto', 'auto'],
                    id: 'rectanguloN1',
                    stroke: [2, 'rgba(195,255,92,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.70)']
                },
                {
                    rect: ['7px', '11px', '120px', '27px', 'auto', 'auto'],
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(112,112,112,1.00)', 'bold', 'none', 'normal'],
                    userClass: 'labelSegundonivel',
                    id: 'label',
                    text: 'label<br>label',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['0px', '0px', '135px', '50px', 'auto', 'auto'],
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '2px'],
                ["style", "left", '0px'],
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'auto'],
                ["style", "width", '135px']
            ],
            "${_label}": [
                ["style", "top", '11px'],
                ["style", "width", '120px'],
                ["color", "color", 'rgba(112,112,112,1.00)'],
                ["style", "height", '27px'],
                ["style", "line-height", '14px'],
                ["style", "left", '7px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '135px']
            ],
            "${_rectanguloN1}": [
                ["color", "background-color", 'rgba(255,255,255,0.70)'],
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "height", '46px'],
                ["color", "border-color", 'rgba(195,255,92,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '131px']
            ],
            "${_rectanguloDesenfoque}": [
                ["style", "top", '-11px'],
                ["style", "display", 'none'],
                ["style", "height", '74px'],
                ["style", "left", '-32px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid95", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'block', { fromValue: 'none'}], position: 509, duration: 0 }            ]
        }
    }
},
"rectanguloFucsiaN1-2LIN": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-32px', '-11px', '200px', '74px', 'auto', 'auto'],
                    id: 'rectanguloDesenfoque',
                    fill: ['rgba(0,0,0,0)', 'images/rectanguloDesenfoque.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'rectanguloN1',
                    stroke: [2, 'rgba(255,0,255,1.00)', 'solid'],
                    rect: ['0px', '0px', '131px', '46px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0.70)']
                },
                {
                    rect: ['7px', '11px', '120px', '27px', 'auto', 'auto'],
                    userClass: 'labelSegundonivel',
                    align: 'center',
                    id: 'label',
                    text: 'label<br>label',
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(112,112,112,1.00)', 'bold', 'none', 'normal'],
                    type: 'text'
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '135px', '50px', 'auto', 'auto'],
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '50px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '135px']
            ],
            "${_label}": [
                ["style", "top", '11px'],
                ["style", "font-size", '14px'],
                ["style", "height", '27px'],
                ["color", "color", 'rgba(112,112,112,1.00)'],
                ["style", "line-height", '14px'],
                ["style", "left", '7px'],
                ["style", "width", '120px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '135px']
            ],
            "${_rectanguloN1}": [
                ["color", "background-color", 'rgba(255,255,255,0.70)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '46px'],
                ["color", "border-color", 'rgba(255,0,255,1.00)'],
                ["style", "border-width", '2px'],
                ["style", "width", '131px']
            ],
            "${_rectanguloDesenfoque}": [
                ["style", "top", '-11px'],
                ["style", "height", '74px'],
                ["style", "display", 'none'],
                ["style", "left", '-32px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid95", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'block', { fromValue: 'none'}], position: 509, duration: 0 }            ]
        }
    }
},
"rectanguloFucsiaN1-3LIN": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-32px', '-11px', '200px', '74px', 'auto', 'auto'],
                    id: 'rectanguloDesenfoque',
                    fill: ['rgba(0,0,0,0)', 'images/rectanguloDesenfoque.png', '0px', '0px']
                },
                {
                    userClass: 'pad0',
                    rect: ['0px', '0px', '131px', '46px', 'auto', 'auto'],
                    id: 'rectanguloN1',
                    stroke: [2, 'rgba(255,0,255,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.50)']
                },
                {
                    rect: ['2px', '5px', '130px', '42px', 'auto', 'auto'],
                    userClass: 'labelSegundonivel',
                    align: 'center',
                    id: 'label',
                    text: 'label<br>label<br>label',
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(112,112,112,1.00)', 'bold', 'none', 'normal'],
                    type: 'text'
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '135px', '50px', 'auto', 'auto'],
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '50px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '135px']
            ],
            "${_label}": [
                ["style", "top", '5px'],
                ["style", "font-size", '14px'],
                ["style", "height", '42px'],
                ["color", "color", 'rgba(112,112,112,1.00)'],
                ["style", "line-height", '14px'],
                ["style", "left", '2px'],
                ["style", "width", '130px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '135px']
            ],
            "${_rectanguloN1}": [
                ["color", "background-color", 'rgba(255,255,255,0.50)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '46px'],
                ["color", "border-color", 'rgba(255,0,255,1.00)'],
                ["style", "border-width", '2px'],
                ["style", "width", '131px']
            ],
            "${_rectanguloDesenfoque}": [
                ["style", "top", '-11px'],
                ["style", "height", '74px'],
                ["style", "display", 'none'],
                ["style", "left", '-32px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid95", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'block', { fromValue: 'none'}], position: 509, duration: 0 }            ]
        }
    }
},
"rectanguloFucsiaN1-1LIN": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-32px', '-11px', '200px', '74px', 'auto', 'auto'],
                    id: 'rectanguloDesenfoque',
                    fill: ['rgba(0,0,0,0)', 'images/rectanguloDesenfoque.png', '0px', '0px']
                },
                {
                    userClass: 'pad0',
                    rect: ['0px', '0px', '131px', '46px', 'auto', 'auto'],
                    id: 'rectanguloN1',
                    stroke: [2, 'rgba(255,0,255,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.70)']
                },
                {
                    rect: ['3px', '18px', '130px', '13px', 'auto', 'auto'],
                    userClass: 'labelSegundonivel',
                    align: 'center',
                    id: 'label',
                    text: 'label',
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(112,112,112,1.00)', 'bold', 'none', 'normal'],
                    type: 'text'
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '135px', '50px', 'auto', 'auto'],
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rectanguloDesenfoque}": [
                ["style", "top", '-11px'],
                ["style", "height", '74px'],
                ["style", "display", 'none'],
                ["style", "left", '-32px'],
                ["style", "width", '200px']
            ],
            "${_label}": [
                ["style", "top", '18px'],
                ["style", "font-size", '14px'],
                ["style", "height", '13px'],
                ["color", "color", 'rgba(112,112,112,1.00)'],
                ["style", "line-height", '14px'],
                ["style", "left", '3px'],
                ["style", "width", '130px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '135px']
            ],
            "${_rectanguloN1}": [
                ["color", "background-color", 'rgba(255,255,255,0.70)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '46px'],
                ["color", "border-color", 'rgba(255,0,255,1.00)'],
                ["style", "border-width", '2px'],
                ["style", "width", '131px']
            ],
            "${_hotSpot}": [
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '50px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '135px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid95", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'block', { fromValue: 'none'}], position: 509, duration: 0 }            ]
        }
    }
},
"labelComun1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(255,255,255,1.00)', 'bold', 'underline', 'normal'],
                    rect: ['7px', '11px', '120px', '27px', 'auto', 'auto'],
                    type: 'text',
                    id: 'label',
                    text: 'Venta cruzada',
                    align: 'center',
                    userClass: 'labelSegundonivel'
                },
                {
                    rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '2px'],
                ["style", "left", '0px'],
                ["style", "top", '0px'],
                ["style", "height", '50px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '50px']
            ],
            "${_label}": [
                ["style", "top", '11px'],
                ["style", "width", '50px'],
                ["style", "text-decoration", 'underline'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '27px'],
                ["style", "line-height", '14px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid320", tween: [ "color", "${_label}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 509 }            ]
        }
    }
},
"labelComun2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(255,255,255,1.00)', 'bold', 'underline', 'normal'],
                    rect: ['7px', '11px', '120px', '27px', 'auto', 'auto'],
                    type: 'text',
                    id: 'label',
                    text: 'Cambio de comercializador',
                    align: 'center',
                    userClass: 'labelSegundonivel'
                },
                {
                    rect: ['0px', '0px', '89px', '50px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '50px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '89px']
            ],
            "${_label}": [
                ["style", "top", '11px'],
                ["style", "font-size", '14px'],
                ["style", "left", '1px'],
                ["style", "line-height", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '27px'],
                ["style", "text-decoration", 'underline'],
                ["style", "width", '88px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '90px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid320", tween: [ "color", "${_label}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 509 }            ]
        }
    }
},
"labelComun3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(255,255,255,1.00)', 'bold', 'underline', 'normal'],
                    rect: ['7px', '11px', '120px', '27px', 'auto', 'auto'],
                    type: 'text',
                    id: 'label',
                    text: 'Desistimiento',
                    align: 'center',
                    userClass: 'labelSegundonivel'
                },
                {
                    rect: ['0px', '0px', '80px', '31px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '2px'],
                ["style", "left", '0px'],
                ["style", "top", '0px'],
                ["style", "height", '31px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '80px']
            ],
            "${_label}": [
                ["style", "line-height", '14px'],
                ["style", "width", '74px'],
                ["style", "text-decoration", 'underline'],
                ["style", "height", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "top", '9px'],
                ["style", "left", '3px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '80px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid320", tween: [ "color", "${_label}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 509 },
                { id: "eid323", tween: [ "style", "${_label}", "width", '74px', { fromValue: '74px'}], position: 0, duration: 0 },
                { id: "eid365", tween: [ "style", "${_label}", "height", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid367", tween: [ "style", "${_label}", "top", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
                { id: "eid368", tween: [ "style", "${_label}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 }            ]
        }
    }
},
"labelComun4": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(255,255,255,1.00)', 'bold', 'underline', 'normal'],
                    rect: ['7px', '11px', '120px', '27px', 'auto', 'auto'],
                    type: 'text',
                    id: 'label',
                    text: 'Retención de...',
                    align: 'center',
                    userClass: 'labelSegundonivel'
                },
                {
                    rect: ['0px', '0px', '60px', '50px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '50px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '60px']
            ],
            "${_label}": [
                ["style", "line-height", '14px'],
                ["style", "font-size", '14px'],
                ["style", "left", '1px'],
                ["style", "top", '11px'],
                ["style", "height", '27px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "text-decoration", 'underline'],
                ["style", "width", '58px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '60px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid320", tween: [ "color", "${_label}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 509 },
                { id: "eid376", tween: [ "style", "${_label}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
                { id: "eid378", tween: [ "style", "${_label}", "left", '1px', { fromValue: '1px'}], position: 0, duration: 0 }            ]
        }
    }
},
"labelComun5": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(255,255,255,1.00)', 'bold', 'underline', 'normal'],
                    rect: ['7px', '11px', '120px', '27px', 'auto', 'auto'],
                    type: 'text',
                    id: 'label',
                    text: 'Renovación',
                    align: 'center',
                    userClass: 'labelSegundonivel'
                },
                {
                    rect: ['1px', '-1px', '67px', '39px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '2px'],
                ["style", "left", '1px'],
                ["style", "top", '-1px'],
                ["style", "height", '39px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '67px']
            ],
            "${_label}": [
                ["style", "top", '11px'],
                ["style", "width", '65px'],
                ["style", "text-decoration", 'underline'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '14px'],
                ["style", "line-height", '14px'],
                ["style", "left", '2px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '38px'],
                ["style", "width", '69px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid379", tween: [ "style", "${_label}", "height", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid320", tween: [ "color", "${_label}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 509 },
                { id: "eid381", tween: [ "style", "${_label}", "width", '65px', { fromValue: '65px'}], position: 0, duration: 0 },
                { id: "eid380", tween: [ "style", "${_label}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 }            ]
        }
    }
},
"labelSoloTXT-1LIN": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['3px', '18px', '130px', '14px', 'auto', 'auto'],
                    font: ['open-sans-condensed, sans-serif', 16, 'rgba(112,112,112,1.00)', '300', 'underline', 'normal'],
                    id: 'label',
                    text: 'label',
                    align: 'left',
                    type: 'text'
                },
                {
                    type: 'image',
                    id: 'flechaCirculo',
                    rect: ['0px', '3px', '15px', '15px', 'auto', 'auto'],
                    clip: ['rect(-0.3154296875px 15.4794921875px 15.2705078125px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/flechaCirculo.svg', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '194px', '20px', 'auto', 'auto'],
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flechaCirculo}": [
                ["style", "top", '3px'],
                ["style", "height", '15px'],
                ["style", "clip", [-0.3154296875,15.4794921875,15.2705078125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "width", '15px']
            ],
            "${_hotSpot}": [
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '20px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '194px']
            ],
            "${_label}": [
                ["style", "line-height", '18px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '19px'],
                ["style", "width", '175px'],
                ["style", "top", '3px'],
                ["style", "text-align", 'left'],
                ["style", "height", '14px'],
                ["style", "text-decoration", 'underline'],
                ["style", "font-size", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '194px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid824", tween: [ "style", "${_label}", "line-height", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
                { id: "eid424", tween: [ "color", "${_label}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 509 }            ]
        }
    }
},
"rectanguloVerdeN2-1LIN": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-32px', '-11px', '200px', '74px', 'auto', 'auto'],
                    id: 'rectanguloDesenfoque',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/rectanguloDesenfoque.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '296px', '21px', 'auto', 'auto'],
                    id: 'rectanguloN2',
                    stroke: [2, 'rgba(195,255,92,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(195,255,92,0.30)']
                },
                {
                    type: 'text',
                    userClass: 'labelSegundonivel',
                    rect: ['7px', '6px', '285px', '14px', 'auto', 'auto'],
                    id: 'label',
                    text: 'label',
                    align: 'center',
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '25px', 'auto', 'auto'],
                    userClass: 'hotSpot',
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rectanguloN2}": [
                ["color", "background-color", 'rgba(195,255,92,0.30)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgba(195,255,92,1.00)'],
                ["style", "border-width", '2px'],
                ["style", "width", '296px']
            ],
            "${_hotSpot}": [
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '25px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '300px']
            ],
            "${_label}": [
                ["style", "top", '6px'],
                ["style", "font-size", '14px'],
                ["style", "height", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "line-height", '14px'],
                ["style", "left", '7px'],
                ["style", "width", '285px']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '300px']
            ],
            "${_rectanguloDesenfoque}": [
                ["style", "top", '-5px'],
                ["style", "height", '37px'],
                ["style", "display", 'none'],
                ["style", "left", '-55px'],
                ["style", "width", '409px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid95", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'block', { fromValue: 'none'}], position: 509, duration: 0 },
                { id: "eid540", tween: [ "color", "${_label}", "color", 'rgba(133,133,133,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 509 }            ]
        }
    }
},
"brilloCirculos": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'circuloDesenfoque2',
                    type: 'image',
                    rect: ['-13px', '-12px', '135px', '135px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/circuloDesenfoque.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_circuloDesenfoque2}": [
                ["style", "top", '-12px'],
                ["style", "height", '135px'],
                ["style", "left", '-13px'],
                ["style", "width", '135px']
            ],
            "${symbolSelector}": [
                ["style", "height", '110px'],
                ["style", "width", '110px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"circuloVerdeN1-3LIN": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    display: 'none',
                    type: 'rect',
                    id: 'brilloCirculos',
                    rect: ['-8', '-8', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    userClass: 'Fondo',
                    borderRadius: ['50% 50%', '50% 50%', '50% 50%', '50% 50%'],
                    rect: ['3px', '3px', '86px', '86px', 'auto', 'auto'],
                    id: 'fondo',
                    stroke: [3, 'rgb(0, 255, 255)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.70)']
                },
                {
                    userClass: 'Fondo',
                    borderRadius: ['50% 50%', '50% 50%', '50% 50%', '50% 50%'],
                    rect: ['0px', '0px', '86px', '86px', 'auto', 'auto'],
                    id: 'borde',
                    stroke: [3, 'rgba(195,255,92,1.00)', 'dashed'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    type: 'text',
                    rect: ['11px', '26px', '70px', '40px', 'auto', 'auto'],
                    align: 'center',
                    id: 'label',
                    text: 'label<br>label<br>label<br>',
                    userClass: 'labelSegundonivel',
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(112,112,112,1.00)', 'bold', 'none', 'normal']
                },
                {
                    userClass: 'hotSpot',
                    type: 'rect',
                    rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'brilloCirculos',
                symbolName: 'brilloCirculos',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '2px'],
                ["style", "left", '0px'],
                ["style", "top", '0px'],
                ["style", "height", '90px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '90px']
            ],
            "${_label}": [
                ["style", "top", '26px'],
                ["style", "width", '70px'],
                ["color", "color", 'rgba(112,112,112,1.00)'],
                ["style", "height", '40px'],
                ["style", "line-height", '14px'],
                ["style", "left", '11px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '92px'],
                ["style", "width", '92px']
            ],
            "${_brilloCirculos}": [
                ["style", "display", 'none']
            ],
            "${_fondo}": [
                ["color", "background-color", 'rgba(255,255,255,0.70)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '3px'],
                ["style", "width", '86px'],
                ["style", "top", '3px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '86px'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-width", '3px']
            ],
            "${_borde}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-style", 'dashed'],
                ["style", "left", '0px'],
                ["style", "width", '86px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '86px'],
                ["color", "border-color", 'rgba(195,255,92,1.00)'],
                ["style", "border-width", '3px'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid575", tween: [ "style", "${_brilloCirculos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid576", tween: [ "style", "${_brilloCirculos}", "display", 'block', { fromValue: 'none'}], position: 509, duration: 0 },
                { id: "eid577", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_brilloCirculos}', [0] ], ""], position: 0 }            ]
        }
    }
},
"circuloFucsiaN1-3LIN": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['-8', '-8', 'auto', 'auto', 'auto', 'auto'],
                    id: 'brilloCirculos'
                },
                {
                    rect: ['3px', '3px', '86px', '86px', 'auto', 'auto'],
                    borderRadius: ['50% 50%', '50% 50%', '50% 50%', '50% 50%'],
                    userClass: 'Fondo',
                    id: 'fondo',
                    stroke: [3, 'rgb(0, 255, 255)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.70)']
                },
                {
                    rect: ['0px', '0px', '86px', '86px', 'auto', 'auto'],
                    borderRadius: ['50% 50%', '50% 50%', '50% 50%', '50% 50%'],
                    userClass: 'Fondo',
                    id: 'borde',
                    stroke: [3, 'rgba(249,89,0,1.00)', 'dashed'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    userClass: 'labelSegundonivel',
                    type: 'text',
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(112,112,112,1.00)', 'bold', 'none', 'normal'],
                    id: 'label',
                    text: 'label<br>label<br>label<br>',
                    align: 'center',
                    rect: ['11px', '26px', '70px', '40px', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                    userClass: 'hotSpot',
                    type: 'rect',
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'brilloCirculos',
                symbolName: 'brilloCirculos',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '90px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '90px']
            ],
            "${_label}": [
                ["style", "top", '26px'],
                ["style", "font-size", '14px'],
                ["style", "height", '40px'],
                ["color", "color", 'rgba(112,112,112,1.00)'],
                ["style", "line-height", '14px'],
                ["style", "left", '11px'],
                ["style", "width", '70px']
            ],
            "${symbolSelector}": [
                ["style", "height", '92px'],
                ["style", "width", '92px']
            ],
            "${_brilloCirculos}": [
                ["style", "display", 'none']
            ],
            "${_fondo}": [
                ["color", "background-color", 'rgba(255,255,255,0.70)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '3px'],
                ["style", "width", '86px'],
                ["style", "top", '3px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '86px'],
                ["style", "border-width", '3px'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_borde}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-style", 'dashed'],
                ["style", "left", '0px'],
                ["style", "width", '86px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '86px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-width", '3px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid575", tween: [ "style", "${_brilloCirculos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid576", tween: [ "style", "${_brilloCirculos}", "display", 'block', { fromValue: 'none'}], position: 509, duration: 0 },
                { id: "eid577", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_brilloCirculos}', [0] ], ""], position: 0 }            ]
        }
    }
},
"circuloFucsiaN1-2LIN": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['-8', '-8', 'auto', 'auto', 'auto', 'auto'],
                    id: 'brilloCirculos'
                },
                {
                    rect: ['3px', '3px', '86px', '86px', 'auto', 'auto'],
                    borderRadius: ['50% 50%', '50% 50%', '50% 50%', '50% 50%'],
                    userClass: 'Fondo',
                    id: 'fondo',
                    stroke: [3, 'rgb(0, 255, 255)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.70)']
                },
                {
                    rect: ['0px', '0px', '86px', '86px', 'auto', 'auto'],
                    borderRadius: ['50% 50%', '50% 50%', '50% 50%', '50% 50%'],
                    userClass: 'Fondo',
                    id: 'borde',
                    stroke: [3, 'rgba(249,89,0,1.00)', 'dashed'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(112,112,112,1.00)', 'bold', 'none', 'normal'],
                    rect: ['11px', '34px', '70px', '26px', 'auto', 'auto'],
                    type: 'text',
                    id: 'label',
                    text: 'label<br>label<br>',
                    align: 'center',
                    userClass: 'labelSegundonivel'
                },
                {
                    rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'brilloCirculos',
                symbolName: 'brilloCirculos',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '2px'],
                ["style", "left", '0px'],
                ["style", "top", '0px'],
                ["style", "height", '90px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '90px']
            ],
            "${_label}": [
                ["style", "top", '34px'],
                ["style", "width", '70px'],
                ["color", "color", 'rgba(112,112,112,1.00)'],
                ["style", "height", '26px'],
                ["style", "line-height", '14px'],
                ["style", "left", '11px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '92px'],
                ["style", "width", '92px']
            ],
            "${_brilloCirculos}": [
                ["style", "display", 'none']
            ],
            "${_fondo}": [
                ["color", "background-color", 'rgba(255,255,255,0.70)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '3px'],
                ["style", "width", '86px'],
                ["style", "top", '3px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '86px'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-width", '3px']
            ],
            "${_borde}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-style", 'dashed'],
                ["style", "left", '0px'],
                ["style", "width", '86px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '86px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "border-width", '3px'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid575", tween: [ "style", "${_brilloCirculos}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid576", tween: [ "style", "${_brilloCirculos}", "display", 'block', { fromValue: 'none'}], position: 509, duration: 0 },
                { id: "eid577", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_brilloCirculos}', [0] ], ""], position: 0 }            ]
        }
    }
},
"rectanguloFUCSIAN2-1LIN": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-32px', '-11px', '200px', '74px', 'auto', 'auto'],
                    id: 'rectanguloDesenfoque',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/rectanguloDesenfoque.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '296px', '21px', 'auto', 'auto'],
                    id: 'rectanguloN2',
                    stroke: [2, 'rgba(249,89,0,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(249,89,0,0.30)']
                },
                {
                    userClass: 'labelSegundonivel',
                    type: 'text',
                    font: ['open-sans-condensed, sans-serif', 14, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal'],
                    id: 'label',
                    text: 'label<br>',
                    align: 'center',
                    rect: ['7px', '6px', '285px', '14px', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '300px', '25px', 'auto', 'auto'],
                    userClass: 'hotSpot',
                    id: 'hotSpot',
                    stroke: [2, 'rgb(0, 255, 255)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rectanguloN2}": [
                ["color", "background-color", 'rgba(249,89,0,0.30)'],
                ["style", "top", '0px'],
                ["style", "border-width", '2px'],
                ["style", "height", '21px'],
                ["color", "border-color", 'rgba(249,89,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '296px']
            ],
            "${_hotSpot}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '2px'],
                ["style", "left", '0px'],
                ["style", "top", '0px'],
                ["style", "height", '25px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'auto'],
                ["style", "width", '300px']
            ],
            "${_label}": [
                ["style", "top", '6px'],
                ["style", "width", '285px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '14px'],
                ["style", "line-height", '14px'],
                ["style", "left", '7px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '300px']
            ],
            "${_rectanguloDesenfoque}": [
                ["style", "top", '-5px'],
                ["style", "display", 'none'],
                ["style", "height", '37px'],
                ["style", "left", '-55px'],
                ["style", "width", '409px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 509,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 509
            },
            timeline: [
                { id: "eid95", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_rectanguloDesenfoque}", "display", 'block', { fromValue: 'none'}], position: 509, duration: 0 },
                { id: "eid540", tween: [ "color", "${_label}", "color", 'rgba(133,133,133,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 509 }            ]
        }
    }
},
"hojaFondo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-47px', '-85px', '235px', '390px', 'auto', 'auto'],
                    transform: [[0, 0], ['-3']],
                    id: 'hojaFondoOver',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/hojaFondoOver.png', '0px', '0px']
                },
                {
                    id: 'hojaFondo',
                    type: 'image',
                    rect: ['0px', '0px', '142px', '229px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/hojaFondo.svg', '0px', '0px']
                },
                {
                    id: 'hojaAzul',
                    type: 'image',
                    rect: ['20px', '-15px', '124px', '129px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/hojaAzul.svg', '0px', '0px']
                },
                {
                    id: 'hojaFuccia',
                    type: 'image',
                    rect: ['-2px', '114px', '72px', '116px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/hojaFuccia.svg', '0px', '0px']
                },
                {
                    id: 'hojaVerde',
                    type: 'image',
                    rect: ['72px', '116px', '73px', '114px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/hojaVerde.svg', '0px', '0px']
                },
                {
                    font: ['open-sans-condensed, sans-serif', 19, 'rgba(0,0,0,1)', '400', 'none', ''],
                    rect: ['10px', '133px', 'auto', 'auto', 'auto', 'auto'],
                    type: 'text',
                    id: 'tituloHoja',
                    text: '<br>Mercado Residencial y<br>Pequeño negocio',
                    align: 'center',
                    userClass: 'menoUno'
                },
                {
                    font: ['open-sans-condensed, sans-serif', 19, 'rgba(0,0,0,1)', '400', 'none', ''],
                    rect: ['25px', '133px', 'auto', 'auto', 'auto', 'auto'],
                    type: 'text',
                    id: 'tituloHojaBold',
                    text: '<b>Contratación</b>',
                    align: 'center',
                    userClass: 'menoUno'
                },
                {
                    rect: ['0px', '0px', '142px', '229px', 'auto', 'auto'],
                    id: 'hotSpot',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/hojaFondo.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotSpot}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_hojaFondo}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_tituloHojaBold}": [
                ["style", "top", '133px'],
                ["style", "text-align", 'center'],
                ["style", "line-height", '20px'],
                ["style", "font-family", 'open-sans-condensed, sans-serif'],
                ["style", "font-weight", '400'],
                ["style", "left", '25px'],
                ["style", "font-size", '19px']
            ],
            "${_hojaAzul}": [
                ["style", "left", '20px'],
                ["style", "top", '-15px']
            ],
            "${_hojaVerde}": [
                ["style", "left", '72px'],
                ["style", "top", '116px']
            ],
            "${symbolSelector}": [
                ["style", "height", '229px'],
                ["style", "width", '142px']
            ],
            "${_hojaFuccia}": [
                ["style", "left", '-2px'],
                ["style", "top", '114px']
            ],
            "${_tituloHoja}": [
                ["style", "line-height", '20px'],
                ["style", "text-align", 'center'],
                ["style", "top", '133px'],
                ["style", "font-weight", '400'],
                ["style", "font-family", 'open-sans-condensed, sans-serif'],
                ["style", "left", '10px'],
                ["style", "font-size", '19px']
            ],
            "${_hojaFondoOver}": [
                ["style", "top", '-75px'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '368px'],
                ["style", "display", 'none'],
                ["style", "left", '-36px'],
                ["style", "width", '216px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 250
            },
            timeline: [
                { id: "eid1239", tween: [ "style", "${_hojaFondoOver}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1240", tween: [ "style", "${_hojaFondoOver}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-23769470");
