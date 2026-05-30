---
layout: page
title: "Equivariant Image Representation via Gaussian Splats"
description: Exploration of Gaussian Splatting as an alternative to pixel-wise image representation.
img: /assets/img/theses/gaussian_splatting.png
level: Master Thesis
importance: 1
keywords:
  - Gaussian Splatting
  - Image Processing
  - Signal Processing
  - Neural Implicit Representations
---

{% if page.keywords %}
<div class="mb-3">
  {% for kw in page.keywords %}
    <span class="badge bg-primary me-1">{{ kw }}</span>
  {% endfor %}
</div>
{% endif %}


**Supervisor:** Fabio Brau
**Suitable for:** Bachelor's, Master's, or PhD students (the project scales — see *Objectives*)
**Areas:** computer vision, image representation, geometric deep learning

## Overview

Pixel-wise image representation is the undisputed standard: fast, intuitive, and GPU-friendly. This project explores **Gaussian Splatting (GS)** as a structured, equivariant alternative to pixels. Because GS has clean geometric structure, it admits a natural metric and supports architectures that respect its symmetries (shifting, rotation, and zoom). A student joining this project would work at the intersection of image representation and geometric deep learning, building the GS representation and equivariant models that operate directly on it.

<div style="text-align: center; margin-bottom: 1.5rem;">
  {% include figure.liquid path="assets/img/theses/gaussian_splatting.png" class="img-fluid rounded" max-width="80%" avoid_scaling=true cache_bust=true caption="This image has been deduced by fitting 1500 gaussians to a 512×512 image. Compression rate is (1500·8)/(512·512·3) ≈ 0.015." %}
</div>

## What you would work on

Depending on your level and interest, you would take on one (or a sequence) of the objectives below. They are ordered from most accessible to most challenging, and each one builds on the previous: *representation → its symmetries → a metric on those symmetries → architectures honoring the metric.* This means the project can be entered at the right level for a Bachelor's, Master's, or PhD student, and a strong student can carry it further.

## Background

The representation rests on two core definitions.

**Definition 1 (Gaussian Splat).** Let $\Sigma \in \mathbb{R}^{2\times 2}$ be a positive definite matrix and let $\mu \in \mathbb{R}^2$ be a vector. The Gaussian splat is

$$g_{\mu,\Sigma}(x) = \frac{1}{2\pi \det \Sigma} \exp\left(-\frac{1}{2}(x-\mu)^T \Sigma^{-1}(x-\mu)\right)$$

**Definition 2 (Gaussian Splatting).** Given a vector space of colors $\mathcal{C}$ (for simplicity $\mathcal{C} = \mathbb{R}^3$), a Gaussian Splatting of finite length $N$ is a sequence of tuples $\{(g_j, c_j, \alpha_j)\}_{j=1,\dots,N}$, where each $g_j$ has the form above, $c_j \in \mathcal{C}$, and $\alpha_j > 0$. The represented image is

$$\mathcal{G}(x) = \frac{\sum_{j=1}^N \alpha_j\, c_j\, g_j(x)}{\sum_{i=1}^N \alpha_i\, g_i(x)}$$

**Representation of $\Sigma$.** Since $\Sigma$ is symmetric positive definite, it factors into an anisotropic scaling and a rotation:

$$S = \begin{bmatrix} a & 0 \\ 0 & b \end{bmatrix}, \quad R = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}, \quad \Sigma = (RS)(RS)^T = R S S R^T$$

This yields $\det(\Sigma) = a^2 b^2$ (Binet's formula) and

$$\Sigma^{-1} = R \begin{bmatrix} \frac{1}{a^2} & 0 \\ 0 & \frac{1}{b^2} \end{bmatrix} R^T$$

This $(\mu, a, b, \theta)$ parameterization is what Objective 1 formalizes, and the rotation/scaling structure is precisely what makes the equivariance properties of Objective 2 tractable.

## Objectives

### Objective 1 — Build and validate the 2D Gaussian Splatting representation

Formalize the GS image model and the parameterization of $\Sigma$ via rotation and anisotropic scaling, then verify that real images can be reconstructed at acceptable fidelity. Largely definitional and reconstructive, building on existing work such as GaussianImage. Low risk; produces the substrate everything else depends on.

- **Estimated time:** 2–3 months
- **Suitable for:** Bachelor's thesis

### Objective 2 — Characterize the equivariance properties of the representation

Prove formally that GS is equivariant under shifting, rotation, and zoom. Requires careful theory but is self-contained, establishing the symmetry structure that later work builds on.

- **Estimated time:** 3–4 months
- **Suitable for:** Master's thesis (combined with Objective 1)

### Objective 3 — Equip the splat parameter space with a hyperbolic metric

Motivate and define a hyperbolic metric structure on the splat parameters, and show it is well-defined and compatible with the equivariance group from Objective 2. The first genuinely novel theoretical contribution and the conceptual core of the work.

- **Estimated time:** 5–7 months
- **Suitable for:** PhD chapter / workshop paper

### Objective 4 — Design neural architectures equivariant to the GS transformations

Construct networks that operate directly on splats and respect the symmetry group. A theory-plus-engineering objective depending on Objectives 2 and 3.

- **Estimated time:** 6–9 months
- **Suitable for:** PhD chapter / conference paper

## At a glance

| # | Objective | Estimated time | Suitable for |
|---|-----------|----------------|--------------|
| 1 | Build and validate the 2D GS representation | 2–3 months | Bachelor's thesis |
| 2 | Characterize equivariance properties | 3–4 months | Master's thesis (with Obj. 1) |
| 3 | Equip parameter space with hyperbolic metric | 5–7 months | PhD chapter / workshop paper |
| 4 | Design equivariant neural architectures | 6–9 months | PhD chapter / conference paper |

## How to apply

If this project interests you, get in touch with **Fabio Brau** with a short note about your background and which objective appeals to you most. Mentioning relevant coursework or projects (computer vision, deep learning, geometry) is helpful.