let Card_List = [
    {
        image: '/image/MikeTroutCard.png',
        actualPrice: '$49.99',
        regPrice: '$59.99',
        name: 'Mike Trout - 2021 (Topps)'
    },
    {
        image: '/image/ClaytonKershawCard.png',
        actualPrice: '$39.99',
        regPrice: '$49.99',
        name: 'Clayton Kershaw - 2019 (Topps)'
    },
    {
        image: '/image/AaronJudgeCard.png',
        actualPrice: '$29.99',
        regPrice: '$39.99',
        name: 'Aaron Judge - 2020 (Topps)'
    },
    {
        image: '/image/MookieBettsCard.png',
        actualPrice: '$19.99',
        regPrice: '$29.99',
        name: 'Mookie Betts - 2018 (Topps)'
    },
    {
        image: '/image/TatisCard.png',
        actualPrice: '$24.99',
        regPrice: '$34.99',
        name: 'Fernando Tatis Jr. - 2022 (Topps)'
    },
    {
        image: '/image/deGromCard.png',
        actualPrice: '$34.99',
        regPrice: '$44.99',
        name: 'Jacob deGrom - 2023 (Topps)'
    },
    {
        image: '/image/HarperCard.png',
        actualPrice: '$59.99',
        regPrice: '$69.99',
        name: 'Bryce Harper - 2017 (Topps)'
    },
    {
        image: '/image/LowderCard.png',
        actualPrice: '$14.99',
        regPrice: '$24.99',
        name: 'Rhett Lowder - 2024 (Bowman)'
    }

]

var i = getQueryParam('index');

var actualPrice = Card_List[i].actualPrice;
document.getElementById("actualPrice").innerHTML = actualPrice;

var regPrice = Card_List[i].regPrice;
document.getElementById("regPrice").innerHTML = regPrice;

var name = Card_List[i].name;
document.getElementById("name").innerHTML = name;

function buildImage() {
    var img = document.createElement('img');
    img.src = Card_List[i].image;
    document.getElementById('content').appendChild(img);
}

function getQueryParam(key){
			let queryParams=new URLSearchParams(window.location.search);
			return queryParams.has(key) ? queryParams.get(key) : null;
		}