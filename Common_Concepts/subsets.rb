require 'byebug'

def subsets(arr)
  return [[]] if arr.empty?

  first = arr[0]
  sets = subsets(arr[1..-1])

  new_subs = sets.map { |el| [first] + el }
  sets.concat(new_subs)
end

p subsets([1, 2, 3])
