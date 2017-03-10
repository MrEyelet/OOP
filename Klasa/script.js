//OOP Prototype
function MobilePhone(brand, price, color, year) {
	this.markaTelefonu = brand;
	this.cenaTelefonu = price;
	this.kolorTelefonu = color;
	this.rokProdukcji = year;
}
MobilePhone.prototype.showInfo = function() {

		console.log("Marka telefonu to " + this.markaTelefonu + ", kolor to " + 
		this.kolorTelefonu + ", a cena to " + this.cenaTelefonu + " zl." + 
		" rok produkcji - " + this.rokProdukcji);
}

var iPhone6S = new MobilePhone("Apple", 2250, "srebrny", 2016);
var SamsungGalaxy = new MobilePhone("Samsung", 1000, "czarny", 2014);
var SonyXperia = new MobilePhone("Sony", 1500, "biały", 2017);

iPhone6S.showInfo();
SamsungGalaxy.showInfo();
SonyXperia.showInfo();
