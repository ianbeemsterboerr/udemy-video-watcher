//Because of how Udemy calls its own Backend when you click the checkmark for a video, it is only possible to watch x videos at once. Click a few times for courses with 200+ videos.
function clickButtons() {
    var buttons = document.getElementsByClassName("curriculum-item--progress--3eKMJ")
    for (i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("curriculum-item--is-completed--38V0M")) {

        } else {
            clickButton(buttons, i)
        }

    }
    alert('There is a max amount of videos the extension watches per click. Be sure to click again if not all videos are watched!')

}
function clickButton(buttonsArray, index) {
    buttonsArray[index].click();
}


clickButtons();