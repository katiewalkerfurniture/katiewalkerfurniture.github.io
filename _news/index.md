---
layout: default
title: News
menus: 
  - news
title-style: 
headimage: 
summary: Katies latest news
---

<div class="news" markdown="1">
  {% assign lastarticle = site.news | size %}{% assign lastarticle = lastarticle | minus:2 %}
  {% for post in site.news offset:lastarticle limit:1 %}
  {% capture currenttitle%}{{ post.title }}{% endcapture %}
  {% include news.html %}
  {% endfor %}

  <h3>Earlier news</h3>
  <div class="related">
      <div class="grid clearfix">
          {% for post in site.news limit:lastarticle %}{% if post.title != "News" %}{% if post.title !=  currenttitle %}
          {% include cell.html %}
          {% endif %}{% endif %}{% endfor %}
      </div>
  </div>
</div>
