let contactList = JSON.parse(localStorage.getItem('contactList')) || [] ;

function validate(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;

    if (!id || !name || !email || !contact){
        alert('Please fill the Entire Field ...!');
        return false;
    }
    if (!email.includes('@')){
        alert('Please Enter Proper Mail Address');
        return false;
    }
    
    return true;
}

function addContact(){
    if (validate() == true){
        let id = document.getElementById('id').value;
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let contact = document.getElementById('contact').value;

        contactList.push({
            id : id ,
            name : name ,
            email : email ,
            contact : contact
        })
        localStorage.setItem('contactList',JSON.stringify(contactList));
        showContact()
        resetValue()
    }
}

function showContact(){
    resultElement = document.getElementById('result');
    resultElement.innerHTML = ''
    if (contactList.length == 0){
        resultElement.innerHTML = `<tr><td colspan='5'>Contact List Is Empty</td></tr>`
    }else{
        contactList.forEach((element,index) => {
            resultElement.innerHTML += `<tr>
                <td>
                    ${element.id}
                </td>
                <td>
                    ${element.name}
                </td>
                <td>
                    ${element.email}
                </td>
                <td>
                    ${element.contact}
                </td>
                <td>
                  <button id='delete-btn' onclick='deleteContact(${index})'>Delete</button>
                  <button id='update-btn' onclick='updateContact(${index})'>Update</button>   
                </td>
            </tr>`
        });
    }
}

function resetValue(){
    document.getElementById('id').value = "" 
    document.getElementById('name').value = ""   
    document.getElementById('email').value = ""  
    document.getElementById('contact').value = ""
}

function deleteContact(index){
    contactList.splice(index,1);
    localStorage.setItem('contactList',JSON.stringify(contactList));
    showContact()

}

function updateContact(index){
    document.getElementById('update').style.display = 'block';
    document.getElementById('submit').style.display = 'none';

    document.getElementById('id').value = contactList[index].id;
    document.getElementById('name').value = contactList[index].name;    
    document.getElementById('email').value = contactList[index].email; 
    document.getElementById('contact').value = contactList[index].contact;

   

    document.getElementById('update').onclick = function(){
        let id = document.getElementById('id').value;
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let contact = document.getElementById('contact').value;

        if (validate() == true){
            contactList[index].id = id;
            contactList[index].name = name;
            contactList[index].email = email;
            contactList[index].contact = contact;

            localStorage.setItem('contactList',JSON.stringify(contactList));
            showContact()
            resetValue()

            document.getElementById('update').style.display = 'none';
            document.getElementById('submit').style.display = 'block';
        }
    }

    

}



showContact()