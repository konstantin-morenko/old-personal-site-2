---
title: Контроль качества страниц
last_updated: 2020-12-17
---

<ul>
{% for p in site.pages %}
  {% assign show = false %}
  {% unless p.keywords %}{% assign show = true %}{% endunless %}
  {% unless p.summary %}{% assign show = true %}{% endunless %}
  {% if p.needupdate %}{% assign show = true %}{% endif %}
  {% if show %}
    <li>{{ p.title }}
      <ul>
        {% unless p.keywords %}<li>Необходимы ключевые слова</li>{% endunless %}
        {% unless p.summary %}<li>Необходимо описание</li>{% endunless %}
        {% if p.needupdate %}{% for t in p.needupdate %}<li>{{ t }}</li>{% endfor %}{% endif %}
      </ul>
    </li>
  {% endif %}
{% endfor %}
</ul>
