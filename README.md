# Product Center

> 基金公司产品中心 IT 产品设计（Product Center）。本仓库用于沉淀基金产品、份额类别、产品生命周期相关的设计产出物（PRD、方案设计、SQL、原型）与 AI 协作上下文，支持多设备接续工作。

---

## 📍 当前进度

<!-- 每次推进时更新这里，让任何设备拉下来一眼看到做到哪了 -->

- **阶段**：原型设计
- **最近更新**：2026-08-20 — 完成产品管理菜单原型（产品主数据列表页），参考旧版系统字段规范
- **下一步**：产品管理详情页 / 份额类别列表页 / 产品主数据 PRD 文档

### 历史进度

- [x] 2026-08-19 创建 GitHub 私有仓库 `Kyra-ddd/Product-Center`
- [x] 2026-08-19 本地 `New/` 目录关联远程仓库
- [x] 2026-08-19 初始化 README.md / CLAUDE.md
- [x] 2026-08-20 完成产品管理菜单原型（`prototypes/01-product-management.html`），展示基金产品主数据核心字段

---

## 🗂 仓库结构

```
Product-Center/
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

> 换设备？先看 `docs/新设备上手指南.md`（后续补充）。

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
- **地址**：https://github.com/Kyra-ddd/Product-Center
- **可见性**：Private

---

## 📌 备注

- 产出物优先用 Markdown（可 diff、AI 友好）
- 大二进制文件（Axure .rp 等）考虑 Git LFS 或仅放云端链接
- 敏感业务数据：遵循公司数据分级要求，确认可否上云后再决定托管平台
- Product Center 与 Research Management（投研）、Portfolio Management（组合管理）为同级业务域，各自独立维护
