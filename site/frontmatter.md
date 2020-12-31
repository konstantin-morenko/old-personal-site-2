---
title: FrontMatter
---

## Шаблон FrontMatter

```
---
title: title
projectname: (_config.yml)
summary: |
  summary
keywords: keywords
toc: true
search: true

needupdate: []
needwrite: true
tags: tags
last_updated: 2020-12-31

ntplinks: true
nextlink: .md
prevlink: .md
toclink: (_config.yml)
---
```

### Общий FrontMatter

- title --- заголовок страницы
- projectname --- имя проекта для отображения в заголовке страницы (в
  скобках), в результатах простого поиска (в скобка).  Лучше задать в
  `_config.yml` для всего каталога с проектом
- summary --- аннотация
- keywords --- ключевые слова
- toc --- наличие содержания в начале страницы
- search --- включать ли страницу в поиск

### layout: page

- needupdate --- список необходимых изменений в странице
- needwrite --- если страница является заготовкой, то отображает
  соответствующий знак
- tags --- теги
- last_updated --- дата последнего обновления страницы

### layout: book-page

- ntplinks --- включить ссылки на следующий, предыдущий и оглавление (`_config.yml`)
- nextlink --- ссылка на следующую страницу
- prevlink --- ссылка на предыдущую страницу
- toclink --- ссылка на оглавление (`_config.yml`)
