---
title: Список всех моих проектов
keywords: проекты,карта
sidebar: home_sidebar
permalink: /all-projects.html
---

Полный список всех моих проектов.  В некотором смысле это "карта
сайта".

{% include all-projects.html %}

## Структура и данные

Данные по проектам содержатся в `_data/projects.yml` в виде
двухуровневой структуры "секция/проект":
```
- name: Наименование секции
  content:
  - name: Наименование проекта
    description: Короткое описание
    tags: Теги
    link: Внутренняя ссылка на landing
    state: idea,cancelled,current,frozen,closed
    updated: Дата обновления данных
  - ...
- ...
```
