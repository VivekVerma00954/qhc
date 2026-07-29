QUEENSTOWN HINDU COMMUNITY — WEBSITE
=====================================

BEFORE GOING LIVE — 2 things to do:

1. LOGO
   Place your round logo in this folder named:  logo.png  (or logo.jpg)
   The site tries logo.png first, then logo.jpg, then hides the logo if neither exists.

2. FORM EMAIL KEY (Web3Forms)
   Forms (contact + membership) send email via Web3Forms (free).
   - Go to https://web3forms.com
   - Create an access key using:  queenstownhinducommunity@gmail.com
   - Replace YOUR_WEB3FORMS_ACCESS_KEY_HERE in BOTH files:
       index.html  (contact form)
       form.html   (membership form)

EVENTS
------
Works the same as the GNDQ site:
Drop event poster images into  images\events\  named:
   UpcomingEvent1.png, UpcomingEvent2.png, ... up to UpcomingEvent10.png
They appear automatically in the Events section. Remove the file to remove the event.

CURRENT LIVE URL
----------------
https://queenstownhinducommunity.netlify.app/

MOVING TO A CUSTOM DOMAIN LATER
-------------------------------
The base URL appears in exactly 4 files. Find & replace
"queenstownhinducommunity.netlify.app" with the new domain in:
   index.html    (canonical, og:url, og:image, twitter:image, JSON-LD url/logo/image)
   form.html     (canonical, og:url, og:image)
   sitemap.xml   (both <loc> entries + <lastmod>)
   robots.txt    (Sitemap: line)
Then in Netlify: add the custom domain and let it 301-redirect the old
netlify.app address so existing search rankings carry across.

SEO CHECKLIST (done)
--------------------
 - Unique title + meta description per page
 - Canonical URLs, Open Graph + Twitter Card tags (link previews show the logo)
 - JSON-LD structured data (ReligiousOrganization) incl. Facebook + YouTube
 - One <h1> per page, semantic headings
 - sitemap.xml + robots.txt (success.html excluded from indexing)
 - lang="en-NZ", mobile responsive, static/fast

STILL TO DO (needs you)
-----------------------
 1. Submit sitemap to Google Search Console:
    https://search.google.com/search-console  -> add property
    https://queenstownhinducommunity.netlify.app -> submit /sitemap.xml
 2. Same at Bing Webmaster Tools (optional but quick).
 3. Get inbound links - QLDC community directory, other local community
    groups, your Facebook + YouTube "about" sections. This matters more for
    local ranking than anything left on the page.

HOSTING
-------
Ready to deploy to Netlify as-is (netlify.toml included) — drag the folder into
Netlify Drop or connect a repo.
