
let contact = {};

let contacts = [];

let q;

let p;

if(!localStorage['pb.contacts']){
    localStorage.setItem('pb.contacts', JSON.stringify([]));
}
if(localStorage['pb.contacts']){
    contacts=JSON.parse(localStorage['pb.contacts']);
    for (var i=0; i<contacts.length;i++){
        createElementOld(i)
    }
}
    function addbtn () {
    document.getElementById('blanc').style.display = 'block';
    firstName.value=last_name.value=phone.value=email.value=phone2.value=email2.value=null;
    document.getElementById ("firstName").focus ();
    document.getElementById('add').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('accordion2').style.display = 'none';
   // document.getElementById('select').style.display = 'none';
    document.getElementById('saveChange').style.display = 'none';
    document.getElementById('save').style.display = 'inline-block';
        secondPhoneRemove();
        secondEmailRemove()

}
function cancel() {
    document.getElementById('blanc').style.display = 'none';
    document.getElementById('add').style.display = 'block';
    document.getElementById('search').style.display = 'block';
    document.getElementById('accordion2').style.display = 'block';
    //document.getElementById('select').style.display = 'none';
    document.getElementsByClassName('error-block')[0].style.display = "none";
}
function selectbtn() {
    // document.getElementById('blanc').style.display = 'block';
    // document.getElementById('add').style.display = 'block';
    // document.getElementById('search').style.display = 'block';
    // document.getElementById('accordion2').style.display = 'block';
    document.getElementById('select').style.display = 'none';
    accordion2.innerHTML = ""
    for (var i = 0; i < contacts.length; i++) {
        contact = contacts[i] || "";
        createElementOld(i);

    }
}
function save (firstName, last_name, phone, email, phone2, email2) {
    var keys = ['firstName', 'last_name', 'phone', 'email', 'phone2', 'email2'];
    for (var i=0;i<arguments.length;i++){
        if (arguments[i] !== "") {$('#'+keys[i]).css({"border":""});}
    }


if (firstName == "" ){
    $('#firstName').css({"border":"1px solid red"});
    document.getElementsByClassName('error-block')[0].style.display = "inline-block";
};
    if ( last_name == "" ){
        $('#last_name').css({"border":"1px solid red"});
        document.getElementsByClassName('error-block')[0].style.display = "inline-block";

    };
    if (phone == ""){
         $('#phone').css({"border":"1px solid red"});
        document.getElementsByClassName('error-block')[0].style.display = "inline-block";
    };


    var result = email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig );

    if (!result && !(email == "")){
        $('#email').css({"border":"1px solid red"});
        return false
    }

    var result = email2.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig );

    if (!result && !(email2 == "")){
        $('#email2').css({"border":"1px solid red"});
        return false
    }

    if (firstName == "" || last_name == "" || phone == ""){
        return false;
    }

    document.getElementsByClassName('error-block')[0].style.display = "none";

    document.getElementById('blanc').style.display = 'none';
    document.getElementById('add').style.display = 'block';
    document.getElementById('search').style.display = 'block';
    document.getElementById('accordion2').style.display = 'block';

    $('#firstName').css({"border":""});
    $('#last_name').css({"border":""});
    $('#phone').css({"border":""});
    $('#email').css({"border":""});
    $('#email2').css({"border":""});


    //document.getElementById('select').style.display = 'none';
    contact={
        id:  new Date().getTime(),
        firstName:firstName  || "",
        last_name:last_name  || "",
        phone:phone  || "",
        email:email  || "",
        phone2:phone2  || "",
        email2:email2  || ""
    }

     contacts.unshift(contact);
    localStorage.setItem('pb.contacts', JSON.stringify(contacts));
    accordion2.innerHTML='';
for (var i=0; i<contacts.length;i++){
   createElementOld(i)
}
//createElement();
   for(var i=0;i<blanc.children.length; i++){
        if(blanc.children[i].hasAttribute('id')){
           blanc.children[i].value=null;
        }
    }

    swal(
        'SAVED',
        contact.firstName+" "+contact.last_name,
        'success'
    )
}
function myBlurFunction() {
    // document.getElementById('search').style.width = '50%';
    document.getElementById('search').style.background = "white";
}
function blueWidth() {
    // document.getElementById('search').style.width = '75%';
    document.getElementById('search').style.background = "#c2f0f3";
}

function zeroSearch(){
    //document.getElementById('select').style.display = 'none';

    var out=[]
    console.log(search.value);
    for(var i=0; i<contacts.length; i++){
        if ((contacts[i].firstName.toLocaleLowerCase().indexOf(search.value.toLocaleLowerCase())!==-1)||(contacts[i].last_name.toLocaleLowerCase().indexOf(search.value.toLocaleLowerCase())!==-1)){
            out.push(contacts[i]);
            console.log(out)
        }
    }
    accordion2.innerHTML=""
    for(var i=0; i<out.length; i++) {
        contact = out[i];
        createElement();

    }
}

