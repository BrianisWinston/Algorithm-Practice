# class Array
#   def merge_sort(&prc)
#     return self if length == 1
#
#     prc ||= proc { |x, y| x <=> y }
#
#     mid = length / 2
#     left = self[0...mid].merge_sort(&prc)
#     right = self[mid..-1].merge_sort(&prc)
#
#     merge(left, right, &prc)
#   end
#
#   def merge(l, r, &prc)
#     answer = []
#     while l.length != 0 && r.length != 0
#       if prc.call(l[0], r[0]) <= 0
#         answer << r.shift
#       else
#         answer << l.shift
#       end
#     end
#     answer.concat(l)
#     answer.concat(r)
#   end
# end

class Array
  def merge_sort(&prc)
    return self if self.length <= 1
    prc ||= proc { |x, y| x <=> y }

    mid = self.length / 2
    left = self[0...mid].merge_sort(&prc)
    right = self[mid..-1].merge_sort(&prc)

    merge(left, right, &prc)
  end

  def merge(l, r, &prc)
    answer = []
    while l.length != 0 && r.length != 0
      if prc.call(l[0], r[0]) == -1
        answer << r.shift
      else
        answer << l.shift
      end
    end

    answer.concat(l)
    answer.concat(r)
  end
end
prc1 = proc { |x, y| x <=> y }
prc2 = proc { |x, y| y <=> x }

p [100, 101, 59, 70, 0, 98].merge_sort
puts "[1, 2, 3, 4, 5].merge_sort(&prc1) === [5, 4, 3, 2, 1] ==> #{[1, 2, 3, 4, 5].merge_sort(&prc1) === [5, 4, 3, 2, 1]}"

puts "[5, 4, 3, 2, 1].merge_sort(&prc2) === [1, 2, 3, 4, 5] ==> #{[5, 4, 3, 2, 1].merge_sort(&prc2) === [1, 2, 3, 4, 5]}"

# Mergesort, if implemented to create arrays in the recursive calls,
# will create many of them, but they won't coexist at the same time.
# In every recursive call you create an array (or 2 depending on an
# implementation) for merging and they take no more than O(n) space,
# and then when the merging is done, these arrays are deleted and some
# new ones will be created after a moment in some other recursive call.
# If you counted how much space all the arrays that ever have been created
# took, it'd be O(n log n), but you don't need to care about this
# information - you don't need more than O(n) space, because when you
# need to create an array, all the other ones don't longer exist and
# don't occupy any memory. Note that you can simply declare 2 - or 3 -
# arrays in the beginning, each the length of n, and then store the
# sequence in one of them, while using the other for merging, it will
# improve the performance as well as show you beyond doubt there's no
# need for more than O(n) of memory.
