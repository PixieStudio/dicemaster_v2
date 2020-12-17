const BASE_URL = 'https://xxx.ngrok.io' // Url app
const CLIENT_ID = '' // App ID

// Images dés
const images = [
    { src: 'img/des/1d4.svg', width: 60, height: 60, alt: '1d4', nombreDes: 1, typeDes: 4 },
    { src: 'img/des/2d4.svg', width: 60, height: 60, alt: '2d4', nombreDes: 2, typeDes: 4 },
    { src: 'img/des/3d4.svg', width: 60, height: 60, alt: '3d4', nombreDes: 3, typeDes: 4 },
    { src: 'img/des/4d4.svg', width: 60, height: 60, alt: '4d4', nombreDes: 4, typeDes: 4 },
    { src: 'img/des/1d6.svg', width: 60, height: 60, alt: '1d6', nombreDes: 1, typeDes: 6 },
    { src: 'img/des/2d6.svg', width: 60, height: 60, alt: '2d6', nombreDes: 2, typeDes: 6 },
    { src: 'img/des/3d6.svg', width: 60, height: 60, alt: '3d6', nombreDes: 3, typeDes: 6 },
    { src: 'img/des/4d6.svg', width: 60, height: 60, alt: '4d6', nombreDes: 4, typeDes: 6 },
    { src: 'img/des/1d8.svg', width: 60, height: 60, alt: '1d8', nombreDes: 1, typeDes: 8 },
    { src: 'img/des/2d8.svg', width: 60, height: 60, alt: '2d8', nombreDes: 2, typeDes: 8 },
    { src: 'img/des/3d8.svg', width: 60, height: 60, alt: '3d8', nombreDes: 3, typeDes: 8 },
    { src: 'img/des/4d8.svg', width: 60, height: 60, alt: '4d8', nombreDes: 4, typeDes: 8 },
    { src: 'img/des/1d10.svg', width: 60, height: 60, alt: '1d10', nombreDes: 1, typeDes: 10 },
    { src: 'img/des/2d10.svg', width: 60, height: 60, alt: '2d10', nombreDes: 2, typeDes: 10 },
    { src: 'img/des/3d10.svg', width: 60, height: 60, alt: '3d10', nombreDes: 3, typeDes: 10 },
    { src: 'img/des/4d10.svg', width: 60, height: 60, alt: '4d10', nombreDes: 4, typeDes: 10 },
    { src: 'img/des/1d12.svg', width: 60, height: 60, alt: '1d12', nombreDes: 1, typeDes: 12 },
    { src: 'img/des/2d12.svg', width: 60, height: 60, alt: '2d12', nombreDes: 2, typeDes: 12 },
    { src: 'img/des/3d12.svg', width: 60, height: 60, alt: '3d12', nombreDes: 3, typeDes: 12 },
    { src: 'img/des/4d12.svg', width: 60, height: 60, alt: '4d12', nombreDes: 4, typeDes: 12 },
    { src: 'img/des/1d20.svg', width: 60, height: 60, alt: '1d20', nombreDes: 1, typeDes: 20 },
    { src: 'img/des/2d20.svg', width: 60, height: 60, alt: '2d20', nombreDes: 2, typeDes: 20 },
    { src: 'img/des/3d20.svg', width: 60, height: 60, alt: '3d20', nombreDes: 3, typeDes: 20 },
    { src: 'img/des/4d20.svg', width: 60, height: 60, alt: '4d20', nombreDes: 4, typeDes: 20 },
    { src: 'img/des/1d100.svg', width: 60, height: 60, alt: '1d100', nombreDes: 1, typeDes: 100 },
    { src: 'img/des/2d100.svg', width: 60, height: 60, alt: '2d100', nombreDes: 2, typeDes: 100 },
    { src: 'img/des/3d100.svg', width: 60, height: 60, alt: '3d100', nombreDes: 3, typeDes: 100 },
    { src: 'img/des/4d100.svg', width: 60, height: 60, alt: '4d100', nombreDes: 4, typeDes: 100 },
]

/****************************
            Lanceur
*****************************/
async function versionOne(obj) {
    let allDice = `( ${obj.jetResult.join(' + ')} )`
    let text = ''
    text += `Dés\n${obj.lancer}\n\n`
    text += `Valeurs\n${allDice}\n\n`
    text += `Résultat\n${obj.sumResult}`
    await miro.board.widgets.create({
        type: 'sticker',
        x: obj.x,
        y: obj.y,
        text: text,
        scale: 2.5,
        capabilities: {
            editable: false
        },
        style: {
            stickerType: 0,
            textAlign: 'c'
        },
    })
}

/****************************
    Fonctions Globales
*****************************/
//Fonction vs Globales
function getById(id) {
    return document.getElementById(id)
}

function sumDice(total, n) {
    return total + n;
}

function stickerGet(username) {
    return {
        type: 'sticker',
        metadata: {
            [CLIENT_ID]: { user: username }
        }
    }
}

function widgetsGet(objet) {
    return miro.board.widgets.get(objet)
}

/****************************
    Fonctions Dés
*****************************/
//Jet de dés Objet
function objRoll(obj) {
    // Variables
    const result = obj
    obj.lancer = `${obj.nombreDes}d${obj.typeDes}`

    //result des dés
    const jetResult = []
    for (let i = 0; i < obj.nombreDes; i++) {
        let roll = Math.floor(Math.random() * obj.typeDes + 1)
        jetResult.push(roll)
    }
    obj.jetResult = jetResult
    obj.sumResult = obj.jetResult.reduce(sumDice)

    console.log(result)
    versionOne(result)
}


/****************************
    DOM
*****************************/
function getImage(img) {
    return `<div class="draggable-item image-box">
            <img src="${img.src}" alt="${img.alt}" onClick="rollClick(${img.nombreDes},${img.typeDes})">
            </div>`
}

function addImages(container) {
    container.innerHTML += images.map(i => getImage(i)).join('')
}

async function rollClick(nbd, td) {
    jetDes = {
        nombreDes: Math.floor(nbd),
        typeDes: Math.floor(td),
    }
    //widget position
    const viewport = await miro.board.viewport.get();
    const x = viewport.x + (viewport.width / 2);
    const y = viewport.y + (viewport.height / 2);
    jetDes.x = x
    jetDes.y = y
    objRoll(jetDes)
}

// Generateur du containeur d'images à dés
function bootstrap() {
    const container = document.getElementById('container')
    addImages(container)
}
miro.onReady(bootstrap)
