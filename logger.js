/**
 * Sven Liebig
 * github.com/Sly321
 * All right reserved
 */

/**
 * Class to display different info and error msg in console
 *
 * param pre
 */
function Logger(pre) {
  this.ErrorColor     = "color: red;";
  this.ErrorInfoColor = "color: #e67e22";
  this.InfoColor      = "color: #3498db";
  this.InfoInfoColor  = "color: #2ecc71";
  this.CatchColor     = "color: #e67e22";
  this.CatchInfoColor = "color: #2c3e50";
  this.LocationColor  = "color: #9b59b6";

  if (pre != undefined) {
    this.phrase = " > " + pre;
  }
  else {
    this.phrase = "";
  }
}

/**
 * Function to display error msg in the console.log
 *
 * param information Informations about the error, can be empty
 * param location Location of the error
 */
Logger.prototype.err = function(information, location) {
  this.message("Error", information, location, this.ErrorColor, this.ErrorInfoColor);
}

/**
 * Function to display error msg in the console.log, returns the callstack too.
 *
 * param information Informations about the error, can be empty
 * param location Location of the error
 */
Logger.prototype.cserr = function(information, location) {
  this.message("Error", information, location, this.ErrorColor, this.ErrorInfoColor);
  this.printCallStack();
}

/**
 * Function to display error msg in the console.log
 *
 * param information Informations about the error, can be empty
 * param location Location of the error
 */
Logger.prototype.inf = function(information, location) {
  this.message("Info", information, location, this.InfoColor, this.InfoInfoColor);
}

/**
 * Function to display error msg in the console.log, returns the callstack too.
 *
 * param information Informations about the error, can be empty
 * param location Location of the error
 */
Logger.prototype.csinf = function(information, location) {
  this.message("Info", information, location, this.InfoColor, this.InfoInfoColor);
  this.printCallStack();
}

/**
 * Function to display catch msg in the console.log
 *
 * param information Informations about the error, can be empty
 * param location Location of the error
 */
Logger.prototype.cat = function(information, location) {
  this.message("Catch", information, location, this.CatchColor, this.CatchInfoColor);
}

/**
 * Function to display catch msg in the console.log, returns the callstack too.
 *
 * param information Informations about the error, can be empty
 * param location Location of the error
 */
Logger.prototype.cscat = function(information, location) {
  this.message("Catch", information, location, this.CatchColor, this.CatchInfoColor);
  this.printCallStack();
}

/**
 * Prints out a message with the given type, informations, and location.
 * css is needed.
 *
 * param type Can be something like Error, Catch, Info, etc.
 * param information Informations about the error, can be empty
 * param location Location of the error
 * param css1 Is the style for the Error, Catch, Info strings
 * param css2 Is the style for the Information string
 */
Logger.prototype.message = function(type, information, location, css1, css2) {
  var text = "%c" + type;
  var css = [css1];
  if (information != undefined) {
    text += ":%c " + information;
    css.push(css2);
  }
  text += "%c" + this.phrase;
  text += (location != undefined ? " > " + location : "")
  css.push(this.LocationColor);
  this.pri(text, css);
}

/**
 * Function to send text to console
 * Can be colored like this "%cHello %cPeter", css1 is
 * for the first c and css2 for the second for Example.
 *
 * param t Text for ouput
 * param css Css Array for the strings, can be empty
 */
Logger.prototype.pri = function(t, css) {
  if (css != undefined) {
    console.log.apply(console, [t].concat(css))
  }
  else {
    console.log(t);
  }
}

/**
 * Prints the callstack of the pre-pre function in this run
 */
Logger.prototype.printCallStack = function() {
  var callstack = this.getCallStack();
  console.groupCollapsed("Callstack");
  for (var x = callstack.length-1; x >= 1; x--) {
    if(x == 1)
      console.log(callstack[x] + " : Last");
    else
      console.group(callstack[x]);
  }
  for (var x = callstack.length-1; x > 1; x--) {
    console.groupEnd();
  }
  console.groupEnd();
}

/**
 * Returns the callstack of the function in this run.
 */
Logger.prototype.getCallStack = function() {
  var caller = this.getCallStack.caller.caller;
  var callstack = [];
  while (typeof caller === "function") {
    callstack.push(caller.name);
    caller = caller.caller;
  }
  return callstack;
}
