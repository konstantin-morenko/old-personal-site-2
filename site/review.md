---
title: Контроль качества страниц
last_updated: 2020-12-31
search: exclude
---

На этой странице представлены результаты контроля качества страниц
сайта.

Контролируются следующие правила для страниц:
- наличие ключевых слов (`keywords` во FrontMatter)
- наличие аннотации (`summary` во FrontMatter)
- наличие `needwrite` (во FrontMatter)
- пустое содержимое страницы
- наличие даты последнего обновления (`last_updated` во Frontmatter)
- количество слов на странице:
  - меньше 2000
  - больше 10000
- наличие `needupdate` (во FrontMatter)

## Результаты анализа страниц

<ul>
{% assign c_pages = 0 %}
{% assign c_keywords = 0 %}
{% assign c_summary = 0 %}
{% assign c_needwrite = 0 %}
{% assign c_last_updated = 0 %}
{% assign c_needupdate = 0 %}
{% assign c_needupdate_count = 0 %}
{% assign c_lwords = 0 %}
{% assign c_mwords = 0 %}
{% assign c_correct = 0 %}

{% for p in site.pages %}
  {% assign c_pages = c_pages | plus: 1 %}
  {% assign show = false %}

  {% unless p.keywords %}
    {% assign show = true %}
	{% assign c_keywords = c_keywords | plus: 1 %}
  {% endunless %}

  {% unless p.summary %}
    {% assign show = true %}
	{% assign c_summary = c_summary | plus: 1 %}
  {% endunless %}

  {% if p.needwrite %}
    {% assign show = true %}
	{% assign c_needwrite = c_needwrite | plus: 1 %}
  {% endif %}

  {% assign stripped_content = p.content | strip_newlines %}
  {% if stripped_content == "" %}
    {% assign show = true %}
	{% assign c_needwrite = c_needwrite | plus: 1 %}
  {% endif %}

  {% unless p.last_updated %}
    {% assign show = true %}
	{% assign c_last_updated = c_last_updated | plus: 1 %}
  {% endunless %}

  {% assign w = p.content | number_of_words %}
  {% if w < 2000 %}
    {% assign show = true %}
	{% assign c_lwords = c_lwords | plus: 1 %}
  {% endif %}
  {% if w > 10000 %}
    {% assign show = true %}
	{% assign c_mwords = c_mwords | plus: 1 %}
  {% endif %}

  {% if p.needupdate %}
    {% assign show = true %}
	{% assign c_needupdate = c_needupdate | plus: 1 %}
	{% assign nc = p.needupdate | size %}
	{% assign c_needupdate_count = c_needupdate_count | plus: nc %}
  {% endif %}

  {% if show %}
    <li><a href="{{ p.url }}">{{ p.title }}</a> ({{ p.path }})
      <ul>
        {% unless p.keywords %}<li>Необходимы ключевые слова</li>{% endunless %}
        {% unless p.summary %}<li>Необходима аннотация</li>{% endunless %}
        {% if p.needwrite or stripped_content == "" %}<li>Страница требует наполнения</li>{% endif %}
        {% unless p.last_updated %}<li>Не указана дата последнего обновления</li>{% endunless %}
        {% if w < 2000 %}<li>Слишком мало слов: {{ w }}</li>{% endif %}
        {% if w > 10000 %}<li>Слишком много слов: {{ w }}</li>{% endif %}
        {% if p.needupdate %}{% for t in p.needupdate %}<li>{{ t }}</li>{% endfor %}{% endif %}
      </ul>
    </li>
  {% else %}
    {% assign c_correct = c_correct | plus: 1 %}
  {% endif %}
{% endfor %}
</ul>

## Статистика

- Всего просканировано страниц: {{ c_pages }}
- Исправных страниц по всем показателям: {{ c_correct }}
- Необходимо добавить ключевые слова: {{ c_keywords }}
- Необходимо добавить аннотации: {{ c_summary }}
- Необходимо наполнить содержимым: {{ c_needwrite }}
- Необходимо добавить дату обновления: {{ c_last_updated }}
- Необходимо добавить слова: {{ c_lwords }}
- Необходимо убавить слова: {{ c_mwords }}
- Необходимо внести правки: {{ c_needupdate }} (всего {{ c_needupdate_count }})
