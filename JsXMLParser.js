function JsXMLParser(htmlDocument) {
  this.htmlDocument = htmlDocument
  
  this.scriptFinder = function(htmlDocument){    
    try {
      var regexOpenScript = new RegExp(/<script>/g);
      var regexCloseScript = new RegExp(/<\/script>/g);
      if (!htmlDocument.match(regexOpenScript)){
        throw new Error("No <script> tags in document. Aborted operation.");
      }
      else if (!htmlDocument.match(regexCloseScript)){
        throw new Error("Unclosed <script> tags found in document. Aborted operation."); 
      }
      else{
        var numberOfLocations = htmlDocument.match(regexOpenScript);
        var openTagLocation = htmlDocument.indexOf("<script>");
        var closedTagLocation = htmlDocument.indexOf("</script>");
        var listOfScripts = [];
        
        for (var c = 0; c < numberOfLocations.length; c++){          
          listOfScripts.push(htmlDocument.substr(openTagLocation + 8, (closedTagLocation - openTagLocation) - 8));
        }
        return [listOfScripts, numberOfLocations.length];
      }
    }
    catch(e){
      console.log(e);
    }
  }
  
  function convert(text) {
    this.specialChars = ['&', '"', "'", '<', '>'];
    this.escapedChars = ['&amp;', '&quot;', '&apos;', '&lt;', '&gt;'];
    this.formattedText = text;

    for (var c = 0; c < this.specialChars.length; c++){
      var regex = new RegExp(this.specialChars[c], 'g');
      this.formattedText = this.formattedText.replace(regex, this.escapedChars[c]);
    }
    return this.formattedText;
  }
  
  this.scriptReplacer = function(htmlDocument, finderReturn) {
    for (var c = 0; c < finderReturn[1]; c++){
      htmlDocument = htmlDocument.replace(finderReturn[0][c], convert(finderReturn[0][c]))
    }
    return htmlDocument;
  }
  
  this.parse = function(){
    return this.scriptReplacer(this.htmlDocument, this.scriptFinder(this.htmlDocument));
  }
  
  this.scriptify = function(){
    return "<script>" + this.formattedText = "</script>";
  }
  
  this.formattedText = this.parse();
  
}
