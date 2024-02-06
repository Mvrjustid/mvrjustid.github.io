---
layout: page
permalink: /publications/
title: key publications
description:
years: []
nav: true
---

<div class="container mt-5">
      <div class="post">
  <header class="post-header">
    <p class="post-description"></p>
  </header>
  <article>
<div class="publications">
{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

<h2 class="year">2024</h2>
<ol class="bibliography">

<!-----------------------------------------------------     2024 Paper 1 start    ----------------------------------------------------->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a><img class="img-responsive z-depth-1 rounded" src="/assets/img/CHI_1.png" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="Wang2024PepperPose" class="col-sm-8">
  <div class="title">PepperPose: Full-Body Pose Estimation with a Companion Robot
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <em>Wang, Chongyang</em>,
  <a>Zheng, Siqi</a>,
  <a>Zhong, Lingxiao</a>,
  <a href="https://pi.cs.tsinghua.edu.cn/lab/people/ChunYu/" target="_blank">Yu, Chun</a>,
  <a>Liang, Chen</a>,
  <a href="https://pi.cs.tsinghua.edu.cn/lab/people/YuntaoWang/" target="_blank">Wang, Yuntao</a>,
  <a href="https://gaoyuankidult.github.io/about/" target="_blank">Gao, Yuan</a>,
  <a>Lam, Tin Lun</a>,
  and <a href="https://pi.cs.tsinghua.edu.cn/people/#faculty" target="_blank">Yuanchun Shi</a>
</div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI)</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">CHI-24</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/PepperPose_CHI.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>Accurate full-body pose estimation across diverse actions in a user-friendly and location-agnostic manner paves the way for interactive applications in realms like sports, fitness, and healthcare. This task becomes challenging in real-world scenarios due to factors like the user's dynamic positioning, the diversity of actions, and the varying acceptability of the pose-capturing system. In this context, we present PepperPose, a novel companion robot system tailored for optimized pose estimation. Unlike traditional methods, PepperPose actively tracks the user and refines its viewpoint, facilitating enhanced pose accuracy across different locations and actions. This allows users to enjoy a seamless action-sensing experience. Our evaluation, involving 30 participants undertaking daily functioning and exercise actions in a home-like space, underscores the robot's promising capabilities. Moreover, we demonstrate the opportunities that PepperPose presents for human-robot interaction, its current limitations, and future developments.</p>
  </div>

</div>
</div>
</li>
<!-----------------------------------------------------      2024 Paper 1 end     ----------------------------------------------------->

<!-----------------------------------------------------     2024 Paper 2 start    ----------------------------------------------------->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a><img class="img-responsive z-depth-1 rounded" src="/assets/img/IMWUT_2.png" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="Wang2024Ubiphysio" class="col-sm-8">
  <div class="title">UbiPhysio: Support Daily Functioning, Fitness, and Rehabilitation with Action Understanding and Feedback in Natural Language
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <em>Wang, Chongyang</em>,
  <a>Feng, Yuan</a>,
  <a>Zhong, Lingxiao</a>,
  <a>Zhu, Siyi</a>,
  <a>Zhang, Chi</a>,
  <a>Zheng, Siqi</a>,
  <a>Liang, Chen</a>,
  <a href="https://pi.cs.tsinghua.edu.cn/lab/people/YuntaoWang/" target="_blank">Wang, Yuntao</a>,
  <a>He, Chengqi</a>,
  <a href="https://pi.cs.tsinghua.edu.cn/lab/people/ChunYu/" target="_blank">Yu, Chun</a>,
  and <a href="https://pi.cs.tsinghua.edu.cn/people/#faculty" target="_blank">Yuanchun Shi</a>
</div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">IMWUT/Ubicomp-24</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/UbiPhysio_IMWUT.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>We introduce UbiPhysio, a milestone framework that delivers fine-grained action description and feedback in natural language to support people's daily functioning, fitness, and rehabilitation activities. This expert-like capability assists users in properly executing actions and maintaining engagement in remote fitness and rehabilitation programs. Specifically, the proposed UbiPhysio framework comprises a fine-grained action descriptor and a knowledge retrieval-enhanced feedback module. The action descriptor translates action data, represented by a set of biomechanical movement features we designed based on clinical priors, into textual descriptions of action types and potential movement patterns. Building on physiotherapeutic domain knowledge, the feedback module provides clear and engaging expert feedback. We evaluated UbiPhysio's performance through extensive experiments with data from 104 diverse participants, collected in a home-like setting during 25 types of everyday activities and exercises. We assessed the quality of the language output under different tuning strategies using standard benchmarks. We conducted a user study to gather insights from clinical physiotherapists and potential users about our framework. Our initial tests show promise for deploying UbiPhysio in real-life settings without specialized devices.</p>
  </div>

</div>
</div>
</li>
<!-----------------------------------------------------      2024 Paper 2 end     ----------------------------------------------------->

<h2 class="year">2023</h2>
<ol class="bibliography">

