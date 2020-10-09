

function pageInit(){
    let page = window.location.pathname.split("/").pop().split(".").shift();
    document.getElementById(page).style.color="rgba(38, 163, 235, 0.836)";
    document.getElementById(page).style.textDecoration="underline";
    document.getElementById(page).style.fontWeight="bold";
}
