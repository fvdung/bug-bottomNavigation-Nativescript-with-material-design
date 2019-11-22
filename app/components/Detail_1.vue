<template>
  <Page>
    <ActionBar title="Detail 1">
      <NavigationButton text="back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
    </ActionBar>

    <GridLayout rows="auto, auto">
      <Button row="0" text="Go to detail 2" class="btn btn-primary" @tap="gotoDetail2()" />
      <Button row="1" text="Back Home" class="btn btn-default" @tap="$navigateBack()" />
    </GridLayout>
  </Page>
</template>

<script>
  import Detail_2 from './Detail_2.vue'

  export default {
    methods: {
      gotoDetail2() {
        this.$navigateTo(Detail_2)
      }
    }
  }
</script>