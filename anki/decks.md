---
title: Все колоды для Anki
keywords: anki, decks
---

{% include note.html content="[Организация и названия для колод](/site_organization.html#anki)." %}

## Список моих колод

<ul>
{% assign card_decks = site.data.anki.decks | where: "type", "card" %}
{% for deck in card_decks %}
  <li>
    {% include anki_deck.html %}
  </li>
{% endfor %}
</ul>

## Список шаблонов колод

<ul>
{% assign template_decks = site.data.anki.decks | where: "type", "template" %}
{% for deck in template_decks %}
  <li>
    {% include anki_deck.html %}
  </li>
{% endfor %}
</ul>
