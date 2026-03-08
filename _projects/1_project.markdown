---
layout: page
title: Protective behavior detection
description: Opening the role of AI in chronic-pain management （completed within my PhD）
img: /assets/img/avatars_2.png
importance: 1
category: research
---

目前针对慢性疼痛 (`chronic pain`, CP) 的主流治疗方法是依靠诊所理疗师组织的物理康复训练。在康复过程中，理疗师会观察 CP 患者的运动行为，并给予口头鼓励、事后反馈和干预。在这里，诸如防卫 (guarding)、僵硬 (stiffness)、犹豫 (hesitation)、使用支撑 (the use of support) 以及剧烈动作 (jerky motion) 等运动行为统称为 **protective behavior**（保护性行为）。由于 CP 患者对持续或潜在的疼痛和受伤感到恐惧，他们往往会采取这种保护性行为。因此，推断这些患者的生理和心理状态，对于理疗师以及构建 **artificial system**（人工智能系统）来说具有极高的信息价值。

下图展示了由正常人和 CP 患者的运动数据转换而成的 avatar 示例。你能看出其中的区别吗？

<br/>
<br/>
<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid" src="{{'/assets/img/avatars_2.png' | relative_url }}" alt="" title="Avatar examples"/>
    </div>
</div>
<div class="caption">
    <em>Avatar examples of movement data from healthy and CP participants performing the five activities-of-interest (AoIs).</em>
</div>
<br/>

### 1. 走向日常的 Virtual Physiotherapist

遗憾的是，诊所提供的服务通常十分昂贵，且只有少数人能够负担。另一方面，将诊所学到的运动策略应用到日常的自我管理中也非常困难。这主要是因为在日常场景中，人们对自身使用 protective behavior 的自我意识会降低，这除了给患者带来暂时的舒适外，反而可能使病情恶化。 

作为构建供人们日常使用的虚拟理疗师 (Virtual Physiotherapist) 的重要一步，我博士阶段的研究目标是利用我们在 2016 年收集的 `EmoPain dataset`，建立准确的 **protective behavior detection (PBD)** 系统。下图展示了一名 CP 患者的完整数据序列。

<br/>
<br/>
<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid" src="{{'/assets/img/sequence_2.png' | relative_url }}" alt="" title="Avatar examples"/>
    </div>
</div>
<div class="caption">
    <em>An example of the full data sequence from a CP participant, comprising AoIs and transitions.</em>
</div>
<br/>

### 2. 从穿戴式动捕到深度学习模型

与众多 `AI for Healthcare` 领域一样，我们研究面临的主要挑战是缺乏超大规模的数据集。虽然可以通过投入大量资金收集数据来缓解这一问题，但作为一名研究人员，我需要进一步思考如何利用现有数据解决该任务中尚未被攻克的研究难题。

在过去的几年中，我们在开发处理运动数据的模型方面做出了许多努力，其趋势是逐渐让模型接触到类似骨骼运动数据的生物力学结构 (biomechanical structure)，如下图所示。需要指出的是，这些数据是通过一套包含 18 个 `IMUs` 的全身动作捕捉套装收集的。虽然与基于摄像头的系统相比，这增加了系统的移动性，但我们需要使其变得更加舒适和经济实惠，例如将其转变为日常穿着的服装。

<br/>
<br/>
<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid" src="{{'/assets/img/models.png' | relative_url }}" alt="" title="our models"/>
    </div>
</div>
<div class="caption">
    <em>The development of models tackling movement data.</em>
</div>
<br/>

### 3. 联合活动识别与行为检测 (HAR-PBD)

在我们的最新工作中，我们成功利用上述连续数据建立了准确的 PBD 模型。为了实现这一目标，我们做出了两方面的努力：
* 借鉴目标检测 (Object detection) 领域的 `CFCC loss` 函数，缓解了训练过程中的类别不平衡 (Class imbalances) 问题；
* 利用 `Human activity recognition` (HAR) 为 PBD 提供上下文信息。

我们提出的架构概览如下图所示。这是**首次**将活动类型识别 (recognition of activity types) 与情感运动行为检测 (detection of affective movement behaviors，例如我们案例中的保护性行为) 结合起来。从更广阔的视角来看，这项工作将为未来致力于将身体运动传感应用于情感和医疗领域的研究提供启发。

<br/>
<br/>
<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid" src="{{'/assets/img/IMWUT_1.png' | relative_url }}" alt="" title="the proposed architecture"/>
    </div>
</div>
<div class="caption">
    <em>The proposed HAR-PBD architecture. By default, using the same data input, the HAR module is pre-trained with activity labels and frozen during training of the PBD module with behavior labels.</em>
</div>
<br/>

Please refer to the [publication](https://wangchongyang.ai/publications/){:target="\_blank"} page for details of the research and our achievements so far.

Written on April 9th, 2021, when my first IMWUT paper was accepted.