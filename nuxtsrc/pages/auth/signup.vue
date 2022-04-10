<template>
	<div class="container">
		<form @submit.prevent="signUp">
			<div>
				<label for="email">email</label>
				<input type="text" id="email" v-model="form.email" />
			</div>
			<div>
				<label for="name">성함</label>
				<input type="text" id="name" v-model="form.name" />
			</div>
			<div>
				<label for="password">비밀번호</label>
				<input type="password" id="password" v-model="password" />
			</div>
			<div>
				<label for="passwordConfirm">비밀번호 확인</label>
				<input type="password" id="passwordConfirm" v-model="passwordConfirm" />
			</div>
			<div>
				<label for="position">직책</label>
				<input type="text" id="position" v-model="form.position" />
			</div>
			<div>
				<label for="teamName">팀 이름</label>
				<input type="text" id="teamName" v-model="form.teamName" />
			</div>
			<button type="submit">회원가입</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'SignupForm',
	data() {
		return {
            form: {
				uid: '',
                email: '',
                name: '',
                position: '',
                teamName: '',
            },
			password,
			passwordConfirm
		};
	},
	methods: {
        async signUp() {
			const r = await this.$auth.createUserWithEmailAndPassword(
				this.form.email,
				this.password
				).then(result => {
					this.form.uid = result.user.uid;
					console.log('회원가입에 성공');
					this.create();
				}).catch(error => {
					alert('회원가입에 실패하였습니다.');
					console.error('회원가입에 실패하였습니다',error);
				});
        },
		async create() {
			//const item = Object.assign(this.form)
			const item = this.form
			item.createAt = new Date()
			const s = await this.$db.collection('ccrusers').add(item)
				.then(result => {
					console.log('회원가입2에 성공')
				}).catch(error => {
					alert('회원가입2에 실패하였습니다.');
					console.error('회원가입2에 실패하였습니다',error);
				});
			console.log(s)
			this.dialog = false
			await this.read()
		},
		submitForm() {
			console.log('dd');
		},
		
	},
};
</script>

<style scoped></style>