---
layout: page
title: Мои дипломы
---

<style>
div.card {
	margin: 30px 0;
	border: 2px solid black;
	border-radius: 15px;
}
div.icon {
	display: table-cell;
	padding: 10px;
	border-right: solid black 2px;
}
div.content {
	display: table-cell;
	width: 100%;
	padding: 0 10px;
}
div.content div.header {
	text-align: center;
	font-size: 150%;
}
div.card div.content div.title {
	font-size: 150%;
	text-align: center;
	width: 100%;
	margin: 20px 0;
}
div.card div.content div.subtitle {
	text-align: center;
	width: 100%;
	margin: 0 0 10px 0;
}
div.card div.content div.info {
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin: 0 0 10px 0;
    flex-wrap: wrap;
}
div.card div.content div.info div.finished {
    margin: 0 20px;
	text-align: center;
	min-width: 25%;
	max-width: 30%;
}
div.card div.content div.info div.place {
    margin: 0 20px;
	text-align: center;
	max-width: 60%;
}
</style>

{% for section in site.data.myself.diplomas %}

<h2>{{ section.name }}</h2>

{% for item in section.list %}
<div class="card">
  <div class="icon"><i class="material-icons-round" style="font-size: 5em">{{ section.icon }}</i></div>
  <div class="content" style="vertical-align: middle">
	<div class="title">
	  {{ item.title }}
	  {% if item.agrade %}
	    <span class="material-icons-round" style="font-size: inherit" title="Диплом с отличием">local_activity</span>
	  {% endif %}
	</div>
	{% if item.subtitle %}
	<div class="subtitle">{{ item.subtitle }}</div>
	{% endif %}
	<div class="info">
	  <div class="finished">
	  {% if item.finished %}
  	    <span class="material-icons-round" style="font-size: inherit; vertical-align: baseline">event_available</span>
	    {{ item.finished }}
	  {% endif %}
	  {% if item.date %}
	    <span class="material-icons-round" style="font-size: inherit; vertical-align: baseline">event_available</span>
        {{ item.date }}
	  {% endif %}
	  {% if item.value %}
        <br /><span class="material-icons-round" style="font-size: inherit; vertical-align: baseline">schedule</span>
	    {{ item.value }}
	  {% endif %}
	  </div>
	  {% if item.place %}
	  <div class="place">
        <span class="material-icons-round" style="font-size: inherit">place</span>
        {{ item.place }}
	  </div>
	  {% endif %}
	</div>
  </div>
</div>
{% endfor %}
{% endfor %}
