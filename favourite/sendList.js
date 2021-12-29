function sendEmail() {

    console.log("email button clicked");
    var favouritesList = JSON.parse(localStorage.getItem('favouriteList'));
    console.log(favouritesList)

    Email.send({
        Host: "smtp.gmail.com",
        Username: "foodmunchteam@gmail.com",
        Password: "foodmunch12",
        To: 'ariyarathnathathsara88@gmail.com',
        From: "foodmunchteam@gmail.com",
        Subject : "Favourite List ",
        Body : "<h1>Favourite Restaurant List</h1><br>"
                + "<h3>Product Name - " + favouritesList[0].productName + "</h3>"
                + "<h3>Cost - " + favouritesList[0].productCost + "</h3>"

    }).then(
        message => alert("mail sent successfully")
    );
}

