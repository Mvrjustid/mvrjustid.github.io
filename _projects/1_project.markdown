---
layout: page
title: Protective behavior detection
description: Opening the role of AI in chronic-pain management (completed during my PhD)
img: /assets/img/avatars_2.png
importance: 1
category: research
---

Currently, the mainstream treatment for chronic pain (CP) relies on physical rehabilitation training organized by physiotherapists in clinics. During rehabilitation, physiotherapists observe the CP patients' movement behaviors and provide verbal encouragement, post-hoc feedback, and interventions. Here, movement behaviors such as **guarding**, **stiffness**, **hesitation**, **the use of support**, and **jerky motion** are collectively referred to as **protective behavior**. CP patients tend to adopt these protective behaviors due to fear of pain and injury. Therefore, inferring the physiological and psychological states of these patients is highly valuable information for physiotherapists as well as for building **artificial systems**.

The figure below displays examples of avatars converted from the movement data of healthy individuals and CP patients. Can you tell the difference?

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid d-block mx-auto" src="{{'/assets/img/avatars_2.png' | relative_url }}" alt="" title="Avatar examples"/>
    </div>
</div>
<div class="caption">
    <em>Avatar examples of movement data from healthy and CP participants performing the five activities-of-interest (AoIs).</em>
</div>

### 1. Toward a Virtual Physiotherapist for Daily Life

Unfortunately, services provided by clinics are often very expensive and affordable to only a few. On the other hand, translating movement strategies learned in clinics to daily self-management is very difficult. This is mainly because people have lower self-awareness of their own use of protective behavior in daily scenarios, which, besides bringing temporary comfort to the patients, might actually worsen the condition.

As a significant step toward building a Virtual Physiotherapist for daily use, my PhD research aimed to utilize the `EmoPain dataset` we collected in 2016 to build an accurate **protective behavior detection (PBD)** system. The figure below shows a complete data sequence from a CP patient.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid d-block mx-auto" src="{{'/assets/img/sequence_2.png' | relative_url }}" alt="" title="Data Sequence Example"/>
    </div>
</div>
<div class="caption">
    <em>An example of the full data sequence from a CP participant, comprising AoIs and transitions.</em>
</div>

### 2. From Wearable Motion Capture to Deep Learning Models

As in many `AI for Healthcare` fields, the main challenge facing our research is the lack of ultra-large-scale datasets. While this issue could be alleviated by investing large sums of money in data collection, as a researcher, I need to further consider how to utilize existing data to solve research challenges that have not yet been overcome in this task.

In recent years, we have made many efforts to develop models for processing movement data, with a trend toward gradually exposing the models to biomechanical structures similar to skeletal movement data, as shown in the figure below. It should be pointed out that these data were collected using a full-body motion capture suit containing 18 `IMUs`. While this increases system mobility compared to camera-based systems, we need to make it more comfortable and affordable, such as by integrating it into everyday clothing.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid d-block mx-auto" src="{{'/assets/img/models.png' | relative_url }}" alt="" title="our models"/>
    </div>
</div>
<div class="caption">
    <em>The development of models tackling movement data.</em>
</div>

### 3. Joint Human Activity Recognition and Protective Behavior Detection (HAR-PBD)

In our latest work, we successfully utilized the continuous data mentioned above to build an accurate PBD model. To achieve this goal, we made efforts in two aspects:
* Borrowing the `CFCC loss` function from the field of Object detection to alleviate class imbalances during the training process;
* Utilizing `Human activity recognition` (HAR) to provide contextual information for PBD.

An overview of our proposed architecture is shown in the figure below. This is the **first time** that the recognition of activity types has been combined with the detection of affective movement behaviors (such as protective behaviors in our case). From a broader perspective, this work will inspire future research dedicated to applying body movement sensing to affective and medical fields.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid d-block mx-auto" src="{{'/assets/img/IMWUT_1.png' | relative_url }}" alt="" title="the proposed architecture"/>
    </div>
</div>
<div class="caption">
    <em>The proposed HAR-PBD architecture. By default, using the same data input, the HAR module is pre-trained with activity labels and frozen during training of the PBD module with behavior labels.</em>
</div>

Please refer to the [publication](https://wangchongyang.ai/publications/){:target="\_blank"} page for details of the research and our achievements so far.

Written on April 9th, 2021, when my first IMWUT paper was accepted.