<!-----------------------------------------------------     2023 Paper 1 start    ----------------------------------------------------->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a><img class="img-responsive z-depth-1 rounded" src="/assets/img/Neuroimage_1.png" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="Zhang2023Decoding" class="col-sm-8">
  <div class="title">Decoding the Temporal Representation of Facial Expression in Face-selective Regions
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <a>Zhang, Zhihao</a>,
  <a>Chen, Tong</a>,
  <a>Liu, Ye</a>,
  <em>Wang, Chongyang</em>,
  <a>Zhao, Ke</a>,
  <a>Liu, Changhong</a>,
  and <a>Fu, Xiaolan</a>
</div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>Neuroimage</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">Neuroimage</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/Decoding_the_Temporal_Representation_of_Facial_Expression_in_Face-selective_Regions.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>The ability of humans to discern facial expressions in a timely manner typically relies on distributed face-selective regions for rapid neural computations. To study the time course in regions of interest for this process, we used magnetoencephalography (MEG) to measure neural responses participants viewed facial expressions depicting seven types of emotions (happiness, sadness, anger, disgust, fear, surprise, and neutral). Analysis of the time-resolved decoding of neural responses in face-selective sources within the inferior parietal cortex (IP-faces), lateral occipital cortex (LO-faces), fusiform gyrus (FG-faces), and posterior superior temporal sulcus (pSTS-faces) revealed that facial expressions were successfully classified starting from ∼100 to 150 ms after stimulus onset. Interestingly, the LO-faces and IP-faces showed greater accuracy than FG-faces and pSTS-faces. To examine the nature of the information processed in these face-selective regions, we entered with facial expression stimuli into a convolutional neural network (CNN) to perform similarity analyses against human neural responses. The results showed that neural responses in the LO-faces and IP-faces, starting ∼100 ms after the stimuli, were more strongly correlated with deep representations of emotional categories than with image level information from the input images. Additionally, we observed a relationship between the behavioral performance and the neural responses in the LO-faces and IP-faces, but not in the FG-faces and lpSTS-faces. Together, these results provided a comprehensive picture of the time course and nature of information involved in facial expression discrimination across multiple face-selective regions, which advances our understanding of how the human brain processes facial expressions.</p>
  </div>

</div>
</div>
</li>
<!-----------------------------------------------------      2023 Paper 1 end     ----------------------------------------------------->


<!-----------------------------------------------------     2023 Paper 2 start    ----------------------------------------------------->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a><img class="img-responsive z-depth-1 rounded" src="/assets/img/TRO_1.png" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="Gao2023SelfPlay" class="col-sm-8">
  <div class="title">Asymmetric Self-Play-Enabled Intelligent Heterogeneous Multirobot Catching System Using Deep Multiagent Reinforcement Learning
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <a href="https://gaoyuankidult.github.io/about/" target="_blank">Gao, Yuan</a>,
  <a>Chen, Junfeng</a>,
  <a>Chen, Xi</a>,
  <em>Wang, Chongyang</em>,
  <a>Hu, Junjie</a>,
  <a>Deng, Fuqin</a>,
  and <a>Tin Lun Lam</a>
</div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>IEEE Transactions on Robotics</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">IEEE T-RO</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/Asymmetric_Self-Play-Enabled_Intelligent_Heterogeneous_Multirobot_Catching_System_Using_Deep_Multiagent_Reinforcement_Learning.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>Aiming to develop a more robust and intelligent heterogeneous system for adversarial catching in security and rescue tasks, in this article, we discuss the specialities of applying asymmetric self-play and curriculum learning techniques to deal with the increasing heterogeneity and number of different robots in modern heterogeneous multirobot systems (HMRS). Our method, based on actor-critic multiagent reinforcement learning, provides a framework that can enable cooperative behaviors among heterogeneous multirobot teams. This leads to the development of an HMRS for complex catching scenarios that involve several robot teams and real-world constraints. We conduct simulated experiments to evaluate different mechanisms' influence on our method's performance, and real-world experiments to assess our system's performance in complex real-world catching problems. In addition, a bridging study is conducted to compare our method with a state-of-the-art method called S2M2 in heterogeneous catching problems, and our method performs better in adversarial settings. As a result, we show that the proposed framework, through fusing asymmetric self-play and curriculum learning during training, is able to successfully complete the HMRS catching task under realistic constraints in both simulation and the real world, thus providing a direction for future large-scale intelligent security & rescue HMRS.</p>
  </div>

</div>
</div>
</li>
<!-----------------------------------------------------      2023 Paper 2 end     ----------------------------------------------------->


<!-----------------------------------------------------     2023 Paper 3 start    ----------------------------------------------------->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a><img class="img-responsive z-depth-1 rounded" src="/assets/img/Learn2Agree.png" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="wang2021Agree" class="col-sm-8">
  <div class="title">Learn2Agree: Fitting with Multiple Annotators without Objective Ground Truth
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <em>Wang, Chongyang</em>,
  <a href="https://gaoyuankidult.github.io/about/" target="_blank">Gao, Yuan</a>,
  <a>Fan, Chenyou</a>,
  <a>Hu, Junjie</a>,
  <a>Tin Lun Lam</a>,       
  <a href="http://niclane.org/" target="_blank">Lane, Nicholas D</a>,      
  and <a href="https://uclic.ucl.ac.uk/people/nadia-berthouze" target="_blank">Bianchi-Berthouze, Nadia</a>
