---
layout: default
title: News
menus: 
  - news
title-style: 
headimage: 
summary: Katie's latest news
---

<div class="work" markdown="1">
  {% for post in site.news | sort: "date" limit:1 %}
  {% include news.html %}
  {% endfor %}

  <h3>Earlier news</h3>
  <div class="related">
      <div class="grid clearfix">
          {% for post in site.news | sort: "date" offset:1 limit:8 %}{% if post.title != "News" %}
          {% include cell.html %}
          {% endif %}{% endfor %}
      </div>
  </div>
</div>
