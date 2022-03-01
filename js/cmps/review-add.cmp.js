import { bookService } from '../services/book-service.js'

export default {
    props: ['bookId'],
    template: `
        <section class="review-add">
            <form>
                <fieldset>
                    <legend>Add your review here</legend>

                    <label>Full Name: </label>
                    <input v-model="review.name" type="text">
                    
                    <label>Rate: </label>
                    <select v-model.number="review.rate">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>

                    <label for="free-text">Enter your review here:</label>
                    <textarea v-model="review.txt" id="free-text" cols="30" rows="10"></textarea>


                    <button @click.prevent="addReview">Add Review</button>

                    <pre>{{review}}</pre>
                </fieldset>

            </form>
        </section>
   `,
    data() {
        return {
            review: {
                name: 'Book Reader',
                rate: null,
                txt: null
            }
        }
    },
    mounted(){
        // this.$refs.rateInput.focus()
    },
    methods: {
        addReview() {
            console.log(this.review);
            bookService.addReview(this.bookId, this.review)
                .then(() => this.$emit('reviewAdded', this.bookId))
        }
    },
    computed: {
    },
}