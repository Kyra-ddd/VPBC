# VPBC — Value Partners Business Center

> Value Partners 业务系统整合平台，包含投研管理系统（Research Management）和基金产品中心（Product Center）。

---

## 📍 当前进度

- **阶段**：VPBC 整合阶段 — 研报系统和产品系统已纳入 VPBC 统一管理
- **最近更新**：2026-08-21 — 创建 VPBC 根目录 CLAUDE.md，完成项目整合文档

### 各子系统进度

**Research Management**
- 阶段：原型设计（①②③④⑤ 全部静态原型完成，④模拟组合深度迭代中）
- [查看详情](Research-Management/README.md)

**Product Center**
- 阶段：原型设计 + PRD 文档
- [查看详情](Product-Center/README.md)

---

## 🗂 仓库结构

```
VPBC/
├── README.md              ← VPBC 总览（你在这里）
├── CLAUDE.md              ← 全局项目指令（业务背景/UI规范/协作约定）
├── vpbc-shell.html        ← 统一入口 shell
├── Product-Center/        ← 基金产品中心
│   ├── docs/prd/          ← 产品需求文档
│   ├── docs/design/       ← 方案设计
│   ├── docs/sql/          ← 数据脚本
│   └── prototypes/        ← 原型文件
└── Research-Management/   ← 投研管理系统
    ├── docs/prd/          ← 研报需求文档
    ├── docs/design/       ← 方案设计
    ├── docs/sql/          ← 数据脚本
    └── prototypes/        ← 原型文件
```

---

## 🔗 远程仓库

- **VPBC 整合仓库**：https://github.com/Kyra-ddd/VPBC
- **Research Management**：https://github.com/Kyra-ddd/Research-Management
- **Product Center**：https://github.com/Kyra-ddd/Product-Center

---

## 设计系统

所有子系统遵循 Value Partners UI 设计规范：
- **涨跌色**：港式惯例（红涨绿跌）
- **主色**：`#20A06E`（vp-green）
- **背景色**：`#F2F8F4`（vp-mint-50）
- **字体**：Poppins（标题）/ Open Sans（正文）

详见各子系统的 `docs/design/ui-spec.md`。

---

## 📌 备注

- VPBC 是整合项目，各子系统独立维护各自的 README.md 和 CLAUDE.md
- 根目录文件作为全局上下文和新系统入口
