function setupTabs() { 
    document.querySelectorAll('.tabs_button').forEach(button =>{
        button.addEventListener('click' , function(){
        const sideBar = button.parentElement.parentElement;
        const navContainer = sideBar.parentElement.parentElement;
        const tabNumber = button.dataset.forNav;
        const sectionToActivate = navContainer.querySelector(`.tabs_content[data-nav ="${tabNumber}"]`);

        // removal of active tabs class 
            sideBar.querySelectorAll('.tabs_button').forEach(tab =>{
                tab.classList.remove('active_button')
            });
    
        // removal of active contents 
            navContainer.querySelectorAll('.tabs_content').forEach(cont =>{
                cont.classList.remove('your-active-class')
            });        
            // activate the clicked tab with its content 

            button.classList.add('active_button');
            sectionToActivate.classList.add('your-active-class')

        
        });
        
    });
}
// call the function 
document.addEventListener("DOMContentLoaded" , setupTabs)