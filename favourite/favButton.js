console.log("start saving");
var favouriteItems = [];
var checkButtonClick1 = false;
var checkButtonClick2 = false;

$('#fav1').hide();
$('#fav3').hide();

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
$("#restaurant02").on('click', function (event) {
    event.preventDefault();
    if (checkButtonClick2 == false) {
        $('#fav3').show();
        $('#fav2').hide();
        checkButtonClick2 = true;
        favouriteItems.push(product2)
        localStorage.setItem('favouriteList', JSON.stringify(favouriteItems));
    } else {
        
        alert("hrllo")
        $('#fav3').hide();
        $('#fav2').show();
        checkButtonClick2 = false;
        for (i = 0; i < favouriteItems.length; i++) {
            if (favouriteItems[i].productId == 2) {
                var updatedFavList = favouriteItems.filter(item => item.productId != 2);
                favouriteItems = updatedFavList;
                localStorage.setItem('favouriteList', JSON.stringify(favouriteItems));
            }
        }
    }
});
