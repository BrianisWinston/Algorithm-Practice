def subsets(arr)
  return [[]] if arr.length == 0

  subs = subsets(arr[0..-2])
  last = [arr.last]
  new_subs = subs.map { |sub| sub + last }

  new_subs.concat(subs)
end
p subsets([1, 2, 3, 4])
