require 'byebug'

class Array
  def my_bsearch(num)
    return nil if length == 0

    mid = length / 2
    if self[mid] == num
      return mid
    elsif self[mid] > num
      self[0...mid].my_bsearch(num)
    else
      res = self[mid + 1..-1].my_bsearch(num)
      res == nil ? nil : mid + 1 + res
    end
  end
end

p [1, 3, 4, 5, 10, 11].my_bsearch(10)
