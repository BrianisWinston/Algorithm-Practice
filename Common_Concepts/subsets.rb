def subsets(arr)
  return [[]] if arr.empty?

  subs = subsets(arr[0...-1])
  first_num = [arr.last]
  new_subs = subs.map { |el| el + first_num }

  subs.concat(new_subs)
end

p subsets([1, 2, 3, 4])
