'use strict';

/*  
1. images model.
2. render images.
*/

var gNextId = 1;
var gImgs;

function init() {
    gImgs = createImgs();
    renderImgs(gImgs);
}

function createImgs() {
    var imgs = [];

   imgs.push(createImage('./img/gallery/One-Does-Not-Simply.jpg', ['fun']))

    return imgs;
}

function createImage(url, keywords) {
    return {
        id: gNextId++,
        url: url,
        keywords: keywords
    };
}

function renderImgs(imgs) {
    var strHtml = imgs.map(function (img, idx) {
        return `
        <img id='${img.id}' src='${img.url}' onclick="initMemeEditor(${img.id},this)" alt='meme picture'/>
        `
    })
        .join(' ')
        
    document.querySelector('.gallery').innerHTML = strHtml;
}

// <div id='${img.id}' class="photo" onclick="initMemeEditor(${img.id},this)" style="background-image: url('${img.url}')">
