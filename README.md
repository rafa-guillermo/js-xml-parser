# js-xml-parser
JavaScript to XML Parser to be used before GAS XmlService.parse() due lack of leniancy since Xml.parse() deprecation.

Still work-in-progress. Currently formats JavaScript code so it can be parsed into an XML Parser by escaping XML special characters in the JavaScript code (", ', <, >, &).

Usage:

var JsXmlObject = new JSXMLParser(htmlDocument as string);
var escapedJsCode = JsXmlObject.parse();
