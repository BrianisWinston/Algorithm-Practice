def subsets(arr)
  return [[]] if arr.empty?

  subs = subsets(arr[0...-1])
  last = [arr.last]
  new_subs = subs.map { |el| el + last }
  subs.concat(new_subs)
end
p subsets([1, 2, 3, 4])
