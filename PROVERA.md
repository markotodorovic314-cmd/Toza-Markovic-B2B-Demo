# Provera isporučenog demo-a

Izvršena provera JavaScript sintakse, DOM prikaza i poslovnih tokova. Prošlo je 16 grupa provera:

1. Prijava i inicijalizacija kataloga sa 24 proizvoda.
2. Svih 10 kupčevih prikaza: bez grešaka pri generisanju stranice.
3. Zaokruživanje na pakovanje, količinski rabati, prevoz i PDV.
4. Detalji proizvoda i konverzija komad/m² → pakovanje/paleta.
5. Uvoz CSV/TXT i teksta; izdvajanje neispravnih redova.
6. Stvarno parsiranje XLSX i XML datoteka.
7. Poručivanje, rezervacija zaliha i raspoloživog kredita.
8. Svih 9 administratorskih prikaza.
9. Otkazivanje oslobađa zalihe i kredit; završene porudžbine zaštićene od ponovne promene.
10. Prekoračenje kredita, ručno odobravanje sa napomenom, isporuka, saldo i bodovi.
11. Blokiran kupac ne može poručivati.
12. Kupčev asortiman, dozvoljena navigacija i omiljeni proizvodi.
13. Kreiranje upita, odgovor admina i prihvatanje ponude.
14. Izmena partnerskih uslova i cena kroz admin forme.
15. Generisanje poslovnih dokumenata i izvoz cenovnika.
16. Postojanje i čitljivost svih fotografija i lokalnih biblioteka.

Fotografije su pregledane zajedno kao kontaktni list; nisu korišćene slike iz ranijih demo portala. Sve 24 fotografije su uključene kao lokalni fajlovi.

Ograničenje provere: alat za vizuelni pregled aplikacije u browseru nije bio dostupan u ovom okruženju. Responsivni prikazi su implementirani u CSS-u, ali pregled na stvarnom telefonu i browseru ostaje za proveru nakon otvaranja demo-a. Testovi DOM-a ne potvrđuju raspored piksela ili ponašanje svih browser API-ja.