</div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>Trustworthy Machine Learning for Healthcare Workshop at International Conference on Learning Representations (ICLR-TML4H)</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">ICLR workshop-23</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/Learn2Agree_Fitting_with_Multiple_Annotators_without_Objective_Ground_Truth.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>The annotation of domain experts is important for some medical applications where the objective ground truth is ambiguous to define, e.g., the rehabilitation for some chronic diseases, and the prescreening of some musculoskeletal abnormalities without further medical examinations. However, improper uses of the annotations may hinder developing reliable models. On one hand, forcing the use of a single ground truth generated from multiple annotations is less informative for the modeling. On the other hand, feeding the model with all the annotations without proper regularization is noisy given existing disagreements. For such issues, we propose a novel Learning to Agreement (Learn2Agree) framework to tackle the challenge of learning from multiple annotators without objective ground truth. The framework has two streams, with one stream fitting with the multiple annotators and the other stream learning agreement information between annotators. In particular, the agreement learning stream produces regularization information to the classifier stream, tuning its decision to be better in line with the agreement between annotators. The proposed method can be easily added to existing backbones, with experiments on two medical datasets showed better agreement levels with annotators.</p>
  </div>

</div>
</div>
</li>
<!-----------------------------------------------------      2023 Paper 3 end     ----------------------------------------------------->


<!-----------------------------------------------------     2023 Paper 4 start    ----------------------------------------------------->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a><img class="img-responsive z-depth-1 rounded" src="/assets/img/AAAI_1.png" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="cen2022ACII" class="col-sm-8">
  <div class="title">Efficient End-to-End Video Question Answering with Pyramidal Multimodal Transformer
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <a href="https://scholar.google.com/citations?user=hRQVbeoAAAAJ&hl=en" target="_blank">Peng Min</a>,
  <em>Wang Chongyang</em>,       
  <a>Yu Shi</a>,
  and <a>Zhou Xiangdong</a>      
  </div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>37th AAAI Conference on Artificial Intelligence (AAAI)</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">AAAI-23</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/Efficient_End_to_End_Video_Question_Answering_with_Pyramidal_Multimodal_Transformer___AAAI23.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>
  <a href="https://github.com/Trunpm/PMT-AAAI23" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">Github</a>   
  </div>
  <div class="abstract hidden">
  <p>This paper presents a new method for end-to-end Video Question Answering (VideoQA), aside from the current popularity of using large-scale pre-training with huge feature extractors. We achieve this with a pyramidal multimodal transformer (PMT) model, which simply incorporates a learnable word embedding layer, a few convolutional and transformer layers. We use the anisotropic pyramid to fulfill video-language interactions across different spatio-temporal scales. In addition to the canonical pyramid, which includes both bottom-up and top-down pathways with lateral connections, novel strategies are proposed to decompose the visual feature stream into spatial and temporal sub-streams at different scales and implement their interactions with the linguistic semantics while preserving the integrity of local and global semantics. We demonstrate better or on-par performances with high computational efficiency against state-of-the-art methods on five VideoQA benchmarks. Our ablation study shows the scalability of our model that achieves competitive results for text-to-video retrieval by leveraging feature extractors with reusable pre-trained weights, and also the effectiveness of the pyramid.</p>
  </div>

</div>
</div>
</li>
<!-----------------------------------------------------      2023 Paper 4 end     ----------------------------------------------------->
</ol>

<h2 class="year">2022</h2>
<ol class="bibliography">
<!-----------------------------------------------------     2022 Paper 1 start    ----------------------------------------------------->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a><img class="img-responsive z-depth-1 rounded" src="/assets/img/ACII_3.png" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="cen2022ACII" class="col-sm-8">
  <div class="title">Exploring Multimodal Fusion for Continuous Protective Behavior Detection
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <em>Cen Guanting</em>,
  <em>Wang Chongyang</em>,
  <a href="https://uclic.ucl.ac.uk/people/temitayo-olugbade" target="_blank">Olugbade, Temitayo A</a>,
  <a href="https://www.ucl.ac.uk/pals/people/amanda-c-de-c-williams" target="_blank">Williams, Amanda C De C</a>,     
  and <a href="https://uclic.ucl.ac.uk/people/nadia-berthouze" target="_blank">Bianchi-Berthouze, Nadia</a> 
  </div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>10th International Conference on Affective Computing and Intelligent Interaction (ACII)</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">ACII-22</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/Exploring_Multimodal_Fusion_for_Protective_Behavior_Detection_in_Continuous_Data_ACII2022.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>
  <a href="https://github.com/Mvrjustid/Multimodal-Fusion-HAR-PBD" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">Github</a>   
  </div>
  <div class="abstract hidden">
  <p>Chronic pain is a prevalent condition that affects everyday life of people around the world. Protective behaviors (strategies that are naturally but unhelpfully adopted by people with chronic pain to cope with fear of pain in executing harmless everyday movements) can lead to further disability over time if not recognized and addressed appropriately. In this paper, we build on previous work on unimodal, activity-independent, time-continuous protective behavior detection (PBD) by focusing on the fusion of muscle activity and body movement modalities for characterizing both protective behavior and its physical activity context. We explore different fusion strategies based on consideration of the manner in which protective behavior influences muscle activity and overt body movement, as well as the relationship between the two modalities. We evaluate the various strategies on the multimodal EmoPain dataset containing data from people with and without chronic pain engaged in physical activities that reflect everyday challenges for those with chronic pain. Our results show that a central (model-level) fusion approach leads to better PBD performances than input- and decision-level fusions, or unimodal approaches. We also show that the use of an attention mechanism, typifying shifts in attention characteristic of protective behavior, further improves the sensitivity of the model, i.e. detection of the positive class (which is the minority class). We analyze these results and suggest that fusion in modelling a motor condition should consider how the emotional responses (fear of movement and pain in this case) triggered by a condition affects each of the given modalities and hence their contributions to the modelling task.</p>
  </div>

