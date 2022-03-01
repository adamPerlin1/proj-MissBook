import bookPreview from "./book-preview.cmp.js"

export default {
    props: ['books'],
    template: `
        <section class="book-list">
            <ul>
                <li v-for="book in books" class="book-preview-container">
                    <book-preview :book="book"></book-preview>
                    <!-- <button @click="select(book)">Details</button> -->
                    <router-link :to="'/book/'+book.id">Details</router-link>
                </li>
            </ul>
        </section>
   `,
    components: {
        bookPreview
    },
    data() {
        return {

        }
    },
    methods: {
        select(book) {
            this.$emit('selected', book)
        }

    },
    computed: {
    },
}