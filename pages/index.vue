<script setup lang="ts">
import {getHomeData} from "@/api/home";
useHead({
  title: "首页-yuyu",
  meta: [
    {
      name: "keywords",
      content: "yuyu,yuyu.com",
    },
    {
      name: "description",
      content: "首页-描述内容",
    },
  ],
});
const list = ref<any>([]);
const pageNumber = ref(1);
const pageSize = ref(10);
const total = ref(0);
const keyword = ref("");

const fullscreenLoading = ref(false);

onMounted(async () => {
  await nextTick();
  getData();
});

async function getData() {
  fullscreenLoading.value = true;
  const {data} = await getHomeData({
    pageNumber: pageNumber.value,
    pageSize: pageSize.value,
    title: keyword.value,
  });
  list.value = data.items;
  total.value = data?.total || 0;
  fullscreenLoading.value = false;
}

function handleSearch() {
  getData();
}

function handlePageChange(value: number) {
  pageNumber.value = value;
  getData();
}
</script>

<template>
  <div
    class="w-[900px] mx-auto pt-10"
    v-loading.fullscreen.lock="fullscreenLoading"
  >
    <div class="flex items-center">
      <el-input v-model="keyword" placeholder="请输入搜索关键词" />
      <ElButton type="primary" class="ml-4" @click="handleSearch"
        >搜索</ElButton
      >
    </div>
    <div class="h-[85vh] overflow-y-auto p-4">
      <div class="flex border-b mb-4" v-for="item in list" :key="item._id">
        <div class="left w-1/4">
          <img src="https://www.vicmarketresearch.com/img/pro.jpg" alt="" />
        </div>
        <div class="right flex-1 py-4 space-y-2">
          <h1 class="font-bold">{{ item.title }}</h1>
          <p class="text-gray-500 text-sm">
            {{ new Date(item.createdAt).toLocaleDateString() }} | Pages:
            {{ item.page }} | Tables:
            {{ item.figure }}
          </p>
          <P
            >Single：<span class="text-red-600 mr-2"
              >{{ item.singleUser }} USD</span
            >
            Multi：<span class="text-red-600 mr-2"
              >{{ item.multiUser }} USD</span
            >
            Enterprise：<span class="text-red-600 mr-2"
              >{{ item.multiUser }} USD</span
            ></P
          >
          <p class="h-12 overflow-hidden" v-html="item.summary"></p>
          <NuxtLink class="px-4 bg-red-500 text-white py-1" :to="`/${item._id}`"
            >查看详细</NuxtLink
          >
        </div>
      </div>
      <!-- 空数据 -->
      <div v-if="!list.length">
        <el-empty description="暂无数据" />
      </div>
    </div>
    <div v-if="list.length" class="flex justify-center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="handlePageChange"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
