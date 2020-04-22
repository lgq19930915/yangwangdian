<template>
  <div>
    <div class="one" v-for="(item,index) in home" :key="index">
      <h2>
        <span :class="arr[index].icon"></span>
        <span>{{item.name}}</span>
      </h2>
      <card :card="item.list"></card>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["arr"],
  components: {},
  data() {
    return {};
  },
  methods: {
    // detail(id) {
    // 	this.$router.push("detail" + id);
    // },
    ...mapActions({
      getHome: "home/getHome"
    })
  },
  computed: {
    ...mapGetters({
      home: "home/home"
    })
  },
  mounted() {
    this.getHome();
    console.log(this.home);
  }
};
</script>
<style scoped>
.ione {
  /* color: #fe9902; */
  font-size: 0.5rem;
  vertical-align: middle;
}
h2 {
  margin: 0.2rem 0;
  padding: 0.12rem 0;
}
</style>