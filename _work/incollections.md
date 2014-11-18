---
layout: default
title: Work
menus: 
  - work
  - inCollections
title-style:
summary: Katie has some stunning work
---

{% include workheader.html %}
<div class="work" markdown="1">
Katie Walker's furniture has been purchased by collectors for a  number of years.
  
[Contact us](https://contact "Contact us") if you would like to discuss a commission.

  <div class="grid">
    {% for post in site.work %}{% if post.title != "Work" %}{% if post.type contains "collection" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endfor %}
  </div>

</div>
