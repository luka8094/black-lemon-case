window.onload= () => {
    
    const slider = document.getElementById("slider-row");
    const sliderItemContent = `
    <img class="slider-item-image" src="assets/img/image 6.png">
    <p>HAND POMADE / POMMADE MAINS</p>
    <p>NOURISHMENT FOR YOUR HANDS</p>
    <p>159,00 KR</p>
    `

    //This function will auto-fill the carrousel by appending child elements to it.
    //@Params{number}: decides the extra amount of additional suggestion items to be added to the slider 
    ;(function appendItems(number){
        for(let i = 0; i < number; i++){
            const newSliderItem = document.createElement("li")

            newSliderItem.classList.add("slider-item")
            newSliderItem.innerHTML = sanitizer(sliderItemContent)

            slider.append(newSliderItem)
        }
    })(5)

    //This function would sanitize suspicious input
    function sanitizer(input){
        return input.replace(/</g, '&#60;')
            .replace(/>/g, '&#62;')
            .replace(/=/g, '&#61;')
            .replace(/$/g, '&#36;')
            .replace(/?/g, '&#63;')
            .replace(/}/g, '&#125;')
            .replace(/{/g, '&#123;')
    }
}