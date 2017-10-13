class LRUCache
  attr_accessor :store

   def initialize(size)
     @size = size
     @store = Array.new
   end

   def count
     @store.dup.size
   end

   def add(el)
     if has_el?(el)
       @store.delete(el)
     elsif count == @size
       @store.shift
     end
     @store.push(el)
   end

   def show
     p @store
   end

   private

   def has_el?(el)
     return true if @store.include?(el)
     false
   end

 end

 p johnny_cache = LRUCache.new(4)

  p johnny_cache.add("I walk the line")
  p johnny_cache.add(5)

  p johnny_cache.count # => returns 2


  p johnny_cache.add([1,2,3])
  p johnny_cache.add(5)
  p johnny_cache.add(-5)
  p johnny_cache.add({a: 1, b: 2, c: 3})
  p johnny_cache.add([1,2,3,4])
  p johnny_cache.add("I walk the line")
  p johnny_cache.add(:ring_of_fire)
  p johnny_cache.add("I walk the line")
  p johnny_cache.add({a: 1, b: 2, c: 3})


  johnny_cache.show # => prints [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]
