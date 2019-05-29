class Dishes {
        constructor(img, name, description, price, id) {
                this.img = img;
                this.name = name;
                this.description = description;
                this.price = price;
                this.id = id;
        }
// createTableRows is in JS- shuldnt this be in css/html ?
        createTableRows() {
                return `<tr><td><img src="${this.img}" height=120px width=160px></img></td>
                <td>  ${this.name}  </td>
                <td>  ${this.description}  </td>
                <td>  ${this.price}  </td>
                <td> <input type=number class="quantity" min =1 max =99 value=1> 
                <button class= "addToCart" data-id='${this.id}'> Add to cart </td></tr>`
        }
}
