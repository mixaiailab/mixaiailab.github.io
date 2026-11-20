---
published: 2026-11-03
draft: false
title: "研究速递：DSIN 用动力系统驱动的隐式神经表示压缩医学图像"
description: "团队在五类医学图像数据上评估 DSIN，最高压缩比达 183 倍，并检验压缩图像在下游任务中的表现。"
image: "/images/blogs/dsin-medical-image-compression/image1.png"
category: "研究进展"
lang: "zh_CN"
---

近日，MiX-AIAI Lab 团队 硕士研究生宋含笑 等人在 Communications Engineering 上发表文章 DSIN: dynamic system-empowered implicit neural representation for medical image compression。该研究提出了 DSIN 框架，以图像特异性的隐式神经表示完成医学图像压缩。

光子计数 CT、多参数磁共振与全切片数字病理等高维、超高分辨率成像不断提升诊断精度，同时也让数据量急剧膨胀，给存储、传输与临床调阅带来压力。传统压缩标准依据人眼感知的低通特性优化，常把亚视觉却具诊断价值的细节一并剔除；既有的隐式神经表示方法则难以泛化到不同模态与不同病理。DSIN 以每幅图像单独训练的隐式神经表示为基础，叠加一个基于动力系统的堆叠压缩模块，在保持重建质量的同时进一步压缩模型体积。

作者在 CT、MRI、PET、CTA 与组织病理五个大规模临床数据集上完成评测，压缩比最高达到 183 倍，其中病理图像 141 倍、CT 113 倍、MRI 93 倍、CTA 73 倍。与 JPEG2000、H.264 以及隐式神经表示结合权重量化的方法相比，DSIN 在重建质量与下游分割、分类任务上均更优：病理图像四个关键细胞类型的分割 Dice 平均提升 0.02 至 0.06，组织类型分类的 F1 值较次优方法平均提升 0.05；在低剂量 PET 上，器官边界与代谢活性的勾画也保持得更好。

图 1　DSIN 模型总览：(a) 在 CT、MRI、PET 与病理四类数据上的采集与存储场景；(b) DSIN 框架，由位置编码、多层感知机、重塑、三维卷积与动力系统模块构成；(c) 下游的分割、分类与降噪分析。（原文 Fig. 7）

![研究速递：DSIN 用动力系统驱动的隐式神经表示压缩医学图像 配图 2](/images/blogs/dsin-medical-image-compression/image2.png)

图 2　CT 图像在 113 倍压缩下的重建与分割表现：(a) 各方法的重建图像与局部放大；(b) PSNR 与 SSIM 分布；(c) DSIN 与仅用隐式神经表示方法的配对比较；(d) 下游分割结果与 Dice 值。（原文 Fig. 2）

[阅读论文原文](https://doi.org/10.1038/s44172-026-00812-3)
