---
layout: default
title: Pieces to buy
menus:
  - furniture
date: 2024-07-01
description: Signature pieces designed by Katie Walker can be purchased directly. This range is constantly evolving and is produced using the finest materials, with meticulous attention to detail. Some sizes, materials and finishes can be tailored to your requirements. The pieces can be viewed by appointment at our studio in West Sussex, UK.
title-style:
summary: Katie has some really stunning work
---

{% include workheader.html %}

<div class="work" markdown="1">

# Collection

Katie Walker's collection charts the development of her ethos over the past three decades; the pieces are produced using the finest materials and crafted with meticulous attention to detail. 

Katie is represented by <a href="https://www.sculpture.uk.com/" target="_blank" class="link">New Art Centre</a>, Salisbury who have a selection of pieces on permanent display and through whom most of these are exclusively available. Work can also be seen and obtained directly from our studio in West Sussex.  

To enquire about any piece or to arrange a visit please [contact us here](/contact). 


  <div class="grid clearfix">
    {% assign contents = site.furniture | sort:'order' %}{% for post in contents %}{% if post.publish != false %}{% if post.title != "Pieces to buy" %}{% if post.type contains "buy" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endif %}{% endfor %}
  </div>

</div>
