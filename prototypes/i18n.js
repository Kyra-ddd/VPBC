// Product Center - Shared i18n
// Supported languages: en, zh-CN, zh-HK

const translations = {
  en: {}, // English is the default/source language
  'zh-CN': {
    // Sidebar
    'Product Center': '产品中心',
    'Product Management': '产品管理',
    'Share Class': '份额类别',
    'Lifecycle': '生命周期',
    'Fee Structure': '费率结构',
    'System': '系统',
    'Settings': '设置',

    // Common actions
    'New Product': '新增产品',
    'New Share Class': '新增份额类别',
    'Edit Product': '编辑产品',
    'View Share Classes': '查看份额类别',
    'Search': '搜索',
    'Reset': '重置',
    'View': '查看',
    'Cancel': '取消',
    'Save Product': '保存产品',

    // Page titles / subtitles
    'Manage fund masterdata, share classes and lifecycle': '管理基金主数据、份额类别和生命周期',
    'Manage fund share classes, identifiers and dealing terms': '管理基金份额类别、标识符和交易条款',

    // Breadcrumb
    'Product Center': '产品中心',
    'Product Management': '产品管理',
    'Share Class': '份额类别',

    // Filters
    'Fund Code': '基金代码',
    'Fund Name': '基金名称',
    'Share Class Name': '份额类别名称',
    'ISIN': 'ISIN',
    'Fund Type': '基金类型',
    'Class Currency': '类别货币',
    'All Currencies': '全部货币',
    'Status': '状态',
    'Domicile': '注册地',
    'All Types': '全部类型',
    'All Status': '全部状态',
    'All': '全部',

    // Options
    'Equity Fund': '股票基金',
    'Bond Fund': '债券基金',
    'Mixed Asset Fund': '混合资产基金',
    'Money Market Fund': '货币基金',
    'Index Fund': '指数基金',
    'ETF': 'ETF',
    'Fund of Funds': '基金中的基金',
    'Structured Fund': '结构型基金',
    'Other': '其他',
    'Active': '运作中',
    'Inactive': '暂停',
    'Draft': '草稿',
    'Terminated': '终止',
    'Closed': '已关闭',
    'Hong Kong': '香港',
    'Luxembourg': '卢森堡',
    'Ireland': '爱尔兰',
    'Cayman Islands': '开曼群岛',
    'Mainland China': '中国内地',

    // Placeholders
    'e.g. VP0001': '例如 VP0001',
    'Search name...': '搜索名称...',
    'e.g. HK0000012345': '例如 HK0000012345',

    // Table headers - product
    'Fund Name (EN)': '基金名称（英文）',
    'Fund Name (TC)': '基金名称（繁中）',
    'Type': '类型',
    'Launch Date': '成立日期',
    'Base Currency': '基础货币',
    'Fund Manager': '基金管理人',
    'Risk Level': '风险等级',
    'Actions': '操作',

    // Table headers - share class
    'Share Class Name (EN)': '份额类别名称（英文）',
    'VPFS Class ID': 'VPFS Class ID',
    'Currency': '货币',
    'Class Status': '类别状态',
    'Cutoff Time': '截止时间',
    'Dealing Frequency': '交易频率',
    'Mgmt Fee (%)': '管理费(%)',
    'Redeem Settlement': '赎回结算',

    // Pagination
    'Showing 1-7 of 24 products': '显示 1-7 条，共 24 条产品',
    'Showing 1-6 of 18 share classes': '显示 1-6 条，共 18 条份额类别',

    // Detail page card titles
    'Basic Information': '基本信息',
    'Key Dates': '关键日期',
    'Identification Codes': '标识码',
    'Service Providers': '服务机构',
    'Investment Profile': '投资概况',
    'Risk & Limits': '风险与限额',
    'Investor Restrictions': '投资者限制',

    // Detail labels
    'Fund Code:': '基金代码：',
    'Fund Name (English):': '基金名称（英文）：',
    'Fund Name (Traditional Chinese):': '基金名称（繁中）：',
    'Fund Name (Simplified Chinese):': '基金名称（简中）：',
    'Fund Type:': '基金类型：',
    'Umbrella / OFC Name:': '伞形/OFC名称：',
    'Sub Fund Code:': '子基金代码：',
    'Domicile / Jurisdiction:': '注册地/司法管辖区：',
    'Primary Regulator:': '主要监管机构：',
    'Base Currency:': '基础货币：',
    'Fund Status:': '基金状态：',
    'Complex Product:': '复杂产品：',
    'Professional Investors Only:': '仅专业投资者：',
    'Application Submission Date:': '申请提交日期：',
    'Authorization Date:': '授权日期：',
    'IOP Start Date:': 'IOP开始日期：',
    'Operation Start Date:': '运作开始日期：',
    'Listing Date:': '上市日期：',
    'Termination Date:': '终止日期：',
    'LEI Number:': 'LEI编号：',
    'GIIN Number:': 'GIIN编号：',
    'Fund Manager:': '基金管理人：',
    'Fund Manager LEI:': '基金管理人LEI：',
    'Sub Manager:': '副管理人：',
    'Investment Advisor:': '投资顾问：',
    'Trustee / Administrator:': '受托人/行政管理人：',
    'Custodian / Prime Broker:': '托管人/主经纪商：',
    'Sub Custodian:': '分托管人：',
    'Auditor:': '审计师：',
    'Primary Instrument Type:': '主要投资工具类型：',
    'Passive or Active Fund:': '被动或主动基金：',
    'Investment Market Focus:': '投资市场重点：',
    'Morningstar Category:': 'Morningstar分类：',
    'Benchmark:': '基准指数：',
    'Benchmark Code:': '基准指数代码：',
    'Hedging Policy (Fund Level):': '对冲政策（基金层面）：',
    'Asset Allocation Table:': '资产配置表：',
    'Investment Objective:': '投资目标：',
    'Investment Strategy:': '投资策略：',
    'Risk Level:': '风险等级：',
    'Max Leverage Ratio (%):': '最高杠杆比率(%)：',
    'Max Derivatives Ratio (%):': '最高衍生品比率(%)：',
    'Borrowing Limit (%):': '借款限额(%)：',
    'Stop Loss Limit:': '止损限额：',
    'Stop Loss Alert:': '止损预警：',
    'Restriction on Investor\'s Nationality:': '投资者国籍限制：',
    'Restriction on Investor\'s Residency:': '投资者居住地限制：',
    'Registration Region:': '注册地区：',
    'No': '否',
    'Yes': '是',
    'View Asset Allocation Document': '查看资产配置文档',

    // Modal tabs
    'Basic': '基本信息',
    'Dates': '关键日期',
    'Providers': '服务机构',
    'Investment': '投资概况',
    'Risk & Limits': '风险与限额',

    // Modal labels
    'Fund Code': '基金代码',
    'Fund Name (English)': '基金名称（英文）',
    'Fund Name (Traditional Chinese)': '基金名称（繁中）',
    'Fund Name (Simplified Chinese)': '基金名称（简中）',
    'Select type': '选择类型',
    'Domicile / Jurisdiction': '注册地/司法管辖区',
    'Select domicile': '选择注册地',
    'Primary Regulator': '主要监管机构',
    'Select currency': '选择货币',
    'Fund Status': '基金状态',
    'Select status': '选择状态',
    'Launch Date': '成立日期',
    'Umbrella / OFC Name': '伞形/OFC名称',
    'Optional': '可选',
    'Sub Fund Code': '子基金代码',
    'Registration Region': '注册地区',
    'Complex Product': '复杂产品',
    'Professional Investors Only': '仅专业投资者',
    'Application Submission Date': '申请提交日期',
    'Authorization Date': '授权日期',
    'IOP Start Date': 'IOP开始日期',
    'Operation Start Date': '运作开始日期',
    'Listing Date': '上市日期',
    'Termination Date': '终止日期',
    'Enter fund manager name': '输入基金管理人名称',
    'Fund Manager LEI': '基金管理人LEI',
    '20-character LEI': '20位LEI编码',
    'Sub Manager': '副管理人',
    'Investment Advisor': '投资顾问',
    'Trustee / Administrator': '受托人/行政管理人',
    'Custodian / Prime Broker': '托管人/主经纪商',
    'Sub Custodian': '分托管人',
    'Auditor': '审计师',
    'LEI Number': 'LEI编号',
    'GIIN Number': 'GIIN编号',
    'XXXXXX.XXXXX.XX.XX': 'XXXXXX.XXXXX.XX.XX',
    'Primary Instrument Type': '主要投资工具类型',
    'Passive or Active Fund': '被动或主动基金',
    'Select': '请选择',
    'Investment Market Focus': '投资市场重点',
    'Select focus': '选择市场重点',
    'Morningstar Category': 'Morningstar分类',
    'Benchmark': '基准指数',
    'e.g. MSCI All Country Asia ex Japan Index': '例如 MSCI 所有国家亚洲除日本指数',
    'Benchmark Code': '基准指数代码',
    'e.g. MXASJNU': '例如 MXASJNU',
    'Hedging Policy (Fund Level)': '对冲政策（基金层面）',
    'Select policy': '选择对冲政策',
    'No Hedging': '不对冲',
    'Fully Hedged': '完全对冲',
    'Partially Hedged': '部分对冲',
    'Asset Allocation Table': '资产配置表',
    'Investment Objective': '投资目标',
    'Describe the investment objective...': '描述投资目标...',
    'Investment Strategy': '投资策略',
    'Describe the investment strategy...': '描述投资策略...',
    'Risk Level': '风险等级',
    'Select level': '选择等级',
    '1 - Lowest': '1 - 最低',
    '2 - Low': '2 - 低',
    '3 - Medium': '3 - 中',
    '4 - High': '4 - 高',
    '5 - Highest': '5 - 最高',
    'Max Leverage Ratio (%)': '最高杠杆比率(%)',
    'Max Derivatives Ratio (%)': '最高衍生品比率(%)',
    'Borrowing Limit (%)': '借款限额(%)',
    'Stop Loss Limit': '止损限额',
    'Stop Loss Alert': '止损预警'
  },
  'zh-HK': {
    // Sidebar
    'Product Center': '產品中心',
    'Product Management': '產品管理',
    'Share Class': '份額類別',
    'Lifecycle': '生命週期',
    'Fee Structure': '費率結構',
    'System': '系統',
    'Settings': '設置',

    // Common actions
    'New Product': '新增產品',
    'New Share Class': '新增份額類別',
    'Edit Product': '編輯產品',
    'View Share Classes': '查看份額類別',
    'Search': '搜索',
    'Reset': '重置',
    'View': '查看',
    'Cancel': '取消',
    'Save Product': '儲存產品',

    // Page titles / subtitles
    'Manage fund masterdata, share classes and lifecycle': '管理基金主數據、份額類別和生命週期',
    'Manage fund share classes, identifiers and dealing terms': '管理基金份額類別、標識符和交易條款',

    // Breadcrumb
    'Product Center': '產品中心',
    'Product Management': '產品管理',
    'Share Class': '份額類別',

    // Filters
    'Fund Code': '基金代碼',
    'Fund Name': '基金名稱',
    'Share Class Name': '份額類別名稱',
    'ISIN': 'ISIN',
    'Fund Type': '基金類型',
    'Class Currency': '類別貨幣',
    'All Currencies': '全部貨幣',
    'Status': '狀態',
    'Domicile': '註冊地',
    'All Types': '全部類型',
    'All Status': '全部狀態',
    'All': '全部',

    // Options
    'Equity Fund': '股票基金',
    'Bond Fund': '債券基金',
    'Mixed Asset Fund': '混合資產基金',
    'Money Market Fund': '貨幣基金',
    'Index Fund': '指數基金',
    'ETF': 'ETF',
    'Fund of Funds': '基金中的基金',
    'Structured Fund': '結構型基金',
    'Other': '其他',
    'Active': '運作中',
    'Inactive': '暫停',
    'Draft': '草稿',
    'Terminated': '終止',
    'Closed': '已關閉',
    'Hong Kong': '香港',
    'Luxembourg': '盧森堡',
    'Ireland': '愛爾蘭',
    'Cayman Islands': '開曼群島',
    'Mainland China': '中國內地',

    // Placeholders
    'e.g. VP0001': '例如 VP0001',
    'Search name...': '搜索名稱...',
    'e.g. HK0000012345': '例如 HK0000012345',

    // Table headers - product
    'Fund Name (EN)': '基金名稱（英文）',
    'Fund Name (TC)': '基金名稱（繁中）',
    'Type': '類型',
    'Launch Date': '成立日期',
    'Base Currency': '基礎貨幣',
    'Fund Manager': '基金管理人',
    'Risk Level': '風險等級',
    'Actions': '操作',

    // Table headers - share class
    'Share Class Name (EN)': '份額類別名稱（英文）',
    'VPFS Class ID': 'VPFS Class ID',
    'Currency': '貨幣',
    'Class Status': '類別狀態',
    'Cutoff Time': '截止時間',
    'Dealing Frequency': '交易頻率',
    'Mgmt Fee (%)': '管理費(%)',
    'Redeem Settlement': '贖回結算',

    // Pagination
    'Showing 1-7 of 24 products': '顯示 1-7 條，共 24 條產品',
    'Showing 1-6 of 18 share classes': '顯示 1-6 條，共 18 條份額類別',

    // Detail page card titles
    'Basic Information': '基本信息',
    'Key Dates': '關鍵日期',
    'Identification Codes': '標識碼',
    'Service Providers': '服務機構',
    'Investment Profile': '投資概況',
    'Risk & Limits': '風險與限額',
    'Investor Restrictions': '投資者限制',

    // Detail labels
    'Fund Code:': '基金代碼：',
    'Fund Name (English):': '基金名稱（英文）：',
    'Fund Name (Traditional Chinese):': '基金名稱（繁中）：',
    'Fund Name (Simplified Chinese):': '基金名稱（簡中）：',
    'Fund Type:': '基金類型：',
    'Umbrella / OFC Name:': '傘形/OFC名稱：',
    'Sub Fund Code:': '子基金代碼：',
    'Domicile / Jurisdiction:': '註冊地/司法管轄區：',
    'Primary Regulator:': '主要監管機構：',
    'Base Currency:': '基礎貨幣：',
    'Fund Status:': '基金狀態：',
    'Complex Product:': '複雜產品：',
    'Professional Investors Only:': '僅專業投資者：',
    'Application Submission Date:': '申請提交日期：',
    'Authorization Date:': '授權日期：',
    'IOP Start Date:': 'IOP開始日期：',
    'Operation Start Date:': '運作開始日期：',
    'Listing Date:': '上市日期：',
    'Termination Date:': '終止日期：',
    'LEI Number:': 'LEI編號：',
    'GIIN Number:': 'GIIN編號：',
    'Fund Manager:': '基金管理人：',
    'Fund Manager LEI:': '基金管理人LEI：',
    'Sub Manager:': '副管理人：',
    'Investment Advisor:': '投資顧問：',
    'Trustee / Administrator:': '受托人/行政管理人：',
    'Custodian / Prime Broker:': '托管人/主經紀商：',
    'Sub Custodian:': '分托管人：',
    'Auditor:': '審計師：',
    'Primary Instrument Type:': '主要投資工具類型：',
    'Passive or Active Fund:': '被動或主動基金：',
    'Investment Market Focus:': '投資市場重點：',
    'Morningstar Category:': 'Morningstar分類：',
    'Benchmark:': '基準指數：',
    'Benchmark Code:': '基準指數代碼：',
    'Hedging Policy (Fund Level):': '對沖政策（基金層面）：',
    'Asset Allocation Table:': '資產配置表：',
    'Investment Objective:': '投資目標：',
    'Investment Strategy:': '投資策略：',
    'Risk Level:': '風險等級：',
    'Max Leverage Ratio (%):': '最高槓桿比率(%)：',
    'Max Derivatives Ratio (%):': '最高衍生品比率(%)：',
    'Borrowing Limit (%):': '借款限額(%)：',
    'Stop Loss Limit:': '止損限額：',
    'Stop Loss Alert:': '止損預警：',
    'Restriction on Investor\'s Nationality:': '投資者國籍限制：',
    'Restriction on Investor\'s Residency:': '投資者居住地限制：',
    'Registration Region:': '註冊地區：',
    'No': '否',
    'Yes': '是',
    'View Asset Allocation Document': '查看資產配置文檔',

    // Modal tabs
    'Basic': '基本信息',
    'Dates': '關鍵日期',
    'Providers': '服務機構',
    'Investment': '投資概況',
    'Risk & Limits': '風險與限額',

    // Modal labels
    'Fund Code': '基金代碼',
    'Fund Name (English)': '基金名稱（英文）',
    'Fund Name (Traditional Chinese)': '基金名稱（繁中）',
    'Fund Name (Simplified Chinese)': '基金名稱（簡中）',
    'Select type': '選擇類型',
    'Domicile / Jurisdiction': '註冊地/司法管轄區',
    'Select domicile': '選擇註冊地',
    'Primary Regulator': '主要監管機構',
    'Select currency': '選擇貨幣',
    'Fund Status': '基金狀態',
    'Select status': '選擇狀態',
    'Launch Date': '成立日期',
    'Umbrella / OFC Name': '傘形/OFC名稱',
    'Optional': '可選',
    'Sub Fund Code': '子基金代碼',
    'Registration Region': '註冊地區',
    'Complex Product': '複雜產品',
    'Professional Investors Only': '僅專業投資者',
    'Application Submission Date': '申請提交日期',
    'Authorization Date': '授權日期',
    'IOP Start Date': 'IOP開始日期',
    'Operation Start Date': '運作開始日期',
    'Listing Date': '上市日期',
    'Termination Date': '終止日期',
    'Enter fund manager name': '輸入基金管理人名稱',
    'Fund Manager LEI': '基金管理人LEI',
    '20-character LEI': '20位LEI編碼',
    'Sub Manager': '副管理人',
    'Investment Advisor': '投資顧問',
    'Trustee / Administrator': '受托人/行政管理人',
    'Custodian / Prime Broker': '托管人/主經紀商',
    'Sub Custodian': '分托管人',
    'Auditor': '審計師',
    'LEI Number': 'LEI編號',
    'GIIN Number': 'GIIN編號',
    'XXXXXX.XXXXX.XX.XX': 'XXXXXX.XXXXX.XX.XX',
    'Primary Instrument Type': '主要投資工具類型',
    'Passive or Active Fund': '被動或主動基金',
    'Select': '請選擇',
    'Investment Market Focus': '投資市場重點',
    'Select focus': '選擇市場重點',
    'Morningstar Category': 'Morningstar分類',
    'Benchmark': '基準指數',
    'e.g. MSCI All Country Asia ex Japan Index': '例如 MSCI 所有國家亞洲除日本指數',
    'Benchmark Code': '基準指數代碼',
    'e.g. MXASJNU': '例如 MXASJNU',
    'Hedging Policy (Fund Level)': '對沖政策（基金層面）',
    'Select policy': '選擇對沖政策',
    'No Hedging': '不對沖',
    'Fully Hedged': '完全對沖',
    'Partially Hedged': '部分對沖',
    'Asset Allocation Table': '資產配置表',
    'Investment Objective': '投資目標',
    'Describe the investment objective...': '描述投資目標...',
    'Investment Strategy': '投資策略',
    'Describe the investment strategy...': '描述投資策略...',
    'Risk Level': '風險等級',
    'Select level': '選擇等級',
    '1 - Lowest': '1 - 最低',
    '2 - Low': '2 - 低',
    '3 - Medium': '3 - 中',
    '4 - High': '4 - 高',
    '5 - Highest': '5 - 最高',
    'Max Leverage Ratio (%)': '最高槓桿比率(%)',
    'Max Derivatives Ratio (%)': '最高衍生品比率(%)',
    'Borrowing Limit (%)': '借款限額(%)',
    'Stop Loss Limit': '止損限額',
    'Stop Loss Alert': '止損預警'
  }
};

