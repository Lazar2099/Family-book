var images = [
    "IMG_0168.JPG",
    "IMG_0168.JPG",
    "IMG_0168.JPG",
    "IMG_0168.JPG",
    "IMG_0168.JPG",
    "IMG_0168.JPG",
    
];
var names = [
"",
    "SISIR",
    "SRIKAR",
    "MAANASA",
    "SRIKRISHNA",
    "SWARNALATHA",
    "RENUKA",
    
    
];
var i = 0;
function update() {
    i++;
    var Number_of_family_member_in_array = 5
    if(i>Number_of_family_member_in_array)
    {
        i = 0;
    }
    var updateImage= images[i];
    var updateName= names[i];
    document.getElementById("myFamilyImage").src = updateImage;
    document.getElementById("family_member_names").innerHTML = updateName;
}