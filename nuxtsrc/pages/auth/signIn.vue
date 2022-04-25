<template>
  <v-card>
    <v-card-title primary-title>
      로그인
       {{ _.get($store.state.auth.user, 'email', '[로그인 필요]') }}
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field v-model="form.email" label="email"></v-text-field>
        <v-text-field
          v-model="form.password"
          label="password"
          type="password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="signIn">
        signIn
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  mounted() {
     console.log('##############user:' + this.$store.state.auth.user.email);
  },
  methods: {
    async signIn() {
      try {
        const r = await this.$auth.signInWithEmailAndPassword(
          this.form.email,
          this.form.password
        )

        await this.$store.commit("auth/setUsers", r)
        //console.log(r)
      } catch (e) {
        console.error(e.message)
      }
    }
  }
}
</script>