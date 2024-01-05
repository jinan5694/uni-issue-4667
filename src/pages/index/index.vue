<template>
	<view class="content">
		<view>
			列表数据使用 store 中的数据渲染，点击卡片可以跳转到详情页
		</view>
		<view class="card" v-for="item in todos" :key="item.id" @click="handleClick(item)">
			<view>{{ item.id }}</view>
			<view>{{ item.text }}</view>
			<view>{{ item.done }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				todos: this.$store.state.todos
			}
		},
		updated() {
			console.log('list is updated');
		},
		
		methods: {
			handleClick({ id }) {
				uni.navigateTo({ url: '/pages/index/detail?id=' + id })
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.card {
		border: 1px solid red;
		margin: 20px;
		padding: 20px;
	}
</style>
