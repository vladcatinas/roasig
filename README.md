# RoAsig Cluj — site de prezentare

Site static, fără build, fără dependențe de server-side.

## Structură

```
roasig/
├── index.html   pagina principală (conținut + structură)
├── style.css    toate stilurile site-ului
├── main.js      logica formularului de contact
└── README.md
```

## Cum publici o modificare

Orice modificare la `index.html`, `style.css` sau `main.js` se reflectă
imediat — sunt fișiere statice, deschise direct de browser.

Pentru DataHost: urci toate cele 3 fișiere (`index.html`, `style.css`,
`main.js`) direct în `public_html` din cPanel File Manager, sau prin FTP.

## De completat

- Cod RAF (autorizare ASF) — apare momentan „de completat" în secțiunea
  „Despre mine" și în footer.
- Număr de telefon real — apare momentan `0700 000 000` (placeholder) în
  header, secțiunea hero și secțiunea de contact.
