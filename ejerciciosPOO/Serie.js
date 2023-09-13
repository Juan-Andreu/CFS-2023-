var Serie = /** @class */ (function () {
    function Serie(titulo, anioEstreno, episodios, temporadas) {
        this.titulo = titulo;
        this.anioEstreno = anioEstreno;
        this.episodios = episodios;
        this.temporadas = temporadas;
        this.episodiosVistos = 0;
        this.finalizada = false;
    }
    Serie.prototype.verEpisodio = function () {
        if (this.episodiosVistos < this.episodios) {
            this.episodiosVistos++;
            if (this.episodiosVistos === this.episodios) {
                this.finalizada = true;
            }
            return "Has visto el episodio ".concat(this.episodiosVistos, " de la temporada ").concat(this.temporadas, " de ").concat(this.titulo, ".");
        }
        else {
            return "Ya has visto todos los episodios de esta serie.";
        }
    };
    Serie.prototype.episodiosPorVer = function () {
        return this.episodios - this.episodiosVistos;
    };
    Serie.prototype.serieVista = function () {
        return this.finalizada;
    };
    Serie.prototype.toString = function () {
        var estado = this.finalizada ? "Finalizada" : "En curso";
        return "".concat(this.titulo, " (").concat(this.anioEstreno, ") , Episodios: ").concat(this.episodios, ", Temporadas: ").concat(this.temporadas, ", Estado: ").concat(estado);
    };
    return Serie;
}());
var miSerie = new Serie("Game of Thrones", 2020, 80, 8);
console.log(miSerie.toString());
console.log(miSerie.verEpisodio());
console.log(miSerie.verEpisodio());
console.log("Me faltan ver: ".concat(miSerie.episodiosPorVer(), " Episodios"));
console.log("Esta serie ya la termine? ".concat(miSerie.serieVista()));
