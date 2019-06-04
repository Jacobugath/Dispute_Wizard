var database = firebase.database();
const Div1 = $("#div1");
const Div2 = $("#div2");
const Div3 = $("#div3");
const Btn1 = $("#btn1");
const Btn2 = $("#btn2");
const Div6 = $("#div6");
const Sub = $("#sub");
var number, gmv, buysFrom, experience, name, shipDate, finalBid, status;

function getData(number){
    var ref = firebase.database().ref('Order Number/' + number);
    ref.once("value").then(function(snapshot){
        if (snapshot.exists()){
       $("#bGMV").val(snapshot.child("gmv").val());
       $('#sDate').val(snapshot.child("shipDate").val());
       $('#fBid').val(snapshot.child("finalBid").val());
       $('#lCondition').val(snapshot.child("condition").val());
       $('#status').val(snapshot.child("status").val());
       $('#iType').val(snapshot.child("iType").val());
       $('#oProblem').val(snapshot.child("oproblem").val());
       $('#sType').val(snapshot.child("sType").val());
       $('#dDate').val(snapshot.child("dDate").val());
       $('#bname').val(snapshot.child("name").val());
       $('#onumber').val(number);


        }
    });
    iframe();
}



  function writeData(number, gmv, name, shipDate, finalBid, condition, status, iType, oProblem, sType, dDate) {
    firebase.database().ref('Order Number/' + number).set({
        gmv: gmv,
        name: name,
        shipDate: shipDate,
        finalBid: finalBid,
        condition: condition,
        status: status,
        iType: iType,
        oproblem: oProblem,
        sType: sType,
        dDate: dDate
    });

  }

function submit(){
    writeData($('#onumber').val(), $("#bGMV").val(), $("#bname").val(), $("#sDate").val(), $("#fBid").val(), $("#lCondition").val(), $('#status').val(), $('#iType').val(), $('#oProblem').val(), $('#sType').val(), $('#dDate').val());
}

function get(){
    let number= $("#onumber").val();
    getData(number);
}
function btnFuc(){


switch (Btn1.text()){
    case "I Am Ready to Start, and Have a Dispute Ticket Pulled Up in Zendesk.":
    Div2.html("Please enter the order Number.<br><br>Order Number: <input type='text' id='orderNumber'>");
    Btn1.text("There you go.");
    break;
    case "There you go.":
    Div3.append
    number= $("#orderNumber").val();
    getData(number);
    console.log(number);
    Div2.html("Good. Now read through the entire ticket from top to bottom no matter how boring it is. Let me know when you have that done.")
    Btn1.text("I Have Read The ZD Ticket");
    break;
    case "I Have Read The ZD Ticket":
    number= $("#orderNumber").val();
    Div2.text("Well Done. Now take a look and see if there are any other open or recent tickets regarding this claim. Give those a full read as well. Make sure to merge anything that needs it.")
    Btn1.text("I Have Read all Related ZD Tickets and Made the Needed Merges");
    break;
    case "I Have Read all Related ZD Tickets and Made the Needed Merges":
    Div2.html("You Rock!! Now pull up this order in Admin and fill out as much info below as you can and hit submit'>")
    Btn1.text("I've Given You Everything I Can");
    break;
    case "I've Given You Everything I Can":
    Div2.text("You're doing great! Now take a look again at the ZD Ticket. Is the requester correct? Are there any people being CC'd that need to be removed? If so, make those updates!");
    Btn1.text("I've Made All Needed Changes To The Requestor and CC Fields");
    break;
    case "I've Made All Needed Changes To The Requestor and CC Fields":
    Div2.text("You are a wonderful human being! By now you probably know how to  reply to the buyer. If you choose a macro, make sure you add  some personal touches!");
    Btn1.text("I have written the buyer a response")
    break;
    case "I have written the buyer a response":
    Div2.text("Good Job! Make sure to reread everything before you send!");
    Btn1.text("Start Over")
    break;
    case "Start Over":
    location.reload();


}

}

