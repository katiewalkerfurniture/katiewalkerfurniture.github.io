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

Katie Walker has designed some lovely furniture during the last 20 years some of which is shown here.

[A link](/here)

It can be found by visiting each retailers site including something...

  <div class="grid">
    {% for post in site.work %}{% if post.title != "Work" %}{% if post.type contains "buy" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endfor %}
  </div>
</div>
