function main(){
	var content = $('.content');
	var title = $(".title");
	var path = "~";

	var commandHistory = [];
    var historyIndex = 0;

    var command = "";
    var commands = [{
            "name": "clear",
            "function": clear
        }, {
            "name": "help",
            "function": help
        }, {
            "name": "echo",
            "function": echo
        }];

	content.append("Welcome to Plinth 2K17 Terminal");
	title.text("bash - plinth2k17");
	// COMMANDS
    function clear() {
        content.text("");
    }

    function help() {
        content.append("Help Documentation under construction\n");
    }

    function echo(args) {
        var str = args.join(" ");
        content.append(str + "\n");
    }
    function checkCommand(command){
    	var commandCorrect=false;
    	/*for(var i=0;i<commands.length;i++){
    		if(command === commands[i].function){
    			commands[i].function();
    			commandCorrect=true;
    			break;
    		}
    	}
    	if(!commandCorrect){
    		content.append{"Wrong command: "+ command + " entered.\n"};
    	}*/
    	historyIndex++;
    	commandHistory.push(command);
    	command = "";
    }
}
$(document).ready(main);
