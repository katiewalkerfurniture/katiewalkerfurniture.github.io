---
layout: about
title: Coming soon
headimage: 
menus: 
tags:
---

<div class="strips clearfix" markdown="0">

    {% for page in site.work | sort: 'date' %}{% if page.title != "Work" %}{% if page.type contains "buy" %}{% if page.stripimage != null %}
    {% include strip.html %}
    {% endif %}{% endif %}{% endif %}{% endfor %}

    {% for page in site.work | sort: 'date' %}{% if page.title != "Work" %}{% if page.type contains "commission" %}{% if page.stripimage != null %}
    {% include strip.html %}
    {% endif %}{% endif %}{% endif %}{% endfor %}
</div>


