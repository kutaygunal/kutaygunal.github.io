/* ============================================================
   WORLD: Modern C++
   ============================================================ */

const WORLD_MODERN = {
  id: "modern",
  name: "Modern C++",
  icon: "⚡",
  tagline: "C++11/14/17/20: smart pointers, move semantics, lambdas.",
  color: "#ffd54f",
  questions: [
    {
      q: "What is the difference between std::unique_ptr and std::shared_ptr?",
      options: [
        "unique_ptr has exclusive ownership; shared_ptr uses reference counting",
        "shared_ptr is exclusive; unique_ptr is shared",
        "They are identical",
        "unique_ptr cannot be used with new",
      ],
      answer: 0,
      explain: "std::unique_ptr has exclusive ownership (cannot be copied, only moved). std::shared_ptr uses reference counting so multiple owners share the object; it is destroyed when the last owner releases it.",
    },
    {
      q: "What does std::move do?",
      options: [
        "It copies an object",
        "It casts an lvalue to an rvalue reference, enabling move semantics",
        "It deletes an object",
        "It allocates memory",
      ],
      answer: 1,
      explain: "std::move is a cast to an rvalue reference. It does not move anything itself — it makes an object eligible to be moved-from by move constructors/assignment operators.",
    },
    {
      q: "What is a lambda expression?",
      options: [
        "A named function",
        "An anonymous function object that can capture variables from its scope",
        "A macro",
        "A template",
      ],
      answer: 1,
      explain: "A lambda is an anonymous function object. It can capture variables by value [=] or by reference [&], and is often used with STL algorithms.",
    },
    {
      q: "What is the difference between 'auto' and 'decltype'?",
      options: [
        "auto deduces from the initializer; decltype deduces the declared type of an expression",
        "They are identical",
        "decltype is only for functions",
        "auto is only for loops",
      ],
      answer: 0,
      explain: "'auto' deduces the type from the initializer expression. 'decltype' inspects the declared type of an expression without evaluating it, preserving references and const.",
    },
    {
      q: "What is a move constructor and when is it called?",
      options: [
        "It copies an object; called on assignment",
        "It transfers resources from a temporary; called when moving an rvalue",
        "It deletes an object; called on destruction",
        "It is the same as a copy constructor",
      ],
      answer: 1,
      explain: "A move constructor transfers ownership of resources (e.g., a heap buffer) from a temporary rvalue, avoiding a deep copy. It is called when constructing from an rvalue (e.g., std::move or a returned temporary).",
    },
    {
      q: "What is the Rule of Five?",
      options: [
        "A class should have at most five members",
        "If you define one of destructor/copy ctor/copy assign/move ctor/move assign, you should define all five",
        "A function can have five parameters",
        "A class can inherit from five bases",
      ],
      answer: 1,
      explain: "The Rule of Five states that if a class manages a resource and you define any of the destructor, copy constructor, copy assignment, move constructor, or move assignment, you should define all five to manage the resource correctly.",
    },
    {
      q: "What is std::optional used for?",
      options: [
        "Storing a value that may or may not be present",
        "Storing multiple values",
        "Making a value constant",
        "Storing a function",
      ],
      answer: 0,
      explain: "std::optional<T> represents a value that may or may not exist. It is a safer alternative to returning a sentinel or a pointer that may be null.",
    },
    {
      q: "What is a variadic template?",
      options: [
        "A template with a fixed number of parameters",
        "A template that accepts a variable number of arguments (parameter pack)",
        "A template that returns void",
        "A template that cannot be instantiated",
      ],
      answer: 1,
      explain: "A variadic template uses a parameter pack (e.g., template<typename... Args>) to accept any number of arguments. It is the basis of std::tuple and perfect forwarding.",
    },
    {
      q: "What is the purpose of 'constexpr'?",
      options: [
        "To make a variable mutable",
        "To evaluate a function or variable at compile time",
        "To make a function inline",
        "To declare a global constant",
      ],
      answer: 1,
      explain: "'constexpr' tells the compiler a value or function can be evaluated at compile time, enabling compile-time computation and better optimization.",
    },
    {
      q: "What is structured binding (C++17)?",
      options: [
        "A way to bind a struct to a class",
        "A way to decompose a tuple/struct into named variables",
        "A way to bind a reference",
        "A way to create a new struct",
      ],
      answer: 1,
      explain: "Structured bindings (auto [a, b] = pair;) decompose a tuple, pair, or struct into individual named variables in one declaration.",
    },
    {
      q: "What is an rvalue reference?",
      options: [
        "A reference that binds to temporary (rvalue) objects, enabling move semantics",
        "A reference to a constant",
        "A reference that cannot be used",
        "A reference to a global",
      ],
      answer: 0,
      explain: "An rvalue reference (T&&) binds to temporaries and expiring objects. It is the foundation of move semantics and perfect forwarding.",
    },
    {
      q: "What is the difference between lvalue and rvalue?",
      options: [
        "An lvalue has a name/location; an rvalue is a temporary without persistent location",
        "lvalue is temporary; rvalue has a name",
        "They are identical",
        "rvalues are always const",
      ],
      answer: 0,
      explain: "An lvalue refers to a named object with a stable address (can be on the left of an assignment). An rvalue is a temporary value that will be destroyed soon.",
    },
    {
      q: "What does 'auto' in a range-based for loop do by default?",
      options: ["Copies each element", "References each element", "Deletes elements", "It does nothing"],
      answer: 0,
      explain: "'for (auto x : c)' copies each element. Use 'for (auto& x : c)' to modify elements in place without copying.",
    },
    {
      q: "What is a capture list in a lambda?",
      options: [
        "Specifies which outside variables the lambda can access and how (by value/reference)",
        "Lists the lambda's parameters",
        "Defines the return type",
        "Names the lambda",
      ],
      answer: 0,
      explain: "The capture list [ ] controls access to enclosing-scope variables: [x] by value, [&x] by reference, [=] all by value, [&] all by reference.",
    },
    {
      q: "What is a const member function?",
      options: [
        "A function that does not modify the object and can be called on const objects",
        "A function that returns const",
        "A static function",
        "A function that takes const args",
      ],
      answer: 0,
      explain: "Declaring a member function const means it promises not to modify the object, allowing it to be called on const instances.",
    },
    {
      q: "What is the purpose of std::shared_ptr's control block?",
      options: [
        "It stores the reference count and, optionally, a custom deleter",
        "It stores the pointed-to object's data",
        "It is the object itself",
        "It manages the stack",
      ],
      answer: 0,
      explain: "The control block holds the reference count and optional deleter/allocator, shared by all shared_ptr copies pointing to the same object.",
    },
    {
      q: "What is std::weak_ptr used for?",
      options: [
        "A non-owning observer of a shared_ptr that avoids circular references",
        "An owning pointer",
        "A raw pointer wrapper",
        "A thread-safe pointer",
      ],
      answer: 0,
      explain: "std::weak_ptr holds a non-owning reference to an object owned by shared_ptr, letting you break cycles (e.g., parent-child back references) without affecting the refcount.",
    },
    {
      q: "What is return type deduction in C++14?",
      options: ["auto return type deduced from return statements", "Always returns int", "Requires explicit type", "Only for void"],
      answer: 0,
      explain: "C++14 allows a function to use 'auto' as its return type, deduced from the return statements, simplifying generic code.",
    },
    {
      q: "What is a concept in C++20?",
      options: [
        "A named set of requirements a template type must satisfy",
        "A new container",
        "A smart pointer",
        "A lambda",
      ],
      answer: 0,
      explain: "Concepts (C++20) let you constrain template parameters with named requirements, giving clearer errors and better overload resolution.",
    },
    {
      q: "What does std::string_view represent?",
      options: [
        "A non-owning view into a string, avoiding copies",
        "An owning string",
        "A mutable string",
        "A const string buffer",
      ],
      answer: 0,
      explain: "std::string_view (C++17) is a non-owning reference to a character sequence, letting functions accept string data without copying.",
    },
    {
      q: "What is an alias template?",
      options: ["A way to give a template a shorter name (template using =)", "A function alias", "A macro", "A type cast"],
      answer: 0,
      explain: "An alias template (template<typename T> using Vec = std::vector<T>;) creates a named alias for a template, simplifying verbose types.",
    },
    {
      q: "What is the purpose of 'if constexpr' in C++17?",
      options: [
        "Compile-time branching that discards the unused branch",
        "Runtime branching",
        "A loop",
        "A template argument",
      ],
      answer: 0,
      explain: "if constexpr evaluates a constant expression at compile time and discards the not-taken branch, enabling clean template specialization.",
    },
    {
      q: "What is a fold expression?",
      options: ["A way to apply a binary operator over a parameter pack", "A loop", "A lambda", "A type cast"],
      answer: 0,
      explain: "Fold expressions (C++17) reduce a parameter pack with a binary operator, e.g., (args + ...), simplifying variadic operations.",
    },
    {
      q: "What does std::make_unique do?",
      options: [
        "Creates a unique_ptr safely (exception-safe, no dangling)",
        "Creates a raw pointer",
        "Deletes a pointer",
        "Copies a pointer",
      ],
      answer: 0,
      explain: "std::make_unique<T>(args...) constructs a T and wraps it in a unique_ptr. It is the recommended way to create unique_ptr, avoiding explicit new.",
    },
    {
      q: "What is the difference between make_shared and make_unique?",
      options: [
        "make_shared creates a shared_ptr with a single control-block allocation; make_unique creates a unique_ptr",
        "They are identical",
        "make_unique creates a shared_ptr",
        "make_shared creates a unique_ptr",
      ],
      answer: 0,
      explain: "std::make_shared allocates the object and control block in one allocation (efficient). std::make_unique creates a unique_ptr.",
    },
    {
      q: "What is a type trait?",
      options: [
        "A compile-time template that inspects or transforms types (e.g., is_integral)",
        "A runtime cast",
        "A macro",
        "A container",
      ],
      answer: 0,
      explain: "Type traits (std::is_integral, std::remove_const, etc.) provide compile-time type introspection used heavily in template metaprogramming.",
    },
    {
      q: "What does std::enable_if do?",
      options: [
        "Conditionally enables a template overload based on a compile-time condition",
        "Turns on optimizations",
        "Enables exceptions",
        "A runtime check",
      ],
      answer: 0,
      explain: "std::enable_if SFINAEs out a template overload unless a compile-time condition holds, enabling constrained overload selection (superseded by concepts in C++20).",
    },
    {
      q: "What is the purpose of std::variant?",
      options: [
        "A type-safe union that holds one of several types at a time",
        "A container of multiple values",
        "A smart pointer",
        "A string",
      ],
      answer: 0,
      explain: "std::variant (C++17) is a type-safe tagged union that holds exactly one of several specified types, accessible via std::visit or get.",
    },
    {
      q: "What is std::any used for?",
      options: ["Holding a value of any type, type-erased", "Holding an integer", "A fixed-size array", "A tuple"],
      answer: 0,
      explain: "std::any (C++17) stores a value of any copyable type, with type-safe access via std::any_cast. Use sparingly — it adds indirection.",
    },
    {
      q: "What is std::apply?",
      options: [
        "Calls a function with a tuple's elements unpacked as arguments",
        "Applies a function to a container",
        "A loop",
        "A type cast",
      ],
      answer: 0,
      explain: "std::apply(f, tuple) invokes f with the tuple's elements as individual arguments, useful with structured bindings and tuple-based generic code.",
    },
    {
      q: "What is the purpose of std::thread?",
      options: ["Creating and managing concurrent threads of execution", "Allocating memory", "A container", "A type cast"],
      answer: 0,
      explain: "std::thread (C++11) creates and manages OS threads, launching a callable on a new thread of execution.",
    },
    {
      q: "What is std::mutex used for?",
      options: ["Mutual exclusion to protect shared data across threads", "Sorting data", "Managing memory", "Type conversion"],
      answer: 0,
      explain: "A std::mutex provides mutual exclusion: only one thread locks it at a time, preventing data races on shared resources.",
    },
    {
      q: "What is a std::lock_guard?",
      options: [
        "An RAII wrapper that locks a mutex on construction and unlocks on destruction",
        "A type of pointer",
        "A container",
        "A loop",
      ],
      answer: 0,
      explain: "std::lock_guard is an RAII guard that locks a mutex when created and automatically unlocks when it goes out of scope, ensuring safety even on exceptions.",
    },
    {
      q: "What is a std::condition_variable used for?",
      options: ["Blocking threads until a condition is signaled by another thread", "Sorting", "Memory allocation", "Type conversion"],
      answer: 0,
      explain: "A condition_variable lets threads wait for a notification, coordinating producer/consumer patterns and avoiding busy-waiting.",
    },
    {
      q: "What is std::async used for?",
      options: [
        "Running a function asynchronously, optionally on a separate thread, returning a std::future", "Sorting data", "A container", "A type cast",
      ],
      answer: 0,
      explain: "std::async launches a function and returns a std::future you can wait on to get the result, enabling simple task-based concurrency.",
    },
    {
      q: "What is a std::future?",
      options: ["A handle to a value that will be available asynchronously", "A pointer", "A container", "A thread"],
      answer: 0,
      explain: "A std::future provides a mechanism to retrieve the result of an asynchronous operation via get(), blocking until the value is ready.",
    },
    {
      q: "What is a data race?",
      options: [
        "Multiple threads accessing the same memory with at least one writing, without synchronization", "A compile error", "A memory leak", "A deadlock",
      ],
      answer: 0,
      explain: "A data race is two threads accessing the same location concurrently where at least one writes and there is no synchronization. It is undefined behavior.",
    },
    {
      q: "What is a deadlock?",
      options: [
        "Two or more threads waiting for each other's resources forever", "A program crash", "A compile error", "A race condition",
      ],
      answer: 0,
      explain: "A deadlock occurs when threads hold locks and wait for locks held by each other, so none can proceed. Avoid by consistent lock ordering.",
    },
    {
      q: "What is std::atomic used for?",
      options: [
        "Lock-free atomic operations on shared data across threads", "A mutex", "A container", "A type cast",
      ],
      answer: 0,
      explain: "std::atomic provides atomic, indivisible operations on a type, enabling lock-free shared access without data races.",
    },
    {
      q: "What is std::jthread (C++20)?",
      options: [
        "A joining thread that cooperatively stops and auto-joins on destruction", "A raw thread", "A mutex", "A future",
      ],
      answer: 0,
      explain: "std::jthread auto-joins on destruction and supports cooperative cancellation via a stop token, improving on std::thread's manual join.",
    },
    {
      q: "What is std::unique_lock?",
      options: [
        "A flexible RAII mutex lock that can be locked/unlocked manually and moved", "A smart pointer", "A thread", "A container",
      ],
      answer: 0,
      explain: "std::unique_lock provides RAII mutex management with more flexibility than lock_guard (can lock/unlock, defer, move), needed for condition_variable.",
    },
    {
      q: "What is the purpose of std::lock (free function)?",
      options: ["Locks multiple mutexes atomically, avoiding deadlock", "Locks one mutex", "Sorts", "Allocates memory"],
      answer: 0,
      explain: "std::lock locks several mutexes without deadlock risk by trying a safe ordering, useful when acquiring multiple locks.",
    },
    {
      q: "What is a std::shared_mutex (C++17)?",
      options: [
        "A mutex supporting shared (reader) and exclusive (writer) locking", "A shared pointer", "A thread", "A container",
      ],
      answer: 0,
      explain: "std::shared_mutex allows many readers or one writer, useful for reader-heavy concurrent access.",
    },
    {
      q: "What is the difference between std::shared_ptr and std::weak_ptr regarding ownership?",
      options: [
        "shared_ptr owns and keeps the object alive; weak_ptr does not increase the refcount", "They both own", "weak_ptr owns the object", "shared_ptr never owns",
      ],
      answer: 0,
      explain: "shared_ptr contributes to ownership (increments refcount). weak_ptr observes without incrementing, so it does not keep the object alive.",
    },
    {
      q: "What is std::ref used for?",
      options: [
        "Wrapping a reference so it can be stored in a value container like std::bind or thread args", "Creating a shared_ptr", "A type cast", "Sorting",
      ],
      answer: 0,
      explain: "std::ref wraps a reference into a reference_wrapper, allowing it to be copied into std::function, std::bind, or thread arguments by reference.",
    },
    {
      q: "What is the purpose of std::bind?",
      options: [
        "Binding arguments to a function to create a callable with fewer parameters", "Allocating memory", "Sorting", "Type conversion",
      ],
      answer: 0,
      explain: "std::bind creates a callable by binding some of a function's arguments now, deferring others for later. Lambdas are often preferred.",
    },
    {
      q: "What is a forwarding reference (T&&)?",
      options: [
        "A template parameter deduced as lvalue or rvalue reference, enabling perfect forwarding", "An rvalue reference always", "A const reference", "A raw pointer",
      ],
      answer: 0,
      explain: "In a template, T&& is a forwarding reference: it deduces to lvalue ref for lvalues and rvalue ref for rvalues, enabling perfect forwarding.",
    },
    {
      q: "What is the difference between std::vector<T> and std::vector<bool>?",
      options: [
        "vector<bool> is a specialized space-efficient proxy-based container, not real bools", "They are identical", "vector<bool> stores full bools", "vector<bool> is a set",
      ],
      answer: 0,
      explain: "std::vector<bool> is a specialized bit-packed container returning proxy objects, saving space but with non-standard reference semantics.",
    },
    {
      q: "What is the purpose of std::tie?",
      options: [
        "Creating a tuple of references, often to unpack return values", "A smart pointer", "A container", "A type cast",
      ],
      answer: 0,
      explain: "std::tie(a, b, c) creates a tuple of references, so you can assign tuple returns directly to variables.",
    },
    {
      q: "What is the difference between std::pair and std::tuple?",
      options: [
        "pair has exactly two elements; tuple can have any number", "They are identical", "tuple has two", "pair has many",
      ],
      answer: 0,
      explain: "std::pair holds exactly two elements. std::tuple generalizes to any number of heterogeneous elements.",
    },
    {
      q: "What is std::expected (C++23)?",
      options: [
        "A type holding either a value or an error, an alternative to exceptions", "A smart pointer", "A container", "A thread",
      ],
      answer: 0,
      explain: "std::expected<T,E> holds either a value of type T or an error of type E, giving explicit error handling without exceptions.",
    },
    {
      q: "What is the purpose of std::optional's value_or?",
      options: [
        "Returns the contained value or a default if empty", "Returns the default always", "Throws if empty", "Copies the optional",
      ],
      answer: 0,
      explain: "value_or(default) returns the stored value if present, otherwise the provided default — a safe way to read an optional.",
    },
    {
      q: "What is the difference between std::optional and a nullable pointer?",
      options: [
        "optional holds a value (no heap) and is type-safe; a nullable pointer adds indirection", "They are identical", "optional is a pointer", "A pointer holds a value",
      ],
      answer: 0,
      explain: "std::optional stores the value inline (no allocation) with explicit has_value(). A pointer adds indirection and can point anywhere (or be null).",
    },
    {
      q: "What is the purpose of std::cmp_less (C++20)?",
      options: ["A safe comparison that avoids signed/unsigned issues", "A sort", "A cast", "A container"],
      answer: 0,
      explain: "std::cmp_* functions compare signed and unsigned integers safely, avoiding implicit conversion pitfalls.",
    },
    {
      q: "What is a module (C++20)?",
      options: [
        "A way to organize code with explicit imports, replacing some header usage", "A container", "A smart pointer", "A thread",
      ],
      answer: 0,
      explain: "Modules (C++20) provide a new way to structure and import code with better encapsulation and faster builds than traditional headers.",
    },
    {
      q: "What is std::format (C++20)?",
      options: [
        "A type-safe string formatting library (like printf but safe)", "A sort", "A container", "A cast",
      ],
      answer: 0,
      explain: "std::format provides type-safe, readable string formatting using placeholders, replacing error-prone printf-style formatting.",
    },
    {
      q: "What is the purpose of std::ranges (C++20)?",
      options: [
        "A range-based standard library for algorithms with composable views", "A container", "A thread", "A cast",
      ],
      answer: 0,
      explain: "The Ranges library allows algorithms to work directly on ranges and compose via views (lazy transformations), improving readability.",
    },
    {
      q: "What is the difference between std::views::filter and std::copy_if?",
      options: [
        "views::filter is a lazy view; copy_if eagerly copies filtered elements", "They are identical", "copy_if is lazy", "filter copies eagerly",
      ],
      answer: 0,
      explain: "A range view is lazy — elements are filtered on demand during iteration. copy_if eagerly produces a new container of matching elements.",
    },
    {
      q: "What is the purpose of std::size (C++17)?",
      options: ["Returns the number of elements in any container or array", "Resizes a container", "A cast", "A sort"],
      answer: 0,
      explain: "std::size(c) returns the element count for arrays and containers uniformly, working even for C-style arrays.",
    },
    {
      q: "What is the difference between std::begin and a member begin()?",
      options: [
        "std::begin is a free function that works with arrays too; member begin is a container method", "They are identical", "std::begin is a member", "begin() is a free function",
      ],
      answer: 0,
      explain: "std::begin is an ADL free function that also handles C-style arrays. member begin() is called on containers. Range-for uses them behind the scenes.",
    },
    {
      q: "What is the difference between std::make_shared and direct shared_ptr(new)?",
      options: [
        "make_shared does one allocation (object+control block); direct does two", "They are identical", "direct is one allocation", "make_shared is slower always",
      ],
      answer: 0,
      explain: "std::make_shared allocates the object and control block together (one allocation, better locality). Direct construction does two separate allocations.",
    },
    {
      q: "What is the purpose of std::initializer_list?",
      options: [
        "Supports brace initialization of containers and constructors", "A smart pointer", "A thread", "A cast",
      ],
      answer: 0,
      explain: "std::initializer_list lets containers and constructors accept a braced list {a, b, c} for uniform initialization.",
    },
    {
      q: "What is the difference between braced {} and parenthesis () initialization?",
      options: [
        "Braces are uniform and disallow narrowing; parens allow narrowing and may match constructors differently", "They are identical", "Parens disallow narrowing", "Braces allow narrowing",
      ],
      answer: 0,
      explain: "Braced init ({}) prevents narrowing conversions and is uniform. Parens init (()) allows narrowing and can be ambiguous with function declarations.",
    },
    {
      q: "What is the purpose of std::numeric_limits<T>::max()?",
      options: ["Returns the maximum representable value of type T", "Returns a random value", "A cast", "A sort"],
      answer: 0,
      explain: "std::numeric_limits provides type properties like max(), min(), and digits, replacing old macros like INT_MAX.",
    },
    {
      q: "What is the difference between std::vector and std::deque for performance?",
      options: [
        "vector is best for index access; deque is best for push/pop at both ends", "They are identical", "deque is best for index", "vector is best for both ends",
      ],
      answer: 0,
      explain: "vector gives O(1) random access but O(n) front insertion. deque gives O(1) push/pop at both ends with slightly worse random access.",
    },
    {
      q: "What is std::reference_wrapper?",
      options: [
        "A copyable, assignable object that wraps a reference", "A smart pointer", "A container", "A cast",
      ],
      answer: 0,
      explain: "std::reference_wrapper makes a reference copyable and assignable, letting you store references in containers like std::vector.",
    },
    {
      q: "What is the purpose of std::invoke (C++17)?",
      options: [
        "Invokes a callable (function, lambda, member function) uniformly", "Sorts", "Copies", "Allocates",
      ],
      answer: 0,
      explain: "std::invoke calls any callable — free function, lambda, or member function with an object — using a uniform syntax.",
    },
    {
      q: "What is the difference between std::begin and std::cbegin?",
      options: [
        "cbegin returns a const_iterator; begin returns an iterator (possibly mutable)", "They are identical", "begin returns const", "cbegin returns mutable",
      ],
      answer: 0,
      explain: "std::cbegin returns a const iterator (read-only); std::begin returns a mutable iterator when the container is non-const.",
    },
    {
      q: "What is the purpose of std::back_inserter?",
      options: [
        "An output iterator that calls push_back on a container during assignment", "A container", "A smart pointer", "A cast",
      ],
      answer: 0,
      explain: "std::back_inserter wraps a container to auto-push_back elements written through the iterator, used with algorithms like std::copy.",
    },
    {
      q: "What is the difference between std::move_iterator and std::back_inserter?",
      options: [
        "move_iterator moves elements on copy; back_inserter appends to a container", "They are identical", "move_iterator appends", "back_inserter moves",
      ],
      answer: 0,
      explain: "std::move_iterator makes assignment move the elements (stealing resources). std::back_inserter appends values to the end of a container.",
    },
    {
      q: "What is the purpose of std::is_same_v?",
      options: ["Compile-time check if two types are identical","A runtime check","A sort","A cast"],
      answer: 0,
      explain: "std::is_same_v<T,U> is a compile-time constant (bool) telling whether T and U are the same type.",
    },
    {
      q: "What is the purpose of std::remove_reference?",
      options: ["Strips reference-ness from a type at compile time","Removes an element","A cast","A sort"],
      answer: 0,
      explain: "std::remove_reference<T>::type removes & or && from a type, used in type traits and template metaprogramming.",
    },
    {
      q: "What is the difference between std::decay and std::remove_reference?",
      options: [
        "decay also removes cv and converts arrays/functions to pointers; remove_reference only strips refs","They are identical","remove_reference decays arrays","decay only strips refs",
      ],
      answer: 0,
      explain: "std::decay mimics pass-by-value decay (strips cv/ref, array to pointer, function to pointer). std::remove_reference only removes references.",
    },
    {
      q: "What is the purpose of std::conditional?",
      options: [
        "Selects one of two types at compile time based on a condition","A runtime if","A cast","A sort",
      ],
      answer: 0,
      explain: "std::conditional<cond, A, B>::type is A if cond is true, else B — compile-time type selection.",
    },
    {
      q: "What is the difference between std::tuple_element and std::get?",
      options: [
        "tuple_element gives the type at an index; get returns the value at an index","They are identical","get gives the type","tuple_element returns the value",
      ],
      answer: 0,
      explain: "std::tuple_element_t<I,T> yields the type of element I. std::get<I>(t) returns the value at index I.",
    },
    {
      q: "What is the purpose of std::tie in structured bindings context?",
      options: [
        "std::tie predates structured bindings for unpacking tuples into existing variables","It creates a tuple","It sorts","It casts",
      ],
      answer: 0,
      explain: "std::tie(a,b,c) = tuple; unpacks into existing variables. Structured bindings (auto [a,b,c]) declare new ones.",
    },
    {
      q: "What is the purpose of the std::hash function object?",
      options: [
        "Provides a hash function for a type, used by unordered containers","Sorts","Copies","Casts",
      ],
      answer: 0,
      explain: "std::hash<T> computes a hash value for T, allowing it to be used as an unordered_map/set key. You can specialize it for custom types.",
    },
    {
      q: "What is the difference between std::priority_queue and std::make_heap?",
      options: [
        "priority_queue is an adapter class; make_heap works directly on a container/range","They are identical","make_heap is an adapter","priority_queue works on ranges",
      ],
      answer: 0,
      explain: "std::priority_queue wraps a container with heap ops. std::make_heap/push_heap/pop_heap operate directly on an existing range.",
    },
    {
      q: "What is the purpose of std::sort's comparator?",
      options: [
        "Defines a custom ordering for the sort operation","A default sort","A cast","A copy",
      ],
      answer: 0,
      explain: "The comparator (default operator<) defines how elements are ordered; you can supply a custom comparator for descending or custom types.",
    },
    {
      q: "What is the difference between std::stable_sort and std::partial_sort?",
      options: [
        "stable_sort fully sorts preserving order; partial_sort sorts only the top k elements","They are identical","partial_sort preserves order","stable_sort sorts top k",
      ],
      answer: 0,
      explain: "std::stable_sort sorts the whole range stably. std::partial_sort sorts the first k elements and leaves the rest unordered.",
    },
    {
      q: "What is the purpose of std::min and std::max?",
      options: ["Return the smaller/larger of two values","Sort","Copy","Cast"],
      answer: 0,
      explain: "std::min(a,b) and std::max(a,b) return the smaller/larger value, useful in algorithms and clamping.",
    },
    {
      q: "What is the purpose of std::clamp (C++17)?",
      options: ["Constrains a value to a range [lo, hi]","Sorts","Copies","Casts"],
      answer: 0,
      explain: "std::clamp(v, lo, hi) returns v clamped between lo and hi, replacing manual min/max chains.",
    },
    {
      q: "What is the difference between std::min_element and std::min?",
      options: [
        "min_element finds the minimum in a range; min compares two values","They are identical","min finds in a range","min_element compares two",
      ],
      answer: 0,
      explain: "std::min_element(iterators) returns an iterator to the smallest element in a range. std::min(a,b) compares two values.",
    },
    {
      q: "What is the purpose of std::transform?",
      options: [
        "Applies a function to each element of a range, storing results","Sorts","Copies","Finds",
      ],
      answer: 0,
      explain: "std::transform applies a unary/binary function to elements and writes the results, like a functional map.",
    },
    {
      q: "What is the difference between std::transform and std::for_each?",
      options: [
        "transform stores the result; for_each applies a function for side effects","They are identical","for_each stores results","transform has side effects only",
      ],
      answer: 0,
      explain: "std::transform produces output values. std::for_each applies a callable for its side effects, ignoring any return.",
    },
    {
      q: "What is the purpose of std::accumulate's initial value?",
      options: [
        "Starts the accumulation and sets the result type","Ends the sum","Sorts","Casts",
      ],
      answer: 0,
      explain: "The initial value is where accumulation starts and determines the result type, e.g., 0 for ints.",
    },
    {
      q: "What is the difference between std::inner_product and std::accumulate?",
      options: [
        "inner_product computes a dot product of two ranges; accumulate sums one range","They are identical","accumulate computes dot product","inner_product sums one range",
      ],
      answer: 0,
      explain: "std::inner_product multiplies pairs and accumulates (dot product). std::accumulate reduces one range with a binary op.",
    },
    {
      q: "What is the purpose of std::generate?",
      options: ["Fills a range by calling a generator function for each element","Sorts","Copies","Finds"],
      answer: 0,
      explain: "std::generate assigns each element the result of a generator function, useful for filling with computed values.",
    },
    {
      q: "What is the difference between std::iota and std::generate?",
      options: [
        "iota fills with sequential incrementing values; generate uses a custom function","They are identical","generate fills sequentially","iota uses a custom function",
      ],
      answer: 0,
      explain: "std::iota fills a range with increasing values (start, start+1, ...). std::generate fills using an arbitrary generator.",
    },
    {
      q: "What is the purpose of std::shuffle?",
      options: [
        "Randomly permutes a range using a uniform random generator","Sorts","Copies","Finds",
      ],
      answer: 0,
      explain: "std::shuffle (C++11) randomly rearranges a range, taking a uniform random number generator. (random_shuffle is deprecated.)",
    },
    {
      q: "What is the purpose of std::all_of, any_of, and none_of?",
      options: [
        "Checking if a predicate holds for all/any/none of the elements","Sorting","Copying","Casting",
      ],
      answer: 0,
      explain: "These algorithms test a predicate over a range and return whether it holds for all, at least one, or none of the elements.",
    },
    {
      q: "What is the difference between std::find and std::find_if?",
      options: [
        "find searches for a value; find_if searches using a predicate","They are identical","find_if searches a value","find uses a predicate",
      ],
      answer: 0,
      explain: "std::find looks for an element equal to a value. std::find_if returns the first element matching a predicate.",
    },
    {
      q: "What is the purpose of std::remove_if?",
      options: ["Moves elements not matching a predicate to the front","Deletes elements","Sorts","Casts"],
      answer: 0,
      explain: "std::remove_if partitions the range so non-matching elements are at the front; pair with erase to remove them.",
    },
    {
      q: "What is the difference between std::copy and std::copy_if?",
      options: [
        "copy copies all; copy_if copies only elements matching a predicate","They are identical","copy_if copies all","copy filters",
      ],
      answer: 0,
      explain: "std::copy copies every element. std::copy_if copies only those for which a predicate is true.",
    },
    {
      q: "What is the purpose of std::replace?",
      options: ["Replaces occurrences of a value with a new value","Sorts","Copies","Finds"],
      answer: 0,
      explain: "std::replace swaps every element equal to an old value with a new value in place.",
    },
    {
      q: "What is the difference between std::fill and std::generate?",
      options: [
        "fill sets a constant value; generate uses a function to produce each value","They are identical","generate sets a constant","fill calls a function",
      ],
      answer: 0,
      explain: "std::fill assigns the same value to every element. std::generate assigns the result of a generator to each.",
    },
    {
      q: "What is the purpose of std::reverse?",
      options: ["Reverses the order of elements in a range","Sorts","Copies","Finds"],
      answer: 0,
      explain: "std::reverse reverses a range in place.",
    },
    {
      q: "What is the difference between std::sort and std::reverse?",
      options: [
        "sort orders elements; reverse reverses their order","They are identical","reverse sorts","sort reverses",
      ],
      answer: 0,
      explain: "std::sort imposes an ordering. std::reverse simply reverses the current sequence.",
    },
    {
      q: "What is the purpose of std::rotate?",
      options: ["Shifts elements left/right, wrapping around the pivot","Sorts","Copies","Finds"],
      answer: 0,
      explain: "std::rotate moves the element at a middle iterator to the front, shifting others, useful for circular shifts.",
    },
    {
      q: "What is the difference between std::rotate and std::reverse?",
      options: [
        "rotate circularly shifts around a point; reverse flips the whole order","They are identical","reverse shifts","rotate flips",
      ],
      answer: 0,
      explain: "std::rotate performs a cyclic shift. std::reverse reverses the element order.",
    },
  ],
  boss: {
    q: "What is perfect forwarding and what is the role of std::forward?",
    options: [
      "std::forward casts to an lvalue; perfect forwarding copies arguments",
      "std::forward preserves the value category of arguments so they are forwarded exactly; used with forwarding references (T&&)",
      "std::forward deletes arguments",
      "std::forward is the same as std::move",
    ],
    answer: 1,
    explain: "Perfect forwarding passes arguments to another function preserving their value category (lvalue vs rvalue). std::forward, used with a forwarding reference (T&&), conditionally casts to an rvalue only when the original was an rvalue.",
  },
};
