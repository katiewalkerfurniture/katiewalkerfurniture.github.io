---
layout: default
title: Work
menus: 
  - work
  - forRetailers
title-style: 
summary: Katie has some stunning work that can be purchased from retailers
---
{% include workheader.html %}

<div class="content for_retailers" markdown="1">

# Design for others #

Katie Walker has designed and developed a number of pieces for retailers that are only available through those retailers.
  
  <div class="grid clearfix">
    {% assign contents = site.work | sort:'order' %}{% for post in contents %}{% if post.title != "Work" %}{% if post.type contains "retailer" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endfor %}
  </div>
</div>

