class Serie {
    private titulo: string;
    private anioEstreno: number;
    private episodios: number;
    private temporadas: number;
    private episodiosVistos: number;
    private finalizada: boolean;

    constructor(titulo: string, anioEstreno: number, episodios: number, temporadas: number) {
        this.titulo = titulo;
        this.anioEstreno = anioEstreno;
        this.episodios = episodios;
        this.temporadas = temporadas;
        this.episodiosVistos = 0;
        this.finalizada = false;
    }

    verEpisodio(): string {
        if (this.episodiosVistos < this.episodios) {
            this.episodiosVistos++;
            if (this.episodiosVistos === this.episodios) {
                this.finalizada = true;
            }
            return `Has visto el episodio ${this.episodiosVistos} de la temporada ${this.temporadas} de ${this.titulo}.`;
        } else {
            return "Ya has visto todos los episodios de esta serie.";
        }
    }

    episodiosPorVer(): number {
        return this.episodios - this.episodiosVistos;
    }

    serieVista(): boolean {
        return this.finalizada;
    }

    toString(): string {
        let estado = this.finalizada ? "Finalizada" : "En curso";
        return `${this.titulo} (${this.anioEstreno}) , Episodios: ${this.episodios}, Temporadas: ${this.temporadas}, Estado: ${estado}`;
    }
}

let miSerie = new Serie("Game of Thrones", 2020, 80, 8);

console.log(miSerie.toString());
console.log(miSerie.verEpisodio());
console.log(miSerie.verEpisodio());
console.log(`Me faltan ver: ${miSerie.episodiosPorVer()} Episodios`);
console.log(`Esta serie ya la termine? ${miSerie.serieVista()}`);