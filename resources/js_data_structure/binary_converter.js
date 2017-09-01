function binaryConverter(decimal){
    var remStack = new Stack(),
        rem,
        binaryString = '';

    while (decimal > 0) {
        rem = Math.floor(decimal % 2);
        remStack.push(rem);

        decimal = Math.floor(decimal / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
// binaryString = binaryString + remStack.pop().toString();
    }
    
    return binaryString
}
