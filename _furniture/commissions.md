---
layout: default
title: Furniture
menus:
  - furniture
  - toCommission
title-style:
description: Katie Walker has undertaken a range of commissions for bespoke furniture from the 'Totem bench' outdoor or garden bench seating to high quality pieces to match client's luxury homes. Many of these pieces come about through highly varied, personal and often very particular requirements.
date: 2021-04-19
summary: Katie has some stunning furniture
---

{% include workheader.html %}

<div class="work" markdown="1">

# Commissions #

The creation of bespoke pieces represents a significant part of my work. Since my first commission from English Heritage for the ‘Totem bench’ in London’s Bushy Park in 1993, numerous commissions have allowed me to combine the expressive nature of my work with the discipline of resolving highly varied, personal and often very particular requirements.

  <div class="grid clearfix">
    {% assign contents = site.furniture | sort:'order' %}{% for post in contents %}{% if post.publish != false %}{% if post.title != "Furniture" %}{% if post.type contains "commission" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endif %}{% endfor %}
  </div>

</div>