</div>
</div>
</li>
<!-----------------------------------------------------      2022 Paper 1 end     ----------------------------------------------------->

<!-----------------------------------------------------     2022 Paper 2 start    ----------------------------------------------------->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a><img class="img-responsive z-depth-1 rounded" src="/assets/img/IJCAI_1.png" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="peng2022MHN" class="col-sm-8">
  <div class="title">Multilevel Hierarchical Network with Multiscale Sampling for Video Question Answering
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <a href="https://scholar.google.com/citations?user=hRQVbeoAAAAJ&hl=en" target="_blank">Peng Min</a>,
  <em>Wang Chongyang</em>,  
  <a href="https://gaoyuankidult.github.io/about/" target="_blank">Gao Yuan</a>,
  <a>Yu Shi</a>,
  and <a>Zhou Xiangdong</a>       
  </div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>31st International Joint Conferences on Artificial Intelligence (IJCAI)</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">IJCAI-22</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/Multi_Level_Hierarchical_Network_with_Multi_Scale_Sampling_for_Video_Question_Answering___IJCAI22.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  <a href="https://github.com/Mvrjustid/MHN-IJCAI22" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">Github</a>  
  </div>
  <div class="abstract hidden">
  <p>Video question answering (VideoQA) is challenging given its multimodal combination of visual understanding and natural language processing. While most existing approaches ignore the visual appearance-motion information at different temporal scales, it is unknown how to incorporate the multilevel processing capacity of a deep learning model with such multiscale information. Targeting these issues, this paper proposes a novel Multilevel Hierarchical Network (MHN) with multiscale sampling for VideoQA. MHN comprises two modules, namely Recurrent Multimodal Interaction (RMI) and Parallel Visual Reasoning (PVR). With a multiscale sampling, RMI iterates the interaction of appearance-motion information at each scale and the question embeddings to build the multilevel question-guided visual representations. Thereon, with a shared transformer encoder, PVR infers the visual cues at each level in parallel to fit with answering different question types that may rely on the visual information at relevant levels. Through extensive experiments on three VideoQA datasets, we demonstrate improved performances than previous state-of-the-arts and justify the effectiveness of each part of our method.</p>
  </div>

</div>
</div>
</li>
<!-----------------------------------------------------      2022 Paper 2 end     ----------------------------------------------------->
</ol>

<h2 class="year">2021</h2>
<ol class="bibliography">

<!-----------------------------------------------------     2021 Paper 1 start    ----------------------------------------------------->

<li><div class="row">
  <!-- ----Picture with link---- -->
  <a><img class="img-responsive z-depth-1 rounded" src="/assets/img/IMWUT_1.png" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="wang2020leveraging" class="col-sm-8">
  <div class="title">Leveraging Activity Recognition to Enable Protective Behavior Detection in Continuous Data
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <em>Wang, Chongyang</em>,
  <a href="https://gaoyuankidult.github.io/about/" target="_blank">Gao, Yuan</a>,
  <a href="https://akhilmathurs.github.io/" target="_blank">Mathur, Akhil</a>,
  <a href="https://www.ucl.ac.uk/pals/people/amanda-c-de-c-williams" target="_blank">Williams, Amanda C De C</a>,     
  <a href="http://niclane.org/" target="_blank">Lane, Nicholas D</a>,      
  and <a href="https://uclic.ucl.ac.uk/people/nadia-berthouze" target="_blank">Bianchi-Berthouze, Nadia</a>
  </div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">IMWUT/Ubicomp-21</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/Leveraging_Activity_Recognition_to_Enable_Protective_Behavior_Detection_in_Continuous_Data_IMWUT.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  <a href="https://github.com/Mvrjustid/IMWUT-Hierarchical-HAR-PBD" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">Github</a> 
  </div>
  <div class="abstract hidden">
  <p>Protective behavior exhibited by people with chronic pain (CP) during physical activities is very informative to understanding their physical and emotional states. Existing automatic protective behavior detection (PBD) methods rely on pre-segmentation of activities predefined by users. However, in real life, people perform activities casually. Therefore, where those activities present difficulties for people with chronic pain, technology-enabled support should be delivered continuously and automati- cally adapted to activity type and occurrence of protective behavior. Hence, to facilitate ubiquitous CP management, it becomes critical to enable accurate PBD over continuous data. In this paper, we propose to integrate human activity recognition (HAR) with PBD via a novel hierarchical HAR-PBD architecture comprising graph-convolution and long short-term memory (GC-LSTM) networks, and alleviate class imbalances using a class-balanced focal categorical cross-entropy (CFCC) loss. Through in-depth evaluation of the approach using a CP patients’ dataset, we show that the leveraging of HAR, GC-LSTM networks, and CFCC loss leads to clear increase in PBD performance against the baseline (macro F1 score of 0.81 vs. 0.66 and precision-recall area-under-the-curve (PR-AUC) of 0.60 vs. 0.44). We conclude by discussing possible use cases of the hierarchical architecture in CP management and beyond. We also discuss current limitations and ways forward.</p>
  </div>

