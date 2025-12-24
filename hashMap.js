class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.buckets = new Array(this.capacity).fill(null);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= this.capacity;
        }

        return hashCode;
    } 

     set(key, value) {
        const index = this.hash(key);
        
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        if(this.buckets[index] === null) {
            this.buckets[index] = {key, value, next :null};
            this.size++;
        } else {
            let current = this.buckets[index];
            while(current) {
                if(current.key === key) {
                    current.value = value;
                    return;
                }
                if (current.next === null) break;
                current = current.next;
            }

            current.next = {key, value, next:null};
            this.size++;
        }
    }

    get(key) {
        const index = this.hash(key);
        
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        let current = this.buckets[index];
        while(current) {
            if(current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }
    
    has(key) {
        const index = this.hash(key);
        
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        let current = this.buckets[index];
        while(current) {
            if(current.key === key) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}