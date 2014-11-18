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

Katie Walker's furniture has been purchased by collectors for a number of years.

  <div class="grid">
    {% for post in site.work %}{% if post.title != "Work" %}{% if post.type contains "commission" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endfor %}
  </div>

</div>
