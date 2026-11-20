---
published: 2026-11-03
draft: false
title: "研究速递：GAPR-Net 用几何感知模型校正多源直线静态 CT 散射"
description: "团队结合散射核参数回归与可微前向模型，在数字体模和实体平台上验证散射校正方法。"
image: "/images/blogs/gapr-net-scatter-correction/image1.png"
category: "研究进展"
lang: "zh_CN"
---

近日，MiX-AIAI Lab 团队 硕士研究生王延坤 等人在 Physics in Medicine & Biology 上发表文章 Scatter correction for multi-source linear static CT via a geometry-aware parameter regression network with differentiable forward modeling。该研究提出了几何感知参数回归网络 GAPR-Net，用于多源直线静态 CT 的散射校正。

多源直线静态 CT（source linear static CT，SLCT）把 X 射线源沿直线排布并与探测器平行，取消机械旋转，因而具有时间分辨率高、体积紧凑、成本较低的优势。但外围射线源的横向偏移破坏了传统散射校正方法所依赖的旋转对称性，使散射点扩散函数随位置变化并呈非对称形态。GAPR-Net 的思路是在常规锥束散射核中引入显式校正项以刻画这种非对称畸变，由参数回归网络从蒙特卡罗笔形束数据中学习与源几何、物体厚度相关的核超参数，再借助可微前向模型解析地估计散射，并在几何一致性损失下稳定优化。

作者在水、电子密度与 ICRP 三类数字体模上开展仿真，并用由 DICOM 数据生成的头模结合所推导的三维 SLCT 重建算法进行验证，对照方法包括散射核叠加、DSE、ResNet 与静态 CT 专用的 1D U-Net。电子密度体模与 ICRP 体模的散射估计平均绝对百分比误差分别为 4.43% 与 5.31%；重建图像的峰值信噪比在电子密度体模上达到 29.51 dB；ICRP 胸部体模的平均绝对百分比误差由 14.69% 降至 6.07%。该方法在 80、100、120 kVp 三种管电压下性能稳定，并在实体半 SLCT 平台上完成了实测验证。

图 1　GAPR-Net 结构：(a) 参数回归网络与散射核构建，几何一致性损失参与联合优化；(b) 由 SLCT 投影数据估计散射信号的整体流程。（原文 Figure 2）

![研究速递：GAPR-Net 用几何感知模型校正多源直线静态 CT 散射 配图 2](/images/blogs/gapr-net-scatter-correction/image2.png)

图 2　水、电子密度、ICRP 胸部与 ICRP 头模的重建图像及误差图对比，最下行为 GAPR-Net，误差图蓝色越浅表示与真值偏差越小。（原文 Figure 11）

[阅读论文原文](https://doi.org/10.1088/1361-6560/aeb84e)