</div>
</div>
</li>
<!-----------------------------------------------------      2021 Paper 1 end     ----------------------------------------------------->

<!-----------------------------------------------------     2021 Paper 2 start    ----------------------------------------------------->

<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://dl.acm.org/doi/abs/10.1145/3449068"><img class="img-fluid z-depth-1 rounded" src="/assets/img/ACMHEALTH_3.png" alt="ACMHEALTH_1_ChongyangWang" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="wang2020leveraging" class="col-sm-8">
  <div class="title">Chronic-Pain Protective Behavior Detection with Deep Learning
  </div>

<!-- ----      Author     ---- -->

<div class="author">

  <em>Wang, Chongyang</em>, 

  <a href="https://uclic.ucl.ac.uk/people/temitayo-olugbade" target="_blank">Olugbade, Temitayo A</a>,

  <a href="https://akhilmathurs.github.io/" target="_blank">Mathur, Akhil</a>,

  <a href="https://www.ucl.ac.uk/pals/people/amanda-c-de-c-williams" target="_blank">Williams, Amanda C De C</a>,     

  <a href="http://niclane.org/" target="_blank">Lane, Nicholas D</a>,

  and <a href="https://uclic.ucl.ac.uk/people/nadia-berthouze" target="_blank">Bianchi-Berthouze, Nadia</a>
  </div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>ACM Transactions on Computing for Healthcare</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">ACM HEALTH</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/Chronic_Pain_Protective_Behavior_Detection_with_Deep_Learning___ACM_HEALTH.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>In chronic pain rehabilitation, physiotherapists adapt physical activity to patients' performance based on their expression of protective behavior, gradually exposing them to feared but harmless and essential everyday activities. As rehabilitation moves outside the clinic, technology should automatically detect such behavior to provide similar support. Previous works have shown the feasibility of automatic protective behavior detection (PBD) within a specific activity. In this paper, we investigate the use of deep learning for PBD across activity types, using wearable motion capture and surface electromyography data collected from healthy participants and people with chronic pain. We approach the problem by continuously detecting protective behavior within an activity rather than estimating its overall presence. The best performance reaches mean F1 score of 0.82 with leave-one-subject-out cross validation. When protective behavior is modelled per activity type, performance is mean F1 score of 0.77 for bend-down, 0.81 for one-leg-stand, 0.72 for sit-to-stand, 0.83 for stand-to-sit, and 0.67 for reach-forward. This performance reaches excellent level of agreement with the average experts' rating performance suggesting potential for personalized chronic pain management at home. We analyze various parameters characterizing our approach to understand how the results could generalize to other PBD datasets and different levels of ground truth granularity.
  </p>
  </div>
  </div>
</div>
</li>
<!-----------------------------------------------------      2021 Paper 2 end     ----------------------------------------------------->
</ol>

<!----------------------------------------------------------------------------->

<!---------------------------------2021---------------------------------------->

<!----------------------------------------------------------------------------->

<h2 class="year">2020</h2>
<ol class="bibliography">
<!-----------------------------------------------------     2020 Paper 1 start    ----------------------------------------------------->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a><img class="img-fluid z-depth-1 rounded" src="/assets/img/IEEEMM_1.png" alt="IEEEMM_1_ChongyangWang" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="wang2020leveraging" class="col-sm-8">
  <div class="title">Recognizing Micro-Expression in Video Clip with Adaptive Key-Frame Mining
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <a href="https://scholar.google.com/citations?user=hRQVbeoAAAAJ&hl=en" target="_blank">Peng Min</a>,

  <em>Wang Chongyang</em>,  

  <a href="https://gaoyuankidult.github.io/about/" target="_blank">Gao Yuan</a>,

  <a href="https://uclic.ucl.ac.uk/people/tao-bi" target="_blank">Tao Bi</a>,

  <a>Chen Tong</a>,

  <a>Yu Shi</a>,

  and <a>Zhou Xiangdong</a>
  </div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>ArXiv Preprint</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">Arxiv</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/2009.09179.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  <a href="https://github.com/Mvrjustid/AKMNet-Micro-Expression" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">Github</a> 
  </div>
  <div class="abstract hidden">
  <p>As a spontaneous expression of emotion on face, micro-expression reveals the underlying emotion that cannot be controlled by human. In micro-expression, facial movement is transient and sparsely localized through time. However, the existing representation based on various deep learning techniques learned from a full video clip is usually redundant. In addition, methods utilizing the single apex frame of each video clip require expert annotations and sacrifice the temporal dynamics. To simultaneously localize and recognize such fleeting facial movements, we propose a novel end-to-end deep learning architecture, referred to as adaptive key-frame mining network (AKMNet). Operating on the video clip of micro-expression, AKMNet is able to learn discriminative spatio-temporal representation by combining spatial features of self-learned local key frames and their global-temporal dynamics. Theoretical analysis and empirical evaluation show that the proposed approach improved recognition accuracy in comparison with state-of-the-art methods on multiple benchmark datasets.
  </p>
  </div>
  </div>
