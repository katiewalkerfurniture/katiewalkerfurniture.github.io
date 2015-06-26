---
layout: default
title: Work
menus: 
  - work
  - toCommission
title-style:
summary: Katie has some stunning work
---

{% include workheader.html %}

<div class="work" markdown="1">


The creation of bespoke pieces represents a significant part of my work. Since my first commission from English Heritage for the ‘Totem bench’ in London’s Bushy Park in 1 993, numerous commissions have allowed me to combine the expressive nature of my work with the discipline of resolving highly varied, personal and often very particular requirements.

  <div class="grid">
    {% for post in site.work %}{% if post.title != "Work" %}{% if post.type contains "commission" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endfor %}
  </div>

</div>
