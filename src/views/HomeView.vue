<template>
    <div>
        <h5 class="mb-3 ms-2 fw-bold page-title">
            <i class="fas fa-pen-alt me-2" style="font-size: 12px;"></i>ရာသီဖွားတွက်ရန် ဖောင်ကိုဖြည့်ပါ။
        </h5>
        <Form/>
    </div>
</template>

<script>

import Form from '@/components/Home/Form'

export default {
    data() {
        return {
            form: {
                name: '',
                age: '',
                date: ''
            }    
        }
    },
    components: {
        Form
    }
}

</script>