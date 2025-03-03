// this is getting the images for each user

export default {
    props: ['liveuser'],

    template: `
<div class="col-xs-12 col-sm-6 col-md-4 mx-auto">
                <div @click="navToUserHome()">
                    <div class="card-body text-center">
                        <img :src="'images/' + liveuser.avatar" class="img-fluid" alt="user photo" title="user photo">
                        <p>{{ liveuser.username }}</p>
                    </div>
                </div>
</div>`,

    created: function() {
        if (this.liveuser.avatar == null) {
            this.liveuser.avatar = "adults.jpg";
        }
    },

    methods: {
        navToUserHome() {            
            this.$router.push({ name: "home", params: { currentuser: this.liveuser } });
            // set a localstorage session object so that we don't have to log back in on page refresh or after our initial login
            localStorage.setItem("cachedUser", JSON.stringify(this.liveuser)); 
        }
    }
}
