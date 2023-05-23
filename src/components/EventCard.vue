<script setup lang="ts">
import type { MaisonResponse } from '@/pocketbase-types';
const props: MaisonResponse = defineProps<MaisonResponse>();

import { pb } from '@/backend';
const img0 = props.images[0];

const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '400x400' });
</script>