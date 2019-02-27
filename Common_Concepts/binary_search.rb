require 'byebug'

def my_bsearch(arr, num)
  return nil if arr.length == 0

  mid = arr.length / 2
  if arr[mid] == num
    return mid
  elsif arr[mid] > num
    my_bsearch(arr[0...mid], num)
  else
    res = my_bsearch(arr[mid + 1..-1], num)
    res.nil? ? nil : mid + 1 + res
  end
end

arr1 = [1, 3, 4, 5, 10, 11]
p my_bsearch(arr1, 10)
