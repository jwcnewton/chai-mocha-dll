var apiUri = 'https://api.joind.in/v2.1/talks/10889';

var apiCall = $.ajax({
    url: apiUri,
    type: 'GET',
    data: 'json',
    dataType: 'jsonp'
});

(function init($) {
    $('#main-menu a').click(mainMenuClickListener);
})($);

function mainMenuClickListener() {
    fetchIndexData();
};

function fetchIndexData() {
    apiCall.done(insertDataIntoHtml);
    apiCall.fail(function (err) {
        outputError(err);
    });
};

function insertDataIntoHtml(data) {
    try {
        var firstTalksData = data.talks[0];
        var title = firstTalksData.talk_title;
        var description = firstTalksData.talk_description;

        var titleElement = $('<h1>').text(title);
        var descriptionElement = $('<p>').text(description);

        $('#info')
            .append(titleElement)
            .append(descriptionElement);
    } catch (err) {
        outputError(err);
    }
};

function outputError(err) {
    console.log(err);
    $('#info').html('<p>An error has occurred</p>');
}


