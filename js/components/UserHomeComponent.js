

// this is the main movie area


export default {
    props: ['currentuser'],

    template: `
    <div class="container">
    <!-- render this if we're viewing television or film -->
        <div class="row" v-if="activeMediaType == 'video' && retrievedMedia.length > 0">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-title">{{currentMediaDetails.movie_title}}</h4>
                <p class="media-details" v-html="currentMediaDetails.movie_director"></p>
                <span class="media-time">{{currentMediaDetails.movie_runtime}} minutes</span>
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
                <span class="media-time">Runtime: {{currentMediaDetails.tv_runtime}} minutes</span>
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
                <audio autoplay controls :src="'audio/' + currentMediaDetails.audio_song"/>
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
                <!-- eras for video -->
                    <ul v-if="activeMediaType == 'video'" class="media-genres">
                        <li>
                            <a href="1950" @click.prevent="loadMedia('1950', 'video')">1950</a>
                        </li>
                        <li>
                            <a href="1960" @click.prevent="loadMedia('1960', 'video')">1960</a>
                        </li>
                        <li>
                            <a href="1970" @click.prevent="loadMedia('1970', 'video')">1970</a>
                        </li>
                        <li>
                            <a href="1980" @click.prevent="loadMedia('1980', 'video')">1980</a>
                        </li>
                        <li>
                            <a href="1990" @click.prevent="loadMedia('1990', 'video')">1990</a>
                        </li>
                        <li>
                            <a href="horror" @click.prevent="loadMedia(null, 'video')">All</a>
                        </li>
                    </ul>

                <!-- eras for audio -->
                <ul v-if="activeMediaType == 'audio'" class="media-genres">
                <li>
                <a href="1950" @click.prevent="loadMedia('1950', 'audio')">1950</a>
            </li>
            <li>
                <a href="1960" @click.prevent="loadMedia('1960', 'audio')">1960</a>
            </li>
            <li>
                <a href="1970" @click.prevent="loadMedia('1970', 'audio')">1970</a>
            </li>
            <li>
                <a href="1980" @click.prevent="loadMedia('1980', 'audio')">1980</a>
            </li>
            <li>
                <a href="1990" @click.prevent="loadMedia('1990', 'audio')">1990</a>
            </li>
            <li>
                <a href="horror" @click.prevent="loadMedia(null, 'audio')">All</a>
            </li>
                    </ul>

                    <!-- eras for tv -->
                    <ul v-if="activeMediaType == 'television'" class="media-genres">
                    <li>
                            <a href="1950" @click.prevent="loadMedia('1950', 'television')">1950</a>
                        </li>
                        <li>
                            <a href="1960" @click.prevent="loadMedia('1960', 'television')">1960</a>
                        </li>
                        <li>
                            <a href="1970" @click.prevent="loadMedia('1970', 'television')">1970</a>
                        </li>
                        <li>
                            <a href="1980" @click.prevent="loadMedia('1980', 'television')">1980</a>
                        </li>
                        <li>
                            <a href="1990" @click.prevent="loadMedia('1990', 'television')">1990</a>
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