export function AddToList(product) {
    var list = LoadList();
    list.push(product);
    
    localStorage.setItem("Products", JSON.stringify(list));
}

export function LoadList() {
    var loadedlist =  JSON.parse(localStorage.getItem("Products"));
    
    var products =loadedlist ? loadedlist : [];
    console.log()
    console.log(products);
    return products;
}

export function DeleteFromList(product){
    var list = LoadList();

}