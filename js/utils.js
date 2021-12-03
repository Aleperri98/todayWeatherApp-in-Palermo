
const cities = [
    {
        name:"",
        value:""
    },
    {
        name:"Enter your favorite city!",
        value:"Enter your favorite city!"
    },
    {
        name:"",
        value:""
    },
    {
        name: "Palermo",
        value: "Palermo"
    },
    {
        name: "Bagheria",
        value: "bagheria"
    },
    {
        name: "Monreale",
        value: "monreale"
    },
    {
        name: "Carini",
        value: "carini"
    },
    {
        name: "Partinico",
        value: "partinico"
    },
    {
        name: "Misilmeri",
        value: "misilmeri"
    },
    {
        name: "Termini Imerese",
        value: "termini+imerese"
    },
    {
        name: "Villabate",
        value: "villabate"
    },
    {
        name: "Cefalù",
        value: "cefalù"
    },
    {
        name: "Ficarazzi",
        value: "ficarazzi"
    },
    {
        name: "Cinisi",
        value: "cinisi"
    },
    {
        name: "Terrasini",
        value: "terrasini"
    },
    {
        name: "Casteldaccia",
        value: "casteldaccia"
    },
    {
        name: "Capaci",
        value: "capaci"
    },
    {
        name: "Belmonte Mezzagno",
        value: "belmonte+mezzagno"
    },
    {
        name: "Santa Flavia",
        value: "santa+flavia"
    },
    {
        name: "Corleone",
        value: "corleone"
    },
    {
        name: "Trabia",
        value: "trabia"
    },
    {
        name: "Altofonte",
        value: "altofonte"
    },
    {
        name: "Castelbuono",
        value: "castelbuono"
    },
    {
        name: "San Giuseppe Jato",
        value: "san+giuseppe+jato"
    },
    {
        name: "Altavilla Milicia",
        value: "altavilla+milicia"
    },
    {
        name: "Caccamo",
        value: "caccamo"
    },
    {
        name: "Campofelice di Roccella",
        value: "campofelice+di+roccella"
    },
    {
        name: "Borgetto",
        value: "borgetto"
    },
    {
        name: "Isola delle femmine",
        value: "isola+delle+femmine"
    },
    {
        name: "Lercara Friddi",
        value: "lercara+friddi"
    },
    {
        name: "Gangi",
        value: "gangi"
    },
    {
        name: "Marineo",
        value: "marineo"
    },
    {
        name: "Balestrate",
        value: "balestrate"
    },
    {
        name: "Piana degli Albanesi",
        value: "piana+degli+albanesi"
    },
    {
        name: "Montelepre",
        value: "montelepre"
    },
    {
        name: "San Cipirello",
        value: "san+cipirello"
    },
    {
        name: "Cerda",
        value: "cerda"
    },
    {
        name: "Prizzi",
        value: "prizzi"
    },
    {
        name: "Bisacquino",
        value: "bisacquino"
    },
    {
        name: "Torretta",
        value: "torretta"
    },
    {
        name: "Bolognetta",
        value: "bolognetta"
    },
    {
        name: "Collesano",
        value: "collesano"
    },
    {
        name: "Caltavuturo",
        value: "caltavuturo"
    },
    {
        name: "Ciminna",
        value: "ciminna"
    },
    {
        name: "Lascari",
        value: "lascari"
    },
    {
        name: "Alia",
        value: "alia"
    },
    {
        name: "Valledolmo",
        value: "valledolmo"
    },
    {
        name: "Villafrati",
        value: "villafrati"
    },
    {
        name: "Castellana sicula",
        value: "castellana+sicula"
    },
    {
        name: "Polizzi Generosa",
        value: "polizzi+generosa"
    },
    {
        name: "Montemaggiore Belsito",
        value: "montemaggiore+belsito"
    },
    {
        name: "Petralia Sottana",
        value: "petralia+sottana"
    },
    {
        name: "Camporeale",
        value: "camporeale"
    },
    {
        name: "Trappeto",
        value: "trappeto"
    },
    {
        name: "Castronovo di Sicilia",
        value: "castronovo+di+sicilia"
    },
    {
        name: "Pollina",
        value: "pollina"
    },
    {
        name: "Mezzojuso",
        value: "mezzojuso"
    },
    {
        name: "Sciara",
        value: "sciara"
    },
    {
        name: "Petralia Sottana",
        value: "petralia+sottana"
    },
    {
        name: "Chiusa Sclafani",
        value: "chiusa+sclafani"
    },
    {
        name: "Vicari",
        value: "vicari"
    },
    {
        name: "Roccapalumba",
        value: "roccapalumba"
    },
    {
        name: "Giardinello",
        value: "giardinello"
    },
    {
        name: "Palazzo Adriano",
        value: "palazzo+adriano"
    },
    {
        name: "Alimena",
        value: "alimena"
    },
    {
        name: "Ventimiglia di Sicilia",
        value: "ventimiglia+di+sicilia"
    },
    {
        name: "Baucina",
        value: "baucina"
    },
    {
        name: "Giuliana",
        value: "giuliana"
    },
    {
        name: "Geraci Siculo",
        value: "geraci+siculo"
    },
    {
        name: "Contessa Entellina",
        value: "contessa+entellina"
    },
    {
        name: "San Mauro Castelverde",
        value: "san+mauro+castelverde"
    },
    {
        name: "Isnello",
        value: "isnello"
    },
    {
        name: "Roccamena",
        value: "roccamena"
    },
    {
        name: "Bompietro",
        value: "bompietro"
    },
    {
        name: "Ustica",
        value: "ustica"
    },
    {
        name: "Campofiorito",
        value: "campofiorito"
    },
    {
        name: "Aliminusa",
        value: "aliminusa"
    },
    {
        name: "Godrano",
        value: "godrano"
    },
    {
        name: "Cefalà Diana",
        value: "cefalà+diana"
    },
    {
        name: "Blufi",
        value: "blufi"
    },
    {
        name: "Santa Cristina Gela",
        value: "santa+cristina+gela"
    },
    {
        name: "Gratteri",
        value: "gratteri"
    },
    {
        name: "Scillato",
        value: "scillato"
    },
    {
        name: "Campofelice di Fitalia",
        value: "campofelice+di+fitalia"
    },
    {
        name: "Sclafani Bagni",
        value: "sclafani+bagni"
    }
];

const lang = [
    {
        name:"",
        value:""
    },
    {
        name:"Enter your favorite language!",
        value:"Enter your favorite language!"
    },
    {
        name:"",
        value:""
    },
    {
        name: "Italian",
        value: "it"
    },
    {
        name: "English",
        value: "en"
    },
    {
        name: "French",
        value: "fr"
    },
    {
        name: "Spanish",
        value: "es"
    }
];



export {cities, lang};
