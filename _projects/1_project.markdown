---
layout: page
title: Protective behavior detection
description: The role of AI in chronic-pain management （part 1）
img: /assets/img/avatars_2.png
importance: 1
category: research
---

The popular treatment for chronic pain (CP) is focused on physical rehabilitation organized by physiotherapists at clinic. The physio observes the movement behavior of people with CP during the rehabilitation session, and respond with oral encouragement, post-hoc feedback and interventions. Here, movement behaviors like guarding, stiffness, hesitation, the use of support, and jerky motion are referred to as **protective behavior**. Protective behavior is adopted by people with CP due to their fear of ongoing or potential pain and injury. Therefore, it is informative for physios and an **artificial system** to infer the physical and psychological states of those people. The figure shown below contains avatar examples transformed from movement data of normal people and people with CP. Could you spot the difference?

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid" src="{{'/assets/img/avatars_2.png' | relative_url }}" alt="" title="Avatar examples"/>
    </div>
</div>
<div class="caption">
    Avatar examples of movement data from healthy and CP participants performing the five activities-of-interest (AoIs).
</div>

Unfortunately, the service offered in the clinic is expensive and only available to the few. On the other hand, applying movement strategies learned from the clinic to daily self-directed management is difficult. This is particularly due to the reduced self-awareness of the use of protective behavior in a daily scenario, which could worsen the condition except for bringing temporary comfort to the person. 

As an important step towards building a virtual physiotherapist for people's everyday use, the aim of my PhD is to establish accurate protective behavior detection (PBD) using the EmoPain dataset we collected back in 2016. A full data sequence of a participant with CP is shown below.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid" src="{{'/assets/img/sequence_2.png' | relative_url }}" alt="" title="Avatar examples"/>
    </div>
</div>
<div class="caption">
    An example of the full data sequence from a CP participant, comprising AoIs and transitions.
</div>

As many other AI for Healthcare areas, the major challenge for our research is the lack of very large datasets. While this could be alleviated by investing money in large-scale dataset collections, as a researcher I need to further think about solving the unsolved research questions exist in the task using such data. In the past few years, efforts were made developing models to process the movement data, with a trend to gradually expose the model to the biomechanical structure of the skeleton-like movement data, as shown in the figure below. It should be mentioned that such data was collected with a full-body motion capture suit, comprising 18 IMUs. While this increases the mobility of the system in comparison to camera-based ones, we need to make it more comfortable and affordable, e.g. an outfit for daily use.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid" src="{{'/assets/img/models.png' | relative_url }}" alt="" title="our models"/>
    </div>
</div>
<div class="caption">
    The development of models tackling movement data.
</div>

In the latest work of us, we managed to establish accurate PBD using the continuous data shown above. In order to achieve this, two efforts were made: i) alleviating class imbalances during training with CFCC loss function adapted from object detection literature; ii) leveraging human activity recognition (HAR) as a way to contextualize PBD. An overview of our proposed architecture is shown below. For the first time, the recognition of activity types and detection of affective movement behaviors (e.g., protective behavior in our case) are combined. From a broader perspective, this work shall shed some light on future studies working on body movement sensing for affective and medical applications.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid" src="{{'/assets/img/IMWUT_1.png' | relative_url }}" alt="" title="the proposed architecture"/>
    </div>
</div>
<div class="caption">
    The proposed HAR-PBD architecture. By default, using the same data input, the HAR module is pre-trained with activity labels and frozen during training of the PBD module with behavior labels.
</div>

Please refer to the [publication](https://wangchongyang.ai/publications/){:target="\_blank"} page for details of the research and our achievements so far.

<!-- <div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/1.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/3.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/5.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, *bled* for your project, and then... you reveal it's glory in the next row of images.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/6.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/11.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/" target="_blank">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/6.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/11.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
``` -->
