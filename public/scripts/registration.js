let errors = {
  firstName: {
    error: true,
    errorMsg: "First name is required"
  },
  lastName: {
    status: "failed",
    errorMsg: "Last name is required"
  },
  city: {
    status: "failed",
    errorMsg: "City is required"
  },
  state: {
    status: "failed",
    errorMsg: "State is required"
  },
  zip: {
    status: "failed",
    errorMsg: "Zip code is required"
  },
  age: {
    status: "failed",
    errorMsg: "Please select an age group"
  },
  gender: {
    status: "failed",
    errorMsg: "Please select your preferred gender option"
  },
  consent: {
    status: "failed",
    errorMsg: "Please accept the terms of the agreement"
  },
  bio: {
    status: "failed",
    errorMsg: "Please enter some information about yourself"
  }
}


function checkForm() {
   // The function returns the product of p1 and p2
}

exports.checkForm = function (req) {
  console.log("CLICK");
  console.log(req.body.firstName);
  console.log('hits');
  if(req.body.firstName.length == 0){
      errors.firstName.error = true;

  }else {
      console.log(req.body.firstName);
  }
}

