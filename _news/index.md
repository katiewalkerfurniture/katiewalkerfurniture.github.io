---
layout: page
title: Work
title-style: 
headimage: http://images.quru.com/image?src=kwf/workshop/Millmead_Workshop_Katie_Walker_Furniture_S_FL_orig.jpg
summary: Katie has some stunning work
---

<div class="work">
  Katie Walker has designed some lovely furniture during the last 20 years some of which is shown here.

  It can be found by visiting each retailers site including...

  <div class="related">
      {% for post in site.work limit:8 %}
      {% if post.title != "Work" %}
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