</div>
</li>
<!-----------------------------------------------------      2020 Paper 1 end     ----------------------------------------------------->

<!-----------------------------------------------------     2020 Paper 2 start    ----------------------------------------------------->

<li><div class="row">
  <!-- ----Picture with link---- -->
  <a><img class="img-fluid z-depth-1 rounded" src="/assets/img/Neurocom_1.png" alt="Neurocom_1_ChongyangWang" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="wang2020leveraging" class="col-sm-8">
  <div class="title">Micro-Attention for Micro-Expression Recognition
  </div>

<!-- ----      Author     ---- -->

<div class="author">

  <em>Wang Chongyang</em>,  

  <a href="https://scholar.google.com/citations?user=hRQVbeoAAAAJ&hl=en" target="_blank">Peng Min</a>,

  <a href="https://uclic.ucl.ac.uk/people/tao-bi" target="_blank">Tao Bi</a>,

  and <a>Chen Tong</a>       
  </div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>Neurocomputing</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">Neurocomputing</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/1-s2.0-S0925231220309711-main.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  <a href="https://github.com/Mvrjustid/Micro-Attention-for-Micro-Expression" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">Github</a> 
  </div>
  <div class="abstract hidden">
  <p>Micro-expression, for its high objectivity in emotion detection, has emerged to be a promising modality in affective computing. Recently, deep learning methods have been successfully introduced into the micro-expression recognition area. Whilst the higher recognition accuracy achieved, substantial challenges in micro-expression recognition remain. The existence of micro expression in small-local areas on face and limited size of available databases still constrain the recognition accuracy on such emotional facial behavior. In this work, to tackle such challenges, we propose a novel attention mechanism called micro-attention cooperating with residual network. Micro-attention enables the network to learn to focus on facial areas of interest covering different action units. Moreover, coping with small datasets, the micro-attention is designed without adding noticeable parameters while a simple yet efficient transfer learning approach is together utilized to alleviate the overfitting risk. With extensive experimental evaluations on three benchmarks (CASMEII, SAMM and SMIC) and post-hoc feature visualizations, we demonstrate the effectiveness of the proposed micro-attention and push the boundary of automatic recognition of micro-expression.
  </p>
  </div>
  </div>
</div>
</li>
<!-----------------------------------------------------      2020 Paper 2 end     ----------------------------------------------------->
</ol>

<!----------------------------------------------------------------------------->

<!---------------------------------2020---------------------------------------->

<!----------------------------------------------------------------------------->

<h2 class="year">2019</h2>
<ol class="bibliography">
<!-----------------------------------------------------     2019 Paper 1 start    ----------------------------------------------------->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://dl.acm.org/doi/abs/10.1145/3341163.3347728"><img class="img-fluid z-depth-1 rounded" src="/assets/img/ISWC_1.png" alt="ISWC_1_ChongyangWang" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="wang2020leveraging" class="col-sm-8">
  <div class="title">Recurrent Network based Automatic Detection of Chronic Pain Protective Behavior using Mocap and sEMG Data
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <em>Wang Chongyang</em>,

  <a href="https://uclic.ucl.ac.uk/people/temitayo-olugbade" target="_blank">Olugbade Temitayo A</a>,

  <a href="https://akhilmathurs.github.io/" target="_blank">Mathur Akhil</a>,

  <a href="https://www.ucl.ac.uk/pals/people/amanda-c-de-c-williams" target="_blank">Williams, Amanda C De C</a>,     

  <a href="http://niclane.org/" target="_blank">Lane, Nicholas D</a>,

  and <a href="https://uclic.ucl.ac.uk/people/nadia-berthouze" target="_blank">Bianchi-Berthouze, Nadia</a>
  </div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>International Symposium on Wearable Computers (ISWC)</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">ISWC/Ubicomp-19</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/3341163.3347728.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>In chronic pain physical rehabilitation, physiotherapists adapt exercise sessions according to the movement behavior of patients. As rehabilitation moves beyond clinical sessions, technology is needed to similarly assess movement behaviors and provide such personalized support. In this paper, as a first step, we investigate automatic detection of protective behavior (movement behavior due to pain-related fear or pain) based on wearable motion capture and electromyography sensor data. We investigate two recurrent networks (RNN) referred to as stacked-LSTM and dual-stream LSTM, which we compare with related deep learning (DL) architectures. We further explore data augmentation techniques and additionally analyze the impact of segmentation window lengths on detection performance. The leading performance of 0.815 mean F1 score achieved by stacked-LSTM provides important grounding for the development of wearable technology to support chronic pain physical rehabilitation during daily activities.
  </p>
  </div>
  </div>
</div>
</li>
<!-----------------------------------------------------      2019 Paper 1 end     ----------------------------------------------------->

<!-----------------------------------------------------     2019 Paper 2 start    ----------------------------------------------------->

<li><div class="row">
  <!-- ----Picture with link---- -->
  <a><img class="img-fluid z-depth-1 rounded" src="/assets/img/ACII_1.png" alt="ACII_1_ChongyangWang" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="wang2020leveraging" class="col-sm-8">
  <div class="title">Learning Temporal and Bodily Attention in Protective Movement Behavior Detection
  </div>

