const localContent = $("#localContent");

function getPokemon(valor) {
     $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + valor,
        method: "get",
        dataType: "json"
     })
   
     .done(function(data){
          let content = "";
          
          
          if(data.types.length > 1){
               content = "<div class=\"col-6" + data.types[0].type.name + "\"><div>" + data.types[0].type.name + "</div></div>";
          }
          content = content.concat("<div class=\"center\"><img alt=\"\" src=" + data.sprites.other.dream_world.front_default + "><div>" + data.id + " - " + data.name + "</div></div>");
          localContent.html(content);
     })
     .fail(function(){ 
          localContent.html("<div class=\"center\">\"There is no data! There are still pokémons to be identified.\" (Pokémon, I Choose You!)</div>");
        }); 

        function isEmpty(){
          // Verifica se o input está vazio
          if($.trim($("#pokemon").val()) === ""){
            // imprime mensagem de erro  
            localContent.html("<div class=\"center\">Enter the name|id of the pokémon to perform the search.</div>");
          } else {
            // senão chama a getPokemon passando como argumento o valor do input
            getPokemon($("#pokemon").val().toLowerCase());
          }
        }
   }