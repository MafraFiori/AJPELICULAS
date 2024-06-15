sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("ajpeliculas.catalogo.controller.Home", {
            onInit: function () {
                let Modelo = new JSONModel();
                let vlr3Dantigo = "R$ 1,50"
                let vlr3Lancamento = "R$ 2,80"
                let vlr3Privacidade = "R$ 4,60"
                let vlrCeramica = "R$ 3,85"
                let vlrCeramicaPriv = "R$ 4,90"
                let objeto = {
                    d: [

                        {
                            Modelo: "Xiaomi",
                            Categoria: [
                                {
                                    Modelo: "Pocophone F1",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI GO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI S2",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAO MI A3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAO MI A3 LITE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI 6/6A",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAO MI NOTE 6 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI 7",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI 7A",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI NOTE 7/NOTE PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAO MI 8",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI 8/8A",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAO MI 8 LITE / NOTE 6",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAO MI 8 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI NOTE 8",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI NOTE 8 2021",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAO MI NOTE 8T",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAO MI NOTE 8 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAO MI 9/9 LITE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAO MI 9/9 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAO MI 9T/9T PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI 9",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI 9A/9C",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI NOTE 9",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "NOTE 9S/NOTE 9 PRO/ NOTE 9 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI 9T / 9 POWER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAO MI NOTE 9T",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI NOTE 10",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI NOTE 10S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI NOTE 10S 5G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAO MI 10T LITE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "RED MI NOTE 10 PRO / NOTE 10 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAOMI MI POCO C3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAOMI MI POCO M3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAOMI MI POCO F3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAOMI MI POCO X3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAOMI MI POCO X3 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAOMI MI POCO M3 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XIAOMI MI POCO M3 PRO 5G",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        },
                        {
                            Modelo: "Apple",
                            Categoria: [
                                {
                                    Modelo: "6G (P)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "6G (B)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "6 PLUS (P)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "6 PLUS (B)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "6 PLUS (P)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "7G/8G (P)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "7G/8G (B)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "7/8 PLUS (P)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "7/8 PLUS (B)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "X/XS/11 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XS MAX/XS/11 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "12 MINI (5.4) NOVO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "12/12 PRO (6.1) NOVO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "12 PRO MAX (6.7) NOVO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XR/11",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        },
                        {
                            Modelo: "Samsumg",
                            Categoria: [
                                {
                                    Modelo: "A7 2018",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A8 2018",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A8 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A9 2018",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A10",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A20/A30/A50",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A70",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A80/A90",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M10",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M20",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M21/M31",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M21S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M30",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M31",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M51",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M71",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "GALAXY S10E",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "GALAXY A81/ NOTE 10 LITE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "GALAXY A91/S10 LITE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "GALAXY S21",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "S21 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J2 PRIME",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J2 CORE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J4",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J4 PLUS/J4 CORE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J5 PRIME (P)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J5 PRIME (B)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J5 PRO (P)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J5 PRO (B)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J5 PRO (D)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J6",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J6 PLUS / J6 PRIME",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J7",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J7 PRIME (P)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J7 PRIME (B)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J7 PRO (P)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J7 PRO (B)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J7 (D)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J8",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M02",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M02S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M02S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M12",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M31S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M32 (4G)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M42 (5G)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M52",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M62",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A02",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A02S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A12",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A22 (4G)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A22 (5G)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A32 (4G)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A52",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A72",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "S20FE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "S21 FE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "F02",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "F02S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "F12",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "F42",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "F52",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "F62",
                                    Valor: vlr3Dantigo
                                }


                            ]
                        },
                        {
                            Modelo: "Motorola",
                            Categoria: [
                                {
                                    Modelo: "Z2 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "Z3 PLAY (P)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "Z3 PLAY (B)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "Z4 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ONE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ONE VISION",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ONE ACTION",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ONE ZOOM",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ONE MACRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ONE HYPER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ONE FUSION",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ONE FUSION PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E 2020",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E5 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E6",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E6 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E6 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E6S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E6I",
                                    Valor: vlr3Dantigo
                                }
                                ,
                                {
                                    Modelo: "G5",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G5 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G5S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G5S PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G6",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G6 PLAY/E5 (P)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G6 PLAY/E5 (D)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G6 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G7/G7 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G7 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G7 POWER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G8",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G8 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G8 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G8 POWER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G8 POWER LITE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G9",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G9 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G9 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G9 POWER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G FAST",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G STYLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G POWER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G10",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G10 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G10 POWER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G20",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G30",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G40 FUSION",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G41",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G50",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G51",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G60",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G60S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G100",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E7 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E7 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E7 POWER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E7 2021",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E7 iPOWER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "EDGE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "EDGE S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G20",
                                    Valor: vlr3Dantigo
                                }

                            ]
                        },
                        {
                            Modelo: "LG",
                            Categoria: [
                                {
                                    Modelo: "K8 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K9",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "10",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K10 POWER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K10 2017",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K11 / K11 PLUS / K10 2018",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K12 / K12 PLUS / K40",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K12 MAX / K12 PRIME / K50",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K22 / K22 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K40S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K41S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K42 / K52 / K62",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K50S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K51S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K61",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K71",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        },
                        {
                            Modelo: "ASUS",
                            Categoria: [
                                {
                                    Modelo: "ZF LIVE 2017 ( ZB501KL )",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ZF LIVE L1 ( ZA550KL )",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ZF LIVE L2 ( ZB556KL )",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ZF MAX M1 ( ZB555KL )",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ZF MAX M2 ( ZB633KL )",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ZF MAX PRO M1 ( ZB601KL / ZB602KL )",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ZF MAX PLUS M1 ( ZB570KL )",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ZF MAX PRO M2 ( ZB631KL )",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ZF 5Z ( ZB620KL )",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ZF 5 SELFE ( ZB600KL )",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ZF MAX SHOT / MAX PLUS M2 ( ZB634KL )",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ZF 6 ( ZB630KL )",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        }, {
                            Modelo: "REALME",
                            Categoria: [
                                {
                                    Modelo: "C11",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "C25",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "6 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "7",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "7 5G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "7 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "8 5G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "8 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XT",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "GT 5G",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        }
                    ],
                    Dnova: [

                        {
                            Modelo: "Xiaomi",
                            Categoria: [
                                {
                                    Modelo: "POCO X3 GT",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "REDMI NOTE 11",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "XIAO MI 11",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "XIAO MI 11 LITE",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "XIAO MI 11X",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "XIAO MI 11T",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "XIAO MI 11 ULTRA",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "XM POCO M4",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "13C",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "12 T",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "14",
                                    Valor: vlr3Lancamento
                                }
                            ]
                        },
                        {
                            Modelo: "Apple",
                            Categoria: [
                                {
                                    Modelo: "13 MINI (5.4)",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "13 / 13 PRO (6.1)",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "13 / 13 PRO MAX(6.7)",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "14",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "14 PRO",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "14 PRO MAX",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "14 MAX / 14 PLUS",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "15",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "15 PRO",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "15 PRO MAX",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "15 PLUS",
                                    Valor: vlr3Lancamento
                                }
                            ]
                        },
                        {
                            Modelo: "Samsumg",
                            Categoria: [
                                {
                                    Modelo: "A03",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A03S",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A03CORE",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A13 4G/A13 5G",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A23",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A33",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A52S 5G",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A53",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A73",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S22",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S22 PLUS",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S22 ULTRA",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A52",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A54",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A55",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A15",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A25",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A32",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A53",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A13",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A24",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A14",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A72",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S24",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S24 PLUS",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S24 ULTRA",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A05",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A15",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "M34",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A05S",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A04E",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A25",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A53",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A05",
                                    Valor: vlr3Lancamento
                                }
                            ]
                        },
                        {
                            Modelo: "Motorola",
                            Categoria: [
                                {
                                    Modelo: "E20",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "E30",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "E40",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "EDGE 20",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "EDGE 20 LITE",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "EDGE 20 PRO",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "EDGE 30",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "EDGE 30 PRO",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "G22",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "G31",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "G41",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "G71",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "G82",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "G62",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "G200",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G24",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G43",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G54",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G14",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G13",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G53",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G50",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G60",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G51",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G32",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G54",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G71",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G73",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G34",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 40",
                                    Valor: vlr3Lancamento
                                }
                                , {
                                    Modelo: "EDGE 40 PRO",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 40 NEO",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G04",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "E 6S",
                                    Valor: vlr3Lancamento
                                }
                            ]
                        }
                    ],
                    Privacidade: [
                        {
                            Modelo: "Apple",
                            Categoria: [
                                {
                                    Modelo: "6G (B)",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "6G (P)",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "6 PLUS(B)",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "6 PLUS(P)",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "7/8 (B)",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "7/8 (P)",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "7 PLUS/8 PLUS (B)",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "7 PLUS/8 PLUS (P)",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "X/XS",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "XR/11",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "XS MAX/11 PRO MAX",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "11 PRO",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "12",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "12 Mini",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "12 Pro",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "12 Pro Max",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "13 Mini",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "13/13 Pro",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "13 Pro Max",
                                    Valor: vlr3Privacidade
                                }
                            ]
                        },
                        {
                            Modelo: "Xiaomi",
                            Categoria: [
                                {
                                    Modelo: "Poco X3",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Poxo X3 Pro",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Poco F3",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Poco C3",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Poco M2",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Poco M3",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Mi S2",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Redmi Note 7",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Xiao MI 8 Lite",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Redmi 8/8A",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Xiao MI Note 8",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Xiao MI Note 8 PRO",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "MI 9/ MI9 LITE",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "MI 9 SE",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Redmi Note 7",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Redmi 9",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Redmi 9A/9C",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Redmi Note 9",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Redmi Note 9/NOTE 9T",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Xiao MI 9 PRO",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "REDMI NOTE 9S/NOTE 9 PRO",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "Redmi 10",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "XIAO MI 10T",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "XIAO MI 10T LITE",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "REDMI NOTE 10/NOTE 10S",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "REDMI NOTE 10 PRO/NOTE",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "REDMI 11i",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "REDMI 11 LITE",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "REDMI NOTE 11 4G",
                                    Valor: vlr3Privacidade
                                }
                            ]
                        }, {
                            Modelo: "LG",
                            Categoria: [
                                {
                                    Modelo: "K42/K52/K62",
                                    Valor: vlr3Privacidade
                                }
                            ]
                        }, {
                            Modelo: "SAMSUNG",
                            Categoria: [
                                {
                                    Modelo: "A03 CORE",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "M22",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "M52",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "J4 PLUS/ J6 PLUS",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A01",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A01 CORE",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A02",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A02S",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A03S",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A10/A10S",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A20/A30/A50",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A70",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "J4 PLUS/J6 PLUS",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A01",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A01 CORE",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A02",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A02S",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A03S",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A10/A10S",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A20/A30/A50",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A70",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A11",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A12",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A20S",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A21",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A21S",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A30S/A50S",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A31",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A22 4G",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A22 5G",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A32 4G",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A32 5G",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A51",
                                    Valor: vlr3Privacidade
                                },
                                ,
                                {
                                    Modelo: "A52",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A72",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "M12",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "M21",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "M21S",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A62",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "S20 FE",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "S21",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "A21 PLUS",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "M31",
                                    Valor: vlr3Privacidade
                                }
                            ]
                        },
                        {
                            Modelo: "Motorola",
                            Categoria: [
                                {
                                    Modelo: "EDGE 20",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "EDGE 20 LITE",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "E6 PLAY",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "E6 PLUS",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G6",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G6 PLAY(P)",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G6 PLAY(D)",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G6 PLUS",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "g7",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G7 PLAY",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G8 PLAY",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G8 PLUS",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G8 POWER",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G8 POWER LITE",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G9/G9 PLAY",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G9 PLUS",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G9 POWER",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G10",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G10 PLAY",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G10 POWER",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G100",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G20",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G30",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G40",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G50",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G60",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "G100",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "ONE ACTION",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "ONE MACRO",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "ONE FUSION",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "ONE FUSION PLUS",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "ONE HYPER",
                                    Valor: vlr3Privacidade
                                },
                                {
                                    Modelo: "ONE ZOOM",
                                    Valor: vlr3Privacidade
                                }
                            ]
                        }
                    ],
                    Ceramica: [
                        {
                            Modelo: "Realme",
                            Categoria: [
                                {
                                    Modelo: "7 5G/7 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "8 4G/ 8 PRO 4G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "GT 5G/GT NEO/GT NEO FLASH",
                                    Valor: vlrCeramica
                                }
                            ]
                        },
                        {
                            Modelo: "Xiaomi",
                            Categoria: [
                                {
                                    Modelo: "POCO C3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCO M3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCO M3 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCO F3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCO X2 / X3 / X3 NFC",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 7 / NOTE 7 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 8 / 8A",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 8 / XT",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 8 / NOTE 8T",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 8 PRO / F11",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 8 PRO / POCO M3 / REDMI 9T",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI K22 / K22 PRO / 9T",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 9A / 9C",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 9 / 9I / 9A / 9C / Y5S / POCO M2",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 9",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 9S / NOTE 9 PRO / POCO X3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 9T",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 10 4G/ NOTE 10 5G / NOTE 10S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 10 5G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 10 PRO / POCO F3 / NOTE 10 PRO MAX / K40 / K40 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MI 10 T/ REDMI K30S / K30 PRO / K30",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "11 / 11 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "K20 / K2 PRO / 9T",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "10 T",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "11",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "11 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCO M4 PRO (5G)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCO F3 (5G)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 10A / 9A",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 10C",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 11 (4G)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 11 / NOTE 11 PRO",
                                    Valor: vlrCeramica
                                }
                            ]
                        },
                        {
                            Modelo: "Apple",
                            Categoria: [
                                {
                                    Modelo: "SE 2020 (P)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "SE 2020 (B)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "6G (B)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "6G (P)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "7G (B)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "7G (P)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "7 PLUS (B)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "7 PLUS (P)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "X / XS / 11 PRO (5.8)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "XR / 11 (6.1)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "XS MAX / 11 PRO MAX (6.5)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 MINI (5.4)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 PRO (6.1)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 PRO MAX (6.7)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "13 / 13 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "13 MINI",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "13 PRO MAX",
                                    Valor: vlrCeramica
                                }
                            ]
                        },
                        {
                            Modelo: "Samsung",
                            Categoria: [
                                {
                                    Modelo: "A01",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A10 CORE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A10 / M10",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A11 / M11",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A12 / A42 / A02 / A02S / A32 (5G)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A20 / A30 / A50 / M30",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A20S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A03S / A22 (5G)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A21S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A22 4G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A31 / A32 4G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A51",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A52 4G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A71 / A80 / A91 / S10 LITE / NOTE 10 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A72 4G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M21 / M21S / M31",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M31S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M12",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M32",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M52",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M51 / M62 / A71 / A72",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S8 / S9",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S8 PLUS / S9 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S10",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S10 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S10 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S11E/S20",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S20 FE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S11 PLUS / S20 ULTRA / S20 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S21",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S21 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S21 ULTRA",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 10",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 10 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 10 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 20",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 20 ULTRA",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A13",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A23 / M23",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M53 (5G) / M52 (5G)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A33",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A73",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S22",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S22 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S22 ULTRA",
                                    Valor: vlrCeramica
                                }
                            ]
                        },
                        {
                            Modelo: "Motorola",
                            Categoria: [
                                {
                                    Modelo: "MOTO G PLAY (2021)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G FAST",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO ONE FUSION",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO ONE FUSION PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO E 2020",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO E6 PLAY",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO E6 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO E7 2021 / E7 PLAY",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G 5G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G7 / G7 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G7 POWER",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G8",
                                    Valor: vlrCeramica
                                },
                                ,
                                {
                                    Modelo: "MOTO G8 PLAY / ONE MACRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G8 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G8 POWER",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G8 POWER LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G9",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G9 PLAY",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G9 / G9 PLAY / E7 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G9 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G9 POWER",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G10 / G20 / G30 / G50 / G10 POWER",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G60 / G40 FUSION",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G10 PLAY",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G100 / G5 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO EDGE 20 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO EDGE 20 / 20 PLUS / 20 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO E40",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G22",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G 71",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G 51",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G 52",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G200",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO G 31 / G 41",
                                    Valor: vlrCeramica
                                }

                            ]
                        }, {
                            Modelo: "LG",
                            Categoria: [
                                {
                                    Modelo: "K8 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "K40 S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "K42 / K52 / K62",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "K41 S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "K50 S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "K51 S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "K61 / K60 / K61S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "K71",
                                    Valor: vlrCeramica
                                }
                            ]
                        }
                    ],
                    CeramicaPrivacidade: [
                        {
                            Modelo: "Samsung",
                            Categoria: [
                                {
                                    Modelo: "A01",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A01 CORE",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A02",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A02 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A03",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A03 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A03 CORE",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A04",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A04 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A04 CORE",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A04 E",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A10",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A10 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A11",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A12",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A13",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A14",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A20",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A20 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A21",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A21 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A22 4G",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A24",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A30",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A30S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A31",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A32 4G",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A32 5G",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A33",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A34",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A41",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A42 5G",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A50",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A50 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A51",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A52",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A52 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A53",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A54",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A70",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A70S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A71",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A72",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A73",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "A80/NOTE 10 LITE",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M01",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M11",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M12",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M13",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M14",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M21",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M23",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M33",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M51",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M52",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M53",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M54",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M62",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "S10E",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "S20FE",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "S21FE",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "S21",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "S21 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "S22",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "S22 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "S23 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "S23",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "J4 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "J5 PRIME",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "J6 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "J7 PRIME",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "J8 PLUS",
                                    Valor: vlrCeramica
                                }

                            ]
                        }, {
                            Modelo: "Motorola",
                            Categoria: [
                                {
                                    Modelo: "G 5G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G7",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G7 PLAY",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G7 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G8",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G8 PLU",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G8 PLAY",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G8 POWER",
                                    Valor: vlrCeramica
                                },
                                ,
                                {
                                    Modelo: "G8 POWER LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G9",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G9 PLAY",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G9 POWER",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G9 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G10",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G13",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G20",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G22",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G23",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G30",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G31",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G32",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G40",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G41",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G50",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G51",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G52",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G53",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G60",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G60 S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G62",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G71",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G72",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G73",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G82",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G200",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "g7",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MOTO ONE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "ONE VISION",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "ONE ACTION",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "ONE HYPER",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "ONE FUSION",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "E7",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "E7 PLAY",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "E13",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "E20",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "E21",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "E22",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "E22 S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "E30",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "E32",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "E40",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "EDGE 20",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "EDGE 20 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "EDGE 20 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "EDGE 20 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "EDGE 30",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "EDGE 30 FUSION",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "EDGE 30 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "EDGE 30 NEO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "EDGE 30 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "EDGE 40",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "EDGE 40 PRO",
                                    Valor: vlrCeramica
                                }
                            ]
                        }, {
                            Modelo: "Xiaomi",
                            Categoria: [
                                {
                                    Modelo: "NOTE 7",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 8",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 8 PRO",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 9 / 9T / 10X",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 9S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 9 PRO",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 9 MAX",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 10",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 10 4G",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 10S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 11 4G",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 11 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 10 5G / M3 PRO",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 10 PRO",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 10 MAX",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 11 5G",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 11 PRO",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 11E",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 12",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "NOTE 12 PRO",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "X4 PRO",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "X3GT",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "X4",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "X4 GT",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "X5",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "X5 PRO",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M3",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M4",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M4 PRO",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "M5",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "F4",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "F4 GT",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "F5",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "C3",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "REDMI A1 / A1 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "REDMI A2 / A2 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "REDMI 10 / 10 PRIME",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MI 10 LITE",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MI 10C / 12C/ C55 / C40",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MI 11 LITE",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MI 11",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MI 11 PRO",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MI 11 ULTRA",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MI 12 LITE",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MI 13",
                                    Valor: vlrCeramica
                                }
                            ]
                        }, {
                            Modelo: "Apple",
                            Categoria: [
                                {
                                    Modelo: "6 PRETO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "7 / 8 PRETO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "6 BRANCO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "7 / 8 BRANCO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "6 PLUS PRETO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "7 / 8 PLUS PRETO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "6 PLUS BRANCO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "7 / 8 PLUS BRANCO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "X",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "XS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "XS MAX",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "11",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "11 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "11 PRO MAX",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 MINI",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 / 12 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 PRO MAX",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "13 MINI",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "13 / 13 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "13 PRO MAX",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "14",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "14 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "14 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "14 PRO MAX",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "15",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "15 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "15 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "15 PRO MAX",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "15 ULRA",
                                    Valor: vlrCeramica
                                }
                            ]
                        }
                    ],
                    Vidro: [

                        {
                            Modelo: "Apple",
                            Categoria: [
                                {
                                    Modelo: "5",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "5 ( Traseira )",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "6 / 6S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "6 / 6S ( Traseira )",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "6 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "7 / 8",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "7 PLUS / 8 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "X",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "XS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "XR",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "XS MAX",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "11",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "11 PRO",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "11 PRO MAX",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "12",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "12 MINI",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "12 PRO",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "12 PRO MAX",
                                    Valor: vlrCeramica
                                }
                            ]
                        }, {
                            Modelo: "Xiaomi",
                            Categoria: [
                                {
                                    Modelo: "REDMI S2",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G8",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G8",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "PLAY",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MIX 2",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MIX 3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "MAX 3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI A1",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI A2",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI A2 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A3 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 4A",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 4X",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 4",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 4X",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 5",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 5A",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 5 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 5",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 5A",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 5A PRIME",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 6",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 6A",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 6 PRO / A2 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 6 / 8 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 6 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "7",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "7A",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 7",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 7 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "8",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 8",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 8A",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "8 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "8 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 8",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 8T",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 8 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 8 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "9",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 9",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 9A",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 9C",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 9I",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI 9T",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "9 SE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "9 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "9 T",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "9 T PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "9 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 9",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 9S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 9 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 9 PRO MAX",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "10T",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 10",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 10 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 10 5G LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 10",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 10S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 5G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "REDMI NOTE 10 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "11",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "11 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCOPHONE F1",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCOPHONE F2",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCOPHONE F3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCOPHONE C3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCOPHONE C3 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCOPHONE M3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCOPHONE M3 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCOPHONE X3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "POCOPHONE X3 PRO",
                                    Valor: vlrCeramica
                                }
                            ]
                        }, {
                            Modelo: "Samsung",
                            Categoria: [
                                {
                                    Modelo: "J1",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J1 MINI",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J1 2016",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J2",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J2 CORE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J2 PRIME",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J4",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J4 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J4 CORE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J5",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J5 2016",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J5 PRIME",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J5 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J6",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J6 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J PRIME",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J7",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J7 NEO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J7 2016",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J7 PRIME",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J7 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J8",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J8 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A01",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A01 CORE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A02",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A02 S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A03 S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A03 CORE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A10",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A10 S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A11",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A12",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A20",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A20 S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A21",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A21S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A30",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A30 S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A31",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A32 4G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A32 5G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A40",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A42",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A50",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A50 S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A51",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A52",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A70",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A71",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A72",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A80",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A81",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A90",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A91",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A3 2017",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A5 2018",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A6",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A6 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A7 2018",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A8 2018",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A8 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "A9 2018",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M10",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M20",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M21",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M21 S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M30",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M31",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M31 S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M51",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "M62",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "D377",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "7562",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "7273",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "8552",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "8262",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "9082",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G313",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G3502",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G355",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G360",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "G530",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "H326",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "H422",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "H640",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "H640 XL",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 8",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "NOTE 9",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S4 MINI",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S6 EDGE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S7 EDGE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S8 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S9 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S10",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S10 E",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S10 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S20 FE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S21",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S21 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "S21 FE",
                                    Valor: vlrCeramica
                                }
                            ]
                        }, {
                            Modelo: "Motorola",
                            Categoria: [
                                {
                                    Modelo: "MOTO C",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO C PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E 2020",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E 20",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E 40",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E 5",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E 5 PLAY",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E6",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E6 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E6 PLAY",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E6 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E6 I",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E7 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E7 2021",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO E7 POWER",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G2",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G3",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G4",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G4 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G4 PLAY",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G5",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G5 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G5 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G5 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G5G",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G5G PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G6",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G6 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G6 PLAY",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G7",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G7 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G7 PLAY",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G7 POWER",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G8",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G8 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G8 PLAY",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G8 POWER",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G8 POWER LITE",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G9",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G9 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G9 PLAY",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G9 POWER",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G10",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G10 PLAY",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G10 POWER",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G20",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G30",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G40 FUSION",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G50",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G60",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G100",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO ONE",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO ONE ACTION",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO ONE VISION",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO ONE MACRO",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO ONE HYPER",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO ONE ZOOM",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO ONE FUSION",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO ONE FUSION PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO G5",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO X STYLE",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO Z FORCE",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO Z PLAY",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "MOTO Z 4 PLAY",
                                    Valor: vlrCeramica
                                }
                            ]
                        }, {
                            Modelo: "LG",
                            Categoria: [
                                {
                                    Modelo: "K22 / K22 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K40",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K40 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K41 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K42",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K50",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K50 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K51 S",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K52",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K61",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K62",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K7",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K71",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K8",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K8 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K9",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K10",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K10 2017",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K10 2018",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K10 PRO",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K10 POWER",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K11 / K11 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K12 / K12 PLUS",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "K12 MAX / K12 PRIME",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "X SCREEN",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "X CAM",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "X POWER",
                                    Valor: vlrCeramica
                                }
                            ]
                        }, {
                            Modelo: "ASUS",
                            Categoria: [
                                {
                                    Modelo: "ZENFONE 3 5.7 (ZS500KL)",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "ZENFONE 3 MAX 5.2 (ZC520TL)",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "ZENFONE 3 MAX 5.5 (ZC553KL)",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "ZENFONE 4 MAX 5.5 (ZC554KL) ",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "ZENFONE 4 SELFIL (ZD553KL)",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "ZENFONE 4 SELFIL PRO (ZD552KL)",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "ZENFONE 5 (A501CG)",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "ZENFONE 5Z (2018)(ZE602KL)",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "ZENFONE 5 SELFIL (ZC600KL)",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "ZENFONE MAX PLUS MI (ZB570TL)",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "ZENFONE MAX PLUS M2 (4C003BR)",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "ZENFONE MAX PRO M2 (ZB631KL)",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "ZENFONE MAX SHOT (ZB634KL)",
                                    Valor: vlrCeramica
                                }, {
                                    Modelo: "ZENFONE GO MINI (ZB452KG)",
                                    Valor: vlrCeramica
                                }
                            ]
                        }
                    ],
                    PeliculaTraseiraCeramica: [
                        {
                            Modelo: "Apple",
                            Categoria: [
                                {
                                    Modelo: "6G BRANCO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "6G PRETO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "X / XS BRANCO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "X / XS PRETO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "XS MAX BRANCO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "XS MAX PRETO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "11 VERDE MUSGO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "11 PRO BRANCO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "11 PRO VERDE MUSGO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "11 PRO MAX VERDE MUSGO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 MINI BRANCO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 MINI PRETO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 / 12 PRO BRANCO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 / 12 PRO PRETO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 PRO MAX PRETO",
                                    Valor: vlrCeramica
                                }

                            ]
                        }
                    ],
                    PeliculaCamera: [
                        {
                            Modelo: "Xiaomi",
                            Categoria: [
                                {
                                    Modelo: "3D REALME 7",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D REALME 7 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D REALME 8",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D REALME 8 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D REALME C11",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D REALME C15",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D REALME C25",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D REDMI NOTE 9",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D REDMI NOTE 9S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D REDMI NOTE 9 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D REDMI 9T (4G)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D REDMI NOTE 10 / NOTE 10S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D READMI NOTE 10 (5G)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D REALME NOTE 10 PRO / PRO MAX",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D 11",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D 11 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D 11 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D 11 ULTRA",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D POCOPHONE X3 / X3 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D POCOPHONE F3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D POCOPHONE M3",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D POCOPHONE C3",
                                    Valor: vlrCeramica
                                }
                            ]
                        }, {
                            Modelo: "Samsung",
                            Categoria: [
                                {
                                    Modelo: "3D A02",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D A02S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D A03S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D A12 / A42",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D A13",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D A21S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D A22 4G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D A31",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D A32 (4G)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D A51",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D A52",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D A52S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D A71",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D A72",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D M12",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D M22 4G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D M31",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D M31S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D M51S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D M62",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D NOTE 10",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D NOTE LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D NOTE 20",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D NOTE 20 PRO",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D NOTE 20 ULTRA",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D S10 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D S20",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D S20 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D S20 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D S20 ULTRA",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D S20FE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D S21",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D S21 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D S21 ULTRA",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D S21 FE",
                                    Valor: vlrCeramica
                                }
                            ]
                        }, {
                            Modelo: "Motorola",
                            Categoria: [
                                {
                                    Modelo: "3D G 5G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D G 5G PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D G9",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D G9 PLAY",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D G9 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D G9 POWER",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D G10",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D G10 POWER",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D G20",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D G30",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D G40 FUSION",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D G50",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D G50 5G",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D G60",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D G60S",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D 100",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D E7 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D E7 POWER",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D E20",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D E40",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D EDGE PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D EDGE 20",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D EDGE 20 LITE",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "3D EDGE 20 PRO",
                                    Valor: vlrCeramica
                                }
                            ]
                        }, {
                            Modelo: "Apple",
                            Categoria: [
                                {
                                    Modelo: "7 / 8 PLUS",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "XR",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "11 PRO / 11 PRO MAX (5.8) / (6.5)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "11 (6.1)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 MINI (5.4)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 (6.1)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 PRO (6.1)3C",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "12 PRO MAX (6.7)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "13 MINI (5.4)",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "13 (6.1) 2C",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "13 PRO ( 6.1 ) 3C",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "13 PRO MAX ( 6.7 )",
                                    Valor: vlrCeramica
                                }
                            ]
                        }
                    ],
                    CapaSiliconeNova: [
                        {
                            Modelo: "Motorola",
                            Categoria: [
                                {
                                    Modelo: "G24",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G43",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G54",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G14",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G13",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G53",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G50",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G60",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G51",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G32",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G54",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G71",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G73",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G34",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 40",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 40 PRO",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 40 NEO",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "E6S",
                                    Valor: vlr3Lancamento
                                }
                            ]
                        }, {
                            Modelo: "Samsung",
                            Categoria: [
                                {
                                    Modelo: "S24",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S24 PLUS",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S24 ULTRA",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A05",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A15",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A05S",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A04E",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A25",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A53",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A05",
                                    Valor: vlr3Lancamento
                                }
                            ]
                        },
                        {
                            Modelo: "Xiomi",
                            Categoria: [
                                {
                                    Modelo: "13C",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "MI 12T",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "MI 14",
                                    Valor: vlr3Lancamento
                                }
                            ]
                        }
                    ],
                    CapaSilicone: [
                        {
                            Modelo: "Samsung",
                            Categoria: [
                                {
                                    Modelo: "J1 2016",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J1 MINI",
                                    Valor: vlrCeramica
                                },
                                {
                                    Modelo: "J2 PRIME",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "J2 CORE",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "J3",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "J4",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "J4 PLUS",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "J5",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "J5 PRO",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "J5 PRIME",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "J6",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "J6 PLUS",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "J7",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "J7 PRIME",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "J7 2016",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "J7 PRO",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "J8",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A01",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A01 CORE",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A02S",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A03",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A03S",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A03 CORE",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A04",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A04 E",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A07 2017",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A07 2018",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A08 2018",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A8 PLUS",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A9 2018",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A10",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A10 S",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A11",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A12",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A13 4G",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A13 5G / A04S",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A14",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A20 / A30",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A20S",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A21",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A21S",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A22 4G",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A22 5G",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A23",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A30 S / A50",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A31",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A32 4G",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A32 5G",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A33",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A34",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A51",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A52 / A52S",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A53",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A54",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A70",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A71",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A72",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A73",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A81 / NOTE 10 LITE",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A91 / S10 LITE",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S7",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S7 EDGE",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S8",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S8 PLUS",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S9",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S10",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S10 E",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S10 PLUS",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S20",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S20 ULTRA",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S20FE",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S21 PLUS",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S21 ULTRA",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S22",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S22 PLUS / S20 PRO",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S23",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S23 PLUS",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "S23 ULTRA",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "SM NOTE 8",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "SM NOTE 9",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "SM NOTE 10",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "SM NOTE 20",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "M13 4G",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "M14 5G",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "M22",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "M23",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "M20",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "M30",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "M31 / M21S",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "M32",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "M33",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "M51",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "M52",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "M54",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "M62",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A52",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A54",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A55",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A15",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A25",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A32",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A53",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A13",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A24",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A14",
                                    Valor: vlr3Lancamento
                                },
                                {
                                    Modelo: "A72",
                                    Valor: vlr3Lancamento
                                }
                            ]
                        }, {
                            Modelo: "Motorola",
                            Categoria: [
                                {
                                    Modelo: "G2",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G3",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G4 PLUS",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G4 PLAY",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G5 PLUS",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G5",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G5 S PLUS",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G5G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G5 G PLUS",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G6",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G6 PLAY",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G6 PLUS",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G7 POWER",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G8 POWER",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G8 POWER LITE",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G8 PLAY",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G8 PLUS",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G9 PLUS",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G9 PLAY",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G9 POWER",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G10 / G20 / G30",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G22",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G23 / G13",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G32",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G40",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G41",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G42",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G50 4G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G50 5G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G51",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G52 / G82",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G53",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G60",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G60 S",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G62",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G71",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G72",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G73",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G100",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "G200",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "Z2 PLAY",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "Z3 PLAY",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "E5 PLAY",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "E5 PLUS",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "E 6S",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "E6 PLAY",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "E7 PLUS",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "E7",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "E7 POWER",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "E13",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "E20",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "E22 / E221",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "E30 / E40",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "E32",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 2020 ",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 20",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 20 LITE",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 20 PRO",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 30",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 30 PRO",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 30 LITE",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 30 NEO",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 30 FUSION",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "EDGE 30 ULTRA",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "ONE",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "ONE FUSION",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "ONE VISION",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "PLUS ONE HYPER",
                                    Valor: vlr3Lancamento
                                }
                            ]
                        }, {
                            Modelo: "Xiaomi",
                            Categoria: [
                                {
                                    Modelo: "A2 LITE",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "A3",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "A8 LITE",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "9",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "9 LITE / CC9",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "9T / K20",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "11",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "10 LITE",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "11 PRO",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "11T",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "PRO 11 ULTRA",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "12",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "12 PRO",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "12T",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "12T PRO",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "12 LITE",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "13",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "REDMI A1",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "REDMI A2",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "REDMI 7",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "REDMI 7A",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "REDMI 8",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "REDMI 8A",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "REDMI 9",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "REDMI 9A",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "REDMI 9T",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "REDMI 10 4G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "REDMI 10A",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "REDMI 10C",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "REDMO 10 POWER",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "RM NOTE 7",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "RM NOTE 8",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "RM NOTE 8T",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "RD NOTE 8 PRO",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "RM NOTE 9",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "RM NOTE 10S / NOTE 10 4G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "RM NOTE 10 PRO MAX",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "NOTE 11 4G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "NOTE 11T / 5G / POCO M4 PRO",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "NOTE 12 PRO 5G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "NOTE 12 4G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "NOTE 12 5G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "NOTE 12 PRO PLUS",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "RM 12C",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "POCO C3 / RM 9C",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "X3 GT / NOTE 10 PRO 5G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "POCO F3",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "X3 / X3 PRO",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "X4 PRO 5G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "X4 GT",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "F4 GT",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "F4",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "M4 5G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "M4 PRO 4G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "M4 PRO 5G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "M5",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "M5S",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "C40",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "X5 / NOTE 12 5G",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "X5 PRO",
                                    Valor: vlr3Lancamento
                                }
                            ]
                        }, {
                            Modelo: "LG",
                            Categoria: [
                                {
                                    Modelo: "K42017",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "K8 PLUS",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "K9",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "K10 2017",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "K11 / K PLUS / K 10 2018",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "K12 / K12 PLUS",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "K12 PRIME",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "K12 MAX",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "K22",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "K40S",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "K1 4S / K51 S",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "K50S",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "K52 / K42",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "K61",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "K62",
                                    Valor: vlr3Lancamento
                                }
                            ]
                        }, {
                            Modelo: "REALME",
                            Categoria: [
                                {
                                    Modelo: "7",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "9I",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "C3",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "C11 2021",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "C15",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "C21Y",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "C25Y",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "C35",
                                    Valor: vlr3Lancamento
                                }, {
                                    Modelo: "C55",
                                    Valor: vlr3Lancamento
                                }
                            ]
                        }, {
                            Modelo: "ASUS",
                            Categoria: [
                                {
                                    Modelo: "ZENFONE ZB634",
                                    Valor: vlr3Lancamento
                                }
                            ]
                        }
                    ],
                    CapaTransparente: [

                        {
                            Modelo: "Samsung",
                            Categoria: [
                                {
                                    Modelo: "A01",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A01 CORE",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A02",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A02S",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A03",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A03S",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A03 CORE",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A04",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A04S",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A04E",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A6S",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A6 2018",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A9 2018",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A10 / M10",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A10S",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A11",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A12N",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A13 4G",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A13 5G",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A14",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A20 / A30",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A20S",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A21",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A21 S",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A22 4G",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A22 5G",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A23",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A30S",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A31",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A32 4G",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A32 5G",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A33 5G",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A34",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A50",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A50S",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A51",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A52S20 FE",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A53S21 PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A54S21 ULTRA",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A70S22",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A71S22 PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A72S22 ULTRA",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "A73 5G S23",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "SAM NOTE 10 LITE / A81S23 PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "S10 LITE / A91S23 ULTRA",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "XCOVER PROSAM NOTE 10 PLUS J2 PRIME",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "/G530 NOTE 20",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "J2 CORE NOTE 20 ULTRA",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "J4 2018 M02",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "J4 PLUS M12",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "J5 M13",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "J5 PROM 20",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "J5 PRIME M21S",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "J6 PLUS M22",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "J6 2018 M23 5G",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "J7 PROM 30",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "J7 PRIME M31",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "J7 M32",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "J7 2016 M33",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "J8 2018 M51",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "S8M52 5G",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "S8 PLUS M53 5G",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "S9 M62",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "S9 M62",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "S9 PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "S10E",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "S10",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "S20",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "S20 PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "S20 ULTRA",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        }, {
                            Modelo: "Motorola",
                            Categoria: [
                                {
                                    Modelo: "MT G POWER",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G PRO",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G STILUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G5",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G5 PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G5G",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G5G PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G5S",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G5S PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G6",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G6 PLAY",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G6 PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G7 / G7 PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G7 PALY",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G7 POWER",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G8",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G8P PLAY",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G8 PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G8 PWER",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "LITE MT",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "G9 / G9 PLAY",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G9 PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G9 POWER",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G10",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G10 POWER",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G13",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G20",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G22",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MTT GP2503 / ACTION",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MTT G30",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "ONE FUSION",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G31",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "ONE FUSION PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G32",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT EDGE",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G41",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT EDGE PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G42",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT EDGE 20",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G50 5G",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT EDGE 20 PRO",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G51",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT EDGE 20 LITE",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G52",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT EDGE 30 PRO",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G53",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT EDGE 30",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G60",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT EDGE 30 NEO",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G60S",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT EDGE 30 FUSION",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G62",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT EDGE 30 ULTRA",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G71 5G",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G82",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G100",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT G200",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT E6",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT E6 PLAY",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT E6 PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT E6S",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT E6I",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT E7",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT E7 PLUS",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT E7 POWER",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT E13",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT E20",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT E22",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT E32",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT E40",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MOTO ONE",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MOTO ONE MACRO",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MT ONE ZOOM",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        }, {
                            Modelo: "Apple",
                            Categoria: [
                                {
                                    Modelo: "6",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "7G / 8G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "7 PLUS / 8",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "X / XS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XR",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XS MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "11",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "11 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "11 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "12 5.4",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "12",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "12 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "12 6.7",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "13 MINI",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "13",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "13 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "13 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "14",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "14 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "14 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "14 PRO MAX PLUS",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        }, {
                            Modelo: "Xiaomi",
                            Categoria: [
                                {
                                    Modelo: "REDMI A1M1 CC9 PRO",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "REDMI AMI A3 / MI CC9E",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "REDMI 8MI 8 LITE",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "REDMI 8AMI 9",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "REDMI K30MI 9 LITE REDMI 9MI 9T",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "REDMI 9A",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "MI 10",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 9C",
                                    Valor: vlr3Dantigo
                                }, {
                                    Modelo: "REDMI 10 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 9I",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 10",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 9T",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "MI NOTE 10 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 9",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POWER MI NOTE 10 LITE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 10 ",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 10T",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 10A",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 10T PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 10C",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "MI 10T LITE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 10 PRIME ",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 10I",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 7",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 11",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 8",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 11I"
                                },
                                {
                                    Modelo: "REDMI NOTE PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 11 LITE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 8T",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 11T",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 9S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 11T PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 9 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 12",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 9 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 12 LITE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 9 4G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 12T",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 9T",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 12T PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 10S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO X3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 10 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO X3 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 10 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POXO X3 NFC",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 10 5G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO X3 GT",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 10T",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO X4 PRO 5G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 11",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO X4 GT",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 11 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO M3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 11 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO M3 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 11 5G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO M4 PRO 4g",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 12",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO M4 PRO 5G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 12 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO M4 5G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO M5",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO M5S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO C3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO C40",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO F2 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO F3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO F4",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO F4 GT",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        }, {
                            Modelo: "Realme",
                            Categoria: [
                                {
                                    Modelo: "7",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "7 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "C11",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        },
                        {
                            Modelo: "ASUS",
                            Categoria: [
                                {
                                    Modelo: "ZF5 ZS630KL",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ZF MAX PLUS (M2) ZB634KL",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ZF MAX SHORT ZB634KL",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        }
                    ],
                    CapaCarteira: [
                        {
                            Modelo: "REALME",
                            Categoria: [
                                {
                                    Modelo: "7 5G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "7 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "8 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "GT 5G",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        },
                        {
                            Modelo: "Xiaomi",
                            Categoria: [
                                {
                                    Modelo: "A3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "NOTE 8",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 9A",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "NOTE 9",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "NOTE 9S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "NOTE 9 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "NOTE 9 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI 10",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 10",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 10S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 10 5G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 10 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "REDMI NOTE 11",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO C3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO F3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "POCO M3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "NOTE X3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "NOTE X3 PRO",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        },
                        {
                            Modelo: "Apple",
                            Categoria: [
                                {
                                    Modelo: "11",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "12",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        },
                        {
                            Modelo: "Samsung",
                            Categoria: [
                                {
                                    Modelo: "J2 CORE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J2 PRIME",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J4",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J4 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J4 CORE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J5",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J5 PRIME",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J5 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J6",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J7",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J7 NEO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J7 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J7 PRIME",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "J8",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A01",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A01 CORE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A02",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A02S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A03",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A03S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A10",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A10S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A11",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A12",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A20",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A20S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A21S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A22 4G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A22 5G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A30S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A31",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "F41",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A32 4G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A33",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A53",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A50",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A51",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A52",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A70",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A71",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "A72",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "F02S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M02S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M12",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M21S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M22",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M31",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M32",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M51",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "M62",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G530",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "S10 LITE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "S20",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "S20 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "S21 FE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "NOTE 20",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "NOTE 20 ULTRA",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E5",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E5 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E6 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E6S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E7 POWER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E7 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E7 2021",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E20",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "E40",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "EDGE 20",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "EDGE 20 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "EDGE 20 LITE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G3",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G5G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G5G PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G6 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G6 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G7",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G7 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G7 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G8",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G8 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G8 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G8 POWER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G8 POWER LITE",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G9",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G9 PLAY",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G9 POWER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G10",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G10 POWER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G20",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G30",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G31",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G40 FUSION",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G50",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G60",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G60S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G71",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G100",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "G200",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ONE ACTION",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ONE VISION",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ONE ZOOM / ONE PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ONE HYPER",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ONE FUSION",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ONE FUSION PLUS",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        }, {
                            Modelo: "LG",
                            Categoria: [
                                {
                                    Modelo: "K4 2017",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K8 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K12 / K12 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K12 MAX / K12 PRIME",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K22 / K22 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K41S",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K61",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K62",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "K71",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        }, {
                            Modelo: "ASUS",
                            Categoria: [
                                {
                                    Modelo: "ZENFONE MAX PRO M2 (ZB633KL)",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "ZEFONE 6 (ZB630KL)",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        }
                    ],
                    CapasSpace: [
                        {
                            Modelo: "Apple",
                            Categoria: [
                                {
                                    Modelo: "7G / 8G",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "7 PLUS / 8 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XR",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "X / XS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "XS MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "11",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "11 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "11 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "12",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "12 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "12 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "13",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "13 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "13 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "14",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "14 MAX / 14 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "14 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "14 PRO MAX",
                                    Valor: vlr3Dantigo
                                }

                            ]
                        }
                    ],
                    CapasMAGSAFE: [

                        {
                            Modelo: "Apple",
                            Categoria: [
                                {
                                    Modelo: "11",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "11 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "11 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "12",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "12 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "12 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "13",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "13 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "13 PRO MAX",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "14",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "14 MAX / 14 PLUS",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "14 PRO",
                                    Valor: vlr3Dantigo
                                },
                                {
                                    Modelo: "14 PRO MAX",
                                    Valor: vlr3Dantigo
                                }
                            ]
                        }
                    ],
                    CaseIphone: [
                        {
                            Modelo: "6",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "6 PLUS",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "7 / 8 ",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "7 / 8 PLUS",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "X / XS",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "XR",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "XS MAX",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "11",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "11 PRO",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "11 PRO MAX",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "12 / 12 PRO",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "12 MINI",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "12 PRO MAX",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "13",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "13 PRO",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "13 PRO MAX",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "14",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "14 PRO",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "14 MAX",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "14 PRO MAX",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "15",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "15 PRO",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "15 MAX",
                            Valor: vlr3Dantigo
                        },
                        {
                            Modelo: "15 PRO MAX",
                            Valor: vlr3Dantigo
                        }
                    ],
                    AGGLASSFOSCA: [

                        {
                            Modelo: "11",
                            Valor: vlr3Dantigo
                        }, {
                            Modelo: "11 PRO",
                            Valor: vlr3Dantigo
                        }, {
                            Modelo: "11 PRO MAX",
                            Valor: vlr3Dantigo
                        }, {
                            Modelo: "12",
                            Valor: vlr3Dantigo
                        }, {
                            Modelo: "12 PRO",
                            Valor: vlr3Dantigo
                        }, {
                            Modelo: "12 PRO MAX",
                            Valor: vlr3Dantigo
                        }, {
                            Modelo: "13",
                            Valor: vlr3Dantigo
                        }, {
                            Modelo: "13 PRO",
                            Valor: vlr3Dantigo
                        }, {
                            Modelo: "13 PRO MAX",
                            Valor: vlr3Dantigo
                        }, {
                            Modelo: "14",
                            Valor: vlr3Dantigo
                        }, {
                            Modelo: "14 MAX / 14 PLUS",
                            Valor: vlr3Dantigo
                        }, {
                            Modelo: "14 PRO",
                            Valor: vlr3Dantigo
                        }, {
                            Modelo: "14 PRO MAX",
                            Valor: vlr3Dantigo
                        }
                    ]
                }
                Modelo.setData(objeto)
                this.getView().setModel(Modelo)
            },
            onClickJu: function(){
                window.open('https://api.whatsapp.com/send?phone=+5511989308096&text=Olá,-gostaria-de-fazer-um-pedido')
            },
            onClickLeticia: function(){

                window.open('https://api.whatsapp.com/send?phone=+5511969306157&text=Olá,-gostaria-de-fazer-um-pedido')
            },
            onClickJulia: function(){
                window.open('https://api.whatsapp.com/send?phone=+5511991354272&text=Olá,-gostaria-de-fazer-um-pedido')
            }
        });
    });
