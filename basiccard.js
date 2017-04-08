// BasicFlash card with front and back text

   var BasicCard = function (front, back) {
    if (this instanceof BasicCard) {
        this.front = front;
        this.back = back;
        this.showCard = function () {
            console.log("Front: " + front + ", Back: " + back)
        };
    } else {
        return new BasicCard(front,back);
    }
};


var card1 = new BasicCard("Word used to greet other people", "Hello");
console.log(card1.showCard());


