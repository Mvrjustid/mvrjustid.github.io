---
layout: page
title: Advanced Action Understanding and Interactive Sensing
description: The evolution of Virtual Physiotherapist towards daily life deployment (completed during my Postdoc)
img: /assets/img/IMWUT_2.png
importance: 1
category: research
---

In our previous research on `Protective behavior detection` (PBD), we established the long-term goal of building a **Virtual Physiotherapist** for daily use. However, early models primarily remained at the stages of `Human Activity Recognition` (HAR) and binary behavior classification (relying on pure deep learning models to extract features), and were unable to provide rich, comprehensible guidance like a real physiotherapist.

In the latest stage of the project, to truly deploy rehabilitation strategies in home environments, we first made breakthroughs at the "understanding and feedback" level of the system, and subsequently proposed an innovative hardware interaction scheme to address pain points at the "sensing" level.

### 1. From Single Behavior Classification to LLM-Driven Deep Understanding

To equip the Virtual Physiotherapist with "expert-level" guidance capabilities, we proposed the **UbiPhysio** framework. This work achieved a leap from single behavior recognition to integrating Multimodal Large Language Models (Multimodal LLMs) for action understanding and feedback, and won the Distinguished Paper Award at IMWUT/UbiComp 2025.

`UbiPhysio` is a milestone framework designed to provide fine-grained action descriptions through `Natural Language Feedback`, supporting users' daily functional recovery, fitness, and rehabilitation training. The framework mainly consists of two core modules:
* **Fine-grained action descriptor:** This module utilizes a set of biomechanical movement features we designed based on clinical priors to translate action data into detailed text descriptions about action types and underlying movement patterns.
* **Knowledge retrieval-enhanced feedback module:** Based on a professional knowledge base in the physiotherapy domain, this module can generate clear, engaging, and expert-level feedback comparable to a professional physiotherapist.

We comprehensively evaluated the system on a multi-scenario dataset involving 104 participants. The results indicate that `UbiPhysio` fully possesses the potential to provide high-level linguistic guidance in real-life settings.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid d-block mx-auto" src="{{'/assets/img/IMWUT_2.png' | relative_url }}" alt="UbiPhysio Framework" title="UbiPhysio"/>
    </div>
</div>
<div class="caption">
    <em>The UbiPhysio framework: translating biomechanical features into fine-grained action descriptions and expert-like natural language feedback.</em>
</div>

### 2. Introducing a Companion Robot to Breakthrough Daily Sensing Limitations

With the refinement of `UbiPhysio` at the algorithmic "brain" level, we further reflected on the bottleneck at the data acquisition end: relying on traditional fixed cameras or wearable devices (such as the 18-IMU motion capture suit we used earlier) in home environments is neither comfortable nor convenient.

To address the pain points of human sensing, we proposed the **PepperPose** system at CHI '24. In real home-like settings, the dynamic displacement of users and the diversity of actions pose significant challenges to traditional fixed-viewpoint assessments. Unlike conventional methods, `PepperPose` utilizes a Companion Robot to actively track the user and optimize its observation perspective in real-time (viewpoint refinement).

This `Location-agnostic` intelligent tracking approach not only significantly improves the accuracy of `Full-Body Pose Estimation` across various actions, but also provides users with a seamless, non-intrusive motion sensing experience, perfectly fitting the application scenario of home health management.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid  d-block mx-auto" src="{{'/assets/img/CHI_1.png' | relative_url }}" alt="PepperPose System" title="PepperPose"/>
    </div>
</div>
<div class="caption">
    <em>PepperPose: A novel companion robot system tailored for optimized full-body pose estimation in diverse daily actions.</em>
</div>

From the initial IMU-based behavior detection, to intelligent feedback integrating Large Language Models, and finally to the full-pipeline upgrade introducing robot active sensing, our work is step by step making accessible digital home rehabilitation a reality.

Please refer to the [publication](https://wangchongyang.ai/publications/){:target="\_blank"} page for the full papers and more details.

Written on Jan 23th, 2024, when our IMWUT and CHI papers were accepted.