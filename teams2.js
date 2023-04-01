const players = [
  {id: 0, name: 'Kylian Mbappé', age: 24, nationality: 'FRA', position: 'FW', matches: 24, goals: 19, assists: 3, saves: 0, imgSrc: './img/0.png', tackles: 0},
  {id: 1, name: 'Robert Lewandowski', age: 34, nationality: 'POL', position: 'FW', matches: 22, goals: 15, assists: 5, imgSrc: './img/1.png', saves: 0, tackles: 0},
  {id: 2, name: 'Erling Haaland', age: 22, nationality: 'NOR', position: 'FW', matches: 26, goals: 28, assists: 5, imgSrc: './img/2.png', saves: 0, tackles: 0},
  {id: 3, name: 'Cristiano Ronaldo', age: 38, nationality: 'POR', position: 'FW', matches: 10, goals: 1, assists: 0, imgSrc: './img/3.png', saves: 0, tackles: 0},
  {id: 4, name: 'Harry Kane', age: 29, nationality: 'ENG', position: 'FW', matches: 28, goals: 21, assists: 2, imgSrc: './img/4.png', saves: 0, tackles: 0},
  {id: 5, name: 'Son Heung-min', age: 30, nationality: 'KOR', position: 'FW', matches: 26, goals: 6, assists: 4, imgSrc: './img/5.png', saves: 0, tackles: 0},
  {id: 6, name: 'Neymar', age: 31, nationality: 'BRA', position: 'FW', matches: 20, goals: 13, assists: 11, imgSrc: './img/6.png', saves: 0, tackles: 0},
  {id: 7, name: 'Lautaro Martínez', age: 25, nationality: 'ARG', position: 'FW', matches: 27, goals: 14, assists: 3, imgSrc: './img/7.png', saves: 0, tackles: 0},
  {id: 8, name: 'Bukayo Saka', age: 21, nationality: 'ENG', position: 'FW', matches: 28, goals: 12, assists: 10, imgSrc: './img/8.png', saves: 0, tackles: 0},
  {id: 9, name: 'Riyad Mahrez', age: 32, nationality: 'ALG', position: 'FW', matches: 19, goals: 5, assists: 4, imgSrc: './img/9.png', saves: 0, tackles: 0},
  {id: 10, name: 'Mohamed Salah', age: 30, nationality: 'EGY', position: 'FW', matches: 26, goals: 11, assists: 7, imgSrc: './img/10.png', saves: 0, tackles: 0},
  {id: 11, name: 'Vinicius Júnior', age: 22, nationality: 'BRA', position: 'FW', matches: 25, goals: 8, assists: 4, imgSrc: './img/11.png', saves: 0, tackles: 0},
  {id: 12, name: 'Raheem Sterling', age: 28, nationality: 'ENG', position: 'FW', matches: 19, goals: 4, assists: 2, imgSrc: './img/12.png', saves: 0, tackles: 0},
  {id: 13, name: 'Marcus Rashford', age: 25, nationality: 'ENG', position: 'FW', matches: 26, goals: 14, assists: 3, imgSrc: './img/13.png', saves: 0, tackles: 0},
  {id: 14, name: 'Victor Osimhen', age: 24, nationality: 'NGA', position: 'FW', matches: 23, goals: 21, assists: 4, imgSrc: './img/14.png', saves: 0, tackles: 0},
  {id: 15, name: 'Phil Foden', age: 22, nationality: 'ENG', position: 'FW', matches: 24, goals: 9, assists: 5, imgSrc: './img/15.png', saves: 0, tackles: 0},
  {id: 16, name: 'Karim Benzema', age: 35, nationality: 'FRA', position: 'FW', matches: 16, goals: 11, assists: 3, imgSrc: './img/16.png', saves: 0, tackles: 0},
  {id: 17, name: 'Sadio Mané', age: 30, nationality: 'SEN', position: 'FW', matches: 18, goals: 6, assists: 4, imgSrc: './img/17.png', saves: 0, tackles: 0},
  {id: 18, name: 'Christopher Nkunku', age: 25, nationality: 'FRA', position: 'FW', matches: 18, goals: 12, assists: 1, imgSrc: './img/18.png', saves: 0, tackles: 0},
  {id: 19, name: 'Lionel Messi', age: 35, nationality: 'ARG', position: 'FW', matches: 23, goals: 13, assists: 13, imgSrc: './img/19.png', saves: 0, tackles: 0},
  {id: 20, name: 'Luka Modrić', age: 37, nationality: 'CRO', position: 'MF', matches: 24, goals: 4, assists: 3, imgSrc: './img/20.png', saves: 0, tackles: 0},
  {id: 21, name: 'Rodri', age: 26, nationality: 'ESP', position: 'MF', matches: 26, goals: 2, assists: 5, imgSrc: './img/21.png', saves: 0, tackles: 0},
  {id: 22, name: 'Kevin De Bruyne', age: 31, nationality: 'BEL', position: 'MF', matches: 25, goals: 4, assists: 12, imgSrc: './img/22.png', saves: 0, tackles: 0},
  {id: 23, name: 'Martin Ødegaard', age: 24, nationality: 'NOR', position: 'MF', matches: 27, goals: 10, assists: 6, imgSrc: './img/23.png', saves: 0, tackles: 0},
  {id: 24, name: 'Pedri', age: 20, nationality: 'ESP', position: 'MF', matches: 21, goals: 6, assists: 0, imgSrc: './img/24.png', saves: 0, tackles: 0},
  {id: 25, name: 'Toni Kroos', age: 33, nationality: 'GER', position: 'MF', matches: 21, goals: 2, assists: 3, imgSrc: './img/25.png', saves: 0, tackles: 0},
  {id: 26, name: 'Casemiro', age: 31, nationality: 'BRA', position: 'MF', matches: 20, goals: 2, assists: 3, imgSrc: './img/26.png', saves: 0, tackles: 0},
  {id: 27, name: 'Jude Bellingham', age: 19, nationality: 'ENG', position: 'MF', matches: 24, goals: 4, assists: 4, imgSrc: './img/27.png', saves: 0, tackles: 0},
  {id: 28, name: 'Joshua Kimmich', age: 28, nationality: 'GER', position: 'MF', matches: 24, goals: 4, assists: 4, imgSrc: './img/28.png', saves: 0, tackles: 0},
  {id: 29, name: "N'Golo Kanté", age: 32, nationality: 'FRA', position: 'MF', matches: 2, goals: 0, assists: 0, imgSrc: './img/29.png', saves: 0, tackles: 0},
  {id: 30, name: 'Marco Verratti', age: 30, nationality: 'ITA', position: 'MF', matches: 21, goals: 0, assists: 0, imgSrc: './img/30.png', saves: 0, tackles: 0},
  {id: 31, name: 'Paul Pogba', age: 30, nationality: 'FRA', position: 'MF', matches: 2, goals: 0, assists: 0, imgSrc: './img/31.png', saves: 0, tackles: 0},
  {id: 32, name: 'Nicolò Barella', age: 26, nationality: 'ITA', position: 'MF', matches: 26, goals: 5, assists: 6, imgSrc: './img/32.png', saves: 0, tackles: 0},
  {id: 33, name: 'Frenkie de Jong', age: 25, nationality: 'NED', position: 'MF', matches: 24, goals: 2, assists: 1, imgSrc: './img/33.png', saves: 0, tackles: 0},
  {id: 34, name: 'Leon Goretzka', age: 28, nationality: 'GER', position: 'MF', matches: 19, goals: 3, assists: 2, imgSrc: './img/34.png', saves: 0, tackles: 0},
  {id: 35, name: 'Bernardo Silva', age: 28, nationality: 'POR', position: 'MF', matches: 25, goals: 4, assists: 5, imgSrc: './img/35.png', saves: 0, tackles: 0},
  {id: 36, name: 'Thiago Alcántara', age: 31, nationality: 'ESP', position: 'MF', matches: 14, goals: 0, assists: 0, imgSrc: './img/36.png', saves: 0, tackles: 0},
  {id: 37, name: 'Federico Valverde', age: 24, nationality: 'URU', position: 'MF', matches: 26, goals: 7, assists: 2, imgSrc: './img/37.png', saves: 0, tackles: 0},
  {id: 38, name: 'Bruno Fernandes', age: 28, nationality: 'POR', position: 'MF', matches: 25, goals: 5, assists: 6, imgSrc: './img/38.png', saves: 0, tackles: 0},
  {id: 39, name: 'İlkay Gündoğan', age: 32, nationality: 'GER', position: 'MF', matches: 24, goals: 3, assists: 3, imgSrc: './img/39.png', saves: 0, tackles: 0},
  {id: 40, name: 'Oleksandr Zinchenko', age: 26, nationality: 'UKR', position: 'DF', matches: 21, goals: 1, assists: 2, imgSrc: './img/40.png', saves: 0, tackles: 34},
  {id: 41, name: 'Theo Hernández', age: 25, nationality: 'FRA', position: 'DF', matches: 23, goals: 3, assists: 3, imgSrc: './img/41.png', saves: 0, tackles: 37},
  {id: 42, name: 'Sergio Ramos', age: 37, nationality: 'ESP', position: 'DF', matches: 24, goals: 0, assists: 1, imgSrc: './img/42.png', saves: 0, tackles: 29},
  {id: 43, name: 'Virgil van Dijk', age: 31, nationality: 'NED', position: 'DF', matches: 22, goals: 3, assists: 0, imgSrc: './img/43.png', saves: 0, tackles: 17},
  {id: 44, name: "Kalidou Koulibaly", age: 31, nationality: 'SEN', position: 'DF', matches: 19, goals: 2, assists: 1, imgSrc: './img/44.png', saves: 0, tackles: 34},
  {id: 45, name: 'Aymeric Laporte', age: 28, nationality: 'ESP', position: 'DF', matches: 7, goals: 0, assists: 0, imgSrc: './img/45.png', saves: 0, tackles: 3},
  {id: 46, name: 'Antonio Rüdiger', age: 30, nationality: 'GER', position: 'DF', matches: 23, goals: 1, assists: 0, imgSrc: './img/46.png', saves: 0, tackles: 10},
  {id: 47, name: 'Marquinhos', age: 28, nationality: 'BRA', position: 'DF', matches: 24, goals: 2, assists: 0, imgSrc: './img/47.png', saves: 0, tackles: 22},
  {id: 48, name: 'Rúben Dias', age: 25, nationality: 'POR', position: 'DF', matches: 19, goals: 0, assists: 0, imgSrc: './img/48.png', saves: 0, tackles: 17},
  {id: 49, name: "David Alaba", age: 30, nationality: 'AUT', position: 'DF', matches: 19, goals: 1, assists: 3, imgSrc: './img/49.png', saves: 0, tackles: 13},
  {id: 50, name: 'Thiago Silva', age: 38, nationality: 'BRA', position: 'DF', matches: 21, goals: 0, assists: 2, imgSrc: './img/50.png', saves: 0, tackles: 32},
  {id: 51, name: 'Matthijs de Ligt', age: 23, nationality: 'NED', position: 'DF', matches: 22, goals: 2, assists: 0, imgSrc: './img/51.png', saves: 0, tackles: 20},
  {id: 52, name: 'Niklas Süle', age: 27, nationality: 'GER', position: 'DF', matches: 21, goals: 1, assists: 3, imgSrc: './img/52.png', saves: 0, tackles: 14},
  {id: 53, name: 'Kyle Walker', age: 32, nationality: 'ENG', position: 'DF', matches: 17, goals: 0, assists: 0, imgSrc: './img/53.png', saves: 0, tackles: 9},
  {id: 54, name: 'Achraf Hakimi', age: 24, nationality: 'MAR', position: 'DF', matches: 21, goals: 4, assists: 3, imgSrc: './img/54.png', saves: 0, tackles: 40},
  {id: 55, name: 'Jules Koundé', age: 24, nationality: 'FRA', position: 'DF', matches: 18, goals: 0, assists: 2, imgSrc: './img/55.png', saves: 0, tackles: 21},
  {id: 56, name: 'Alessandro Bastoni', age: 23, nationality: 'ITA', position: 'DF', matches: 21, goals: 0, assists: 2, imgSrc: './img/56.png', saves: 0, tackles: 35},
  {id: 57, name: 'Alphonso Davies', age: 22, nationality: 'CAN', position: 'DF', matches: 22, goals: 1, assists: 4, imgSrc: './img/57.png', saves: 0, tackles: 39},
  {id: 58, name: 'Éder Militão', age: 25, nationality: 'BRA', position: 'DF', matches: 22, goals: 4, assists: 0, imgSrc: './img/58.png', saves: 0, tackles: 33},
  {id: 59, name: 'Dani Carvajal', age: 31, nationality: 'ESP', position: 'DF', matches: 21, goals: 0, assists: 2, imgSrc: './img/59.png', saves: 0, tackles: 29},
  {id: 60, name: 'Thibaut Courtois', age: 30, nationality: 'BEL', position: 'GK', matches: 20, goals: 0, assists: 0, saves: 54, imgSrc: './img/60.png', tackles: 0},
  {id: 61, name: 'Alisson', age: 30, nationality: 'BRA', position: 'GK', matches: 26, goals: 0, assists: 1, saves: 77, imgSrc: './img/61.png', tackles: 0},
  {id: 62, name: 'Manuel Neuer', age: 37, nationality: 'GER', position: 'GK', matches: 12, goals: 0, assists: 0, saves: 33, imgSrc: './img/62.png', tackles: 0},
  {id: 63, name: 'Ederson', age: 29, nationality: 'BRA', position: 'GK', matches: 27, goals: 0, assists: 1, saves: 36, imgSrc: './img/63.png', tackles: 0},
  {id: 64, name: 'Gianluigi Donnarumma', age: 24, nationality: 'ITA', position: 'GK', matches: 28, goals: 0, saves: 83, assists: 0, imgSrc: './img/64.png', tackles: 0}
]

function renderCart() {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var cartElem = document.getElementById('cart');
    var cartItemsElem = cartElem.querySelector('.cart-items');
    cartItemsElem.innerHTML = '';
    cartItems.forEach(function(item) {
      var itemElem = document.createElement('div');
      itemElem.classList.add('cart-item');
      var imgElem = document.createElement('img');
      imgElem.src = "https://s.hs-data.com/bilder/spieler/gross/284095.jpg?fallback=png"  ;
      itemElem.appendChild(imgElem);
      cartItemsElem.appendChild(itemElem);
    });
  }

window.addEventListener('load', function() {
  renderCart();
});


// Retrieve the data from Local Storage
var myData = JSON.parse(localStorage.getItem('CART'));

// Use the retrieved data 
console.log(myData)


let player1 = document.getElementById("player1").value;
let player1Stats = players.find(player => player.name === player1);


var url = value[0]["imgSrc"];
console.log(value);
console.log(value[0]);
console.log(url);




for (var i = 0; i < localStorage.length; i++){
  var key = localStorage.key(i);
  var value = localStorage.getItem(key);
  console.log(key + ' : ' + value)
}


console.log(value);





