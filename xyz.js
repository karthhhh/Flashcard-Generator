/ ClozeCard functionality 


ClozeCard = function (text, cloze) {
    if (this instanceof ClozeCard) {
        this.text = text;
        this.cloze = cloze;
        this.closeErrorBool = false;

        // returns only cloze deleted
        this.clozeDeletedText = function () {
            //console.log("Cloze: " + this.cloze);
            return this.cloze;
        };

	this.partialText = function () {
        	    var clozeStart = this.text.search(cloze);
        	    var clozeEnd = clozeStart + parseInt(this.cloze.length);

           	 if (clozeStart === 0) {
                	this.partial = "..." + this.text.slice(clozeEnd + 1);
                        //console.log("Partial Text: " + "... " + partial);
           	 } else if (clozeStart > 0) {
                	//this.partial = (this.text.slice(0, clozeStart) + " ... " + this.text.slice(clozeEnd + 1));
                	this.partial =  " ... " + this.text.slice(clozeEnd + 1);
               		 //console.log("Partial Text: " + partial);
           	 } else {
                	this.clozeError();
               	        this.clozeErrorBool = true;
           	 }
                 return this.partial;
       	 };

         this.clozeError = function () {
            console.log("The string was not found in the text");
         };

	 this.fullText = function () {
                 var startStr = "11c1::"
        	 var answer = this.cloze.substring(startStr.length, cloze.length - 2);
        	 var clozeStart = this.text.search(cloze);
        	 var clozeEnd = clozeStart + parseInt(this.cloze.length);

           	 if (clozeStart === 0) {
                	question = this.text.slice(clozeEnd + 1);
           	 } else if (clozeStart > 0) {
                	//this.partial = (this.text.slice(0, clozeStart) + " ... " + this.text.slice(clozeEnd + 1));
                	question =  this.text.slice(clozeEnd + 1);
           	 } else {
                	this.clozeError();
               	        this.clozeErrorBool = true;
           	 }
                 return answer + question;
       	 };
      } else {
    	    return new ClozeCard(text, cloze);
 
      }
}

var card1 = new ClozeCard(" What is {{c1::Hello}} word used to greet other people", "{{c1::Hello}}");
console.log("PartialText is:" +  card1.partialText());
console.log("FullText is:" + card1.fullText());
console.log("DeletedText is:" + card1.clozeDeletedText());

var card2 = new ClozeCard("{{c1::George Washington}} was the first president of the United States. ", "{{c1::George Washington}}");
console.log("PartialText is:" +  card2.partialText());
console.log("FullText is:" + card2.fullText());
console.log("DeletedText is:" + card2.clozeDeletedText());
