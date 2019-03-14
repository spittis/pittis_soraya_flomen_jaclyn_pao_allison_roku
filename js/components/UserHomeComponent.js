

// this is the main movie area


export default {
    props: ['currentuser'],

    template: `
    <div class="container">
    <!-- render this if we're viewing television or film -->
        <div class="row" v-if="activeMediaType == 'video' && retrievedMedia.length > 0">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-title">{{currentMediaDetails.movie_title}}</h4>
                <p class="media-details" v-html="currentMediaDetails.movie_storyline"></p>
                <span class="media-time">{{currentMediaDetails.movie_runtime}}</span>
                <span class="media-year">Released {{currentMediaDetails.movie_year}}</span>
            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <video autoplay controls muted :src="'video/' + currentMediaDetails.movie_trailer" class="fs-video"></video>
            </div>
        </div>

        <!-- render this if we're viewing television -->
        <div class="row" v-if="activeMediaType == 'television' && retrievedMedia.length > 0">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-title">{{currentMediaDetails.tv_title}}</h4>
                <p>Seasons Available:</p><p class="media-details" v-html="currentMediaDetails.tv_season"></p>
                <span class="media-time">{{currentMediaDetails.tv_runtime}}</span>
                <span class="media-year">Released: {{currentMediaDetails.tv_released}}</span>
            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <video autoplay controls muted :src="'video/' + currentMediaDetails.tv_trailer" class="fs-video"></video>
            </div>
        </div>


        <div class="row" v-if="activeMediaType == 'audio' && retrievedMedia.length > 0">
            <div class="col-12 order-2 order-md-1 col-md-6 media-container">
                <h4 class="media-title">{{currentMediaDetails.audio_title}}</h4>
                <h5>{{currentMediaDetails.audio_artist}}</h5>
                <p class="media-details" v-html="currentMediaDetails.audio_runtime"></p>
                <span class="media-year">Released: {{currentMediaDetails.audio_released}}</span>              
            </div>

            <div class="col-12 order-1 order-md-2 col-md-6 audio-wrapper">
                <audio autoplay controls :src="'audio/' + currentMediaDetails.audio_src"/>
                <img :src="'images/' + currentMediaDetails.audio_cover" alt="album art" class="img-fluid"/>
            </div>
        </div>

        <div class="row"> <!-- 2-up for nav and media info -->
            <nav class="col-12 col-sm-3 side-nav">
                <ul class="media-type">
                    <li v-for="media in mediaTypes" :data-type="media.description" @click="loadMedia(null, media.description)">
                        <span>
                            <i v-bind:class="[media.iconClass]"></i>
                        </span>
                        
                        <span class="d-none d-md-block">{{ media.description }}</span>
                    </li>
                </ul>
            </nav>

            <div class="col-12 col-sm-9 media-info">
                <!-- genres for video -->
                    <ul v-if="activeMediaType == 'video'" class="media-genres">
                        <li>
                            <a href="action" @click.prevent="loadMedia('action', 'video')">Action</a>
                        </li>
                        <li>
                            <a href="comedy" @click.prevent="loadMedia('comedy', 'video')">Comedy</a>
                        </li>
                        <li>
                            <a href="family" @click.prevent="loadMedia('family', 'video')">Family</a>
                        </li>
                        <li>
                            <a href="sci-fi" @click.prevent="loadMedia('sci-fi', 'video')">Sci-Fi</a>
                        </li>
                        <li>
                            <a href="drama" @click.prevent="loadMedia('drama', 'video')">Drama</a>
                        </li>
                        <li>
                            <a href="romance" @click.prevent="loadMedia('romance', 'video')">Romance</a>
                        </li>
                        <li>
                            <a href="horror" @click.prevent="loadMedia(null, 'video')">All</a>
                        </li>
                    </ul>

                <!-- genres for audio -->
                <ul v-if="activeMediaType == 'audio'" class="media-genres">
                        <li>
                            <a href="pop" @click.prevent="loadMedia('pop', 'audio')">Pop</a>
                        </li>
                        <li>
                            <a href="rock" @click.prevent="loadMedia('rock', 'audio')">Rock</a>
                        </li>
                        <li>
                            <a href="soundtrack" @click.prevent="loadMedia('soundtrack', 'audio')">Soundtrack</a>
                        </li>
                        <li>
                            <a href="all" @click.prevent="loadMedia(null, 'audio')">All</a>
                        </li>
                    </ul>

                    <!-- genres for tv -->
                    <ul v-if="activeMediaType == 'television'" class="media-genres">
                    <li>
                        <a href="action" @click.prevent="loadMedia('action', 'television')">Action</a>
                    </li>
                    <li>
                        <a href="comedy" @click.prevent="loadMedia('comedy', 'television')">Comedy</a>
                    </li>
                    <li>
                        <a href="family" @click.prevent="loadMedia('family', 'television')">Family</a>
                    </li>
                    <li>
                        <a href="horror" @click.prevent="loadMedia('horror', 'television')">Fantasy</a>
                    </li>
                    <li>
                        <a href="horror" @click.prevent="loadMedia(null, 'television')">All</a>
                    </li>
                </ul>

                <div class="thumb-wrapper clearfix">
                    <img v-if="activeMediaType == 'video'" v-for="media in retrievedMedia" :src="'images/' + media.movie_cover" alt="media thumb" @click="switchActiveMedia(media)" class="img-thumbnail rounded float-left media-thumb video-thumb">
                    <img v-if="activeMediaType == 'audio'" v-for="media in retrievedMedia" :src="'images/' + media.audio_cover" alt="media thumb" @click="switchActiveMedia(media)" class="img-thumbnail rounded float-left media-thumb audio-thumb">
                    <img v-if="activeMediaType == 'television'" v-for="media in retrievedMedia" :src="'images/' + media.tv_cover" alt="media thumb" @click="switchActiveMedia(media)" class="img-thumbnail rounded float-left media-thumb television-thumb">
                </div>
            </div>       
        </div> <!-- end 2-up for media info -->
    </div>
    `,

    data() {
        return {
            // set the default to video -> will get a random video via query on create
            activeMediaType: "video",

            // push first (or random) media object here (selected / filtered on create)
            currentMediaDetails: { 
                source: "avengers.mp4",
            },

            // could add more media types here in future
            mediaTypes: [
                { iconClass: "fas fa-headphones", description: "audio" },
                { iconClass: "fas fa-film", description: "video" },
                { iconClass: "fas fa-tv", description: "television" }
            ],

            retrievedMedia: [],

            // controls mute / unmute for video element
            vidActive: false
        }
    },

    created: function() {
        console.log('params:', this.$route.params);

        this.loadMedia(null, "video");
    },

    methods: {

        loadMedia(filter, mediaType) {
            // set the active media type
            if (this.activeMediaType !== mediaType && mediaType !== null) {
                this.activeMediaType = mediaType;
            }
            // build the url based on any filter we pass in (will need to expand on this for audio)

            let url = (filter == null) ? `./admin/index.php?media=${this.activeMediaType}` : `./admin/index.php?media=${mediaType}&&filter=${filter}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {                    
                    // we're gettin them all, dump it all in the media container
                    this.retrievedMedia = data;
                    // grab the first one in the list and make it active
                    this.currentMediaDetails = data[0];                    
                })
            .catch(function(error) {
                console.error(error);
            });
        },

        switchActiveMedia(media) {
            console.log(media);

            this.currentMediaDetails = media;
        }
    }
}