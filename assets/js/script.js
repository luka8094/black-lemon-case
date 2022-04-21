window.onload= () => {
    
    const slider = document.getElementById("slider-row");
    const sliderItemContent = `<img class="slider-item-image" src="assets/img/image 6.png">
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
            newSliderItem.innerHTML = sliderItemContent

            slider.append(newSliderItem)
        }
    })(5)

}