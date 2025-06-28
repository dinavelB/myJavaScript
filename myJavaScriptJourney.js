function myBody () {
var myValue = document.getElementById('myTextBox').value;

if(myValue.lenght == 0){
    alert('Please type a value in the textbox!');
    return;
}
var myHeader = document.getElementById('theHeader');
myHeader = myValue;

}