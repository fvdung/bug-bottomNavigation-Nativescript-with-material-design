<template>
  <Page>
    <ActionBar title="Detail 2">
      <NavigationButton text="back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
    </ActionBar>

    <GridLayout rows="auto">
      <Button text="Back Home" class="btn btn-success" @tap="$navigateBack()" />
    </GridLayout>
  </Page>
</template>