<!-- ----      Author     ---- -->

<div class="author">

  <em>Wang Chongyang</em>,  

  <a href="https://scholar.google.com/citations?user=hRQVbeoAAAAJ&hl=en" target="_blank">Peng Min</a>,

  <a href="https://uclic.ucl.ac.uk/people/temitayo-olugbade" target="_blank">Olugbade Temitayo A</a>,

  <a href="https://www.ucl.ac.uk/pals/people/amanda-c-de-c-williams" target="_blank">Williams, Amanda C De C</a>,     

  <a href="http://niclane.org/" target="_blank">Lane, Nicholas D</a>,

  and <a href="https://uclic.ucl.ac.uk/people/nadia-berthouze" target="_blank">Bianchi-Berthouze, Nadia</a>
  </div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>8th International Conference on Affective Computing and Intelligent Interaction Workshops and Demos (ACIIW)</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">ACII-19</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/08925084.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>
  <a href="https://github.com/Mvrjustid/BodyAttentionNetwork" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">Github</a> 
  </div>
  <div class="abstract hidden">
  <p>For people with chronic pain, the assessment of protective behavior during physical functioning is essential to understand their subjective pain-related experiences (e.g., fear and anxiety toward pain and injury) and how they deal with such experiences (avoidance or reliance on specific body joints), with the ultimate goal of guiding intervention. Advances in deep learning (DL) can enable the development of such intervention. Using the EmoPain MoCap dataset, we investigate how attention-based DL architectures can be used to improve the detection of protective behavior by capturing the most informative temporal and body configurational cues characterizing specific movements and the strategies used to perform them. We propose an end-to-end deep learning architecture named BodyAttentionNet (BANet). BANet is designed to learn temporal and bodily parts that are more informative to the detection of protective behavior. The approach addresses the variety of ways people execute a movement (including healthy people) independently of the type of movement analyzed. Through extensive comparison experiments with other state-of-the-art machine learning techniques used with motion capture data, we show statistically significant improvements achieved by using these attention mechanisms. In addition, the BANet architecture requires a much lower number of parameters than the state of the art for comparable if not higher performances.
  </p>
  </div>
  </div>
</div>
</li>
<!-----------------------------------------------------      2019 Paper 2 end     ----------------------------------------------------->

<!-----------------------------------------------------     2019 Paper 3 start    ----------------------------------------------------->

<li><div class="row">
  <!-- ----Picture with link---- -->
  <a><img class="img-fluid z-depth-1 rounded" src="/assets/img/ACII_2.png" alt="ACII_2_ChongyangWang" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="wang2020leveraging" class="col-sm-8">
  <div class="title">A Novel Apex-Time Network for Cross-Dataset Micro-Expression Recognition
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <a href="https://scholar.google.com/citations?user=hRQVbeoAAAAJ&hl=en" target="_blank">Peng Min</a>,

  <em>Wang Chongyang</em>,  

  <a href="https://uclic.ucl.ac.uk/people/tao-bi" target="_blank">Tao Bi</a>,

  <a>Zhou Xiangdong</a>,

  <a>Yu Shi</a>,

  and <a>Chen Tong</a>
  </div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>8th International Conference on Affective Computing and Intelligent Interaction (ACII)</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">ACII-19</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/08925525.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>
  <a href="https://github.com/Mvrjustid/ACII19-Apex-Time-Network" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">Github</a>   
  </div>
  <div class="abstract hidden">
  <p>The automatic recognition of micro-expression has been boosted ever since the successful introduction of deep learning approaches. As researchers working on such topics are moving to learn from the nature of micro-expression, the practice of using deep learning techniques has evolved from processing the entire video clip of micro-expression to the recognition on apex frame. Using the apex frame is able to get rid of redundant video frames, but the relevant temporal evidence of micro-expression would be thereby left out. This paper proposes a novel Apex-Time Network (ATNet)to recognize micro-expression based on spatial information from the apex frame as well as on temporal information from the respective-adjacent frames. Through extensive experiments on three benchmarks, we demonstrate the improvement achieved by learning such temporal information. Specially, the model with such temporal information is more robust in cross-dataset validations.
  </p>
  </div>
  </div>
</div>
</li>
<!-----------------------------------------------------      2019 Paper 3 end     ----------------------------------------------------->
</ol>

<!----------------------------------------------------------------------------->

<!---------------------------------2019---------------------------------------->

<!----------------------------------------------------------------------------->

