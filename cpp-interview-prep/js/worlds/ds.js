/* ============================================================
   WORLD: Data Structures
   ============================================================ */

const WORLD_DS = {
  id: "ds",
  name: "Data Structures",
  icon: "▤",
  tagline: "Containers, complexity, and when to use what.",
  color: "#81c784",
  questions: [
    {
      q: "What is the average time complexity of std::vector::push_back?",
      options: ["O(1) amortized", "O(n)", "O(log n)", "O(n²)"],
      answer: 0,
      explain: "push_back is O(1) amortized: occasional reallocation costs O(n), but averaged over many insertions it is constant time.",
    },
    {
      q: "Which container is best for frequent insertions/deletions in the middle?",
      options: ["std::vector", "std::list", "std::array", "std::string"],
      answer: 1,
      explain: "std::list (doubly-linked list) supports O(1) insertion/deletion at a known position. std::vector requires shifting elements (O(n)).",
    },
    {
      q: "What is the time complexity of a std::map lookup?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 2,
      explain: "std::map is a balanced binary search tree (typically red-black), so lookups are O(log n). std::unordered_map gives O(1) average.",
    },
    {
      q: "What is the difference between std::map and std::unordered_map?",
      options: [
        "map is sorted (O(log n)), unordered_map is hash-based (O(1) average)",
        "map is faster than unordered_map always",
        "unordered_map is always sorted",
        "There is no difference",
      ],
      answer: 0,
      explain: "std::map is a sorted tree (O(log n) ops, ordered iteration). std::unordered_map is a hash table (O(1) average ops, no ordering).",
    },
    {
      q: "What is the time complexity of std::sort on a random-access container?",
      options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
      answer: 1,
      explain: "std::sort is introsort, a hybrid of quicksort/heapsort/insertion sort, giving O(n log n) average and worst case.",
    },
    {
      q: "Which data structure is a std::priority_queue built on?",
      options: ["A linked list", "A hash table", "A binary heap", "A balanced tree"],
      answer: 2,
      explain: "std::priority_queue is a max-heap (by default) implemented as a binary heap over a vector. push/pop are O(log n), top is O(1).",
    },
    {
      q: "What is the difference between a stack and a queue?",
      options: [
        "Stack is LIFO, queue is FIFO",
        "Stack is FIFO, queue is LIFO",
        "They are identical",
        "Stack is sorted, queue is not",
      ],
      answer: 0,
      explain: "A stack is Last-In-First-Out (push/pop at the top). A queue is First-In-First-Out (enqueue at back, dequeue at front).",
    },
    {
      q: "What is the time complexity of std::binary_search on a sorted std::vector?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 2,
      explain: "std::binary_search on a sorted random-access range is O(log n) using binary search.",
    },
    {
      q: "What is the main advantage of a std::deque over a std::vector?",
      options: [
        "O(1) insertion at both the front and back",
        "It is always sorted",
        "It uses less memory",
        "It is thread-safe",
      ],
      answer: 0,
      explain: "std::deque supports O(1) push/pop at both ends, unlike vector which is O(n) for front insertion. It is implemented as a sequence of fixed-size blocks.",
    },
    {
      q: "What is the time complexity of std::unordered_map::find in the average case?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      answer: 0,
      explain: "A hash table gives O(1) average-case lookup. Worst case (many collisions) degrades to O(n), but with a good hash it is effectively constant.",
    },
    {
      q: "What is the time complexity of accessing an element in a std::vector by index?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      answer: 0,
      explain: "std::vector stores elements contiguously, so random access by index is O(1) — just pointer arithmetic on the base address.",
    },
    {
      q: "Which container would you use for a last-in-first-out stack-like behavior?",
      options: ["std::stack", "std::queue", "std::deque", "std::priority_queue"],
      answer: 0,
      explain: "std::stack is a LIFO adapter with push/pop/top at one end. (A std::deque or vector can also back it.)",
    },
    {
      q: "What is the time complexity of inserting into an unsorted std::vector at the front?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 1,
      explain: "Inserting at the front of a vector requires shifting all existing elements, so it is O(n). A std::deque does front insertion in O(1).",
    },
    {
      q: "What is the main characteristic of a std::unordered_set?",
      options: ["Hash-based, no ordering, O(1) average membership", "Sorted, ordered iteration", "It allows duplicates", "It is a linked list"],
      answer: 0,
      explain: "std::unordered_set is a hash table storing unique elements with O(1) average insert/find/erase and no ordering. Use std::set for sorted order.",
    },
    {
      q: "What is the time complexity of std::priority_queue::push?",
      options: ["O(log n)", "O(1)", "O(n)", "O(n log n)"],
      answer: 0,
      explain: "A binary heap push sifts the element up, O(log n). top() is O(1).",
    },
    {
      q: "Which container preserves insertion order AND allows duplicate values?",
      options: ["std::vector", "std::set", "std::unordered_set", "std::map"],
      answer: 0,
      explain: "std::vector preserves insertion order and allows duplicates. std::set sorts and deduplicates.",
    },
    {
      q: "What is the difference between std::array and std::vector?",
      options: [
        "array is fixed-size on the stack; vector is dynamic on the heap",
        "array is dynamic; vector is fixed",
        "They are identical",
        "array can change size",
      ],
      answer: 0,
      explain: "std::array has a fixed compile-time size and stores elements inline. std::vector manages a dynamically resizable heap buffer.",
    },
    {
      q: "What is the time complexity of a std::map insertion?",
      options: ["O(log n)", "O(1)", "O(n)", "O(n log n)"],
      answer: 0,
      explain: "std::map is a balanced BST, so insertion is O(log n) by finding the correct position in the tree.",
    },
    {
      q: "What is a hash collision?",
      options: [
        "Two different keys hashing to the same bucket",
        "Two identical keys",
        "An empty bucket",
        "A full array",
      ],
      answer: 0,
      explain: "A collision occurs when different keys map to the same bucket. Hash tables resolve collisions via chaining (a list per bucket) or open addressing.",
    },
    {
      q: "What is the worst-case time complexity of an unordered_map lookup with many collisions?",
      options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
      answer: 0,
      explain: "If all keys collide into one bucket, lookup degrades to O(n) — scanning the chain. A good hash function and load factor keep it near O(1) average.",
    },
    {
      q: "What is the difference between a std::list and a std::vector?",
      options: [
        "list is a doubly-linked list (O(1) splice, slow access); vector is contiguous (O(1) access)",
        "They are identical",
        "vector is a linked list",
        "list has O(1) random access",
      ],
      answer: 0,
      explain: "std::list supports O(1) insertion/deletion anywhere and fast splicing but no random access. std::vector gives O(1) index access but O(n) middle insertion.",
    },
    {
      q: "What is the time complexity of std::list::begin?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      answer: 0,
      explain: "A linked list stores a head pointer, so getting the first element is O(1).",
    },
    {
      q: "Which container gives O(1) random access and fast middle insertion?",
      options: ["std::vector", "std::list", "std::deque", "None — no single container gives both"],
      answer: 3,
      explain: "No single std container gives both O(1) random access AND fast middle insertion. vector is good at access; list is good at insertion. Choose per access pattern.",
    },
    {
      q: "What is the difference between a std::multiset and a std::set?",
      options: ["multiset allows duplicates; set stores unique keys", "They are identical", "set allows duplicates", "multiset is unsorted"],
      answer: 0,
      explain: "std::set stores unique elements. std::multiset allows multiple equivalent elements. Both are sorted.",
    },
    {
      q: "What is a binary search tree's worst-case height?",
      options: ["O(n) if unbalanced", "O(log n) always", "O(1)", "O(n²)"],
      answer: 0,
      explain: "An unbalanced BST can degenerate into a chain, giving O(n) height. Self-balancing trees (red-black, AVL) guarantee O(log n).",
    },
    {
      q: "What is the time complexity of inserting into a std::unordered_map?",
      options: ["O(1) average", "O(log n)", "O(n) always", "O(n²)"],
      answer: 0,
      explain: "A hash table inserts in O(1) average. Worst case (rehash/collisions) can be O(n).",
    },
    {
      q: "What is a std::forward_list?",
      options: ["A singly-linked list", "A doubly-linked list", "A hash table", "A dynamic array"],
      answer: 0,
      explain: "std::forward_list is a singly-linked list. It is more memory-efficient than list (no back pointer) but only supports forward iteration.",
    },
    {
      q: "What is the time complexity of removing an element from a std::set?",
      options: ["O(log n)", "O(1)", "O(n)", "O(n log n)"],
      answer: 0,
      explain: "std::set is a balanced tree, so erase is O(log n).",
    },
    {
      q: "What data structure would you use to implement a graph's adjacency list?",
      options: ["A map of nodes to vectors/lists of neighbors", "A single array", "A stack", "A queue"],
      answer: 0,
      explain: "An adjacency list maps each node to its neighbors, often std::unordered_map<Node, std::vector<Node>>, giving efficient traversal.",
    },
    {
      q: "What is the difference between depth-first and breadth-first search?",
      options: [
        "DFS goes deep first (stack); BFS explores level by level (queue)",
        "They are identical",
        "DFS uses a queue",
        "BFS goes deep first",
      ],
      answer: 0,
      explain: "DFS uses a stack (or recursion) to go as deep as possible before backtracking. BFS uses a queue to explore neighbors level by level, ideal for shortest path in unweighted graphs.",
    },
    {
      q: "What is the time complexity of BFS on a graph with V vertices and E edges?",
      options: ["O(V+E)", "O(V²)", "O(E log V)", "O(V log V)"],
      answer: 0,
      explain: "BFS visits each vertex once and each edge once, so it is O(V+E).",
    },
    {
      q: "What is the time complexity of DFS on a graph?",
      options: ["O(V+E)", "O(log V)", "O(V²)", "O(E log V)"],
      answer: 0,
      explain: "DFS also visits each vertex and edge once, so it is O(V+E).",
    },
    {
      q: "What is the time complexity of Dijkstra's algorithm with a binary heap?",
      options: ["O((V+E) log V)", "O(V+E)", "O(V²)", "O(E)"],
      answer: 0,
      explain: "Dijkstra's with a binary-heap priority queue relaxes each edge and extracts each vertex, giving O((V+E) log V).",
    },
    {
      q: "What is a hash function's requirement for a std::unordered_map key?",
      options: ["It must be hashable and equality-comparable", "It must be sortable", "It must be an integer", "It must be const"],
      answer: 0,
      explain: "unordered_map keys need a hash function (std::hash) and an equality operator. Sorted containers like map only require operator<.",
    },
    {
      q: "Which container would you use to track visited nodes in a graph efficiently?",
      options: ["std::unordered_set", "std::vector", "std::list", "std::deque"],
      answer: 0,
      explain: "An unordered_set gives O(1) average membership checks, ideal for tracking visited nodes.",
    },
    {
      q: "What is the time complexity of finding the minimum in a sorted std::vector?",
      options: ["O(1) — it is the first element", "O(n)", "O(log n)", "O(n log n)"],
      answer: 0,
      explain: "In ascending sorted order the minimum is the first element, so it is O(1).",
    },
    {
      q: "What is the difference between a min-heap and a max-heap?",
      options: [
        "Min-heap has the smallest at the root; max-heap has the largest at the root",
        "They are identical",
        "Max-heap has the smallest at root",
        "Min-heap is unsorted",
      ],
      answer: 0,
      explain: "A min-heap keeps the smallest element at the root (top() gives min). A max-heap keeps the largest at the root.",
    },
    {
      q: "What is the time complexity of building a heap from n elements?",
      options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
      answer: 0,
      explain: "Heapify (building a heap from an unsorted array) is O(n) using Floyd's algorithm, despite each sift being O(log n).",
    },
    {
      q: "What is a trie used for?",
      options: [
        "Efficient prefix matching and autocomplete over strings",
        "Sorting numbers",
        "Storing key-value pairs",
        "A stack implementation",
      ],
      answer: 0,
      explain: "A trie (prefix tree) stores strings by shared prefixes, enabling fast prefix search, autocomplete, and dictionary lookups.",
    },
    {
      q: "What is the time complexity of a std::string find?",
      options: ["O(n) average", "O(1)", "O(log n)", "O(n²) always"],
      answer: 0,
      explain: "std::string::find uses an efficient algorithm (often linear average) so searching for a substring is roughly O(n) in the string length.",
    },
    {
      q: "What is the time complexity of a balanced binary search tree search?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
      answer: 0,
      explain: "A balanced BST (AVL, red-black) keeps height O(log n), so search is O(log n).",
    },
    {
      q: "What is the difference between a set and a map?",
      options: [
        "A set stores unique keys only; a map stores key-value pairs", "They are identical", "A map stores keys only", "A set stores pairs",
      ],
      answer: 0,
      explain: "A set stores just elements (keys). A map stores key-value pairs, letting you associate data with each key.",
    },
    {
      q: "What is the time complexity of sorting using std::sort vs std::stable_sort?",
      options: [
        "Both O(n log n); stable_sort preserves equal-element order but may use extra memory", "sort is O(n²)", "stable_sort is O(n)", "They differ in complexity",
      ],
      answer: 0,
      explain: "Both are O(n log n). std::stable_sort preserves the relative order of equal elements, possibly using O(n) extra memory.",
    },
    {
      q: "What is a std::span (C++20)?",
      options: [
        "A non-owning view over a contiguous sequence of elements", "An owning array", "A map", "A string",
      ],
      answer: 0,
      explain: "std::span is a non-owning view over a contiguous range (like a pointer+size), letting functions accept arrays/vectors without ownership.",
    },
    {
      q: "What is the difference between a vector's capacity and size?",
      options: [
        "Capacity is allocated storage; size is the number of valid elements", "They are identical", "Size is allocated", "Capacity is elements",
      ],
      answer: 0,
      explain: "Capacity is how many elements the vector can hold without reallocating. Size is how many elements are actually present (size <= capacity).",
    },
    {
      q: "What happens when a vector exceeds its capacity?",
      options: [
        "It reallocates to a larger buffer and moves/copies elements", "It throws", "It drops elements", "It shrinks",
      ],
      answer: 0,
      explain: "On exceeding capacity, the vector allocates a larger buffer and moves (or copies) the existing elements into it, typically growing geometrically.",
    },
    {
      q: "What is the time complexity of accessing an element by index in a std::list?",
      options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
      answer: 0,
      explain: "A linked list has no random access, so reaching index i requires walking O(n) nodes.",
    },
    {
      q: "Which container would you choose for a large fixed-size numeric buffer you will index frequently?",
      options: ["std::vector", "std::list", "std::map", "std::unordered_map"],
      answer: 0,
      explain: "For frequent indexed access to numeric data, std::vector (or std::array) gives O(1) contiguous access and cache friendliness.",
    },
    {
      q: "What is the difference between std::lower_bound and std::upper_bound?",
      options: [
        "lower_bound finds first element >= value; upper_bound finds first element > value", "They are identical", "lower_bound is for upper", "upper_bound finds < value",
      ],
      answer: 0,
      explain: "In a sorted range, lower_bound returns the first position where value could be inserted (>=), upper_bound the first > value. Both O(log n).",
    },
    {
      q: "What is the time complexity of std::equal_range?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
      answer: 0,
      explain: "std::equal_range on a sorted range returns the range of equal elements via two binary searches, O(log n).",
    },
    {
      q: "What is the time complexity of std::vector::insert at the end?",
      options: ["O(1) amortized", "O(n)", "O(log n)", "O(n²)"],
      answer: 0,
      explain: "push_back at the end is O(1) amortized thanks to geometric growth.",
    },
    {
      q: "What is the time complexity of std::unordered_map::erase?",
      options: ["O(1) average", "O(log n)", "O(n)", "O(n log n)"],
      answer: 0,
      explain: "Erasing from a hash table is O(1) average.",
    },
    {
      q: "What is the difference between a std::map and a std::unordered_map for iteration order?",
      options: [
        "map iterates in key order; unordered_map has no defined order", "They iterate identically", "unordered_map sorts keys", "map is unsorted",
      ],
      answer: 0,
      explain: "std::map (tree) iterates in sorted key order. std::unordered_map (hash) has no meaningful iteration order.",
    },
    {
      q: "What is a circular buffer?",
      options: [
        "A fixed-size FIFO buffer that overwrites oldest data when full", "A linked list", "A hash table", "A sorted array",
      ],
      answer: 0,
      explain: "A circular buffer (ring buffer) uses a fixed array with head/tail pointers that wrap around, ideal for streaming/FIFO with bounded memory.",
    },
    {
      q: "What is the time complexity of std::vector::pop_back?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 0,
      explain: "Removing the last element of a vector is O(1); it does not need to shift elements.",
    },
    {
      q: "What is the difference between a linked list and an array for memory locality?",
      options: [
        "An array is contiguous (cache-friendly); a linked list is scattered (poor locality)", "They are equal", "A list is contiguous", "An array is scattered",
      ],
      answer: 0,
      explain: "Arrays store elements contiguously, leveraging CPU cache. Linked lists store nodes non-contiguously, causing cache misses.",
    },
    {
      q: "What is a hash table's load factor?",
      options: ["Ratio of stored elements to bucket count", "The hash value", "The key", "The bucket size"],
      answer: 0,
      explain: "Load factor = elements / buckets. When it exceeds a threshold, the table rehashes to more buckets to keep collisions low.",
    },
    {
      q: "What is the time complexity of finding an element in a std::set?",
      options: ["O(log n)", "O(1)", "O(n)", "O(n log n)"],
      answer: 0,
      explain: "std::set is a balanced tree, so find is O(log n).",
    },
    {
      q: "What is the difference between a tree and a graph?",
      options: [
        "A tree is an acyclic connected graph with one root; a graph can have cycles", "They are identical", "A graph is acyclic", "A tree has cycles",
      ],
      answer: 0,
      explain: "A tree is a connected acyclic graph with a single root and no cycles. A general graph allows cycles and multiple connections.",
    },
    {
      q: "What is the time complexity of a graph topological sort using Kahn's algorithm?",
      options: ["O(V+E)", "O(V²)", "O(log V)", "O(E log V)"],
      answer: 0,
      explain: "Topological sort processes each vertex and edge once, so it is O(V+E).",
    },
    {
      q: "What is the time complexity of std::sort for a list?",
      options: ["std::list has its own O(n log n) sort", "O(n²)", "It cannot be sorted", "O(1)"],
      answer: 0,
      explain: "std::list provides its own sort() (merge sort) running in O(n log n). std::sort requires random-access iterators, which a list lacks.",
    },
    {
      q: "What is the difference between std::adjacent_find and std::find?",
      options: [
        "adjacent_find finds the first pair of equal adjacent elements; find finds a single value", "They are identical", "find finds adjacent", "adjacent_find finds a value",
      ],
      answer: 0,
      explain: "std::find searches for a specific value. std::adjacent_find finds the first location where two consecutive elements are equal.",
    },
    {
      q: "What is the time complexity of std::copy for a range?",
      options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
      answer: 0,
      explain: "Copying n elements is O(n) — one operation per element.",
    },
    {
      q: "What is the difference between std::unique and std::remove?",
      options: [
        "unique removes adjacent duplicates in a sorted range; remove moves matching values to the end", "They are identical", "remove removes duplicates", "unique moves to end",
      ],
      answer: 0,
      explain: "std::unique collapses adjacent equal elements (sorted). std::remove moves elements matching a value to the end; erase them after (remove-erase idiom).",
    },
    {
      q: "What is the erase-remove idiom?",
      options: [
        "Combining std::remove with erase to actually shrink a container", "Removing an iterator", "Sorting", "Copying",
      ],
      answer: 0,
      explain: "std::remove only rearranges (returns a new end). You must call erase to remove the leftover tail, forming the erase-remove idiom.",
    },
    {
      q: "What is the time complexity of std::accumulate?",
      options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
      answer: 0,
      explain: "accumulate sums over n elements in O(n).",
    },
    {
      q: "What is the difference between a vector and a C array for returning from a function?",
      options: [
        "A vector can be returned safely by value; a C array decays and loses size", "They are identical", "C arrays can be returned", "Vectors cannot be returned",
      ],
      answer: 0,
      explain: "std::vector is a value type that returns safely (with move/copy). A C array decays to a pointer when passed/returned, losing its size.",
    },
    {
      q: "What is the purpose of std::inplace_merge?",
      options: [
        "Merges two sorted halves of a range in place, O(n)", "Sorts", "Copies", "Finds",
      ],
      answer: 0,
      explain: "std::inplace_merge merges two already-sorted adjacent ranges within a container into one sorted range.",
    },
    {
      q: "What is the difference between a matrix stored as vector<vector> and a flat vector?",
      options: [
        "A flat vector is contiguous and cache-friendly; vector<vector> has per-row allocations", "They are identical", "vector<vector> is contiguous", "A flat vector is scattered",
      ],
      answer: 0,
      explain: "A flat 1D vector with row-major indexing is contiguous and cache-friendly, often faster than vector<vector> with separate row allocations.",
    },
    {
      q: "What is the time complexity of std::nth_element?",
      options: ["O(n) average", "O(n log n)", "O(n²)", "O(log n)"],
      answer: 0,
      explain: "std::nth_element partially sorts so the nth element is in place, in O(n) average — cheaper than a full sort.",
    },
    {
      q: "What is the time complexity of std::set::lower_bound?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
      answer: 0,
      explain: "std::set provides its own lower_bound using tree traversal, O(log n).",
    },
    {
      q: "What is the difference between std::multimap and std::map?",
      options: [
        "multimap allows duplicate keys; map requires unique keys", "They are identical", "map allows duplicates", "multimap has unique keys",
      ],
      answer: 0,
      explain: "std::multimap permits multiple elements with the same key; std::map requires unique keys.",
    },
    {
      q: "What is the time complexity of std::unordered_multiset::insert?",
      options: ["O(1) average", "O(log n)", "O(n)", "O(n²)"],
      answer: 0,
      explain: "A hash-based multiset inserts in O(1) average.",
    },
    {
      q: "What is a priority queue used for in algorithm design?",
      options: [
        "Always extracting the min/max element efficiently, e.g., Dijkstra's, Huffman coding", "Sorting an array", "A FIFO", "A stack",
      ],
      answer: 0,
      explain: "A priority queue repeatedly yields the highest/lowest-priority element in O(log n), used in Dijkstra, A*, Huffman, and scheduling.",
    },
    {
      q: "What is the time complexity of a binary search on a sorted array?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n²)"],
      answer: 0,
      explain: "Binary search halves the search space each step, giving O(log n).",
    },
    {
      q: "What is the difference between a BST and a heap for finding the min?",
      options: [
        "A min-heap's min is at the root O(1); a BST's min is leftmost O(log n)","They are identical","A BST's min is O(1)","A heap's min is O(log n)",
      ],
      answer: 0,
      explain: "In a min-heap the minimum is always the root (O(1)). In a BST the minimum is the leftmost node, found in O(log n).",
    },
    {
      q: "What is a self-balancing binary tree?",
      options: [
        "A tree that automatically keeps its height O(log n) (e.g., AVL, red-black)","A tree that sorts","A heap","A linked list",
      ],
      answer: 0,
      explain: "Self-balancing trees (AVL, red-black) rebalance after insert/delete to maintain O(log n) height, avoiding degenerate chains.",
    },
    {
      q: "What is the time complexity of a red-black tree insertion?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n²)"],
      answer: 0,
      explain: "Red-black tree (std::map/set) insertion is O(log n) with rebalancing.",
    },
    {
      q: "What is the difference between an AVL tree and a red-black tree?",
      options: [
        "AVL is more strictly balanced (faster lookup, slower insert); red-black is looser (faster insert)","They are identical","Red-black is stricter","AVL is faster at insert",
      ],
      answer: 0,
      explain: "AVL trees are strictly height-balanced, giving faster lookups but more rotations on insert. Red-black trees are loosely balanced, with faster insert/delete.",
    },
    {
      q: "What is the time complexity of checking if a hash table needs rehashing?",
      options: ["O(1) per insert check","O(n)","O(log n)","O(n²)"],
      answer: 0,
      explain: "The load factor check is O(1) per insert; when exceeded, a full rehash is O(n) amortized over many inserts.",
    },
    {
      q: "What is the time complexity of std::unordered_map::count?",
      options: ["O(1) average", "O(log n)", "O(n)", "O(n²)"],
      answer: 0,
      explain: "count on an unordered_map is O(1) average (0 or 1 since keys are unique).",
    },
    {
      q: "What is the difference between a graph's adjacency matrix and adjacency list?",
      options: [
        "Matrix is O(V²) memory with O(1) edge checks; list is O(V+E) memory","They are identical","List uses O(V²)","Matrix uses O(V+E)",
      ],
      answer: 0,
      explain: "An adjacency matrix stores V² entries (fast edge lookup, high memory). An adjacency list stores edges per node (memory-efficient).",
    },
    {
      q: "What is the time complexity of a Floyd-Warshall all-pairs shortest path?",
      options: ["O(V³)", "O(V+E)", "O(E log V)", "O(V²)"],
      answer: 0,
      explain: "Floyd-Warshall uses three nested loops over vertices, O(V³).",
    },
    {
      q: "What is the time complexity of Kruskal's MST algorithm?",
      options: ["O(E log E)", "O(V+E)", "O(V²)", "O(E)"],
      answer: 0,
      explain: "Kruskal sorts edges (O(E log E)) and uses a disjoint-set, giving O(E log E) overall.",
    },
    {
      q: "What is the purpose of a union-find (disjoint-set) structure?",
      options: [
        "Efficiently tracking connected components and union/merge operations","Sorting","Storing key-values","A queue",
      ],
      answer: 0,
      explain: "Union-find supports find and union in near-O(1) (inverse Ackermann) with path compression, used in Kruskal and connected-component problems.",
    },
    {
      q: "What is the time complexity of std::string::length?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      answer: 0,
      explain: "std::string stores its length, so length() is O(1) (unlike C strings that must scan).",
    },
    {
      q: "What is the difference between std::string concatenation with + and append?",
      options: [
        "+ creates a new string; append modifies the existing string","They are identical","append creates a new string","+ modifies in place",
      ],
      answer: 0,
      explain: "s1 + s2 returns a new combined string. s1.append(s2) modifies s1 in place.",
    },
    {
      q: "What is the purpose of std::string's reserve?",
      options: [
        "Pre-allocating capacity to avoid reallocations during growth","Resizing the string","Clearing the string","A cast",
      ],
      answer: 0,
      explain: "reserve(n) allocates capacity for at least n characters, avoiding repeated reallocations when appending.",
    },
    {
      q: "What is the difference between std::string::find and std::string::find_first_of?",
      options: [
        "find searches for a whole substring; find_first_of searches for any of the given characters","They are identical","find_first_of finds a substring","find finds any character",
      ],
      answer: 0,
      explain: "str.find(sub) looks for an exact substring. str.find_first_of(chars) returns the first position where any character in the set appears.",
    },
    {
      q: "What is the purpose of std::string::substr?",
      options: ["Extracts a substring starting at a position with a length","Splits the string","Reverses it","Sorts it"],
      answer: 0,
      explain: "substr(pos, len) returns a new string with characters from pos for len characters (or to the end).",
    },
    {
      q: "What is the time complexity of std::unordered_set::find?",
      options: ["O(1) average", "O(log n)", "O(n)", "O(n²)"],
      answer: 0,
      explain: "unordered_set is a hash table, so find is O(1) average.",
    },
    {
      q: "What is the difference between a dynamic array and a static array?",
      options: [
        "A dynamic array can resize (std::vector); a static array has a fixed compile-time size","They are identical","Static arrays resize","Dynamic arrays are fixed",
      ],
      answer: 0,
      explain: "A static array (int a[10]) has fixed size. A dynamic array (std::vector) can grow and shrink at runtime.",
    },
    {
      q: "What is the purpose of std::resize vs std::reserve on a vector?",
      options: [
        "resize changes the element count; reserve changes capacity without adding elements","They are identical","reserve changes size","resize changes capacity",
      ],
      answer: 0,
      explain: "resize(n) changes the number of elements (constructing/destroying). reserve(n) only ensures capacity without changing size.",
    },
    {
      q: "What is the time complexity of std::vector::erase at the end?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      answer: 0,
      explain: "Erasing the last element is O(1). Erasing in the middle is O(n) due to shifting.",
    },
    {
      q: "What is the difference between a single-linked and double-linked list?",
      options: [
        "Double-linked has both next and prev pointers; single-linked has only next","They are identical","Single has both","Double has only next",
      ],
      answer: 0,
      explain: "A doubly-linked list supports bidirectional traversal and O(1) removal given a node; a singly-linked list only forward.",
    },
    {
      q: "What is the time complexity of inserting at the head of a singly-linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      answer: 0,
      explain: "Inserting at the head of a linked list just updates the head pointer, O(1).",
    },
    {
      q: "What is the purpose of a sentinel node?",
      options: [
        "A dummy node simplifying edge cases (head/tail) in linked data structures","Sorting","Hashing","A buffer",
      ],
      answer: 0,
      explain: "A sentinel (dummy) node avoids special-casing empty lists and boundary insertions, simplifying linked-list code.",
    },
    {
      q: "What is the difference between std::stack and std::vector when used as a stack?",
      options: [
        "std::stack restricts the interface to LIFO; vector allows full access","They are identical","vector restricts LIFO","stack allows full access",
      ],
      answer: 0,
      explain: "std::stack is an adapter exposing only LIFO operations (push/pop/top), while a vector allows arbitrary access.",
    },
    {
      q: "What is the time complexity of std::stack::top?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      answer: 0,
      explain: "stack::top returns the last pushed element in O(1).",
    },
    {
      q: "What is the purpose of a balanced tree in a database index?",
      options: [
        "Maintaining O(log n) search/insert/delete on large sorted datasets","Sorting","Hashing","Caching",
      ],
      answer: 0,
      explain: "B-trees and balanced BSTs keep database lookups at O(log n) even for millions of records.",
    },
  ],
  boss: {
    q: "You need a container that supports O(1) average lookup by key AND preserves insertion order. Which standard container do you choose, and what is the trade-off?",
    options: [
      "std::map — it preserves order and gives O(log n) lookup",
      "std::unordered_map — O(1) lookup, but it does NOT preserve insertion order",
      "std::vector of pairs — O(1) lookup and preserves order",
      "std::list — O(1) lookup and preserves order",
    ],
    answer: 1,
    explain: "No single standard container gives both. std::unordered_map gives O(1) average lookup but no ordering. To preserve insertion order you must pair it with a separate ordered structure (e.g., a vector of keys) or use a custom 'ordered map'.",
  },
};
