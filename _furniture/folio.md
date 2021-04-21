---
layout: default
title: Furniture
menus:
  - furniture
  - folio
title-style:
summary: Katie has some stunning work
---



{% include workheader.html %}

<div class="work" markdown="1">
<!-- # The Katie Walker Furniture collection -->

<h1 style="font-weight: 300; font-size: 15px;">The Katie Walker Furniture collection comprises a small number of signature pieces designed by Katie Walker which are available to order.</h1>

It is constantly evolving and is produced using the finest materials, with meticulous attention to detail. As each piece is individually made, some sizes, materials and finishes can be tailored to your requirements.

The collection can be viewed by appointment at our studio in West Sussex and some pieces are also available through selected galleries and retailers in the UK.

  <div class="grid clearfix">
    {% assign contents = site.furniture | sort:'order' %}{% for post in contents %}{% if post.publish != false %}{% if post.title != "Furniture" %}{% if post.type contains "buy" or post.type contains "speculative" or post.type contains "commission" or post.type contains "retailer" or post.type contains "folio" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endif %}{% endfor %}
  </div>
</div>
