class Node {
	constructor(value, nextNode = null) {
		this.value = value
		this.nextNode = nextNode
	}
}

class LinkedList {
	constructor() {
		this._head = null
		this._size = 0
	}

	// Insert first node
	// prepend(value)
	prepend(value) {
		this._head = new Node(value, this._head)
		this._size++
	}

	// Insert last node
	append(value) {
		let node = new Node(value)
		// If empty
		if (!this._head) {
			this._head = node
		} else {
			let current = this._head

			while (current.nextNode != null) {
				current = current.nextNode
			}

			current.nextNode = node
		}
		this._size++
	}

	// Insert at index
	insertAt(value, index) {
		// If index is out of range
		if (index > 0 && index > this.size) {
			return
		}

		// If index = 0
		if (index == 0) {
			this._head = new Node(value, this._head)
			this._size++
			return
		}

		const node = new Node(value)
		let current, previous

		// Set current to first
		current = this._head
		let count = 0

		while (count < index) {
			previous = current
			current = current.nextNode
			count++
		}

		node.nextNode = current
		previous.nextNode = node
		this._size++
	}

	// Get at index
	at(index) {
		if (index > this._size) return

		let count = 0
		let current = this._head

		while (count < index) {
			current = current.nextNode
			count++
		}

		return current
	}

	// pop - removes last element
	pop() {
		if (this._size == 0) return

		let current = this._head
		let previous = null

		while (current.nextNode != null) {
			previous = current
			current = current.nextNode
		}

		previous.nextNode = null
		this._size--
	}

	// contains(value) - true if value is in list, false otherwise
	contains(value) {
		let current = this._head

		while (current != null && current.value != value) {
			current = current.nextNode
		}

		if (current) return true
		return false
	}

	// find(value) returns index of node containing value
	find(value) {
		let current = this._head
		let count = 0

		while (current != null) {
			if (current.value == value) {
				return count
			}
			current = current.nextNode
			count++
		}
		return null
	}

	// Remove at index
	removeAt(index) {
		let count = 0
		let current = this._head
		let previous = null

		while (count < index) {
			previous = current
			current = current.nextNode
			count++
		}

		if (current) {
			previous.nextNode = current.nextNode
			this._size--
		}
	}

	// Clear list

	// Print list value
	toString() {
		let current = this._head
		let string = ""

		while (current != null) {
			string += `( ${current.value} ) -> `
			current = current.nextNode
		}

		return (string += "null")
	}

	// Return size
	get size() {
		return this._size
	}

	get head() {
		return this._head
	}

	get tail() {
		// If empty
		if (this._size == 0) return null

		let current = this._head
		while (current.nextNode != null) {
			current = current.nextNode
		}

		return current
	}
}

const list = new LinkedList()
list.prepend(100)
list.prepend(200)
list.prepend(300)
list.append(340)
list.insertAt(500, 0)

console.log(list.toString())
console.log(list.size)
// console.log(list.head)
// console.log(list.tail)
// console.log(list.at(2))
// list.pop()
// console.log(list.toString())
// console.log(list.contains(100))
// console.log(list.find(340))
list.removeAt(4)
console.log(list.toString())
