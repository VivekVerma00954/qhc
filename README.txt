QUEENSTOWN HINDU COMMUNITY — WEBSITE
=====================================

SETUP STATUS — both done
------------------------
1. LOGO — logo.png is in place (used by nav + favicon).

2. FORMS — live via Web3Forms, delivering to
   queenstownhinducommunity@gmail.com
   Key e9e6f62a-c6ad-4835-8d02-8b5a0ebeff45 is set in:
       index.html  (contact form)
       form.html   (membership form)
   Web3Forms access keys are client-side and public by design — safe in a
   public repo. Free tier: 250 submissions/month. If you ever get spammed,
   generate a new key at web3forms.com and replace it in those two files.

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
