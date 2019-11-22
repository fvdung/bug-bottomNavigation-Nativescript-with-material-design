<template>
  <Frame>
    <Page>
      <ActionBar title="Home"></ActionBar>

      <BottomNavigation>
        <TabStrip>
          <TabStripItem>
            <Label text="Tab 1"/>
          </TabStripItem>
          <TabStripItem>
            <Label text="Tab 2"/>
          </TabStripItem>
        </TabStrip>
        <TabContentItem>
          <GridLayout rows="auto">
            <Button text="Go to detail 1" class="btn btn-primary" @tap="gotoDetail1()" />
          </GridLayout>
        </TabContentItem>
        <TabContentItem>
          <GridLayout rows="auto">
            <Button text="Go to detail 1" class="btn btn-default" @tap="gotoDetail1()" />
          </GridLayout>
        </TabContentItem>
      </BottomNavigation>
    </Page>
  </Frame>
</template>

<script>
  import Detail_1 from './Detail_1.vue'

  export default {
    methods: {
      gotoDetail1() {
        this.$navigateTo(Detail_1)
      }
    }
  }
</script>