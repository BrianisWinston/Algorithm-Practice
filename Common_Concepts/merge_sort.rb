class Array
  def merge_sort(&prc)
    return self if self.length <= 1
    prc ||= Proc.new { |x, y| y <=> x }
    mid = self.length / 2
    left = self[0...mid].merge_sort(&prc)
    right = self[mid..-1].merge_sort(&prc)

    return merge(left, right, &prc)
  end

  def merge(left, right, &prc)
    answer = []
    until (left.empty? || right.empty?)
      if (prc.call(left[0], right[0]) <= 0)
        answer << right.shift
      else
        answer << left.shift
      end
    end
    answer.concat(left)
    answer.concat(right)
    answer
  end
end

prc1 = Proc.new { |x, y| x <=> y }
prc2 = Proc.new { |x, y| y <=> x }

p [100, 101, 59, 70, 0, 98].merge_sort
puts "[1, 2, 3, 4, 5].merge_sort(&prc1) === [5, 4, 3, 2, 1] ==> #{[1, 2, 3, 4, 5].merge_sort(&prc1) === [5, 4, 3, 2, 1]}"

puts "[5, 4, 3, 2, 1].merge_sort(&prc2) === [1, 2, 3, 4, 5] ==> #{[5, 4, 3, 2, 1].merge_sort(&prc2) === [1, 2, 3, 4, 5]}"
