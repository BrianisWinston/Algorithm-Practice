require 'byebug'

def subsets(arr)
  return [[]] if arr.empty?

  subs = subsets(arr[1..-1])
  subs + subs.map { |el| [arr.first] + el }
end

p subsets([1, 2, 3])
