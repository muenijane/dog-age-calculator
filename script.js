function calculateDogAge() {
    var myAge= document.getElementById('years').value;
    var dogAge = myAge * 7;
    document.getElementById('result').innerHTML= dogAge + ' years old in human years.';
    
  }
  function calculateMyAge() {
    var DogAge= document.getElementById('years').value;
    var MyAge = DogAge / 7;
    document.getElementById('result').innerHTML= MyAge + ' years old in Dog Years.';
    
  }