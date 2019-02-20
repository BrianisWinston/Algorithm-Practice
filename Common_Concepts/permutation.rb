require 'byebug'

class Array
  def permutations
    return [self] if self.length == 1
    # debugger
    perms = self[0..-2].permutations
    last = [self.last]
    total_perms = []
    perms.each do |perm|
      (0..perm.length).each do |id|
        first_half = perm[0...id]
        second_half = perm[id..-1]
        total_perms << first_half + last + second_half
      end
    end
    total_perms
  end
end
p [1, 2, 3, 4].permutations