//$(".btn").click(
function edit() {
    firstName.value=last_name.value=phone.value=email.value=phone2.value=email2.value=null;
    blanc.setAttribute("style", "display:block");
    document.getElementById('accordion2').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('add').style.display = 'none';



   var id=this.parentElement.id;
   for(var i=0;i<contacts.length;i++){
       if(contacts[i].id==id){
         contact = contacts[i]  || "";
         break
       }
   }
   if (contact){
       // for(var i=0;i<blanc.children.length; i++){
       //     if(blanc.children[i].hasAttribute('id')){
       //         var keys = Object.keys(contact);
       //        for (var j=0; j<keys.length;j++){
       //            if (blanc.children[i].id === keys[j]){
       //                blanc.children[i].value=contact[keys[j]];
       //                if (blanc.children[i].id === 'wrap_phone'){
       //                    blanc.children.wrap_phone.children.phone.value=contact.phone;
       //                    blanc.children.wrap_phone.children.phone2.value=contact.phone2;
       //                    // for (var k=0; k<blanc.children.wrap_phone.children.length;k++){
       //                    //     if (blanc.children.wrap_phone.children[k].id === keys[j]){
       //                    //         blanc.children.wrap_phone.children[k].value=contact[keys[j]];
       //                    //     }
       //                    // }
       //                }
       //                if (blanc.children[i].id === 'wrap_email'){
       //                    blanc.children.wrap_email.children.email.value=contact.email;
       //                    blanc.children.wrap_email.children.email2.value=contact.email2;
       //                    // for (var k=0; k<blanc.children.wrap_email.children.length;k++){
       //                    //     if (blanc.children.wrap_email.children[k].id === keys[j]){
       //                    //         blanc.children.wrap_email.children[k].value=contact[keys[j]];
       //                    //     }
       //                    // }
       //                }
       //
       //            }
       //        }
       //     }
       // }


       firstName.value = contact.firstName;
       last_name.value = contact.last_name;
       phone.value = contact.phone;
       email.value = contact.email;
       phone2.value = contact.phone2;
       email2.value = contact.email2;
   blanc.className=contact.id;
   }

document.getElementById('save').style.display="none";
document.getElementById('saveChange').style.display="inline-block";

    if(phone2.value!=""){
        secondPhone();
    }
    else secondPhoneRemove()
    if(email2.value!=""){
        secondEmail();
    }
    else secondEmailRemove()

}
//)

function createElement () {
    var div = document.createElement("div");
    div.className="accordion-group";
    var div2 = document.createElement("div");
    div2.className="accordion-heading";
    var a = document.createElement("a");
    a.className="accordion-toggle";
    a.setAttribute("data-toggle", "collapse");
    a.setAttribute("data-parent", "#accordion2");
    a.setAttribute("href", "#"+contact.id);

    var text = document.createTextNode(contact.firstName +' '+ contact.last_name);

    a.appendChild(text);
    div2.appendChild(a);
    div.appendChild(div2);
    accordion2.appendChild(div);

    var div3 = document.createElement("div");
    div3.className= "accordion-body";
    div3.className= div3.className+" collapse";
    div3.id= contact.id;


    var div4 = document.createElement("div");
    div4.classList= "accordion-inner editDel";
    var text2 = document.createTextNode(contact.firstName +' '+ contact.last_name+' '+contact.phone +' '+ contact.email+' '+contact.phone2 +' '+ contact.email2);
    div4.appendChild(text2);
    div3.appendChild(div4);
    div.appendChild(div3);

    var btn = document.createElement("button");
    btn.innerHTML="<i class='icon-pencil'></i>";
    div3.appendChild(btn);
    btn.classList="btn btn-success edit";
    btn.onclick=edit;
    var nbtn = document.createElement("button");
    nbtn.innerHTML="<i class='icon-trash'></i>";
    div3.appendChild(nbtn);
    nbtn.classList="btn btn-danger del";
    nbtn.onclick=del;
    }
