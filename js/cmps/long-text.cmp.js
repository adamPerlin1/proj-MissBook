export default {
    props: ['txt'],
    emits: ['showLess'],
    template: `
        <div class="long-description">
            <p>{{txt}}</p>
            <br>
            <button @click="$emit('showLess')">Show Less</button>
        </div>
   `,
}