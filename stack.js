//stacks are FILO like a stack of cafeteria trays

//A common implementation is singly linked lists with operations constrained to 
//push and pop

class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class SLStack {
    constructor(){
        this.top = null
    }
    push(){
        if (this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }
        //add new node to top of stack
        const node = new _Node(data, this.top)
        this.top = node
    }
    pop(){
        const output = this.top
        this.top = output.next
        return output
    }   
}