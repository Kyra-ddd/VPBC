# Research Management

> 基金公司投研业务 IT 产品设计（Research Management）。本仓库用于沉淀系统设计产出物（PRD、方案设计、SQL、原型）与 AI 协作上下文，支持多设备接续工作。

---

## 📍 当前进度

<!-- 每次推进时更新这里，让任何设备拉下来一眼看到做到哪了 -->

- **阶段**：原型设计（①②③④⑤ 全部静态原型完成，④模拟组合深度迭代中）
- **最近更新**：2026-08-17 — 模拟组合详情大幅增强 + 行业列表直显研究员 + PRD文档同步更新（详见下方历史进度）
- **下一步**：指标库"保存展示设置"落地（localStorage）；PRD 文档同步原型新功能；考虑恢复公开预览链接

### 历史进度

- [x] 2026-08-11 初始化仓库骨架（目录/README/CLAUDE.md/.gitignore + Git 首次提交）
- [x] 2026-08-11 引入 VP UI 设计规范（`docs/design/ui-spec.md`）并在 CLAUDE.md 挂铁律
- [x] 2026-08-11 完成 PRD-01 配置页面（多角色 RBAC + 通用自定义选项库）
- [x] 2026-08-11 完成 PRD-02 行业-研究员维护（市场>行业>研究员，多对多可跨市场）
- [x] 2026-08-11 完成 PRD-03 股票出入池（多命名池、出入池三模式审批可配置）
- [x] 2026-08-12 接入 GitHub 远程（Kyra-ddd/Research-Management · Private）
- [x] 2026-08-12 完成①②③静态原型（prototypes/，共用 vp.css，侧栏+顶栏框架）
- [x] 2026-08-14 完成④模拟组合 PRD + 原型（docs/prd/04-portfolio.md + prototypes/04-portfolio.html）
- [x] 2026-08-14 完成⑤研报 PRD + 原型（docs/prd/05-research-report.md + prototypes/05-research-report.html）
- [x] 2026-08-15 合并网页上传产生的分叉历史，原型归位 prototypes/；清理提交历史中的公司邮箱（git-filter-repo 重写，全部 noreply）
- [x] 2026-08-15 ②行业列表直显生效研究员姓名标签（在职绿/离职灰、主覆盖/协助标识、多行换行）
- [x] 2026-08-17 ④模拟组合详情全面增强：区间表现净值走势图（6档区间/恒指基准/十字线tooltip）、调仓记录+发起调仓弹层（三态表单）、指标库（4类20指标/勾选上图/chips移除/预设+自定义时间区间/单指标真值轴）、列表定高5行+详情同页展开、持仓/调仓并行两列

---

## 🗂 仓库结构

```
Research-Management/
├── README.md            ← 你在这里：总览 + 进度 + 多设备工作流
├── CLAUDE.md            ← 给 Claude 的项目指令（业务背景/术语/原则，跨设备自动加载）
├── docs/
│   ├── prd/             ← 产品需求文档
│   ├── design/          ← 方案设计、流程说明
│   └── sql/             ← 数据查询脚本
├── prototypes/          ← 原型文件 或 放 Figma/墨刀链接
└── .claude/
    └── memory/          ← 跟随项目的 AI 记忆
```

---

## 🔄 多设备工作流

> 换设备？先看 [`docs/新设备上手指南.md`](docs/新设备上手指南.md)。

进度靠 `README.md`（当前到哪步）+ `CLAUDE.md`（怎么干）承载，不依赖对话记录。

```
A 设备干活 → git add . → git commit -m "..." → git push
B 设备开工前 → git pull            ← 我读 README + CLAUDE.md 即可接上
B 设备干完   → git push
```

**接手清单（换设备必做）：**
1. `git pull` 拉最新
2. 看本文件「📍当前进度」
3. 开干；干完 `commit` + `push`

---

## 🔗 远程仓库

- **平台**：GitHub
- **地址**：https://github.com/Kyra-ddd/Research-Management
- **可见性**：Private

---

## 📌 备注

- 产出物优先用 Markdown（可 diff、AI 友好）
- 大二进制文件（Axure .rp 等）考虑 Git LFS 或仅放云端链接
- 敏感业务数据：遵循公司数据分级要求，确认可否上云后再决定托管平台
