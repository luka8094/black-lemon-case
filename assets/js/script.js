window.onload= () => {
    
    const slider = document.getElementById("slider-row");
    const sliderItemContent = `<button type="button" class="slider-item-button" href="#">
    <img class="slider-item-image" src="assets/img/image 6.png">
    <p>HAND POMADE / POMMADE MAINS</p>
    <p>NOURISHMENT FOR YOUR HANDS</p>
    <p>159,00 KR</p>
    </button>
    `

    //This function auto-fills the slider by appending a number of elements to it.
    //@Params{number}: decides the extra amount of additional suggestion items to be added to the horizontal slider queue 
    ;(function appendItems(number){
        for(let i = 0; i < number; i++){
            const newSliderItem = document.createElement("li")

            newSliderItem.classList.add("slider-item")
            newSliderItem.innerHTML = sliderItemContent

            slider.append(newSliderItem)
        }
    })(5)

}