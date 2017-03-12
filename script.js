function Telefon(marka, cena, kolor, poziomSzpanerstwa, rozdzielczosc) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
	this.poziomSzpanerstwa = poziomSzpanerstwa;
	this.rozdzielczosc = rozdzielczosc;
};

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ". " + "Poziom szpanerstwa to: " + this.poziomSzpanerstwa + ", a rozdzielczość: " + this.rozdzielczosc + ".");
};

var iPhone6S = new Telefon("Apple", 2250, "srebrny", "10", "1334x750");
var Samsung_Galaxy_S6 = new Telefon("Samsung", 1500, "turkusowy", "8", "1440x2560");
var OnePlus_One = new Telefon("OnePlus", 3000, "migdałowy", "5", "1080x1920");

iPhone6S.printInfo();
Samsung_Galaxy_S6.printInfo();
OnePlus_One.printInfo();
