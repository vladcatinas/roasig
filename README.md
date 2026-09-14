# RoAsig Cluj — site de prezentare

Site static, fără build, fără dependențe de server-side.

## Structură

```
roasig/
├── index.html            pagina principală (conținut + structură)
└── assets/
    ├── css/
    │   └── style.css     toate stilurile site-ului
    ├── js/
    │   └── main.js        logica formularului de contact
    └── img/                (gol — pentru poze/logo viitoare)
```

## Cum publici o modificare

Orice modificare la `index.html`, `style.css` sau `main.js` se reflectă
imediat — sunt fișiere statice, deschise direct de browser.

Pentru DataHost: urci întregul folder `roasig/` (păstrând structura de
mai sus) în `public_html` din cPanel File Manager, sau prin FTP.

## De completat

- Cod RAF (autorizare ASF) — apare momentan „de completat" în secțiunea
  „Despre mine" și în footer.
- Număr de telefon real — apare momentan `0700 000 000` (placeholder) în
  header, secțiunea hero și secțiunea de contact.
- `assets/img/` — logo/poză, dacă vrei să adaugi.
