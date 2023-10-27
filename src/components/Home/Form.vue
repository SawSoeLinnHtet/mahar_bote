<template>
    <form @submit.prevent="submit">
        <div class="mb-3 px-2">
            <label for="username" class="form-label">Name <small class="text-danger">*</small></label>
            <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Enter Your Name">
        </div>
        <div class="mb-3 px-2">
            <label for="age" class="form-label">Age <small class="text-danger">*</small></label>
            <input type="number" class="form-control" id="age" v-model="form.age" placeholder="Enter Your Age">
        </div>
        <div class="mb-3 px-2">
            <label for="age-picker" class="form-label">Date Of Birth <small class="text-danger">*</small></label>
            <VueDatePicker v-model="form.date" format="dd-MM-yyyy" auto-apply :enable-time-picker="false"></VueDatePicker>
        </div>
        <div class="mb-3 px-2">
            <button type="submit" class="mt-3 w-100 btn btn-theme btn-sm">Submit</button>
        </div>
    </form>
</template>

<script>
    import VueDatePicker from "@vuepic/vue-datepicker"
    import moment from 'moment'
    import { supabase } from '@/lib/supabaseClient'
    
    export default {
        data() {
            return {
                form: {
                    name: '',
                    age: '',
                    date: null,
                },
                day: null,
                year: null,
                mm_year: null,
                rest: null,
                season_id: null
            }
        },
        components: {
            VueDatePicker
        },
        methods: {
            submit() {
                this.getYear()
                this.getSeason()
            },
            getYear() {
                this.year = moment(this.form.date).format('YYYY')
                this.day = moment(this.form.date).format('dddd')
            },
            async getSeason() {
                this.mm_year = this.year - 638;
                
                this.rest = Math.floor(this.mm_year % 7)

                this.season_id = await supabase.from('calculations').select('season_id').eq('rest_value', this.rest).eq('day', this.day).single()

                this.$router.push({name: "details", params: { season_id: this.season_id.data.season_id } })
            }
        } 
    }

</script>