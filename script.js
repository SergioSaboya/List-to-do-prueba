const $btnAgregar = document.querySelector('.btn_agregar')
const $templateList = document.querySelector('template').content
const $containerList = document.querySelector('.container_list')
const $ulList = document.querySelector('.ul_list')
const $containerBtn = document.querySelector('.container_btn')
const $containerBtnItem = document.querySelector('.container_btn_item')
const $herramientas = document.querySelector('.herramientas')
const $itemLista  = document.querySelector('.item_lista')


const $inputAgregar = document.querySelector('.input_agregar')
const fragment = new DocumentFragment()

const trash =[]

// Constructor
class Tarea{
 constructor(id,text){
    this.id=id
    this.text=text
 }
}

// Funciones
const funcionAgregar=()=>{

    const fecha = new Date()
    const tiempo = `${fecha.getFullYear()}${fecha.getDate()}${fecha.getHours()}${fecha.getMinutes()}${fecha.getSeconds()}${fecha.getMilliseconds()}`
    $templateList.querySelector('p').textContent = $inputAgregar.value
    var cloneTemplateList = $templateList.cloneNode(true)
    fragment.appendChild(cloneTemplateList)
    $ulList.appendChild(fragment)   
    const item = new Tarea(tiempo,$inputAgregar.value)
    $inputAgregar.value =''
    console.log($ulList)
    }



const funcionModificar =()=>{
        
}


const funcionRemover = ()=>{
    // $ulList.removeChild($ulList.childNodes.classList.contains('seleccionado'))
    console.log('objeto eliminado')

}


// const Seleccionar =()=>{


// }




// $ulList.addEventListener('click',(e)=>{{}})



// EVENTS    

$herramientas.addEventListener('click',(e)=>{
    if(e.target.classList.contains('trash_btn')){
        funcionRemover()
    }
     else if(e.target.classList.contains('edit_btn')){
        console.log('edit btn funciona')
        funcionModificar()
    }
})


$containerBtn.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn_agregar')){
        if($inputAgregar.value ==''){
            alert('Debes agregar una tarea')
        }
        else{
            funcionAgregar()
            }
    }
    e.stopImmediatePropagation()
})


$containerBtnItem.addEventListener('click',(e)=>{
    console.log('objeto eliminado')
e.stopImmediatePropagation()})



$inputAgregar.addEventListener('keyup',(e)=>{
    if(e.keyCode===13){
        if($inputAgregar.value !==''){
        funcionAgregar()
    }
    else{
        alert('Debes agregar una tarea')
    }
    }
})





