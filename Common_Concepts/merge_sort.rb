

prc1 = Proc.new { |x, y| x <=> y }
prc2 = Proc.new { |x, y| y <=> x }

p [100, 101, 59, 70, 0, 98].merge_sort
puts "[1, 2, 3, 4, 5].merge_sort(&prc1) === [5, 4, 3, 2, 1] ==> #{[1, 2, 3, 4, 5].merge_sort(&prc1) === [5, 4, 3, 2, 1]}"

puts "[5, 4, 3, 2, 1].merge_sort(&prc2) === [1, 2, 3, 4, 5] ==> #{[5, 4, 3, 2, 1].merge_sort(&prc2) === [1, 2, 3, 4, 5]}"
