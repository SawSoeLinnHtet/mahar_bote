<template>
    <div>
        <h5 class="mb-3 ms-2 fw-bold page-title">
            <i class="fas fa-list me-2" style="font-size: 12px;"></i>ရာသီဖွားများ
        </h5>
        <ul class="mb-5">
            <li style="list-style: none;" class="mb-3" v-for="season in seasons" :key="season.id">
                <div class="list-name py-3">
                    <h6 class="d-flex justify-content-between mb-0 mb-3 fw-bold">
                        {{ season.season_name }}
                        <router-link :to="`/details/${season.season_id}`">
                            <p class="mb-0">
                                <i class="far fa-hand-point-up"></i> Details
                            </p>
                        </router-link>
                    </h6>
                    <p class="mb-0">
                        {{ limitDescription(season.season_description) }}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { supabase } from '@/lib/supabaseClient'

    export default {
        data() {
            return {
                seasons: []
            }        
        },
        mounted() {
            this.getSeasons()
        },
        methods: {
            async getSeasons() {
                const { data } = await supabase.from('born_seasons').select()
                this.seasons = data
            },
            limitDescription(desc) {
                return desc.slice(0, 100) + '...'
            }
        }
    }
</script>