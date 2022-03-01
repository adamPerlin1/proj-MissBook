import { bookService } from '../services/book-service.js'
import bookFilter from '../cmps/book-filter.cmp.js'
import bookList from '../cmps/book-list.cmp.js'
// import bookDetails from './book-details.cmp.js'

export default {
    template: `
        <section class="book-app">
            <book-filter @filtered="setFilter"></book-filter>
            <!-- IN EVERY  -->
            <book-list :books="booksToShow"></book-list>
            <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="selectedBook = null"></book-details> -->
        </section>
   `,
    components: {
        bookFilter,
        bookList,
        // bookDetails
    },
    data() {
        return {
            books: null,
            filterBy: null,
            // selectedBook: null,
        }
    },
    created() {
        bookService.query()
            .then(books => this.books = books)
    },
    methods: {
        // selectBook(book) {
        //     console.log(book);
        //     this.selectedBook = book
        // },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }

    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books
            const regex = new RegExp(this.filterBy.title, 'i')
            return this.books.filter(book => regex.test(book.title))
        }
    },
}