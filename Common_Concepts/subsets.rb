require 'byebug'

def subsets(arr) # [ 1, 2, 3 ]
  return [[]] if arr.empty?
  # debugger
  take_one_out = arr[1..-1]
  subs = subsets(take_one_out) # [[], [3], [2], [2, 3]]
  new_subs = subs.map do |el| # [[1], [1, 3], [1, 2], [1, 2, 3]]
    [arr.first].concat(el)
  end
  answer = subs.concat(new_subs)
end

p subsets([1, 2, 3])
