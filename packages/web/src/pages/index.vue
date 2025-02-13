<template>
  <div>
    <h1>Veercel Build Cache Test</h1>
    <p>{{ timestamp }}</p>
  </div>
</template>

<script setup lang="ts">
import { getTimestamp } from "@repro/shared";

const timestamp = getTimestamp();
</script>
