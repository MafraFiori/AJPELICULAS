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
                let Modelo = new JSONModel("./model/modelo.json");
                this.getView().setModel(Modelo)
            },
            onClickJu: function () {
                window.open('https://api.whatsapp.com/send?phone=+5511989308096&text=Olá,%20gostaria%20de%20fazer%20um%20pedido')
            },
            onClickLeticia: function () {

                window.open('https://api.whatsapp.com/send?phone=+5511969306157&text=Olá,%20gostaria%20de%20fazer%20um%20pedido')
            },
            onClickJulia: function () {
                window.open('https://api.whatsapp.com/send?phone=+5511991354272&text=Olá,%20gostaria%20de%20fazer%20um%20pedido')
            },

            onModelos3D: function () {
                let Modelo = this.getView().getModel()
                let that = this

                Modelo.loadData("d", {
                    success: function () {
                        //ajpeliculas.catalogo.controller.Home
                        if (!that.Modelos3d) {
                            that.Modelos3d = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.3d", that);
                            that.getView().addDependent(that.Modelos3d);
                        } else {
                            that.Modelos3d = ""
                            that.Modelos3d = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.3d", that);
                            that.getView().addDependent(that.Modelos3d);
                        }
                        // open value help dialog filtered by the input value
                        that.Modelos3d.open();
                    }
                })

            },

            Fechar3D: function () {
                if (this.Modelos3d) {
                    this.Modelos3d.destroy();
                    this.Modelos3d = null
                }
            },

            onModelos3DLancamentos: function () {
                let Modelo = this.getView().getModel()
                let that = this

                Modelo.loadData("Dnova", {
                    success: function () {
                        //ajpeliculas.catalogo.controller.Home
                        if (!that.Modelos3dLancamentos) {
                            that.Modelos3dLancamentos = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.3dLancamentos", that);
                            that.getView().addDependent(that.Modelos3dLancamentos);
                        } else {
                            that.Modelos3dLancamentos = ""
                            that.Modelos3dLancamentos = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.3dLancamentos", that);
                            that.getView().addDependent(that.Modelos3dLancamentos);
                        }
                        // open value help dialog filtered by the input value
                        that.Modelos3dLancamentos.open();
                    }
                })
            },

            Fechar3DLancamentos: function () {
                if (this.Modelos3dLancamentos) {
                    this.Modelos3dLancamentos.destroy();
                    this.Modelos3dLancamentos = null
                }
            },

            onPrivacidade: function () {
                let Modelo = this.getView().getModel()
                let that = this

                Modelo.loadData("Privacidade", { 
                    success: function () {
                        if (!that.ModelosPrivacidade) {
                            that.ModelosPrivacidade = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.ModelosPrivacidade", that);
                            that.getView().addDependent(that.Modelos3d);
                        } else {
                            that.ModelosPrivacidade = ""
                            that.ModelosPrivacidade = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.ModelosPrivacidade", that);
                            that.getView().addDependent(that.ModelosPrivacidade);
                        }
                        // open value help dialog filtered by the input value
                        that.ModelosPrivacidade.open();
                    }
                })


            },

            FecharPrivacidade: function () { 
                if (this.ModelosPrivacidade) {
                    this.ModelosPrivacidade.destroy();
                    this.ModelosPrivacidade = null
                }
            },

            onCeramica: function () {
                if (!this.ModelosCeramica) {
                    this.ModelosCeramica = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.ModelosCeramica", this);
                    this.getView().addDependent(this.Modelos3d);
                } else {
                    this.ModelosCeramica = ""
                    this.ModelosCeramica = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.ModelosCeramica", this);
                    this.getView().addDependent(this.ModelosCeramica);
                }
                // open value help dialog filtered by the input value
                this.ModelosCeramica.open();
            },

            FecharCeramica: function () {
                this.ModelosCeramica.close();
            },

            onCeramicaPrivacidade: function () {
                if (!this.CeramicaPrivacidade) {
                    this.CeramicaPrivacidade = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.CeramicaPrivacidade", this);
                    this.getView().addDependent(this.Modelos3d);
                } else {
                    this.CeramicaPrivacidade = ""
                    this.CeramicaPrivacidade = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.CeramicaPrivacidade", this);
                    this.getView().addDependent(this.CeramicaPrivacidade);
                }
                // open value help dialog filtered by the input value
                this.CeramicaPrivacidade.open();
            },

            FecharCeramicaPrivacidade: function () {
                this.CeramicaPrivacidade.close();
            },

            onModelosVidros: function () {
                if (!this.ModelosVidros) {
                    this.ModelosVidros = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.ModelosVidros", this);
                    this.getView().addDependent(this.ModelosVidros);
                } else {
                    this.ModelosVidros = ""
                    this.ModelosVidros = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.ModelosVidros", this);
                    this.getView().addDependent(this.ModelosVidros);
                }
                // open value help dialog filtered by the input value
                this.ModelosVidros.open();
            },

            FecharModelosVidros: function () {
                this.ModelosVidros.close();
            },

            onTraseiraCeramica: function () {
                if (!this.TraseiraCeramica) {
                    this.TraseiraCeramica = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.TraseiraCeramica", this);
                    this.getView().addDependent(this.TraseiraCeramica);
                } else {
                    this.TraseiraCeramica = ""
                    this.TraseiraCeramica = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.TraseiraCeramica", this);
                    this.getView().addDependent(this.TraseiraCeramica);
                }
                // open value help dialog filtered by the input value
                this.TraseiraCeramica.open();
            },

            FecharTraseiraCeramica: function () {
                this.TraseiraCeramica.close();
            },

            onCameras: function () {
                if (!this.Cameras) {
                    this.Cameras = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.Cameras", this);
                    this.getView().addDependent(this.Cameras);
                } else {
                    this.Cameras = ""
                    this.Cameras = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.Cameras", this);
                    this.getView().addDependent(this.Cameras);
                }
                // open value help dialog filtered by the input value
                this.Cameras.open();
            },

            FecharCameras: function () {
                this.Cameras.close();
            },

            onCapaSilicone: function () {
                if (!this.CapaSilicone) {
                    this.CapaSilicone = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.CapaSilicone", this);
                    this.getView().addDependent(this.CapaSilicone);
                } else {
                    this.CapaSilicone = ""
                    this.CapaSilicone = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.CapaSilicone", this);
                    this.getView().addDependent(this.CapaSilicone);
                }
                // open value help dialog filtered by the input value
                this.CapaSilicone.open();
            },

            FecharCapaSilicone: function () {
                this.CapaSilicone.close();
            },

            onAntiChoque: function () {
                if (!this.AntiChoque) {
                    this.AntiChoque = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.AntiChoque", this);
                    this.getView().addDependent(this.AntiChoque);
                } else {
                    this.AntiChoque = ""
                    this.AntiChoque = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.AntiChoque", this);
                    this.getView().addDependent(this.AntiChoque);
                }
                // open value help dialog filtered by the input value
                this.AntiChoque.open();
            },

            FecharAntiChoque: function () {
                this.AntiChoque.close();
            },

            onCarteira: function () {
                if (!this.Carteira) {
                    this.Carteira = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.Carteira", this);
                    this.getView().addDependent(this.Carteira);
                } else {
                    this.Carteira = ""
                    this.Carteira = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.Carteira", this);
                    this.getView().addDependent(this.Carteira);
                }
                // open value help dialog filtered by the input value
                this.Carteira.open();
            },

            FecharCarteira: function () {
                this.Carteira.close();
            },

            onSpace: function () {
                if (!this.Space) {
                    this.Space = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.Space", this);
                    this.getView().addDependent(this.Space);
                } else {
                    this.Space = ""
                    this.Space = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.Space", this);
                    this.getView().addDependent(this.Space);
                }
                // open value help dialog filtered by the input value
                this.Space.open();
            },

            FecharSpace: function () {
                this.Space.close();
            },

            onMegSafe: function () {
                if (!this.MegSafe) {
                    this.MegSafe = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.MegSafe", this);
                    this.getView().addDependent(this.MegSafe);
                } else {
                    this.MegSafe = ""
                    this.MegSafe = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.MegSafe", this);
                    this.getView().addDependent(this.MegSafe);
                }
                // open value help dialog filtered by the input value
                this.MegSafe.open();
            },

            FecharMegSafe: function () {
                this.MegSafe.close();
            },

            onCaseIphone: function () {
                if (!this.CaseIphone) {
                    this.CaseIphone = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.CaseIphone", this);
                    this.getView().addDependent(this.CaseIphone);
                } else {
                    this.CaseIphone = ""
                    this.CaseIphone = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.CaseIphone", this);
                    this.getView().addDependent(this.CaseIphone);
                }
                // open value help dialog filtered by the input value
                this.CaseIphone.open();
            },

            FecharCaseIphone: function () {
                this.CaseIphone.close();
            },

            onAcrilocoGlass: function () {
                if (!this.AcrilocoGlass) {
                    this.AcrilocoGlass = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.AcrilocoGlass", this);
                    this.getView().addDependent(this.AcrilocoGlass);
                } else {
                    this.AcrilocoGlass = ""
                    this.AcrilocoGlass = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.AcrilocoGlass", this);
                    this.getView().addDependent(this.AcrilocoGlass);
                }
                // open value help dialog filtered by the input value
                this.AcrilocoGlass.open();
            },

            FecharAcrilocoGlass: function () {
                this.AcrilocoGlass.close();
            },

            onCouroIP: function () {
                if (!this.CouroIP) {
                    this.CouroIP = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.CouroIP", this);
                    this.getView().addDependent(this.CouroIP);
                } else {
                    this.CouroIP = ""
                    this.CouroIP = sap.ui.xmlfragment("ajpeliculas.catalogo.view.fragmentos.CouroIP", this);
                    this.getView().addDependent(this.CouroIP);
                }
                // open value help dialog filtered by the input value
                this.CouroIP.open();
            },

            FecharCouroIP: function () {
                this.CouroIP.close();
            }

        });
    });
