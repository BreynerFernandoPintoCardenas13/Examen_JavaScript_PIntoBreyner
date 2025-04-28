function formulario(){
    const form = document.getElementById('form-section')
    form.id = 'receta-form';
    form.innerHTML = 
    `<div class="div__receta">
        <label id= "label-style">Nombre de la receta:
            <input type="text" id="nombre-receta" requerid />
         </label>
         <label id= "label-ingredientes">Ingredientes:
            <input type="text" id="ingrediente" requerid />
         </label>
         <label id= "label-instrucciones">instrucciones:
            <input type="text" id="instrucciones" requerid />
         </label>
         <label id= "label-preparacion">tiempo de preparacion:
            <input type="number" id="preparacion" requerid />
         </label>
         <label id= "label-porciones">Porciones:
            <input type="number" id="porciones" requerid />
         </label>
         <label id= "label-categoria">Categoria:
            <select id="categoria">
                <option value="Desayuno">Desayuno</option>
                <option value="Almuerzo">Almuerzo</option>
                <option value="Cena">Cena</option>
                <option value="Postre">Postre</option>
            </select>
         </label>
          <label id= "label-dificultad">Dificultad:
            <select id="dificultad">
                <option value="Facil">Facil</option>
                <option value="Medio">Medio</option>
                <option value="Dificil">Dificil</option>
            </select>
         </label>
    </div>
    <div class="div_button"> 
    <button type="submit" id="submit-button">Crear Receta</button>
    </div>
    `
    return form
}
formulario()


document.addEventListener('DOMContentLoaded', () => {
    const form= document.getElementById('receta-form')
    form.addEventListener('submit',  (e) =>{
        const receta={
            name: document.getElementById('nombre-receta')
            
        }
        
        alert(receta.name);
        function guardarlocalStorage(recetas, receta){
            localStorage.setItem(recetas, JSON.stringify(receta))
        }
        guardarlocalStorage()
    })
    

}
)




