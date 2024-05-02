let Equip_List = [
    {
        image: '/image/AliHeadgear.png',
        actualPrice: '$1,355.59',
        regPrice: '$2.143.99',
        name: 'Mohammed Ali Training Headgear - Autographed'
    },
    {
        image: '/image/MontanaHelmet.png',
        actualPrice: '$456.78',
        regPrice: '$689.99',
        name: 'Joe Montana Game Worn Helmet, 1979 - Autographed'
    },
    {
        image: '/image/larryBirdJersey.png',
        actualPrice: '$219.59',
        regPrice: '$320.99',
        name: 'Larry Bird Game Worn Jersey 1981 Season - Autographed'
    },
    {
        image: '/image/TomSeaverHat.png',
        actualPrice: '$89.89',
        regPrice: '$103.99',
        name: 'Tom Seaver 1969 Season Game Worn Hat - Autographed'
    },
    {
        image: '/image/PacmanHelmet.png',
        actualPrice: '$389.34',
        regPrice: '$678.99',
        name: 'Adam Pacman Jones Game Worn Helmet 2012 Season - Autographed'
    },
    {
        image: '/image/TysonGlove.png',
        actualPrice: '784.89',
        regPrice: '$1,334.99',
        name: 'Worn Mike Tyson Boxing Glove - Autographed'
    },
    {
        image: '/image/CurryBasketball.png',
        actualPrice: '$675.49',
        regPrice: '$989.99',
        name: 'Stephen Curry Game-Used Basketball - Autographed'
    },
    {
        image: '/image/RayLewisJersey.png',
        actualPrice: '$230.29',
        regPrice: '$410.99',
        name: 'Ray Lewis Game Worn Jersey 1999 Season - Autographed'
    }

]

var i = getQueryParam('index');

var actualPrice = Equip_List[i].actualPrice;
document.getElementById("actualPrice").innerHTML = actualPrice;

var regPrice = Equip_List[i].regPrice;
document.getElementById("regPrice").innerHTML = regPrice;

var name = Equip_List[i].name;
document.getElementById("name").innerHTML = name;

function buildImage() {
    var img = document.createElement('img');
    img.src = Equip_List[i].image;
    document.getElementById('content').appendChild(img);
}

function getQueryParam(key){
			let queryParams=new URLSearchParams(window.location.search);
			return queryParams.has(key) ? queryParams.get(key) : null;
		}