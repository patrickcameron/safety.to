$(document).ready(function() {
    $.getJSON('candidates.json', function(results) {

        // Populate quick links menu
        $.each(results.data, function(key, data) {
            $('.js--dropdown-menu').append('<a class="dropdown-item" href="#' + data.name + '">' + ( data.ward_number ? 'Ward ' + data.ward_number + ' ' : '' ) + data.name + '</a>');
        });

        // Populate tables
        $.each(results.data, function(key, data) {
            var candidateTable = '';

            for (var candidate of data.candidates) {

                if (candidate.hide !== true ) {

                    // Name
                    candidateTable += '<tr><th scope="row">' + candidate.name + '</th>';

                    // Email
                    if (candidate.email) {
                        candidateTable += '<td><a href="mailto:' + candidate.email + '">' + candidate.email + '</a>';
                    } else {
                        candidateTable += '<td>&nbsp</td>';
                    }

                    // Phone
                    if (candidate.tel) {
                        candidateTable += '<td><a href="tel:' + candidate.tel + '">' + candidate.tel + '</a></td>';
                    } else {
                        candidateTable += '<td>&nbsp</td>';
                    }

                    // Website
                    if (candidate.website) {
                        candidateTable += '<td><a target="_blank" rel="noopener nofollower" href="http://' + candidate.website + '">' + candidate.website + '</a></td>';
                    } else {
                        candidateTable += '<td>&nbsp</td>';
                    }

                    // Position
                    if (candidate.position) {
                        candidateTable += '<td>' + candidate.position + '</td>';
                    } else {
                        candidateTable += '<td>&nbsp</td>';
                    }
                }
            }

            $('.js--candidate-tables').append(
                '<div class="row pb-5" id="' + data.name + '">' +
                '<div class="col-12 text-center"><p class="lead">' + (data.ward_number ? '<strong>Ward ' + data.ward_number + '</strong> ' : '') + data.name + '</p>' +
                '<div class="table-responsive force-webkit-scrollbar"><table class="table"><thead><tr><th scope="col">Name</th><th scope="col">Email</th><th scope="col">Phone</th><th scope="col">Website</th><th scope="col">Position</th></tr></thead><tbody>' + candidateTable
            )
        });
    });
});
