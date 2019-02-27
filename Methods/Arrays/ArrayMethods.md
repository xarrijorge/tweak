# Here are the array medthod to be created in Javascript. Italicized Methods have been created already

## You can see the full list of Array methods available in Ruby 2.6.1 [HERE](https://ruby-doc.org/core-2.6.1/Array.html)

* clear - deletes all elements from self. Returns Empty Array
   ``` a = [ "a", "b", "c", "d", "e"  ]
     a.clear    #=> [ ]
   ```
* combine(n) - creates all combination of lenth n from self and returns the combination nested in an Array.
  ```
     a = [1,2,3,4]
     a.combine(1) => [[1],[2],[3],[4]]
     a.combine(2) => [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
     a.combine(3) => [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]
     a.combine(4) => [[1,2,3,4]]
     a.combine(0) => [[]] // one combination of length 0
     a.combine(5) => [] // no combination of length 5
  ``` 
* deleteAt(n) - delete element at index and returns element
 ```
     n = ["ant", "bat", "cat", "dog"]
     n.delete_at(2)    => "cat"
     n     => ["ant", "bat", "dog"]
     n.delete_at(99)   => nil // index is out of range
  ```
* difference(n) - Returns a new array, removing any items that appear in both of the arrays given as arguments. The order is preserved from the original array.
    ```
    [ 1, 1, 2, 2, 3, 3, 4, 5  ].difference([ 1, 2, 4  ])     => [ 3, 3, 5  ]
    [ 1, 'c', :s, 'yep'  ].difference([ 1  ], [ 'a', 'c'  ])  => [ :s, "yep"  ]
    ```
* drop(n=1) - Drops first n elements from ary and returns the rest of the elements in an array.If a negative number is given, raises an Error.
    ```
    a = [1, 2, 3, 4, 5, 0]
    a.drop(3)             #=> [4, 5, 0]
    ```
* isEmpty() - Returns true if self contains no elements.
   ```
   [].isEmpty() => true
   ```
* fetch(n,error) - Returns the element at position n, but throws an error (second argument)if the referenced index lies outside of the array bounds.
    ```
    a = [ 11, 22, 33, 44  ]
    a.fetch(1)               => 22
    a.fetch(-1)              => 44
    a.fetch(4, 'This isn't the index you're looking for')        => "this isn't the index you're looking for"
    ```
* fill
* first
* flatten
* last
* max
* min
* multiply
* rotate
* sample
* shuffle
* sum
* transpose
* unique
* valuesAt

