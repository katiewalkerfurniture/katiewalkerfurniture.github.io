---
layout: default
title: Links
title-style: white
headimage: http://images.quru.com/image?src=kwf/workshop/Millmead_Workshop_Katie_Walker_Furniture_S_FL_orig.jpg
summary: Katie has some stunning work
---

<div class="work" markdown="1">
  Katie was forged a number of strong relationships with a number of retailers, galleries and manufacturers. Not only do these companies sell furniture from the Katie Walker Furniture range but they also sell works that Katie has specifically designed for them.

  A number of public collections have some of Katie's work which is therefore accessible to the public.


  <div class="related">
  <h3>Retailers</h3>

{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
<h4> taglist</h4>
<ol>
{% for tag in sortedtags %}
<li>{{ tag }}</li>
</ol>
{% endfor %}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}


{% for post in site.links.tags[retailer] limit:8 %}
      <div class="row">
		  <a class="cell logo" href="/{{ post.url | remove_first: '/' }}">
	        <img src="{{ post.thumbnail }}" />
		  </a>
		  <a class="cell short-description" href="/{{ post.url | remove_first: '/' }}">
			{{ post.summary }}
		  </a>
	  </div>
	  {% endfor %}
  </div>

  <div class="related">
  <h3>Makers</h3>
     {% for post in site.links.tags[retailer] limit:8 %}
	 <div class="row">
		 <a class="cell logo" href="/{{ post.url | remove_first: '/' }}">
			 <img src="{{ post.thumbnail }}" />
		 </a>
		 <a class="cell short-description" href="/{{ post.url | remove_first: '/' }}">
			{{ post.summary }}
		 </a>
	 </div>
    {% endfor %}
	</div>

</div>
