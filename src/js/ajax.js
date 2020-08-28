
// Ajax for Featured Products

let fpCounter = 0;

async function loadSlide() {
    let content = '<ul>';
    let requestSlides = new XMLHttpRequest();
    requestSlides.onreadystatechange = () => {
        if (requestSlides.readyState === 4 && requestSlides.status === 200) {
            let items = JSON.parse(requestSlides.responseText);
            for(let i = 0; i<4 && i+fpCounter<items.length; i++) {
                let j = i+fpCounter;
                if(items[j].special) {
                    continue;
                }
                if(!items[j].img) {
                    items[j].img = './src/img/no-img.png';
                }
                content+='<li>';
                content+=`<img src="${items[j].img}" alt="">`
                content+= `<p>${items[j].name}</p>`;
                content+= `<p class='fp-green'>${items[j].sign}</p>`
                content+='</li>'
            }
            if(fpCounter > items.length)currentSlide = 0;
            fpCounter+=4;
            content+='</ul>';
            fpSlides.push(content);
            currentSlide++
        }
    }
    requestSlides.open("GET", '/popular-items.json');
    requestSlides.send();
}
//Popular items loading
let counter = 0;
const load_more = () => {
    let content = '';
    let requestItems = new XMLHttpRequest();
    requestItems.onreadystatechange = () => {
        if (requestItems.readyState === 4 && requestItems.status === 200) {
            let items = JSON.parse(requestItems.responseText);
            for(let i = 0; i<4 && i+counter<items.length; i++) {
                let j = i+counter;
                if(items[j].special) {
                    content +=`<li><div class="dragons"><div class="text-wrap"><p class="d-tile-info">${items[j].name}</p>
                                <p><img src="/src/img/greenMan.png" alt="">5H AGO</p>           
                            </div>
                        </li>`
                    continue;
                }
                if(!items[j].img) {
                    items[j].img = '/src/img/no-img.png';
                }
                content+=`<li id=p${counter+i+4}>`;
                content+='<div class="pop-li-cont pop-hover">';
                content+=`<img src="${items[j].img}" alt="">`
                content+= `
                    <div class="text-wrap">
                    <p class="tile-info"><a href="/src/pages/product-detailed/product-detailed.html"> ${items[j].name}</a></p> <p class="tile-price"><a href="/src/pages/product-detailed/product-detailed.html">$ ${items[j].price}</a></p>                  
                    </div>`;
                content+=`
                <div class="buttons">
                    <a><img src="/src/img/Plus.png" onclick="addToCart()" alt=""></a>
                    <a><img src="/src/img/Heart.png" onclick="addToFavorite()" alt=""></a>
                </div>
                </div>`;
                content+='</li>'
            }
            counter+=4;
            document.getElementById("pop-items-list").innerHTML += content;
        }
    }
    requestItems.open("GET", '/popular-items.json');
    requestItems.send();
}
//Footer 
function footer() {
    let requestFooter = new XMLHttpRequest();
    requestFooter.onreadystatechange = () => {
        if (requestFooter.readyState === 4 && requestFooter.status === 200) {
            document.getElementById("footer").innerHTML = requestFooter.response;
        }
    }
    requestFooter.open("GET", '/src/components/footer.html');
    requestFooter.send();    
}
footer();
//Login 
function login() {
    let requestLogin = new XMLHttpRequest();
    requestLogin.onreadystatechange = () => {
        if (requestLogin.readyState === 4 && requestLogin.status === 200) {
            document.getElementById("login").innerHTML = requestLogin.response;
        }
    }
    requestLogin.open("GET", '/src/components/login.html');
    requestLogin.send();    
}
login();