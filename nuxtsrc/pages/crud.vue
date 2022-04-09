<template>
  <v-card>
    <v-card-title>
      crud test
    </v-card-title>
    <v-data-table :headers="headers" :items="items">
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.createAt }}</td>
        <td>{{ props.item.title }}</td>
        <td>{{ props.item.content }}</td>
        <td>
          <v-btn icon small @click="openDialog('update', props.item)"
            ><v-icon>create</v-icon>
          </v-btn>
          <v-btn icon small @click="remove"><v-icon>delete</v-icon></v-btn>
        </td>
      </template>
    </v-data-table>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="openDialog('create')">글쓰기</v-btn>
    </v-card-actions>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>작성 및 수정</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="form.title"></v-text-field>
            <v-textarea v-model="form.content"></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn v-if="mode === 'create'" @click="create">작성</v-btn>
          <v-btn v-else @click="update">수정</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      mode: 'create',
      form: {
        title: '',
        content: ''
      },
      headers: [
        { value: 'id', text: 'id' },
        { value: 'createAt', text: '작성 날짜' },
        { value: 'title', text: '제목' },
        { value: 'content', text: '내용' },
        { value: 'actions', text: '기능' }
      ],
      items: [],
      selectedItem: null
    }
  },
  mounted() {},
  methods: {
    openDialog(mode, sel) {
      this.mode = mode
      if (mode === 'create') {
        this.form.title = ''
        this.form.content = ''
      } else {
        this.form.title = sel.title
        this.form.content = sel.content
        this.selectedItem = sel
      }
      this.dialog = true
    },
    /*
    create() {
      const item = {
        id: Math.floor(Math.random() * 10000),
        createAt: new Date(),
        title: this.form.title,
        content: this.form.content
      }
      this.items.push(item)
      this.dialog = false
    },
    */
    async create() {
        const item = Object.assign(this.form)
        item.createAt = new Date()
        const s = await this.$db.collection('boards').add(item)
        console.log(s)
        this.dialog = false
        await this.read()
    },
    /*
    read() {
      console.log('r')
    },
    */
    async read() {
        const s = await this.$db.collection('boards').get()
        this.items = []
        s.forEach(d => {
            const r = d.data()
            const item = Object.assign(r)
            item.id = d.id
            item.createAt = r.createAt.toDate().toLocaleString()
            this.items.push(item)
        })
    },
    update() {
      console.log('u')
    },
    /*
    remove() {
      console.log('d')
    }
    */
    async remove(p) {
        await this.$db
            .collection('boards')
            .doc(p.id)
            .delete()
        await this.read()
    }
  }
}
</script>