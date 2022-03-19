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
});