<template>
    <div>
        <router-link to="/lists">
            <i class="fas fa-arrow-left me-2 mb-3"></i>Back
        </router-link>
        <h5 class="mb-3 ms-2 fw-bold page-title">
            <i class="fab fa-pagelines me-2" style="font-size: 20px;"></i>
            {{ season.season_name }}
        </h5>
        <div class="details-card px-2 py-3 border border-1 mb-5">
            <p>
                {{ season.season_description }}
            </p>
            <small class="fst-italic text-primary">
                #ဇေယျာလင်းထက်_fb
            </small>
        </div>
    </div>
</template>

<script>
    import { supabase } from '@/lib/supabaseClient'
    
    export default{
        data() {
            return {
                season_id: this.$route.params.season_id,
                season: []
            }
        },
        mounted() {
            this.getSeasons()
        },
        methods: {
            async getSeasons() {
                const { data } = await supabase.from('born_seasons').select().eq('season_id', this.season_id).single()
                
                this.season = data
            }
        }
    }

</script>