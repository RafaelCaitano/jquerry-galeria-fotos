$(document).ready(function() {
    $("#formularioTarefa").submit(function(event) {
        event.preventDefault(); 

        const nomeTarefa = $("#nomeTarefa").val();

        if (nomeTarefa.trim() !== "") { 
            $("#listaTarefas").append("<li>" + nomeTarefa + "</li>");
            $("#nomeTarefa").val("");
        } else {
            alert("Por favor, insira o nome da tarefa."); 
        }
    });

    $("#listaTarefas").on("click", "li", function() {
        $(this).toggleClass("concluida");
    });
});