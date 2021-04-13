<template>
	<div>
		<h3>{{ askItem.title }}</h3>
		<p>
			<small>{{ askItem.points }} points by {{ askItem.user }}
				{{ askItem.time_ago }} | {{ askItem.comments_count }} comments</small>
		</p>
		<div class="description" v-html="askItem.content"></div>
		<comments v-bind:commentsObject="askItem.comments"></comments>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import Comments from "../components/Comments.vue";

export default {
	components: { Comments },
	computed: {
		...mapGetters({
			askItem: "askItem",
		}),
	},
	created() {
		this.$store.dispatch("FETCH_ASKITEM", this.$route.query.id);
	},
};
</script>

<style scoped>

</style>
