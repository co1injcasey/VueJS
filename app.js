const app = Vue.createApp({
    data() {
        return {
            firstName: 'Colin',
            lastName: 'Doe',
            email: 'colin@test.tech',
            gender: 'male',
            picture: 'https://deenet.tech/images/feature/PresidentProfilePhoto.jpg',
          }
        },
        methods: {
            getUser() {
            // this.firstName = results[0].name.first
            this.firstName = 'Diedri',
            this.lastName = 'Casey',
            this.email = 'dc@test.tech',
            this.gender =  'female',
            this.picture = 'https://deenet.tech/images/team/Diedri.JPG'
        
            },
        },



})


app.mount('#app')