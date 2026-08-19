# PRD-01 产品主数据管理（Product Masterdata）

> Product Center 子系统 · 版本 1.0 · 2026-08-20

---

## 1. 背景与目标

### 1.1 背景

基金公司的产品中心需要维护一套完整、准确的基金产品主数据，为下游系统（组合管理、销售、合规披露、风控等）提供统一的产品维度基础数据。当前业务中产品主数据分散在多个 Excel、邮件和旧系统中，存在信息不一致、更新滞后、查找困难等问题。

### 1.2 目标

- 建立统一的基金产品主数据电子台账
- 支持产品全生命周期关键信息的录入、查看、编辑与查询
- 为份额类别、费率结构、生命周期等后续模块提供数据基础
- 通过结构化的字段与校验规则，减少人工录入错误

---

## 2. 页面清单

| 页面 | 文件 | 入口 | 主要功能 |
|---|---|---|---|
| 产品管理列表页 | `prototypes/01-product-management.html` | 侧栏 Product Management | 展示产品主数据核心字段，支持搜索、筛选、分页；点击 View 进入详情；点击 New Product 打开新增弹层 |
| 产品详情页 | `prototypes/02-product-detail.html` | 列表页 View 按钮 | 按分组展示完整产品主数据字段 |
| 新增/编辑产品弹层 | 嵌入 01/02 页面 | 列表页 New Product / 详情页 Edit Product | 以 tab 分组录入或编辑产品主数据全字段 |
| 份额类别列表页 | `prototypes/03-share-class.html` | 侧栏 Share Class / 详情页 View Share Classes | 展示某基金下的多个份额类别（见 PRD-02） |

---

## 3. 产品主数据字段清单

字段来源：`旧版系统/productCenter-backend.html`（Field Validation Specification — Product Center）。

### 3.1 基本信息（Basic Information）

| 字段名 | 中文含义 | 类型 | 必填 | 唯一 | 说明 |
|---|---|---|---|---|---|
| `fundCode` | 基金代码 | String(20) | ✅ | ✅ | 主键，系统唯一标识 |
| `fundNameEn` | 基金名称（英文） | String(200) | ✅ | ✅ | |
| `fundNameTc` | 基金名称（繁中） | String(200) | ✅ | ✅ | |
| `fundNameSc` | 基金名称（简中） | String(200) | ✅ | ✅ | |
| `fundType` | 基金类型 | Enum | ✅ | ❌ | Equity Fund / Bond Fund / Mixed Asset Fund / Money Market Fund / Index Fund / ETF / Fund of Funds / Structured Fund / Other |
| `umbrellaOfcName` | 伞形 / OFC 名称 | String | ❌ | ❌ | |
| `subFundCode` | 子基金代码 | String | ❌ | ❌ | |
| `domicileJurisdiction` | 注册地 / 司法管辖区 | Enum | ✅ | ❌ | HK / LU / IE / KY / CN 等 ISO 3166-1 Alpha-2 编码 |
| `primaryRegulator` | 主要监管机构 | String | ✅ | ❌ | |
| `baseCurrency` | 基础货币 | Enum | ❌ | ❌ | USD / HKD / CNY / EUR / GBP / JPY / AUD / SGD 等 |
| `fundStatus` | 基金状态 | Enum | ✅ | ❌ | Active / Inactive / Draft / Terminated |
| `complexProduct` | 复杂产品 | Boolean | ✅ | ❌ | 默认 No |
| `professionalInvestorsOnly` | 仅专业投资者 | Boolean | ❌ | ❌ | 默认 No |
| `regionDictCodes` | 注册地区 | Array | ❌ | ❌ | 多选，关联字典 `sys_product_center_region` |

### 3.2 关键日期（Key Dates）

| 字段名 | 中文含义 | 类型 | 必填 | 说明 |
|---|---|---|---|---|
| `applicationSubmissionDate` | 申请提交日期 | Date | ❌ | |
| `authorizationDate` | 授权日期 | Date | ❌ | |
| `launchDate` | 成立 / 发售日期 | Date | ✅ | |
| `iopStartDate` | IOP 开始日期 | Date | ❌ | 首次发售期 |
| `operationStartDate` | 运作开始日期 | Date | ❌ | |
| `listingDate` | 上市日期 | Date | ❌ | |
| `terminationDate` | 终止日期 | Date | ❌ | |

### 3.3 标识码（Identification Codes）

| 字段名 | 中文含义 | 类型 | 必填 | 校验规则 |
|---|---|---|---|---|
| `leiNumber` | LEI 编号 | String | ❌ | 20 位字母数字 |
| `giinNumber` | GIIN 编号 | String | ❌ | 格式 `XXXXXX.XXXXX.XX.XX` |

### 3.4 服务机构（Service Providers）

| 字段名 | 中文含义 | 类型 | 必填 | 说明 |
|---|---|---|---|---|
| `fundManager` | 基金管理人 | String | ✅ | |
| `fundManagerLei` | 基金管理人 LEI | String | ✅ | 20 位字母数字 |
| `subManager` | 副管理人 | String | ❌ | |
| `investmentAdvisor` | 投资顾问 | String | ❌ | |
| `trusteeAdministrator` | 受托人 / 行政管理人 | String | ❌ | |
| `custodianPrimeBroker` | 托管人 / 主经纪商 | String | ❌ | |
| `subCustodian` | 分托管人 | String | ❌ | |
| `auditor` | 审计师 | String | ❌ | |

### 3.5 投资概况（Investment Profile）

