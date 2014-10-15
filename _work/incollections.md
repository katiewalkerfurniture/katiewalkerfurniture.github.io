---
layout: default
title: Work
menus: 
    - work
    - inCollections
title-style: 
headimage: http://images.quru.com/image?src=kwf/workshop/Millmead_Workshop_Katie_Walker_Furniture_S_FL_orig.jpg
summary: Katie has some stunning work
---

{% include workheader.html %}
<div class="work">
  Katie Walker's furniture has been purchased by collectors for a
  number of years.
  
  [Contact us](https://contact "Contact us") if you would like to discuss a commission.


  <div class="related">
      {% for post in site.work %}
      {% if post.title != "Work" %}
      {% if post.type contains "collection" %}
        <div class="item" id="item{{ post.title | remove:' '}}">
		  <div class="itemFront">
              <center>
              <a href="{{ site.baseurl }}{{ post.url | remove_first: '/' }}">
                  <img src="{{ post.thumbnail }}" />
		      </a>
              </center>
          </div>
		  <div class="itemBack">
              <a href="{{ site.baseurl }}{{ post.url | remove_first: '/' }}">
                  <span class="title">{{ post.title }}</span>
                  {{ post.summary }}
              </a>
	      </div>
        </div>
	  {% endif %}
      {% endif %}
	  {% endfor %}
  </div>
</div>
