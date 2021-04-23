---
layout: default
title: Furniture
menus:
  - furniture
  - folio
title-style:
summary: Katie has some stunning work
---



{% include workheader.html %}

<div class="work" markdown="1">
<!-- # The Katie Walker Furniture collection -->

## Collaborations ##

Katie Walker has designed and developed a number of pieces for others in the furniture industry that are only available through them.

  <div class="grid clearfix">
    {% assign contents = site.furniture | sort:'order' %}{% for post in contents %}{% if post.publis != false %}{% if post.title != "Furniture" %}{% if post.type contains "retailer" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endif %}{% endfor %}
  </div>

## Commissions ##

The creation of bespoke pieces represents a significant part of the Katie Walker Furniture folio. Since the first commission from English Heritage for the ‘Totem bench’ in London’s Bushy Park in 1993, numerous commissions have combined an expressive style with the discipline of resolving highly varied, personal and often very particular requirements. The following are some of the pieces with stories to tell...

  <div class="grid clearfix">
    {% assign contents = site.furniture | sort:'design-date' | reverse %}{% for post in contents %}{% if post.publish != false %}{% if post.title != "Furniture" %}{% if post.type contains "commission" %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endif %}{% endfor %}
  </div>

## Archive ##

We have created a number of pieces in the past that are no longer made for our collection. Of course we would be interested in making them for you so please contact us if anything is of interest.

  <div class="grid clearfix">
    {% assign contents = site.furniture | sort:'order' %}{% for post in contents %}{% if post.publish != false %}{% if post.title != "Furniture" %}{% if post.type contains "speculative" or post.type contains "folio" %}{% if post.type contains "buy" %}{% else %}
    {% include cell.html %}
    {% endif %}{% endif %}{% endif %}{% endif %}{% endfor %}
  </div>

</div>