| 字段名 | 中文含义 | 类型 | 必填 | 说明 |
|---|---|---|---|---|
| `primaryInstrumentType` | 主要投资工具类型 | Enum | ✅ | Equity Securities / Debt Securities / Derivatives / Mixed Instruments / Money Market Instruments / Structured Products / Other |
| `passiveOrActiveFund` | 被动或主动基金 | Enum | ✅ | Active / Passive |
| `investmentMarketFocus` | 投资市场重点 | Enum | ✅ | Global / Asia Pacific / Greater China / Emerging Markets / Developed Markets |
| `morningstarCategory` | Morningstar 分类 | String | ❌ | |
| `investmentObjective` | 投资目标 | Text(2000) | ✅ | |
| `investmentStrategy` | 投资策略 | Text(2000) | ✅ | |
| `assetAllocationTable` | 资产配置表 | File / Text(4000) | 条件必填 | 复杂产品或特定类型需上传 |
| `hedgingPolicyFund` | 对冲政策（基金层面） | Enum | ✅ | No Hedging / Fully Hedged / Partially Hedged |
| `benchmark` | 基准指数 | String | ❌ | |
| `benchmarkCode` | 基准指数代码 | String | ❌ | |
| `riskLevel` | 风险等级 | Integer | ❌ | 1–5 |

### 3.6 风险与限额（Risk & Limits）

| 字段名 | 中文含义 | 类型 | 必填 | 校验规则 |
|---|---|---|---|---|
| `leverageRatioMax` | 最高杠杆比率 | Integer | ✅ | ≥ 0 |
| `derivativesRatioMax` | 最高衍生品比率 | Integer | ✅ | ≥ 0 |
| `borrowingLimit` | 借款限额 | Integer | ✅ | ≥ 0 |
| `stopLossLimit` | 止损限额 | Decimal | ❌ | 保留两位小数 |
| `stopLossAlert` | 止损预警 | Decimal | ❌ | 保留两位小数 |

---

## 4. 校验规则

### 4.1 唯一性约束

- `fundCode` 全局唯一
- `fundNameEn`、`fundNameTc`、`fundNameSc` 全局唯一
- 同一基金下份额类别名称 + VPFS Class ID 联合唯一（见 PRD-02）

### 4.2 必填校验

- 新建产品时，带 `*` 的字段必须填写
- `launchDate` 不能晚于今天
- `terminationDate` 必须晚于 `launchDate`
- `operationStartDate` 不得早于 `authorizationDate`

### 4.3 格式校验

- `leiNumber`：20 位字母数字
- `giinNumber`：`XXXXXX.XXXXX.XX.XX`
- `riskLevel`：1–5 整数
- 比率类字段：非负整数
- 金额类字段：保留两位小数

### 4.4 业务校验

- `fundStatus = Terminated` 时，`terminationDate` 必填
- `complexProduct = Yes` 时，`assetAllocationTable` 必填
- `hedgingPolicyFund != No Hedging` 时，份额类别层面对冲货币字段才允许录入

---

## 5. 页面流程

### 5.1 查看产品列表

```
用户进入 Product Center → Product Management
        ↓
展示产品主数据表格（默认按 Launch Date 倒序）
        ↓
用户可通过 Fund Code / Fund Name / Fund Type / Status / Domicile 筛选
        ↓
点击分页切换页码
```

### 5.2 查看产品详情

```
产品列表页 → 点击某行 View
        ↓
进入产品详情页
        ↓
按 Basic / Dates / Providers / Investment / Risk 分组展示只读字段
        ↓
可点击 Edit Product 打开编辑弹层
        ↓
可点击 View Share Classes 查看该基金下份额类别
```

### 5.3 新增产品

```
产品列表页 → 点击 New Product
        ↓
打开弹层（标题 New Product）
        ↓
在 5 个 tab 中录入字段
        ↓
点击 Save Product → 前端校验 → 后端保存 → 刷新列表
        ↓
关闭弹层，列表新增一条记录
```

### 5.4 编辑产品

```
产品详情页 → 点击 Edit Product
        ↓
打开弹层（标题 Edit Product），字段预填充当前产品数据
        ↓
修改字段 → Save Product → 校验 → 保存
        ↓
关闭弹层，详情页刷新
```

---

## 6. 状态流转

| 当前状态 | 可变更至 | 触发条件 |
|---|---|---|
| Draft | Active / Inactive | 完成产品设立，获得授权 |
| Active | Inactive / Terminated | 暂停申购 / 产品清盘 |
| Inactive | Active / Terminated | 恢复申购 / 产品清盘 |
| Terminated | — | 终态，仅允许查看历史 |

- 状态变更需记录操作日志（操作人、时间、原因）
- Terminated 状态的产品在新建组合时不可选

---

## 7. 权限说明（初版）

| 角色 | 查看列表 | 查看详情 | 新增 | 编辑 | 变更状态 |
|---|---|---|---|---|---|
| 产品管理员 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 产品经理 | ✅ | ✅ | ✅ | ✅ | ❌ |
| 投资经理 | ✅ | ✅ | ❌ | ❌ | ❌ |
| 合规/风控 | ✅ | ✅ | ❌ | ❌ | ❌ |

> 详细 RBAC 见后续 PRD-XX 权限管理文档。

---

## 8. 待确认问题

1. 基金代码是否需要支持多市场编码（如 HK 代码、ISIN、Bloomberg Ticker）？目前这些放在份额类别层。
2. `assetAllocationTable` 是文本框录入还是上传文件？建议支持上传 PDF/Excel 并解析关键字段。
3. 产品主数据变更是否需要工作流审批？建议新增/重大修改走产品管理员审批。
4. 是否需要与上游系统（如 TA、估值系统）做自动同步？

---

## 9. 后续规划

- PRD-02 份额类别管理（Share Class）
- PRD-03 产品生命周期管理（Lifecycle）
- PRD-04 费率结构管理（Fee Structure）
- PRD-05 产品文档与信息披露管理
