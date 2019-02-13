require 'byebug'

class Array
  def permutations
    return [self] if self.length <= 1

    perms = self[1..-1].permutations
    first_num = [self.first]
    total_perms = []
    perms.each do |el|
      (0..el.length).each do |id|
        first_half = el[0...id]
        second_half = el[id..-1]
        total_perms << first_half + first_num + second_half
      end
    end
    total_perms
  end
end

# class Array
#   def permutations
#     # debugger
#     return [self] if self.length <= 1
#
#     last_num = [self.last]
#     total_perms = []
#     perms = self[0..-2].permutations
#     perms.each { |el|
#       (0..el.length).each { |idx|
#         first_half = el[0...idx]
#         second_half = el[idx..-1]
#         total_perms << first_half + last_num + second_half
#       }
#     }
#     total_perms
#   end
# end
p [1, 2, 3].permutations
