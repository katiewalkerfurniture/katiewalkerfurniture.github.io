---
layout: page
title: Exhibitions
title-style: 

summary: An index of exhibitions including Katie Walker
social: a list of upcoming and past exhibitions
---

<div class="for_retailers" markdown="1">
  Katie Walker has had work featured in a number of exhibitions.
  
  <div class="grid clearfix">
    {% for post in site.exhibitions %}{% if post.title != "Exhibitions" %}
    {% include cell.html %}
    {% endif %}{% endfor %}
  </div>
</div>
