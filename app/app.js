import Vue from "nativescript-vue";

import { install as installBottomSheet } from 'nativescript-material-bottomsheet';
installBottomSheet();

import BottomSheetPlugin from 'nativescript-material-bottomsheet/vue';
Vue.use(BottomSheetPlugin);

import Home from "./components/Home";

new Vue({
    render: h => h(Home)
}).$start();
