# VPBC 前端设计规范

## 1. 设计定位

这是一个浅色主题的企业内部监控台，视觉基调为浅绿色（薄荷绿）底色，带有蓝色点缀。

视觉基调：

- 浅绿色 `#F2F8F4` 渐变背景；
- 白色卡片承载内容，带微妙边框；
- Inter + JetBrains Mono 字体组合；
- 信息密度高，通过字体层级和分组维持可读性；
- 深色主题保留用于涨跌色等金融惯例。

## 2. 核心颜色系统

### 2.1 Primary 色阶（蓝色系）

| Token | 色值 | 用途 |
|-------|------|------|
| `--primary-900` | `#0a1628` | 最深背景 |
| `--primary-800` | `#0f2240` | 深色背景 |
| `--primary-700` | `#16325f` | 卡片背景 |
| `--primary-600` | `#1d4580` | 深蓝边框 |
| `--primary-500` | `#245aa4` | 蓝色 |
| `--primary-400` | `#2d6ad2` | 主蓝色 |
| `--primary-300` | `#4f8df0` | 亮蓝色（主强调） |
| `--primary-200` | `#7ab0ff` | 浅蓝高亮 |
| `--primary-100` | `#bcd8ff` | 极浅蓝 |

### 2.2 Accent 色

| Token | 色值 | 用途 |
|-------|------|------|
| `--accent-cyan` | `#14b8d6` | 青色强调 |
| `--accent-indigo` | `#5b74f5` | 靛蓝强调 |

### 2.3 页面与表面

| Token | 用途 | 说明 |
|-------|------|------|
| `--bg-root` | 根背景 | 浅绿色 `#F2F8F4` |
| `--bg-sidebar` | 侧边栏背景 | `#ffffff` |
| `--bg-card` | 卡片背景 | `#ffffff` |
| `--bg-input` | 输入框背景 | `#F2F8F4` |
| `--bg-elevated` | 浮动层背景 | `#F2F8F4` |
| `--bg-card-hover` | 卡片 hover | `#eef5f0` |

### 2.4 文本色

| Token | 色值 | 用途 |
|-------|------|------|
| `--text-primary` | `#1a2e1a` | 主文本（深绿） |
| `--text-secondary` | `#4a5a4a` | 次级文本 |
| `--text-muted` | `#7a8a7a` | 弱化文本 |
| `--text-accent` | `#2d6ad2` | 强调文本（蓝色） |

### 2.5 边框色

| Token | 用途 |
|-------|------|
| `--border-subtle` | `rgba(0,0,0,0.08)` |
| `--border-default` | `rgba(0,0,0,0.12)` |

### 2.6 状态色

| Token | 色值 | 用途 |
|-------|------|------|
| `--success` | `#22c55e` | 成功/绿 |
| `--danger` | `#ef4444` | 错误/红 |
| `--warning` | `#f59e0b` | 警告/橙 |

### 2.7 香港金融显示惯例

- 上涨：红色 `#B23A48`（保持不变）
- 下跌：绿色 `#20A06E`（保持不变）

## 3. 字体系统

### 3.1 字体栈

```css
/* 主字体 */
--font-sans: "Microsoft YaHei", "PingFang SC", "Noto Sans SC", "Inter", "Segoe UI", sans-serif;

/* 等宽字体（数字/代码） */
--font-mono: "JetBrains Mono", monospace;

/* 数字字体 */
--font-numeric: "Inter", "Segoe UI", "Microsoft YaHei", sans-serif;

/* 数据专用等宽 */
--font-data-mono: "JetBrains Mono", "SFMono-Regular", Consolas, monospace;
```

### 3.2 字号系统

| 角色 | 字号 | 字重 | 行高 |
|------|------|------|------|
| 页面主标题 | 32-44px | 700 | 1.05 |
| 品牌名称 | 20px | 700 | - |
| 卡片标题 | 18px | 600 | - |
| 正文 | 14px | 400 | 1.5 |
| 辅助信息 | 12px | 400-600 | - |
| 微型说明 | 11px | 600-700 | - |

### 3.3 标签文字

```css
font-size: 11px;
font-weight: 700;
letter-spacing: 0.08em;
text-transform: uppercase;
```

## 4. 间距与圆角

### 4.1 间距（4px 基准）

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
```

### 4.2 圆角系统

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 22px;
```

### 4.3 阴影与发光

```css
--shadow-sm: 0 1px 3px rgba(0,0,0,0.2);
--shadow-md: 0 4px 12px rgba(0,0,0,0.25);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.3);
--shadow-glow: 0 0 20px rgba(79,141,240,0.25); /* 蓝色发光 */
```

### 4.4 毛玻璃效果

```css
backdrop-filter: blur(16px);
background: linear-gradient(180deg, rgba(255,255,255,0.06), transparent 28%), var(--bg-elevated);
```

## 5. 布局系统

### 5.1 布局尺寸

| Token | 值 | 用途 |
|-------|------|------|
| `--sidebar-width` | 228px | 侧边栏宽度 |
| `--header-height` | 56px | 顶栏高度 |
| `--page-max-width` | 100% | 页面最大宽度 |

### 5.2 过渡动画

```css
--transition-fast: 0.15s ease;
--transition-normal: 0.25s ease;
--transition-slow: 0.35s ease;
```

## 6. 组件规范

### 6.1 侧边栏

