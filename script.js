document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
                {
  "question": "What is the difference between a 'stack' and a 'queue' data structure?",
  "description": "This fundamental question tests your understanding of two basic linear data structures and their principles of operation.",
  "hint": "Focus on the order in which elements are added and removed from each data structure (LIFO vs. FIFO).",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Stack:</strong>
            <ul>
              <li>A stack is a linear data structure that follows the <strong>Last-In, First-Out (LIFO)</strong> principle.</li>
              <li>The last element added to the stack is the first one to be removed.</li>
              <li>Common operations on a stack include:
                <ul>
                  <li><strong>Push:</strong> Adds an element to the top of the stack.</li>
                  <li><strong>Pop:</strong> Removes and returns the element from the top of the stack.</li>
                  <li><strong>Peek (or Top):</strong> Returns the element at the top of the stack without removing it.</li>
                </ul>
              </li>
              <li>Analogy: Think of a stack of plates. You add new plates to the top, and you also remove plates from the top.</li>
            </ul>
          </li>
          <li><strong>Queue:</strong>
            <ul>
              <li>A queue is a linear data structure that follows the <strong>First-In, First-Out (FIFO)</strong> principle.</li>
              <li>The first element added to the queue is the first one to be removed.</li>
              <li>Common operations on a queue include:
                <ul>
                  <li><strong>Enqueue:</strong> Adds an element to the rear (end) of the queue.</li>
                  <li><strong>Dequeue:</strong> Removes and returns the element from the front (beginning) of the queue.</li>
                  <li><strong>Peek (or Front):</strong> Returns the element at the front of the queue without removing it.</li>
                </ul>
              </li>
              <li>Analogy: Think of a line of people waiting. The first person in line is the first one to be served (removed from the front). New people join at the back (enqueued at the rear).</li>
            </ul>
          </li>
          <li><strong>Key Difference Summarized:</strong> The primary difference lies in the order of element removal. Stacks follow LIFO (last in, first out), while queues follow FIFO (first in, first out).</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Clear definitions of both stack and queue, Explanation of LIFO and FIFO principles, Common operations for each, Relevant real-world analogies, Concise summary of the key difference.</p>
      `
},
{
    "question": "Explain the concept of 'inheritance' in Object-Oriented Programming (OOP). How does it promote code reusability?",
    "description": "This fundamental OOP concept is often tested to understand your grasp of object-oriented principles.",
    "hint": "Define inheritance and explain how a subclass can inherit properties and behaviors from a superclass, leading to code reuse and the 'is-a' relationship.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Definition of Inheritance:</strong> Inheritance is a mechanism in OOP where a new class (subclass or derived class) inherits properties (attributes) and behaviors (methods) from an existing class (superclass or base class).</li>
        <li><strong>'Is-a' Relationship:</strong> Inheritance establishes an 'is-a' relationship. For example, a 'Car' is-a 'Vehicle'.</li>
        <li><strong>Code Reusability:</strong>
          <ul>
            <li>Subclasses automatically acquire the members of the superclass, reducing the need to rewrite code.</li>
            <li>This leads to less code, easier maintenance, and a more organized structure.</li>
            <li>Changes in the superclass are automatically reflected in the subclasses (unless overridden).</li>
          </ul>
        </li>
        <li><strong>Extending Functionality:</strong> Subclasses can add new members or override inherited ones to extend or modify the superclass's behavior.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Definition, 'is-a' relationship, benefits of code reusability, extending functionality.</p>
    `
  },
  {
    "question": "What are the differences between 'call by value' and 'call by reference'?",
    "description": "This question tests your understanding of how arguments are passed to functions in programming.",
    "hint": "Focus on whether a copy of the variable or the actual memory location is passed to the function.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Call by Value:</strong>
          <ul>
            <li>A copy of the actual value of the argument is passed to the function.</li>
            <li>Changes made to the parameter inside the function do not affect the original argument outside the function.</li>
            <li>Primitive data types (like int, float, boolean) are often passed by value.</li>
          </ul>
        </li>
        <li><strong>Call by Reference:</strong>
          <ul>
            <li>The memory address (reference) of the actual argument is passed to the function.</li>
            <li>Changes made to the parameter inside the function directly affect the original argument outside the function because the function is working with the original memory location.</li>
            <li>Objects and arrays are often passed by reference (or a reference to them is passed, depending on the language).</li>
          </ul>
        </li>
        <li><strong>Key Difference:</strong> Call by value passes a copy, while call by reference passes the memory address, allowing modifications to the original variable.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> How data is passed, impact of changes within the function, common data types associated with each method.</p>
    `
  },
  {
    "question": "Explain the concept of 'database normalization'. What are the first three normal forms (1NF, 2NF, 3NF)?",
    "description": "This question assesses your knowledge of database design principles.",
    "hint": "Define normalization and describe the requirements for each of the first three normal forms in terms of data redundancy and dependencies.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Definition of Normalization:</strong> Database normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.</li>
        <li><strong>First Normal Form (1NF):</strong>
          <ul>
            <li>Each cell in the table contains only a single value.</li>
            <li>There are no repeating groups of columns.</li>
          </ul>
        </li>
        <li><strong>Second Normal Form (2NF):</strong>
          <ul>
            <li>The table is in 1NF.</li>
            <li>All non-key attributes are fully functionally dependent on the entire primary key. (No partial dependencies).</li>
          </ul>
        </li>
        <li><strong>Third Normal Form (3NF):</strong>
          <ul>
            <li>The table is in 2NF.</li>
            <li>No non-key attribute is transitively dependent on the primary key. (No dependencies on other non-key attributes).</li>
          </ul>
        </li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Definition of normalization, clear and concise explanation of the requirements for 1NF, 2NF, and 3NF.</p>
    `
  },
  {
    "question": "What are the different types of SQL JOINs?",
    "description": "This question tests your ability to retrieve data from multiple tables in SQL.",
    "hint": "List and briefly explain the purpose and behavior of INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>INNER JOIN:</strong> Returns rows only when there is a match in both tables based on the join condition.</li>
        <li><strong>LEFT JOIN (or LEFT OUTER JOIN):</strong> Returns all rows from the left table and the matching rows from the right table. If no match, NULLs are returned for the right table's columns.</li>
        <li><strong>RIGHT JOIN (or RIGHT OUTER JOIN):</strong> Returns all rows from the right table and the matching rows from the left table. If no match, NULLs are returned for the left table's columns.</li>
        <li><strong>FULL OUTER JOIN:</strong> Returns all rows from both tables. If no match, NULLs are returned for the columns of the table without a match.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Name and concise description of each of the four main JOIN types and their result sets.</p>
    `
  },
  {
    "question": "Explain the concept of 'polymorphism' in OOP. Give an example.",
    "description": "This core OOP principle is important for writing flexible and extensible code.",
    "hint": "Define polymorphism and explain how objects of different classes can respond to the same method call in their own way. Provide a simple code example.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Definition of Polymorphism:</strong> Polymorphism (meaning 'many forms') is the ability of an object to take on many forms. It allows you to treat objects of different classes uniformly through a common interface.</li>
        <li><strong>Types of Polymorphism:</strong> Briefly mention compile-time (method overloading) and runtime (method overriding using virtual functions in languages like C++ or interfaces in Java).</li>
        <li><strong>Example (Conceptual):</strong> Consider a base class 'Shape' with a method 'draw()'. Different derived classes like 'Circle', 'Square', and 'Triangle' can override the 'draw()' method to implement how each specific shape should be drawn. When you have a collection of 'Shape' objects, calling 'draw()' on each object will execute the appropriate 'draw()' method for its specific type.</li>
        <li><strong>Benefits:</strong> Promotes code flexibility, reusability, and extensibility. It allows for writing more generic code that can work with different types of objects.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Definition, different types, a clear conceptual example, and the benefits of polymorphism.</p>
    `
  },
  {
    "question": "What is the difference between '==' and '.equals()' in Java?",
    "description": "This question tests your understanding of object comparison in Java.",
    "hint": "Focus on whether the comparison is based on reference equality or content equality.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>`==` Operator:</strong>
          <ul>
            <li>Compares the memory references (addresses) of two objects.</li>
            <li>Returns <code>true</code> if both variables point to the same object in memory.</li>
            <li>For primitive data types, it compares the actual values.</li>
          </ul>
        </li>
        <li><strong> Method:</strong>
          <ul>
            <li>Compares the content or the state of two objects.</li>
            <li>The default implementation in the <code>Object</code> class also compares references (similar to <code>==</code>).</li>
            <li>However, classes like <code>String</code>, <code>Integer</code>, and other wrapper classes override the <code>.equals()</code> method to compare the actual values of the objects.</li>
          </ul>
        </li>
        <li><strong>Key Difference:</strong> `==` checks for reference equality (same object), while  checks for content equality (same value or state).</li>
        <li><strong>When to Use:</strong> Use `==` to check if two references point to the exact same object. Use  to check if two objects have the same logical value or state.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Comparison of references vs. content, default behavior of  how classes like <code>String</code> override it, appropriate use cases for each.</p>
    `
  },
  {
    "question": "Explain the concept of 'acid properties' in the context of database transactions.",
    "description": "This question tests your understanding of the fundamental properties that guarantee reliable database transactions.",
    "hint": "Define each letter in ACID: Atomicity, Consistency, Isolation, and Durability.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Atomicity:</strong> Ensures that a transaction is treated as a single, indivisible unit of work. Either all operations within the transaction succeed, or all of them fail (rollback).</li>
        <li><strong>Consistency:</strong> Ensures that a transaction brings the database from one valid state to another. All rules, constraints, and integrity conditions must be maintained.</li>
        <li><strong>Isolation:</strong> Ensures that multiple concurrent transactions execute in a way that they appear to be executed serially. One transaction should not interfere with another. Different isolation levels define the degree of isolation.</li>
        <li><strong>Durability:</strong> Ensures that once a transaction is committed, the changes are permanent and survive even system failures (e.g., power outage). This is typically achieved through transaction logs.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Clear definition and importance of each of the four ACID properties for reliable database transactions.</p>
    `
  },
 
  {
    "question": "Explain the concept of 'RESTful APIs'. What are some of the key HTTP methods used in REST?",
    "description": "This question tests your understanding of a common architectural style for web services.",
    "hint": "Define REST and then list and describe the common HTTP methods (GET, POST, PUT, DELETE) and their typical uses.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Definition of RESTful APIs:</strong> REST (Representational State Transfer) is an architectural style for designing networked applications based on stateless communication using standard HTTP methods.</li>
        <li><strong>Key HTTP Methods:</strong>
          <ul>
            <li><strong>GET:</strong> Used to retrieve a representation of a resource. Should be safe and idempotent.</li>
            <li><strong>POST:</strong> Used to create a new resource.</li>
            <li><strong>PUT:</strong> Used to update an existing resource or create a new resource at a specific URI. Should be idempotent.</li>
            <li><strong>DELETE:</strong> Used to delete a resource identified by a URI. Should be idempotent.</li>
          </ul>
        </li>
        <li><strong>Other Methods (Briefly Mention):</strong> Briefly mention other less commonly used methods like PATCH (for partial updates).</li>
        <li><strong>Statelessness:</strong> Emphasize that RESTful APIs are stateless, meaning each request from the client to the server contains all the information needed to understand the request.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Definition of REST, clear explanation of the purpose of GET, POST, PUT, and DELETE methods, the concept of statelessness.</p>
    `
  },
  {
    "question": "What is the difference between 'primary key', 'foreign key', and 'unique key' in SQL?",
    "description": "This question tests your understanding of constraints used to enforce data integrity in relational databases.",
    "hint": "Define each key and highlight their unique characteristics and purposes.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Primary Key:</strong>
          <ul>
            <li>Uniquely identifies each row in a table.</li>
            <li>Cannot contain NULL values.</li>
            <li>A table can have only one primary key.</li>
          </ul>
        </li>
        <li><strong>Foreign Key:</strong>
          <ul>
            <li>A column (or set of columns) in one table that references the primary key of another table.</li>
            <li>Establishes and enforces a relationship between tables (referential integrity).</li>
            <li>Can contain NULL values.</li>
            <li>A table can have multiple foreign keys.</li>
          </ul>
        </li>
        <li><strong>Unique Key:</strong>
          <ul>
            <li>Ensures that all values in a column (or set of columns) are unique.</li>
            <li>Can contain one NULL value (depending on the database system).</li>
            <li>A table can have multiple unique keys.</li>
          </ul>
        </li>
        <li><strong>Key Differences Summarized:</strong> Primary key for unique row identification (no NULLs, one per table), foreign key for linking tables and enforcing relationships, unique key for ensuring unique values in a column (allows one NULL).</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Definition and purpose of each key, constraints (NULLability, uniqueness, number per table), and their role in database design.</p>
    `
  }, 
  {
    "question": "Explain the concept of 'threads' and 'multithreading'. What are the advantages of using threads?",
    "description": "This question tests your understanding of concurrency within a single process.",
    "hint": "Define threads and multithreading and then discuss the benefits like improved performance and responsiveness.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Thread:</strong> A thread is a lightweight unit of execution within a process. A process can have multiple threads running concurrently.</li>
        <li><strong>Multithreading:</strong> The ability of an application to have multiple threads running concurrently within a single process, allowing it to perform multiple tasks at the same time.</li>
        <li><strong>Advantages of Multithreading:</strong>
          <ul>
            <li><strong>Improved Responsiveness:</strong> Can prevent an application from becoming unresponsive if one part of it is performing a long-running operation.</li>
            <li><strong>Increased Performance:</strong> Can utilize multi-core processors more effectively by executing different parts of the program on different cores.</li>
            <li><strong>Resource Sharing:</strong> Threads within the same process share the same memory space, making it easier for them to communicate and share data.</li>
            <li><strong>Better Throughput:</strong> Can increase the overall throughput of an application by allowing it to handle multiple requests or tasks concurrently.</li>
          </ul>
        </li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Definitions of thread and multithreading, clear explanation of the advantages in terms of responsiveness, performance, resource sharing, and throughput.</p>
    `
  },
  {
    "question": "What is the difference between 'ArrayList' and 'LinkedList' in Java?",
    "description": "This question tests your knowledge of two fundamental implementations of the List interface in Java.",
    "hint": "Focus on their underlying data structures (array vs. linked list) and the performance implications for different operations.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>ArrayList:</strong>
          <ul>
            <li>Based on a dynamically resizable array.</li>
            <li>Provides fast random access to elements (O(1)) using the index.</li>
            <li>Insertion and deletion in the middle are slow (O(n)) as elements need to be shifted.</li>
            <li>Insertion at the end is generally fast (amortized O(1)).</li>
          </ul>
        </li>
        <li><strong>LinkedList:</strong>
          <ul>
            <li>Based on a doubly linked list.</li>
            <li>Insertion and deletion at any position are efficient (O(1) if the position is known, O(n) to find the position).</li>
            <li>Random access is slow (O(n)) as you need to traverse the list from the beginning or end.</li>
          </ul>
        </li>
        <li><strong>Key Differences Summarized:</strong> ArrayList is better for random access, while LinkedList is better for frequent insertions and deletions in the middle. The underlying data structure dictates these performance characteristics.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Underlying data structure, performance characteristics for random access, insertion, and deletion for both data structures.</p>
    `
  },
  {
    "question": "Explain the concept of 'SQL injection' and how to prevent it.",
    "description": "This question tests your understanding of a common web security vulnerability.",
    "hint": "Define SQL injection and explain how it allows attackers to execute malicious SQL queries. Then, discuss prevention techniques like parameterized queries.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Definition of SQL Injection:</strong> SQL injection is a code injection technique used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution (e.g., to dump the database content to the attacker).</li>
        <li><strong>How it Works:</strong> Attackers exploit vulnerabilities in application code that doesn't properly sanitize user input. They inject malicious SQL code into input fields, which is then concatenated into SQL queries executed against the database.</li>
        <li><strong>Prevention Techniques:</strong>
          <ul>
            <li><strong>Parameterized Queries (Prepared Statements):</strong> Use parameterized queries where SQL code is defined first, and then parameters are passed to the query. This prevents user input from being directly embedded into the SQL statement, thus preventing injection.</li>
            <li><strong>Input Validation and Sanitization:</strong> Validate and sanitize all user input to ensure it conforms to expected formats and remove or escape potentially malicious characters.</li>
            <li><strong>Principle of Least Privilege:</strong> Grant database users only the necessary permissions required for their tasks. Avoid using the 'root' or 'admin' user for application database connections.</li>
            <li><strong>Web Application Firewall (WAF):</strong> Implement a WAF that can help detect and block malicious SQL injection attempts.</li>
          </ul>
        </li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Definition of SQL injection, how it works by exploiting unsanitized input, and the primary prevention techniques, especially parameterized queries.</p>
    `
  },
  {
    "question": "Explain the concept of 'caching'. What are some common caching strategies?",
    "description": "This question tests your understanding of a fundamental performance optimization technique.",
    "hint": "Define caching and discuss different levels and strategies like browser caching, server-side caching (in-memory, distributed), and CDN.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Definition:</strong> Caching is storing copies of data in a temporary storage location (cache) to serve future requests faster.</li>
        <li><strong>Importance:</strong> Reduces latency, improves performance, decreases load on the original data source.</li>
        <li><strong>Common Caching Strategies:</strong>
          <ul>
            <li><strong>Browser Caching:</strong> Storing static assets locally in the user's browser.</li>
            <li><strong>Server-Side Caching:</strong>
              <ul>
                <li><strong>In-Memory Caching (e.g., Redis, Memcached):</strong> Fast access storage on the server.</li>
                <li><strong>Distributed Caching:</strong> Scalable caching across multiple servers.</li>
              </ul>
            </li>
            <li><strong>Content Delivery Networks (CDNs):</strong> Distributed servers for serving static content closer to users.</li>
          </ul>
        </li>
        <li><strong>Cache Invalidation:</strong> Briefly mention the challenge of keeping cached data consistent.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Definition, importance, different levels and examples of caching strategies, and the concept of cache invalidation.</p>
    `
  },
  {
    "question": "What is the difference between 'TCP' and 'UDP'?",
    "description": "This question tests your understanding of two fundamental internet protocols.",
    "hint": "Focus on connection establishment, reliability, speed, and common use cases.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>TCP (Transmission Control Protocol):</strong>
          <ul>
            <li>Connection-oriented (requires handshake).</li>
            <li>Reliable (guarantees delivery, ordered).</li>
            <li>Slower due to overhead.</li>
            <li>Used for web browsing (HTTP), email (SMTP), file transfer (FTP).</li>
          </ul>
        </li>
        <li><strong>UDP (User Datagram Protocol):</strong>
          <ul>
            <li>Connectionless.</li>
            <li>Unreliable (no delivery guarantees).</li>
            <li>Faster due to lower overhead.</li>
            <li>Used for streaming, online gaming, DNS.</li>
          </ul>
        </li>
        <li><strong>Key Difference:</strong> TCP is reliable and connection-oriented, while UDP is unreliable and connectionless.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Connection type, reliability, speed, and typical applications for each protocol.</p>
    `
  },
  {
    "question": "Explain the concept of 'Big O' notation.",
    "description": "This question tests your ability to analyze algorithm efficiency.",
    "hint": "Define Big O and explain how it describes the upper bound of an algorithm's growth rate.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Definition:</strong> Big O notation describes the upper bound of the time or space complexity of an algorithm as the input size grows. It ignores constant factors and lower-order terms.</li>
        <li><strong>Purpose:</strong> Used to compare algorithm efficiency and predict performance with larger inputs.</li>
        <li><strong>Common Notations (Examples):</strong>
          <ul>
            <li>O(1) (Constant): Accessing an array element by index.</li>
            <li>O(log n) (Logarithmic): Binary search.</li>
            <li>O(n) (Linear): Traversing an array.</li>
            <li>O(n log n) (Linearithmic): Merge sort, quicksort (average).</li>
            <li>O(n^2) (Quadratic): Nested loops.</li>
          </ul>
        </li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Definition, purpose, and examples of common Big O notations.</p>
    `
  },
  {
    "question": "What is the difference between 'stack' and 'heap' memory in Java?",
    "description": "This question tests your understanding of memory allocation in the JVM.",
    "hint": "Focus on what types of data are stored in each and their management.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Stack Memory:</strong>
          <ul>
            <li>Used for storing local variables, method calls, and primitive data types.</li>
            <li>Memory allocation and deallocation are done in a LIFO (Last-In, First-Out) manner.</li>
            <li>Managed automatically by the JVM.</li>
            <li>Relatively small in size.</li>
          </ul>
        </li>
        <li><strong>Heap Memory:</strong>
          <ul>
            <li>Used for storing objects (instances of classes).</li>
            <li>Memory allocation and deallocation are more complex and managed by garbage collection.</li>
            <li>Larger in size compared to the stack.</li>
            <li>Shared among all threads in the application.</li>
          </ul>
        </li>
        <li><strong>Key Difference:</strong> Stack for local variables and method calls (automatic management, LIFO), Heap for objects (garbage collection, shared).</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> What is stored in each, memory management mechanism, size, and sharing across threads.</p>
    `
  },
  {
    "question": "Explain the concept of 'interfaces' in Java. How are they different from 'abstract classes'?",
    "description": "This question tests your understanding of abstraction mechanisms in Java.",
    "hint": "Define interfaces and abstract classes and highlight their key differences in terms of implementation, inheritance, and purpose.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Interface:</strong>
          <ul>
            <li>A contract that specifies a set of methods that a class must implement.</li>
            <li>Can only contain abstract methods (until Java 8, which introduced default and static methods).</li>
            <li>A class can implement multiple interfaces.</li>
            <li>Used to achieve 'multiple inheritance of type'.</li>
          </ul>
        </li>
        <li><strong>Abstract Class:</strong>
          <ul>
            <li>A class that cannot be instantiated directly.</li>
            <li>Can contain both abstract methods (declared without implementation) and concrete methods (with implementation).</li>
            <li>A class can extend only one abstract class.</li>
            <li>Used to provide a common base for subclasses and define some default behavior.</li>
          </ul>
        </li>
        <li><strong>Key Differences:</strong>
          <ul>
            <li>Implementation: Interface only declares (mostly), abstract class can implement.</li>
            <li>Multiple Inheritance: A class can implement multiple interfaces, but extend only one abstract class.</li>
            <li>Purpose: Interfaces define a contract of what a class should do, abstract classes provide a base implementation of what a class is.</li>
          </ul>
        </li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Definition of both, key differences in terms of methods, inheritance, and primary purpose.</p>
    `
  },
  {
    "question": "What are the different types of testing you are familiar with?",
    "description": "This question tests your understanding of software testing methodologies.",
    "hint": "Categorize testing types (e.g., functional vs. non-functional) and provide examples within each category.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Functional Testing:</strong> Focuses on verifying the functionality of the software against requirements.
          <ul>
            <li><strong>Unit Testing:</strong> Testing individual components or modules.</li>
            <li><strong>Integration Testing:</strong> Testing the interaction between different modules.</li>
            <li><strong>System Testing:</strong> Testing the entire integrated system.</li>
            <li><strong>User Acceptance Testing (UAT):</strong> Testing by end-users to validate if the system meets their needs.</li>
          </ul>
        </li>
        <li><strong>Non-Functional Testing:</strong> Focuses on aspects other than functionality.
          <ul>
            <li><strong>Performance Testing:</strong> Evaluating the responsiveness, stability, and resource utilization under load.</li>
            <li><strong>Security Testing:</strong> Identifying vulnerabilities and ensuring data confidentiality, integrity, and availability.</li>
            <li><strong>Usability Testing:</strong> Evaluating how easy and pleasant the software is to use.</li>
            <li><strong>Stress Testing:</strong> Testing the system beyond its normal operating conditions.</li>
            <li><strong>Regression Testing:</strong> Ensuring that new code changes do not negatively impact existing functionality.</li>
          </ul>
        </li>
        <li><strong>Other Types (Mention Briefly):</strong> Briefly mention other types like smoke testing, sanity testing, etc.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Categorization into functional and non-functional testing with relevant examples for each.</p>
    `
  },
  {
    "question": "Explain the concept of 'agile methodology'. What are some of its key principles?",
    "description": "This question tests your understanding of modern software development approaches.",
    "hint": "Define agile and discuss principles like iterative development, collaboration, and responding to change.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Definition:</strong> Agile methodology is an iterative and incremental approach to software development that emphasizes collaboration, flexibility, and continuous improvement.</li>
        <li><strong>Key Principles:</strong>
          <ul>
            <li><strong>Customer satisfaction through early and continuous delivery of valuable software.</strong></li>
            <li><strong>Welcoming changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.</strong></li>
            <li><strong>Working software is the primary measure of progress.</strong></li>
            <li><strong>Business people and developers must work together daily throughout the project.</strong></li>
            <li><strong>Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.</strong></li>
            <li><strong>The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.</strong></li>
            <li><strong>Working software is the primary measure of progress.</strong></li>
            <li><strong>Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.</strong></li>
            <li><strong>Continuous attention to technical excellence and good design enhances agility.</strong></li>
            <li><strong>Simplicity – the art of maximizing the amount of work not done – is essential.</strong></li>
            <li><strong>The best architectures, requirements, and designs emerge from self-organizing teams.</strong></li>
            <li><strong>At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.</strong></li>
          </ul>
        </li>
        <li><strong>Common Frameworks (Mention Briefly):</strong> Briefly mention Scrum and Kanban as popular agile frameworks.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Definition of agile, understanding and explanation of its key principles, and awareness of common frameworks.</p>
    `
  },
  {
    "question": "What is the 'SOLID' principle in object-oriented design?",
    "description": "This question tests your understanding of good design principles for maintainable and scalable software.",
    "hint": "List and briefly explain each letter in SOLID: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>S - Single Responsibility Principle:</strong> A class should have only one reason to change, meaning it should have only one responsibility.</li>
        <li><strong>O - Open/Closed Principle:</strong> Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.</li>
        <li><strong>L - Liskov Substitution Principle:</strong> Subtypes must be substitutable for their base types without altering the correctness of the program.</li>
        <li><strong>I - Interface Segregation Principle:</strong> Clients should not be forced to depend on interfaces they do not use. Smaller, more specific interfaces are better.</li>
        <li><strong>D - Dependency Inversion Principle:</strong>
          <ul>
            <li>High-level modules should not depend on low-level modules. Both should depend on abstractions.</li>
            <li>Abstractions should not depend on details. Details should depend on abstractions.</li>
          </ul>
        </li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Name and a brief, clear explanation of each of the five SOLID principles and their importance in software design.</p>
    `
  },
  {
    "question": "Explain the concept of 'DevOps'. What are some of its benefits?",
    "description": "This question tests your understanding of a modern approach to software development and IT operations.",
    "hint": "Define DevOps and discuss its focus on collaboration, automation, and faster delivery.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Definition:</strong> DevOps is a set of practices that integrates software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.</li>
        <li><strong>Key Aspects:</strong>
          <ul>
            <li>Collaboration and communication between development and operations teams.</li>
            <li>Automation of processes (e.g., build, test, deployment).</li>
            <li>Continuous integration and continuous delivery (CI/CD).</li>
            <li>Infrastructure as Code (IaC).</li>
            <li>Monitoring and feedback loops.</li>
          </ul>
        </li>
        <li><strong>Benefits:</strong>
          <ul>
            <li>Faster time to market.</li>
            <li>Improved collaboration and communication.</li>
            <li>Increased release frequency.</li>
            <li>Higher quality software.</li>
            <li>Reduced operational costs.</li>
            <li>Improved customer satisfaction.</li>
          </ul>
        </li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Definition, key aspects like collaboration and automation, and the various benefits of adopting DevOps practices.</p>
    `
  },
  {
    "question": "What are the different types of cloud computing service models?",
    "description": "This question tests your understanding of cloud computing fundamentals.",
    "hint": "List and explain IaaS, PaaS, and SaaS with examples of what each provides.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Infrastructure as a Service (IaaS):</strong> Provides access to fundamental computing resources like virtual machines, storage, and networks. The user manages the operating system, middleware, and applications. Examples: AWS EC2, Azure Virtual Machines, Google Compute Engine.</li>
        <li><strong>Platform as a Service (PaaS):</strong> Provides a platform allowing customers to develop, run, and manage applications without the complexity of managing the underlying infrastructure. Examples: AWS Elastic Beanstalk, Azure App Service, Google App Engine.</li>
        <li><strong>Software as a Service (SaaS):</strong> Provides ready-to-use applications over the internet, typically on a subscription basis. The provider manages all aspects of the software and infrastructure. Examples: Gmail, Salesforce, Dropbox.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Clear definitions of IaaS, PaaS, and SaaS, and what level of management is provided by the vendor and the user for each model, along with relevant examples.</p>
    `
  },
  {
    "question": "Why do you want to work for Capgemini?",
    "description": "This question assesses your knowledge of the company and your genuine interest in joining it.",
    "hint": "Research Capgemini thoroughly. Mention specific aspects that attract you, such as their projects, values, culture, or growth opportunities.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Mention Specific Aspects:</strong> Highlight 2-3 specific reasons why Capgemini appeals to you. This could include their work in a particular domain, their focus on innovation, their company values, or their reputation in the industry.</li>
        <li><strong>Alignment with Your Goals:</strong> Explain how Capgemini's opportunities or culture align with your career aspirations and personal values.</li>
        <li><strong>Enthusiasm to Contribute:</strong> Express your eagerness to contribute your skills and learn from the experienced professionals at Capgemini.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Research about Capgemini, genuine interest, alignment of values and goals, specific reasons for choosing Capgemini, enthusiasm to contribute.</p>
    `
  },
  {
    "question": "Tell me about your strengths and weaknesses.",
    "description": "This classic HR question assesses your self-awareness.",
    "hint": "For strengths, choose 2-3 relevant to the role and provide examples. For weaknesses, choose one that isn't critical and show how you're working to improve.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Strengths:</strong> Mention 2-3 strengths that align with the job requirements and provide brief examples of how you've demonstrated them.</li>
        <li><strong>Weakness:</strong> Choose a genuine weakness that is not a core requirement for the role. Describe the steps you are taking to improve in this area.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Relevance to the role, concrete examples for strengths, honesty and a focus on improvement for weaknesses.</p>
    `
  },
  {
    "question": "Where do you see yourself in 3-5 years?",
    "description": "This question helps understand your career ambitions and whether they align with potential growth at Capgemini.",
    "hint": "Show ambition and a desire for growth within a professional context, ideally aligning with opportunities at Capgemini.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Short-Term Goals:</strong> Focus on learning the role and becoming a valuable contributor.</li>
        <li><strong>Mid-Term Aspirations:</strong> Describe your desire to take on more responsibility, develop expertise in a specific area, and potentially lead projects within Capgemini.</li>
        <li><strong>Long-Term Vision:</strong> Align your long-term vision with potential growth paths within Capgemini, showing commitment to the company.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Ambition, realistic goals, alignment with potential within Capgemini, focus on learning and development, long-term commitment.</p>
    `
  },
  {
    "question": "Why should we hire you?",
    "description": "This is your chance to sell yourself and highlight why you are the best fit for the role.",
    "hint": "Summarize your key skills and experiences that directly match the job requirements and emphasize your enthusiasm for Capgemini.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Key Skills and Experience:</strong> Briefly reiterate 2-3 of your most relevant skills and experiences that match the job description.</li>
        <li><strong>Alignment with Company Needs:</strong> Explain how your skills can benefit Capgemini and contribute to their goals.</li>
        <li><strong>Enthusiasm and Fit:</strong> Reiterate your interest in Capgemini and how your work ethic and values align with the company culture (if known).</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Direct match with job requirements, unique qualifications, value proposition for Capgemini, enthusiasm and cultural fit.</p>
    `
  },
  {
    "question": "Tell me about a time you faced a conflict at work or in a team and how you resolved it.",
    "description": "This behavioral question assesses your conflict resolution and interpersonal skills.",
    "hint": "Use the STAR method to describe the situation, your role, the actions you took to resolve the conflict, and the outcome.",
    "answer": `
      <p><strong>Sample Answer Structure (Using the STAR Method):</strong></p>
      <ol>
        <li><strong>Situation:</strong> Briefly describe the context of the conflict and the individuals involved.</li>
        <li><strong>Task:</strong> What was your role in addressing or resolving the conflict?</li>
        <li><strong>Action:</strong> Detail the steps you took to mediate or resolve the issue. Did you communicate with both parties? Try to understand different perspectives? Find a common ground?</li>
        <li><strong>Result:</strong> What was the outcome of your efforts? What did you learn about conflict resolution from this experience?</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Your role in the conflict, your approach to resolution, communication skills, empathy, and the outcome of your actions.</p>
    `
  },
  {
    "question": "Describe your communication style.",
    "description": "This question helps understand how you interact with others in a professional setting.",
    "hint": "Think about your typical approach to conveying information, listening, and interacting with colleagues and clients.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Clarity and Conciseness:</strong> Emphasize your ability to communicate ideas clearly and directly, avoiding jargon when necessary.</li>
        <li><strong>Active Listening:</strong> Highlight your focus on listening attentively to understand others' perspectives before responding.</li>
        <li><strong>Professionalism and Respect:</strong> Mention your commitment to maintaining a professional and respectful tone in all interactions.</li>
        <li><strong>Adaptability:</strong> Explain your ability to tailor your communication style to different audiences and situations.</li>
        <li><strong>Openness to Feedback:</strong> Express your willingness to receive and provide constructive feedback.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Clarity, active listening, professionalism, adaptability, and openness to feedback.</p>
    `
  },
  {
    "question": "How do you handle tight deadlines or pressure?",
    "description": "This behavioral question assesses your ability to perform effectively under stress.",
    "hint": "Describe your strategies for managing time, prioritizing tasks, and staying focused when facing deadlines.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Prioritization:</strong> Explain how you prioritize tasks based on urgency and importance.</li>
        <li><strong>Time Management:</strong> Describe your techniques for managing your time effectively (e.g., breaking down tasks, setting milestones).</li>
        <li><strong>Staying Focused:</strong> Mention your strategies for maintaining concentration and avoiding distractions under pressure.</li>
        <li><strong>Seeking Support (if needed):</strong> Indicate your willingness to seek clarification or support from colleagues or supervisors when necessary.</li>
        <li><strong>Learning from Experience:</strong> Highlight how you learn from past experiences with deadlines to improve your approach.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Prioritization, time management, focus, seeking support (when appropriate), and learning from past experiences.</p>
    `
  },
  {
    "question": "Tell me about a project you are proud of and your contribution to it.",
    "description": "This behavioral question allows you to showcase your achievements and skills.",
    "hint": "Choose a relevant project and use the STAR method to highlight your specific contributions and the positive outcome.",
    "answer": `
      <p><strong>Sample Answer Structure (Using the STAR Method):</strong></p>
      <ol>
        <li><strong>Situation:</strong> Briefly describe the project, its goals, and your role.</li>
        <li><strong>Task:</strong> Clearly outline your specific responsibilities and what you needed to achieve within the project.</li>
        <li><strong>Action:</strong> Detail the specific actions you took and the skills you utilized to contribute to the project's success.</li>
        <li><strong>Result:</strong> Explain the positive outcome of the project and highlight your specific contributions to that success. Quantify your achievements whenever possible.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Relevance of the project, your specific contributions, skills demonstrated, and the positive results achieved.</p>
    `
  },
  {
    "question": "What are your salary expectations?",
    "description": "This question assesses your understanding of your market value. Be prepared with a reasonable range.",
    "hint": "Research salary ranges for similar roles in your location and experience level. Provide a range and express flexibility.",
    "answer": `
      <p><strong>Sample Answer Structure:</strong></p>
      <ol>
        <li><strong>Research-Based Range:</strong> State that you've researched salary ranges for similar roles in Hyderabad with your experience and provide a reasonable range.</li>
        <li><strong>Focus on Total Compensation:</strong> Mention that you're also interested in understanding the total compensation package, including benefits.</li>
        <li><strong>Flexibility:</strong> Express your willingness to discuss further after understanding the full scope of the role and responsibilities.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Research, providing a range, considering total compensation, and expressing flexibility.</p>
    `
  },
  {
    "question": "Do you have any questions for us?",
    "description": "This is your opportunity to show your engagement and interest in Capgemini.",
    "hint": "Prepare thoughtful questions about the role, the team, the company culture, or growth opportunities. Avoid questions about salary or benefits at this stage.",
    "answer": `
      <p><strong>Sample Questions to Ask:</strong></p>
      <ul>
        <li>Could you describe a typical day or week in this role?</li>
        <li>What are the biggest challenges and opportunities for someone in this position?</li>
        <li>What does the team structure look like, and how does this role fit in?</li>
        <li>What are the opportunities for professional development and growth within Capgemini?</li>
        <li>What are the next steps in the interview process?</li>
      </ul>
      <p><strong>Key Aspects to Highlight:</strong> Preparedness, thoughtful questions, genuine interest in the role and company.</p>
    `
  },
    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});