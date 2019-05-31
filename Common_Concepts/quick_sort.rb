require 'byebug'


prc2 = Proc.new { |x, y| y <=> x }

p [5, 9, 1, 3, 10, 8].quick_sort == [1, 3, 5, 8, 9, 10]
p [5, 9, 1, 3, 10, 8].quick_sort(&prc2) == [10, 9, 8, 5, 3, 1]