<h2 class="year">2018</h2>
<ol class="bibliography">
<!-----------------------------------------------------     2018 Paper 1 start    ----------------------------------------------------->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://ieeexplore.ieee.org/abstract/document/8373920"><img class="img-fluid z-depth-1 rounded" src="/assets/img/FG_1.png" alt="FG_1_ChongyangWang" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="wang2020leveraging" class="col-sm-8">
  <div class="title">Attention based Residual Network for Micro-Gesture Recognition
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <a href="https://scholar.google.com/citations?user=hRQVbeoAAAAJ&hl=en" target="_blank">Peng Min</a>,

  <em>Wang Chongyang</em>,  

  and <a>Chen Tong</a>
  </div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>13th IEEE International Conference on Automatic Face & Gesture Recognition (FG)</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">FG-18</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/08373920.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>Finger micro-gesture recognition is increasingly become an important part of human-computer interaction (HCI) in applications of augmented reality (AR) and virtual reality (VR) technologies. To push the boundary of microgesture recognition, a novel Holoscopic 3D Micro-Gesture Database (HoMG) was established for research purpose. HoMG has an image subset and a video subset. This paper is to demonstrate the result achieved on the image subset for Holoscopic Micro-Gesture Recognition Challenge 2018 (HoMGR 2018). The proposed method utilized the state-of-the-art residual network with an attention-involved design. In every block of the network, an attention branch is added to the output of the last convolution layer. The attention branch is designed to spotlight the finger micro-gesture and reduce the noise introduced from the wrist and background. With an extensive analysis on HoMG, the proposed model achieved a recognition accuracy of 80.5% on the validation set and 82.1% on the testing set.
  </p>
  </div>
  </div>
</div>
</li>
<!-----------------------------------------------------      2018 Paper 1 end     ----------------------------------------------------->
</ol>

<!----------------------------------------------------------------------------->

<!---------------------------------2018---------------------------------------->

<!----------------------------------------------------------------------------->

<h2 class="year">2017</h2>
<ol class="bibliography">
<!-----------------------------------------------------     2017 Paper 1 start    ----------------------------------------------------->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://www.frontiersin.org/articles/10.3389/fpsyg.2017.01745/full"><img class="img-fluid z-depth-1 rounded" src="/assets/img/Frontiers_1.png" alt="Frontiers_1_ChongyangWang" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="wang2020leveraging" class="col-sm-8">
  <div class="title">Dual Temporal Scale Convolutional Neural Network for Micro-Expression Recognition
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <a href="https://scholar.google.com/citations?user=hRQVbeoAAAAJ&hl=en" target="_blank">Peng Min</a>,

  <em>Wang Chongyang</em>,  

  <a>Chen Tong</a>,

  <a>Liu Guangyuan</a>,

  and <a>Fu Xiaolan</a>
  </div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>Frontiers in psychology</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">Frontiers</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/fpsyg-08-01745.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>Facial micro-expression is a brief involuntary facial movement and can reveal the genuine emotion that people try to conceal. Traditional methods of spontaneous micro-expression recognition rely excessively on sophisticated hand-crafted feature design and the recognition rate is not high enough for its practical application. In this paper, we proposed a Dual Temporal Scale Convolutional Neural Network (DTSCNN) for spontaneous micro-expressions recognition. The DTSCNN is a two-stream network. Different of stream of DTSCNN is used to adapt to different frame rate of micro-expression video clips. Each stream of DSTCNN consists of independent shallow network for avoiding the overfitting problem. Meanwhile, we fed the networks with optical-flow sequences to ensure that the shallow networks can further acquire higher-level features. Experimental results on spontaneous micro-expression databases (CASME I/II) showed that our method can achieve a recognition rate almost 10% higher than what some state-of-the-art method can achieve.
  </p>
  </div>
  </div>
</div>
</li>
<!-----------------------------------------------------      2017 Paper 1 end     ----------------------------------------------------->

<!-----------------------------------------------------     2017 Paper 2 start    ----------------------------------------------------->

<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://www.mdpi.com/2078-2489/7/4/61"><img class="img-fluid z-depth-1 rounded" src="/assets/img/Information_1.png" alt="Information_1_ChongyangWang" style="width:180pt">
  </a>

<!-- ----      Title      ---- -->

<div id="wang2020leveraging" class="col-sm-8">
  <div class="title">NIRFacenet: A Convolutional Neural Network for Near-Infrared Face Identification
  </div>

<!-- ----      Author     ---- -->

<div class="author">
  <a href="https://scholar.google.com/citations?user=hRQVbeoAAAAJ&hl=en" target="_blank">Peng Min</a>,

  <em>Wang Chongyang</em>,  

  <a>Chen Tong</a>,

  and <a>Liu Guangyuan</a>       
  </div>

<!-- ----      Journal      ---- -->

<div class="periodical"> 
  <em>Information</em>    
  </div>

<!-- ---- Badge/Abstract/PDF ---- -->

<div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">MDPI</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/information-07-00061.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>Near-infrared (NIR) face recognition has attracted increasing attention because of its advantage of illumination invariance. However, traditional face recognition methods based on NIR are designed for and tested in cooperative-user applications. In this paper, we present a convolutional neural network (CNN) for NIR face recognition (specifically face identification) in non-cooperative-user applications. The proposed NIRFaceNet is modified from GoogLeNet, but has a more compact structure designed specifically for the Chinese Academy of Sciences Institute of Automation (CASIA) NIR database and can achieve higher identification rates with less training time and less processing time. The experimental results demonstrate that NIRFaceNet has an overall advantage compared to other methods in the NIR face recognition domain when image blur and noise are present. The performance suggests that the proposed NIRFaceNet method may be more suitable for non-cooperative-user applications.
  </p>
  </div>
  </div>
</div>
</li>
<!-----------------------------------------------------      2017 Paper 2 end     ----------------------------------------------------->
</ol>

<!----------------------------------------------------------------------------->

<!---------------------------------2017---------------------------------------->

<!----------------------------------------------------------------------------->

</div>
</article>
</div>
