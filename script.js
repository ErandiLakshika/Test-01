function styles(command, value = null){
    if (command =="justify"){
        document.execCommand(`justify${valee}`);
    } else {
        document.execCommand( command,  false, value);
    }   
  }

  function undo() {
    document.execCommand("undo");
  } 

  function redo() {
    document.execCommand("redo");
  }

