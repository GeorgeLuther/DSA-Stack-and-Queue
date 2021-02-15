//Queues are FIFO like a conveyor belt. insert at one end, remove from the other.

//SSL implementation
class _Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
    }
    enqueue(data){
        const newNode = new _Node(data)
        if (this.first === null ){
            this.first = newNode
        }

        if (this.last) {
            this.last.next = newNode
        }

        this.last = newNode
    }
    dequeue(){
        if (this.first === null) {
            return
        }

        const node = this.first
        this.first = this.first.next

        if (node === this.last){
            this.last = null
        }
        
        return node.value
    }
}