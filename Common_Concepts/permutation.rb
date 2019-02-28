require 'byebug'

class Array
  def permutations
    return [self] if self.length == 1

    perms = self[1..-1].permutations
    first_num = [self.first]
    total_perms = []

    perms.each do |perm|
      (0..perm.length).each do |id|
        first_half = perm[0...id]
        second_half = perm[id..-1]
        total_perms << first_half + first_num + second_half
      end
    end
    total_perms
  end
end

# class String
#   def permutations
#     # debugger
#     return [self] if length == 1
#     letters = self.chars
#
#     perms = letters[0..-2].permutations
#     last_char = [letters.last]
#     total_perms = []
#
#     perms.each do |perm|
#       (0..perm.length).each do |id|
#         first_half = perm[0...id]
#         second_half = perm[id..-1]
#         total_perms << first_half + last_char + second_half
#       end
#     end
#
#     total_perms
#   end
# end

# def split_string(string)
#   debugger
#   separated = string.chars
#   total_perms = []
#   def permutations(arr, total_perms)
#     return [arr] if arr.length == 1
#
#     perms = permutations(arr[1..-1], total_perms)
#     first_num = [arr[0]]
#
#     perms.each do |perm|
#       (0..perm.length).each do |id|
#         first_half = perm[0...id]
#         second_half = perm[id..-1]
#         total_perms << first_half + first_num + second_half
#       end
#     end
#     total_perms
#   end
#   permutations(separated, total_perms)
#   total_perms
# end

p [1, 2, 3, 4].permutations
# p "help".permutations
# p split_string('hello')
