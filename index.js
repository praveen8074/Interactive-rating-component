document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit");
    const thanksContainer = document.querySelector(".thank-you");
    const rateAgainButton = document.getElementById("rate-again");
    const mainContainer = document.querySelector(".container");
    const rating = document.getElementById("rating");
    const rates = document.querySelectorAll(".btn");

    if (!submitButton || !thanksContainer || !rateAgainButton || !mainContainer) {
        console.error("One or more elements not found.");
        return;
    }

    // Function to handle when the submit button is clicked
    const handleSubmitClick = () => {
        console.log("Submit button clicked.");
        // Show the thank-you container
        thanksContainer.classList.remove("hidden");
        // Hide the main container
        mainContainer.classList.add("hidden");
    };

    // Function to handle when the rate-again button is clicked
    const handleRateAgainClick = () => {
        console.log("Rate again button clicked.");
        // Hide the thank-you container
        thanksContainer.classList.add("hidden");
        // Show the main container
        mainContainer.classList.remove("hidden");
    };

    // Function to handle when a rating button is clicked
    const handleRatingButtonClick = (event) => {
        console.log("Rating button clicked.");
        // Get the rating from the clicked button
        const selectedRating = event.target.innerHTML;
        // Update the rating displayed in the thank-you message
        rating.innerHTML = selectedRating;
    };

    // Add click event listener to the submit button
    submitButton.addEventListener("click", handleSubmitClick);

    // Add click event listener to the rate-again button
    rateAgainButton.addEventListener("click", handleRateAgainClick);

    // Add click event listener to each rating button
    rates.forEach(rate => {
        rate.addEventListener("click", handleRatingButtonClick);
    });
});
