

class Productos{
    constructor({tipo,nombre,precio,stock}){  //recibo directamente objeto {}
        this.nombre=nombre;
        this.tipo=tipo;
        this.precio=precio;
        this.stock=stock;
    }

}

//Mando objeto para no seguir un patron en la carga de datos(orden de variables)
producto1 = new Productos({ stock:20,nombre:'pantalon',precio: 2500,tipo:'ropa',});
producto2 = new Productos({tipo:'ropa',precio:1200,stock:30,nombre:'remera',});
producto3 = new Productos({precio:3500,tipo:'electrodomestico',nombre:'licuadora',stock:25,});
producto4 = new Productos({nombre:'zapatilla',precio:9000,stock:15,tipo:'moda'});
 

let array=[producto1,producto2,producto3,producto4];

function agregar_productos_array(tipoP,nombreP,precioP,stockP,) {
    producto = new Productos({tipo:tipoP,nombre:nombreP,precio:precioP,stock:stockP,});
    array.push(producto);
}

agregar_productos_array('moda','perfume',7000,35);
agregar_productos_array('electrodomestico','televisor',40000,20);
console.log(array);
