class Taiyaki {
    constructor(name) {
        this.name = name;
    }
    naka() {
        console.log(`中身は${this.name}です`);
    }
}

let anko =  new Taiyaki('あんこ');
anko.naka();
let cream =  new Taiyaki('クリーム');
cream.naka();
let cheese =  new Taiyaki('チーズ');
cheese.naka();
