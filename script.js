var countryElements = document.getElementById('countries').childNodes;
var countryCount = countryElements.length;
for (var i = 0; i < countryCount; i++) {
  countryElements[i].onclick = function () {
    alert('This is ' + this.getAttribute('data-name'));
  }
}

// background planes
