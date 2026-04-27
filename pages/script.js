const productCheckboxes = Array.from(document.querySelectorAll("[data-product-checkbox]"));
const selectedCount = document.querySelector("[data-selected-count]");
const productGroups = Array.from(document.querySelectorAll("[data-product-group]"));
const selectedProductsContainer = document.querySelector("[data-selected-products]");
const detailCount = document.querySelector("[data-detail-count]");
const exportPdfButton = document.querySelector("[data-export-pdf]");
const selectedProductsKey = "csop-selected-products";

const productDetails = {
  "7233.HK": {
    name: "南方东英沪深300指数每日杠杆(2x)产品",
    bullets: ["香港首支A股杠杆产品", "捕捉A股收市后以及重大节假日的交易机会"],
  },
  "7262.HK": {
    name: "南方东英日经225每日杠杆(2x)产品",
    bullets: ["全球（除日本外）首支日经225指数杠杆产品"],
  },
  "7515.HK": {
    name: "南方东英日经225每日反向(-2x)产品",
    bullets: ["全球（除日本外）首支日经225指数反向产品"],
  },
  "7200.HK": {
    name: "南方东英恒生指数每日杠杆(2x)产品",
    bullets: ["香港首批追踪本地指数的两倍杠杆产品", "香港活跃成交ETP前十"],
  },
  "7300.HK": {
    name: "南方东英恒生指数每日反向(-1x)产品",
    bullets: ["香港首批追踪本地指数的一倍反向产品"],
  },
  "7500.HK": {
    name: "南方东英恒生指数每日反向(-2x)产品",
    bullets: ["香港首支恒指两倍反向产品", "长期位居香港活跃成交ETP前十"],
  },
  "7226.HK": {
    name: "南方东英恒生科技指数每日杠杆(2x)产品",
    bullets: ["全球最大恒生科技杠杆产品", "长期位居香港活跃成交ETP前五"],
  },
  "7552.HK": {
    name: "南方东英恒生科技指数每日反向(-2x)产品",
    bullets: ["全球最大恒生科技做空产品", "长期位居香港活跃成交ETP前五"],
  },
  "7568.HK": {
    name: "南方东英纳斯达克100指数每日反向(-2x)产品",
    bullets: ["香港最大的纳指做空产品"],
  },
  "7266.HK": {
    name: "南方东英纳斯达克100指数每日杠杆(2x)产品",
    bullets: ["香港最大的纳指杠杆产品"],
  },
  "7299.HK": {
    name: "南方东英黄金期货每日杠杆(2x)产品",
    bullets: ["全港唯一黄金期货两倍杠杆产品"],
  },
  "7376.HK": {
    name: "南方东英比特币期货每日反向(-1x)产品",
    bullets: ["亚洲首支比特币期货反向产品"],
  },
  "7747.HK": {
    name: "南方东英三星电子每日杠杆(2x)产品",
    bullets: ["全球唯一一支三星杠杆产品", "成为韩股每日收盘后的“盘后”风向", "成立不到一年收益已超1000%"],
  },
  "7347.HK": {
    name: "南方东英三星电子每日反向(-2x)产品",
    bullets: ["全球唯一一支三星做空产品", "成为韩股每日收盘后的“盘后”风向"],
  },
  "7709.HK": {
    name: "南方东英海力士每日杠杆(2x)产品",
    bullets: ["全球唯一一支SK海力士杠杆产品", "亚洲最大、全球第三大个股杠反产品", "常位居韩国本地购买前三的港股ETF，成为韩股每日收盘后的“盘后”风向"],
  },
  "2802.HK": {
    name: "南方东英国指备兑认购期权主动型ETF",
    bullets: ["目标年化派息率21%", "月月派息", "入手门槛低于同类产品"],
  },
  "3053.HK": {
    name: "南方东英港元货币市场ETF",
    bullets: ["七日年化收益约2.2263%"],
  },
  "9096.HK": {
    name: "南方东英美元货币市场ETF",
    bullets: ["七日年化收益约3.6650%"],
  },
  "3433.HK": {
    name: "南方东英富时美国国债20年+指数ETF",
    bullets: ["港版TLT", "优势在于免美股预扣股息税和外汇成本"],
  },
  "3147.HK": {
    name: "南方东英中国创业板指数ETF",
    bullets: ["香港首支也是唯一一支中国创业板ETF", "924行情时曾一度成为投资窗口"],
  },
  "3033.HK": {
    name: "南方东英恒生科技指数ETF",
    bullets: ["全球首支且规模最大的恒生科技指数ETF", "资产规模超800亿港元", "常年位居香港活跃成交ETP前三，也是成交量最大的港股通ETF"],
  },
  "3174.HK": {
    name: "南方东英恒生生物科技ETF",
    bullets: ["港股通标的", "北水直接参与港股医药的重要通道"],
  },
  "3441.HK": {
    name: "南方东英富时东西股票精选ETF",
    bullets: ["港股通标的，可无溢价、无额度限制及更长交易时间在内地参与港美股", "追踪港股高市值和美股高自由现金流收益率的股票，回撤小，曾保持11个月连续正收益", "高息股股息再投资，捕捉长期复利"],
  },
  "3442.HK": {
    name: "南方东英恒生港美科技ETF",
    bullets: ["港股通标的", "可无溢价、无额度限制及更长交易时间在内地参与MAG7"],
  },
  "3443.HK": {
    name: "南方东英富时香港股票ETF",
    bullets: ["港股通标的", "资产管理规模超过140亿港元，机构投资者众多", "相较于恒生指数标的范围更广"],
  },
  "3431.HK": {
    name: "南方东英富时香港韩国科技+指数ETF",
    bullets: ["港股通标的，是港股通内第一支参与韩股的标的", "内地无溢价无额度限制直接配置三星、海力士的通道"],
  },
  "3432.HK": {
    name: "南方东英MSCI港股通精选ETF",
    bullets: ["港股通标的，资产规模超过110亿港元", "成分股包括泡泡玛特、百济神州等出海企业", "捕捉新消费腾飞的涨幅"],
  },
  "3469.HK": {
    name: "南方东英恒生港股通红利ETF",
    bullets: ["港股通标的", "选股更为均衡"],
  },
  "2830.HK": {
    name: "南方东英沙特阿拉伯ETF",
    bullets: ["亚太首支、全球规模最大沙特ETF", "资产规模超100亿港元"],
  },
  "3034.HK": {
    name: "南方东英纳斯达克100 ETF",
    bullets: ["捕捉美股夜盘重大事件窗口"],
  },
  "3153.HK": {
    name: "南方东英日经225指数ETF",
    bullets: ["香港首支日经225指数ETF"],
  },
  "3454.HK": {
    name: "南方东英美股七巨头ETF",
    bullets: ["香港首支美股七巨头ETF"],
  },
  "3066.HK": {
    name: "南方东英比特币期货ETF",
    bullets: ["香港首支、亚洲最大比特币期货ETF", "相对现货及虚拟资产存放更加安全"],
  },
  "3068.HK": {
    name: "南方东英以太币期货ETF",
    bullets: ["全球首支以太币期货ETF", "相对现货及虚拟资产存放更加安全"],
  },
  "3030.HK": {
    name: "南方东英黄金ETF",
    bullets: ["香港最大本地黄金ETF，提供实物黄金申赎选项", "在所有香港上市的实物黄金ETF中入场费最低"],
  },
};