function skip(){
    switch (Btn1.text()){
        case "I Am Ready to Start, and Have a Dispute Ticket Pulled Up in Zendesk.":
        Div2.html("Now read through the entire ticket from top to bottom no matter how boring it is. Let me know when you have that done. Also let me know the order number when you have it.<br><br>Order Number: <input type='text' id='orderNumber'>")
        Btn1.text("I Have Read The ZD Ticket");
        break;
        case "I Have Read The ZD Ticket":
        Div2.text("Now take a look and see if there are any other open or recent tickets regarding this claim. Give those a full read as well.")
        Btn1.text("I Have Read all related ZD Tickets");
        break;
        case "I Have Read all related ZD Tickets":
        Div2.html("Now pull up this order in Admin and give me as much info below as you can and hit submit.")
        Btn1.text("I've Given You Everything I can");
        break;
        case "I've Given You Everything I can":

        Div2.text("Now take a look again at the ZD Ticket. Is the requester correct? Are there any people being CC'd that need to be removed? If so, make those updates!");
        Btn1.text("I've Made All Needed Changes To The Requestor and CC Fields");

        break;

        case "I've Made All Needed Changes To The Requestor and CC Fields":
        Div2.text("By now you probably know how to  reply to the buyer. If you choose a macro, make sure you add  some personal touches!");
        Btn1.text("I have written the buyer a response")
        break;
        case "I have written the buyer a response":
        Div2.text("Make sure to reread everything before you send!");
        Btn1.text("Start Over")
        location.reload();

    }
    }
Sub.click(submit);

function iframe(){
    let site = $("#onumber").val().substring(0,3)
    let num = $("#onumber").val().substring(3)
    console.log(num);
    switch(site){

        case('ALM'):
        console.log('alm')
        $('.iframe').html( "<a href='https://almo.bstock.com/index.php/admin/sales_order/view/order_id/"+num+"' target='_blank'>Admin</a>");
        break;
        case('BST'):
        $('.iframe').html( "<a href='https://bestbuy.bstock.com/index.php/admin/sales_order/view/order_id/"+num+"' target='blank'>Admin</a>");
        break;
        case('CST'):
        $('.iframe').html( "<a href='https://costco.bstock.com/index.php/admin/sales_order/view/order_id/"+num+"' target='blank'>Admin</a><br>Atlanta - Jennifer Adye <br> Dallas - Jacob <br> Ecomm - Marcus <br> Frederick - Kesha <br> Mira Loma - Juan Cruz <br> Monroe - Bill Winter<br> Morris - Arnulfo <br> Salt Lake - Mike<br> Sumner - Justin<br> Tolleson - Christine<br> Tracey - Becky<br> Van Buren - Jessica<br> West Palm - Verna");
        break;
        case('HMD'):
        $('.iframe').html( "<a href='https://homedepot.bstock.com/index.php/admin/sales_order/view/order_id/"+num+"' target='blank'>Admin</a>");
        break;
        case('HBC'):
        $('.iframe').html( "<a href='https://hbc.bstock.com/index.php/admin/sales_order/view/order_id/"+num+"' target='blank'>Admin</a>");
        break;
        case('JCP'):
        $('.iframe').html( "<a href='https://jcpenney.bstock.com/index.php/admin/sales_order/view/order_id/"+num+"' target='blank'>Admin</a>");
        break;
        case('JHN'):
        $('.iframe').html( "<a href='https://jl.bstock.com/index.php/admin/sales_order/view/order_id/"+num+"' target='blank'>Admin</a>");
        break;
        case('MJR'):
        $('.iframe').html( "<a href='https://meijer.bstock.com/index.php/admin/sales_order/view/order_id/"+num+"' target='blank'>Admin</a>");
        break;
        case('PHB'):
        $('.iframe').html( "<a href='https://phobio.bstock.com/index.php/admin/sales_order/view/order_id/"+num+"' target='blank'>Admin</a>");
        break;
        case('SUP'):
        $('.iframe').html( "<a href='https://bstocksupply.com/index.php/admin/sales_order/view/order_id/"+num+"' target='blank'>Admin</a>");
        break;
        case('ZLL'):
        $('.iframe').html("<a href='https://zulily.bstock.com/index.php/admin/sales_order/"+num+"' target = 'blank'>Admin</a>");
        break;
        case('WLG'):
        $('.iframe').html("<a href='https://walgreens.bstock.com/index.php/admin/sales_order/"+num+"' target = 'blank'>Admin</a>");
        break;

    }
    $('.iframe').append(" " + site +num);
}
const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
