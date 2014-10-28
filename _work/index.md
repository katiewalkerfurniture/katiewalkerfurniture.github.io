---
layout: default
title: Work
menus: 
    - work
    - toBuy
title-style: 
headimage: http://images.quru.com/image?src=kwf/workshop/Millmead_Workshop_Katie_Walker_Furniture_S_FL_orig.jpg
summary: Katie has some stunning work
---

{% include workheader.html %}
<div class="work">
  Katie Walker has designed some lovely furniture during the last 20 years some of which is shown here.

  It can be found by visiting each retailers site including...

    <div class="grid">
      {% for post in site.work %}{% if post.title != "Work" %}{% if post.type contains "buy" %}
      <div class="cell" id="item{{ post.title | remove:' '}}">
	      <div class="cell_front">
              <center>
                  <a href="{{ site.baseurl }}{{ post.url | remove_first: '/' }}">
                      <img src="{{ post.thumbnail }}" />
                  </a>
              </center>
          </div>
		  <div class="cell_back">
              <a href="{{ site.baseurl }}{{ post.url | remove_first: '/' }}">
                  <span class="title">{{ post.title }}</span>
                  Summary: {{ post.summary }}
              </a>
	      </div>
      </div>
      {% endif %}{% endif %}{% endfor %}
    </div>
</div>
