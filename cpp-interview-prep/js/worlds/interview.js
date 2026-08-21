/* ============================================================
   WORLD: Interview Q&A
   ============================================================ */

const WORLD_INTERVIEW = {
  id: "interview",
  name: "Interview Q&A",
  icon: "★",
  tagline: "Classic questions and gotchas for a C++ role.",
  color: "#ce93d8",
  questions: [
    {
      q: "What is the difference between a pointer and a reference in C++?",
      options: [
        "A reference must be initialized and cannot be reseated; a pointer can be null and reseated",
        "A pointer must be initialized; a reference can be null",
        "They are identical",
        "References cannot be passed to functions",
      ],
      answer: 0,
      explain: "A reference is an alias that must be initialized and cannot be changed to refer to another object. A pointer can be null, can be reassigned, and requires explicit dereferencing.",
    },
    {
      q: "What is the difference between stack and heap memory?",
      options: [
        "Stack is fast, automatic, limited size; heap is dynamic, manual, larger",
        "Heap is automatic; stack is manual",
        "They are identical",
        "Stack is larger than heap",
      ],
      answer: 0,
      explain: "Stack memory is allocated automatically for local variables, is fast, and has limited size. Heap memory is allocated dynamically (new/malloc), is larger, and must be freed manually (or via smart pointers).",
    },
    {
      q: "What is a memory leak and how do you avoid it in modern C++?",
      options: [
        "Memory not freed; avoid with RAII and smart pointers",
        "Memory freed too early; avoid with raw pointers",
        "A stack overflow",
        "A compile error",
      ],
      answer: 0,
      explain: "A memory leak is allocated memory that is never freed. Modern C++ avoids leaks with RAII and smart pointers (unique_ptr/shared_ptr), which free memory automatically when objects go out of scope.",
    },
    {
      q: "What is the difference between 'new' and 'malloc'?",
      options: [
        "new calls constructors and is type-safe; malloc only allocates raw bytes",
        "malloc calls constructors",
        "They are identical",
        "new is a C function",
      ],
      answer: 0,
      explain: "'new' allocates memory AND calls the constructor, returning a typed pointer. 'malloc' only allocates raw bytes and returns void*. 'new' throws on failure; 'malloc' returns null.",
    },
    {
      q: "What is the difference between 'const' and 'constexpr'?",
      options: [
        "const is runtime constant; constexpr is compile-time constant",
        "They are identical",
        "constexpr is runtime",
        "const is compile-time",
      ],
      answer: 0,
      explain: "'const' means the value cannot be modified after initialization (may be runtime). 'constexpr' guarantees the value is computed at compile time.",
    },
    {
      q: "What is the difference between 'static_cast', 'dynamic_cast', and 'reinterpret_cast'?",
      options: [
        "static_cast: compile-time; dynamic_cast: runtime with RTTI; reinterpret_cast: raw bit reinterpretation",
        "They are identical",
        "dynamic_cast is compile-time",
        "reinterpret_cast is safe",
      ],
      answer: 0,
      explain: "static_cast performs compile-time conversions. dynamic_cast performs runtime checked downcasts (requires RTTI, returns null/fails on wrong type). reinterpret_cast reinterprets the raw bits and is unsafe.",
    },
    {
      q: "What is the difference between a shallow copy and a deep copy?",
      options: [
        "Shallow copies the pointer; deep copies the pointed-to data",
        "Deep copies the pointer only",
        "They are identical",
        "Shallow copy is always safe",
      ],
      answer: 0,
      explain: "A shallow copy copies the pointer value, so two objects share the same data (double-free risk). A deep copy allocates new memory and copies the data, so each object owns its own copy.",
    },
    {
      q: "What is the difference between 'std::array' and a C-style array?",
      options: [
        "std::array is a standard container with size(), bounds-safe access, and STL algorithms",
        "C-style arrays have size()",
        "They are identical",
        "std::array is slower",
      ],
      answer: 0,
      explain: "std::array is a fixed-size container that knows its size, supports iterators and STL algorithms, and can be passed by value. A C-style array decays to a pointer and loses size information.",
    },
    {
      q: "What is the difference between 'std::string' and a C-string (char*)?",
      options: [
        "std::string manages its own memory, knows its length, and is safe; C-strings are null-terminated char arrays",
        "C-strings manage memory automatically",
        "They are identical",
        "std::string is a char array",
      ],
      answer: 0,
      explain: "std::string is a class that manages its own buffer, tracks length, and provides safe operations. A C-string is a null-terminated char array that requires manual management and is prone to buffer overflows.",
    },
    {
      q: "What is the difference between 'std::function' and a raw function pointer?",
      options: [
        "std::function can hold lambdas, functors, and bound functions; a raw pointer only holds a plain function",
        "They are identical",
        "Raw pointers can hold lambdas",
        "std::function is a C function",
      ],
      answer: 0,
      explain: "std::function is a type-erased callable wrapper that can store lambdas, functors, and member functions. A raw function pointer can only point to a plain free function.",
    },
    {
      q: "What is the difference between a copy constructor and a move constructor?",
      options: [
        "Copy deep-copies resources; move transfers resources from a temporary",
        "Move deep-copies; copy transfers",
        "They are identical",
        "Copy is for const objects only",
      ],
      answer: 0,
      explain: "A copy constructor duplicates an object's resources. A move constructor transfers resources from an expiring object, leaving it in a valid but empty state.",
    },
    {
      q: "What is the difference between a smart pointer and a raw pointer?",
      options: [
        "A smart pointer manages ownership and frees memory automatically; a raw pointer does not",
        "A raw pointer is safer",
        "They are identical",
        "Smart pointers cannot be dereferenced",
      ],
      answer: 0,
      explain: "Smart pointers (unique_ptr/shared_ptr) own the object and release it automatically via RAII. Raw pointers do not manage ownership and require manual freeing.",
    },
    {
      q: "What is undefined behavior (UB)?",
      options: [
        "Program behavior the standard does not define, so anything can happen",
        "An exception that is caught",
        "A compile error",
        "A warning",
      ],
      answer: 0,
      explain: "UB occurs when the program does something outside the language rules (e.g., null dereference, signed overflow, out-of-bounds). The compiler may do anything — it is a bug to avoid.",
    },
    {
      q: "What is the difference between passing by value, reference, and const reference?",
      options: [
        "Value copies; reference aliases (can modify); const ref avoids copy without modification",
        "Value aliases; reference copies",
        "They are identical",
        "const ref copies",
      ],
      answer: 0,
      explain: "By value makes a copy. By reference passes the original (mutable). By const reference passes the original without copying and forbids modification — the default for large inputs.",
    },
    {
      q: "What is the difference between 'delete' and 'delete[]'?",
      options: [
        "delete frees a single object; delete[] frees an array",
        "They are identical",
        "delete frees arrays; delete[] frees objects",
        "delete[] is for stack memory",
      ],
      answer: 0,
      explain: "'delete' frees memory allocated with 'new' for a single object. 'delete[]' frees memory allocated with 'new[]' for an array, running destructors for each element.",
    },
    {
      q: "What is the difference between a stack overflow and a heap exhaustion?",
      options: [
        "Stack overflow is running out of stack space (recursion); heap exhaustion is running out of dynamic memory",
        "They are identical",
        "Heap exhaustion is from recursion",
        "Stack overflow is a compile error",
      ],
      answer: 0,
      explain: "Stack overflow occurs with unbounded recursion or huge stack allocations. Heap exhaustion (std::bad_alloc) occurs when dynamic allocation fails due to insufficient memory.",
    },
    {
      q: "What is the purpose of the 'static' keyword on a file-scope variable?",
      options: [
        "It gives the variable internal linkage, making it local to the translation unit",
        "It makes it a global",
        "It makes it constant",
        "It allocates it on the heap",
      ],
      answer: 0,
      explain: "A file-scope 'static' gives a variable or function internal linkage, so it is only visible within its own translation unit — the C++11+ equivalent is an anonymous namespace.",
    },
    {
      q: "What is the difference between 'extern' and 'static' at file scope?",
      options: [
        "extern gives external linkage (visible across files); static gives internal linkage (file-local)",
        "They are identical",
        "static is external",
        "extern is file-local",
      ],
      answer: 0,
      explain: "'extern' declares a variable/function with external linkage, accessible across translation units. 'static' restricts it to the current file (internal linkage).",
    },
    {
      q: "What is a dangling pointer?",
      options: [
        "A pointer that refers to memory that has already been freed",
        "A null pointer",
        "A pointer to a constant",
        "A stack pointer",
      ],
      answer: 0,
      explain: "A dangling pointer still holds an address to memory that has been deallocated. Dereferencing it is undefined behavior. Smart pointers and avoiding manual delete help prevent this.",
    },
    {
      q: "What is the difference between 'nullptr' and NULL?",
      options: [
        "nullptr is a typed null pointer constant; NULL is often an integer 0",
        "They are identical",
        "nullptr is an integer",
        "NULL is type-safe",
      ],
      answer: 0,
      explain: "NULL is typically the integer 0, which can cause overload ambiguity. nullptr (C++11) is a distinct null pointer constant of type std::nullptr_t, resolving overloads correctly.",
    },
    {
      q: "What is the difference between a compiler error and a linker error?",
      options: [
        "Compiler error is invalid syntax/type; linker error is unresolved symbols/duplicates between object files",
        "They are identical",
        "Linker error is syntax",
        "Compiler error is unresolved symbols",
      ],
      answer: 0,
      explain: "A compiler error comes from invalid source (syntax, type). A linker error comes from resolving symbols across object files (e.g., undefined reference, duplicate symbols).",
    },
    {
      q: "What is the difference between a declaration and a definition?",
      options: [
        "A declaration introduces a name; a definition also allocates storage/body",
        "They are identical",
        "A definition introduces a name",
        "A declaration allocates storage",
      ],
      answer: 0,
      explain: "A declaration tells the compiler a name and type exist. A definition provides the actual implementation or storage. You can declare many times but define once.",
    },
    {
      q: "What is the difference between an inline function and a macro?",
      options: [
        "inline is type-safe and follows scope rules; a macro is a blind text substitution",
        "They are identical",
        "A macro is type-safe",
        "inline is a text substitution",
      ],
      answer: 0,
      explain: "An inline function is a real function (type-safe, debugger-friendly) that the compiler may inline. A macro is a preprocessor text substitution with no type checking.",
    },
    {
      q: "What is the difference between a function pointer and a lambda?",
      options: [
        "A function pointer points to a plain function; a lambda is an anonymous callable that can capture state",
        "They are identical",
        "A lambda is a function pointer",
        "Function pointers can capture state",
      ],
      answer: 0,
      explain: "A function pointer refers to a free function. A lambda is an inline callable object that can capture variables, giving it state that a function pointer cannot hold.",
    },
    {
      q: "What is a null pointer dereference?",
      options: [
        "Accessing memory through a null pointer — undefined behavior, usually a crash",
        "A warning",
        "A null pointer check",
        "A valid access",
      ],
      answer: 0,
      explain: "Dereferencing a null pointer accesses address 0, which is undefined behavior and typically crashes the program. Always check pointers before dereferencing.",
    },
    {
      q: "What is the difference between a header file and a source file?",
      options: [
        "A header declares interfaces (declarations); a source file implements them (definitions)",
        "They are identical",
        "A source declares interfaces",
        "A header implements them",
      ],
      answer: 0,
      explain: "Header files (.h) typically contain declarations and are included where the interface is needed. Source files (.cpp) contain definitions and implementation.",
    },
    {
      q: "What is the difference between 'struct' initialization and aggregate initialization?",
      options: [
        "Aggregate init uses braces to initialize members in order without a constructor",
        "They are identical",
        "Aggregate init always needs a constructor",
        "Structs cannot be aggregate-initialized",
      ],
      answer: 0,
      explain: "An aggregate type can be initialized with braces {a, b, c} in member order without declaring a constructor. This is called aggregate initialization.",
    },
    {
      q: "What is the difference between 'std::move' and 'std::forward'?",
      options: [
        "move unconditionally casts to rvalue; forward conditionally casts based on the argument's value category",
        "They are identical",
        "forward casts unconditionally",
        "move is for perfect forwarding",
      ],
      answer: 0,
      explain: "std::move always casts to an rvalue reference. std::forward (used in template forwarding) only casts to rvalue when the original argument was an rvalue.",
    },
    {
      q: "What is the purpose of '#pragma once'?",
      options: [
        "Ensures a header is included only once per translation unit",
        "Optimizes the code",
        "Enables warnings",
        "Adds a library",
      ],
      answer: 0,
      explain: "#pragma once is a non-standard but widely supported directive that includes a header only once, preventing duplicate definitions. Include guards (#ifndef) do the same.",
    },
    {
      q: "What is the difference between a constant pointer and a pointer to a constant?",
      options: [
        "const int* is a pointer to const; int* const is a const pointer",
        "They are identical",
        "int* const points to const data",
        "const int* is a const pointer",
      ],
      answer: 0,
      explain: "const int* p: the pointed-to int is const (p can change, *p cannot). int* const p: p itself is const (cannot reseat) but the pointed-to int can change.",
    },
    {
      q: "What is the difference between a stack and a heap in C++ memory model?",
      options: [
        "Stack is LIFO automatic memory; heap is dynamic memory you allocate and free", "They are identical", "Heap is automatic", "Stack is dynamic",
      ],
      answer: 0,
      explain: "The stack grows and shrinks with function calls (automatic). The heap is a larger pool for dynamic allocation via new/malloc, managed manually or with smart pointers.",
    },
    {
      q: "What is the difference between 'delete this' and 'delete'?",
      options: [
        "'delete this' frees the current object from within a member function", "They are identical", "'delete' frees the current object", "'delete this' is for arrays",
      ],
      answer: 0,
      explain: "'delete this' releases the object's own memory from inside a member function. It is valid but requires care that no member is accessed afterward.",
    },
    {
      q: "What is the difference between a 'shallow' and a 'deep' copy, and which does the default copy constructor do?",
      options: [
        "Default copy constructor does a shallow copy (copies pointers, sharing data)", "Deep copy", "It deletes", "It moves",
      ],
      answer: 0,
      explain: "The compiler-generated copy constructor copies each member, including pointers (shallow), so two objects share pointed-to data. Classes owning resources need custom deep copies.",
    },
    {
      q: "What is the difference between a function and a method?",
      options: [
        "A method is a function that belongs to a class; a function is a free-standing callable", "They are identical", "A function belongs to a class", "Methods are free functions",
      ],
      answer: 0,
      explain: "A function is a standalone callable. A method (member function) is a function defined within a class, operating on an object's state.",
    },
    {
      q: "What is the difference between a run-time error and a logic error?",
      options: [
        "Runtime error happens during execution (crash); logic error gives wrong results without crashing", "They are identical", "Logic error crashes", "Runtime error is a compile issue",
      ],
      answer: 0,
      explain: "A runtime error occurs while the program runs (division by zero, bad cast). A logic error is a mistake in reasoning that produces incorrect output without crashing.",
    },
    {
      q: "What is the purpose of 'const' on a function parameter?",
      options: [
        "It prevents the function from modifying the argument", "It makes the argument faster", "It copies the argument", "It makes the argument global",
      ],
      answer: 0,
      explain: "Declaring a parameter const (often by const reference) promises the function will not modify it, improving clarity and allowing const objects to be passed.",
    },
    {
      q: "What is the difference between a recursive and an iterative solution?",
      options: [
        "Recursive calls itself with smaller input; iterative uses loops", "They are identical", "Iterative calls itself", "Recursive uses loops",
      ],
      answer: 0,
      explain: "Recursion solves a problem by calling itself on smaller subproblems (risk of stack overflow). Iteration uses loops and explicit state.",
    },
    {
      q: "What is the time complexity of a recursive Fibonacci that does not memoize?",
      options: ["O(2^n) exponential", "O(n)", "O(log n)", "O(n²)"],
      answer: 0,
      explain: "Naive recursion recomputes the same subproblems, giving exponential O(2^n). Memoization or iteration reduces it to O(n).",
    },
    {
      q: "What is the difference between 'pass by reference' and 'pass by pointer'?",
      options: [
        "By reference the caller passes the object directly; by pointer the caller passes an address", "They are identical", "By reference passes an address", "By pointer passes the object",
      ],
      answer: 0,
      explain: "Pass-by-reference passes the object itself (alias). Pass-by-pointer passes a pointer that may be null and can be reassigned.",
    },
    {
      q: "What is the purpose of a default argument in a function?",
      options: [
        "Lets the caller omit an argument, using a default value", "Makes the function static", "Makes the argument const", "Requires the argument",
      ],
      answer: 0,
      explain: "A default argument lets you call a function without providing that parameter, which then uses the specified default value.",
    },
    {
      q: "What is the difference between a runtime error and an exception?",
      options: [
        "An exception is a language mechanism for handling errors; a runtime error is an event", "They are identical", "Exceptions are compile errors", "Runtime errors are always thrown",
      ],
      answer: 0,
      explain: "An exception is a C++ mechanism (throw/try/catch) used to signal and handle errors. A runtime error is a problem that occurs during execution.",
    },
    {
      q: "What is the purpose of a try-catch block?",
      options: [
        "To attempt risky code and handle thrown exceptions gracefully", "To loop", "To sort", "To allocate",
      ],
      answer: 0,
      explain: "try contains code that may throw; catch handles the thrown exception type, letting the program recover instead of terminating.",
    },
    {
      q: "What is the difference between a thrown exception and returning an error code?",
      options: [
        "Exceptions unwind the stack and cannot be ignored; error codes must be checked manually", "They are identical", "Error codes unwind the stack", "Exceptions return codes",
      ],
      answer: 0,
      explain: "Exceptions propagate automatically up the stack and are hard to ignore. Error codes require the caller to check the return value, which is easy to forget.",
    },
    {
      q: "What is the noexcept specifier?",
      options: [
        "Declares a function will not throw, enabling optimizations and termination if it does", "Makes a function throw", "A macro", "A loop",
      ],
      answer: 0,
      explain: "noexcept tells the compiler the function won't throw. If it does throw, std::terminate is called. Move constructors and swap are often noexcept.",
    },
    {
      q: "What is the difference between catching by value, by reference, and by const reference?",
      options: [
        "Catching by reference avoids slicing and extra copies; by value copies the exception", "They are identical", "By value avoids slicing", "By reference copies",
      ],
      answer: 0,
      explain: "Catch by (const) reference to avoid copying and to preserve the derived exception type; catching by value slices and copies.",
    },
    {
      q: "What is std::exception?",
      options: [
        "The base class for all standard exceptions, with a what() method", "A container", "A smart pointer", "A mutex",
      ],
      answer: 0,
      explain: "std::exception is the standard base class for exceptions. Derived types (std::runtime_error, std::bad_alloc) override what() to describe the error.",
    },
    {
      q: "What is std::bad_alloc?",
      options: ["Thrown when dynamic memory allocation fails", "A null pointer", "A logic error", "A type error"],
      answer: 0,
      explain: "std::bad_alloc is thrown when new cannot allocate the requested memory, letting you catch allocation failure.",
    },
    {
      q: "What is the difference between a warning and an error?",
      options: [
        "An error stops compilation; a warning indicates a potential problem but compilation continues", "They are identical", "A warning stops compilation", "An error is a suggestion",
      ],
      answer: 0,
      explain: "A compile error prevents building the program. A warning flags suspicious code but still produces a binary; you should treat warnings seriously.",
    },
    {
      q: "What is the purpose of assertions (assert)?",
      options: [
        "Checking assumptions in debug builds; abort if false", "Optimizing code", "Sorting", "Allocating memory",
      ],
      answer: 0,
      explain: "assert(expr) aborts the program if expr is false in debug builds (NDEBUG disables it). It documents and validates invariants during development.",
    },
    {
      q: "What is the difference between a static_cast and a C-style cast?",
      options: [
        "static_cast is safer and intent-revealing; a C-style cast may reinterpret or const_cast silently", "They are identical", "C-style is safer", "static_cast reinterprets",
      ],
      answer: 0,
      explain: "static_cast performs explicit, checked-at-compile conversions. A C-style cast can silently perform any cast combination, hiding intent and errors.",
    },
    {
      q: "What is the difference between a double and a float?",
      options: [
        "double is 64-bit with more precision; float is 32-bit with less", "They are identical", "float is more precise", "double is 32-bit",
      ],
      answer: 0,
      explain: "double uses 64 bits (~15-17 significant digits); float uses 32 bits (~7 digits). double is the default for floating-point literals.",
    },
    {
      q: "What is the danger of comparing floating-point numbers with ==?",
      options: [
        "Rounding errors make exact equality unreliable; use epsilon comparison", "It is always safe", "It is faster", "They cannot be compared",
      ],
      answer: 0,
      explain: "Floating-point values have rounding errors, so exact == often fails. Compare within an epsilon tolerance.",
    },
    {
      q: "What is the difference between an integer overflow and an underflow?",
      options: [
        "Overflow exceeds max value; underflow goes below min (or below representable float)", "They are identical", "Underflow exceeds max", "Overflow is for floats only",
      ],
      answer: 0,
      explain: "Integer overflow wraps past the max; underflow wraps below the min. Floating underflow is when a result is too small to represent.",
    },
    {
      q: "What is the purpose of 'unsigned' integer types?",
      options: ["They store only non-negative values, doubling the positive range", "They are always faster", "They store negatives", "They are always bigger"],
      answer: 0,
      explain: "Unsigned types cannot hold negatives, so their positive range doubles. They are useful for sizes/counts but can cause surprising wrap-around.",
    },
    {
      q: "What is the danger of mixing signed and unsigned integers in arithmetic?",
      options: [
        "The signed value is implicitly converted to unsigned, causing surprising results", "They are identical", "Unsigned converts to signed", "No danger",
      ],
      answer: 0,
      explain: "When mixing, the signed value converts to unsigned, so a negative becomes a huge positive — a common source of bugs.",
    },
    {
      q: "What is the difference between an int and a long?",
      options: [
        "Their sizes can vary by platform; long is at least as wide as int", "They are always identical", "long is smaller", "int is always 64-bit",
      ],
      answer: 0,
      explain: "Integer widths are platform-dependent. int is typically 32-bit; long is at least as large as int (often 32 or 64-bit). Use fixed-width types (int32_t) for portability.",
    },
    {
      q: "What is the purpose of fixed-width integer types like int32_t?",
      options: [
        "Guarantee a specific bit width regardless of platform", "Make code faster", "They are always 64-bit", "They are macros",
      ],
      answer: 0,
      explain: "<cstdint> types like int32_t guarantee exact widths for portability, unlike int/long whose sizes vary.",
    },
    {
      q: "What is the difference between a char and an int?",
      options: [
        "char is a single byte (1) usually; int is typically 4 bytes, larger range", "They are identical", "int is one byte", "char is 4 bytes",
      ],
      answer: 0,
      explain: "char is usually 1 byte and holds characters/small integers. int is typically 4 bytes for larger integers.",
    },
    {
      q: "What is the difference between 'break' and 'continue' in a loop?",
      options: [
        "break exits the loop; continue skips to the next iteration", "They are identical", "continue exits the loop", "break skips to next",
      ],
      answer: 0,
      explain: "break terminates the loop entirely. continue skips the rest of the current iteration and proceeds to the next one.",
    },
    {
      q: "What is the difference between a while and a do-while loop?",
      options: [
        "while checks before executing; do-while executes at least once then checks", "They are identical", "do-while checks first", "while always runs once",
      ],
      answer: 0,
      explain: "while evaluates the condition before each iteration. do-while executes the body first, guaranteeing at least one execution.",
    },
    {
      q: "What is the purpose of the ternary operator?",
      options: ["A concise if-else that returns one of two values", "A loop", "A switch", "A cast"],
      answer: 0,
      explain: "cond ? a : b evaluates to a if cond is true, else b. It is a concise conditional expression.",
    },
    {
      q: "What is the difference between a switch and an if-else chain?",
      options: [
        "switch is best for comparing one variable against many constants; if-else is more general", "They are identical", "switch is always faster", "if-else is for constants",
      ],
      answer: 0,
      explain: "switch compares a single expression to constant cases (often compiled to a jump table). if-else handles arbitrary conditions.",
    },
    {
      q: "What is a fall-through in a switch?",
      options: [
        "Execution continues into the next case without break", "The switch ends", "A compile error", "A loop",
      ],
      answer: 0,
      explain: "Without break, execution 'falls through' into the next case. Sometimes intentional, but often a bug — the compiler warns with -Wimplicit-fallthrough.",
    },
    {
      q: "What is the difference between the comma operator and a semicolon?",
      options: [
        "The comma evaluates both operands and yields the second; a semicolon ends a statement", "They are identical", "The comma ends a statement", "A semicolon evaluates both",
      ],
      answer: 0,
      explain: "The comma operator evaluates its left, discards it, then yields the right. A semicolon separates statements.",
    },
    {
      q: "What is the purpose of the logical short-circuit evaluation?",
      options: [
        "&& and || stop evaluating once the result is known, skipping the rest", "They always evaluate everything", "It is a compile error", "It sorts",
      ],
      answer: 0,
      explain: "In a && b, if a is false b is not evaluated. In a || b, if a is true b is not evaluated. This avoids unnecessary (and sometimes unsafe) work.",
    },
    {
      q: "What is the difference between bitwise AND (&) and logical AND (&&)?",
      options: [
        "& operates on bits; && is a boolean short-circuit operator", "They are identical", "&& works on bits", "& is boolean",
      ],
      answer: 0,
      explain: "& performs bitwise AND on each bit. && performs logical AND with short-circuit evaluation, yielding true/false.",
    },
    {
      q: "What is the difference between bitwise OR and logical OR?",
      options: [
        "| combines bits; || yields boolean with short-circuit", "They are identical", "|| combines bits", "| is boolean",
      ],
      answer: 0,
      explain: "| is bitwise OR (combines bit masks). || is logical OR (boolean, short-circuits).",
    },
    {
      q: "What is the purpose of a bit shift operator?",
      options: [
        "Shifts bits left/right, multiplying/dividing by powers of 2 for integers", "Sorts", "Copies", "Compares",
      ],
      answer: 0,
      explain: "x << n shifts bits left (multiply by 2^n); x >> n shifts right (divide by 2^n). Useful for bit manipulation and packed data.",
    },
    {
      q: "What is the difference between a bitwise XOR and a bitwise OR?",
      options: [
        "XOR (^) is 1 only when bits differ; OR (|) is 1 if either is 1", "They are identical", "OR is when they differ", "XOR is if either",
      ],
      answer: 0,
      explain: "XOR produces 1 where inputs differ (used for toggling bits). OR produces 1 if either input is 1.",
    },
    {
      q: "What is the purpose of a bit mask?",
      options: [
        "Selecting or clearing specific bits in an integer value", "A type", "A loop", "A container",
      ],
      answer: 0,
      explain: "A bit mask is an integer pattern used with &, |, ^ to test, set, or clear specific bits, e.g., flag enumeration.",
    },
    {
      q: "What is the purpose of the sizeof operator?",
      options: ["Returns the size in bytes of a type or object","Sorts","Casts","Copies"],
      answer: 0,
      explain: "sizeof returns the size (in bytes) of a type or expression at compile time, used for memory layout and buffers.",
    },
    {
      q: "What is the difference between sizeof and sizeof(array)/sizeof(element)?",
      options: [
        "Dividing an array's total size by element size yields the element count","They are identical","sizeof(array) is the count","sizeof(element) is the total",
      ],
      answer: 0,
      explain: "sizeof(array) gives total bytes; sizeof(array[0]) gives one element's size. Their ratio is the element count (standard idiom).",
    },
    {
      q: "What is the purpose of alignof?",
      options: ["Returns the alignment requirement of a type","Sorts","Casts","Copies"],
      answer: 0,
      explain: "alignof(type) gives the memory alignment the type requires, important for correct access and cache performance.",
    },
    {
      q: "What is the difference between a class and a struct's default member access?",
      options: [
        "class members default to private; struct members default to public","They are identical","struct defaults private","class defaults public",
      ],
      answer: 0,
      explain: "The only default difference: struct members are public by default, class members private. Also, inheritance defaults differ (public vs private).",
    },
    {
      q: "What is the purpose of an anonymous namespace?",
      options: [
        "Giving names internal linkage, so they are file-local","Creating globals","Sorting","Casting",
      ],
      answer: 0,
      explain: "An unnamed namespace makes its contents visible only within the current translation unit, the modern way to get internal linkage.",
    },
    {
      q: "What is the difference between a declaration in a header and a definition in a source file?",
      options: [
        "Headers declare interfaces; source files define implementations","They are identical","Headers define implementations","Source files declare",
      ],
      answer: 0,
      explain: "Headers (.h) contain declarations shared across files. Source files (.cpp) contain definitions and are compiled once.",
    },
    {
      q: "What is the purpose of the One Definition Rule (ODR)?",
      options: [
        "Each function/variable/type should have exactly one definition across the program","Allow multiple definitions","Sort","Cast",
      ],
      answer: 0,
      explain: "ODR states every function/variable/type must have exactly one definition across the program (except templates/inline). Violations cause linker errors.",
    },
    {
      q: "What is the difference between extern 'C' linkage and a normal function?",
      options: [
        "extern 'C' gives C linkage (no name mangling), callable from C","They are identical","extern C mangles names","Normal functions have C linkage",
      ],
      answer: 0,
      explain: "extern 'C' disables name mangling so C++ functions can be called from C code (and vice versa), used for C libraries.",
    },
    {
      q: "What is the purpose of a forward declaration?",
      options: [
        "Declares a name/type before its definition, enabling references and avoiding includes","Defines the type","Sorts","Casts",
      ],
      answer: 0,
      explain: "A forward declaration (class Foo;) tells the compiler a type exists, allowing pointers/references without the full definition, speeding builds.",
    },
    {
      q: "What is the difference between a header guard and #pragma once?",
      options: [
        "Both prevent multiple inclusion; guards use #ifndef, pragma once is a directive","They are identical","Guards are pragma","pragma once uses ifndef",
      ],
      answer: 0,
      explain: "Include guards (#ifndef X / #define X / #endif) are standard. #pragma once is a widely supported shortcut. Both prevent double inclusion.",
    },
    {
      q: "What is the purpose of the preprocessor?",
      options: ["Processes directives (#include, #define) before compilation","Sorts","Links","Runs the program"],
      answer: 0,
      explain: "The preprocessor runs before compilation, handling directives like #include (textual inclusion) and #define (macros).",
    },
    {
      q: "What is the difference between #include and #define?",
      options: [
        "#include inserts a file's contents; #define creates a macro","They are identical","#define includes a file","#include defines a macro",
      ],
      answer: 0,
      explain: "#include textually inserts another file. #define creates a macro (object-like or function-like) for text substitution.",
    },
    {
      q: "What is the purpose of the #ifdef directive?",
      options: ["Conditionally compiles code if a macro is defined","Defines a macro","Includes a file","Errors"],
      answer: 0,
      explain: "#ifdef X compiles the following code only if X is defined, enabling feature flags and platform-specific code.",
    },
    {
      q: "What is the difference between #if and #ifdef?",
      options: [
        "#if evaluates a constant expression; #ifdef checks if a macro is defined","They are identical","#ifdef evaluates an expression","#if checks if defined",
      ],
      answer: 0,
      explain: "#if evaluates a compile-time integer expression (e.g., #if N > 2). #ifdef/#ifndef check macro definition.",
    },
    {
      q: "What is the purpose of the #error directive?",
      options: ["Emits a compile error with a custom message","Sorts","Includes","Defines"],
      answer: 0,
      explain: "#error forces a compilation error with a message, useful to halt compilation when a condition is unmet.",
    },
    {
      q: "What is the difference between a const variable and a macro constant?",
      options: [
        "const is typed and scoped; a macro constant is untyped text substitution","They are identical","a macro is typed","const is untyped",
      ],
      answer: 0,
      explain: "A const variable is a typed, scoped value checked by the compiler. A #define macro is a blind text replacement with no type.",
    },
    {
      q: "What is the purpose of a string literal?",
      options: ["An array of characters terminated by a null byte","An integer","A float","A boolean"],
      answer: 0,
      explain: "A C-string literal (double-quoted text) is an array of chars ending with a null terminator, stored in static memory.",
    },
    {
      q: "What is the difference between a char array and a char pointer?",
      options: [
        "A char array is a fixed buffer; a char pointer points to a buffer that may be modified or not","They are identical","A pointer is a buffer","An array is a pointer only",
      ],
      answer: 0,
      explain: "char buf[] is a fixed-size writable array. char* may point to a mutable buffer or to a string literal (which must not be modified).",
    },
    {
      q: "What is the purpose of the null terminator in C-strings?",
      options: [
        "Marks the end of the string so functions know where it stops","Adds a space","Sorts the string","Is the first character",
      ],
      answer: 0,
      explain: "C-strings end with a '\\0' null terminator. Functions scan until they find it, so missing it causes overruns.",
    },
    {
      q: "What is the difference between a char and a wchar_t?",
      options: [
        "wchar_t is a wide character type for wide strings; char is a single byte","They are identical","char is wide","wchar_t is one byte",
      ],
      answer: 0,
      explain: "wchar_t is a wide character (typically 2 or 4 bytes) for wide strings (prefixed L). char is one byte. C++11+ also has char16_t/char32_t.",
    },
    {
      q: "What is the difference between a boolean and an integer?",
      options: [
        "bool holds true/false; int holds a whole number range","They are identical","int holds true/false","bool holds numbers",
      ],
      answer: 0,
      explain: "bool represents logical true/false. int is a numeric whole-number type.",
    },
    {
      q: "What is the purpose of the logical negation operator (!)?",
      options: ["Inverts a boolean: true becomes false and vice versa","Sorts","Casts","Copies"],
      answer: 0,
      explain: "! flips a boolean's truth value. !! converts a value to its boolean truthiness.",
    },
    {
      q: "What is the difference between the == and the assignment operator =?",
      options: ["== compares; = assigns","They are identical","= compares","== assigns"],
      answer: 0,
      explain: "== is the equality comparison operator. = is assignment. Confusing them is a classic bug (often caught by -Wall).",
    },
    {
      q: "What is the purpose of the null statement (;)?",
      options: ["An empty statement that does nothing, sometimes used in loops","A comment","A cast","A sort"],
      answer: 0,
      explain: "A lone semicolon is an empty statement. It can be intentional in loops like while (foo());.",
    },
    {
      q: "What is the difference between a nested loop and a recursive call?",
      options: [
        "A nested loop iterates within another; a recursive call invokes the function on itself","They are identical","A recursive call loops","A nested loop recurses",
      ],
      answer: 0,
      explain: "Nested loops are iterative (inner loop runs fully for each outer iteration). Recursion is a function calling itself.",
    },
    {
      q: "What is the purpose of a debugger?",
      options: [
        "Running code step by step, inspecting variables and breakpoints","Compiling","Linking","Sorting",
      ],
      answer: 0,
      explain: "A debugger lets you pause execution, set breakpoints, and inspect state to find bugs.",
    },
    {
      q: "What is the difference between a breakpoint and a watchpoint?",
      options: [
        "A breakpoint pauses at a line; a watchpoint pauses when a variable changes","They are identical","A watchpoint pauses at a line","A breakpoint watches a variable",
      ],
      answer: 0,
      explain: "A breakpoint stops execution at a location. A watchpoint (data breakpoint) stops when a memory location is written.",
    },
    {
      q: "What is the purpose of profiling?",
      options: ["Measuring where time/cycles/memory are spent to find bottlenecks","Compiling","Sorting","Debugging errors only"],
      answer: 0,
      explain: "Profiling instruments the program to identify performance bottlenecks (hot spots) and memory usage.",
    },
    {
      q: "What is the difference between a release and a debug build?",
      options: [
        "Debug has no optimization and full symbols; release is optimized and stripped","They are identical","Release has debug info","Debug is optimized",
      ],
      answer: 0,
      explain: "Debug builds (-g, -O0) preserve debug info and are easy to step through. Release builds (-O2) optimize and often strip debug symbols.",
    },
    {
      q: "What is the purpose of unit testing?",
      options: [
        "Verifying individual functions/classes behave correctly in isolation","Integrating systems","Deploying","Sorting",
      ],
      answer: 0,
      explain: "Unit tests check small units of code in isolation, providing fast feedback and guarding against regressions.",
    },
  ],
  boss: {
    q: "You are asked to design a class that owns a heap buffer. What must you implement to make it safe and correct?",
    options: [
      "Only a destructor",
      "The Rule of Five: destructor, copy ctor, copy assign, move ctor, move assign",
      "Only a copy constructor",
      "Nothing — the compiler handles it",
    ],
    answer: 1,
    explain: "A class owning a heap buffer must follow the Rule of Five: a destructor to free memory, copy constructor and copy assignment for deep copies, and move constructor and move assignment for efficient transfers. Otherwise you get double-frees or leaks.",
  },
};
