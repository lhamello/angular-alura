import { NegociacaoController } from "./controllers/NegociacaoController";

const controller = new NegociacaoController();
// Utilizando jQuery!
$('.form').submit(controller.adicionar.bind(controller));