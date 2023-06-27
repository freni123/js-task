// Store the data in an array
var dataStore = [];

function validateForm() {
    // Get form values
    var firstName = document.forms["myform"]["fname"].value;
    var lastName = document.forms["myform"]["lname"].value;
    var email = document.forms["myform"]["email"].value;
    var phoneNo = document.forms["myform"]["phoneno"].value;
    var birthDate = document.forms["myform"]["dob"].value;
    // var gender = document.querySelector('input[name="gender"]:checked');
    // var address = document.querySelector('input[name="address"]');
    var gender = document.forms["myform"]["gender"].value;
    var address = document.forms["myform"]["address"].value;


    let Fnameerror = document.getElementById("error_fanme");
    let lanmeerror = document.getElementById("error_lanme");
    let Emailerror = document.getElementById("error_email");
    let Phonenoerror = document.getElementById("error_phoneno");
    let Doberror = document.getElementById("error_dob");
    let Gendererror = document.getElementById("error_gender");
    let Addresserror = document.getElementById("error_address");

    try{
        Fnameerror.textContent = "";
        lanmeerror.textContent = "";
        Emailerror.textContent = "";
        Phonenoerror.textContent = "";
        Doberror.textContent = "";
        Gendererror.textContent = "";
        Addresserror.textContent = "";

       if (firstName === "") throw 'firstname cannot be empty';
       if (!isNaN(firstName)) throw 'firstname cannot be a number';
       if (firstName.length < 3) throw 'firstname must be at least 3 characters';
       if (firstName.length > 10) throw 'firstname must be less than 10 characters';

       if (lastName === "") throw 'lastname cannot be empty';
       if (!isNaN(lastName)) throw 'lastname cannot be a number';
       if (lastName.length < 3) throw 'lastname must be at least 3 characters';
       if (lastName.length > 10) throw 'lastname must be 10 characters';


        if(phoneNo === "") throw 'name cannot be empty';
        if(isNaN(phoneNo)) throw 'phoneno can not be number';
        if(phoneNo.length !== 10)throw 'phoneno must be 10 number';

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") throw 'email cannot be empty';
        if (!email.match(emailRegex)) throw 'invalid email format';

        if(!gender) throw 'please select a gender';

        
        // Validate birthdate format (assuming YYYY-MM-DD)
        var birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!birthDate.match(birthDateRegex)) throw 'invalid birth date format';
        if (birthDate === "") throw 'birth date cannot be empty';


        // Create an object to store the form data
        var formData={
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNo: phoneNo,
            birthDate: birthDate,
            gender: gender,
            address: address
        };
        //push the object 
        dataStore.push(formData);
        console.log(formData);

        //clear the form inputs
        //  document.forms['myform'].reset();

        renderTable(dataStore); //data store the datatable
    }catch(err){
        console.log(err);
    }
    return false;
}

function renderTable(data) {

    var tableData = document.getElementById("Table");

    data.map(function(item){
        var row = tableData.insertRow(-1);
        
        var nameCell = row.insertCell(0);
        // nameCell.innerHTML = item.firstName + " " + item.lastName; 
        nameCell.innerHTML = item.firstName.concat(" ",item.lastName);

        var emailCell = row.insertCell(1);
        emailCell.innerHTML = item.email;

        var phoneNoCell = row.insertCell(2);
        phoneNoCell.innerHTML = item.phoneNo;
         
        var birthdateCell = row.insertCell(3);
        birthdateCell.innerHTML = item.birthDate;

        var genderCell = row.insertCell(4);
        genderCell.innerHTML = item.gender;

        var addressCell = row.insertCell(5);
        addressCell.innerHTML = item.address;

     });
}
