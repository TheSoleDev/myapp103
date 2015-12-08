var recognition;
$( document ).on( "pagebeforeshow", "#branch-screen", function() {
        


$(function() {
    document.addEventListener("deviceready", onDeviceReady, true);
});
});

function onDeviceReady() {
    recognition = new SpeechRecognition();
    recognition.onresult = function(event) {
        if (event.results.length > 0) {
            q.value = event.results[0][0].transcript;
            q.form.submit();
        }
    }
}