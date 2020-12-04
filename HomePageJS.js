var role = "ADMIN";

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction()
{
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event)
{
    if (!event.target.matches('.dropbtn'))
    {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++)
      {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show'))
        {
          openDropdown.classList.remove('show');
        }
      }
    }
}


//reusable access denied text and link
function noAccess(roleName, element){
    element.href = "#"
     document.getElementById("accessDenied").innerHTML  = "<b>Access Denied</b>"
       document.getElementById("reason").innerHTML = "You do not have authorization to view " + roleName + " page."
}

//set links on the buttons according to authorization
window.onload = function(){
    //support admin link
    document.getElementById("admin").onclick = function() {
        if (role == "ADMIN"){
            document.getElementById("admin").href = "SupportPage.html";
        }
        else{
            noAccess("Support Admin", document.getElementById("admin"));
        }
    }

    //finance admin links
    document.getElementById("financeAdmin").onclick = function() {
        if (role == "FINANCE_ADMIN"){
            document.getElementById("financeAdmin").href = "FinancePage.html";
        }
        else{
            noAccess("Finance Admin", document.getElementById("financeAdmin"));
        }
    }

    //sales admin link
    document.getElementById("salesAdmin").onclick = function() {
        if (role == "SALES_ADMIN"){
            document.getElementById("salesAdmin").href = "SalesPage.html";
        }
        else{
            noAccess("Sales Admin", document.getElementById("salesAdmin"));
        }
    }

    //HR admin link
    document.getElementById("hrAdmin").onclick = function() {
        if (role == "HR_ADMIN"){
            document.getElementById("hrAdmin").href = "HRPage.html";
        }
        else{
            noAccess("HR Admin", document.getElementById("hrAdmin"));
        }
    }

    //technology admin link
    document.getElementById("techAdmin").onclick = function() {
        if (role == "TECH_ADMIN"){
            document.getElementById("techAdmin").href = "TechnologyPage.html";
        }
        else{
            noAccess("Technology Admin", document.getElementById("techAdmin"));
        }
    }
}

//set role to top down choice
function getActiveAdminRole(){
   var element = document.getElementById("mySelect");
   var selected = element.options[element.selectedIndex].value;

   role = selected;
   
   document.getElementById("role").innerHTML = "<b>Current Active Role:</b> " + role;
}



