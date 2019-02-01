def subsets(arr)
  return [[]] if arr.empty?

  last_num = arr.last
  subs = subsets(arr[0...-1])
  new_subs = subs.map { |el| el + [last_num] }

  subs.concat(new_subs)
end

p subsets([1, 2, 3, 4])
