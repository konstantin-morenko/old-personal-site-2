---
title: Все колоды для Anki
keywords: anki, decks
sidebar: home_sidebar
permalink: other_anki_decks.html
---

## Об Anki

## Список моих колод

{% include note.html content="[Организация и названия для колод](/site_organization.html#anki)." %}

<ul>
{% for deck in site.data.anki.decks %}
  <li>
    {{ deck.name }} ({{ deck.type }}) [{{ deck.tags}}]
	<ul>
    {% for item in deck.items %}
	  <li><a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.date }} {{ item.version }}</a> {{ item.changelog }}</li>
	{% endfor %}
	</ul>
  </li>
{% endfor %}
</ul>

### Колоды с горячими клавишами программ

<ul>
{% for deck in site.data.anki.decks %}
  {% assign tags_list = deck.tags | split: "," %}
  {% for tag in tags_list %}
    {% if tag == "hotkeys" %}
    <li>
      {{ deck.name }} ({{ deck.type }}) [{{ deck.tags}}]
	  <ul>
      {% for item in deck.items %}
        <li><a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.date }} {{ item.version }}</a> {{ item.changelog }}</li>
	  {% endfor %}
	  </ul>
    </li>
	{% endif %}
  {% endfor %}
{% endfor %}
</ul>

