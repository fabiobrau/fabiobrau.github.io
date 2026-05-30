---
layout: page
title: "Robustness against Adversarial Kernel Perturbations"
description: A structured family of convolutional adversarial perturbations, their certifiable robustness, and mitigation strategies.
img: /assets/img/theses/ImageNet1k_7_0.2.png
level: Master Thesis
importance: 2
keywords:
  - Adversarial Robustness
  - Convolutional Perturbations
  - Certified Defenses
  - Computer Vision
  - Deep Learning
---

{% if page.keywords %}
<div class="mb-3">
  {% for kw in page.keywords %}
    <span class="badge bg-primary me-1">{{ kw }}</span>
  {% endfor %}
</div>
{% endif %}


**Supervisor:** Fabio Brau
**Suitable for:** Master's students (also feasible as an ambitious Bachelor's thesis with a reduced scope)
**Areas:** adversarial machine learning, computer vision, deep learning

## Overview

Classical adversarial examples perturb an image **pixel by pixel**, adding an unstructured noise $\delta$ to obtain $x_{\text{adv}} = x + \delta$. This project studies a different, more structured threat: **Adversarial Kernel Perturbations (AKP)**, where the attacker is allowed only to convolve the input with a small kernel $\kappa$, producing $x_{\text{adv}} = x + \kappa \star x$. This family is interesting precisely because it is *natural*: blurring, motion blur, spatial shifts, contrast changes, and color drifts are all convolutional transformations that occur accidentally in images captured by real cameras. A student joining this project would work at the intersection of adversarial robustness and computer vision, building the attack and connecting it to the real-world transformations it captures.

<div style="text-align: center; margin-bottom: 1.5rem;">
  {% include figure.liquid path="assets/img/theses/ImageNet1k_7_0.2.png" class="img-fluid rounded" max-width="80%" avoid_scaling=true cache_bust=true caption="An adversarial kernel perturbation on an ImageNet sample. A 7×7 kernel, applied by convolution, flips the classifier's prediction (unicycle → barbershop) while the perturbation stays close to a plausible camera artifact." %}
</div>

## What you would work on

The project is organized as two objectives that build on each other: *the attack → its real-world meaning.* A Master's thesis covers both; a Bachelor's thesis can stop after the first. The two are ordered from most accessible to most challenging, so you always have a working result before moving on.

## Background

The threat model rests on two core definitions.

**Definition 1 (Adversarial Kernel).** Given an image classifier $\mathcal{K}_f$ deduced from a classification function $f$, an image $x \in [0,1]^{C \times H \times W}$, and a kernel $\kappa \in \mathbb{R}^{C \times k_1 \times k_2}$, the kernel $\kappa$ is *adversarial* if

$$\mathcal{K}_f(x) \neq \mathcal{K}_f(x + \kappa \star x), \qquad x + \kappa \star x \in [0,1]^{C \times H \times W},$$

where $\star$ is the channel-wise cross-correlation with zero-padding chosen to preserve the input shape.

**Definition 2 (Adversarial Kernel Problem).** An adversarial kernel of magnitude at most $\varepsilon$ is found by solving

$$\max_{\kappa}\; \mathcal{L}(f(x + \kappa \star x), y) \quad \text{s.t.}\quad \mathcal{K}_f(x + \kappa \star x) \neq \mathcal{K}_f(x),\;\; \|\kappa\| < \varepsilon,\;\; 0 \le x + \kappa \star x \le 1.$$

**Feasibility via Young's inequality.** Unlike the pixel-wise case, an unbounded kernel can easily push pixels outside the box $[0,1]$. Writing $x + \kappa \star x = (\iota + \kappa) \star x$, where $\iota$ is the identity kernel, Young's inequality for convolutions $\lVert u * v\rVert_r \le \lVert u\rVert_p \lVert v\rVert_q$ (with $r=q=\infty$, $p=1$) shows that imposing the relaxed per-channel constraint $\lVert \iota + \kappa_c\rVert_1 \le 1$ guarantees the box constraint. The relaxed problem (AKP) can then be solved with a projected gradient strategy, projecting onto $\ell_1$-balls centered at the identity kernel. This optimization, run with PGD-style iterations, is the workhorse of the whole project.

## Objectives

### Objective 1 — Implement the kernel attack and measure sensitivity

Implement the projected-gradient Kernel attack (PGD on $\kappa$ with $\ell_1$-ball projection onto the identity-centered constraint), reproduce the drop in accuracy on CIFAR-10/100 and ImageNet across kernel sizes $k \in \{3,5,7\}$, and characterize how sensitivity to the attack varies with the input. Largely reproductive and engineering-focused; produces the substrate the second objective builds on.

- **Estimated time:** 2–3 months
- **Suitable for:** Bachelor's thesis

### Objective 2 — Connect kernel attacks to real-world transformations

Show that the feasible kernel set contains natural camera artifacts — Gaussian/average/motion blur, spatial shifts, contrast and color drift — and study less-detectable variants (e.g. zero-mean single-channel kernels that preserve image brightness). Optionally extend the attack beyond classification to object detection or semantic segmentation. Self-contained and experimentally rich.

- **Estimated time:** 3–4 months
- **Suitable for:** Master's thesis (combined with Objective 1)

## At a glance

| # | Objective | Estimated time | Suitable for |
|---|-----------|----------------|--------------|
| 1 | Implement the kernel attack and measure sensitivity | 2–3 months | Bachelor's thesis |
| 2 | Connect kernel attacks to real-world transformations | 3–4 months | Master's thesis (with Obj. 1) |

## How to apply

If this project interests you, get in touch with **Fabio Brau** with a short note about your background and which objective appeals to you most. Mentioning relevant coursework or projects (deep learning, computer vision, optimization) is helpful.
