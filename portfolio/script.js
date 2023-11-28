console.log("script running...")
document.querySelector('.cross').style.display = 'none'
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.cross').style.display = 'none'
        setTimeout(()=> {
            document.querySelector('.ham').style.display = 'inline'
        }, 250);
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(()=> {
            document.querySelector('.cross').style.display = 'inline'
        }, 500);
        
    }
})