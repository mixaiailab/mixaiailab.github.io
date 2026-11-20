---
published: 2026-09-28
draft: false
title: "研究速递：ASim-PCCT 对光子计数 CT 的电荷共享与脉冲堆积进行级联建模"
description: "团队将两种探测器效应纳入同一解析仿真框架，在数字体模实验中取得与蒙特卡罗仿真相近的精度，并缩短了计算时间。"
image: "/images/blogs/asim-pcct/image1.png"
category: "研究进展"
lang: "zh_CN"
---

近日，MiX-AIAI Lab 团队 硕士研究生侯浩民 等人在 IEEE Transactions on Nuclear Science 上发表文章 Analytical Cascade Modeling of Charge Sharing and Pulse Pileup Effects for PCCT Simulation。该研究提出了首个对电荷共享（charge sharing，CS）与脉冲堆积（pulse pileup，PP）进行级联解析建模的仿真框架 ASim-PCCT。

光子计数 CT 依靠光子计数探测器在单次曝光内分辨不同能量的光子，由此实现多能成像，但其成像质量受两类物理效应制约：一是电荷共享，表现为信号在相邻探测器单元之间扩散；二是脉冲堆积，源于计数电子学的响应时间限制。既有研究大多把两者分开建模，忽略了它们在实际成像链中的级联作用。ASim-PCCT 采用双阶段解析策略，把物理输运过程与统计能量重分布统一到同一框架内。

在电荷共享一侧，作者构建了多物理模型，其中光子输运模块以概率方式刻画光子在相邻像素间发生的主级相互作用，动态电子云扩散模型则基于 Kanaya-Okayama 理论，把能量沉积与电子云的空间方差显式关联起来。在脉冲堆积一侧，作者扩展了经典非瘫痪型探测器理论，引入依赖能量的脉冲叠加，并以 GPU 并行计算实现加速。三种数字体模的实验表明，该级联框架在精度上与蒙特卡罗模拟相当，而单投影仿真耗时由单线程 CPU 的 3472.5 秒降至 0.5 秒，加速约 6945 倍。

图 1　ASim-PCCT 框架示意：(a) 电荷共享与脉冲堆积的级联建模流程；(b) 光子计数探测器的光子探测机制；(c) 光电效应伴随的三种次级物理效应。（原文 Fig. 1）

![研究速递：ASim-PCCT 对光子计数 CT 的电荷共享与脉冲堆积进行级联建模 配图 2](/images/blogs/asim-pcct/image2.png)

图 2　20、60、100 keV 下 PcTK、蒙特卡罗模拟与 ASim-PCCT 模型的能谱响应对比，模型曲线与蒙特卡罗结果高度重合。（原文 Fig. 5）

[阅读论文原文](https://doi.org/10.1109/TNS.2026.3731269)
