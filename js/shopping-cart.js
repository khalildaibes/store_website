var cart=[];
var Item=function(name,price,count,img_path){
    this.name=name;
    this.price=price;
    this.count=count;
    this.img=img_path;
}

function addItemToCart(name,price,count,img_path){
    for(var i in cart){
        if(cart[i].name===name){
            cart[i].count +=count;
            saveCart();
            return;
        }
    }
    var item = new Item(name,price,count,img_path);
    cart.push(item);
    saveCart();
}


function removeItemFromCart(name){
    for(var i in cart){
        if(cart[i].name===name){
            cart[i].count --;
            if(cart[i].count==0){
                cart.splice(i,1);
            }
            break;
        }
    }
    saveCart();
}





function removeItemFromCartAll(name){
    for(var i in cart){
        if(cart[i].name===name){
            cart.splice(i,1);
            break;
        }
    }
    saveCart();
}


function clearCart(){
    cart=[];
    saveCart();
}


function countCart(){
    var totalCount=0;
    for(var i in cart){
        totalCount+= cart[i].count;
    }
    return totalCount;
}


function totalPrice(Item){
    var totalCost=0;
    totalCost = (Item.price*Item.count);
    return totalCost;
}


function totalPriceCart(){
    var totalCost=0;
    for(var i in cart){
        totalCost+= totalPrice(cart[i]);
    }
    return totalCost.toFixed(2);
}





function listCart(){
    var cartCopy=[];
    for(var i in cart){
        var item=cart[i];
        var itemCopy={};
        for(var p in item){
            itemCopy[p]=item[p];
        }
        itemCopy.total=totalPrice(item).toFixed(2); 
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}



function saveCart(){
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}



function loadCart(){
    cart=JSON.parse(localStorage.getItem("shoppingCart"));
}

function updateCart(name,count){
    for(var i in cart){
        if(cart[i].name===name){
            cart[i].count=count;
            break;
        }
        saveCart();
    }
}

// function time(){
//     var now=new Date();
//     // if(now.getTime()<(now.getTime()+5000)){
//     //     console.log("inside loop");
//     // }
//     for (var i=0 ;i<5;i++)
//     console.log(now.getTime());
//     // console.log(now.getTime()+5000);
// }

loadCart();
displayCart();
// time();