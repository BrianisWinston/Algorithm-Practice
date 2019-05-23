require 'byebug'

# def subsets(arr)
#   # debugger
#   return [arr] if arr.length == 0
#
#   subs = subsets(arr[0..-2])
#   last_num = arr[-1]
#
#   new_subs = subs.map { |sub| sub + [last_num]}
#
#   subs.concat(new_subs)
# end

# def subsets(arr)
#   return [arr] if arr.length == 0
#
#   subs = subsets(arr[1..-1])
#   first_num = [arr[0]]
#
#   new_subs = subs.map { |sub| first_num + sub }
#
#   return subs.concat(new_subs)
# end

p subsets([1, 2, 3, 4])
