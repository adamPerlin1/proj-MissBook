import { bookService } from '../services/book-service.js'
import longText from '../cmps/long-text.cmp.js'
import reviewAdd from '../cmps/review-add.cmp.js'

export default {
    template: `
        <section v-if="book" class="book-details app-main">
            <h3>Book details</h3>
            <img :src="book.thumbnail">

            <section v-if="!isForm" class="details">
                <p v-if="!fullTxtShown">
                    {{bookDescription}}
                    <br>
                    <button v-if="book.description.length >= 100" @click="toggleFullTxt">Show More</button>
                </p>
                <long-text v-else @showLess="toggleFullTxt" :txt="book.description"></long-text>
                
                <div>Reading Time: {{readingTime}}</div>
                <div>This book is: {{publishTime}}</div>
                <div :class="colorBasedPrice">
                    Price: {{formattedPrice}}
                </div>

                <router-link to="/book">X</router-link>
                <button @click="toggleForm">Add Review</button>
            </section>
            <review-add v-else :bookId="book.id"></review-add>
        </section>
   `,
    components: {
        longText,
        reviewAdd
    },
    data() {
        return {
            fullTxtShown: false,
            book: null, // get this from created()
            isForm: false
        }
    },
    created() {
        const id = this.$route.params.bookId
        bookService.get(id)
            .then(book => this.book = book)
    },
    methods: {
        toggleFullTxt() {
            this.fullTxtShown = !this.fullTxtShown
        },
        toggleForm() {
            this.isForm = !this.isForm
        }

    },
    computed: {
        readingTime() {
            const { pageCount } = this.book
            if (pageCount > 500) return 'Long Reading'
            else if (pageCount > 200) return 'Decent Reading'
            else return 'Light Reading'
        },
        publishTime() {
            const { publishedDate } = this.book
            const age = new Date().getFullYear() - publishedDate
            if (age > 10) return 'Veteran Book'
            else if (age > 1) return 'New!'
        },
        colorBasedPrice() {
            const { amount } = this.book.listPrice
            return { red: amount >= 150, green: amount <= 20 }
        },
        formattedPrice() {
            const { currencyCode, amount, language } = this.book.listPrice
            return amount.toLocaleString(language, { style: 'currency', currency: currencyCode })
        },
        bookDescription() {
            const rest = (this.book.description.length >= 100) ? '...' : ''
            return this.book.description.substring(0, 100) + rest
        }
    },
    unmounted() {
        this.fullTxtShown = false
    }
}

// {
//    "id": "OXeMG8wNskc",
//    "title": "metus hendrerit",
//    "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
//    "authors": [
//        "Barbara Cartland"
//    ],
//    "publishedDate": 1999,
//    "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
//    "pageCount": 713,
//    "categories": [
//        "Computers",
//        "Hack"
//    ],
//    "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
//    "language": "en",
//    "listPrice": {
//        "amount": 109,
//        "currencyCode": "EUR",
//        "isOnSale": false
//    }
// },