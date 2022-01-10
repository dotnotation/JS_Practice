import { Dog } from "./dog"
import { dogs } from "../public/data"
import { Review } from "./review"
import { reviews } from "../public/data"

const dogDiv = document.getElementById("dog-list")
const reviewDiv = document.getElementById("review-list")

document.addEventListener("DOMContentLoaded", () => {
    addDogs()
    addReviews()
})

const addDogs = () => {
    for (const dogData of dogs) {
      const { id, name, breed } = dogData
      const dog = new Dog(id, name, breed)
      Dog.all.push(dog)
      dogDiv.insertAdjacentHTML("beforeend", dog.renderDog())
    }
};

const addReviews = () => {
    for (const reviewData of reviews) {
      const { id, text } = reviewData
      const review = new Review(id, text)
      Review.all.push(review)
      reviewDiv.insertAdjacentHTML("beforeend", review.renderReview())
    }
};

