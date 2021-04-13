<template>
    <ul v-if="!!commentsObject && commentsObject.length > 0">
        <li v-for="(comment, index) in commentsObject" v-bind:key="comment.id+'_'+index">
            {{comment.user}} {{comment.time_ago}}
            <div v-html="comment.content"></div>
            <comments v-if="!!comment && !!(comment.comments) && comment.comments.length > 0" v-bind:commentsObject="comment.comments"></comments>
        </li>
    </ul>
</template>

<script>
import Comments from './Comments.vue'

export default {
    name: 'comments',
    computed: {
        commentsObject: function () {
            return this.$attrs.commentsObject
        }
    },
    components: {
        Comments
    }
}
</script>

<style scoped>
ul {
    margin-left: 10px;
    margin-bottom: 15px;
}
li {
    margin-left: 10px;
    font-size: 14px;
    font-family: sans-serif;
    line-height: 16px;
}
p {
   margin: 10px;
}
</style>