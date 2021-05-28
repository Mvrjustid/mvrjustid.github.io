---
layout: page
permalink: /publications/
title: publications
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



<h2 class="year">2021</h2>
<ol class="bibliography">

<!--     2021 Paper 1 start    -->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://github.com/Mvrjustid/IMWUT-Hierarchical-HAR-PBD"><img src="/assets/img/IMWUT_1.png" alt="IMWUT_1_ChongyangWang" width="280" height="150">
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
  <em>Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)</em> 2021    
  </div>

  <!-- ---- Badge/Abstract/PDF ---- -->
  <div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">IMWUT</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/Leveraging_Activity_Recognition_to_Enable_Protective_Behavior_Detection_in_Continuous_Data_IMWUT.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>Protective behavior exhibited by people with chronic pain (CP) during physical activities is very informative to understanding their physical and emotional states. Existing automatic protective behavior detection (PBD) methods rely on pre-segmentation of activities predefined by users. However, in real life, people perform activities casually. Therefore, where those activities present difficulties for people with chronic pain, technology-enabled support should be delivered continuously and automati- cally adapted to activity type and occurrence of protective behavior. Hence, to facilitate ubiquitous CP management, it becomes critical to enable accurate PBD over continuous data. In this paper, we propose to integrate human activity recognition (HAR) with PBD via a novel hierarchical HAR-PBD architecture comprising graph-convolution and long short-term memory (GC-LSTM) networks, and alleviate class imbalances using a class-balanced focal categorical cross-entropy (CFCC) loss. Through in-depth evaluation of the approach using a CP patients’ dataset, we show that the leveraging of HAR, GC-LSTM networks, and CFCC loss leads to clear increase in PBD performance against the baseline (macro F1 score of 0.81 vs. 0.66 and precision-recall area-under-the-curve (PR-AUC) of 0.60 vs. 0.44). We conclude by discussing possible use cases of the hierarchical architecture in CP management and beyond. We also discuss current limitations and ways forward.</p>
  </div>

  </div>
</div>
</li>
<!--      2021 Paper 1 end     -->



<!--     2021 Paper 2 start    -->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://arxiv.org/pdf/1902.08990.pdf"><img src="/assets/img/ACMHEALTH_1.png" alt="ACMHEALTH_1_ChongyangWang" width="280" height="180">
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
  <em>ACM Transactions on Computing for Healthcare</em> 2021    
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
<!--      2021 Paper 2 end     -->
</ol>

<!-- -------------------------------2021-------------------------------------- -->

<h2 class="year">2020</h2>
<ol class="bibliography">
<!--     2020 Paper 1 start    -->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://github.com/Mvrjustid/AKMNet-Micro-Expression"><img src="/assets/img/IEEEMM_1.png" alt="IEEEMM_1_ChongyangWang" width="280" height="150">
  </a>
  
  <!-- ----      Title      ---- -->
  <div id="wang2020leveraging" class="col-sm-8">
  <div class="title">Recognizing Micro-expression in Video Clip with Adaptive Key-frame Mining
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
  <em>IEEE Transactions on MultiMeida (In Review)</em> 2020    
  </div>

  <!-- ---- Badge/Abstract/PDF ---- -->
  <div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">IEEE MM</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/2009.09179.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>As a spontaneous expression of emotion on face, micro-expression reveals the underlying emotion that cannot be controlled by human. In micro-expression, facial movement is transient and sparsely localized through time. However, the existing representation based on various deep learning techniques learned from a full video clip is usually redundant. In addition, methods utilizing the single apex frame of each video clip require expert annotations and sacrifice the temporal dynamics. To simultaneously localize and recognize such fleeting facial movements, we propose a novel end-to-end deep learning architecture, referred to as adaptive key-frame mining network (AKMNet). Operating on the video clip of micro-expression, AKMNet is able to learn discriminative spatio-temporal representation by combining spatial features of self-learned local key frames and their global-temporal dynamics. Theoretical analysis and empirical evaluation show that the proposed approach improved recognition accuracy in comparison with state-of-the-art methods on multiple benchmark datasets.
  </p>
  </div>
  </div>
</div>
</li>
<!--      2020 Paper 1 end     -->

