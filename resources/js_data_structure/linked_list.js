function LinkedList(){
    var Node = function(element){
        this.element = element;
        this.next = null;
    };

    var length = 0;
    var head = null;

        this.append = function(element){
            var node = new Node(element),
                current;

            if (head === null){
                head = node;
            } else {
                current = head;
                while(current.next){
                    current = current.next;
                }
                current.next = node;
            }
            length++;
        };
}
