---
layout: page
permalink: /theses/
title: Theses
description: Thesis proposals for Master and Ph.D. students. Click a card to read the full proposal. If you are interested, feel free to drop me an email.
nav: true
nav_order: 8
---

{% assign sorted_theses = site.theses | sort: "importance" %}

## Master Theses

<div class="row row-cols-1 row-cols-md-2">
  {% assign master_theses = sorted_theses | where: "level", "Master Thesis" %}
  {% for thesis in master_theses %}
    {% include theses_card.liquid %}
  {% endfor %}
</div>

## Ph.D. Theses

<div class="row row-cols-1 row-cols-md-2">
  {% assign phd_theses = sorted_theses | where: "level", "PhD Thesis" %}
  {% for thesis in phd_theses %}
    {% include theses_card.liquid %}
  {% endfor %}
</div>
