//OOP Method inside class
function MobilePhone(brand, price, color) {
	this.markaTelefonu = brand;
	this.cenaTelefonu = price;
	this.kolorTelefon = color;
	this.showInfo= function() {
		console.log("Marka telefonu to " + this.markaTelefonu + ", kolor to " + 
		this.kolorTelefonu + ", a cena to " + this.cenaTelefonu + " zl.");
		}
}

var iPhone6S = new MobilePhone("Apple", 2250, "srebrny");
var SamsungGalaxy = new MobilePhone("Samsung", 1000, "czarny");
var SonyXperia = new MobilePhone("Sony", 1500, "biały");

iPhone6S.showInfo();
SamsungGalaxy.showInfo();
SonyXperia.showInfo();


