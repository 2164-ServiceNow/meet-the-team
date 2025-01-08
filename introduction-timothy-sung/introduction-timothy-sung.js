function updateTimothySungImage() {
        let imageElement = document.getElementById("timothy-sung-image")
        let curSrc = imageElement.getAttribute("src")
        if (curSrc === "sung-images/IMG_2501 (1).jpg") {
            imageElement.setAttribute("src", "sung-images/Artfight 2024 Ally.jpg")
        } else if (curSrc === "sung-images/Artfight 2024 Ally.jpg") {
            imageElement.setAttribute("src", "sung-images/Artfight 2024 Rodge R.jpg")
        } else if (curSrc === "sung-images/Artfight 2024 Rodge R.jpg") {
            imageElement.setAttribute("src", "sung-images/Artfight 2024 TEN.gif")
        } else if (curSrc === "sung-images/Artfight 2024 TEN.gif") {
            imageElement.setAttribute("src", "sung-images/IMG_2501 (1).jpg")
        }
}