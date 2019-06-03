System.register(["../helpers/decorators/index", "../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, NegociacaoController, DiaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_3.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_3.MensagemView('#mensagemView', true);
                    this._negociacoesView.update(this._negociacoes);
                }
                adicionar(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this.ehDiaUtil(data)) {
                        this._mensagemView.update('Negociações só podem ser realizadas em dias úteis.');
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adicionar(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
                ehDiaUtil(data) {
                    return (data.getDay() != DiaDaSemana.SABADO && data.getDay() != DiaDaSemana.DOMINGO);
                }
                importarDados() {
                    alert('oi');
                }
            };
            __decorate([
                index_1.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_1.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_1.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["DOMINGO"] = 0] = "DOMINGO";
                DiaDaSemana[DiaDaSemana["SEGUNDA"] = 1] = "SEGUNDA";
                DiaDaSemana[DiaDaSemana["TERCA"] = 2] = "TERCA";
                DiaDaSemana[DiaDaSemana["QUARTA"] = 3] = "QUARTA";
                DiaDaSemana[DiaDaSemana["QUINTA"] = 4] = "QUINTA";
                DiaDaSemana[DiaDaSemana["SEXTA"] = 5] = "SEXTA";
                DiaDaSemana[DiaDaSemana["SABADO"] = 6] = "SABADO";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