<!--     2020 Paper 2 start    -->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://github.com/Mvrjustid/Micro-Attention-for-Micro-Expression"><img src="/assets/img/Neurocom_1.png" alt="Neurocom_1_ChongyangWang" width="280" height="200">
  </a>
  
  <!-- ----      Title      ---- -->
  <div id="wang2020leveraging" class="col-sm-8">
  <div class="title">Micro-attention for micro-expression recognition
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
  <em>Neurocomputing</em> 2020    
  </div>

  <!-- ---- Badge/Abstract/PDF ---- -->
  <div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">Neurocomputing</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/1-s2.0-S0925231220309711-main.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>Micro-expression, for its high objectivity in emotion detection, has emerged to be a promising modality in affective computing. Recently, deep learning methods have been successfully introduced into the micro-expression recognition area. Whilst the higher recognition accuracy achieved, substantial challenges in micro-expression recognition remain. The existence of micro expression in small-local areas on face and limited size of available databases still constrain the recognition accuracy on such emotional facial behavior. In this work, to tackle such challenges, we propose a novel attention mechanism called micro-attention cooperating with residual network. Micro-attention enables the network to learn to focus on facial areas of interest covering different action units. Moreover, coping with small datasets, the micro-attention is designed without adding noticeable parameters while a simple yet efficient transfer learning approach is together utilized to alleviate the overfitting risk. With extensive experimental evaluations on three benchmarks (CASMEII, SAMM and SMIC) and post-hoc feature visualizations, we demonstrate the effectiveness of the proposed micro-attention and push the boundary of automatic recognition of micro-expression.
  </p>
  </div>
  </div>
</div>
</li>
<!--      2020 Paper 2 end     -->
</ol>

<!-- -------------------------------2020-------------------------------------- -->

<h2 class="year">2019</h2>
<ol class="bibliography">
<!--     2019 Paper 1 start    -->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://dl.acm.org/doi/abs/10.1145/3341163.3347728"><img src="/assets/img/ISWC_1.png" alt="ISWC_1_ChongyangWang" width="280" height="200">
  </a>
  
  <!-- ----      Title      ---- -->
  <div id="wang2020leveraging" class="col-sm-8">
  <div class="title">Recurrent network based automatic detection of chronic pain protective behavior using mocap and semg data
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
  <em>ACM International Joint Conference on Pervasive and Ubiquitous Computing</em> 2019    
  </div>

  <!-- ---- Badge/Abstract/PDF ---- -->
  <div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">Ubicomp/ISWC</abbr>
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
<!--      2019 Paper 1 end     -->

<!--     2019 Paper 2 start    -->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://github.com/Mvrjustid/BodyAttentionNetwork"><img src="/assets/img/ACII_1.png" alt="ACII_1_ChongyangWang" width="280" height="150">
  </a>
  
  <!-- ----      Title      ---- -->
  <div id="wang2020leveraging" class="col-sm-8">
  <div class="title">Learning temporal and bodily attention in protective movement behavior detection
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
  <em>8th International Conference on Affective Computing and Intelligent Interaction Workshops and Demos</em> 2019    
  </div>

  <!-- ---- Badge/Abstract/PDF ---- -->
  <div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">ACII</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/08925084.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>For people with chronic pain, the assessment of protective behavior during physical functioning is essential to understand their subjective pain-related experiences (e.g., fear and anxiety toward pain and injury) and how they deal with such experiences (avoidance or reliance on specific body joints), with the ultimate goal of guiding intervention. Advances in deep learning (DL) can enable the development of such intervention. Using the EmoPain MoCap dataset, we investigate how attention-based DL architectures can be used to improve the detection of protective behavior by capturing the most informative temporal and body configurational cues characterizing specific movements and the strategies used to perform them. We propose an end-to-end deep learning architecture named BodyAttentionNet (BANet). BANet is designed to learn temporal and bodily parts that are more informative to the detection of protective behavior. The approach addresses the variety of ways people execute a movement (including healthy people) independently of the type of movement analyzed. Through extensive comparison experiments with other state-of-the-art machine learning techniques used with motion capture data, we show statistically significant improvements achieved by using these attention mechanisms. In addition, the BANet architecture requires a much lower number of parameters than the state of the art for comparable if not higher performances.
  </p>
  </div>
  </div>
</div>
</li>
<!--      2019 Paper 2 end     -->

