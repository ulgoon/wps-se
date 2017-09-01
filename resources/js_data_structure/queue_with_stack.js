function Queue_with_stack(){
    var inbox = [];
    var outbox = [];

    this.enqueue = function(element){
        while (outbox.length > 0) {
            outbox.push(inbox.pop());
        }

        return inbox.push(element);
    };

    this.dequeue = function(){
        while(inbox.length > 1){
            outbox.push(inbox.pop());
        }

        return inbox.pop();
    };
}
