<template></template>
<script lang="ts" setup>

const route = useRouter();

onMounted(() => {
  route.push({ path : "/posts"});
})

</script>