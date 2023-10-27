/* eslint-disable no-unused-vars */
import { defineStore } from "pinia"
import { supabase } from "@/lib/supabaseClient"

export const useSeasonsStore = defineStore('seasons', {
    state() {
        return {
            data: {}
        }
    },
    actions: {
        async getSeasons() {
            let { data: born_seasons, error } = await supabase
                .from('born_seasons')
                .select('season_name')
            
            this.data = born_seasons
        }
    }
})