function getSelectedProducts() {
  return productCheckboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => {
      const option = checkbox.closest(".product-option");
      const code = option.querySelector("strong").textContent.trim();
      const detail = productDetails[code];
      return {
        code,
        name: detail ? detail.name : option.querySelector("span").textContent.trim(),
      };
    });
}

function saveSelectedProducts() {
  if (productCheckboxes.length === 0) return;
  try {
    localStorage.setItem(selectedProductsKey, JSON.stringify(getSelectedProducts()));
  } catch (error) {
    // Storage can be unavailable in some strict browser modes.
  }
}

function updateSelectedCount() {
  if (!selectedCount) return;
  const total = productCheckboxes.filter((checkbox) => checkbox.checked).length;
  selectedCount.textContent = String(total);
  saveSelectedProducts();
}

function syncGroupSelectAll(group) {
  const checkboxes = Array.from(group.querySelectorAll("[data-product-checkbox]"));
  const selectAll = group.querySelector("[data-select-all]");

  if (!selectAll || checkboxes.length === 0) return;

  const checkedCount = checkboxes.filter((checkbox) => checkbox.checked).length;
  selectAll.checked = checkedCount === checkboxes.length;
  selectAll.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
}

productGroups.forEach((group) => {
  const selectAll = group.querySelector("[data-select-all]");
  const checkboxes = Array.from(group.querySelectorAll("[data-product-checkbox]"));

  if (selectAll) {
    selectAll.addEventListener("change", () => {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
      });
      syncGroupSelectAll(group);
      updateSelectedCount();
    });
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      syncGroupSelectAll(group);
      updateSelectedCount();
    });
  });
});

updateSelectedCount();

function loadSelectedProducts() {
  try {
    return JSON.parse(localStorage.getItem(selectedProductsKey)) || [];
  } catch (error) {
    return [];
  }
}

function renderSelectedProducts() {
  if (!selectedProductsContainer) return;

  const selectedProducts = loadSelectedProducts()
    .filter((product) => productDetails[product.code])
    .map((product) => ({
      code: product.code,
      ...productDetails[product.code],
    }));

  if (detailCount) {
    detailCount.textContent = String(selectedProducts.length);
  }

  if (selectedProducts.length === 0) {
    selectedProductsContainer.innerHTML = `
      <article class="selected-empty">
        <h2>暂未选择产品</h2>
        <p>请返回产品列表页选择您感兴趣的产品。</p>
      </article>
    `;
    return;
  }

  selectedProductsContainer.innerHTML = selectedProducts
    .map((product, index) => `
      <article class="selected-product-card">
        <div class="selected-product-index">${String(index + 1).padStart(2, "0")}</div>
        <div class="selected-product-copy">
          <h2>${product.name}</h2>
          <strong>${product.code}</strong>
          <ul>
            ${product.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </div>
      </article>
    `)
    .join("");
}

renderSelectedProducts();

if (exportPdfButton) {
  exportPdfButton.addEventListener("click", () => {
    window.print();
  });
}
