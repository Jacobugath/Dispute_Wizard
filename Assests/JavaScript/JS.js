var database = firebase.database();
const Div1 = $("#div1");
const Div2 = $("#div2");
const Div3 = $("#div3");
const Btn1 = $("#btn1");
const Btn2 = $("#btn2");
const Div6 = $("#div6");
const Sub = $("#sub");
var number, gmv, buysFrom, experience, name, shipDate, finalBid;



function getData(number){
    var ref = firebase.database().ref('Order Number/' + number);
    ref.once("value").then(function(snapshot){
        console.log(snapshot.child("condition").val())
        Div3.empty();
        Div3.append("<br><b><u>"+number+"</u></b><hr><hr><hr><h1>Buyer Info</h1><hr><u>Name:</u> "+snapshot.child("name").val()+"<br><u>GMV:</u> "+snapshot.child("gmv").val()+"<br><u>Experience:</u> "+snapshot.child("experience").val()+"<hr><hr><hr><h1>Order Info</h1><hr><u>Ship Date:</u> "+snapshot.child("shipDate").val()+"<br><u>Final Bid:</u> "+snapshot.child("finalBid").val()+"<br><u>Condition:</u> "+snapshot.child("condition").val()  +"<hr><hr><hr>");


    });
}


  function writeData(number, gmv, buysFrom, experience, name, shipDate, finalBid, condition) {
    firebase.database().ref('Order Number/' + number).set({
        gmv: gmv,
        buysFrom: buysFrom,
        experience: experience,
        name: name,
        shipDate: shipDate,
        finalBid: finalBid,
        condition: condition,
    });
  }

function submit(){
    Div6.append("<br>"+$("#textarea").val()+"<hr>");
    $("#textarea").val("");
}
function btnFuc(){
switch (Btn1.text()){
    case "I Am Ready to Start, and Have a Dispute Ticket Pulled Up in Zendesk.":
    Div2.html("Good. First read through the entire ticket from top to bottom no matter how boring it is. Let me know when you have that done. Also let me know the order number when you have it.<br><br>Order Number: <input type='text' id='orderNumber'>")
    Btn1.text("I Have Read The ZD Ticket");
    break;
    case "I Have Read The ZD Ticket":
    number= $("#orderNumber").val();
    Div3.append("<br>"+$("#orderNumber").val());
    Div2.text("Well Done. Now take a look and see if there are any other open or recent tickets regarding this claim. Give those a full read as well. Make sure to merge anything that needs it.")
    Btn1.text("I Have Read all Related ZD Tickets and Made the Needed Merges");
    break;
    case "I Have Read all Related ZD Tickets and Made the Needed Merges":
    Div2.html("You're Doing Great! Now Pull up this Buyer's GMV and take a moment to fill in the below information.<br><br>This buyer's GMV is: <br><select id='gmv'><option value='High'>High</option><option value='Medium'>Medium</option><option value='Low'>Low</option></select><br><br>Buy's from: <br><select id='buysFrom'><option value='Many Different Market Places'>Many Different Market Places</option><option value='Two Marketplaces'>Two Marketplaces</option><option value='Mostly The Same Market Place'>Mostly The Same Market Place</option></select> <br><br> This buyer experience level is: <br> <select id='experience'><option value='Veteran'>Buyer Has Been With Us Many Years</option><option value='Medium'>Somewhere in Between</option><option value='New'>Buyer is New</option></select>")
    Btn1.text("Submit");
    break;
    case "Submit":
     gmv = $("#gmv").val();
    console.log("GMV: "+gmv);
     buysFrom = $("#buysFrom").val();
     experience = $("#experience").val();


    Div2.html("You Rock!! Now pull up this order in Admin and give me the following info:<br><br>Buyer's First Name: <input type='text' id='name'> <br><br> Approximate Ship Date (Make sure the dispute isn't too old): <input type='text' id='shipDate'><br>Final Bid Price: <input type='text' id='finalBid'><br>Listing's Condition: <input type='text' id='condition'>")
    Btn1.text("I've Given You Everything You've Asked For");
    break;
    case "I've Given You Everything You've Asked For":
    console.log("GMV2: "+gmv);
     name = $("#name").val();
     shipDate = $("#shipDate").val();
     finalBid = $("#finalBid").val();
     condition = $("#condition").val();
    writeData(number, gmv, buysFrom, experience, name, shipDate, finalBid, condition);


    Div2.text("You're doing great! Now take a look again at the ZD Ticket. Is the requester correct? Are there any people being CC'd that need to be removed? If so, make those updates!");
    Btn1.text("I've Made All Needed Changes To The Requestor and CC Fields");
    getData(number);
    break;

    case "I've Made All Needed Changes To The Requestor and CC Fields":
    Div2.text("You are a wonderful human being! By now you probably know how to  reply to the buyer. If you choose a macro, make sure you add  some personal touches!");
    Btn1.text("I have written the buyer a response")
    break;
    case "I have written the buyer a response":
    Div2.text("Good Job! Make sure to reread everything before you send!");
    Btn1.text("Start Over")
    case "Start Over":
    Div3.empty()
    Div2.html("Hello. My Name is Xenopheliounous. I am a Dispute Wizard.  I'm here to help you work through the disputes assigned to you. Let's get started.")
    Btn1.text("I Am Ready to Start, and Have a Dispute Ticket Pulled Up in Zendesk.");

}
}

function skip(){
    switch (Btn1.text()){
        case "I Am Ready to Start, and Have a Dispute Ticket Pulled Up in Zendesk.":
        Div2.html("First read through the entire ticket from top to bottom no matter how boring it is. Let me know when you have that done. Also let me know the order number when you have it.<br><br>Order Number: <input type='text' id='orderNumber'>")
        Btn1.text("I Have Read The ZD Ticket");
        break;
        case "I Have Read The ZD Ticket":
        Div2.text("Now take a look and see if there are any other open or recent tickets regarding this claim. Give those a full read as well.")
        Btn1.text("I Have Read all related ZD Tickets");
        break;
        case "I Have Read all related ZD Tickets":
        Div2.html("Now Pull up this Buyer's GMV and take a moment to fill in the below information.<br><br>This buyer's GMV is: <br><select id='gmv'><option value='High'>High</option><option value='Medium'>Medium</option><option value='Low'>Low</option></select><br><br>This buyer tends to buyer from: <br><select id='buysFrom'><option value='Many Different Market Places'>Many Different Market Places</option><option value='Mostly The Same Market Place'>Mostly The Same Market Place</option></select> <br><br> This buyer experience level is: <br> <select id='experience'><option value='Veteran'>Buyer Has Been With Us Many Years</option><option value='Medium'>Somewhere in Between</option><option value='New'>Buyer is New</option></select>")
        Btn1.text("Submit");
        break;
        case "Submit":

        Div2.html("Now pull up this order in Admin and give me the following info: Buyer's First Name: <input type='text' id='name'> <br><br> Approximate Ship Date: <input type='text' id='shipDate'><br><br>Final Bid Price: <input type='text' id='finalBid'><br><br>Listing's Condition: <input type='text' id='condition'>")
        Btn1.text("I've Given You Everything You've Asked For");
        break;
        case "I've Given You Everything You've Asked For":

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
        case "Start Over":
        Div3.empty()
        Div2.html("Hello. My Name is Xenopheliounous. I am a Dispute Wizard.  I'm here to help you work through the disputes assigned to you. Let's get started.")
        Btn1.text("I Am Ready to Start, and Have a Dispute Ticket Pulled Up in Zendesk.");

    }
    }
Btn1.click(btnFuc);
Btn2.click(skip);
Sub.click(submit);