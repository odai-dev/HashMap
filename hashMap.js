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

        if (this.size / this.capacity > this.loadFactor) {
            const currentEntries = this.entries();
            
            this.capacity *= 2;
            this.buckets = new Array(this.capacity).fill(null);
            this.size = 0; 

            currentEntries.forEach(([key, value]) => {
                this.set(key, value);
            });
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

    remove(key) {
        const index = this.hash(key);
        
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (this.buckets[index] == null) return false;
        if (this.buckets[index].key === key) {
            this.buckets[index] = this.buckets[index].next;
            this.size--;
            return true;
        }

        let prev = this.buckets[index];
        let current = this.buckets[index].next;

        while(current) {
            if (current.key === key) {
                prev.next = current.next;
                this.size--;
                return true;
            }
            prev = current;
            current = current.next;
        }

        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null);
        this.size = 0;
    }

    keys() {
        let keys = [];
        this.buckets.forEach(bucket => {
            if(bucket) {
                let current = bucket;
                while(current) {
                    keys.push(current.key);
                    current = current.next;
                }
            }
        })
        
        return keys;
    }

    values() {
        let values = [];
        this.buckets.forEach(bucket => {
            if(bucket) {
                let current = bucket;
                while(current) {
                    values.push(current.value);
                    current = current.next;
                }
            }
        })
        
        return values;       
    }

    entries() {
        let entries = [];
        this.buckets.forEach(bucket => {
            if(bucket) {
                let current = bucket;
                while(current) {
                    entries.push([current.key, current.value]);
                    current = current.next;
                }
            }
        })
        
        return entries;       
    }
}

const myMap = new HashMap();
myMap.set('apple', 'red');
myMap.set('banana', 'yellow');

myMap.set('elephant', 'gray')
myMap.set('frog', 'green')
myMap.set('grape', 'purple')
myMap.set('hat', 'black')
myMap.set('ice cream', 'white')
myMap.set('jacket', 'blue')
myMap.set('kite', 'pink')
myMap.set('lion', 'golden')

console.log(myMap.get('apple')); 
console.log(myMap.has('banana')); 
console.log(myMap.has('cucumber')); 
console.log(myMap.size); 

myMap.set('apple', 'green');
console.log(myMap.get('apple')); 
console.log(myMap.size); 
console.log(myMap.remove('apple'));
console.log(myMap.remove('cucumber'));

myMap.set('lion', 'brown');

console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());


console.log('--- Growth Test ---');
console.log('Start Capacity:', myMap.capacity); 
console.log('Start Size:', myMap.size);

myMap.set('monkey', 'brown');
myMap.set('node', 'js');
myMap.set('odin', 'project');
myMap.set('postgresql', 'db'); 

console.log('New Capacity:', myMap.capacity); 
console.log('New Size:', myMap.size);

console.log('Verify "lion":', myMap.get('lion')); 
console.log('Verify "postgresql":', myMap.get('postgresql'));