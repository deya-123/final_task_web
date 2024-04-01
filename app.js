


let form =document.getElementById('userInfoForm')

form.addEventListener('submit', function(event) {
    event.preventDefault();

  
    const cardHtml = `
        <div class="col-md-4 ">
            <div class="card" style="border: 1px solid #000; margin-bottom: 64px;">
                <div class="card-body" >
                    <h5 class="card-title">${event.target.firstName.value} ${event.target.lastName.value}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${event.target.email.value}</h6>
                    <p class="card-text">Phone: ${event.target.phone.value}</p>
                    <p class="card-text">Date of Birth: ${event.target.dob.value}</p>
                    <p class="card-text">Gender: ${event.target.gender.value}</p>
                    <p class="card-text">Address: ${event.target.address.value}</p>
                </div>
            </div>
        </div>
    `;

   
    document.getElementById('gridInfo').innerHTML += cardHtml;

    event.target.reset();
});

document.getElementById('clearForm').addEventListener('click', function() {
   
    document.getElementById('userInfoForm').reset();

});
