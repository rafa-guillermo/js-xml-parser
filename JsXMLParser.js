var JsXMLParser = function(text){
  this.text = text;  
  this.formattedText = text;
  this.specialChars = ['&', '"', "'", '<', '>'];
  this.escapedChars = ['&amp;', '&quot;', '&apos;', '&lt;', '&gt;'];
      
  this.parsed = function(){   
    for (var c = 0; c < this.specialChars.length; c++){
      var regex = new RegExp(this.specialChars[c], 'g');
      this.formattedText = this.formattedText.replace(regex, this.escapedChars[c]);
    }
    return this.formattedText;
  }
  
  this.scriptify = function(){
   return "<script>" + this.parsed + "</script>";
  }
  
  this.descriptify = function(){
   return this.formattedText.slice(9, -10); 
  }
}
