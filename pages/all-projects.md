---
title: Список всех моих проектов
keywords: проекты,карта
sidebar: home_sidebar
permalink: /all-projects.html
---

Полный список всех моих проектов.  В некотором смысле это "карта
сайта".

## Все проекты

{% for project in site.data.projects %}
  {% include project-card.html %}
{% endfor %}

## Структура и данные

Данные по проектам содержатся в `_data/projects.yml`:
```
- name: Наименование
  description: Короткое описание
  tags: Теги
  link: Внутренняя ссылка на landing
  state: idea,cancelled,current,frozen,closed
  updated: Дата обновления данных
- ...
```
