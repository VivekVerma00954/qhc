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

WHEN DOMAIN IS DECIDED
----------------------
Update the placeholder URLs (queenstownhinducommunity.netlify.app) in:
   robots.txt, sitemap.xml

HOSTING
-------
Ready to deploy to Netlify as-is (netlify.toml included) — drag the folder into
Netlify Drop or connect a repo.
