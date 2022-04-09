<template>
  <v-card>
    <v-card-title>
      Auth test
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
    <v-card-text>
      {{ msg }}
    </v-card-text>
    <v-card-actions>
      <v-btn @click="signUp">
        signUp
      </v-btn>
    </v-card-actions>
    
    <v-card-actions>
        <v-btn @click="getUser">
            getUser
        </v-btn>
    </v-card-actions>

    <v-card-actions>
        <v-btn @click="setUser">
            setUser
        </v-btn>
    </v-card-actions>

    <v-card-actions>
        <v-btn @click="signOut">
            signOut
        </v-btn>
    </v-card-actions>

    <v-btn @click="signIn">
        signIn
    </v-btn>



  </v-card>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      msg: ''
    }
  },
  mounted() {},
  methods: {
    async signUp() {
      try {
        const r = await this.$auth.createUserWithEmailAndPassword(
            this.form.email,
            this.form.password
        )
        console.log(r)
      } catch (e) {
        console.error(e.message)
      }
    }
  }
}
</script>
