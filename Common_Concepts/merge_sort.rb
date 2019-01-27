class Array
  def merge_sort(&prc)
  end
end

prc1 = Proc.new { |x, y| x <=> y }
prc2 = Proc.new { |x, y| y <=> x }

puts "[1, 2, 3, 4, 5].merge_sort(&prc1) === [5, 4, 3, 2, 1]
 #{merge_sort([1, 2, 3, 4, 5].merge_sert(&prc1)) === [5, 4, 3, 2, 1]}"

 puts "[5, 4, 3, 2, 1].merge_sort(&prc2) === [1, 2, 3, 4, 5]
  #{merge_sort([5, 4, 3, 2, 1].merge_sert(&prc2)) === [1, 2, 3, 4, 5]}"