<!--     2019 Paper 3 start    -->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://github.com/Mvrjustid/ACII19-Apex-Time-Network"><img src="/assets/img/ACII_2.png" alt="ACII_2_ChongyangWang" width="280" height="180">
  </a>
  
  <!-- ----      Title      ---- -->
  <div id="wang2020leveraging" class="col-sm-8">
  <div class="title">A novel apex-time network for cross-dataset micro-expression recognition
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
  <em>8th International Conference on Affective Computing and Intelligent Interaction (ACII)</em> 2019    
  </div>

  <!-- ---- Badge/Abstract/PDF ---- -->
  <div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">ACII</abbr>
  </a>
  <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
  <a href="/assets/pdf/08925525.pdf" class="btn btn-sm z-depth-0 waves-effect waves-light" role="button" target="_blank">PDF</a>  
  </div>
  <div class="abstract hidden">
  <p>The automatic recognition of micro-expression has been boosted ever since the successful introduction of deep learning approaches. As researchers working on such topics are moving to learn from the nature of micro-expression, the practice of using deep learning techniques has evolved from processing the entire video clip of micro-expression to the recognition on apex frame. Using the apex frame is able to get rid of redundant video frames, but the relevant temporal evidence of micro-expression would be thereby left out. This paper proposes a novel Apex-Time Network (ATNet)to recognize micro-expression based on spatial information from the apex frame as well as on temporal information from the respective-adjacent frames. Through extensive experiments on three benchmarks, we demonstrate the improvement achieved by learning such temporal information. Specially, the model with such temporal information is more robust in cross-dataset validations.
  </p>
  </div>
  </div>
</div>
</li>
<!--      2019 Paper 3 end     -->
</ol>
<!-- -------------------------------2019-------------------------------------- -->

<h2 class="year">2018</h2>
<ol class="bibliography">
<!--     2018 Paper 1 start    -->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://ieeexplore.ieee.org/abstract/document/8373920"><img src="/assets/img/FG_1.png" alt="FG_1_ChongyangWang" width="280" height="160">
  </a>
  
  <!-- ----      Title      ---- -->
  <div id="wang2020leveraging" class="col-sm-8">
  <div class="title">Attention based residual network for micro-gesture recognition
  </div>

  <!-- ----      Author     ---- -->
  <div class="author">
  <a href="https://scholar.google.com/citations?user=hRQVbeoAAAAJ&hl=en" target="_blank">Peng Min</a>,

  <em>Wang Chongyang</em>,  

  and <a>Chen Tong</a>        
  </div>

  <!-- ----      Journal      ---- -->
  <div class="periodical"> 
  <em>13th IEEE International Conference on Automatic Face & Gesture Recognition</em> 2018    
  </div>

  <!-- ---- Badge/Abstract/PDF ---- -->
  <div class="links">
  <a class="col-sm-2 abbr">
  <abbr class="badge">FG</abbr>
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
<!--      2018 Paper 1 end     -->
</ol>

<!-- -------------------------------2018-------------------------------------- -->

<h2 class="year">2017</h2>
<ol class="bibliography">
<!--     2017 Paper 1 start    -->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://www.frontiersin.org/articles/10.3389/fpsyg.2017.01745/full"><img src="/assets/img/Frontiers_1.png" alt="Frontiers_1_ChongyangWang" width="280" height="160">
  </a>
  
  <!-- ----      Title      ---- -->
  <div id="wang2020leveraging" class="col-sm-8">
  <div class="title">Dual temporal scale convolutional neural network for micro-expression recognition
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
  <em>Frontiers in psychology</em> 2017    
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
<!--      2017 Paper 1 end     -->

<!--     2017 Paper 2 start    -->
<li><div class="row">
  <!-- ----Picture with link---- -->
  <a href="https://www.mdpi.com/2078-2489/7/4/61"><img src="/assets/img/Information_1.png" alt="Information_1_ChongyangWang" width="280" height="100">
  </a>
  
  <!-- ----      Title      ---- -->
  <div id="wang2020leveraging" class="col-sm-8">
  <div class="title">NIRFacenet: A convolutional neural network for near-infrared face identification
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
  <em>Information</em> 2017    
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
<!--      2017 Paper 2 end     -->
</ol>

<!-- -------------------------------2017-------------------------------------- -->

</div>
</article>
</div>