class Array
  def my_bsearch(num)
    return nil if self.length == 0

    mid = self.length / 2
    if self[mid] == num
      return mid
    elsif self[mid] > num
      return self[0...mid].my_bsearch(num)
    else
      new_id = self[mid + 1..-1].my_bsearch(num)
      return new_id == nil ? nil : mid + new_id + 1
    end
  end
end

p [1, 3, 4, 5, 10, 11].my_bsearch(1)
p [1, 3, 4, 5, 10, 11].my_bsearch(3)
p [1, 3, 4, 5, 10, 11].my_bsearch(4)
p [1, 3, 4, 5, 10, 11].my_bsearch(5)
p [1, 3, 4, 5, 10, 11].my_bsearch(10)
p [1, 3, 4, 5, 10, 11].my_bsearch(11)
p [1, 3, 4, 5, 10, 11].my_bsearch(6)
p [1, 3, 4, 5, 10, 11].my_bsearch(0)
