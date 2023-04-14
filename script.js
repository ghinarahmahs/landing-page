const handleGetFormData = () => ({
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    city: document.getElementById('city').value,
    zipCode: document.getElementById('zip-code').value,
    status: document.getElementById('status').checked,
  });
  
  function isNumber(num) {
    if (isNaN(num)) {
      return false;
    } else {
      return true;
    }
  }
  
  function checkboxIsChecked() {
    if (document.getElementById('status').checked) {
      return true;
    } else {
      return false;
    }
  }
  
  
  
  const validateFormData = (obj) =>
    obj && isNumber(obj.zipCode) && checkboxIsChecked();
  
  function submit() {
    if (validateFormData(handleGetFormData()) == false) {
      return (document.getElementById("warning").innerHTML =
        "Periksa form anda sekali lagi");
    } else {
      return (document.getElementById("warning").innerHTML = "");
    }
  }