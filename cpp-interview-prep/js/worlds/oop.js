/* ============================================================
   WORLD: Object-Oriented Principles
   Each entry: { q, options[4], answer (index), explain }
   ============================================================ */

const WORLD_OOP = {
  id: "oop",
  name: "Object-Oriented Principles",
  icon: "◆",
  tagline: "Encapsulation, inheritance, polymorphism, abstraction.",
  color: "#4fc3f7",
  questions: [
    {
      q: "Which OOP principle hides internal state and only exposes it through public methods?",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
      answer: 1,
      explain: "Encapsulation bundles data with the methods that operate on it and restricts direct access to that data, usually via private members and public accessors.",
    },
    {
      q: "What is the difference between a class and a struct in C++?",
      options: [
        "Structs cannot have methods",
        "Default access: struct members are public, class members are private",
        "Classes cannot be instantiated on the stack",
        "There is no difference",
      ],
      answer: 1,
      explain: "The only default difference is access control: struct defaults to public, class defaults to private. Both can have methods, constructors, and inheritance.",
    },
    {
      q: "Which keyword prevents a class from being inherited?",
      options: ["static", "const", "final", "sealed"],
      answer: 2,
      explain: "In C++11+, marking a class 'final' prevents it from being used as a base class. (C# uses 'sealed'; C++ uses 'final'.)",
    },
    {
      q: "What is a virtual destructor and why is it important?",
      options: [
        "It makes the destructor inline",
        "It ensures the derived class destructor runs when deleting through a base pointer",
        "It prevents the destructor from being called",
        "It is required for all classes",
      ],
      answer: 1,
      explain: "When you delete a derived object through a base-class pointer, a non-virtual destructor causes undefined behavior. A virtual destructor ensures the correct derived destructor runs.",
    },
    {
      q: "What does 'pure virtual' mean, and what does it make a class?",
      options: [
        "A function with no body; makes the class abstract",
        "A function that cannot be overridden",
        "A static member function",
        "A function that returns void",
      ],
      answer: 0,
      explain: "A pure virtual function (declared with '= 0') has no definition in the base class. A class with at least one pure virtual function is abstract and cannot be instantiated.",
    },
    {
      q: "Which access specifier makes members visible to derived classes but not to the outside world?",
      options: ["public", "private", "protected", "friend"],
      answer: 2,
      explain: "'protected' members are accessible within the class and by derived classes, but not by external code.",
    },
    {
      q: "What is the 'diamond problem' in multiple inheritance?",
      options: [
        "A class inheriting from two classes that share a common base, causing ambiguity",
        "A class with too many methods",
        "A circular dependency between two classes",
        "A memory leak in inheritance",
      ],
      answer: 0,
      explain: "If B and C both inherit from A, and D inherits from both B and C, D has two copies of A. 'virtual inheritance' solves this by sharing a single A subobject.",
    },
    {
      q: "What is the difference between overloading and overriding?",
      options: [
        "They are the same thing",
        "Overloading: same name, different params (compile-time). Overriding: redefining a virtual function in a derived class (runtime)",
        "Overriding changes the return type only",
        "Overloading only works with operators",
      ],
      answer: 1,
      explain: "Overloading is compile-time polymorphism (same name, different signatures). Overriding is runtime polymorphism via virtual functions in a derived class.",
    },
    {
      q: "What is the purpose of the 'friend' keyword?",
      options: [
        "It makes a class public",
        "It grants a function or class access to private/protected members",
        "It creates a copy of a class",
        "It marks a class as thread-safe",
      ],
      answer: 1,
      explain: "A friend function or friend class can access the private and protected members of the class that declares it as a friend. It breaks encapsulation deliberately.",
    },
    {
      q: "What is the difference between composition and inheritance?",
      options: [
        "Composition is 'has-a', inheritance is 'is-a'",
        "Inheritance is 'has-a', composition is 'is-a'",
        "They are identical",
        "Composition cannot be used in C++",
      ],
      answer: 0,
      explain: "Composition models a 'has-a' relationship (a Car has an Engine). Inheritance models an 'is-a' relationship (a Dog is an Animal). Prefer composition over inheritance when possible.",
    },
    {
      q: "What is the difference between an abstract class and an interface in C++?",
      options: [
        "An interface is a class with only pure virtual functions; an abstract class may have concrete members",
        "They are identical",
        "Abstract classes cannot be inherited",
        "Interfaces can have member variables",
      ],
      answer: 0,
      explain: "An interface (in C++, a class with only pure virtual functions and no data) defines a contract. An abstract class may also carry data and concrete methods. C++ has no separate 'interface' keyword.",
    },
    {
      q: "What is the difference between public, protected, and private inheritance?",
      options: [
        "They control the access level of inherited base members in the derived class",
        "They control the number of inherited methods",
        "They only affect the constructor",
        "They are identical",
      ],
      answer: 0,
      explain: "Public inheritance keeps base public/protected levels (is-a). Protected/private inheritance make base public members protected or private in the derived class (implementation reuse, not is-a).",
    },
    {
      q: "What is object slicing?",
      options: [
        "Passing a derived object by value to a base parameter, losing the derived part",
        "Deleting an object",
        "Allocating memory",
        "Calling a base method",
      ],
      answer: 0,
      explain: "Object slicing happens when a derived object is copied by value into a base object, so the derived portion is sliced off. Avoid by passing by reference or pointer.",
    },
    {
      q: "What is the 'this' pointer?",
      options: [
        "A pointer to the current object used inside member functions",
        "A pointer to the base class",
        "A static pointer",
        "A global variable",
      ],
      answer: 0,
      explain: "'this' is an implicit pointer to the object on which a non-static member function is called. It lets you refer to the object's own members and return the object.",
    },
    {
      q: "When is a copy constructor called?",
      options: [
        "When an object is initialized from another object of the same type",
        "When an object is destroyed",
        "When a static method is called",
        "When the program starts",
      ],
      answer: 0,
      explain: "The copy constructor runs when a new object is initialized as a copy of an existing object: passing by value, returning by value, or declaring an object from another.",
    },
    {
      q: "What is the purpose of a static member function?",
      options: [
        "It belongs to the class, not an instance, and has no 'this' pointer",
        "It can only access instance members",
        "It is virtual",
        "It creates an instance",
      ],
      answer: 0,
      explain: "A static member function is associated with the class rather than any object. It has no 'this' pointer and can only directly access static members of the class.",
    },
    {
      q: "What is the order of construction in inheritance?",
      options: [
        "Base class constructors first, then derived",
        "Derived constructors first, then base",
        "They run in parallel",
        "Only the derived constructor runs",
      ],
      answer: 0,
      explain: "Base class subobjects are constructed before derived members. The constructor of the most-derived class runs last, and destruction happens in the reverse order.",
    },
    {
      q: "What does the 'override' keyword do?",
      options: [
        "Marks a function as overriding a virtual base function, checked by the compiler",
        "Makes a function non-virtual",
        "Creates a new function",
        "Overloads an operator",
      ],
      answer: 0,
      explain: "'override' tells the compiler a function is meant to override a virtual base function. If no matching base virtual exists, it is a compile error — catching mistakes early.",
    },
    {
      q: "What is the difference between early (static) and late (dynamic) binding?",
      options: [
        "Early binding is resolved at compile time; late binding is resolved at runtime via virtual functions",
        "Early binding is runtime; late binding is compile-time",
        "They are identical",
        "Late binding is for static functions",
      ],
      answer: 0,
      explain: "Early binding is determined at compile time (non-virtual calls). Late binding uses the virtual table at runtime so the correct derived function runs based on the actual object type.",
    },
    {
      q: "What is a virtual table (vtable)?",
      options: [
        "A table of pointers to a class's virtual functions, used for dynamic dispatch",
        "A table of member variables",
        "A memory allocator",
        "A list of classes",
      ],
      answer: 0,
      explain: "A class with virtual functions has a vtable — an array of function pointers. Each object stores a pointer to its class's vtable, enabling late binding when a virtual function is called.",
    },
    {
      q: "What is the difference between a default constructor and a parameterized constructor?",
      options: [
        "Default takes no arguments; parameterized takes arguments to initialize members",
        "They are identical",
        "Default takes arguments",
        "Parameterized cannot exist",
      ],
      answer: 0,
      explain: "A default constructor takes no arguments (or all have defaults). A parameterized constructor takes arguments used to initialize the object's members.",
    },
    {
      q: "What is the purpose of the copy-and-swap idiom?",
      options: [
        "Provides a strong exception guarantee for copy assignment using a temp + swap",
        "Swaps two pointers",
        "Copies without copying",
        "Deletes objects",
      ],
      answer: 0,
      explain: "Copy-and-swap implements copy assignment by copying into a temporary and swapping with it, giving strong exception safety and a single clean code path.",
    },
    {
      q: "What is the 'final' keyword used for on a virtual function?",
      options: ["Prevents further overriding in derived classes", "Makes it pure virtual", "Makes it inline", "Deletes it"],
      answer: 0,
      explain: "Marking a virtual function 'final' prevents derived classes from overriding it. It also lets the compiler devirtualize calls in some cases.",
    },
    {
      q: "What is a friend class?",
      options: [
        "A class granted access to another class's private/protected members",
        "A class that is public",
        "A virtual class",
        "A base class",
      ],
      answer: 0,
      explain: "A friend class can access all private and protected members of the class that declared it as a friend. Use sparingly as it weakens encapsulation.",
    },
    {
      q: "What is operator overloading?",
      options: [
        "Giving custom meaning to operators for user-defined types",
        "Overloading a function",
        "A template",
        "A virtual function",
      ],
      answer: 0,
      explain: "Operator overloading lets you define how operators (+, ==, [], etc.) behave for your classes, so they can be used naturally like built-in types.",
    },
    {
      q: "Which operators can be overloaded as free (non-member) functions?",
      options: [
        "Operators where the left operand is not of the class type, e.g., operator<<",
        "Only member operators",
        "Only virtual operators",
        "None",
      ],
      answer: 0,
      explain: "Some operators (like stream operator<<) should be free functions when the left operand is a standard type, enabling symmetry and correct argument order.",
    },
    {
      q: "What is the difference between a static member variable and a global variable?",
      options: [
        "A static member belongs to a class and has class scope; a global is accessible everywhere",
        "They are identical",
        "A global belongs to a class",
        "A static member is on the heap",
      ],
      answer: 0,
      explain: "A static data member is shared by all instances of the class and accessed via Class::member. A global variable is accessible throughout the program (external linkage).",
    },
    {
      q: "What is the purpose of the 'mutable' keyword?",
      options: [
        "Allows modification of a member even in a const member function",
        "Makes a variable constant",
        "Makes a member static",
        "Deletes a member",
      ],
      answer: 0,
      explain: "A 'mutable' member can be modified inside a const member function, typically for caching or reference counting that should not affect logical constness.",
    },
    {
      q: "What is the difference between overriding and hiding a base function?",
      options: [
        "Overriding replaces a virtual function via vtable; hiding just shadows a name in a derived class",
        "They are identical",
        "Hiding is for virtual functions",
        "Overriding hides the name",
      ],
      answer: 0,
      explain: "Overriding reimplements a virtual function for dynamic dispatch. Hiding occurs when a derived class declares a member with the same name as a base member, shadowing it.",
    },
    {
      q: "What is the difference between a base class pointer and a derived class pointer?",
      options: [
        "A base pointer can point to any derived object; a derived pointer can only point to derived objects",
        "They are identical",
        "A derived pointer points to base",
        "A base pointer cannot be dereferenced",
      ],
      answer: 0,
      explain: "A base-class pointer can refer to a derived object (upcasting), enabling polymorphism. A derived pointer cannot point to a base object safely without a cast.",
    },
    {
      q: "What is the purpose of the copy constructor vs the assignment operator?",
      options: [
        "Copy ctor creates a new object as a copy; assignment copies into an existing object",
        "They are identical",
        "Assignment creates a new object",
        "Copy ctor assigns into an existing object",
      ],
      answer: 0,
      explain: "A copy constructor builds a brand-new object from an existing one. Copy assignment (=) copies the value into an already-constructed object.",
    },
    {
      q: "What is the difference between a virtual function and a non-virtual function with the same name?",
      options: [
        "A virtual function is dispatched at runtime via vtable; a non-virtual call is resolved at compile time",
        "They are identical",
        "Non-virtual uses the vtable",
        "Virtual is resolved at compile time",
      ],
      answer: 0,
      explain: "Calling a virtual function on a base pointer dispatches to the derived override at runtime (late binding). A non-virtual function call is bound at compile time.",
    },
    {
      q: "What is a polymorphic type in C++?",
      options: ["A type with at least one virtual function", "A type with templates", "A struct", "A pointer"],
      answer: 0,
      explain: "A polymorphic type has at least one virtual function, giving it a vtable and enabling runtime polymorphism via base-class pointers/references.",
    },
    {
      q: "What is the difference between composition and aggregation?",
      options: [
        "Composition: child cannot outlive parent (owns). Aggregation: child can be shared/outlive (weak)",
        "They are identical",
        "Aggregation owns the child",
        "Composition shares the child",
      ],
      answer: 0,
      explain: "In composition the owner creates and destroys the part (strong lifetime). In aggregation the part can exist independently and be shared among containers.",
    },
    {
      q: "What is the purpose of a pure virtual destructor?",
      options: [
        "Makes a class abstract while still giving derived destructors a proper base cleanup",
        "Deletes the class",
        "Prevents destruction",
        "Makes a class final",
      ],
      answer: 0,
      explain: "A pure virtual destructor makes the class abstract, but must still have a definition so derived destructors can call it during unwinding.",
    },
    {
      q: "What is the difference between a base and a derived class object layout?",
      options: [
        "A derived object contains a base subobject plus its own members",
        "They are identical",
        "Derived is smaller",
        "Base contains derived members",
      ],
      answer: 0,
      explain: "A derived object's layout includes the base subobject(s) first, then its own members. This is why a base pointer can be adjusted to point at a derived object.",
    },
    {
      q: "What does it mean to 'upcast' a pointer?",
      options: [
        "Converting a derived pointer to a base pointer",
        "Converting a base pointer to derived",
        "Casting to int",
        "Nulling a pointer",
      ],
      answer: 0,
      explain: "Upcasting converts a derived-class pointer/reference to a base-class pointer/reference. It is implicit and safe, enabling access through the base interface.",
    },
    {
      q: "What is a 'downcast'?",
      options: [
        "Converting a base pointer to a derived pointer, often needing dynamic_cast",
        "Converting derived to base",
        "Casting to double",
        "Dereferencing",
      ],
      answer: 0,
      explain: "A downcast converts a base pointer to a derived pointer. It is not implicit and can be unsafe; dynamic_cast performs a checked runtime downcast.",
    },
    {
      q: "What is the difference between 'new' returning a pointer and using a reference?",
      options: [
        "new allocates on the heap and returns a pointer; a reference aliases an existing object",
        "They are identical",
        "new returns a reference",
        "References are heap-allocated",
      ],
      answer: 0,
      explain: "new allocates dynamic memory and returns a raw pointer you must delete. A reference is an alias to an existing object with automatic lifetime.",
    },
    {
      q: "What is the purpose of the 'const' qualifier on a class method (trailing const)?",
      options: [
        "Allows the method to be called on const objects and prevents member modification",
        "Makes the method static",
        "Makes the method virtual",
        "Returns a const pointer",
      ],
      answer: 0,
      explain: "A const-qualified member function promises not to modify the object, so it can be called on const objects and enforces immutability.",
    },
    {
      q: "What is the difference between an object and an instance?",
      options: [
        "An object is a runtime entity; an instance is an object of a specific class", "They are identical", "An instance is a class", "An object is a class",
      ],
      answer: 0,
      explain: "An object is a concrete runtime entity with state and behavior. An instance refers to that object as an occurrence of a particular class.",
    },
    {
      q: "What is the difference between a 'getter' and a 'setter'?",
      options: [
        "A getter reads a private member; a setter modifies it, both providing controlled access", "They are identical", "A getter modifies a member", "A setter reads a member",
      ],
      answer: 0,
      explain: "Getters (accessors) return the value of a private member. Setters (mutators) modify it, often with validation. They implement encapsulation.",
    },
    {
      q: "What is the purpose of the copy-and-swap idiom regarding exceptions?",
      options: [
        "It gives a strong exception guarantee so assignment never leaves an object half-modified", "It makes assignment faster", "It prevents copying", "It deletes objects",
      ],
      answer: 0,
      explain: "Copy-and-swap copies to a temporary first; only if that succeeds does it swap, so the object is unchanged if an exception occurs.",
    },
    {
      q: "What is the difference between initialization and assignment?",
      options: [
        "Initialization creates an object with a value; assignment overwrites an existing object", "They are identical", "Assignment creates an object", "Initialization overwrites",
      ],
      answer: 0,
      explain: "Initialization (T x = v; or T x{v};) constructs the object. Assignment (x = v;) copies/moves a new value into an already-constructed object.",
    },
    {
      q: "What is the purpose of a destructor?",
      options: [
        "Releases resources and cleans up when an object's lifetime ends", "Creates the object", "Copies the object", "Prints a message",
      ],
      answer: 0,
      explain: "The destructor runs when an object goes out of scope or is deleted, freeing resources like heap memory, file handles, and locks.",
    },
    {
      q: "What is the difference between a constructor and a destructor's return type?",
      options: [
        "Constructors and destructors have no return type and cannot return values", "Constructors return int", "Destructors return bool", "They return void",
      ],
      answer: 0,
      explain: "Neither constructors nor destructors have a return type and cannot return a value. They are special member functions.",
    },
    {
      q: "What is a delegating constructor?",
      options: [
        "A constructor that calls another constructor of the same class", "A constructor that returns", "A virtual constructor", "A static constructor",
      ],
      answer: 0,
      explain: "A delegating constructor (C++11) calls another constructor in its initialization list, avoiding duplicated initialization logic.",
    },
    {
      q: "What is the purpose of a member initialization list?",
      options: [
        "Initializes members before the constructor body runs, avoiding double initialization", "Assigns members in the body", "Deletes members", "Declares members",
      ],
      answer: 0,
      explain: "The member initializer list initializes members (and base classes) directly at construction, before the body executes — more efficient and required for const/reference members.",
    },
    {
      q: "What is the difference between declaring a member 'static' and 'non-static'?",
      options: [
        "A static member is shared across all instances; a non-static member is per-instance", "They are identical", "Non-static is shared", "Static is per-instance",
      ],
      answer: 0,
      explain: "A static member belongs to the class and is shared by all instances. A non-static member has a separate copy in each object.",
    },
    {
      q: "What is the purpose of a namespace?",
      options: [
        "Groups related names and prevents name collisions", "Allocates memory", "Creates objects", "Sorts code",
      ],
      answer: 0,
      explain: "A namespace scopes identifiers to prevent collisions and group related code. std is a namespace, and 'using namespace' can be used to bring names into scope.",
    },
    {
      q: "What is the difference between a class and an object in OOP terms?",
      options: [
        "A class is a blueprint/template; an object is an instance created from it", "They are identical", "An object is a blueprint", "A class is an instance",
      ],
      answer: 0,
      explain: "A class is a user-defined type (the blueprint). An object is a concrete instance of that type allocated at runtime.",
    },
    {
      q: "What is the purpose of the 'virtual' keyword on a base function?",
      options: [
        "Enables runtime polymorphism so derived overrides are called through base pointers", "Makes the function static", "Makes it const", "Deletes the function",
      ],
      answer: 0,
      explain: "Marking a base function virtual allows derived classes to override it and enables dynamic dispatch when calling through a base pointer/reference.",
    },
    {
      q: "What is the difference between a virtual function and a pure virtual function?",
      options: [
        "A virtual function has a definition; a pure virtual (=0) has none and makes the class abstract", "They are identical", "A pure virtual has a body", "A virtual has no body",
      ],
      answer: 0,
      explain: "A virtual function has an implementation in the base (with optional override). A pure virtual function (=0) has no base implementation and makes the class abstract.",
    },
    {
      q: "What is the purpose of a 'protected' constructor?",
      options: [
        "Restricts direct instantiation, allowing only derived classes to construct", "Makes the class public", "Deletes the class", "Makes it final",
      ],
      answer: 0,
      explain: "A protected constructor prevents external code from instantiating the class directly but lets derived classes call it — useful for base classes.",
    },
    {
      q: "What is the difference between an interface and an abstract class in a design sense?",
      options: [
        "An interface is a pure contract (all virtual); an abstract class provides some implementation", "They are identical", "Abstract class is a pure contract", "Interface provides state",
      ],
      answer: 0,
      explain: "An interface defines only method signatures (contract). An abstract class can also hold data and concrete methods that subclasses reuse.",
    },
    {
      q: "What is the purpose of the Rule of Zero?",
      options: [
        "Avoid defining special members by using RAII types so the compiler defaults are correct", "Define no methods", "Use no classes", "Avoid constructors",
      ],
      answer: 0,
      explain: "The Rule of Zero says let your class's data members (which are RAII types like unique_ptr/string) manage resources, so you don't need to define special member functions.",
    },
    {
      q: "What is the difference between a copy and a move of a std::string?",
      options: [
        "Copy duplicates the buffer; move transfers ownership of the buffer to the new string", "They are identical", "Move duplicates the buffer", "Copy transfers ownership",
      ],
      answer: 0,
      explain: "Copying a string deep-copies its character buffer. Moving transfers the buffer pointer to the destination, leaving the source empty.",
    },
    {
      q: "What is the purpose of a member function being 'const' for an overload pair?",
      options: [
        "You can provide const and non-const overloads for different access contexts", "It is a compile error", "It deletes the function", "It makes the function static",
      ],
      answer: 0,
      explain: "Providing const and non-const overloads lets const objects call the const version and mutable objects the non-const one (e.g., operator[]).",
    },
    {
      q: "What is the difference between a base-class reference and a base-class pointer?",
      options: [
        "A reference must bind to an existing object; a pointer can be null and reseated", "They are identical", "A pointer must bind", "A reference can be null",
      ],
      answer: 0,
      explain: "A base reference aliases an existing (possibly derived) object and cannot be null. A base pointer can be null, reassigned, and requires explicit dereference.",
    },
    {
      q: "What is the purpose of the 'explicit' keyword?",
      options: [
        "Prevents implicit conversions from a single-argument constructor", "Makes a constructor inline", "Makes a function virtual", "Deletes a constructor",
      ],
      answer: 0,
      explain: "explicit on a single-argument constructor prevents the compiler from using it for implicit conversions, avoiding surprising type conversions.",
    },
    {
      q: "What is the purpose of the 'default' keyword for special members?",
      options: [
        "Explicitly request the compiler-generated default implementation", "Delete a function", "Make it virtual", "Make it inline",
      ],
      answer: 0,
      explain: "= default on a special member function requests the compiler's default implementation, which is often more efficient and correct.",
    },
    {
      q: "What is the purpose of the 'delete' keyword for functions?",
      options: [
        "Marks a function as unavailable, causing a compile error if used", "Deletes an object", "Frees memory", "A comment",
      ],
      answer: 0,
      explain: "A deleted function (= delete) exists but cannot be used — calling it is a compile error. Useful to disable copies, implicit conversions, or operators.",
    },
    {
      q: "What is the difference between a copy assignment and move assignment operator?",
      options: [
        "Copy assignment deep-copies; move assignment transfers resources from a temporary", "They are identical", "Move assignment copies", "Copy assignment transfers",
      ],
      answer: 0,
      explain: "Copy assignment (=) duplicates an object's resources. Move assignment (=) steals resources from an expiring object, leaving it empty.",
    },
    {
      q: "What is the purpose of a class being 'abstract'?",
      options: [
        "It cannot be instantiated; it serves as a base for concrete derived classes", "It is final", "It is faster", "It cannot be inherited",
      ],
      answer: 0,
      explain: "An abstract class (with a pure virtual) cannot be instantiated directly; it defines a common interface for derived classes.",
    },
    {
      q: "What is the difference between a 'has-a' and an 'is-a' relationship?",
      options: [
        "has-a is composition (a Car has an Engine); is-a is inheritance (a Dog is an Animal)", "They are identical", "is-a is composition", "has-a is inheritance",
      ],
      answer: 0,
      explain: "'has-a' is composition, where a class contains objects. 'is-a' is inheritance, where a class derives from a base and is a subtype.",
    },
    {
      q: "What is the purpose of the base class destructor being virtual?",
      options: [
        "Ensures derived destructors run when deleting via a base pointer", "Makes destruction faster", "Prevents destruction", "Deletes the base",
      ],
      answer: 0,
      explain: "A virtual destructor in the base ensures the correct derived destructor is called when deleting through a base pointer, avoiding leaks and UB.",
    },
    {
      q: "What is the difference between a private and a public base class?",
      options: [
        "Private inheritance makes base public members private in derived (implementation); public inheritance is is-a", "They are identical", "Private is is-a", "Public is implementation",
      ],
      answer: 0,
      explain: "Public inheritance models is-a and keeps access levels. Private/protected inheritance is for implementation reuse and is not substitutable.",
    },
    {
      q: "What is the purpose of virtual inheritance?",
      options: [
        "Solves the diamond problem by sharing a single common base subobject", "Makes classes abstract", "Speeds up calls", "Deletes a base",
      ],
      answer: 0,
      explain: "Virtual inheritance ensures only one copy of the common base exists, resolving the ambiguity of the diamond problem.",
    },
    {
      q: "What is the difference between a pure virtual function and a virtual function call in a constructor?",
      options: [
        "Calling a virtual in a constructor dispatches to the current class, not derived overrides", "They are identical", "It dispatches to derived", "It is a compile error",
      ],
      answer: 0,
      explain: "During a base constructor, the derived part does not exist yet, so virtual calls dispatch to the base's own version, not a derived override.",
    },
    {
      q: "What is the purpose of the 'using' keyword in inheritance?",
      options: [
        "Brings base-class overloads into the derived scope, avoiding hiding", "Deletes a base", "Makes a base virtual", "Sorts members",
      ],
      answer: 0,
      explain: "'using Base::name;' in a derived class brings hidden base overloads into scope so they are not shadowed by a derived declaration.",
    },
    {
      q: "What is the purpose of a move constructor in performance?",
      options: [
        "Transfers resources without deep-copying, making operations faster", "It is slower", "It copies data", "It deletes data",
      ],
      answer: 0,
      explain: "A move constructor transfers ownership of resources (e.g., heap buffers) instead of deep-copying, dramatically improving performance for temporaries.",
    },
    {
      q: "What is the difference between copy elision and return value optimization (RVO)?",
      options: [
        "RVO elides the copy when returning a local; both avoid unnecessary copies", "They are unrelated", "RVO always fails", "Elision copies",
      ],
      answer: 0,
      explain: "RVO is a form of copy elision where the compiler constructs the return value directly in the caller's storage, avoiding a copy/move.",
    },
    {
      q: "What is guaranteed copy elision (C++17)?",
      options: [
        "The compiler must elide copies/moves for prvalue initialization and certain returns", "It never elides", "It is optional", "It copies always",
      ],
      answer: 0,
      explain: "C++17 guarantees copy elision in specific cases (prvalue initialization, certain returns), so no copy or move occurs.",
    },
    {
      q: "What is the purpose of the 'noexcept' on a move constructor?",
      options: [
        "Enables vector reallocation to move instead of copy, improving performance","It has no effect", "It forces a copy","It makes it throw",
      ],
      answer: 0,
      explain: "If a move constructor is noexcept, containers like vector use it during reallocation. If not, they must copy to preserve exception safety.",
    },
    {
      q: "What is the difference between a base and a derived reference binding?",
      options: [
        "A base reference can bind to a derived object (upcast); a derived reference cannot bind to base","They are identical","Derived binds to base","Base binds to derived only",
      ],
      answer: 0,
      explain: "Upcasting (derived to base) is allowed, so a base reference can bind a derived object. Downcasting via reference is not implicit.",
    },
    {
      q: "What is the purpose of the 'final' specifier on a class vs a function?",
      options: [
        "On a class it prevents inheritance; on a virtual function it prevents overriding","They are identical","On a class it prevents overriding","On a function it prevents inheritance",
      ],
      answer: 0,
      explain: "class X final prevents deriving from X. virtual f() final prevents overriding f in further derived classes.",
    },
    {
      q: "What is the difference between a virtual function declared in base and inherited in a derived without override?",
      options: [
        "The derived inherits the base implementation unless it overrides it","It becomes pure","It is deleted","It becomes static",
      ],
      answer: 0,
      explain: "A derived class inherits the base's virtual implementation unless it explicitly overrides it. It is still virtual.",
    },
    {
      q: "What is the purpose of the 'typeid' operator?",
      options: [
        "Returns type information about an object at runtime (RTTI)","Sorts","Casts","Allocates",
      ],
      answer: 0,
      explain: "typeid (with RTTI enabled) returns a type_info describing an object's dynamic type, used for runtime type identification.",
    },
    {
      q: "What is the difference between RTTI and dynamic_cast?",
      options: [
        "RTTI is the runtime type system; dynamic_cast uses it to perform safe downcasts","They are identical","dynamic_cast is the type system","RTTI performs casts",
      ],
      answer: 0,
      explain: "RTTI (Runtime Type Information) provides runtime type data. dynamic_cast uses RTTI to safely cast base to derived, returning null/failing on mismatch.",
    },
    {
      q: "What is the purpose of virtual functions vs templates for polymorphism?",
      options: [
        "Virtuals give runtime polymorphism; templates give compile-time polymorphism","They are identical","Templates are runtime","Virtuals are compile-time",
      ],
      answer: 0,
      explain: "Virtual functions dispatch at runtime (dynamic polymorphism). Templates resolve at compile time (static polymorphism), trading flexibility for speed.",
    },
    {
      q: "What is the purpose of the virtual call in a destructor?",
      options: [
        "It dispatches to the current class's own version, not derived (derived is already destroyed)","It dispatches to derived","It is a compile error","It is ignored",
      ],
      answer: 0,
      explain: "In a destructor, the derived part has already been destroyed, so a virtual call resolves to the current class's implementation.",
    },
    {
      q: "What is the difference between a base constructor and a derived constructor's initialization order?",
      options: [
        "Base subobjects initialize first, then derived members, then the derived body","Derived first","They are interleaved","Only derived initializes",
      ],
      answer: 0,
      explain: "Construction order: base subobjects, then derived members in declaration order, then the derived constructor body.",
    },
    {
      q: "What is the purpose of the 'virtual' keyword in destructors for abstract classes?",
      options: [
        "Ensures correct cleanup when deleting derived objects through the base","It is required for all","It prevents destruction","It speeds up destruction",
      ],
      answer: 0,
      explain: "An abstract base that may be deleted via base pointer must have a virtual destructor so derived destructors run.",
    },
    {
      q: "What is the difference between a copy and a move assignment when the source is the same object?",
      options: [
        "Both should handle self-assignment safely; move may leave source empty","They are identical","Self-assignment always crashes","Copy deletes the source",
      ],
      answer: 0,
      explain: "Both copy and move assignment must handle self-assignment (x = x) without corruption. Move can leave the source in a valid but empty state.",
    },
    {
      q: "What is the purpose of a virtual function being 'const'?",
      options: [
        "The override must also be const to match; const ensures it doesn't modify the object","It becomes static","It cannot be overridden","It returns void",
      ],
      answer: 0,
      explain: "A const virtual function must be overridden by const functions, and it promises not to modify the object.",
    },
    {
      q: "What is the difference between overloading with const and non-const parameters?",
      options: [
        "Functions differing only by top-level const (by value) cannot be overloaded; by ref/pointer they can","They always overload","They are identical","It is a compile error",
      ],
      answer: 0,
      explain: "Top-level const on value parameters does not affect the signature, so you cannot overload on it. const on a reference/pointer (low-level) does allow overloading.",
    },
    {
      q: "What is the purpose of the 'inline' keyword on a member function?",
      options: [
        "Requests the function be inlined and allows definition in headers (ODR exception)","Makes it virtual","Makes it static","Deletes it",
      ],
      answer: 0,
      explain: "inline requests compiler inlining and is an ODR exception, so an inline function can be defined in a header included in many TUs.",
    },
    {
      q: "What is the difference between a class template and a template class?",
      options: [
        "Class template is the template; a template class is its instantiation for specific types","They are identical","Template class is the pattern","A class template is instantiated",
      ],
      answer: 0,
      explain: "A class template is a blueprint parameterized by type. A template class (or instantiation) is the concrete class produced for specific type arguments.",
    },
    {
      q: "What is the purpose of a template specialization?",
      options: [
        "Providing a custom implementation of a template for specific types","Making templates faster","Deleting templates","Sorting",
      ],
      answer: 0,
      explain: "Template specialization overrides the generic template for particular types (e.g., vector<bool>), enabling type-specific behavior.",
    },
    {
      q: "What is the difference between a template and a macro?",
      options: [
        "Templates are type-safe, compile-time, and follow scope; macros are blind text substitution","They are identical","Macros are type-safe","Templates are text substitution",
      ],
      answer: 0,
      explain: "Templates provide type-safe generic code checked by the compiler. Macros are preprocessor text substitution with no type checking.",
    },
    {
      q: "What is the purpose of an abstract interface in dependency injection?",
      options: [
        "Letting callers depend on a contract instead of a concrete implementation","Creating globals","Sorting","Managing memory",
      ],
      answer: 0,
      explain: "An abstract interface decouples a caller from a concrete type, enabling flexibility and testability through substitution.",
    },
    {
      q: "What is the difference between a user-defined type and a built-in type?",
      options: [
        "A built-in is predefined (int, char); a user-defined type is a class/struct/enum you create","They are identical","Built-in types are classes","User types are built-in",
      ],
      answer: 0,
      explain: "Built-in types (int, double, char) are predefined by the language. User-defined types (class/struct/enum) are defined by the programmer.",
    },
    {
      q: "What is the purpose of an enum in OOP?",
      options: [
        "Defining a set of named integer constants for clarity and safety","Sorting","Managing memory","Creating objects",
      ],
      answer: 0,
      explain: "An enum defines a set of named constants, making code readable and reducing magic numbers. C++11 scoped enums (enum class) are type-safe.",
    },
    {
      q: "What is the difference between an enum and a class with static constants?",
      options: [
        "An enum groups related named values; a class with static consts can add behavior","They are identical","Static consts are enums","An enum has behavior",
      ],
      answer: 0,
      explain: "An enum is ideal for a simple set of related constants. A class with static constants is used when more structure/behavior is needed.",
    },
    {
      q: "What is the purpose of the 'override' and 'final' combination?",
      options: [
        "Overriding a virtual function while preventing further overrides in deeper subclasses","It is redundant","It makes it pure","It makes it static",
      ],
      answer: 0,
      explain: "'override final' both confirms the override and prevents deeper subclasses from overriding it further.",
    },
    {
      q: "What is the difference between a virtual base class and a non-virtual base class?",
      options: [
        "Virtual bases are shared (diamond-safe); non-virtual bases are duplicated in multiple inheritance","They are identical","Non-virtual are shared","Virtual bases are duplicated",
      ],
      answer: 0,
      explain: "With virtual inheritance the common base is shared as one subobject. With non-virtual inheritance each path creates a separate base copy.",
    },
    {
      q: "What is the purpose of the base class pointer member access in a derived object?",
      options: [
        "The base pointer accesses only the base subobject's interface","It accesses derived members","It is a compile error","It copies the object",
      ],
      answer: 0,
      explain: "A base pointer can only access members declared in the base (through its static type), not derived-only members, unless you downcast.",
    },
    {
      q: "What is the difference between a deep and a shallow copy with respect to ownership?",
      options: [
        "Deep copy gives each object its own resource; shallow copy shares the resource","They are identical","Shallow gives ownership","Deep shares resources",
      ],
      answer: 0,
      explain: "A deep copy duplicates pointed-to resources (each owns its copy). A shallow copy duplicates pointers, sharing the same resource.",
    },
    {
      q: "What is the purpose of the 'this' pointer in chained calls?",
      options: [
        "Returning *this lets method calls be chained (a.b().c())","It is not usable","It returns the base","It is static",
      ],
      answer: 0,
      explain: "Returning *this from methods enables fluent chaining, e.g., obj.setA().setB().",
    },
    {
      q: "What is the difference between declaring a method in a header and defining it inline in the class?",
      options: [
        "A body in the class is implicitly inline; a declaration needs a separate definition","They are identical","In-class is never inline","Declarations define",
      ],
      answer: 0,
      explain: "A member function defined inside the class body is implicitly inline. One declared but defined outside the class must have a separate definition.",
    },
  ],
  boss: {
    q: "Explain the full object lifetime of 'Base* b = new Derived();' — construction order, destruction order, and what happens if the destructor is not virtual.",
    options: [
      "Base ctor, then Derived ctor; Derived dtor, then Base dtor; non-virtual dtor = undefined behavior",
      "Derived ctor, then Base ctor; Base dtor, then Derived dtor; always safe",
      "Only Derived ctor runs; only Base dtor runs; always safe",
      "Base ctor, then Derived ctor; Base dtor, then Derived dtor; always safe",
    ],
    answer: 0,
    explain: "Construction runs base-first, then derived. Destruction runs derived-first, then base. Deleting through a base pointer with a non-virtual destructor is undefined behavior — the derived destructor never runs.",
  },
};
