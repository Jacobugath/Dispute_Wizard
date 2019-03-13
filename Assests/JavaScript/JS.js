const Div1 = $("#div1");
const Div2 = $("#div2");
const Div3 = $("#div3");
const Btn1 = $("#btn1");

function btnFuc(){
switch (Btn1.text()){
    case "I Am Ready to Start, and Have a Dispute Ticket Pulled Up in Zendesk.":
    Div2.html("Good. First read through the entire ticket from top to bottom no matter how boring it is. Let me know when you have that done. Also let me know the order number when you have it.<br><br>Order Number: <input type='text' id='orderNumber'>")
    Btn1.text("I Have Read The ZD Ticket");
    break;
    case "I Have Read The ZD Ticket":
    Div3.append($("#orderNumber").val());
    Div2.text("Well Done. Now take a look and see if there are any other open or recent tickets regarding this claim. Give those a full read as well.")
    Btn1.text("I Have Read all related ZD Tickets");
    break;
    case "I Have Read all related ZD Tickets":
    Div2.html("You're Doing Great! Now Pull up this Buyer's GMV and take a moment to fill in the below information.<br><br>This buyer's GMV is: <br><select><option value='high'>High</option><option value='medium'>Medium</option><option value='low'>Low</option></select><br><br>This buyer tends to buyer from: <br><select><option value='many'>Many Different Market Places</option><option value='same'>Mostly The Same Market Place</option></select> <br><br> This buyer experience level is: <br> <select><option value='vet'>Buyer Has Been With Us Many Years</option><option value='med'>Somewhere in Between</option><option value='new'>Buyer is New</option></select>")
    Btn1.text("Submit");
    break;
    case "Submit":
    Div2.html("You Rock!!")
    Btn1.text("Start Over");
    break;
    case "Start Over":
    Div2.html("Hello. My Name is Xenopheliounous. I am a Dispute Wizard.  I'm here to help you work through the disputes assigned to you. Let's get started.")
    Btn1.text("I Am Ready to Start, and Have a Dispute Ticket Pulled Up in Zendesk.");
}
}
Btn1.click(btnFuc);