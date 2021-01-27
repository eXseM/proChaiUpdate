<template>
  <div class="containerMain">
    <banner />
    <info-block />
    <attachments />
    <import />
    <export />
    <start-work />
    <contacts />
    <developers />
  </div>
</template>

<script>
import banner from "~/components/banner.vue";
import InfoBlock from '~/components/infoBlock.vue';
import Import from '~/components/import.vue';
import Attachments from '~/components/attachments.vue';
import Export from '~/components/export.vue';
import StartWork from '~/components/startWork.vue';
import Contacts from '~/components/contacts.vue';
import Developers from '~/components/developers.vue';

export default {
  components: {
    banner,
    InfoBlock,
    Import,
    Attachments,
    Export,
    StartWork,
    Contacts,
    Developers
  },
};
</script>


<style>
</style>
