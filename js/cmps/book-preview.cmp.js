export default {
   props: ['book'],
   template: `
      <section class="book-preview">
         <img :src="book.thumbnail">
         <p>{{book.title}}</p>
         <p>{{setPrice}}</p>
      </section>
   `,
   data() {
      return {
         price: this.book.listPrice.amount
      }
   },
   methods: {},
   computed: {
      setPrice() {
         const currencyCode = this.book.listPrice.currencyCode
         return this.price.toLocaleString(navigator.language, { style: 'currency', currency: currencyCode })
      },

   }
}

