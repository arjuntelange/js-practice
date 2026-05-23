const image_1 = "https://images.pexels.com/photos/629167/pexels-photo-629167.jpeg";
const image_2 = "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg";
const image_3 = "https://images.pexels.com/photos/547125/pexels-photo-547125.jpeg";
const image_4 = "https://images.pexels.com/photos/753325/pexels-photo-753325.jpeg";

const img_arr = [image_1, image_2, image_3, image_4];
let current_img = 0;

const image = document.getElementById("image");
image.src = img_arr[current_img];

const next_button = document.getElementById("next-btn");
const previous_button = document.getElementById("previous-btn");


next_button.addEventListener("click", () => {
    image.style.opacity = 0;

    setTimeout(() => {
        if (current_img < img_arr.length - 1) {
            current_img++;

            image.src = img_arr[current_img];
        }

        image.style.opacity = 1;
    }, 300)
});


previous_button.addEventListener("click", () => {
    image.style.opacity = 0;

    setTimeout(() => {
        if (current_img > 0) {
            current_img--;

            image.src = img_arr[current_img];
        }

        image.style.opacity = 1;
    }, 300)
});