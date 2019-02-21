require 'byebug'

class Array
  def quick_sort(&prc)
    return self if self.length <= 1
    # debugger
    prc ||= proc { |x, y| x <=> y }
    first_num = self.first
    left = self[1..-1].select { |x| prc.call(x, first) <= 0 }
    right = self[1..-1].select { |x| prc.call(x, first) == 1 }

    left.quick_sort(&prc) + [first_num] + right.quick_sort(&prc)
  end
end

p [5, 9, 1, 3, 10, 8].quick_sort
