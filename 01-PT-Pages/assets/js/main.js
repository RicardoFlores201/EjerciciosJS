/**
 * Carga solamente cuando se ha renderizado por completo el DOM
 */
window.addEventListener("DOMContentLoaded", ()=>{

    //Captura el valor del tag
    let input = document.querySelector('.main_input');
    let text = document.querySelector('.main_text');

    //"Keydown => 
    // Evento: Captura cuando se acciona una tecla 
    //"
    input.addEventListener("keydown", (e)=>{
        let search = input.value;

        //trim() => elimina los espacios vacios
        if(search.trim() != "" && e.code == "Enter"){

            /**
             * Crea una expresión regular con el texto de búsqueda
             * - Parámetro 1: search (patrón a buscar)
             * - Parámetro 2: "gi" (banderas)
             *   - g: busca TODAS las coincidencias (global)
             *   - i: ignora mayúsculas/minúsculas (case insensitive)
             */
            let regExp = new RegExp(search, "gi");

            /**
             * Resalta las coincidencias encontradas en el texto
             * - text.textContent: obtiene solo el texto sin HTML
             * - replace(regExp, "<span class='text_search'>$&</span>"):
             *   - Busca todas las coincidencias usando la expresión regular
             *   - $& representa la coincidencia encontrada
             *   - Envuelve cada coincidencia en un <span> con clase CSS para resaltarla
             * - text.innerHTML: actualiza el contenido HTML del elemento
             */
            text.innerHTML = text.textContent.replace(regExp,"<span class='text_search'>$&</span>")
        }
    });

});