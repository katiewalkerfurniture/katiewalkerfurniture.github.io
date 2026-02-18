---
layout: page
title: Retailers
title-style: red
headimage: //images.cart-shed.com/image?src=kwf/workshop/Millmead_Workshop_Katie_Walker_Furniture_S_FL_orig.jpg
summary: Katie works with some fabulous retailers
---

<div class="for_retailers" markdown="1">
  Katie Walker has designed and developed a number of pieces for retailers that are only available through those retailers.
  
  <div class="grid">
    {% for post in site.work %}{% if post.title != "Work" %}{% if post.type contains "retailer" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endfor %}
  </div>
</div>