const placeholderTranslations = {
  'e.g. VP0001': { 'zh-CN': '例如 VP0001', 'zh-HK': '例如 VP0001' },
  'Search name...': { 'zh-CN': '搜索名称...', 'zh-HK': '搜索名稱...' },
  'e.g. HK0000012345': { 'zh-CN': '例如 HK0000012345', 'zh-HK': '例如 HK0000012345' },
  'Enter English fund name': { 'zh-CN': '输入英文基金名称', 'zh-HK': '輸入英文基金名稱' },
  '輸入繁體基金名稱': { 'zh-CN': '输入繁体基金名称', 'zh-HK': '輸入繁體基金名稱' },
  '输入简体基金名称': { 'zh-CN': '输入简体基金名称', 'zh-HK': '輸入簡體基金名稱' },
  'Enter fund manager name': { 'zh-CN': '输入基金管理人名称', 'zh-HK': '輸入基金管理人名稱' },
  'e.g. MSCI All Country Asia ex Japan Index': { 'zh-CN': '例如 MSCI 所有国家亚洲除日本指数', 'zh-HK': '例如 MSCI 所有國家亞洲除日本指數' },
  'e.g. MXASJNU': { 'zh-CN': '例如 MXASJNU', 'zh-HK': '例如 MXASJNU' },
  'Describe the investment objective...': { 'zh-CN': '描述投资目标...', 'zh-HK': '描述投資目標...' },
  'Describe the investment strategy...': { 'zh-CN': '描述投资策略...', 'zh-HK': '描述投資策略...' }
};

