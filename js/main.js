let productos =[
    {id:1, nombre:"Yerba Playadito 500gr", imagen:"https://cdn11.bigcommerce.com/s-abmjjefojj/images/stencil/1280x1280/products/1495/16826/Diapositiva103__03287.1680721684.JPG?c=1", gramos:500, precio:900, categoria:"comun"},
    {id:2, nombre:"Yerba Playadito 1000gr", imagen:"https://jumboargentina.vtexassets.com/arquivos/ids/711224/Yerba-Mate-Playadito-Suave-X1kg-1-854539.jpg?v=637938633804770000", gramos:1000, precio:1800, categoria:"comun"},
    {id:3, nombre:"Yerba Organica Mate&CO 500gr", imagen:"https://acdn.mitiendanube.com/stores/001/176/840/products/ym-mate-co-organica-despalada-500gr-001-d861c6aad956183bde16467465818309-640-0.webp", gramos:500, precio:1200, categoria:"organica"},
    {id:4, nombre:"Yerba Oasis Organica con Palo 500gr", imagen:"https://acdn.mitiendanube.com/stores/001/176/840/products/ym-hierbas-del-oasis-organica-500gr1-c5413ada2ac8ed671e16454683696316-640-0.webp", gramos:500, precio:1300, categoria:"organica"},
    {id:5, nombre:"Yerba Playadito 500gr Despalada", imagen:"https://www.lacoopeencasa.coop/media/lcec/publico/articulos/3/8/c/38c8467c35eb48fd65c2b6d015dcd3b7", gramos:500, precio:1000, categoria:"despalada"},
    {id:6, nombre:"Yerba Origen Barbacua 500gr", imagen:"https://acdn.mitiendanube.com/stores/001/176/840/products/ym-origen-barbacua-500gr1-e1187c17e5cc12d35116210101424505-640-0.webp", gramos:500, precio:1400, categoria:"barbacua"},
    {id:7, nombre:"Yerba Picada Vieja Barbacua 500gr", imagen:"https://acdn.mitiendanube.com/stores/001/176/840/products/ym-picada-vieja-barbacua-500gr1-cfe0c68766bc4d138a16377059880090-640-0.webp", gramos:500, precio:1450, categoria:"barbacua"},
    {id:8, nombre:"Yerba Mate Baldo Despalada 500gr", imagen:"https://acdn.mitiendanube.com/stores/001/176/840/products/ym-baldo-despalada-500gr-001-a75a5cd8101211023016916120618139-640-0.webp", gramos:500, precio:2700, categoria:"despalada"},
    {id:9, nombre:"Yerba Mate Kraus Orgánica Gourmet Estuche 500gr", imagen:"https://acdn.mitiendanube.com/stores/001/176/840/products/ym-kraus-organica-gourmet-estuche-500gr-001-a6e9cdc45e8dc12b0716795220225773-640-0.webp", gramos:500, precio:3200, categoria:"organica"},
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS =() => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);

const renderProductos = () => {
    const productos = cargarProductosLS(); 

    let contenidoHTML ="";
    
    productos.forEach(producto => {
        contenidoHTML +=`<div class="col-md-4 mb-5">
        <div class="card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.precio}</p>
          <a href="#" class="btn btn-primary">Agregar (+)</a>
        </div>
      </div>
      </div>`
    });

    document.getElementById("contenido").innerHTML = contenidoHTML; 
}

renderProductos();