function createElementOld (i) {
    var div = document.createElement("div");
    div.className="accordion-group";
    var div2 = document.createElement("div");
    div2.className="accordion-heading";
    var a = document.createElement("a");
    a.className="accordion-toggle";
    a.setAttribute("data-toggle", "collapse");
    a.setAttribute("data-parent", "#accordion2");
    a.setAttribute("href", "#"+contacts[i].id);

    var text = document.createTextNode(contacts[i].firstName +' '+ contacts[i].last_name);

    a.appendChild(text);
    div2.appendChild(a);
    div.appendChild(div2);
    accordion2.appendChild(div);

    var div3 = document.createElement("div");
    div3.className= "accordion-body";
    div3.className= div3.className+" collapse";
    div3.id= contacts[i].id;


    var div4 = document.createElement("div");
    div4.classList= "accordion-inner editDel";
    var text2 = document.createTextNode(contacts[i].firstName +' '+ contacts[i].last_name+" "+contacts[i].phone +' '+ contacts[i].email +' '+ contacts[i].phone2 +' '+ contacts[i].email2);
    div4.appendChild(text2);
    div3.appendChild(div4);
    div.appendChild(div3);

    var btn = document.createElement("button");
    btn.innerHTML="<i class='icon-pencil'></i>";
    div3.appendChild(btn);
    btn.classList="btn btn-success edit";
    btn.onclick=edit;
    var nbtn = document.createElement("button");
    nbtn.innerHTML="<i class='icon-trash'></i>";
    div3.appendChild(nbtn);
    nbtn.classList="btn btn-danger del";
    nbtn.onclick=del;
}
function del() {
    var id=this.parentElement.id;
    var that=this;
    swal({
        title: 'Contact'+" "+contact.firstName+" "+'Will be DEL',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(function () {

        for(var i =0; contacts.length>i;i++){
            if (contacts[i].id==id){
                contacts.splice(i,1);
                localStorage.setItem('pb.contacts', JSON.stringify(contacts));
            }
        }
        $(that.parentElement.parentElement).addClass('animated bounceOutDown');

        setTimeout(function () {
            that.parentElement.parentElement.parentElement.removeChild(that.parentElement.parentElement)
        },1000)


        swal(
            'Deleted!',
            'This looser has been deleted.',
            'success'
        )
    },function () {

    })

}


function saveChange(contact_id, firstName, last_name, phone, email, phone2, email2) {
    var keys = ['contact_id','firstName', 'last_name', 'phone', 'email', 'phone2', 'email2'];

    document.getElementById('search').style.display = 'inline-block';
    document.getElementById('add').style.display = 'inline-block';
    document.getElementById('add').style.display = 'inline-block';

    for (var i=1;i<arguments.length;i++){
        if (arguments[i] !== "") {$('#'+keys[i]).css({"border":""});}
    }


    if (firstName == "" ){
        $('#firstName').css({"border":"1px solid red"});
        document.getElementsByClassName('error-block')[0].style.display = "inline-block";
    };
    if ( last_name == "" ){
        $('#last_name').css({"border":"1px solid red"});
        document.getElementsByClassName('error-block')[0].style.display = "inline-block";

    };
    if (phone == ""){
        $('#phone').css({"border":"1px solid red"});
        document.getElementsByClassName('error-block')[0].style.display = "inline-block";
    };


    var result = email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig );

    if (!result && !(email == "")){
        $('#email').css({"border":"1px solid red"});
        return false
    }

    var result = email2.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig );

    if (!result && !(email2 == "")){
        $('#email2').css({"border":"1px solid red"});
        return false
    }

    if (firstName == "" || last_name == "" || phone == ""){
        return false;
    }

    document.getElementsByClassName('error-block')[0].style.display = "none";

    $('#firstName').css({"border":""});
    $('#last_name').css({"border":""});
    $('#phone').css({"border":""});
    $('#email').css({"border":""});
    $('#email2').css({"border":""});

    swal(
        'SAVED',
        contact.firstName+" "+contact.last_name,
        'success'
    )
    console.log(arguments);
    for(var i=0;contacts.length>i;i++){
        if(contact_id==contacts[i].id){
            contact={
                id:contact_id  || "",
                firstName:firstName  || "",
                last_name:last_name  || "",
                phone:phone  || "",
                email:email  || "",
                phone2:phone2  || "",
                email2:email2  || ""
            }
            contacts[i]=contact  || "";
            localStorage.setItem('pb.contacts', JSON.stringify(contacts));
    }
    document.getElementById('blanc').style.display="none";
    document.getElementById('accordion2').style.display="block";
    createEditElement();
}
}

function createEditElement() {
    console.log(document.getElementById(contact.id).children[0], document.querySelectorAll("[href='#"+contact.id+"']"));
    document.getElementById(contact.id).children[0].innerText=""+contact.firstName+" "+contact.last_name+" "+contact.phone+" "+contact.email+" "+contact.phone2+" "+contact.email2;
    document.querySelectorAll("[href='#"+contact.id+"']")[0].innerText=""+contact.firstName+" "+contact.last_name;

    document.getElementById('save').style.display="inline-block";
    document.getElementById('saveChange').style.display="none";
}

function secondPhone(){
    document.getElementById('secondP').style.display ='none';
    document.getElementById('phone2').style.display ='inline-block';
    document.getElementById('remSecondP').style.display ='inline-block';
    phone2.value=q || phone2.value;
}
function secondEmail(){
    document.getElementById('secondE').style.display ='none';
    document.getElementById('email2').style.display ='inline-block';
    document.getElementById('remSecondE').style.display ='inline-block';
    email2.value=p || email2.value;
}
function secondPhoneRemove(){
    document.getElementById('remSecondP').style.display ='none';
    document.getElementById('phone2').style.display ='none';
    document.getElementById('secondP').style.display ='inline-block';
    q = phone2.value;
    phone2.value='';
}
function secondEmailRemove(){
    document.getElementById('secondE').style.display ='inline-block';
    document.getElementById('email2').style.display ='none';
    document.getElementById('remSecondE').style.display ='none';
    p = email2.value;
    email2.value = '';
}

phone.onkeypress = phone2.onkeypress = function(e) {
    var chr = getChar(e);

    if (chr < '0' || chr > '9') {
        return false;
    }
}

function getChar(event) {

    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which)
    }

    return null;
}

