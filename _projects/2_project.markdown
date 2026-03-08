---
layout: page
title: Advanced Action Understanding and Interactive Sensing
description: The evolution of Virtual Physiotherapist towards daily life deployment (completed within my Postdoc)
img: /assets/img/IMWUT_2.png
importance: 1
category: research
---

在我们之前关于 `Protective behavior detection` (PBD) 的研究中，我们确立了构建一个面向日常使用的 **Virtual Physiotherapist**（虚拟理疗师）的长远目标。然而，早期的模型主要停留在 `Human Activity Recognition` (HAR) 和行为二分类的阶段（依靠纯粹的深度学习模型提取特征），无法像真实理疗师那样提供丰富、易懂的指导。

在项目的最新阶段，为了真正将康复策略落地到居家环境，我们首先在系统的“理解与反馈”层面取得了突破，随后又针对“感知”层面的痛点提出了创新的硬件交互方案。

### 1. 从单一行为分类到 LLM 驱动的深度理解

为了让虚拟理疗师具备“专家级”的指导能力，我们提出了 **UbiPhysio** 框架。这项工作实现了从单一行为识别到融合多模态大语言模型 (Multimodal LLMs) 进行动作理解和反馈的跨越，并荣获了 IMWUT/Ubicomp-25 的 Distinguished Paper Award。

`UbiPhysio` 是一个里程碑式的框架，旨在通过 `Natural Language Feedback` 提供细粒度的动作描述，支持用户的日常功能恢复、健身和康复训练。该框架主要由两个核心模块组成：
* **Fine-grained action descriptor:** 该模块利用我们基于临床先验知识 (Clinical priors) 设计的一套生物力学运动特征 (Biomechanical movement features)，将动作数据转化为关于动作类型和潜在运动模式的详细文本描述。
* **Knowledge retrieval-enhanced feedback module:** 基于理疗领域的专业知识库，该模块能够生成清晰、具吸引力且媲美专业理疗师的专家反馈。

我们在包含 104 名参与者的多场景数据集中对系统进行了全面评估。结果表明，`UbiPhysio` 完全具备在真实生活中提供高阶语言指导的潜力。

<br/>
<br/>
<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid" src="{{'/assets/img/IMWUT_2.png' | relative_url }}" alt="UbiPhysio Framework" title="UbiPhysio"/>
    </div>
</div>
<div class="caption">
    <em>The UbiPhysio framework: translating biomechanical features into fine-grained action descriptions and expert-like natural language feedback.</em>
</div>
<br/>

### 2. 引入 Companion Robot 突破日常感知局限

随着 `UbiPhysio` 在算法大脑层面的完善，我们进一步反思了数据获取端的瓶颈：依赖传统的固定摄像头或穿戴式设备（如我们早期使用的 18 个 IMUs 动捕套装）在居家环境中使用既不舒适也不方便。

为了解决人体感知的痛点，我们在 CHI-24 上提出了 **PepperPose** 系统。在真实的居家环境（Home-like setting）中，用户的动态位移和动作的多样性给传统的固定视角评估带来了极大挑战。与传统方法不同，`PepperPose` 利用一个 Companion Robot 主动追踪用户并实时优化其观测视角 (Viewpoint refinement)。

这种 `Location-agnostic`（不受位置限制）的智能追踪方式，不仅大幅提升了各种动作下的 `Full-Body Pose Estimation` 精度，还为用户提供了无缝的、非侵入式 (Non-intrusive) 的动作感知体验，完美契合了居家健康管理的应用场景。

<br/>
<br/>
<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid" src="{{'/assets/img/CHI_1.png' | relative_url }}" alt="PepperPose System" title="PepperPose"/>
    </div>
</div>
<div class="caption">
    <em>PepperPose: A novel companion robot system tailored for optimized full-body pose estimation in diverse daily actions.</em>
</div>
<br/>

从最初基于 IMU 数据的行为检测，到融合大语言模型的智能反馈，再到引入机器人主动感知的全链路升级，我们的工作正在一步步让普惠的居家数字康复成为现实。

Please refer to the [publication](https://wangchongyang.ai/publications/){:target="\_blank"} page for the full papers and more details.