const LANG_STORAGE_KEY = 'productCenterLang';
const originalTextNodes = [];
let currentLang = 'en';

function saveOriginalTexts() {
  const app = document.querySelector('.app');
  if (!app) return;

  const walker = document.createTreeWalker(app, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while (node = walker.nextNode()) {
    const parent = node.parentElement;
    if (!parent) continue;
    const parentTag = parent.tagName;
    if (parentTag === 'SCRIPT' || parentTag === 'STYLE') continue;

    const trimmed = node.textContent.trim();
    if (trimmed) {
      originalTextNodes.push({ node, original: node.textContent });
    }
  }
}

function restoreOriginalTexts() {
  originalTextNodes.forEach(({ node, original }) => {
    if (node.parentElement) {
      node.textContent = original;
    }
  });
}

function applyTranslations(lang) {
  if (lang === 'en') return;
  originalTextNodes.forEach(({ node, original }) => {
    if (!node.parentElement) return;
    const trimmed = original.trim();
    if (translations[lang] && translations[lang][trimmed]) {
      node.textContent = original.replace(trimmed, translations[lang][trimmed]);
    }
  });
}

function translatePlaceholders(lang) {
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    const original = el.getAttribute('data-i18n-original-placeholder') || el.placeholder;
    if (!el.getAttribute('data-i18n-original-placeholder')) {
      el.setAttribute('data-i18n-original-placeholder', original);
    }
    if (lang === 'en') {
      el.placeholder = original;
    } else if (placeholderTranslations[original] && placeholderTranslations[original][lang]) {
      el.placeholder = placeholderTranslations[original][lang];
    }
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  document.documentElement.lang = lang === 'en' ? 'en' : (lang === 'zh-CN' ? 'zh-CN' : 'zh-HK');

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const app = document.querySelector('.app');
  if (app) app.style.display = 'none';
  restoreOriginalTexts();
  applyTranslations(lang);
  translatePlaceholders(lang);
  if (app) app.style.display = '';
}

const SIDEBAR_STORAGE_KEY = 'productCenterSidebarCollapsed';

function toggleSidebar() {
  const app = document.querySelector('.app');
  if (!app) return;
  app.classList.toggle('sidebar-collapsed');
  const isCollapsed = app.classList.contains('sidebar-collapsed');
  localStorage.setItem(SIDEBAR_STORAGE_KEY, isCollapsed ? '1' : '0');
}

function initSidebar() {
  const app = document.querySelector('.app');
  if (!app) return;
  const saved = localStorage.getItem(SIDEBAR_STORAGE_KEY);
  if (saved === '1') {
    app.classList.add('sidebar-collapsed');
  }
}

function initI18n() {
  saveOriginalTexts();
  initSidebar();
  const savedLang = localStorage.getItem(LANG_STORAGE_KEY) || 'en';
  setLanguage(savedLang);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
