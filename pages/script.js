const productCheckboxes = Array.from(document.querySelectorAll("[data-product-checkbox]"));
const selectedCount = document.querySelector("[data-selected-count]");
const productGroups = Array.from(document.querySelectorAll("[data-product-group]"));

function updateSelectedCount() {
  if (!selectedCount) return;
  const total = productCheckboxes.filter((checkbox) => checkbox.checked).length;
  selectedCount.textContent = String(total);
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
