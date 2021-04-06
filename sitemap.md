---
layout: nil
---
<?xml version="1.0" encoding="UTF-8" markdown="0"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {% for page in site.pages %}{% if page.layout != "nil" %}<url>
        <loc>http://www.katiewalkerfurniture.com{{ page.url | remove: 'index.html' }}</loc>
        <lastmod>{{ site.time | date: '%Y-%m-%d' }}</lastmod>
    </url>{% endif %}{% endfor %}
	{% for page in site.work %}{% if page.layout != "nil" %}<url>
        <loc>http://www.katiewalkerfurniture.com{{ page.url | remove: 'index.html' }}</loc>
        <lastmod>{{ site.time | date: '%Y-%m-%d' }}</lastmod>
    </url>{% endif %}{% endfor %}
	{% for page in site.news %}{% if page.layout != "nil" %}<url>
        <loc>http://www.katiewalkerfurniture.com{{ page.url | remove: 'index.html' }}</loc>
        <lastmod>{{ site.time | date: '%Y-%m-%d' }}</lastmod>
    </url>{% endif %}{% endfor %}
</urlset>
