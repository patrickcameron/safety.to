$(document).ready(function() {
    var vueApp = new Vue({
        el: '.js--vue-app',
        data: {
            wardData: null
        },
        mounted: function() {
            $.getJSON('candidates.json', function(results) {
                vueApp._data.wardData = results.data;
            })
        }
    })
});
