---
layout: default
title: Work
menus:
  - work
  - toBuy
title-style:
summary: Katie has some stunning work
---



{% include workheader.html %}

<div class="work" markdown="1">
<!-- # The Katie Walker Furniture collection -->

The Katie Walker Furniture collection comprises a small number of signature pieces designed by Katie Walker which are available to order. It is constantly evolving and is produced using the finest materials, with meticulous attention to detail. As each piece is individually made, some sizes, materials and finishes can be tailored to your requirements.

The collection can be viewed by appointment at our studio in West Sussex and some pieces are also available through selected galleries and retailers in the UK.

  <div class="grid clearfix">
    {% for post in site.work | sort: 'date' %}{% if post.title != "Work" %}{% if post.type contains "buy" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endfor %}
  </div>
</div>
