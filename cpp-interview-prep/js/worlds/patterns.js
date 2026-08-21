/* ============================================================
   WORLD: Design Patterns
   ============================================================ */

const WORLD_PATTERNS = {
  id: "patterns",
  name: "Design Patterns",
  icon: "◈",
  tagline: "Singleton, Factory, Observer, Strategy, RAII, and more.",
  color: "#f48fb1",
  questions: [
    {
      q: "What is the Singleton pattern?",
      options: [
        "A class that can be instantiated many times",
        "A class that ensures only one instance exists and provides a global access point",
        "A class with no methods",
        "A class that cannot be inherited",
      ],
      answer: 1,
      explain: "Singleton restricts a class to a single instance and provides a global access point. In C++11+, a function-local static is thread-safe and is the preferred implementation.",
    },
    {
      q: "What is the Factory pattern used for?",
      options: [
        "Creating objects without specifying their concrete class",
        "Destroying objects",
        "Sorting objects",
        "Copying objects",
      ],
      answer: 0,
      explain: "The Factory pattern centralizes object creation, letting a client create objects through an interface without knowing the concrete class. It decouples creation from use.",
    },
    {
      q: "What is the Observer pattern?",
      options: [
        "A pattern where one object notifies dependents of state changes",
        "A pattern for sorting data",
        "A pattern for memory management",
        "A pattern for creating singletons",
      ],
      answer: 0,
      explain: "The Observer pattern defines a one-to-many dependency: when the subject changes state, all registered observers are notified automatically. It is common in UI and event systems.",
    },
    {
      q: "What is the Strategy pattern?",
      options: [
        "Encapsulating interchangeable algorithms behind an interface",
        "Creating a single instance",
        "Notifying observers",
        "Decorating objects",
      ],
      answer: 0,
      explain: "The Strategy pattern defines a family of algorithms, encapsulates each, and makes them interchangeable. The client selects a strategy at runtime without changing the code that uses it.",
    },
    {
      q: "What is RAII and why is it fundamental in C++?",
      options: [
        "Resource Acquisition Is Initialization: bind resource lifetime to object lifetime",
        "A pattern for sorting",
        "A pattern for networking",
        "A pattern for templates",
      ],
      answer: 0,
      explain: "RAII ties resource acquisition to object construction and release to destruction. When the object goes out of scope, its destructor releases the resource — making leaks and exceptions safe by default.",
    },
    {
      q: "What is the difference between the Factory Method and Abstract Factory patterns?",
      options: [
        "Factory Method uses inheritance to create one product; Abstract Factory creates families of related products",
        "They are identical",
        "Abstract Factory creates one product",
        "Factory Method creates families",
      ],
      answer: 0,
      explain: "Factory Method relies on subclassing to create a single product. Abstract Factory provides an interface to create families of related products without specifying concrete classes.",
    },
    {
      q: "What is the Decorator pattern?",
      options: [
        "Adding behavior to an object dynamically without modifying its class",
        "Creating a single instance",
        "Sorting a collection",
        "Notifying observers",
      ],
      answer: 0,
      explain: "The Decorator pattern wraps an object to add responsibilities dynamically, providing a flexible alternative to subclassing for extending behavior.",
    },
    {
      q: "What is the purpose of the Command pattern?",
      options: [
        "Encapsulating a request as an object, enabling undo/redo and queuing",
        "Creating objects",
        "Managing memory",
        "Sorting data",
      ],
      answer: 0,
      explain: "The Command pattern turns a request into a standalone object, so you can parameterize, queue, log, and undo operations. It is the basis of undo/redo systems.",
    },
    {
      q: "What is the Builder pattern?",
      options: [
        "Constructing complex objects step by step",
        "Creating a single instance",
        "Notifying observers",
        "Decorating objects",
      ],
      answer: 0,
      explain: "The Builder pattern separates the construction of a complex object from its representation, allowing the same construction process to create different representations.",
    },
    {
      q: "What is the Proxy pattern?",
      options: [
        "A placeholder that controls access to another object",
        "A pattern for sorting",
        "A pattern for memory",
        "A pattern for templates",
      ],
      answer: 0,
      explain: "The Proxy pattern provides a surrogate or placeholder for another object to control access, add lazy loading, logging, or access control without changing the real object.",
    },
    {
      q: "What is the Adapter pattern used for?",
      options: [
        "Converting an incompatible interface to one the client expects",
        "Creating a single instance",
        "Sorting data",
        "Managing memory",
      ],
      answer: 0,
      explain: "The Adapter (Wrapper) pattern lets two incompatible interfaces work together by wrapping one in an adapter that exposes the expected interface.",
    },
    {
      q: "What is the Facade pattern?",
      options: [
        "A unified, simplified interface to a complex subsystem",
        "A pattern for creating objects",
        "A pattern for sorting",
        "A pattern for singletons",
      ],
      answer: 0,
      explain: "The Facade pattern provides a single simplified interface hiding the complexity of many underlying classes, making the subsystem easier to use.",
    },
    {
      q: "What is the Template Method pattern?",
      options: [
        "Defines a skeleton algorithm in a base method, letting subclasses override steps",
        "A pattern for generic templates",
        "A pattern for memory",
        "A pattern for singletons",
      ],
      answer: 0,
      explain: "The Template Method pattern defines the overall algorithm in a base class method but lets subclasses override specific steps without changing the structure.",
    },
    {
      q: "What is the difference between the Adapter and Facade patterns?",
      options: [
        "Adapter changes an interface to match; Facade provides a simplified interface to a whole subsystem",
        "They are identical",
        "Facade changes one interface; Adapter simplifies a system",
        "Neither changes interfaces",
      ],
      answer: 0,
      explain: "Adapter makes one class usable with an expected interface. Facade provides a high-level simplified interface over a larger subsystem.",
    },
    {
      q: "What is the State pattern?",
      options: [
        "An object changes behavior when its internal state changes",
        "A pattern for data storage",
        "A pattern for singletons",
        "A pattern for templates",
      ],
      answer: 0,
      explain: "The State pattern lets an object alter its behavior when its state changes, appearing to change its class. It replaces large if/else chains.",
    },
    {
      q: "What is the Chain of Responsibility pattern?",
      options: [
        "Passing a request along a chain of handlers until one handles it",
        "Creating a single instance",
        "Notifying observers",
        "Decorating objects",
      ],
      answer: 0,
      explain: "The Chain of Responsibility pattern lets multiple handlers process a request in sequence; each handler either handles it or passes it to the next.",
    },
    {
      q: "What is the Iterator pattern?",
      options: [
        "Accessing elements of a collection sequentially without exposing its internals",
        "Creating objects",
        "Managing memory",
        "Decorating objects",
      ],
      answer: 0,
      explain: "The Iterator pattern provides a uniform way to traverse a collection, decoupling traversal from the collection's internal representation. STL iterators implement it.",
    },
    {
      q: "What is the Composite pattern?",
      options: [
        "Treating individual objects and compositions of objects uniformly",
        "Creating a single instance",
        "Notifying observers",
        "Sorting data",
      ],
      answer: 0,
      explain: "The Composite pattern builds tree structures of objects that can be treated uniformly (leaf vs composite), e.g., a UI tree where containers and controls share an interface.",
    },
    {
      q: "What is the Mediator pattern?",
      options: [
        "Centralizing communication between objects through a mediator",
        "Creating objects",
        "Managing memory",
        "Decorating objects",
      ],
      answer: 0,
      explain: "The Mediator pattern introduces a central object that coordinates communication between many objects, reducing the coupling between them.",
    },
    {
      q: "What is the Flyweight pattern?",
      options: [
        "Sharing common state among many objects to save memory",
        "Creating a single instance",
        "Sorting data",
        "Notifying observers",
      ],
      answer: 0,
      explain: "The Flyweight pattern shares immutable intrinsic state across many objects, reducing memory for large numbers of similar objects.",
    },
    {
      q: "What is the Prototype pattern?",
      options: [
        "Creating new objects by cloning an existing prototype instead of calling a constructor",
        "Creating a single instance",
        "Decorating objects",
        "Sorting data",
      ],
      answer: 0,
      explain: "The Prototype pattern creates objects by copying a prototype instance (clone()), useful when object creation is costly or the type is unknown.",
    },
    {
      q: "What is the Memento pattern?",
      options: [
        "Capturing and restoring an object's state without breaking encapsulation",
        "Creating objects",
        "Managing memory",
        "Decorating objects",
      ],
      answer: 0,
      explain: "The Memento pattern saves an object's state externally so it can be restored later (e.g., for undo), without exposing the object's internals.",
    },
    {
      q: "What is the Interpreter pattern?",
      options: [
        "Defining a grammar and interpreting sentences in that language",
        "Creating objects",
        "Sorting data",
        "Decorating objects",
      ],
      answer: 0,
      explain: "The Interpreter pattern represents a grammar's rules as classes and interprets expressions, often used for simple domain-specific languages.",
    },
    {
      q: "What is the Visitor pattern?",
      options: [
        "Adding operations to object structures without changing the classes",
        "Creating a single instance",
        "Notifying observers",
        "Managing memory",
      ],
      answer: 0,
      explain: "The Visitor pattern lets you add new operations to a set of classes by passing a visitor that implements an operation for each class, avoiding changes to the classes.",
    },
    {
      q: "What is the difference between the Observer and Mediator patterns?",
      options: [
        "Observer is one-to-many notifications; Mediator centralizes communication among many objects",
        "They are identical",
        "Mediator is one-to-many",
        "Observer centralizes all communication",
      ],
      answer: 0,
      explain: "Observer defines a one-to-many dependency where a subject notifies observers. Mediator centralizes many-to-many communication through a single mediator object.",
    },
    {
      q: "What is the difference between the Strategy and State patterns?",
      options: [
        "Strategy swaps algorithms; State changes behavior when internal state changes",
        "They are identical",
        "State swaps algorithms",
        "Strategy changes with state",
      ],
      answer: 0,
      explain: "In Strategy the client chooses an interchangeable algorithm. In State the object's behavior changes automatically based on its current state object.",
    },
    {
      q: "What is the Bridge pattern?",
      options: [
        "Decoupling an abstraction from its implementation so both vary independently",
        "Connecting two networks",
        "Creating objects",
        "Decorating objects",
      ],
      answer: 0,
      explain: "The Bridge pattern separates an abstraction's interface from its implementation, letting both evolve independently and reducing a class explosion.",
    },
    {
      q: "What is the difference between the Bridge and Adapter patterns?",
      options: [
        "Bridge is designed upfront to decouple abstraction/implementation; Adapter makes existing incompatible interfaces work together",
        "They are identical",
        "Adapter is designed upfront",
        "Bridge fixes incompatible interfaces",
      ],
      answer: 0,
      explain: "Bridge is a structural pattern planned before development to decouple abstraction from implementation. Adapter is a retrofit to make existing classes work together.",
    },
    {
      q: "What is the Null Object pattern?",
      options: [
        "A no-op object that provides default behavior instead of returning null",
        "A null pointer",
        "An empty container",
        "A zero object",
      ],
      answer: 0,
      explain: "The Null Object pattern provides a default no-op implementation so callers avoid null checks, treating absence and presence uniformly.",
    },
    {
      q: "What is the difference between a pattern and a principle?",
      options: [
        "A pattern is a concrete reusable solution; a principle is a high-level guideline (e.g., SOLID)",
        "They are identical",
        "A principle is a concrete solution",
        "Patterns are guidelines",
      ],
      answer: 0,
      explain: "A design pattern is a specific, reusable solution to a recurring problem. A principle (like SOLID or DRY) is a broad guideline that patterns help to satisfy.",
    },
    {
      q: "What is the Abstract Factory vs Builder pattern difference?",
      options: [
        "Abstract Factory creates families of products; Builder constructs one complex object step by step",
        "They are identical",
        "Builder creates families",
        "Abstract Factory builds step by step",
      ],
      answer: 0,
      explain: "Abstract Factory focuses on producing families of related objects. Builder focuses on the step-by-step construction of a single complex object.",
    },
    {
      q: "What is the purpose of the PIMPL idiom?",
      options: [
        "Hiding implementation details behind a pointer, improving compile times and ABI stability", "Sorting data", "Creating singletons", "Managing threads",
      ],
      answer: 0,
      explain: "PIMPL (Pointer to IMPLementation) stores the real implementation behind a forward-declared pointer, hiding details and reducing header dependencies.",
    },
    {
      q: "What is the NVI (Non-Virtual Interface) idiom?",
      options: [
        "A public non-virtual method calls a private virtual hook that subclasses override", "A way to avoid virtuals", "A data layout", "A memory allocator",
      ],
      answer: 0,
      explain: "NVI makes the public interface a non-virtual wrapper that calls a private/protected virtual hook, giving the base control over the algorithm.",
    },
    {
      q: "What is the Curiously Recurring Template Pattern (CRTP)?",
      options: [
        "A base template parameterized by its own derived class, enabling static polymorphism", "A runtime pattern", "A singleton", "A factory",
      ],
      answer: 0,
      explain: "CRTP uses template<class D> class Base, and Derived : Base<Derived>, enabling compile-time polymorphism without virtual function overhead.",
    },
    {
      q: "What is a policy-based design?",
      options: [
        "Composing behavior through template policy parameters instead of inheritance", "A runtime pattern", "A singleton", "A factory",
      ],
      answer: 0,
      explain: "Policy-based design composes classes using template parameters that supply behavior (policies), offering compile-time flexibility without inheritance.",
    },
    {
      q: "What is the purpose of the Scope Guard pattern?",
      options: [
        "Executing a cleanup action when leaving a scope, like RAII", "Creating objects", "Sorting", "Managing threads",
      ],
      answer: 0,
      explain: "The Scope Guard (or ScopeGuard) pattern runs a piece of code automatically when a scope exits, providing guaranteed cleanup.",
    },
    {
      q: "What is the difference between a Singleton and a static class?",
      options: [
        "A Singleton can implement interfaces and control its lifetime; a static class has only static members", "They are identical", "A static class is a Singleton", "A Singleton is static",
      ],
      answer: 0,
      explain: "A Singleton is an actual object with a single instance, can be passed around and have state. A class with only static members is not an object and cannot be instantiated.",
    },
    {
      q: "What is the Facade pattern's benefit?",
      options: [
        "Simplifying a complex subsystem behind one easy interface, reducing coupling", "Creating objects", "Sorting", "Managing threads",
      ],
      answer: 0,
      explain: "A Facade hides the many classes of a subsystem behind a single simplified interface, making it easier for clients and reducing coupling.",
    },
    {
      q: "What is the difference between the Decorator and Composite patterns?",
      options: [
        "Decorator adds behavior to a single object; Composite builds tree structures treated uniformly", "They are identical", "Composite adds behavior", "Decorator builds trees",
      ],
      answer: 0,
      explain: "Decorator wraps a single object to add responsibilities. Composite arranges objects into a tree where leaves and composites share an interface.",
    },
    {
      q: "What is the purpose of the Registry pattern?",
      options: [
        "Central registry to look up and retrieve objects/services by key", "Creating a single instance", "Decorating objects", "Sorting",
      ],
      answer: 0,
      explain: "A Registry provides a central place to store and retrieve objects by identifier, decoupling creators from consumers.",
    },
    {
      q: "What is the purpose of the Interface Segregation Principle (ISP)?",
      options: [
        "Clients should not depend on interfaces they do not use; split large interfaces", "Creating singletons", "Sorting", "Managing memory",
      ],
      answer: 0,
      explain: "ISP says prefer many small, specific interfaces over one fat interface, so clients only depend on the methods they actually use.",
    },
    {
      q: "What is the purpose of the Dependency Inversion Principle (DIP)?",
      options: [
        "Depend on abstractions, not concrete implementations; high-level modules should not depend on low-level ones", "Depend on concrete classes", "A singleton", "Sorting",
      ],
      answer: 0,
      explain: "DIP inverts dependency direction: both high- and low-level modules depend on abstractions (interfaces), decoupling layers.",
    },
    {
      q: "What is the purpose of the Open/Closed Principle (OCP)?",
      options: [
        "Software should be open for extension but closed for modification", "Keep everything public", "Avoid inheritance", "Use only globals",
      ],
      answer: 0,
      explain: "OCP says you should add new behavior by extending (inheritance/composition/polymorphism) rather than modifying existing tested code.",
    },
    {
      q: "What is the Single Responsibility Principle (SRP)?",
      options: [
        "A class should have only one reason to change", "A class should have one method", "A class should be a Singleton", "A class should be small",
      ],
      answer: 0,
      explain: "SRP states a class should have a single responsibility, giving it one reason to change. It improves cohesion and maintainability.",
    },
    {
      q: "What is the Liskov Substitution Principle (LSP)?",
      options: [
        "Derived objects should be usable wherever a base object is expected", "Subtypes should have more methods", "Base should be final", "Derived should be smaller",
      ],
      answer: 0,
      explain: "LSP says a derived class should be substitutable for its base without breaking the program's correctness.",
    },
    {
      q: "What is the difference between composition over inheritance?",
      options: [
        "Composition assembles behavior from parts (has-a) instead of inheriting (is-a), reducing coupling", "Inheritance is always better", "They are equivalent", "Composition disallows reuse",
      ],
      answer: 0,
      explain: "Preferring composition means building classes by combining objects, giving flexibility and avoiding fragile deep hierarchies.",
    },
    {
      q: "What is the purpose of the Interface Segregation in a C++ context?",
      options: [
        "Breaking a fat base class into narrow abstract interfaces", "Using macros", "Global variables", "Manual memory",
      ],
      answer: 0,
      explain: "Interface Segregation in C++ means splitting large interfaces into focused abstract classes so implementers only implement what they use.",
    },
    {
      q: "What is the difference between a design pattern and a refactoring?",
      options: [
        "A pattern is a design solution; a refactoring is improving existing code without changing behavior", "They are identical", "A refactoring is a design", "A pattern is a code cleanup",
      ],
      answer: 0,
      explain: "A pattern guides how to structure new code. A refactoring is a safe transformation of existing code that preserves behavior while improving its design.",
    },
    {
      q: "What is the purpose of the Factory pattern vs direct instantiation?",
      options: [
        "Factory centralizes and decouples creation, allowing flexibility and swapping implementations", "Direct instantiation is always better", "Factory is slower always", "They are identical",
      ],
      answer: 0,
      explain: "Direct instantiation (new Concrete()) couples the caller to a concrete class. A factory hides which concrete type is created, enabling flexibility.",
    },
    {
      q: "What is the difference between the Observer and the Pub/Sub pattern?",
      options: [
        "Observer is direct 1-to-many; Pub/Sub decouples via an intermediary broker", "They are identical", "Pub/Sub is direct", "Observer uses a broker",
      ],
      answer: 0,
      explain: "In Observer the subject directly notifies observers. In Pub/Sub a broker relays messages between publishers and subscribers, fully decoupling them.",
    },
    {
      q: "What is the purpose of the Repository pattern?",
      options: [
        "Abstracting data access behind a collection-like interface", "Creating singletons", "Sorting", "Managing memory",
      ],
      answer: 0,
      explain: "The Repository pattern mediates between the domain and data layer, providing a collection-like interface to query and store entities.",
    },
    {
      q: "What is the purpose of the Service pattern?",
      options: [
        "Encapsulating business logic into stateless services consumed by clients", "Creating singletons", "Sorting", "Managing memory",
      ],
      answer: 0,
      explain: "A Service encapsulates domain operations and business rules, exposing them to controllers/clients and keeping logic out of the UI.",
    },
    {
      q: "What is the difference between the Factory Method and Simple Factory?",
      options: [
        "Factory Method uses inheritance/virtual for creation; Simple Factory is a function with a switch", "They are identical", "Simple Factory uses inheritance", "Factory Method is a switch",
      ],
      answer: 0,
      explain: "The Simple Factory is a static function that decides which type to create. The Factory Method pattern uses polymorphic creator classes.",
    },
    {
      q: "What is the purpose of the Builder pattern's fluent interface?",
      options: [
        "Chaining setter calls to construct an object readably", "Creating singletons", "Sorting", "Managing memory",
      ],
      answer: 0,
      explain: "Fluent Builder returns *this from each setter, enabling method chaining like builder.withX().withY().build().",
    },
    {
      q: "What is the difference between the Command and Strategy patterns?",
      options: [
        "Command wraps an action to invoke later (undo/queue); Strategy swaps an algorithm", "They are identical", "Strategy wraps an action", "Command swaps algorithms",
      ],
      answer: 0,
      explain: "A Command encapsulates a request/action (including undo). A Strategy encapsulates a selectable algorithm. Command is action-oriented; Strategy is behavior-swapping.",
    },
    {
      q: "What is the purpose of the Singleton in a config or logging context?",
      options: [
        "Provides one shared global access point to config or logger", "Creates many instances", "Sorts", "Manages threads",
      ],
      answer: 0,
      explain: "Singletons are commonly used for configuration and logging to provide a single, globally accessible instance.",
    },
    {
      q: "What is the downside of using Singletons?",
      options: [
        "They introduce global state, hidden dependencies, and harden testing", "They are always good", "They are easy to test", "They reduce coupling",
      ],
      answer: 0,
      explain: "Singletons are global state: hard to test, hidden dependencies, initialization-order issues. Use dependency injection where possible.",
    },
    {
      q: "What is the purpose of the Dependency Injection pattern?",
      options: [
        "Providing an object's dependencies from outside rather than creating them internally", "Creating globals", "Sorting", "Managing memory",
      ],
      answer: 0,
      explain: "Dependency Injection passes dependencies into an object (constructor/setter) instead of it creating them, improving testability and decoupling.",
    },
    {
      q: "What is the difference between the Observer and the Publisher-Subscriber with topics?",
      options: [
        "Pub/Sub allows decoupled, topic-filtered messaging; Observer is a direct fixed relationship", "They are identical", "Observer is topic-based", "Pub/Sub is direct",
      ],
      answer: 0,
      explain: "Observer connects specific observers to a subject. Pub/Sub lets subscribers receive only messages on topics they subscribe to, fully decoupled.",
    },
    {
      q: "What is the purpose of the Circuit Breaker pattern?",
      options: [
        "Preventing repeated calls to a failing service, giving it time to recover", "Sorting", "Creating objects", "Managing memory",
      ],
      answer: 0,
      explain: "The Circuit Breaker trips after repeated failures, short-circuiting calls to a failing dependency until it recovers, improving resilience.",
    },
    {
      q: "What is the purpose of the Iterator invalidation concern in containers?",
      options: [
        "Some operations (insert/erase/resize) invalidate iterators, so re-obtain them", "Iterators never change", "It is a compile error", "It is always safe",
      ],
      answer: 0,
      explain: "Container mutations can invalidate iterators/pointers (e.g., vector reallocation). Re-obtain iterators after operations that may invalidate them.",
    },
    {
      q: "What is the purpose of the Proxy pattern in smart pointers?",
      options: [
        "Smart pointers act as proxies controlling access to a managed object", "Sorting", "Creating singletons", "Managing memory",
      ],
      answer: 0,
      explain: "Smart pointers (unique_ptr/shared_ptr) are proxy objects that control access and lifetime of the underlying object via operator-> and operator*.",
    },
    {
      q: "What is the difference between the Adapter and the Decorator pattern?",
      options: [
        "Adapter changes an interface; Decorator adds behavior without changing the interface", "They are identical", "Decorator changes the interface", "Adapter adds behavior",
      ],
      answer: 0,
      explain: "Adapter makes an incompatible interface usable. Decorator wraps an object to add responsibilities while preserving its interface.",
    },
    {
      q: "What is the purpose of the Observer pattern's pull vs push model?",
      options: [
        "Push sends data to observers; pull lets observers fetch data from the subject", "They are identical", "Push lets observers fetch", "Pull sends data",
      ],
      answer: 0,
      explain: "In push, the subject sends the changed data to observers. In pull, the subject just notifies and observers query the subject for data.",
    },
    {
      q: "What is the difference between the Singleton and the Multiton pattern?",
      options: [
        "Singleton allows one instance; Multiton manages several named instances", "They are identical", "Multiton allows one", "Singleton manages several",
      ],
      answer: 0,
      explain: "A Singleton ensures a single instance. A Multiton maintains a map of instances keyed by name, with one per key.",
    },
    {
      q: "What is the purpose of the Value Object pattern?",
      options: [
        "An immutable object compared by value, not identity", "Creating singletons", "Sorting", "Managing memory",
      ],
      answer: 0,
      explain: "A Value Object has no identity; two are equal if all fields match. It is immutable and often used for domain values.",
    },
    {
      q: "What is the difference between the Factory and the Prototype pattern?",
      options: [
        "Factory creates via constructors; Prototype clones an existing instance", "They are identical", "Prototype uses constructors", "Factory clones",
      ],
      answer: 0,
      explain: "Factory creates new objects through construction logic. Prototype produces new objects by cloning an existing prototype.",
    },
    {
      q: "What is the purpose of the Gatekeeper/Sentry (ScopeGuard) idiom in C++?",
      options: [
        "Running cleanup automatically on scope exit, ensuring resource release", "Creating objects", "Sorting", "Managing threads",
      ],
      answer: 0,
      explain: "A ScopeGuard captures a cleanup lambda that runs on scope exit (success or failure), guaranteeing cleanup without manual code.",
    },
    {
      q: "What is the difference between the Bridge and the Adapter in terms of intent?",
      options: [
        "Bridge decouples abstraction from implementation by design; Adapter reconciles existing interfaces", "They are identical", "Adapter is by design", "Bridge reconciles",
      ],
      answer: 0,
      explain: "Bridge is intentional upfront decoupling. Adapter is a retrofit to make existing incompatible classes cooperate.",
    },
    {
      q: "What is the purpose of the Broker pattern?",
      options: [
        "Decoupling clients and services via a central broker for remote calls", "Creating singletons", "Sorting", "Managing memory",
      ],
      answer: 0,
      explain: "The Broker pattern centralizes communication so clients and services do not know each other directly, often used in distributed systems.",
    },
    {
      q: "What is the purpose of the Backpressure pattern in systems?",
      options: [
        "Slowing a fast producer when a consumer cannot keep up","Sorting","Creating objects","Managing memory",
      ],
      answer: 0,
      explain: "Backpressure throttles a producer when the consumer is slower, preventing buffer overflow and overload in pipelines.",
    },
    {
      q: "What is the difference between the Command and the Strategy in terms of state?",
      options: [
        "A Command often carries state and supports undo; a Strategy is stateless algorithm selection","They are identical","Strategy carries state","Command is stateless",
      ],
      answer: 0,
      explain: "A Command encapsulates an operation with its parameters and undo info. A Strategy is an interchangeable algorithm, typically stateless.",
    },
    {
      q: "What is the purpose of the Event-driven architecture pattern?",
      options: [
        "Components react to events asynchronously rather than calling each other directly","Sorting","Creating singletons","Managing memory",
      ],
      answer: 0,
      explain: "In event-driven architecture, components communicate via events, decoupling producers from consumers and enabling loose coupling.",
    },
    {
      q: "What is the difference between the Observer and the Event pattern?",
      options: [
        "Observer is a specific class relationship; Event pattern is a broader messaging style","They are identical","Event is direct","Observer is broad",
      ],
      answer: 0,
      explain: "Observer is a concrete design pattern with subjects and observers. Event-driven is a broader architectural style using events for decoupling.",
    },
    {
      q: "What is the purpose of the Factory in a testing context?",
      options: [
        "Letting tests inject fake implementations without changing code","Creating singletons","Sorting","Managing memory",
      ],
      answer: 0,
      explain: "Factories allow dependency injection so tests can provide mock/fake implementations, improving testability.",
    },
    {
      q: "What is the difference between a concrete class and an abstract class in testing?",
      options: [
        "Abstract classes define contracts that can be mocked; concrete classes are used directly","They are identical","Concrete classes are mocked","Abstract classes are instantiated",
      ],
      answer: 0,
      explain: "Abstract interfaces let tests substitute mocks/stubs. Concrete classes are used directly and are harder to replace.",
    },
    {
      q: "What is the purpose of the Dependency Inversion for testing?",
      options: [
        "Depending on interfaces lets tests substitute fakes easily","Depends on concrete","Sorts","Manages memory",
      ],
      answer: 0,
      explain: "DIP (depend on abstractions) makes classes testable by allowing fake dependencies to be injected.",
    },
    {
      q: "What is the difference between the Adapter and Facade in complexity?",
      options: [
        "Adapter wraps one class to match an interface; Facade wraps many classes into a simple interface","They are identical","Facade wraps one class","Adapter wraps many",
      ],
      answer: 0,
      explain: "Adapter typically involves one class. Facade hides a whole subsystem behind a single simplified interface.",
    },
    {
      q: "What is the purpose of the Identity Map pattern?",
      options: [
        "Ensuring each database row maps to a single object instance in a transaction","Sorting","Creating objects","Managing memory",
      ],
      answer: 0,
      explain: "The Identity Map pattern caches loaded objects by key, ensuring consistency so the same record is not loaded twice.",
    },
    {
      q: "What is the difference between the Unit of Work and Repository patterns?",
      options: [
        "Unit of Work tracks changes for one commit; Repository abstracts data access","They are identical","Repository tracks changes","Unit of Work abstracts access",
      ],
      answer: 0,
      explain: "A Repository handles querying/storing entities. A Unit of Work tracks pending changes to commit them as a unit (transaction).",
    },
    {
      q: "What is the purpose of the Extension Object pattern?",
      options: [
        "Allowing an object's interface to be extended with additional objects at runtime","Sorting","Creating singletons","Managing memory",
      ],
      answer: 0,
      explain: "The Extension Object pattern attaches additional functionality to an object dynamically, avoiding changes to the base class.",
    },
    {
      q: "What is the difference between the Proxy and the Decorator in terms of intent?",
      options: [
        "Proxy controls access to an object; Decorator adds behavior","They are identical","Decorator controls access","Proxy adds behavior",
      ],
      answer: 0,
      explain: "A Proxy controls access (lazy loading, security, remote). A Decorator dynamically adds responsibilities without changing the interface.",
    },
    {
      q: "What is the purpose of the Double-Checked Locking idiom?",
      options: [
        "Reducing locking overhead in a lazy Singleton with two checks","A deadlock","Sorting","Managing memory",
      ],
      answer: 0,
      explain: "Double-checked locking checks a flag first (no lock), then locks only if not initialized. C++11 local statics make manual DCL unnecessary.",
    },
    {
      q: "What is the difference between the lazy and eager Singleton?",
      options: [
        "Lazy creates on first use; eager creates at startup","They are identical","Eager creates on first use","Lazy creates at startup",
      ],
      answer: 0,
      explain: "A lazy Singleton is created on first access. An eager Singleton is created at program startup (or via static init).",
    },
    {
      q: "What is the purpose of the RAII-based lock guard vs manual lock/unlock?",
      options: [
        "RAII ensures unlock even on exceptions; manual unlock can be skipped","Manual is safer","They are identical","RAII never locks",
      ],
      answer: 0,
      explain: "RAII (lock_guard) releases the mutex automatically on scope exit, guaranteeing unlock even if an exception is thrown.",
    },
    {
      q: "What is the difference between the Composite and the Tree data structure?",
      options: [
        "Composite is a pattern for uniform treatment of parts; a tree is the underlying structure","They are identical","A tree is a pattern","Composite is a data structure",
      ],
      answer: 0,
      explain: "The Composite pattern treats leaves and composites uniformly. A tree is the hierarchical data structure that composites often use.",
    },
    {
      q: "What is the purpose of the Mediator in UI systems?",
      options: [
        "Centralizing widget communication to reduce coupling","Creating widgets","Sorting","Managing memory",
      ],
      answer: 0,
      explain: "In UI, a Mediator coordinates between widgets (e.g., a dialog controlling its controls) instead of widgets referencing each other.",
    },
    {
      q: "What is the difference between the Observer and the Signal/Slot?",
      options: [
        "Observer is manual; Signal/Slot is a more flexible callback mechanism (Qt)","They are identical","Observer is callback-based","Signal/Slot is manual",
      ],
      answer: 0,
      explain: "Signal/Slot (Qt) is a dynamic callback mechanism where signals connect to slots, arguably more flexible than the manual Observer pattern.",
    },
    {
      q: "What is the purpose of the Model-View-Controller (MVC) pattern?",
      options: [
        "Separating data (Model), presentation (View), and logic (Controller)","Creating singletons","Sorting","Managing memory",
      ],
      answer: 0,
      explain: "MVC separates concerns: Model holds data/business logic, View renders it, Controller handles input — improving maintainability.",
    },
    {
      q: "What is the difference between MVC and MVP patterns?",
      options: [
        "MVP's Presenter drives the View; MVC's Controller responds to input","They are identical","MVC's presenter drives","MVP's controller responds",
      ],
      answer: 0,
      explain: "In MVC the Controller reacts to input and updates the Model/View. In MVP the Presenter mediates and drives the passive View.",
    },
    {
      q: "What is the purpose of the Model-View-ViewModel (MVVM) pattern?",
      options: [
        "Separating UI (View) from data logic (ViewModel), enabling data binding","Creating singletons","Sorting","Managing memory",
      ],
      answer: 0,
      explain: "MVVM separates the View (UI) from the ViewModel (data/bindings), which itself uses the Model, enabling testable, bindable UI.",
    },
    {
      q: "What is the difference between MVC and MVVM?",
      options: [
        "MVVM uses a ViewModel with data binding; MVC's Controller directly manipulates the View/Model","They are identical","MVC uses a ViewModel","MVVM's controller responds",
      ],
      answer: 0,
      explain: "MVVM relies on data binding and a ViewModel for UI logic. MVC's Controller handles input and updates the Model/View directly.",
    },
    {
      q: "What is the purpose of the Data Transfer Object (DTO) pattern?",
      options: [
        "Carrying data between layers without business logic","Creating singletons","Sorting","Managing memory",
      ],
      answer: 0,
      explain: "A DTO is a plain data carrier used to move data between layers (e.g., UI to service) without business logic.",
    },
    {
      q: "What is the difference between a DTO and a Value Object?",
      options: [
        "A DTO moves data across boundaries; a Value Object is an immutable domain value with equality","They are identical","A Value Object moves data","A DTO is immutable",
      ],
      answer: 0,
      explain: "A DTO is for data transfer and has no behavior. A Value Object is an immutable domain concept with value equality.",
    },
    {
      q: "What is the purpose of the DAO (Data Access Object) pattern?",
      options: ["Abstracts database access for an entity","Creates singletons","Sorts","Manages memory"],
      answer: 0,
      explain: "A DAO encapsulates the CRUD operations for a single entity or table, isolating persistence details.",
    },
    {
      q: "What is the difference between a Repository and a DAO?",
      options: [
        "A Repository returns domain objects with a collection-like API; a DAO performs low-level CRUD","They are identical","A DAO returns domain objects","A Repository does low-level CRUD",
      ],
      answer: 0,
      explain: "A Repository works at a higher level with domain objects and queries; a DAO is closer to the database with CRUD primitives.",
    },
    {
      q: "What is the purpose of the Object Pool pattern?",
      options: [
        "Reusing expensive objects instead of creating/destroying them repeatedly","Creating singletons","Sorting","Managing memory",
      ],
      answer: 0,
      explain: "An Object Pool reuses a set of expensive-to-create objects, improving performance when object creation is costly.",
    },
    {
      q: "What is the difference between an Object Pool and a Singleton?",
      options: [
        "A pool holds many reusable instances; a Singleton holds exactly one instance","They are identical","A Singleton holds many","A pool holds one",
      ],
      answer: 0,
      explain: "A Singleton ensures a single instance. An Object Pool manages multiple instances for reuse.",
    },
    {
      q: "What is the purpose of the Free List (memory pool) pattern?",
      options: [
        "Fast allocation of same-size objects from a preallocated pool","Creating singletons","Sorting","Hashing",
      ],
      answer: 0,
      explain: "A free list allocates fixed-size objects from a preallocated pool with O(1) alloc/dealloc, avoiding heap fragmentation.",
    },
    {
      q: "What is the difference between the Adapter pattern and the Bridge pattern in terms of interface?",
      options: [
        "Adapter makes an interface compatible; Bridge separates abstraction from implementation","They are identical","Bridge makes compatible","Adapter separates",
      ],
      answer: 0,
      explain: "Adapter reconciles an existing interface with what the client expects. Bridge decouples an abstraction from its implementation by design.",
    },
  ],
  boss: {
    q: "You are building a thread-safe Singleton in C++11. What is the correct, idiomatic implementation?",
    options: [
      "A raw static pointer with manual locking",
      "A function-local static variable (Meyers' Singleton)",
      "A global variable",
      "A static member initialized in the header",
    ],
    answer: 1,
    explain: "The Meyers' Singleton uses a function-local static: 'static Singleton& get() { static Singleton s; return s; }'. In C++11+, local statics are initialized in a thread-safe way, so no explicit locking is needed.",
  },
};
