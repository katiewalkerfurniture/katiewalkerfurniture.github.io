---
layout: page
title: Retailers
title-style: red
headimage: http://images.quru.com/image?src=kwf/workshop/Millmead_Workshop_Katie_Walker_Furniture_S_FL_orig.jpg
summary: Katie works with some fabulous retailers
---

<div class="retailers">
  Katie Walker has design some lovely furniture for lots of designers.

  It can be found by visiting each retailers site including...

  <div class="related">
      {% for post in site.retailers limit:8 %}
      {% if post.title != "Retailers" %}
        <div class="row">
		  <a class="cell logo" href="{{ site.baseurl }}{{ post.url | remove_first: '/' }}">
	        <img src="{{ post.thumbnail }}" />
		  </a>
		  <a class="cell short-description" href="{{ site.baseurl }}{{ post.url | remove_first: '/' }}">
			{{ post.summary }}
		  </a>
		</div>
	    {% endif %}
	  {% endfor %}
  </div>
</div>
