function onlyAlphabets(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            return true;
        else {
          alert("Numbers not allowed.");
          return false;
        }
    }
    catch (err) {
        alert(err.Description);
    }
  }
  
  let dateDropdown = document.getElementById('year'); 
         
    let currentYear = new Date().getFullYear();    
    let earliestYear = 1950;     
    while (currentYear >= earliestYear) {      
      let dateOption = document.createElement('option');          
      dateOption.text = currentYear;      
      dateOption.value = currentYear;        
      dateDropdown.add(dateOption);      
      currentYear -= 1;    
    }
  
  function goToHome() {
    window.location = '/';    
  }
  function goAdd() {
    window.location = '/addFaculty';    
  }
  function goAdmin() {
    window.location = '/admin';    
  }

  
  function titleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  function getAuthorsString() {
    var elements = document.forms["fullName"].getElementsByTagName("input");
    if(elements[0].value == '') {
      alert("Please enter the required fields!");
    }
    else if(elements[1].value == '' && elements[2].value == '') {
      return elements[0].value.slice(0,1).toUpperCase() + elements[0].value.slice(1).toLowerCase();
    }
    else if(elements[1].value == '') {
      return elements[0].value.slice(0,1).toUpperCase() + '. ' + elements[2].value.slice(0,1).toUpperCase() + elements[2].value.slice(1).toLowerCase();
    }
    else {
      return elements[0].value.slice(0,1).toUpperCase() + '. ' + elements[1].value.slice(0,1).toUpperCase() + '. ' + elements[2].value.slice(0,1).toUpperCase() + elements[2].value.slice(1).toLowerCase();
    }
  }
  
  function getConferenceString() {
    var elements = document.forms["conferenceFields"].getElementsByTagName("input");
    var temp = document.forms["conferenceFields"].getElementsByTagName("select");
    var year = temp[0].value;
    var final = '';
    if(elements[0].value == '' || elements[1].value == '' || elements[3].value == '' || elements[4].value == '' || elements[6].value == '' || elements[7].value == '' || elements[8].value == '' || year == '')
    alert("Please enter the required fields!");
    else {
      final = final + '"' + titleCase(elements[0].value) + '", in ' + titleCase(elements[1].value);
      if(elements[2].value != '') {
        final = final + ' (' + elements[2].value.toUpperCase() + ')';
      }
      final = final + ', ' + titleCase(elements[3].value) + ', ' + titleCase(elements[4].value);
      if(elements[5].value != '') {
        final = final + ', ' + titleCase(elements[5].value);
      }
      final = final + ', ' + titleCase(elements[6].value) + ', ' + year + ', pp. ' + elements[7].value + '-' + elements[8].value + '.';
    }
    return final;
  }
  
  function getBookChapterString() {
    var elements = document.forms["bookChapterFields"].getElementsByTagName("input");
    var temp = document.forms["bookChapterFields"].getElementsByTagName("select");
    var year = temp[0].value;
    var final = '';
    if(elements[0].value == '' || elements[1].value == '' || elements[2].value == '' || elements[3].value == '' || elements[4].value == '' || elements[5].value == '' || year == '')
    alert("Please enter the required fields!");
    else {
      final = final + '"' + titleCase(elements[0].value) + '", ' + titleCase(elements[1].value) + ', In: ' + titleCase(elements[2].value) + ', pp. ' + elements[3].value + '-' + elements[4].value + ', ' + titleCase(elements[5].value) + ', ' + year + '.';
    }
    return final;
  }
  
  function getPublicationString() {
    var elements = document.forms["publicationFields"].getElementsByTagName("input");
    var temp = document.forms["publicationFields"].getElementsByTagName("select");
    var year = temp[0].value;
    var final = '';
    if(elements[0].value == '' || elements[1].value == '' || elements[2].value == '' || elements[4].value == '' || elements[5].value == '' || year == '')
    alert("Please enter the required fields!");
    else {
      final = final + '"' + titleCase(elements[0].value) + '", ' + titleCase(elements[1].value) + ', vol. ' + elements[2].value;
      if(elements[3].value != '') {
        final = final + ', no. ' + elements[3].value;
      }
      final = final + ', pp. ' + elements[4].value + '-' + elements[5].value + ', ' + year + '.';
    }
    return final;
  }

  var authorCount = 1;

  const input = document.querySelector(".input-grp");
  
  function addNewAuthor(){
    authorCount++;
  
    const fName = document.createElement("input");
    fName.type = "text";
    fName.id = "firstname" + authorCount;
    fName.name = "firstname" + authorCount;
  
    const fNameSpan = document.createElement("span");
    fNameSpan.textContent = "First Name: "
    fNameSpan.appendChild(fName);
  
    const mName = document.createElement("input");
    mName.type = "text";
    mName.id = "middlename" + authorCount;
    mName.name = "middlename" + authorCount;
  
    const mNameSpan = document.createElement("span");
    mNameSpan.textContent = "Middle Name: "
    mNameSpan.appendChild(mName);
  
    const lName = document.createElement("input");
    lName.type = "text";
    lName.id = "lastname" + authorCount;
    lName.name = "lastname" + authorCount;
  
    const lNameSpan = document.createElement("span");
    lNameSpan.textContent = "Last Name: "
    lNameSpan.appendChild(lName);
  
    const fNamediv = document.createElement("div");
    fNamediv.style="margin-right:10px";
    fNamediv.appendChild(fNameSpan);
  
    const mNamediv = document.createElement("div");
    mNamediv.style="margin-right:10px"
    mNamediv.appendChild(mNameSpan);
  
    const lNamediv = document.createElement("div");
    lNamediv.style="margin-right:10px"
    lNamediv.appendChild(lNameSpan);
  
    const btn = document.createElement("a");
    btn.className = "delete";
    btn.innerHTML = "&times";
    btn.addEventListener("click", deleteAuthor);
  
    const space = document.createElement("p");
  
    const inputGrp = document.createElement("div");
    inputGrp.className = "author";
    inputGrp.appendChild(space);
    inputGrp.appendChild(fNamediv);
    inputGrp.appendChild(mNamediv);
    inputGrp.appendChild(lNamediv);
    inputGrp.appendChild(btn);
  
    input.appendChild(inputGrp);
  }
  
  function deleteAuthor(){
    if(authorCount==1){
      alert("Minimum one author required!");
    }
    else{
      authorCount--;
      this.parentElement.remove();
    }
  }