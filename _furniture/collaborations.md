---
layout: default
title: Furniture
menus:
  - furniture
  - forRetailers
title-style:
date: 2021-04-19
description: Katie Walker works with a number of retailers and makers and many of her designs can be purchased directly from these collaborators.
summary: Katie has some stunning furniture that can be purchased from retailers
---
{% include workheader.html %}

<div class="content for_retailers" markdown="1">

# Collaborations #

Katie Walker has designed and developed a number of pieces for retailers that are only available through those retailers.

  <div class="grid clearfix">
    {% assign contents = site.furniture | sort:'order' %}{% for post in contents %}{% if post.publis != false %}{% if post.title != "Furniture" %}{% if post.type contains "retailer" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endif %}{% endfor %}
  </div>
</div>
