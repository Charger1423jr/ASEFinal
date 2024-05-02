let Equip_List = [
    {
        image: '/image/96-96Avalanche.png',
        actualPrice: '$755.59',
        regPrice: '$943.99',
        name: '1995-96 Colorado Avalanche Stanly Cup Picture (Not Framed) - Autographed'
    },
    {
        image: '/image/BuntingPic.png',
        actualPrice: '$456.48',
        regPrice: '$659.99',
        name: 'John Bunting Picture (Not Framed) - Autographed'
    },
    {
        image: '/image/GiannisSignedPic.png',
        actualPrice: '$105.49',
        regPrice: '$208.99',
        name: 'Giannis Antetokounmpo 12x8 Framed Picture - Autographed'
    },
    {
        image: '/image/RyanPic.png',
        actualPrice: '$389.89',
        regPrice: '$803.99',
        name: 'Nolan Ryan Fighting Robin Ventura Picture (Not Framed) - Autographed'
    },
    {
        image: '/image/WayneCanvas.png',
        actualPrice: '$389.34',
        regPrice: '$678.99',
        name: 'Wayne Gretzky Canvas Painting by Stephen Holland (Not Framed) - Autographed'
    },
    {
        image: '/image/WoodsPic.png',
        actualPrice: '788.69',
        regPrice: '$1,164.99',
        name: 'Ickey Woods Picture (Not Framed) - Autographed'
    },
    {
        image: '/image/BenchPic.png',
        actualPrice: '$655.49',
        regPrice: '$959.99',
        name: 'Johnny Bench Picture (Framed) - Autographed'
    },
    {
        image: '/image/WattPic.png',
        actualPrice: '145.29',
        regPrice: '544.99',
        name: 'TJ Watt Celebration Picture (Not Framed) - Autographed'
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