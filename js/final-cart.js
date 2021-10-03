function saveCart(){
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

function displayCartTable(){
	        var cartArray=listCart();
	        var output="";
	        output+="<tr>"+"<td class='thumbnail-img'>"
			+"<img class='img-fluid' src='"+cartArray[0].img+"'"+" alt='' />"
			+"</td>"
			+"<td class='name-pr'>"
			+"<a href='#'> <span data-name='"+cartArray[0].name+"'"+">"+cartArray[0].name+"</span></a>"
			+"</td>"
			+"<td class='price-pr'>"
			+"<p>$"+cartArray[0].price+"</p>"
			+"</td>"
			+"<td class='quantity-box'><input class='item-quantify' data-name='"+cartArray[0].name+"'"+" type='number' size='4' value='"+cartArray[0].count+"'"+" min='0' step='1' class='c-input-text qty text'></td>"
			+"<td class='total-pr'>"
			+"<p>$ "+totalPrice(cartArray[0])+"</p>"
			+"</td>"
			+"<td class='remove-pr'>"
			+"<a href='#'>"
			+"<i class='fas fa-times'></i>"
			+"</a>"
			+"</td>"
			+"</tr>";
	        $("#show-cart-table").html(output);
}

$("#show-cart-table").on("change","item-quantify",function(event){
            	var name=$(this).attr("data-name");
            	console.log("lior");
            	var count=$(this).val();
            	updateCart(name,count);
            	displayCartTable();

            });

function updateCart(name,count){
    for(var i in cart){
        if(cart[i].name===name){
            cart[i].count=count;
            break;
        }
        saveCart();
    }
}

displayCartTable();
