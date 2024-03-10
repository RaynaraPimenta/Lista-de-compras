function adicionarItem() {
    var itemInput = document.getElementById("itemInput");
    var item = itemInput.value.trim();

    if (item === "") {
        alert("Por favor, insira um item!");
        return;
    }

    var lista = document.getElementById("lista");

    var li = document.createElement("li");
    li.className = "list-group-item";

    var spanItem = document.createElement("span");
    spanItem.textContent = item;
    li.appendChild(spanItem);

    var divBotoes = document.createElement("div");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "mr-2";
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            spanItem.style.textDecoration = "line-through";
        } else {
            spanItem.style.textDecoration = "none";
        }
    });
    divBotoes.appendChild(checkbox);

    var editarBtn = document.createElement("button");
    editarBtn.className = "btn btn-primary btn-sm mr-2";
    editarBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editarBtn.addEventListener("click", function () {
        var novoItem = prompt("Editar item:", item);
        if (novoItem !== null) {
            item = novoItem.trim();
            spanItem.textContent = item;
        }
    });
    divBotoes.appendChild(editarBtn);

    var excluirBtn = document.createElement("button");
    excluirBtn.className = "btn btn-danger btn-sm";
    excluirBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    excluirBtn.addEventListener("click", function () {
        if (confirm("Tem certeza que deseja excluir este item?")) {
            li.remove();
        }
    });
    divBotoes.appendChild(excluirBtn);

    li.appendChild(divBotoes);

    lista.appendChild(li);

    itemInput.value = "";
}
