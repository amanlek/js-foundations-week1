/** 
* closure-based counter function that maintains private state
* @param initialValue - initial value of counter
* @returns function that increments and returns the counter value
*/

const createCounter = (initialValue =0) =>{
    let count = initialValue;  // This variable belongs to createCounter's lexical scope. It is not accessible from outside

    return () => {  //It remembers the value of `count` even after createCounter finishes execution
        count++;
        return count;
    }
}
const counter = createCounter(0);
console.log(counter()); //1
console.log(counter()); //2


/**
 * toggle function using closure with private variable
 * @returns function that toggles and returns boolean value
 */
const createToggle = () => {
  let isOn = false;

  return () => {  // Closure remembers `isOn` across function calls
    isOn = !isOn;
    return isOn;
  };
};
const toggle = createToggle();
console.log(toggle()); // true
console.log(toggle()); // false



/**
 * Fetches a post title from a public API using Promise .then() syntax
 * @returns Promise
 */
const fetchTodo = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then((response) => {                
        console.log('Status Msg:', response.statusText); 
        //fetch does NOT throw errors for HTTP status codes,  We must manually check response.ok
      if (!response.ok) {
        throw new Error('Network error');
      }
      return response.json();
    })
    .then((data) => {
      console.log("title: ", data.title);
    })
    .catch((error) => {
      console.error('Error fetching data:', error.message);
    })
    .finally(() => {                        // Runs regardless of success or failure
      console.log('Fetch request completed');
    });
};

// Usage
fetchTodo();



/**
 * Fetches a post title from a public API using async await syntax
 * @returns Promise
 */
const fetchTodoAsync = async() => {
    try{
        // await pauses execution inside the function, without blocking the main thread
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        console.log('Async function Status Msg:', res.statusText);
        // Manual HTTP error handling 
        if (!res.ok) {
            throw new Error('Async Network error');
        }
        const data = await res.json();
        console.log("(async-await) title: ", data.title);
    }

    // Handles network errors
    catch(error) { 
      console.error('(async-await) Error fetching data:', error.message);   
    }
    finally{
      console.log('Async Fetch request completed');
    }
};
fetchTodoAsync();








