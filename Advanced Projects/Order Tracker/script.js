const status = document.getElementById("status");
const button = document.getElementById("start-btn");

function Wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function Order() {
  button.disabled = true;

  await Wait(1000);
  status.textContent = "Order Placed.";

  await Wait(1000);
  status.textContent = "Preparing Order...";

  await Wait(1000);
  status.textContent = "Out For Delivery...";

  await Wait(1000);
  status.textContent = "Delivered.";

  button.disabled = false;
}

button.addEventListener("click", Order);
