---
published: 2026-10-15
draft: false
title: "研究速递：GPT 辅助放射组学建模预测头颈鳞癌的病理完全缓解"
description: "团队基于治疗前 MRI，在三个队列中比较 GPT 辅助流程和常规放射组学建模流程。"
image: "/images/blogs/gpt-radiomics-hnscc/image1.png"
category: "研究进展"
lang: "zh_CN"
---

近日，MiX-AIAI Lab 团队 硕士研究生石华仙 等人在 Physics in Medicine & Biology 上发表文章 GPT-assisted radiomic modeling for predicting pathological complete response to neoadjuvant chemoimmunotherapy in head and neck squamous cell carcinoma。该研究系统评估了 GPT 能否辅助完成放射组学建模，以预测头颈部鳞状细胞癌患者接受新辅助化疗联合免疫治疗后的病理完全缓解（pathological complete response，pCR）。

研究纳入三个队列：训练队列 186 例、验证队列 116 例、前瞻性多中心验证队列 269 例。作者从治疗前的 T2 加权磁共振图像中提取手工放射组学特征与有监督深度学习特征，先以逻辑回归比较单一特征与融合特征，再用支持向量机、朴素贝叶斯、随机森林与极端梯度提升在融合特征上作横向比较。需要强调的是，GPT 在本研究中并不充当分类器，而是承担数据预处理、特征选择、超参数优化、代码生成与执行、模型训练以及概率输出等工程环节，每套辅助流程独立重复五次。

结果显示，融合特征在手工建模与 GPT 辅助的逻辑回归中均取得最高 AUC：训练队列为 0.759 对 0.763±0.003，验证队列为 0.714 对 0.741±0.008，前瞻性多中心验证队列为 0.700 对 0.706±0.004。在五类分类器上，GPT 辅助流程与手工建模总体相当；重复运行的 AUC 标准差介于 0.001 至 0.019。作者据此认为，在专家监督下，GPT 可以自动化放射组学建模的关键步骤，在性能可比的前提下减轻技术性工作量。

图 1　研究流程：由 MRI 数据提取放射组学特征与预训练卷积网络特征，经 Spearman 与 Lasso 特征选择后，分别交由 GPT 辅助流程与传统机器学习流程建模并对比。（原文 Figure 3）

![研究速递：GPT 辅助放射组学建模预测头颈鳞癌的病理完全缓解 配图 2](/images/blogs/gpt-radiomics-hnscc/image2.png)

图 2　五类分类器在训练、验证与前瞻性多中心验证三个队列上的 AUC、ACC 与 Macro ACC 总体对比，蓝色为手工建模、红色为 GPT 辅助建模。（原文 Figure 12）

[阅读论文原文](https://doi.org/10.1088/1361-6560/aea735)
