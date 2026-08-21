# VPBC — Value Partners Business Center

> 本文件给 Claude Code 读取，提供项目背景与协作约定。

## 项目概述

- **项目**：VPBC（Value Partners Business Center，Value Partners 业务系统整合平台）
- **整合项目**：将原独立的投研系统与产品系统整合为统一平台
- **子仓库**：
  - [Product-Center/](Product-Center/README.md) — 基金产品中心
  - [Research-Management/](Research-Management/README.md) — 投研管理系统
- **入口页面**：[vpbc-shell.html](vpbc-shell.html) — 统一的侧边栏导航 shell

## 各子系统职责

| 系统 | 职责 | 关键产出物 |
|------|------|-----------|
| **Research Management** | 投研业务（研报、股票池、行业研究、模拟组合） | PRD、静态原型、SQL |
| **Product Center** | 基金产品主数据、份额类别、产品生命周期、费率结构 | PRD、静态原型、SQL |

> Product Center 为下游系统（组合管理 Portfolio Management）提供产品维度基础数据；Research Management 为 Product Center 提供研究观点参考。

## UI 设计规范（通用铁律）

所有前端 UI 遵循 Value Partners 设计系统，详见各子系统的 `docs/design/ui-spec.md`。

**不可违反的铁律：**
- **涨跌色为港式惯例**：上涨 = 红 `#B23A48`，下跌 = 绿 `#20A06E`
- **主色是 `--vp-green: #20A06E`**
- **字体**：标题 Poppins，正文 Open Sans；中文 `PingFang TC`/`Microsoft JhengHei`
- **数字/时间/利率**开 `font-variant-numeric: tabular-nums`
- **整页背景 `--vp-mint-50: #F2F8F4`**，内容用纯白卡片承载

## 协作约定

### 文档与产出
- 各子系统的产出物放各自 `docs/`（prd/design/sql）和 `prototypes/`
- 文档优先 Markdown；SQL 脚本放 `docs/sql/`，文件名含用途与日期

### 进度维护
- **每个子系统**各自维护 `README.md` 的「📍当前进度」
- 重大决策在各子系统 `.claude/memory/` 留记忆

### 多设备
- 进度靠文件承载，不靠对话记录
- 换设备接手时，以对应子系统的 `README.md` + `CLAUDE.md` 为唯一事实来源

### 安全与合规
- **不要把敏感数据写入仓库**
- 不确定能否上云的内容，先问用户

## 仓库结构

```
VPBC/
├── CLAUDE.md              ← 你在这里：全局项目上下文（本文件）
├── README.md              ← VPBC 总览
├── vpbc-shell.html       ← 统一入口 shell（侧边栏 + 多 tab 框架）
├── Product-Center/        ← 基金产品中心子系统
│   ├── README.md
│   ├── CLAUDE.md
│   ├── docs/
│   └── prototypes/
└── Research-Management/  ← 投研管理系统子系统
    ├── README.md
    ├── CLAUDE.md
    ├── docs/
    └── prototypes/
```

## 快速导航

当 Claude 在根目录启动时，若用户提及某个子系统，直接进入对应目录工作：
- 「产品」相关 → `cd Product-Center`
- 「研报/投研/股票池」相关 → `cd Research-Management`
- 「shell/导航/整体布局」相关 → 工作在根目录
