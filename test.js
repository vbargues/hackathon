console.log('#editor');
console.log($("#editor").text());
var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: "solidity",
    theme: "solidity",
    lineNumbers: true,
});

editor.save()

$(document).ready(function() {
    $("#btnSubmit").click(function(){
		console.log(editor.getValue());
    });
    $.post( "url", function( data ) {
        if (data.status) {
            window.location.href = "../validation/validation.html";
        }
        else {
            M.toast({html: 'Your code does not work.\nTry again !'})
            $( ".result" ).html( data );
        }
    }); 
});