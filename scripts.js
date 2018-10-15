$(document).ready(function() {
    $.getJSON('candidates.json', function(results) {

        var dropdownMenu = new Vue({
            el: '.js--vue-app',
            data: {
                wardData: results.data
            }
        });
        
    });
});
