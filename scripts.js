var vueApp = new Vue({
    el: '.js--vue-app',
    data: {
        wardData: null
    },
    mounted: function() {
        getCandidateData();
    }
})

function getCandidateData() {
    $(document).ready(function() {
        $.getJSON('candidates.json', function(results) {
            vueApp.wardData = results.data;
        })
    });
}
