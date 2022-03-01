export default {
    props: [],
    template: `
        <section class="book-filter">
            <label>
                Search Book:
                <input @input="setFilter" v-model="filterBy.title" type="text">
            </label>
        </section>
   `,
    data() {
        return {
            filterType: null,
            filterBy: {
                title: ''
            }
        }
    },
    methods: {
        setFilter() {
            console.log(this.filterBy);
            this.$emit('filtered', this.filterBy)
        }
    },

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