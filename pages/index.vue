<!--
 * @Author: xuanyu 969718197@qq.com
 * @Date: 2023-04-19 14:25:39
 * @LastEditors: xuanyu 969718197@qq.com
 * @LastEditTime: 2023-08-02 13:40:42
 * @FilePath: \ayu-pc-template\pages\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
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

const { data, pending, error, refresh }: any = await useFetch(
  "https://api.nuxtjs.dev/mountains"
);
</script>

<template>
  <div class="w-[900px] mx-auto pt-10">
    <!-- {{ data }} -->
    <div
      v-for="(item, index) in data"
      :key="index"
      class="border bg-purple-50 rounded-sm shadow-xl mb-5"
    >
      <p>{{ item.title }}</p>
      <p>{{ item.description }}</p>
      <p>{{ item.height }}</p>
      <p>{{ item.countries }}</p>
      <p>{{ item.continent }}</p>
      <img :src="item.image" alt="" srcset="" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
