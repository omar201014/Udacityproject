
const navBar = document.querySelector('.tabs__sidebar')
const sections = Array.from(document.getElementsByClassName('tabs_content'))
for (section of sections){
const item = document.createElement('li')
item.classList.add('buttton_holder')
 const itemLink = document.createElement('a')
 itemLink.textContent= section.dataset.nav
 itemLink.classList.add('tabs_button')
const id = section.getAttribute('id')
itemLink.setAttribute('data-for-nav' , id )
itemLink.setAttribute('href' , `#${id}`)
item.appendChild(itemLink)  
navBar.appendChild(item)
console.log(section);
}



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



