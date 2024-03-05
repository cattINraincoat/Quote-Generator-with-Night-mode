

const button=document.querySelector('button');
button.addEventListener('click', async function(){

    const response = await axios.get("https://api.quotable.io/random");
    const quote= response.data.content;
    const author= response.data.author;
    const blockquote= document.querySelector('blockquote');
    const span= document.querySelector('span');
    blockquote.innerHTML=quote;
    span.innerHTML=author;
    
})



// light mode and dark mode
const icon= document.querySelector('#icon');

icon.addEventListener('click', function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme"))
    {
        icon.classList.replace("fa-moon","fa-sun");
    }
    else{
        icon.classList.replace("fa-sun","fa-moon");
    }
    
})
