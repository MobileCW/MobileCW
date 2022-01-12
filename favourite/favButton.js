console.log("start saving");
var favouriteItems = [];
var checkButtonClick1 = false;
$('#fav1').hide();

$("#restaurant01").on('click', function (event) {
    event.preventDefault();
    if (checkButtonClick1 == false) {
        // alert("ss")
        $('#fav1').show();
        $('#fav').hide();
        checkButtonClick1 = true;
        favouriteItems.push(product1)
        localStorage.setItem('favouriteList', JSON.stringify(favouriteItems));
    } else {
        
        alert("hrllo")
        $('#fav1').hide();
        $('#fav').show();
        checkButtonClick1 = false;
        for (i = 0; i < favouriteItems.length; i++) {
            if (favouriteItems[i].productId == 1) {
                var updatedFavList = favouriteItems.filter(item => item.productId != 1);
                favouriteItems = updatedFavList;
                localStorage.setItem('favouriteList', JSON.stringify(favouriteItems));
            }
        }
    }
});
