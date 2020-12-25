---
title: Все колоды для Anki
keywords: anki, decks
---

## Список моих колод

{% include note.html content="[Организация и названия для колод](/site_organization.html#anki)." %}

<ul>
{% for deck in site.data.anki.decks %}
  <li>
    {% include anki_deck.html %}
  </li>
{% endfor %}
</ul>

### Колоды с горячими клавишами программ

<ul>
{% for deck in site.data.anki.decks %}
  {% for tag in deck.tags %}
    {% if tag == "hotkeys" %}
    <li>
      {% include anki_deck.html %}
    </li>
	{% endif %}
  {% endfor %}
{% endfor %}
</ul>

