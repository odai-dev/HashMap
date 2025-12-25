# JavaScript Hash Map Project

## Project Goal
A comprehensive, custom implementation of a **Hash Map** data structure using ES6 classes. This project demonstrates deep understanding of how key-value pairs are stored, retrieved, and managed in memory.

### **Core Features**
- **Efficient Hashing:** A custom prime-number hashing algorithm that uses modulo arithmetic inside the loop to prevent integer overflow.
- **Collision Handling:** Implemented **Chaining** logic to ensure data integrity when multiple keys hash to the same bucket.
- **Dynamic Growth:** Built-in **Rehashing** logic that automatically doubles capacity and redistributes entries when the load factor (0.75) is reached.
- **Full API Implementation:**
    - **Manipulation:** `set(key, value)`, `remove(key)`, `clear()`.
    - **Retrieval:** `get(key)`, `has(key)`, `length()`.
    - **Collections:** `keys()`, `values()`, `entries()`.

## Curriculum Reference
This project was completed as part of **The Odin Project's** Full Stack JavaScript curriculum.
- **Lesson:** [Hash Maps](https://www.theodinproject.com/lessons/javascript-hashmap)

## 🛠️ Requirements Met
- Enforced bucket bounds check to prevent out-of-bounds access.
- Handled key updates (overwriting values for existing keys).
- Maintained O(1) average time complexity for lookups.
- Successfully implemented dynamic array resizing.