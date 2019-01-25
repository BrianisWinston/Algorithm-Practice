def subsets(arr)
  return [[]] if arr.length == 0

  subs = subsets(arr[0..-2])
  new_subs = subs.map { |sub| sub + [arr.last] }
  return subs.concat(new_subs)
end
p subsets([1, 2, 3])
