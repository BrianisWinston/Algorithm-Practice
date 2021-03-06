require 'byebug'

# class Array
#   def bubble_sort(&prc)
#     # debugger
#     prc ||= proc { |x, y| x <=> y }
#
#     sorted = false
#     while sorted == false
#       sorted = true
#       (0..length).each do |id|
#         break if id + 1 >= length
#         if prc.call(self[id],self[id + 1]) == -1
#           self[id], self[id + 1] = self[id + 1], self[id]
#           sorted = false
#         end
#       end
#       sorted
#     end
#     self
#   end
# end

class Array
  def bubble_sort(&prc)
    # debugger
    prc = proc { |x, y| x <=> y } if prc == nil

    sorted = false
    while sorted == false
      sorted = true
      (0..self.length - 2).each do |id|
        if prc.call(self[id], self[id + 1]) == -1
          self[id], self[id + 1] = self[id + 1], self[id]
          sorted = false
        end
      end
      sorted
    end
    self
  end
end

p [1, 2, 3, 4, 5, 6, 7].bubble_sort
p [1, 2, 3, 4, 5, 6, 7].bubble_sort { |x, y| y <=> x }
p [7, 1, 8, 3, 0, 1].bubble_sort { |x, y| x <=> y }
