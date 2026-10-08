# Toza Marković × B2Bware — B2B demo portal

Kompletan statički demo za prezentaciju poslovnim kupcima i prodajnom timu Toze Marković. Jezik: srpski (latinica). Valuta: RSD.

## GitHub Pages — pokretanje za nekoliko minuta

1. Raspakujte ZIP na računaru.
2. Kreirajte novi GitHub repozitorijum, npr. `toza-markovic-b2b-demo`.
3. Otvorite **Add file → Upload files**.
4. U koren repozitorijuma prevucite **sav sadržaj raspakovanog ZIP-a**, uključujući direktorijume `assets`, `vendor` i `primeri`. `index.html` mora biti u korenu repozitorijuma.
5. Kliknite **Commit changes**.
6. Otvorite **Settings → Pages**.
7. Izaberite **Deploy from a branch**, branch **main**, folder **/ (root)** i kliknite **Save**.
8. Sačekajte da GitHub prikaže adresu: `https://VAŠ-USERNAME.github.io/toza-markovic-b2b-demo/`.

Važno: nemojte uploadovati samo ZIP ili samo JS/HTML fajlove. Fotografije i lokalne biblioteke moraju biti prenete kao folderi. Sve putanje su relativne i podržavaju GitHub Pages poddirektorijum.

## Demo nalozi

Najbrže je da kliknete na profil na početnoj stranici. Za prijavu preko forme svi koriste lozinku **demo123**.

| Profil | E-mail | Primer koji pokazuje |
|---|---|---|
| Stovarište Javor DOO | `kupac@demo.rs` | Kompletan asortiman, 18% osnovnog rabata, kredit i porudžbine |
| Keramika Studio DOO | `keramika@demo.rs` | Samo keramički program, 12% rabata, mali raspoloživi kredit |
| Gradnja Plus DOO | `izvodjac@demo.rs` | Blokiran nalog, pregled kataloga i upiti |
| Toza Marković — prodajni tim | `admin@demo.rs` | Porudžbine, kupci, artikli, cene, zalihe, ERP simulacija |

## Šta radi

### Kupčev deo

- Pregled naloga, kredita, porudžbina i partnerskih uslova.
- 24 stvarna proizvoda sa fotografijama sa `toza.rs`, razvrstana u odgovarajuće kategorije.
- Pretraga po šifri, nazivu, dimenzijama i kategoriji; sortiranje po nazivu, ceni ili dostupnosti.
- Kategorije, dostupnost po tri demo magacina, omiljeni proizvodi i asortiman po kupcu.
- Detalji proizvoda: specifikacije, zalihe, pakovanja, težina, cene, rabati i linkovi na originalnu dokumentaciju.
- Unos količine po komadu/m², pakovanju ili paleti. Zaokruživanje na pakovanje.
- Partnerski rabat i dodatni količinski rabati za 1, 3 i 8 paleta.
- Korpa koja se čuva po kupcu, prevoz/preuzimanje, napomena, adresa, željeni datum i referenca projekta.
- Obračun neto iznosa, prevoza, PDV-a i ukupne vrednosti.
- Provera zaliha i kreditnog limita pri poručivanju; porudžbine iznad kredita idu na odobrenje.
- Brzi unos, kopiranje redova iz Excel-a i uvoz CSV, TXT, XLSX i XML datoteka, uz pregled grešaka i prepoznatih artikala.
- Preuzimanje šablona za uvoz i izvoz korpe/cenovnika/porudžbina.
- Istorija i statusi porudžbina; ponavljanje porudžbine po aktuelnim cenama.
- Demo potvrde, fakture i otpremnice kao samostalni HTML dokumenti, sa opcijom **Štampa / Sačuvaj kao PDF**.
- Finansije, saldo, rok plaćanja i rezervacija kredita.
- Upiti i ponude, prilog do 1 MB, odgovor admina i prihvatanje ponude.
- Primer programa lojalnosti: bodovi i zahtevi za pogodnosti.
- Izmena kontakt podataka i adrese, pregled obaveštenja i **Odjavi se**.

### Administracija

