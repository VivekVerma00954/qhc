# Bhajan Sandhya

A small, static, TV-friendly lyric companion for Queenstown Hindu Community.

## Before hosting

1. Put the YatraBeyond and QHC logo files in an `assets/` folder, then replace the two small logo placeholders in `index.html` with image tags.
2. Add the group-approved versions of the four modern bhajans and Shiv Chalisa in `content.js`. Each entry is already in programme order.
3. Upload these four files to the web root for the chosen subdomain, for example `bhajan.yatrabeyond.com`.

The site has no forms, account system, analytics, database, or external scripts. It renders lyric text with `textContent`, so pasted content is not interpreted as HTML.

## Recommended host headers

Configure these headers at the host/CDN when the site goes live:

```text
Content-Security-Policy: default-src 'self'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; script-src 'self'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
```

Use HTTPS, enable automatic updates on the hosting account, and only grant deploy access to the small group who maintain the programme.
