//import { Vue } from 'vue';
import Vue from 'vue';
var items = [
    {
        title: "Magaluf",
        owner: "Patrick",
        betters: [],
        type: "Full Inclusive"
    },
    {
        title: "Las Vegas",
        owner: "Danny",
        betters: [],
        type: "Full Inclusive"
    },
    {
        title: "Berlin",
        owner: "Emma",
        betters: [],
        type: "Full Board"
    },
    {
        title: "Warsaw",
        owner: "Patrick",
        betters: [],
        type: "Full Inclusive"
    },
];
var app = new Vue({
    el: "#app",
    data: function () {
        return {
            message: "hello",
            items: items
        };
    }
});
console.log(app);
