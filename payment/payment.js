$(() => {
  
    var handler = StripeCheckout.configure({
      key: 'pk_test_cp21BcECf4kMMUbSlRlZlsMo',
      token: function (token) {
  
        if (token.id) {
          $("#thankyouPayment").html("#thankyouPayment").html(
            " <div class='alert alert-success' role='alert'> "+ 
           "Thank you, your payment was successful!"+
           " </div> ");
           
        }
      }
    });
  
    $("#cancel-btn").click(() => {
      window.location.href = "../payment/cart-payment.html";
    });
    $("#paynow-btn").on("click", function (e) {
      let checkedVal = $("input[type='radio']:checked").val();
      console.log(checkedVal);
      if (checkedVal === "stripe") {
        handler.open({
          name: "Pay",
          currency: "LKR",
          description: "Sitter Payment",
          amount: 1000*100
        });
        $(window).on("popstate", function () {
          console.log("done");
          handler.close();
          window.location.href = "../home.html";
        });
      }
    });
  });
  
  