- Pregled poslovanja i porudžbina koje zahtevaju pažnju.
- Odobravanje/odbijanje porudžbina i promena statusa; istorija statusa i interne napomene.
- Rezervacija zaliha pri potvrđivanju i oslobađanje pri otkazivanju.
- Zatvorene porudžbine ne mogu se vratiti u prethodni status.
- Dodavanje i izmena kupaca, individualnih rabata, kredita, rokova i dozvoljenih kategorija.
- Aktiviranje/blokiranje naloga i uključivanje/isključivanje artikala.
- Izmena osnovnih cena, pakovanja, paleta i težina.
- Pravila količinskih rabata i automatskog/ručnog odobravanja.
- Izmena i izvoz zaliha po magacinima.
- Odgovori na upite i preuzimanje priloga; odobravanje pogodnosti lojalnosti.
- ERP tok, demo referenca i dnevnik aktivnosti; ponavljanje simuliranog prenosa.
- Izvoz celog lokalnog demo stanja u JSON i vraćanje početnih podataka.

## Predlog toka prezentacije (7–10 minuta)

1. Otvorite profil **Stovarište Javor**. Pokažite lične uslove i otvorene porudžbine.
2. U katalogu pronađite **Velika Kikinda M 333** i otvorite detalje. Promenite unos na palete, izaberite 3 i pokažite promenu rabata.
3. Dodajte u korpu. Pokažite pakovanje, magacin, dostavu i ukupan iznos. Pošaljite porudžbinu.
4. Otvorite porudžbinu, preuzmite potvrdu, pa pokažite ponavljanje prethodne porudžbine.
5. Iz brzog poručivanja preuzmite i ponovo učitajte primer CSV/XLSX/XML datoteke.
6. Iz profila **Keramika Studio** pokažite ograničen asortiman. Poručite veću količinu za demonstraciju kreditnog odobravanja.
7. Odjavite se, otvorite **prodajni tim**, pronađite porudžbinu i potvrdite je. Kod prekoračenog limita unesite internu napomenu.
8. Pokažite partnerska cenovna pravila, stanje magacina i ERP simulaciju.
9. Pošaljite kupčev upit, odgovorite kao admin i pokažite odgovor na kupčevom profilu.

## Datoteke i zavisnosti

- `index.html`, `styles.css`, `app.js`, `core.js`, `data.js`: aplikacija.
- `assets/`: originalni logo i lokalne fotografije proizvoda.
- `vendor/`: lokalne biblioteke Lucide (ikonice) i SheetJS (XLSX).
- `primeri/`: primeri za uvoz; mogu se generisati i iz aplikacije.
- `products.json`: čitljiv izvor podataka; aplikacija koristi `data.js`.
- `izvori.csv`: stranice proizvoda i izvori fotografija.
- `LICENSES.md`: informacije o bibliotekama i fotografijama.
- `.nojekyll`: isključuje Jekyll obradu za GitHub Pages.

Nema build koraka, npm instalacije ni API ključeva. Za lokalni pregled otvorite `index.html` u Chrome-u/Edge-u/Firefox-u ili poslužite folder standardnim statičkim serverom. Biblioteke i fotografije su lokalne; linkovi ka zvaničnoj dokumentaciji zahtevaju internet.

## Obim demo-a

Ovo je prototip za prezentaciju, sa lokalnim podacima u pregledaču. Nema stvarne autentifikacije, servera, ERP veze, slanja e-mailova, obrade plaćanja niti zajedničkih podataka između različitih računara. Nalozi i admin pristup namerno su dostupni na početnoj stranici.

Nazivi, šifre i fotografije proizvoda potiču sa zvaničnog sajta. Cene, rabati, kupci, krediti, pakovanja/palete, magacini, težine koje nisu potvrđene u specifikaciji i poslovni dokumenti su demonstracioni. Ne predstavljaju ponudu Toze Marković.

PDF/skener/fotografije se prilažu uz upit za ručnu obradu; OCR nije uključen. Ponuda prihvaćena u demo-u menja status zahteva, a dalje ugovaranje i porudžbina obavljaju se sa prodajnim timom. Kuponi/pogodnosti služe kao primer zahteva i nisu automatski primenjeni kao popust u korpi.

Demo se čuva u localStorage pod ključem `toza-b2b-demo-v1`; prijavljeni profil u sessionStorage. Početno stanje vraća se iz **Administracija → Podešavanja → Vrati početne demo podatke**. Podaci se ne sinhronizuju između računara ili domena.

Pre produkcione implementacije potrebno je potvrditi Tozin ERP, pravila pakovanja i paleta, stvarne cenovnike i kreditne uslove, logistiku, aktuelne sertifikate, podatke za dokumente i korisničke uloge. Originalni tehnički PDF-ovi zadržavaju izdanje i rok važenja proizvođača; nisu potvrđeni kao aktuelni sertifikati.
