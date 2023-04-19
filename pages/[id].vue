<script setup lang="ts">
import {ArrowLeftBold} from "@element-plus/icons-vue";
import {getDetail} from "@/api/home";
const route = useRoute();
const router = useRouter();

const tabIndex = ref(0);
const tabs = [
  "Description",
  "Table Of Contents",
  "Tables And Figures",
  "Research Methodology",
];
const info = ref<any>({});

onMounted(async () => {
  await nextTick();
  const {data} = await getDetail(route.params.id as string);
  console.log(data, "detail");
  info.value = data;
});

function onBack() {
  router.back();
}
</script>

<template>
  <div class="w-[800px] mx-auto mt-4">
    <el-button type="primary" :icon="ArrowLeftBold" @click="onBack"
      >返回</el-button
    >
    <div class="flex">
      <div class="w-2/4 left">
        <img
          class="w-full"
          src="https://www.vicmarketresearch.com/img/pro.jpg"
          alt=""
        />
      </div>
      <div class="flex-1 py-8 space-y-3">
        <h1 class="pb-2 font-bold border-b border-dashed">
          {{ info.title }}
        </h1>
        <p>Product category： Electronics & Semiconductor</p>
        <p>
          Single: <em class="text-red-500">{{ info.singleUser }}</em>
        </p>
        <p>
          Multi: <em class="text-red-500">{{ info.multiUser }}</em>
        </p>
        <p>
          Enterprise: <em class="text-red-500">{{ info.multiUser }}</em>
        </p>
        <p>Pages: {{ info.page }} | Tables: {{ info.figure }}</p>
        <p>Time: {{ new Date(info.createdAt).toLocaleString() }}</p>
      </div>
    </div>
    <!-- 切换 -->
    <div class="flex bg-gray-100">
      <span
        v-for="(item, index) in tabs"
        :key="index"
        class="p-3 cursor-pointer hover:text-white hover:bg-indigo-700"
        :class="tabIndex === index ? 'bg-indigo-700 text-white' : ''"
        @click="tabIndex = index"
        >{{ item }}</span
      >
    </div>
    <p
      v-html="info.summary"
      v-if="tabIndex === 0"
      class="px-10 py-4 leading-10 border"
    ></p>
    <p
      v-html="info.tableContent"
      v-if="tabIndex === 1"
      class="px-10 py-4 leading-10 border"
    ></p>
    <p
      v-html="info.tablesFigure"
      v-if="tabIndex === 2"
      class="px-10 py-4 leading-10 border"
    ></p>
  </div>
</template>

<style scoped lang="scss"></style>
