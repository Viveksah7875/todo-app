const input = document.querySelector("input");
input.style.fontFamily = "monospace";

// ✅ Enter key listener
document.getElementById("itemInput").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});

// ✅ Main function to add task
function addItem() {
  const input = document.getElementById("itemInput");
  const value = input.value.trim();

  if (value === "") {
    alert("Please enter something!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = value;

  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.classList.add("delete-btn");

  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(delBtn);

  document.getElementById("itemList").appendChild(li);

  input.value = "";
}
