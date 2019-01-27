class Array
  def merge_sort(&prc)
    if !block_given?
      prc = Proc.new { |a, b| a <=> b }
    end

    return self if self.length == 1

    mid = self.length / 2
    left = self[0...mid].merge_sort(&prc)
    right = self[mid..-1].merge_sort(&prc)

    merge(left, right, &prc)
  end

  def merge(left, right, &prc)
    answer = []
    until (left.empty? || right.empty?) do
      if prc.call(left.first, right.first) <= 0
        answer << right.shift
      else
        answer << left.shift
      end
    end
    answer.concat(left)
    answer.concat(right)
  end
end

prc1 = Proc.new { |x, y| x <=> y }
prc2 = Proc.new { |x, y| y <=> x }

p [100, 101, 59, 70, 0, 98].merge_sort
puts "[1, 2, 3, 4, 5].merge_sort(&prc1) === [5, 4, 3, 2, 1]
 #{[1, 2, 3, 4, 5].merge_sort(&prc1) === [5, 4, 3, 2, 1]}"

 puts "[5, 4, 3, 2, 1].merge_sort(&prc2) === [1, 2, 3, 4, 5]
  #{[5, 4, 3, 2, 1].merge_sort(&prc2) === [1, 2, 3, 4, 5]}"
