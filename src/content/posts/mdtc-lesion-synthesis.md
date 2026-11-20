---
published: 2026-08-13
draft: false
title: "研究速递：MDTC 为虚拟成像试验生成带纹理约束的 CT 病灶"
description: "团队结合解剖掩膜引导和纹理约束合成肝细胞癌病灶与肺结节，并评估合成样本对分类训练的作用。"
image: "/images/blogs/mdtc-lesion-synthesis/image1.png"
category: "研究进展"
lang: "zh_CN"
---

近日，MiX-AIAI Lab 团队 硕士研究生李颖 等人在 IEEE Transactions on Medical Imaging 上发表文章 Multi-Conditional Diffusion Framework With Texture Constraints for Clinically Reliable Lesion Synthesis in Virtual Imaging Trials。该研究提出了带纹理约束的多条件扩散框架 MDTC（Multi-conditional Diffusion framework with Texture Constraints），用于在 CT 图像中合成具备临床可信度的病灶。

医学影像人工智能的临床转化受三重制约：带标注数据稀缺、病理分布呈长尾、以及虚拟成像试验中的隐私限制。生成式数据增强被视为缓解手段，但既有方法往往只追求视觉逼真，合成病灶容易丢失真实病灶的纹理异质性。MDTC 的关键设计在于把解剖掩膜引导与基于灰度共生矩阵（gray-level co-occurrence matrix，GLCM）的纹理分类器联合嵌入扩散网络，以双重约束同时保证结构保真与病理异质。

作者在肝细胞癌与肺结节两类数据上开展实验。与经典生成模型相比，MDTC 在纹理保真度、峰值信噪比与 FID 上均取得改善；以真实与合成数据混合训练下游分类器时，即使合成样本替换掉 50% 至 60% 的真实训练样本，模型仍保持 98.5% 以上的基线 AUC（0.810 对 0.822）；针对稀有肺结节的数据增强还显著提升了分类效能。

图 1　MDTC 总体流程，包含数据准备、训练（扩散损失与纹理损失联合优化）、采样（病灶合成）与评估（临床效用验证）四个阶段。（原文 Fig. 1）

![研究速递：MDTC 为虚拟成像试验生成带纹理约束的 CT 病灶 配图 2](/images/blogs/mdtc-lesion-synthesis/image2.png)

图 2　Liver 0、Liver 1 与 Lung 1 三类数据上合成病灶与真实病灶的定性对比，蓝色框为合成样本、红色框为真实样本，并附感兴趣区局部放大。（原文 Fig. 5）

[阅读论文原文](https://doi.org/10.1109/TMI.2026.3723596)
