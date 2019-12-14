<template>
    <div class="card">
        <div class="card-header">Register</div>
        <div class="card-body">
        <form @submit.prevent="submitRegister()">
            <div class="form-group">
                <label for="form-name">your name</label>
                <input type="text" v-model="form.name" class="form-control" />
            </div>
            <div class="form-group">
                <label for="form-email">your email</label>
                <input type="email" v-model="form.email" class="form-control" />
            </div>
            <div class="form-group">
                <label for="form-password">your password</label>
                <input type="password" v-model="form.password" class="form-control" />
            </div>
            <button type="submit" class="btn btn-success">register</button>
        </form>
    </div></div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState('auth', ['form'])
    },
    methods: {
        ...mapActions('auth', ['submitRegister'])
    }
}
</script>