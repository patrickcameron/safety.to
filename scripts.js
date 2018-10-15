$(document).ready(function() {
    $.getJSON('candidates.json', function(results) {

        var dropdownMenu = new Vue({
            el: '#js--dropdown-menu',
            data: {
                wardData: results.data
            }
        });

        var candidateTables = new Vue({
            el: '#js--candidate-tables',
            data: {
                wardData: results.data
            }
        });
    });
});
