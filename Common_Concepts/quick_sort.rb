require 'byebug'

class Array
  def quick_sort(&prc)
    # debugger
    return self if self.length <= 1

    prc ||= proc { |x, y| x <=> y }

    first_num = self[0]
    left = self[1..-1].select { |x| prc.call(first_num, x) == 1}
    right = self[1..-1].select { |x| prc.call(first_num, x) <= 0}

    left.quick_sort(&prc) + [first_num] + right.quick_sort(&prc)
  end
end

prc2 = Proc.new { |x, y| y <=> x }

p [5, 9, 1, 3, 10, 8].quick_sort
p [5, 9, 1, 3, 10, 8].quick_sort(&prc2)
