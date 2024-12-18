let timer;

function hideRequiredTagForResponseObjects() {
  document.querySelectorAll("h4").forEach((h4Element) => {
    if (h4Element.innerText !== "Response") {
      return;
    }

    h4Element.parentElement.parentElement
      .querySelectorAll(".py-6.border-gray-100 .text-red-600")
      .forEach((requiredElement) => {
        requiredElement.style.display = "none";
      });
  });

  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(hideRequiredTagForResponseObjects, 10);
}

hideRequiredTagForResponseObjects();