- 宽度：228px（折叠后 58px）
- 背景：`--bg-sidebar`（白色）
- 边框：`1px solid var(--border-default)`
- 菜单项：
  - 高度：36px
  - 圆角：8px
  - hover：`background: rgba(79,141,240,0.08)`
  - 激活：`color: var(--primary-400)`

### 6.2 顶栏

- 高度：56px
- 背景：`--bg-sidebar`
- 边框：`1px solid var(--border-subtle)`
- 头像按钮：34px 圆形，带渐变背景

### 6.3 浮动菜单（毛玻璃）

```css
padding: 8px;
border-radius: 14px;
border: 1px solid var(--border-default);
background: linear-gradient(180deg, rgba(255,255,255,0.06), transparent 28%), var(--bg-elevated);
box-shadow: var(--shadow-lg);
backdrop-filter: blur(16px);
```

### 6.4 卡片

- 背景：`var(--bg-card)`（白色）
- 边框：`1px solid var(--border-subtle)`
- 圆角：`var(--radius-lg)`
- 阴影：`var(--shadow-sm)`
- hover：`border-color: var(--border-default); box-shadow: var(--shadow-md);`

### 6.5 Hero 区域

- 背景：`var(--bg-card)`
- 白色卡片，带轻微阴影

### 6.6 Pill 标签

```css
display: inline-flex;
align-items: center;
padding: 4px 10px;
border-radius: 999px;
background: rgba(79,141,240,0.08);
color: var(--text-accent);
font-size: 11px;
font-weight: 600;
```

### 6.7 Eyebrow 标签

```css
width: fit-content;
display: inline-flex;
align-items: center;
padding: 4px 10px;
border-radius: 999px;
background: rgba(79,141,240,0.08);
color: var(--text-accent);
font-size: 11px;
font-weight: 600;
letter-spacing: 0.08em;
text-transform: uppercase;
```

### 6.8 按钮

**主按钮：**
```css
min-height: 36px;
padding: 0 16px;
border-radius: var(--radius-sm);
border: 1px solid transparent;
background: linear-gradient(135deg, var(--primary-300), var(--primary-400));
color: #fff;
```

**次按钮：**
```css
background: transparent;
color: var(--text-secondary);
border-color: var(--border-subtle);
```

### 6.9 搜索框

```css
background: var(--bg-input);
border: 1px solid var(--border-subtle);
border-radius: var(--radius-sm);
transition: box-shadow 0.22s ease, border-color 0.22s ease;
```

聚焦状态：
```css
border-color: var(--primary-300);
box-shadow: 0 0 0 2px rgba(79,141,240,0.14), var(--shadow-md);
```

### 6.10 表格

- 表头背景：`var(--bg-elevated)`
- 行背景：`var(--bg-card)`
- 行 hover：`var(--bg-card-hover)`
- 边框：`1px solid var(--border-subtle)`

### 6.11 分段控件（Tab Strip）

```css
border-radius: 7px 7px 0 0;
border: 1px solid transparent;
border-bottom: 0;
padding: 0 9px;
font-size: 11px;
background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(79,141,240,0.04));
color: var(--text-muted);
```

激活态：
```css
color: var(--text-primary);
border-color: var(--border-subtle);
background: linear-gradient(180deg, rgba(255,255,255,0.08), transparent 60%), var(--bg-card);
box-shadow: 0 -1px 0 var(--bg-card), var(--shadow-sm);
```

## 7. 设计模式

### 7.1 背景模式

页面背景使用纯色：

```css
body {
  background: var(--bg-root);
}
```

### 7.2 字体禁用规则

- 不要使用 `--vp-lime: #BDD646` 作为界面主色（仅限 Logo）
- 不要使用 Poppins/Open Sans（改用 Inter + JetBrains Mono）
- 不要使用深色主题作为默认界面

### 7.3 金融显示颜色（港式惯例）

涨跌色在浅色和深色主题下都保持不变：

```css
/* 涨跌色保持不变 */
--vp-danger: #B23A48;   /* 上涨（红色） */
--vp-green: #20A06E;    /* 下跌（绿色） */
```

## 8. 最小实现 Token

```css
:root {
  /* Primary Blue */
  --primary-900: #0a1628;
  --primary-800: #0f2240;
  --primary-700: #16325f;
  --primary-600: #1d4580;
  --primary-500: #245aa4;
  --primary-400: #2d6ad2;
  --primary-300: #4f8df0;
  --primary-200: #7ab0ff;
  --primary-100: #bcd8ff;

  /* Accent */
  --accent-cyan: #14b8d6;
  --accent-indigo: #5b74f5;

  /* 保留港式惯例 */
  --vp-danger: #B23A48;
  --vp-green: #20A06E;

  /* 布局 */
  --sidebar-width: 228px;
  --header-height: 56px;

  /* 圆角 */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 22px;

  /* 过渡 */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.25s ease;
  --transition-slow: 0.35s ease;
}
```

## 9. 响应式断点

| 断点 | 布局变化 |
|------|----------|
| ≤960px | 侧边栏变为顶部导航 |
| ≤1100px | Hero 和 Dashboard Grid 变为单列 |
| ≤900px | Card Grid 变为 2 列 |
| ≤720px | Card Grid 变为单列 |

## 10. 设计资产

- **图标库**：使用 SVG 内联图标，stroke-width: 1.8
- **头像**：渐变背景 `linear-gradient(135deg, var(--primary-300), var(--accent-indigo))`
- **圆角**：8px / 12px / 16px / 22px 四级
