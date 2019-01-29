def subsets(arr)
  return [[]] if arr.empty?

  subs = subsets(arr[0..-2])
  new_subs = subs.map { |el| el + [arr.last] }

  subs.concat(new_subs)
end
p subsets([1, 2, 3])
