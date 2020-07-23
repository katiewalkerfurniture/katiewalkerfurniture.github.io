---
layout: default
title: Pieces to buy
menus:
  - work
  - toBuy
title-style:
summary: Katie has some really stunning work
---



{% include workheader.html %}

<div class="work" markdown="1">
<!-- # The Katie Walker Furniture collection -->

# Collection #

The Katie Walker Furniture collection comprises a small number of signature pieces designed by Katie Walker which are available to order. It is constantly evolving and is produced using the finest materials, with meticulous attention to detail. As each piece is individually made, some sizes, materials and finishes can be tailored to your requirements.

The collection can be viewed by appointment at our studio in West Sussex and some pieces are also available through selected galleries and retailers in the UK.

  <div class="grid clearfix">
    {% assign contents = site.work | sort:'order' %}{% for post in contents %}{% if post.publish != false %}{% if post.title != "Pieces to buy" %}{% if post.type contains "buy" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endif %}{% endfor %}
  </div>

-----

  <div class="grid clearfix">
    {% assign contents = site.work | sort:'order' %}{% for post in contents %}{% if post.publish != false %}{% if post.title != "Pieces to buy" %}{% if post.type contains "speculative" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endif %}{% endfor %}
  </div>

</div>