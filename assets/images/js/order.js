const form = document.getElementById("orderForm");
const itemSelect = document.getElementById("item");
const quantityInput = document.getElementById("quantity");
const totalPriceEl = document.getElementById("totalPrice");

function updateTotal() {
  if (!itemSelect.value || !quantityInput.value) return;

  const price = itemSelect.value.split("|")[1];
  const qty = quantityInput.value;
  const total = price * qty;

  totalPriceEl.textContent = `Total: GH₵${total}`;
}

itemSelect.addEventListener("change", updateTotal);
quantityInput.addEventListener("input", updateTotal);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;
  const details = document.getElementById("details").value;

  const [itemName, price] = itemSelect.value.split("|");
  const quantity = quantityInput.value;
  const total = price * quantity;

  const message = `
🍩 Celebrity Doughnut Order

Name: ${name}
Phone: ${phone}

Item: ${itemName}
Price: GH₵${price}
Quantity: ${quantity}
Total: GH₵${total}

Details: ${details}
Location: ${location}

Payment: Mobile Money
`;

  const whatsappNumber = "233547058686";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});
