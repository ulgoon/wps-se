function Queue_with_stack() {
    var inBox = [];
    var outBox = [];
    var dummy = null;

    this.enqueue = function(num) {
        inBox.push(num);
    };

    this.dequeue = function() {
        if (outBox.length > 0) {
            return outBox.pop();
        }

        while(inBox.length > 1) {
            outBox.push(inBox.pop());
        }

        return inBox.pop();
    };
}
