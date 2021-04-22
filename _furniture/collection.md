---
layout: default
title: Pieces to buy
menus:
  - furniture
date: 2021-04-19
description: Signature pieces designed by Katie Walker can be purchase directly. This range is constantly evolving and is produced using the finest materials, with meticulous attention to detail. Some sizes, materials and finishes can be tailored to your requirements. The pieces can be viewed by appointment at our studio in West Sussex, UK.
title-style:
summary: Katie has some really stunning work
---

{% include workheader.html %}

<div class="work" markdown="1">

# Collection

The Katie Walker Furniture collection comprises a small number of signature pieces designed by Katie Walker which are available to order. It is constantly evolving and is produced using the finest materials, with meticulous attention to detail. As each piece is individually made, some sizes, materials and finishes can be tailored to your requirements.

The collection can be viewed by appointment at our studio in West Sussex, UK.

  <div class="grid clearfix">
    {% assign contents = site.furniture | sort:'order' %}{% for post in contents %}{% if post.publish != false %}{% if post.title != "Pieces to buy" %}{% if post.type contains "buy" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endif %}{% endfor %}
  </div>

</div>
