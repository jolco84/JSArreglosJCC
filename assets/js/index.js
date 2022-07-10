//arreglo de propiedades
const propiedadesJSON = [
    {
        name: "Casa de campo",
        description: "Un lugar ideal para descansar de la ciudad",
        src:
            "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        rooms: 2,
        m: 170
    },
    {
        name: "Casa de playa",
        description: "Despierta tus días oyendo el oceano",
        src:
            "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        rooms: 2,
        m: 130
    },
    {
        name: "Casa en el centro",
        description: "Ten cerca de ti todo lo que necesitas",
        src:
            "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        rooms: 1,
        m: 80
    },
    {
        name: "Casa rodante",
        description: "Conviertete en un nómada del mundo sin salir de tu casa",
        src:
            "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        rooms: 1,
        m: 6
    },
    {
        name: "Departamento",
        description: "Desde las alturas todo se ve mejor",
        src:
            "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        rooms: 3,
        m: 200
    },
    {
        name: "Mansión",
        description: "Vive una vida lujosa en la mansión de tus sueños ",
        src:
            "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        rooms: 5,
        m: 500
    }
];

//Carga inicial de propiedades
function cargaPropiedades() {
    const propiedadesSection = document.querySelector(".propiedades")
    const totalProp = document.querySelector("#totales")
    let html = ``
    let total = 0
    for (let propiedades of propiedadesJSON) {
        console.log(propiedades)
        //Interpolacion
        html += `
        <div class="propiedad">
        <div class="img" style="background-image: url('${propiedades.src}')"></div>
        <section>
            <h5>${propiedades.name}</h5>  
            <div class="d-flex justify-content-between">
                <p>Cuartos: ${propiedades.rooms}</p>
                <p>Metros: ${propiedades.m}</p>                
            </div>
            <p class="my-3">${propiedades.description}</p>
            <button class="btn btn-info ">Ver más</button> 
            </section> 
        </div>
        `;
        total += 1
    }

    propiedadesSection.innerHTML = html //grid propiedades
    totalProp.innerHTML = total //total de propiedades
}

//Valida campos y busca propiedades por filtro
function buscar(hab, metro1, metro2) {
    habitacion = document.querySelector(hab).value
    met1 = document.querySelector(metro1).value
    met2 = document.querySelector(metro2).value
    console.log(habitacion)
    console.log(met1)
    console.log(met2)

    //validar campos de busquedad
    if (habitacion == "" || met1 == "" || met2 == "") {
        alert("Faltan campos por llenar")
        console.log("Faltan campos por llenar")
    } else {
        //filtrar las porpiedades segun buscador
        filtraPropiedades(habitacion, met1, met2)
    }


}
//filtrar las porpiedades segun buscador
function filtraPropiedades(hab, metro1, metro2) {
    const propiedadesSection = document.querySelector(".propiedades")
    const totalProp = document.querySelector("#totales")
    let html = ``
    let total = 0
    for (let propiedades of propiedadesJSON) {
        console.log("filtro1")
        console.log("hab" + hab)
        console.log("rooms" + propiedades.rooms)
        if (propiedades.rooms >= hab) {
            console.log("filtro2")
            console.log("metros1 " + met1)
            console.log("metros2" + met2)
            console.log("metros" + propiedades.m)
            if (propiedades.m >= met1 && propiedades.m <= met2) {
                console.log("filtro3")
                //Interpolacion
                html += `
                <div class="propiedad">
                <div class="img" style="background-image: url('${propiedades.src}')"></div>
                <section>
                <h5>${propiedades.name}</h5>  
                <div class="d-flex justify-content-between">
                    <p>Cuartos: ${propiedades.rooms}</p>
                    <p>Metros: ${propiedades.m}</p>                
                </div>
                <p class="my-3">${propiedades.description}</p>
                <button class="btn btn-info ">Ver más</button> 
                </section> 
                </div>
                `;
                total += 1
            }
        }


    }

    propiedadesSection.innerHTML = html //grid propiedades
    totalProp.innerHTML = total //total de propiedades
    if (total == 0) {
        alert("No propiedades disponibles")
    }
}


//Carga incial de grilla de propiedades
cargaPropiedades();


